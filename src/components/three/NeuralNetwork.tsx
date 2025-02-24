'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line, Html } from '@react-three/drei';
import * as THREE from 'three';

interface Node {
  position: THREE.Vector3;
  connections: number[];
  speed: THREE.Vector3;
}

export function NeuralNetwork() {
  const linesRef = useRef<THREE.Group>(null);
  const nodesRef = useRef<THREE.Group>(null);

  // Create nodes and connections
  const { nodes, connections } = useMemo(() => {
    const nodes: Node[] = [];
    const connections: [number, number][] = [];
    const nodeCount = 50;

    // Create nodes in a 3D space
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 8
        ),
        connections: [],
        speed: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        ),
      });
    }

    // Create connections between nearby nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = nodes[i].position.distanceTo(nodes[j].position);
        if (distance < 5) {
          connections.push([i, j]);
          nodes[i].connections.push(j);
          nodes[j].connections.push(i);
        }
      }
    }

    return { nodes, connections };
  }, []);

  // Animation
  useFrame((state) => {
    if (!nodesRef.current) return;

    // Update node positions
    nodes.forEach((node, i) => {
      const nodeMesh = nodesRef.current?.children[i] as THREE.Mesh;
      if (!nodeMesh) return;

      // Move node
      node.position.add(node.speed);

      // Bounce off boundaries
      ['x', 'y', 'z'].forEach((axis) => {
        const limit = axis === 'x' ? 15 : 8;
        if (Math.abs(node.position[axis]) > limit) {
          node.speed[axis] *= -1;
          node.position[axis] = Math.sign(node.position[axis]) * limit;
        }
      });

      nodeMesh.position.copy(node.position);
    });

    // Update line positions
    if (linesRef.current) {
      connections.forEach((connection, i) => {
        const line = linesRef.current?.children[i] as THREE.Line;
        if (!line) return;

        const positions = new Float32Array([
          nodes[connection[0]].position.x,
          nodes[connection[0]].position.y,
          nodes[connection[0]].position.z,
          nodes[connection[1]].position.x,
          nodes[connection[1]].position.y,
          nodes[connection[1]].position.z,
        ]);

        line.geometry.setAttribute(
          'position',
          new THREE.BufferAttribute(positions, 3)
        );
        line.geometry.attributes.position.needsUpdate = true;
      });
    }
  });

  return (
    <group>
      {/* Lines */}
      <group ref={linesRef}>
        {connections.map((connection, i) => (
          <Line
            key={`line-${i}`}
            points={[
              [
                nodes[connection[0]].position.x,
                nodes[connection[0]].position.y,
                nodes[connection[0]].position.z,
              ],
              [
                nodes[connection[1]].position.x,
                nodes[connection[1]].position.y,
                nodes[connection[1]].position.z,
              ],
            ]}
            color="white"
            opacity={0.2}
            transparent
            lineWidth={1}
          />
        ))}
      </group>

      {/* Nodes */}
      <group ref={nodesRef}>
        {nodes.map((node, i) => (
          <mesh key={`node-${i}`} position={node.position}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshBasicMaterial
              color="#fff"
              transparent
              opacity={0.8}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}
