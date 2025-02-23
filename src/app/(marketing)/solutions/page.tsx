'use client';

import { motion } from "framer-motion";
import { Building2, Factory, Landmark, BarChart, Clock, DollarSign, Zap, Shield, Brain2, TrendingUp, LockKeyhole, Users, Cog, Cpu, FileText, Building, Database } from "lucide-react";
import Link from "next/link";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { useState } from "react";

const sectors = [
  { id: 'business', name: 'Business', icon: Building2 },
  { id: 'industry', name: 'Industry', icon: Factory },
  { id: 'government', name: 'Government', icon: Landmark }
] as const;

type SectorId = typeof sectors[number]['id'];

const solutions: Record<SectorId, Array<{
  name: string;
  description: string;
  longDescription: string;
  href: string;
  icon: any;
  stats: string[];
}>> = {
  business: [
    {
      name: "Business Growth",
      description: "Scale Your Operations",
      longDescription: "Automate repetitive tasks\nEnhance decision-making\nReduce operational costs",
      href: "/solutions/business-growth",
      icon: TrendingUp,
      stats: ["40% Cost Reduction", "2x Productivity", "24/7 Support"]
    },
    {
      name: "Smart Analytics",
      description: "Data-Driven Decisions",
      longDescription: "Real-time business intelligence\nPredictive analytics\nCustomer insights",
      href: "/solutions/analytics",
      icon: BarChart,
      stats: ["85% Faster Analysis", "95% Accuracy", "360° View"]
    },
    {
      name: "Digital Transformation",
      description: "Future-Ready Solutions",
      longDescription: "Cloud integration\nWorkflow automation\nDigital optimization",
      href: "/solutions/digital",
      icon: Cpu,
      stats: ["60% More Efficient", "99% Uptime", "Rapid Deployment"]
    }
  ],
  industry: [
    {
      name: "Industry 4.0",
      description: "Smart Manufacturing",
      longDescription: "Predictive maintenance\nQuality control automation\nReal-time monitoring",
      href: "/solutions/industry",
      icon: Cog,
      stats: ["50% Less Downtime", "99% Accuracy", "30% Cost Savings"]
    },
    {
      name: "Supply Chain AI",
      description: "Intelligent Logistics",
      longDescription: "Inventory optimization\nDemand forecasting\nRoute optimization",
      href: "/solutions/supply-chain",
      icon: Database,
      stats: ["40% Stock Reduction", "95% Forecast Accuracy", "20% Cost Savings"]
    },
    {
      name: "Quality Control",
      description: "Automated Inspection",
      longDescription: "Visual inspection AI\nDefect detection\nQuality assurance",
      href: "/solutions/quality",
      icon: Shield,
      stats: ["99.9% Defect Detection", "75% Faster QC", "24/7 Monitoring"]
    }
  ],
  government: [
    {
      name: "Smart Governance",
      description: "Efficient Public Service",
      longDescription: "Process automation\nCitizen services\nResource optimization",
      href: "/solutions/governance",
      icon: Building,
      stats: ["70% Faster Processing", "24/7 Availability", "99% Accuracy"]
    },
    {
      name: "Security & Compliance",
      description: "Advanced Protection",
      longDescription: "Threat detection\nCompliance monitoring\nData protection",
      href: "/solutions/security",
      icon: LockKeyhole,
      stats: ["99.9% Security Rate", "Real-time Monitoring", "GDPR Compliant"]
    },
    {
      name: "Public Analytics",
      description: "Data-Driven Decisions",
      longDescription: "Population analytics\nResource planning\nPolicy impact analysis",
      href: "/solutions/public-analytics",
      icon: Users,
      stats: ["85% Better Planning", "90% Accuracy", "Real-time Insights"]
    }
  ]
};

export default function SolutionsPage() {
  const [activeSector, setActiveSector] = useState<SectorId>('business');

  return (
    <main className="flex flex-col min-h-screen bg-[#000] text-white overflow-hidden">
      <section className="relative py-24 overflow-hidden">
        <div className="container max-w-6xl mx-auto px-4">
          {/* Headline */}
          <div className="text-center mb-16">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our Solutions
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover how our AI solutions can transform your business with cutting-edge technology
            </motion.p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-4 mb-16 relative z-10">
            {sectors.map((sector) => (
              <button
                key={sector.id}
                onClick={() => setActiveSector(sector.id)}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300
                  ${activeSector === sector.id
                    ? 'bg-white/10 border-2 border-white/20 text-white'
                    : 'bg-white/5 border-2 border-white/10 text-white/60 hover:bg-white/10 hover:border-white/20 hover:text-white'
                  }
                `}
              >
                <sector.icon className="w-5 h-5" />
                <span className="font-medium">{sector.name}</span>
              </button>
            ))}
          </div>

          {/* Solutions Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {solutions[activeSector].map((solution) => (
              <motion.div
                key={solution.name}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                className="relative p-4 md:p-6 rounded-lg border-2 border-white/[0.15] bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-all duration-300 flex flex-col items-center text-center shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.15] to-transparent opacity-50 pointer-events-none rounded-lg" />
                
                {/* Icon Container */}
                <div className="relative p-2.5 rounded-lg backdrop-blur-sm border border-white/10 mb-4 bg-black/30">
                  <solution.icon className="w-6 h-6 text-white/80" />
                </div>

                {/* Content */}
                <div className="relative flex-1 space-y-4 w-full">
                  <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                    {solution.name}
                  </h2>
                  <p className="text-lg font-medium text-white/80">{solution.description}</p>
                  <p className="text-white/60 whitespace-pre-line">{solution.longDescription}</p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-1 gap-2 mt-4">
                    {solution.stats.map((stat, index) => (
                      <div key={index} className="text-sm text-white/70 bg-white/5 rounded-lg px-3 py-2">
                        {stat}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Button */}
                <Link 
                  href={solution.href}
                  className="relative mt-6 inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-300 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 group w-full sm:w-auto"
                >
                  <span>Learn More</span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}