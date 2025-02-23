"use client";

import { motion } from "framer-motion";
import { MessagesSquare, Users, Brain, Clock, Sparkles, Globe, Network } from "lucide-react";

export function AidyFeatures() {
  const features = [
    {
      icon: MessagesSquare,
      title: "Intelligent Conversations",
      description: "Handle complex customer inquiries with natural language understanding and contextual responses."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Provide round-the-clock support to customers across all time zones without interruption."
    },
    {
      icon: Brain,
      title: "Smart Learning",
      description: "Continuously learn from interactions to improve response accuracy and customer satisfaction."
    },
    {
      icon: Users,
      title: "Multi-Channel Support",
      description: "Seamlessly engage with customers across email, chat, social media, and other platforms."
    },
    {
      icon: Sparkles,
      title: "Personalized Experience",
      description: "Deliver tailored support based on customer history, preferences, and behavior patterns."
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Communicate effectively with customers in multiple languages with natural translations."
    }
  ];

  return (
    <section className="w-full py-24 bg-black/50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Customer Experience</h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            AIDY transforms customer support with intelligent automation and personalized interactions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative p-8 border border-white/10 bg-black rounded-lg backdrop-blur-sm hover:bg-white/[0.02] transition-all duration-300">
                <feature.icon className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 pt-16 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">How AIDY Works</h3>
              <p className="text-white/60 leading-relaxed">
                AIDY combines advanced natural language processing with machine learning to provide intelligent, context-aware customer support.
              </p>
              <ul className="space-y-4">
                {[
                  "Understands customer intent and context",
                  "Provides instant, accurate responses",
                  "Learns from every interaction",
                  "Escalates complex issues when needed",
                  "Maintains conversation history"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3 text-white/60"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-square bg-gradient-to-br from-green-500/20 via-transparent to-transparent rounded-lg p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-30%,rgba(34,197,94,0.15),transparent)]" />
              <Network className="w-full h-full text-green-500/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}