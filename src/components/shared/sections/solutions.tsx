"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const solutions = [
  {
    title: "Business",
    description: "AI automations and analytics\nfor growth and efficiency",
    icon: (className?: string) => (
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        className={className}
        strokeWidth="1"
      >
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16" strokeLinecap="round"/>
        <path d="M12 7v8" strokeLinecap="round"/>
        <path d="M8 10h8" strokeLinecap="round"/>
      </svg>
    ),
    metric: "40%",
    metricLabel: "Cost Reduction",
    href: "/solutions/business"
  },
  {
    title: "Industry",
    description: "Smart manufacturing solutions\nfor process optimization",
    icon: (className?: string) => (
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        className={className}
        strokeWidth="1"
      >
        <path d="M20 16V8l-4-4H4v16h16" strokeLinecap="round"/>
        <path d="M8 8h4" strokeLinecap="round"/>
        <path d="M8 12h8" strokeLinecap="round"/>
        <path d="M8 16h4" strokeLinecap="round"/>
      </svg>
    ),
    metric: "85%",
    metricLabel: "Efficiency Gain",
    href: "/solutions/industry"
  },
  {
    title: "Government",
    description: "Secure AI implementations\nfor public sector needs",
    icon: (className?: string) => (
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        className={className}
        strokeWidth="1"
      >
        <path d="M12 3L3 7v2l9 4 9-4V7l-9-4z" strokeLinecap="round"/>
        <path d="M3 14l9 4 9-4" strokeLinecap="round"/>
        <path d="M3 10l9 4 9-4" strokeLinecap="round"/>
      </svg>
    ),
    metric: "99.9%",
    metricLabel: "Security",
    href: "/solutions/government"
  }
];

export function Solutions() {
  return (
    <section className="relative w-full min-h-screen bg-black py-12 md:py-24">
      <div className="container relative z-10 max-w-6xl mx-auto px-4 h-full flex flex-col">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-4xl md:text-6xl text-white font-light">
            Solutions
          </h2>
        </div>

        {/* Solutions Grid */}
        <div className="flex-grow flex items-center py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Link href={solution.href} className="block h-full">
                  <div className="relative p-6 rounded-lg border-2 border-white/[0.15] bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 flex flex-col items-center text-center group shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.15] to-transparent opacity-50 pointer-events-none" />
                    
                    {/* Icon Container */}
                    <div className="relative p-3 rounded-lg backdrop-blur-sm border border-white/20 mb-4 bg-white/[0.05]">
                      {solution.icon("w-6 h-6 text-white/90")}
                    </div>
                    
                    <h3 className="text-xl font-light text-white mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-base text-white/60 mb-6">
                      {solution.description}
                    </p>
                    
                    {/* Metric */}
                    <div className="mt-auto pt-4 border-t border-white/10 w-full">
                      <div className="flex items-baseline justify-center gap-2">
                        <span className="text-xl font-semibold text-white">
                          {solution.metric}
                        </span>
                        <span className="text-sm text-white/60">
                          {solution.metricLabel}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
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
            onClick={() => window.location.href = '/solutions'}
          >
            <span className="text-white/90 font-medium flex items-center gap-2">
              View All Solutions
              <ArrowRight className="w-5 h-5" />
            </span>
          </ShimmerButton>
        </div>
      </div>
    </section>
  );
}