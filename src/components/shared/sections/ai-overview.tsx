"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Separator } from "@/components/ui/separator";

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
    <>
      <section className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-black py-24">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_-100px,rgba(59,130,246,0.1),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-black via-black to-black/90" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.1]" />

        <div className="container relative z-10 max-w-6xl mx-auto px-4">
          {/* Header with separator */}
          <div className="flex items-center gap-4 mb-16">
            <span className="text-3xl text-white font-light tracking-wide">AI Capabilities</span>
            <div className="h-[1px] flex-grow bg-white/10" />
            <Link 
              href="/technology" 
              className="text-lg text-white hover:text-white/80 transition-colors flex items-center gap-2 group font-light tracking-wide"
            >
              Our Technology
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative p-4 md:p-6 rounded-lg border-2 border-white/[0.15] bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 h-[240px] flex flex-col items-center text-center group shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.15] to-transparent opacity-50 pointer-events-none" />
                  
                  {/* Icon Container */}
                  <div className="relative p-2.5 rounded-lg backdrop-blur-sm border border-white/20 mb-3 md:mb-4 bg-white/[0.05]">
                    {capability.icon("w-5 h-5 md:w-6 md:h-6 text-white/90")}
                  </div>
                  
                  <h3 className="text-xl font-light text-white mb-2">
                    {capability.title}
                  </h3>
                  <p className="text-sm text-white/60 mb-auto">
                    {capability.description}
                  </p>
                  
                  {/* Metric */}
                  <div className="mt-4 pt-4 border-t border-white/10 w-full">
                    <div className="flex items-baseline justify-center gap-1.5">
                      <span className="text-xl font-semibold text-white">
                        {capability.metric}
                      </span>
                      <span className="text-xs text-white/60">
                        {capability.metricLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Learn More Button */}
          <motion.div 
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link 
              href="/technology"
              className="text-lg text-white/60 hover:text-white transition-colors border-b border-white/20 hover:border-white/60 pb-0.5 flex items-center gap-2 font-light tracking-wider group"
            >
              Learn More
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Section Separator */}
      <div className="w-full py-12">
        <Separator className="w-full border-t border-white" />
      </div>
    </>
  );
} 