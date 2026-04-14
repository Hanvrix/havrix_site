"use client";

import { motion } from "framer-motion";
import Section, { SectionHeader } from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { ExternalLink, Github, ArrowRight, Rocket, PlayCircle, Layers, Cpu, Zap, Activity } from "lucide-react";
import Link from "next/link";

export default function PortfolioPage() {
  const projects = [
    {
      title: "Hanvrix CRM Elite",
      category: "SaaS Architecture",
      description: "A high-performance customer relationship architecture that moves beyond simple spreadsheets. Track leads, automate follow-ups, and visualize your sales pipeline with zero friction.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      color: "from-blue-600/20 to-brand-primary/40",
      icon: <Layers className="h-6 w-6" />,
      delay: 0.1,
    },
    {
      title: "Textile Integrity System (TIS)",
      category: "Industries ERP",
      description: "A specialized ERP ecosystem for the textile industry. Automate supply chains, manage inventory in real-time, and eliminate manufacturing bottlenecks through data-driven precision.",
      image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=800",
      color: "from-indigo-600/20 to-blue-500/40",
      icon: <Cpu className="h-6 w-6" />,
      delay: 0.2,
    },
    {
      title: "Adaptive Workflow Automation",
      category: "Custom Automation",
      description: "Custom-built \"set-and-forget\" automation tools that bridge the gaps between your existing software. We digitize manual processes to reclaim your most valuable asset: time.",
      image: "https://images.unsplash.com/photo-151877066ae2b-518cfb7d608b?auto=format&fit=crop&q=80&w=800",
      color: "from-emerald-600/20 to-brand-primary/40",
      icon: <Zap className="h-6 w-6" />,
      delay: 0.3,
    },
  ];

  return (
    <div className="pt-20 bg-bg-dark">
      <Section className="pb-24 pt-32 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-brand-primary/5 blur-[120px] -z-10 rounded-full"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center space-x-3 px-6 py-2 rounded-full glass-morphism text-brand-accent text-sm font-black border border-white/5 mb-10 tracking-[0.2em] uppercase"
        >
          <Activity className="h-4 w-4 fill-brand-accent" />
          <span>Tactical Scaling</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-9xl font-black text-white mb-10 tracking-tighter leading-tight uppercase"
        >
          The <span className="text-gradient">Portfolio</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-blue-100/60 max-w-4xl mx-auto leading-relaxed font-bold"
        >
          Explore our elite portfolio of SaaS products and Industries-grade software ecosystems
          designed for high-stakes business environments.
        </motion.p>
      </Section>

      <Section light={false} className="border-t border-white/5 bg-gradient-to-b from-brand-secondary/50 to-bg-dark">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {projects.map((p, i) => (
            <Card key={i} delay={p.delay} className="p-0 overflow-hidden group border-white/5 shadow-2xl relative rounded-[3rem]">
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-bg-dark to-transparent z-10 pointer-events-none"></div>

              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-60"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-40 group-hover:opacity-20 transition-opacity duration-700`}></div>

                <div className="absolute inset-x-0 top-0 p-10 z-20 flex justify-between items-start">
                  <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 text-white group-hover:bg-brand-primary group-hover:scale-110 transition-all duration-500">
                    {p.icon}
                  </div>
                </div>

                <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-12 translate-y-4 group-hover:translate-y-0">
                  <div className="flex gap-6">
                    <button className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-secondary hover:bg-brand-primary hover:text-white transition-all transform hover:scale-110 shadow-2xl">
                      <ExternalLink className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 inset-x-0 p-10 z-20 group-hover:translate-y-[-10px] transition-transform duration-500">
                <div className="text-xs font-black text-brand-accent uppercase tracking-[0.3em] mb-4">
                  {p.category}
                </div>
                <h3 className="text-3xl font-black text-white mb-4 tracking-tighter uppercase leading-none">{p.title}</h3>
                <p className="text-blue-100/50 font-bold leading-relaxed line-clamp-3 mb-6">
                  {p.description}
                </p>
                <Link href="/contact" className="inline-flex items-center text-brand-primary font-black uppercase tracking-widest text-xs group/link">
                  Initialize Review <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-2 transition-transform" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Bottom Section */}
      <Section className="py-48">
        <div className="glass-morphism rounded-[4rem] p-20 md:p-32 text-center relative overflow-hidden border border-white/5">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-primary/10 rounded-full blur-[100px] -z-10 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-accent/5 rounded-full blur-[80px] -z-10 translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10">
            <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter uppercase tracking-widest leading-[0.9]">Start your <br /> <span className="text-gradient">Dominance</span></h2>
            <p className="text-xl md:text-2xl text-blue-100/60 mb-16 max-w-2xl mx-auto font-bold">
              We engine digital experiences that don&apos;t just exist—they lead.
              Let&apos;s architect your next tactical advantage today.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="cta">Deploy Project</Button>
              </Link>
              <Link href="/services" className="text-white font-black uppercase tracking-widest text-xs hover:text-brand-primary transition-colors flex items-center group">
                View Capabilities <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Trust Quote */}
      <Section light={false} className="pb-48 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center space-x-3 text-brand-primary font-black tracking-widest uppercase text-xs mb-10">
              <div className="w-10 h-0.5 bg-brand-primary rounded-full"></div>
              <span>Verified Impact</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-white italic leading-[1.1] mb-12 tracking-tight">
              &quot;Hanvrix didn&apos;t just build our platform; they engineered a digital powerhouse that scaled our revenue by 400%.&quot;
            </h3>
            <div className="flex items-center justify-center space-x-6">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center font-black text-brand-primary border border-white/5">DB</div>
              <div className="text-left">
                <p className="font-black text-white uppercase tracking-widest">David Miller</p>
                <p className="text-brand-accent font-bold uppercase tracking-widest text-xs">Director @ TexGlobal</p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
