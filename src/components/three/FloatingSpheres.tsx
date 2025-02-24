'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export function FloatingSpheres() {
  const sphereRefs = useRef<THREE.Mesh[]>([]);
  const positions = [
    [-4, 2, -5],
    [4, -2, -3],
    [-2, -3, -4],
    [3, 3, -6],
    [-3, 0, -5],
  ];

  useFrame((state) => {
    sphereRefs.current.forEach((sphere, i) => {
      const time = state.clock.getElapsedTime();
      sphere.position.y += Math.sin(time + i * 1000) * 0.002;
      sphere.rotation.x += 0.001;
      sphere.rotation.y += 0.001;
    });
  });

  return (
    <>
      {positions.map((pos, i) => (
        <mesh
          key={i}
          ref={(el) => (sphereRefs.current[i] = el as THREE.Mesh)}
          position={pos as [number, number, number]}
        >
          <Sphere args={[1, 32, 32]} scale={[0.5, 0.5, 0.5]}>
            <MeshDistortMaterial
              color={i % 2 === 0 ? "#ffffff" : "#000000"}
              roughness={0.1}
              metalness={0.8}
              distort={0.4}
              speed={2}
            />
          </Sphere>
        </mesh>
      ))}
    </>
  );
}
