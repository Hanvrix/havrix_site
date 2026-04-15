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
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

export default function ServicesPage() {
  const services = [
    {
      title: "Digital Transformation",
      description: "Strategic evolution of your business infrastructure with AI, Cloud, and IoT integration.",
      benefit: "Eliminate technical debt and accelerate your market dominance with precision-engineered strategy.",
      icon: <Sparkles className="text-[#b45309]" />,
      features: ["AI/ML Integration", "Cloud-Native Adoption", "Process Optimization"],
      href: "/services/digital-transformation"
    },
    {
      title: "Web & App Development",
      description: "Enterprise-grade web architectures engineered for speed, conversion, and global demand.",
      benefit: "Eliminate technical debt and provide a seamless, high-velocity user experience.",
      icon: <Monitor className="text-[#b45309]" />,
      features: ["Next.js Excellence", "SEO Mastery", "Edge Performance"],
      href: "/services/web-app-development"
    },
    {
      title: "Mobile App Development",
      description: "Custom mobile applications designed with architectural integrity and pixel-perfect native UX.",
      benefit: "Empower your workforce and engage your customers with native-performance tools.",
      icon: <Smartphone className="text-[#b45309]" />,
      features: ["React Native", "Cross-Platform Sync", "Biometric Security"],
      href: "/services/mobile-app-development"
    },
    {
      title: "Custom Development",
      description: "Bespoke software solutions engineered for high-performance scalability and complex logic.",
      benefit: "Build exactly what your business needs with architectural integrity and pixel-perfect UX.",
      icon: <Code2 className="text-[#b45309]" />,
      features: ["Scalable Microservices", "Custom API Integrations", "Distributed Logic"],
      href: "/services/custom-development"
    },
    {
      title: "CMS, E-Commerce & ERP",
      description: "Unified commerce and enterprise resource planning systems designed for automation.",
      benefit: "Reduce operational overhead with proprietary software designed to scale with your user base.",
      icon: <Database className="text-[#b45309]" />,
      features: ["Headless Commerce", "ERP Connectivity", "Inventory Sync"],
      href: "/services/cms-ecommerce-erp"
    },
    {
      title: "BPO Support",
      description: "Human-centric multichannel support infrastructure (Chat, Mail, Telecalling) for 24/7 reliability.",
      benefit: "Focus on your core business while we manage the integrity and reliability of your digital infrastructure.",
      icon: <Headset className="text-[#b45309]" />,
      features: ["24/7 Multi-Channel", "Rapid Incident Response", "System Health Audits"],
      href: "/services/support"
    },
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <Section className="pb-10 text-center">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-md border border-gray-200 bg-slate-50 mb-8">
              <Zap className="text-[#b45309]" />
              <span className="text-slate-600 font-bold tracking-wider text-[11px] uppercase">The Core Ecosystem</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
              Engineered Capabilities
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Precision-engineered services designed to eliminate technical debt
              and accelerate your digital dominance in a competitive landscape.
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Services Grid */}
      <Section light={false} id="all-services">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <Card className="flex flex-col h-full p-6 border border-gray-200 hover:shadow-xl transition-shadow bg-white">
                <div className="w-16 h-16 bg-slate-100 rounded-lg flex items-center justify-center mb-8 border border-gray-200">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{s.title}</h3>
                <p className="text-[15px] text-slate-600 mb-4 leading-relaxed font-medium">
                  {s.description}
                </p>
                <p className="text-slate-400 text-[12px] font-bold tracking-wider uppercase mb-8 leading-relaxed">
                  {s.benefit}
                </p>
                
                <div className="mt-auto">
                  <div className="h-px w-full bg-gray-100 mb-6"></div>
                  <ul className="space-y-4 mb-8">
                    {s.features.map((f, idx) => (
                      <li key={idx} className="flex items-center space-x-3 text-slate-700">
                        <ShieldCheck className="text-[#b45309]" />
                        <span className="font-semibold text-[14px]">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={s.href} className="w-full">
                    <Button className="w-full bg-[#b45309] hover:bg-[#92400e]">Initialize Integration</Button>
                  </Link>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Partnership Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeIn direction="left">
            <div>
              <h6 className="text-slate-500 font-bold tracking-wider text-[13px] uppercase mb-4">Partnership Logic</h6>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-10 tracking-tight leading-tight">
                ROI-Driven Infrastructure
              </h2>
              <div className="space-y-6">
                <Card className="flex gap-6 p-6">
                  <div className="shrink-0 w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center border border-gray-200">
                    <Activity className="text-[#b45309]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Technical Value</h4>
                    <p className="text-slate-600 leading-relaxed font-medium text-[14px]">
                      We bridge the gap between technical features and business value.
                      Our engineering outlasts market trends.
                    </p>
                  </div>
                </Card>
                <Card className="flex gap-6 p-6">
                  <div className="shrink-0 w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center border border-gray-200">
                    <ShieldAlert className="text-[#b45309]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">24/7 Integrity</h4>
                    <p className="text-slate-600 leading-relaxed font-medium text-[14px]">
                      Mission-ready support ensures zero-downtime operations while you
                      focus on your core business scaling strategies.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="right" delay={0.2}>
            <div>
              <Card className="bg-slate-900 p-10 text-white border-0">
                <div className="mb-10 text-slate-500">
                  <Rocket className="h-10 w-10" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-10 italic leading-relaxed">
                  "They helped us redefine our entire supply chain logic. Our operational efficiency increased by 40% in six months."
                </h3>
                <div className="flex items-center space-x-4 border-t border-slate-700 pt-6">
                  <div className="w-12 h-12 bg-white text-slate-900 rounded-full flex items-center justify-center font-bold text-[15px]">
                    SK
                  </div>
                  <div>
                    <p className="font-bold text-[15px] tracking-wide">Sarah Kensington</p>
                    <p className="text-slate-400 text-[13px] font-medium">CTO @ Hanvrix</p>
                  </div>
                </div>
              </Card>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Final CTA */}
      <Section light={false} className="py-16 text-center">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Digital Dominance.</h2>
            <p className="text-lg text-slate-600 mb-10 font-medium leading-relaxed">
              Deploy your most ambitious projects with the world&apos;s most precise engineering squad.
            </p>
            <Link href="/contact">
              <Button className="bg-[#b45309] hover:bg-[#92400e]">Establish Mission</Button>
            </Link>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
}
