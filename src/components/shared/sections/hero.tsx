"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { useRouter } from "next/navigation";

export function HeroSection() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-[0.15]" />
      </div>

      {/* Content Container */}
      <div className="relative w-full flex flex-col items-center px-4">
        {/* Logo Container */}
        <div className="w-full max-w-[1400px] h-[45vh] md:h-[55vh] relative">
          <TextHoverEffect 
            text="SYNTAI" 
            className="text-white"
          />
        </div>

        {/* Bottom Content */}
        <div className="flex flex-col items-center gap-6 mt-4">
          <motion.h2
            className="text-3xl md:text-4xl text-white/80 font-light tracking-wide text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Next-Gen AI Solutions
          </motion.h2>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-8 md:gap-12">
            <div className="flex flex-col gap-4 md:flex-row md:gap-8">
              <ShimmerButton
                className="w-full md:w-[140px] text-lg"
                shimmerColor="#ffffff"
                shimmerDuration="2s"
                onClick={() => router.push("/solutions")}
              >
                <span className="text-white/90 font-medium">Services</span>
              </ShimmerButton>
              <ShimmerButton
                className="w-full md:w-[140px] text-lg"
                shimmerColor="#ffffff"
                shimmerDuration="2s"
                onClick={() => router.push("/agents")}
              >
                <span className="text-white/90 font-medium">Agents</span>
              </ShimmerButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 