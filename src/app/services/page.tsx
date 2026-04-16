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

export default function ServicesPage() {
  const services = [
    {
      title: "Digital Transformation",
      description: "Strategic evolution of your business infrastructure with AI, Cloud, and IoT integration.",
      benefit: "Eliminate technical debt and accelerate your market dominance with precision-engineered strategy.",
      icon: <Sparkles />,
      features: ["AI/ML Integration", "Cloud-Native Adoption", "Process Optimization"],
      href: "/services/digital-transformation"
    },
    {
      title: "Web & App Development",
      description: "Enterprise-grade web architectures engineered for speed, conversion, and global demand.",
      benefit: "Eliminate technical debt and provide a seamless, high-velocity user experience.",
      icon: <Monitor />,
      features: ["Next.js Excellence", "SEO Mastery", "Edge Performance"],
      href: "/services/web-app-development"
    },
    {
      title: "Mobile App Development",
      description: "Custom mobile applications designed with architectural integrity and pixel-perfect native UX.",
      benefit: "Empower your workforce and engage your customers with native-performance tools.",
      icon: <Smartphone />,
      features: ["React Native", "Cross-Platform Sync", "Biometric Security"],
      href: "/services/mobile-app-development"
    },
    {
      title: "Custom Development",
      description: "Bespoke software solutions engineered for high-performance scalability and complex logic.",
      benefit: "Build exactly what your business needs with architectural integrity and pixel-perfect UX.",
      icon: <Code2 />,
      features: ["Scalable Microservices", "Custom API Integrations", "Distributed Logic"],
      href: "/services/custom-development"
    },
    {
      title: "CMS, E-Commerce & ERP",
      description: "Unified commerce and enterprise resource planning systems designed for automation.",
      benefit: "Reduce operational overhead with proprietary software designed to scale with your user base.",
      icon: <Database />,
      features: ["Headless Commerce", "ERP Connectivity", "Inventory Sync"],
      href: "/services/cms-ecommerce-erp"
    },
    {
      title: "BPO Support",
      description: "Human-centric multichannel support infrastructure (Chat, Mail, Telecalling) for 24/7 reliability.",
      benefit: "Focus on your core business while we manage the integrity and reliability of your digital infrastructure.",
      icon: <Headset />,
      features: ["24/7 Multi-Channel", "Rapid Incident Response", "System Health Audits"],
      href: "/services/support"
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="bg-bg-dark pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/10 blur-[150px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn direction="up">
             <div className="max-w-3xl">
                <div className="flex items-center space-x-3 text-brand-primary font-black uppercase tracking-[4px] text-[13px] mb-6">
                  <span className="w-10 h-[2px] bg-brand-primary"></span>
                  <span>Engineered Capabilities</span>
                </div>
                <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[1.1] mb-8 uppercase">
                  IT Solutions <br />
                  <span className="text-brand-primary">& Services</span>
                </h1>
                <p className="text-xl text-gray-400 font-medium leading-relaxed">
                   Precision-engineered services designed to eliminate technical debt and accelerate your digital dominance in a competitive landscape.
                </p>
             </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <Section light={true}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <Card className="flex flex-col h-full group !p-10 border-none bg-slate-50 hover:bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-brand-primary/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 text-brand-primary shadow-sm group-hover:bg-brand-primary group-hover:text-white group-hover:scale-110 transition-all duration-500 relative z-10">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-black text-bg-dark mb-4 tracking-tight leading-none uppercase relative z-10">{s.title}</h3>
                <p className="text-[16px] text-gray-500 mb-6 leading-relaxed font-medium relative z-10">
                  {s.description}
                </p>
                
                <div className="mt-auto relative z-10">
                  <div className="h-px w-full bg-slate-200 mb-8"></div>
                  <ul className="space-y-4 mb-10">
                    {s.features.map((f, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle2 className="text-brand-primary h-5 w-5" />
                        <span className="font-bold text-bg-dark text-[15px]">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={s.href} className="w-full">
                    <Button className="w-full h-[54px] text-[15px]"><Zap className="w-4 h-4" /> Initialize Integration</Button>
                  </Link>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Partnership Section */}
      <Section light={false} className="relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand-primary/5 blur-[100px] rounded-full -translate-x-1/2"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center relative z-10">
          <FadeIn direction="left">
            <div className="space-y-12">
              <SectionHeader
                centered={false}
                theme="dark"
                title="ROI-Driven Infrastructure"
                subtitle="We bridge the gap between technical features and business value. Our engineering methodology is designed to outlast market trends and deliver sustainable results."
              />
              <div className="space-y-6">
                <div className="group flex gap-6 p-8 bg-white/5 rounded-[2rem] border border-white/5 hover:border-brand-primary/30 transition-all">
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
                <div className="group flex gap-6 p-8 bg-white/5 rounded-[2rem] border border-white/5 hover:border-brand-primary/30 transition-all">
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
                <h3 className="text-2xl md:text-3xl font-black mb-12 italic leading-tight tracking-tight">
                  &quot;They helped us redefine our entire supply chain logic. Our operational efficiency increased by 40% in six months.&quot;
                </h3>
                <div className="flex items-center space-x-5 border-t border-slate-100 pt-8">
                  <div className="w-14 h-14 bg-bg-dark text-white rounded-2xl flex items-center justify-center font-black text-lg tracking-tighter">
                    SK
                  </div>
                  <div>
                    <p className="font-black text-lg tracking-tight leading-none mb-1">Sarah Kensington</p>
                    <p className="text-brand-primary text-sm font-bold uppercase tracking-widest">CTO @ Hanvrix</p>
                  </div>
                </div>
              </Card>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Final CTA */}
      <section className="bg-brand-primary py-20 text-center text-white">
        <FadeIn>
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter uppercase leading-[1]">Digital <span className="underline decoration-white/30">Dominance.</span></h2>
            <p className="text-xl font-medium mb-12 opacity-90 max-w-2xl mx-auto">
              Deploy your most ambitious projects with the world&apos;s most precise engineering squad.
            </p>
            <div className="flex justify-center">
              <Link href="/contact">
                <Button variant="white" className="px-12 h-[54px] text-bg-dark font-black uppercase tracking-widest text-sm"><Rocket className="w-5 h-5" /> Establish Mission</Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
