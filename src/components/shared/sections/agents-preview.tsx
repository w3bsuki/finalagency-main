"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BorderBeamButton } from "@/components/ui/border-beam-button";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const agents = [
  {
    name: "AIDR",
    description: "Most Powerful Agent",
    longDescription: "Advanced AI research and data analysis\nOptimized for complex problem-solving\nPowered by cutting-edge algorithms",
    href: "/agents/aidr",
    icon: (className?: string) => (
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        className={className}
        strokeWidth="1"
      >
        <path d="M12 4C7 4 3 8 3 13C3 18 7 22 12 22C17 22 21 18 21 13" strokeLinecap="round"/>
        <path d="M12 4C17 4 21 8 21 13" strokeLinecap="round" strokeDasharray="1 3"/>
        <path d="M12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8Z"/>
      </svg>
    ),
    color: "white"
  },
  {
    name: "AIDO",
    description: "Process Optimization Agent",
    longDescription: "AI-powered operational excellence\nStreamlined workflow automation\nReal-time performance insights",
    href: "/agents/aido",
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
    color: "white"
  },
  {
    name: "AIDY",
    description: "Customer Support Agent",
    longDescription: "24/7 intelligent assistance\nReal-time response and support\nSeamless customer experience",
    href: "/agents/aidy",
    icon: (className?: string) => (
      <svg 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        className={className}
        strokeWidth="1"
      >
        <path d="M12 4C6.48 4 2 8.48 2 14C2 16.25 2.99 18.28 4.5 19.75" strokeLinecap="round"/>
        <path d="M19.5 19.75C21.01 18.28 22 16.25 22 14C22 8.48 17.52 4 12 4" strokeLinecap="round"/>
        <path d="M12 14C12.5523 14 13 13.5523 13 13C13 12.4477 12.5523 12 12 12C11.4477 12 11 12.4477 11 13C11 13.5523 11.4477 14 12 14Z" />
        <path d="M8 13C8 13 8 14 12 14C16 14 16 13 16 13" strokeLinecap="round"/>
      </svg>
    ),
    color: "white"
  }
];

export function AgentsPreview() {
  return (
    <section className="relative w-full min-h-screen bg-black py-12 md:py-24">
      <div className="container relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-4xl md:text-6xl text-white font-light">
            Agents
          </h2>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 place-items-center">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-full max-w-sm"
            >
              <motion.div 
                className="relative p-4 md:p-6 rounded-lg border-2 border-white/[0.15] bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 flex flex-col shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.15] to-transparent opacity-50 pointer-events-none" />
                
                {/* Icon Container */}
                <div className="relative p-2.5 rounded-lg backdrop-blur-sm border border-white/10 mb-4">
                  {agent.icon("w-6 h-6 text-white/80")}
                </div>
                
                {/* Content Container */}
                <div className="flex-1 flex flex-col items-center relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-2xl md:text-3xl font-light text-white">
                      {agent.name}
                    </h3>
                    <div className="relative flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <div className="absolute w-2 h-2 rounded-full bg-green-400 animate-ping" />
                    </div>
                  </div>
                  
                  <p className="text-base text-white/70 mb-3 text-center">
                    {agent.description}
                  </p>
                  
                  <div className="text-sm text-white/50 leading-relaxed text-center whitespace-pre-line">
                    {agent.longDescription}
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-4 w-full px-4 relative z-10">
                  <BorderBeamButton 
                    href={agent.href}
                    className="w-full text-[11px] font-light tracking-wider py-1"
                    variant="outline"
                    size="sm"
                    beamSize={30}
                    beamDuration={6}
                  >
                    <span className="flex items-center justify-center gap-1.5">
                      {agent.name === "AIDY" ? "Demo" : `Meet ${agent.name}`}
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </span>
                  </BorderBeamButton>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-8 md:mt-16">
          <ShimmerButton
            className="text-base md:text-lg"
            shimmerColor="#ffffff"
            shimmerDuration="2s"
            onClick={() => window.location.href = '/agents'}
          >
            <span className="text-white/90 font-medium flex items-center gap-2">
              Meet Our Agents
              <ArrowRight className="w-5 h-5" />
            </span>
          </ShimmerButton>
        </div>
      </div>
    </section>
  );
}