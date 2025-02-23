"use client";

import { motion } from "framer-motion";
import { Brain, Search, LineChart, Database, Zap, Code, Network } from "lucide-react";

export function AidrFeatures() {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Research",
      description: "Leverage cutting-edge machine learning algorithms for deep analysis and pattern recognition across complex datasets."
    },
    {
      icon: Search,
      title: "Intelligent Data Mining",
      description: "Automatically discover hidden insights and correlations in your data using advanced natural language processing."
    },
    {
      icon: LineChart,
      title: "Predictive Analytics",
      description: "Generate accurate forecasts and predictions using historical data and advanced statistical models."
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
      description: "Seamlessly integrate with your existing tools and workflows through flexible APIs and connectors."
    }
  ];

  return (
    <section className="w-full py-24 bg-black/50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Powerful Capabilities</h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            AIDR combines advanced AI research capabilities with powerful data analysis tools to deliver unprecedented insights and automation.
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
                <feature.icon className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 pt-16 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">How AIDR Works</h3>
              <p className="text-white/60 leading-relaxed">
                AIDR uses a combination of advanced machine learning models, natural language processing, and distributed computing to analyze complex datasets and generate actionable insights.
              </p>
              <ul className="space-y-4">
                {[
                  "Processes structured and unstructured data",
                  "Identifies patterns and anomalies",
                  "Generates detailed reports and visualizations",
                  "Continuously learns and improves from new data",
                  "Integrates with existing data pipelines"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3 text-white/60"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-square bg-gradient-to-br from-blue-500/20 via-transparent to-transparent rounded-lg p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-30%,rgba(59,130,246,0.15),transparent)]" />
              <Network className="w-full h-full text-blue-500/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}