'use client';

import { Canvas } from '@react-three/fiber';
import { NeuralNetwork } from '../three/NeuralNetwork';
import { motion } from 'framer-motion';
import { Suspense } from 'react';

export function Hero() {
  return (
    <div className="relative w-full h-screen bg-[#000] overflow-hidden">
      {/* Neural Network Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 20], fov: 45 }}>
          <Suspense fallback={null}>
            <NeuralNetwork />
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              Next Generation
              <br />
              AI Solutions
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/60 mb-12 max-w-3xl mx-auto"
          >
            Transforming businesses with cutting-edge artificial intelligence and automation
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition-colors">
              Get Started
            </button>
            <button className="px-8 py-4 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-colors">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
