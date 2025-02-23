"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BorderBeam } from "@/components/ui/border-beam";

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
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-black py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_-100px,rgba(147,51,234,0.1),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-black via-black to-black/90" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.1]" />

      <div className="container relative z-10 max-w-6xl mx-auto px-4">
        {/* Header with separator */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-3xl text-white font-light tracking-wide">Solutions</span>
          <div className="h-[1px] flex-grow bg-white/10" />
          <Link 
            href="/solutions" 
            className="text-lg text-white hover:text-white/80 transition-colors flex items-center gap-2 group font-light tracking-wide"
          >
            View All
            <ArrowRight className="w-5 h-5 text-white group-hover:text-white/80 transition-colors group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
              }}
              className="w-full"
            >
              <Link href={solution.href} className="block group">
                <div className="relative p-4 md:p-6 rounded-lg border-2 border-white/[0.15] bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 h-[280px] flex flex-col items-center text-center overflow-hidden shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.15] to-transparent opacity-50 pointer-events-none" />
                  
                  {/* Icon Container */}
                  <div className="relative p-2.5 rounded-lg backdrop-blur-sm border border-white/20 mb-4 bg-white/[0.05] w-[44px] h-[44px] flex items-center justify-center">
                    {solution.icon("w-6 h-6 text-white/90")}
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-light text-white mb-3 relative z-10">
                    {solution.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/70 mb-auto relative z-10 max-w-[280px] whitespace-pre-line leading-relaxed">
                    {solution.description}
                  </p>
                  
                  {/* Separator Line */}
                  <div className="w-full h-px bg-white/10 mb-4 relative z-10" />
                  
                  {/* Metric */}
                  <div className="flex items-center justify-between w-full relative z-10 px-2 md:px-0 h-[24px]">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-lg md:text-xl font-semibold text-white">
                        {solution.metric}
                      </span>
                      <span className="text-xs md:text-sm text-white/70">
                        {solution.metricLabel}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-white/70 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Minimalist CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-2xl mx-auto text-center px-4 md:px-0"
        >
          <div className="relative p-4 md:p-6 rounded-lg border-2 border-white/[0.15] bg-black/50 backdrop-blur-sm overflow-hidden shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.15] to-transparent opacity-50 pointer-events-none" />
            <BorderBeam 
              colorFrom="rgba(255, 255, 255, 0.4)"
              colorTo="rgba(255, 255, 255, 0.2)"
              duration={6}
              size={150}
            />
            <h3 className="text-xl md:text-2xl font-light text-white mb-1 relative z-10">
              Ready to transform your business?
            </h3>
            <p className="text-sm md:text-base text-white/70 mb-4 relative z-10">
              Get started with our AI solutions today
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm md:text-base text-white hover:text-white/80 transition-colors"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}