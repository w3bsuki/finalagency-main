"use client";

import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { motion, useMotionTemplate } from "framer-motion";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export function SpotlightCard({
  children,
  className,
  spotlightColor = "rgba(255,255,255,0.1)"
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={cn(
        "relative w-full rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 shadow-2xl",
        className
      )}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${position.x}px ${position.y}px,
              ${spotlightColor},
              transparent 80%
            )
          `,
          opacity: opacity,
        }}
      />
      {children}
    </motion.div>
  );
} 