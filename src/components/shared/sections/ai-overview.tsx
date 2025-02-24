"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const capabilities = [
  {
    title: "Natural Language",
    description: "Advanced NLP for human-like communication",
    icon: (className?: string) => (
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        className={className}
        strokeWidth="1"
      >
        <path d="M12 4C7 4 3 8 3 13C3 18 7 22 12 22C17 22 21 18 21 13" strokeLinecap="round"/>
        <path d="M12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12" strokeLinecap="round"/>
        <path d="M12 13L16 9" strokeLinecap="round"/>
      </svg>
    ),
    metric: "98%",
    metricLabel: "Accuracy"
  },
  {
    title: "Machine Learning",
    description: "Self-improving algorithms for automation",
    icon: (className?: string) => (
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        className={className}
        strokeWidth="1"
      >
        <path d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z" strokeLinecap="round"/>
        <path d="M12 8V16" strokeLinecap="round"/>
        <path d="M8 10L12 12L16 10" strokeLinecap="round"/>
      </svg>
    ),
    metric: "2.5x",
    metricLabel: "Faster Insights"
  },
  {
    title: "Predictive Analytics",
    description: "Forecast trends and optimize maintenance",
    icon: (className?: string) => (
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        className={className}
        strokeWidth="1"
      >
        <path d="M3 20L21 20" strokeLinecap="round"/>
        <path d="M3 20L9 8L15 14L21 4" strokeLinecap="round"/>
      </svg>
    ),
    metric: "85%",
    metricLabel: "Prediction Rate"
  }
];

export function AiOverview() {
  return (
    <section className="relative w-full min-h-screen bg-black py-12 md:py-24">
      <div className="container relative z-10 max-w-6xl mx-auto px-4 h-full flex flex-col">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-4xl md:text-6xl text-white font-light">
            AI Capabilities
          </h2>
        </div>

        {/* Capabilities Grid */}
        <div className="flex-grow flex items-center py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative p-6 rounded-lg border-2 border-white/[0.15] bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 flex flex-col items-center text-center group shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.15] to-transparent opacity-50 pointer-events-none" />
                  
                  {/* Icon Container */}
                  <div className="relative p-3 rounded-lg backdrop-blur-sm border border-white/20 mb-4 bg-white/[0.05]">
                    {capability.icon("w-6 h-6 text-white/90")}
                  </div>
                  
                  <h3 className="text-xl font-light text-white mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-base text-white/60 mb-6">
                    {capability.description}
                  </p>
                  
                  {/* Metric */}
                  <div className="mt-auto pt-4 border-t border-white/10 w-full">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-xl font-semibold text-white">
                        {capability.metric}
                      </span>
                      <span className="text-sm text-white/60">
                        {capability.metricLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-8 md:mt-16">
          <ShimmerButton
            className="text-base md:text-lg"
            shimmerColor="#ffffff"
            shimmerDuration="2s"
            onClick={() => window.location.href = '/technology'}
          >
            <span className="text-white/90 font-medium flex items-center gap-2">
              Explore Technology
              <ArrowRight className="w-5 h-5" />
            </span>
          </ShimmerButton>
        </div>
      </div>
    </section>
  );
}