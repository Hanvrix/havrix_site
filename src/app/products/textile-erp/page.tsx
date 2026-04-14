"use client";

import { motion } from "framer-motion";
import { 
  BarChart3, 
  Box, 
  CheckCircle2, 
  ClipboardCheck, 
  Coins, 
  Cpu, 
  Globe2, 
  LayoutGrid, 
  LineChart, 
  Rocket, 
  Settings2, 
  ShieldCheck, 
  Smartphone, 
  Users2,
  Zap,
  ArrowRight,
  Scissors,
  Layers,
  FileText,
  Clock,
  Briefcase
} from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Section, { SectionHeader } from "@/components/ui/Section";

export default function TextileERP() {
  const highlights = [
    { label: "Faster Production", value: "40%", icon: <Zap className="h-5 w-5" /> },
    { label: "Fabric Savings", value: "8%", icon: <Scissors className="h-5 w-5" /> },
    { label: "Compliance", value: "100%", icon: <ShieldCheck className="h-5 w-5" /> },
    { label: "Real-time Visibility", value: "Live", icon: <Globe2 className="h-5 w-5" /> },
  ];

  const features = [
    {
      title: "Size-Color Matrix",
      description: "Manage multiple SKU variations with automated generation. Perfect for handling thousands of style, color, and size combinations effortlessly.",
      icon: <LayoutGrid className="h-8 w-8 text-orange-500" />,
    },
    {
      title: "Cutting Optimization",
      description: "Reduce fabric wastage with intelligent marker planning and cut-plan algorithms tailored for maximum material utilization.",
      icon: <Scissors className="h-8 w-8 text-orange-500" />,
    },
    {
      title: "Production Planning",
      description: "End-to-end tracking from order to dispatch. Real-time line balancing and bottleneck identification for maximum throughput.",
      icon: <LineChart className="h-8 w-8 text-orange-500" />,
    },
    {
      title: "BOM & Costing",
      description: "Multi-level bill of materials with precise costing. Track your margins in real-time as material and labor costs fluctuate.",
      icon: <Coins className="h-8 w-8 text-orange-500" />,
    },
    {
      title: "Inventory Management",
      description: "Real-time tracking of fabric, trims, and accessories. Automated reorder points and supplier performance analytics.",
      icon: <Box className="h-8 w-8 text-orange-500" />,
    },
    {
      title: "Quality Control",
      description: "Integrated AQL inspection workflows, defect tracking, and supplier quality rankings to ensure zero-defect exports.",
      icon: <ClipboardCheck className="h-8 w-8 text-orange-500" />,
    },
    {
      title: "Export & Compliance",
      description: "Automated GST documentation, buyer compliance reports, and export documentation management built for global trade.",
      icon: <Globe2 className="h-8 w-8 text-orange-500" />,
    },
  ];

  const modules = [
    { name: "Production", icon: <Cpu className="h-6 w-6" /> },
    { name: "Inventory", icon: <Box className="h-6 w-6" /> },
    { name: "Quality", icon: <ShieldCheck className="h-6 w-6" /> },
    { name: "Sales", icon: <BarChart3 className="h-6 w-6" /> },
    { name: "Finance", icon: <Coins className="h-6 w-6" /> },
    { name: "HR & Payroll", icon: <Users2 className="h-6 w-6" /> },
  ];

  const timeline = [
    { title: "Discovery", desc: "Understanding your unique workflows.", icon: <FileText /> },
    { title: "Setup", desc: "Configuring the ERP for your logic.", icon: <Settings2 /> },
    { title: "Training", desc: "Empowering your team with expertise.", icon: <Users2 /> },
    { title: "Go Live", desc: "Deploying for operational excellence.", icon: <Rocket /> },
  ];

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 flex items-center justify-center bg-bg-dark text-white">
        <div className="absolute top-0 inset-x-0 h-full hero-glow -z-10 opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center px-4 py-2 rounded-full glass-morphism text-sm font-bold border border-white/5 mb-8 tracking-widest uppercase"
          >
            <span className="text-orange-500 mr-2">●</span>
            <span className="text-brand-accent">Enterprise Grade ERP</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-8"
          >
            Textile <br />
            <span className="text-gradient">ERP Software</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100/60 max-w-3xl mx-auto mb-16 leading-relaxed font-black"
          >
            The Complete Digital Nervous System for <br className="hidden md:block" />
            Garment & Textile Manufacturers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-6"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="cta" size="lg" className="w-full sm:w-auto">
                Get Free Demo
              </Button>
            </Link>
          </motion.div>

          {/* Highlights Bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 glass-morphism rounded-[2.5rem] border border-white/5"
          >
            {highlights.map((h, i) => (
              <div key={i} className="flex flex-col items-center py-6 px-4 hover:bg-white/5 rounded-3xl transition-colors">
                <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 mb-3">
                  {h.icon}
                </div>
                <div className="text-3xl font-black text-white">{h.value}</div>
                <div className="text-xs text-blue-100/40 font-bold uppercase tracking-widest mt-1">{h.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Features Section */}
      <Section light={true}>
        <SectionHeader 
          title="Engineered for Precision"
          subtitle="A suite of specialized modules designed to handle the high complexity of textile manufacturing."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:border-orange-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight uppercase">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Modules Section */}
      <Section light={false}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-tight">
              Unified <span className="text-gradient">Module</span> Ecosystem
            </h2>
            <p className="text-xl text-blue-100/50 mb-12 font-medium leading-relaxed">
              Experience the power of a fully integrated ERP where every module communicates 
              in real-time, eliminating data silos and operational lag.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {modules.map((module, i) => (
                <div key={i} className="flex items-center space-x-4 p-6 glass-morphism rounded-3xl border border-white/5 hover:border-orange-500/30 transition-all">
                  <div className="text-orange-500">{module.icon}</div>
                  <span className="font-bold text-white text-lg">{module.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative">
             <div className="aspect-square bg-brand-primary/10 rounded-full absolute inset-0 blur-[100px] -z-10"></div>
             <div className="p-8 md:p-12 glass-morphism rounded-[3rem] border border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-orange-500/40 transition-all"></div>
                <div className="space-y-8 relative z-10">
                   <div className="flex items-center justify-between border-b border-white/5 pb-6">
                      <span className="text-sm font-bold text-orange-500 uppercase tracking-widest">Active Order Management</span>
                      <div className="px-3 py-1 bg-green-500/20 text-green-500 rounded-full text-[10px] font-bold uppercase">Live</div>
                   </div>
                   <div className="space-y-4">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="p-4 bg-white/5 rounded-2xl flex items-center justify-between border border-white/5">
                           <div className="flex items-center space-x-4">
                              <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center text-orange-500 text-xs font-bold">WIP</div>
                              <div>
                                 <p className="text-white font-bold text-sm">Style #TX-90{item}</p>
                                 <p className="text-blue-100/30 text-xs">Processing: Cutting</p>
                              </div>
                           </div>
                           <div className="text-right">
                              <p className="text-brand-accent font-black">78%</p>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section light={true}>
        <SectionHeader 
          title="Why Leading Brands Choose Hanvrix ERP"
          subtitle="Because we don't build generic software. We engineer textile-specific logic."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Industry-Specific", desc: "Built for textiles, not adapted from finance software.", icon: <Briefcase /> },
            { title: "Fast Implementation", desc: "Go live in weeks, not months, with our expert setup teams.", icon: <Rocket /> },
            { title: "Infinite Scalability", desc: "From a single unit to global multi-location enterprises.", icon: <Globe2 /> },
            { title: "Local Expertise", desc: "On-ground support and deep understanding of your bottlenecks.", icon: <Users2 /> },
          ].map((item, i) => (
            <div key={i} className="text-center p-8">
              <div className="w-16 h-16 bg-orange-500/10 rounded-3xl flex items-center justify-center mx-auto mb-8 text-orange-500">
                {item.icon}
              </div>
              <h4 className="text-xl font-black text-gray-900 mb-4 uppercase tracking-tight">{item.title}</h4>
              <p className="text-gray-600 text-sm font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Timeline Section */}
      <Section light={false} className="border-t border-white/5">
        <SectionHeader 
          title="The Path to Go-Live"
          subtitle="A structured methodology ensuring successful digital transformation with zero operational downtime."
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-[40px] left-[5%] w-[90%] h-px bg-white/10"></div>
          {timeline.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative text-center group"
            >
              <div className="w-20 h-20 bg-bg-dark border border-white/10 rounded-full flex items-center justify-center mx-auto mb-8 text-white relative z-10 group-hover:border-orange-500 group-hover:bg-orange-500 transition-all duration-500">
                <div className="group-hover:scale-110 transition-transform">{step.icon}</div>
              </div>
              <h4 className="text-white font-black uppercase tracking-widest text-sm mb-2">{step.title}</h4>
              <p className="text-blue-100/30 text-xs font-medium">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section light={false} className="py-32">
        <div className="bg-brand-primary rounded-[4rem] py-24 px-10 text-center text-white overflow-hidden relative shadow-2xl shadow-blue-500/20 group">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] group-hover:scale-110 transition-transform duration-1000"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-12 leading-[0.9] tracking-tighter">
              Start Your Digital <br />
              <span className="text-blue-100">Transformation Now</span>
            </h2>
            <p className="text-xl md:text-2xl text-blue-100/80 mb-16 max-w-2xl mx-auto font-bold leading-relaxed">
               Secure your margins and dominate the textile market with 
               architectural excellence in ERP technology.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="cta" className="bg-white text-brand-primary hover:bg-blue-50 px-12 py-6">
                  Get Started
                </Button>
              </Link>
              <Link href="/contact" className="text-white font-black text-lg inline-flex items-center group/btn hover:text-blue-100 transition-colors tracking-widest uppercase">
                Speak to Expert
                <ArrowRight className="h-6 w-6 ml-3 group-hover/btn:translate-x-3 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
