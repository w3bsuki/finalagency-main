'use client';

import { motion } from "framer-motion";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Bot, Zap, Brain, Sparkles, MessageSquare, Clock } from "lucide-react";
import Link from "next/link";

const agents = [
  {
    name: "AIDR",
    description: "Most Powerful Agent",
    longDescription: "Advanced AI research and data analysis\nOptimized for complex problem-solving\nPowered by cutting-edge algorithms",
    href: "/agents/aidr",
    icon: Clock,
    buttonText: "Meet AIDR",
  },
  {
    name: "AIDO",
    description: "Operations Agent",
    longDescription: "AI-powered operational excellence\nStreamlined workflow automation\nReal-time performance insights",
    href: "/agents/aido",
    icon: Zap,
    buttonText: "Meet AIDO",
  },
  {
    name: "AIDY",
    description: "Support Agent",
    longDescription: "24/7 intelligent assistance\nReal-time response and support\nSeamless customer experience",
    href: "/agents/aidy",
    icon: MessageSquare,
    buttonText: "Demo",
  }
];

const benefits = [
  {
    title: "24/7 Availability",
    description: "Our AI agents work round the clock, ensuring your business never sleeps.",
    icon: Clock
  },
  {
    title: "Instant Responses",
    description: "Get immediate answers and solutions without any waiting time.",
    icon: Zap
  },
  {
    title: "Smart Learning",
    description: "Our agents continuously learn and adapt to your specific needs.",
    icon: Brain
  },
  {
    title: "Natural Interaction",
    description: "Communicate naturally with AI that understands context and nuance.",
    icon: MessageSquare
  }
];

export default function AgentsPage() {
  return (
    <main className="flex flex-col min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_-100px,rgba(59,130,246,0.1),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-black via-black to-black/90" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-[0.1]" />

        <div className="container max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-8 mb-16 relative z-10"
          >
            <h1 className="text-6xl md:text-7xl font-display bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
              Meet Our Agents
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Discover our specialized AI agents, each designed with unique capabilities to transform your operations.
            </p>
          </motion.div>

          {/* Agents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {agents.map((agent) => (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative p-4 md:p-6 rounded-lg border-2 border-white/[0.15] bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 flex flex-col items-center text-center shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.15] to-transparent opacity-50 pointer-events-none rounded-lg" />
                
                {/* Icon Container */}
                <div className="relative p-2.5 rounded-lg backdrop-blur-sm border border-white/10 mb-4 bg-black/30">
                  <agent.icon className="w-6 h-6 text-white/80" />
                </div>

                {/* Content */}
                <div className="relative flex-1 space-y-4 w-full">
                  <div className="flex items-center justify-center gap-2">
                    <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                      {agent.name}
                    </h2>
                    <div className="relative flex items-center">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <div className="absolute w-2 h-2 rounded-full bg-green-400 animate-ping" />
                    </div>
                  </div>
                  <p className="text-lg font-medium text-white/80">{agent.description}</p>
                  <p className="text-white/60 whitespace-pre-line">{agent.longDescription}</p>
                </div>

                {/* Button */}
                <Link 
                  href={agent.href}
                  className="relative mt-6 inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-300 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 group w-full sm:w-auto"
                >
                  <span>{agent.buttonText}</span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Benefits Section */}
          <section className="mt-24 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-4">
                Why Choose Our Agents?
              </h2>
              <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Experience the power of AI agents that understand, learn, and deliver results
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative p-6 rounded-lg border-2 border-white/[0.15] bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 text-center group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.15] to-transparent opacity-50 pointer-events-none rounded-lg" />
                  <benefit.icon className="w-8 h-8 text-white/80 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-white/60">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-24 relative z-10">
            <div className="relative p-8 md:p-12 rounded-lg border-2 border-white/[0.15] bg-black/50 backdrop-blur-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.15] to-transparent opacity-50 pointer-events-none" />
              <div className="relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl font-display text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-lg text-white/60 text-center max-w-2xl mx-auto mb-8">
                  Transform your business with our intelligent AI agents. Let's build the future together.
                </p>
                <div className="flex justify-center gap-4">
                  <RainbowButton size="lg">
                    Try Our Agents
                  </RainbowButton>
                  <RainbowButton size="lg" variant="outline">
                    Learn More
                  </RainbowButton>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}