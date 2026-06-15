import Section, { SectionHeader } from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import {
  Smartphone,
  ShieldCheck,
  Zap,
  Activity,
  Code2,
  Rocket,
  ShieldAlert,
  Sparkles,
  Headset,
  Monitor,
  Database,
  ArrowRight,
  CheckCircle2,
  Info
} from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import BreadcrumbHeader from "@/components/ui/BreadcrumbHeader";

export default function ServicesPage() {
  const services = [
    {
      title: "Digital Transformation",
      description: "Strategic evolution of your business infrastructure with AI, Cloud, and IoT integration.",
      benefit: "Eliminate technical debt and accelerate your market dominance with precision-engineered strategy.",
      icon: <Sparkles className="w-6 h-6" />,
      features: ["AI/ML Integration", "Cloud-Native Adoption", "Process Optimization"],
      href: "/services/digital-transformation"
    },
    {
      title: "Web & App Development",
      description: "Enterprise-grade web architectures engineered for speed, conversion, and global demand.",
      benefit: "Eliminate technical debt and provide a seamless, high-velocity user experience.",
      icon: <Monitor className="w-6 h-6" />,
      features: ["Next.js Excellence", "SEO Mastery", "Edge Performance"],
      href: "/services/web-app-development"
    },
    {
      title: "Mobile App Development",
      description: "Custom mobile applications designed with architectural integrity and pixel-perfect native UX.",
      benefit: "Empower your workforce and engage your customers with native-performance tools.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["React Native", "Cross-Platform Sync", "Biometric Security"],
      href: "/services/mobile-app-development"
    },
    {
      title: "Custom Development",
      description: "Bespoke software solutions engineered for high-performance scalability and complex logic.",
      benefit: "Build exactly what your business needs with architectural integrity and pixel-perfect UX.",
      icon: <Code2 className="w-6 h-6" />,
      features: ["Scalable Microservices", "Custom API Integrations", "Distributed Logic"],
      href: "/services/custom-development"
    },
    {
      title: "CMS, E-Commerce & ERP",
      description: "Unified commerce and enterprise resource planning systems designed for automation.",
      benefit: "Reduce operational overhead with proprietary software designed to scale with your user base.",
      icon: <Database className="w-6 h-6" />,
      features: ["Headless Commerce", "ERP Connectivity", "Inventory Sync"],
      href: "/services/cms-ecommerce-erp"
    },
    {
      title: "BPO Support",
      description: "Human-centric multichannel support infrastructure (Chat, Mail, Telecalling) for 24/7 reliability.",
      benefit: "Focus on your core business while we manage the integrity and reliability of your digital infrastructure.",
      icon: <Headset className="w-6 h-6" />,
      features: ["24/7 Multi-Channel", "Rapid Incident Response", "System Health Audits"],
      href: "/services/support"
    },
  ];

  return (
    <div className="bg-[#ecf0f0] min-h-screen">
      {/* 1. Breadcrumb Header */}
      <BreadcrumbHeader title="Our Solutions & Capabilities" pageName="Services" />

      {/* 2. Services Grid */}
      <Section light={true}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <Card className="flex flex-col h-full group !p-10 border border-[#c9d1d1] bg-white hover:bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-brand-primary/10 relative overflow-hidden text-left">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="w-16 h-16 bg-slate-50 border border-[#c9d1d1] rounded-2xl flex items-center justify-center mb-8 text-brand-primary group-hover:bg-brand-primary group-hover:text-white group-hover:scale-110 transition-all duration-500 relative z-10">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-black text-[#0c1e21] mb-4 tracking-tight leading-none uppercase relative z-10">{s.title}</h3>
                <p className="text-[16px] text-[#364e52] font-semibold mb-6 leading-relaxed relative z-10">
                  {s.description}
                </p>
                
                <div className="mt-auto relative z-10">
                  <div className="h-px w-full bg-[#c9d1d1]/50 mb-8"></div>
                  <ul className="space-y-4 mb-10">
                    {s.features.map((f, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle2 className="text-brand-primary h-5 w-5 shrink-0" />
                        <span className="font-bold text-[#0c1e21] text-[15px]">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={s.href} className="w-full block">
                    <Button variant="primary" showArrow={true} className="w-full justify-center h-[52px]">
                      Initialize Integration
                    </Button>
                  </Link>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* 3. Partnership Section */}
      <Section light={false} className="relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[max(300px,40vw)] h-[max(300px,40vw)] bg-brand-primary/5 blur-[100px] rounded-full -translate-x-1/2"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center relative z-10 text-left">
          <FadeIn direction="left">
            <div className="space-y-12">
              <span className="inline-flex items-center gap-2 text-brand-primary font-bold uppercase tracking-[2px] text-xs mb-3">
                Value Proposition
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight uppercase">
                ROI-Driven Infrastructure
              </h2>
              <p className="text-lg text-gray-400 font-medium leading-relaxed -mt-6">
                We bridge the gap between technical features and business value. Our engineering methodology is designed to outlast market trends and deliver sustainable results.
              </p>
              
              <div className="space-y-6">
                <div className="group flex gap-6 p-8 bg-white/5 rounded-[2.5rem] border border-white/5 hover:border-brand-primary/30 transition-all">
                  <div className="shrink-0 w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                    <Activity className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-white mb-2 tracking-tight uppercase">Technical Value</h4>
                    <p className="text-gray-400 leading-relaxed font-medium text-lg">
                      Every project is an investment in your company&apos;s digital valuation.
                    </p>
                  </div>
                </div>
                <div className="group flex gap-6 p-8 bg-white/5 rounded-[2.5rem] border border-white/5 hover:border-brand-primary/30 transition-all">
                  <div className="shrink-0 w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                    <ShieldAlert className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-white mb-2 tracking-tight uppercase">Mission Integrity</h4>
                    <p className="text-gray-400 leading-relaxed font-medium text-lg">
                       Mission-ready support ensures zero-downtime operations for your core business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="right" delay={0.2}>
            <div>
              <Card className="bg-white p-12 text-bg-dark border-none shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary opacity-5 rounded-bl-full"></div>
                <div className="mb-10 text-brand-primary">
                  <Rocket className="h-12 w-12" />
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-[#0c1e21] mb-12 italic leading-tight tracking-tight">
                  &quot;They helped us redefine our entire supply chain logic. Our operational efficiency increased by 40% in six months.&quot;
                </h3>
                <div className="flex items-center space-x-5 border-t border-slate-100 pt-8">
                  <div className="w-14 h-14 bg-[#0c1e21] text-white rounded-[20px] flex items-center justify-center font-black text-lg tracking-tighter">
                    SK
                  </div>
                  <div>
                    <p className="font-black text-[#0c1e21] text-lg tracking-tight leading-none mb-1">Sarah Kensington</p>
                    <p className="text-brand-primary text-sm font-bold uppercase tracking-widest">CTO @ Hanvrix</p>
                  </div>
                </div>
              </Card>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* 4. Final CTA */}
      <section className="bg-brand-primary py-24 text-center text-white">
        <FadeIn>
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter uppercase leading-[1]">
              Digital <span className="underline decoration-white/30">Dominance.</span>
            </h2>
            <p className="text-xl font-medium mb-12 opacity-90 max-w-2xl mx-auto">
              Deploy your most ambitious projects with the world&apos;s most precise engineering squad.
            </p>
            <div className="flex justify-center">
              <Link href="/contact">
                <Button variant="white" showArrow={true} className="px-12 h-[54px]">
                  Establish Mission
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

