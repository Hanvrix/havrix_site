"use client";

import { motion } from "framer-motion";
import Section, { SectionHeader } from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import {
  Globe,
  Smartphone,
  Cloud,
  ShieldCheck,
  ArrowRight,
  Zap,
  BarChart3,
  HeartHandshake,
  Layers,
  Settings,
  Shield,
  Cpu,
  Globe2,
  Code2,
  Rocket,
  ShieldAlert,
  Sparkles,
  Headset,
  Monitor,
  Database,
  Activity,
  ArrowUpRight
} from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Digital Transformation",
      description: "Strategic evolution of your business infrastructure with AI, Cloud, and IoT integration.",
      benefit: "Eliminate technical debt and accelerate your market dominance with precision-engineered strategy.",
      icon: <Sparkles className="h-10 w-10 text-brand-primary" />,
      features: ["AI/ML Integration", "Cloud-Native Adoption", "Process Optimization"],
      delay: 0.1,
      href: "/services/digital-transformation"
    },
    {
      title: "Web & App Development",
      description: "Enterprise-grade web architectures engineered for speed, conversion, and global demand.",
      benefit: "Eliminate technical debt and provide a seamless, high-velocity user experience.",
      icon: <Monitor className="h-10 w-10 text-brand-accent-glow" />,
      features: ["Next.js Excellence", "SEO Mastery", "Edge Performance"],
      delay: 0.2,
      href: "/services/web-app-development"
    },
    {
      title: "Mobile App Development",
      description: "Custom mobile applications designed with architectural integrity and pixel-perfect native UX.",
      benefit: "Empower your workforce and engage your customers with native-performance tools.",
      icon: <Smartphone className="h-10 w-10 text-brand-primary" />,
      features: ["React Native", "Cross-Platform Sync", "Biometric Security"],
      delay: 0.3,
      href: "/services/mobile-app-development"
    },
    {
      title: "Custom Development",
      description: "Bespoke software solutions engineered for high-performance scalability and complex logic.",
      benefit: "Build exactly what your business needs with architectural integrity and pixel-perfect UX.",
      icon: <Code2 className="h-10 w-10 text-brand-accent-glow" />,
      features: ["Scalable Microservices", "Custom API Integrations", "Distributed Logic"],
      delay: 0.4,
      href: "/services/custom-development"
    },
    {
      title: "CMS, E-Commerce & ERP",
      description: "Unified commerce and enterprise resource planning systems designed for automation.",
      benefit: "Reduce operational overhead with proprietary software designed to scale with your user base.",
      icon: <Database className="h-10 w-10 text-brand-primary" />,
      features: ["Headless Commerce", "ERP Connectivity", "Inventory Sync"],
      delay: 0.5,
      href: "/services/cms-ecommerce-erp"
    },
    {
      title: "BPO Support",
      description: "Human-centric multichannel support infrastructure (Chat, Mail, Telecalling) for 24/7 reliability.",
      benefit: "Focus on your core business while we manage the integrity and reliability of your digital infrastructure.",
      icon: <Headset className="h-10 w-10 text-brand-accent-glow" />,
      features: ["24/7 Multi-Channel", "Rapid Incident Response", "System Health Audits"],
      delay: 0.6,
      href: "/services/support"
    },
  ];

  return (
    <div className="pt-20 bg-bg-dark">
      {/* Header */}
      <Section className="pt-40 pb-32 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-brand-primary/5 to-transparent -z-10"></div>
        <div className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[120px] -z-10"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 px-6 py-2 rounded-full glass-morphism text-brand-accent text-sm font-black border border-white/5 mb-10 tracking-widest uppercase"
          >
            <Zap className="h-4 w-4 fill-brand-accent" />
            <span>The Core Ecosystem</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black text-white mb-10 leading-[0.9] tracking-tighter"
          >
            Engineered <br />
            <span className="text-gradient">Capabilities</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-blue-100/60 leading-relaxed max-w-3xl mx-auto font-medium"
          >
            Precision-engineered services designed to eliminate technical debt
            and accelerate your digital dominance in a competitive landscape.
          </motion.p>
        </div>
      </Section>

      {/* Services Grid */}
      <Section id="all-services" className="border-y border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <Card key={i} delay={s.delay} className="flex flex-col h-full group p-14 relative overflow-hidden rounded-[3rem]">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-primary/5 -translate-y-24 translate-x-24 rounded-full blur-3xl group-hover:bg-brand-primary/10 transition-colors duration-1000"></div>

              <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mb-12 group-hover:rotate-6 group-hover:bg-brand-primary/10 transition-all duration-500 border border-white/5">
                {s.icon}
              </div>
              <h3 className="text-3xl font-black text-white mb-6 tracking-tight uppercase tracking-wider">{s.title}</h3>
              <p className="text-xl text-blue-100/50 mb-4 leading-relaxed font-bold">
                {s.description}
              </p>
              <p className="text-brand-accent/60 text-sm font-black tracking-widest uppercase mb-10 leading-relaxed">
                {s.benefit}
              </p>
              <div className="h-px w-full bg-white/5 mb-10"></div>
              <ul className="space-y-6 mb-12">
                {s.features.map((f, idx) => (
                  <li key={idx} className="flex items-center space-x-4 text-white">
                    <div className="p-1 bg-brand-primary/20 rounded-md">
                      <ShieldCheck className="h-5 w-5 text-brand-primary" />
                    </div>
                    <span className="font-bold text-lg">{f}</span>
                  </li>
                ))}
              </ul>
              <Link href={s.href} className="mt-auto">
                <Button variant="cta" className="w-full text-lg">Initialize Integration</Button>
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      {/* Partnership Section */}
      <Section light={false} className="relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[120px] -z-10"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-1.5 bg-brand-primary mb-10 rounded-full"></div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-10 tracking-tighter uppercase tracking-widest">
              Partnership <br />
              <span className="text-brand-primary text-glow">Logic</span>
            </h2>
            <div className="space-y-10">
              <div className="flex gap-8 p-10 glass-morphism rounded-[3rem] border border-white/5 hover:border-brand-primary/30 transition-all group">
                <div className="shrink-0 w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors">
                  <Activity className="h-10 w-10 text-brand-primary" />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-white mb-3 uppercase tracking-wider">ROI-Driven Infra</h4>
                  <p className="text-blue-100/60 leading-relaxed font-bold">
                    We bridge the gap between technical features and business value.
                    Our engineering outlasts market trends.
                  </p>
                </div>
              </div>
              <div className="flex gap-8 p-10 glass-morphism rounded-[3rem] border border-white/5 hover:border-brand-primary/30 transition-all group">
                <div className="shrink-0 w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors">
                  <ShieldAlert className="h-10 w-10 text-brand-accent-glow" />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-white mb-3 uppercase tracking-wider">24/7 Integrity</h4>
                  <p className="text-blue-100/60 leading-relaxed font-bold">
                    Mission-ready support ensures zero-downtime operations while you
                    focus on your core business scaling strategies.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand-primary rounded-[4rem] p-20 text-white shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:rotate-12 transition-transform duration-1000">
              <Rocket className="h-80 w-80 translate-x-20 -translate-y-20" />
            </div>
            <h3 className="text-4xl font-black mb-12 italic leading-tight relative z-10">&quot;They helped us redefine our entire supply chain logic. Our operational efficiency increased by 40% in six months.&quot;</h3>
            <div className="flex items-center space-x-6 relative z-10">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center font-black text-2xl">SK</div>
              <div>
                <p className="font-black text-2xl uppercase tracking-widest">Sarah Kensington</p>
                <p className="text-blue-100 font-bold">CTO @ FlowSense</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="py-48">
        <div className="text-center max-w-5xl mx-auto glass-morphism p-24 rounded-[4rem] border border-white/5 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent"></div>
          <h2 className="text-6xl md:text-8xl font-black text-white mb-10 tracking-tighter relative z-10 uppercase tracking-widest">Digital Dominance.</h2>
          <p className="text-xl md:text-3xl text-blue-100/60 mb-16 max-w-3xl mx-auto font-bold relative z-10">
            Deploy your most ambitious projects with the world&apos;s most precise engineering squad.
          </p>
          <Link href="/contact" className="relative z-10">
            <Button variant="cta" className="h-20 px-20 text-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500">Establish Mission</Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
