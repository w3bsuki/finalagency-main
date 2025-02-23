"use client";

import { motion } from "framer-motion";
import { Box, Workflow, Zap, LineChart, Settings, GitBranch, Network } from "lucide-react";

export function AidoFeatures() {
  const features = [
    {
      icon: Workflow,
      title: "Process Automation",
      description: "Automate complex workflows and business processes with intelligent decision-making capabilities."
    },
    {
      icon: LineChart,
      title: "Performance Analytics",
      description: "Monitor and analyze operational metrics in real-time to identify optimization opportunities."
    },
    {
      icon: Settings,
      title: "Smart Optimization",
      description: "Automatically adjust and optimize processes based on performance data and business rules."
    },
    {
      icon: GitBranch,
      title: "Workflow Management",
      description: "Design and manage sophisticated process flows with built-in version control and rollback."
    },
    {
      icon: Zap,
      title: "Real-time Monitoring",
      description: "Track process performance and receive instant alerts on potential bottlenecks or issues."
    },
    {
      icon: Box,
      title: "Resource Allocation",
      description: "Optimize resource distribution and utilization across your operations automatically."
    }
  ];

  return (
    <section className="w-full py-24 bg-black/50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Process Excellence</h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            AIDO brings intelligent process optimization to your operations, maximizing efficiency and reducing operational costs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative p-8 border border-white/10 bg-black rounded-lg backdrop-blur-sm hover:bg-white/[0.02] transition-all duration-300">
                <feature.icon className="w-8 h-8 text-pink-500 mb-4" />
                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 pt-16 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">How AIDO Works</h3>
              <p className="text-white/60 leading-relaxed">
                AIDO leverages advanced process mining and machine learning to analyze, optimize, and automate your business operations in real-time.
              </p>
              <ul className="space-y-4">
                {[
                  "Maps and analyzes existing processes",
                  "Identifies inefficiencies and bottlenecks",
                  "Suggests and implements optimizations",
                  "Monitors performance metrics",
                  "Adapts to changing conditions"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3 text-white/60"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-pink-500" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-square bg-gradient-to-br from-pink-500/20 via-transparent to-transparent rounded-lg p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-30%,rgba(236,72,153,0.15),transparent)]" />
              <Network className="w-full h-full text-pink-500/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}