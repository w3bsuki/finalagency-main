'use client';

import { motion } from "framer-motion";
import { CircleSlash2, Brain, Search, LineChart, Database, Zap, Code, Network } from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";

export default function AidrPage() {
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-white/80 mb-6 border border-white/10">
                <CircleSlash2 className="w-4 h-4" />
                <span className="text-sm font-medium">Most Powerful</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                Meet AIDR
                <br />
                <span className="text-white/80">Your Research Powerhouse</span>
              </h1>
              <p className="text-lg text-white/60 mb-8 max-w-lg">
                Experience the future of AI-powered research with AIDR. Advanced analytics, intelligent data processing, and cutting-edge solutions at your fingertips.
              </p>
              <div className="flex flex-wrap gap-4">
                <RainbowButton size="lg">
                  Get Started
                </RainbowButton>
                <RainbowButton size="lg" variant="outline">
                  Learn More
                </RainbowButton>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-lg bg-gradient-to-br from-white/10 via-transparent to-transparent p-8 border-2 border-white/[0.15] backdrop-blur-sm">
                <div className="absolute inset-0 bg-[radial-gradient(circle_400px_at_50%_50%,rgba(255,255,255,0.1),transparent)]" />
                <Network className="w-full h-full text-white/20" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How AIDR Works Section */}
      <section className="w-full py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_100%,rgba(255,255,255,0.1),transparent)]" />
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
              How AIDR Works
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              AIDR combines advanced AI research capabilities with powerful data analysis tools to deliver unprecedented insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Advanced AI Research",
                description: "Leverage cutting-edge machine learning algorithms for deep analysis and pattern recognition."
              },
              {
                icon: Search,
                title: "Intelligent Data Mining",
                description: "Automatically discover hidden insights and correlations using advanced natural language processing."
              },
              {
                icon: LineChart,
                title: "Predictive Analytics",
                description: "Generate accurate forecasts and predictions using historical data and statistical models."
              },
              {
                icon: Database,
                title: "Large-Scale Processing",
                description: "Process and analyze massive datasets efficiently with distributed computing capabilities."
              },
              {
                icon: Zap,
                title: "Real-time Analysis",
                description: "Get instant insights with real-time data processing and continuous learning algorithms."
              },
              {
                icon: Code,
                title: "Custom Integration",
                description: "Seamlessly integrate with your existing tools and workflows through flexible APIs."
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="relative p-8 rounded-lg border-2 border-white/[0.15] bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.15] to-transparent opacity-50 pointer-events-none" />
                  <feature.icon className="w-8 h-8 text-white/80 mb-4" />
                  <h3 className="text-xl font-medium mb-2 text-white">{feature.title}</h3>
                  <p className="text-white/60 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 border-y border-white/10 bg-black/50 backdrop-blur-sm">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "99%", label: "Accuracy" },
              { value: "24/7", label: "Availability" },
              { value: "100x", label: "Faster Analysis" },
              { value: "∞", label: "Possibilities" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-2">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_100%,rgba(255,255,255,0.1),transparent)]" />
        <div className="container max-w-6xl mx-auto px-4">
          <div className="relative p-8 md:p-12 rounded-lg border-2 border-white/[0.15] bg-black/50 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.15] to-transparent opacity-50 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-6">
                Ready to Supercharge Your Research?
              </h2>
              <p className="text-lg text-white/60 text-center max-w-2xl mx-auto mb-8">
                Join the future of AI-powered research and unlock the full potential of your data with AIDR.
              </p>
              <div className="flex justify-center">
                <RainbowButton size="lg">
                  Get Started Now
                </RainbowButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}