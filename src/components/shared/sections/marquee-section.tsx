"use client";

import { motion } from "framer-motion";

export function MarqueeSection() {
  const text = "SYNTAI • SYNTAI • SYNTAI • SYNTAI • SYNTAI • SYNTAI • SYNTAI • ";
  
  return (
    <div className="relative w-full overflow-hidden bg-black py-24">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-[15%] bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-[15%] bg-gradient-to-l from-black to-transparent z-10" />
      
      {/* Marquee container */}
      <div className="flex">
        <div className="animate-marquee whitespace-pre text-[60px] md:text-[100px] font-bold tracking-tight select-none"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.2) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 30px rgba(255,255,255,0.05)',
            letterSpacing: '0.1em'
          }}
        >
          {text + text} {/* Duplicate for seamless loop */}
        </div>
      </div>
    </div>
  );
}