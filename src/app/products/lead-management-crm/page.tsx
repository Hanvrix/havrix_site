import BreadcrumbHeader from "@/components/ui/BreadcrumbHeader";
import { 
  BarChart3, 
  Box, 
  ClipboardCheck, 
  Coins, 
  Cpu, 
  Globe2, 
  LineChart, 
  Rocket, 
  Settings2, 
  ShieldCheck, 
  Users2,
  Zap,
  FileText,
  Users,
  MessageSquare,
  Target,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Mail,
  PieChart
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Section, { SectionHeader } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lead Management CRM Software | Hanvrix Salem",
  description: "Boost your sales conversions with Hanvrix Lead Management CRM. WhatsApp lead auto-capture, visual Kanban deal pipeline, smart follow-up reminders, and sales team analytics.",
};

export default function LeadManagementCRM() {
  const highlights = [
    { label: "Lead Response Time", value: "< 5 Min", icon: <Zap className="h-5 w-5" /> },
    { label: "Conversion Rate", value: "+35%", icon: <TrendingUp className="h-5 w-5" /> },
    { label: "Follow-up Rate", value: "100%", icon: <MessageSquare className="h-5 w-5" /> },
    { label: "Pipeline Visibility", value: "Realtime", icon: <PieChart className="h-5 w-5" /> },
  ];

  const features = [
    {
      title: "Instant WhatsApp & Web Lead Capture",
      description: "Automatically capture leads from WhatsApp Business, Facebook Ads, Google Ads, and website forms directly into your central CRM pipeline.",
      icon: <MessageSquare className="h-8 w-8 text-primary-green" />,
    },
    {
      title: "Visual Kanban Drag-and-Drop Pipeline",
      description: "Track deal stages seamlessly (New Lead → Initial Call → Demo Scheduled → Proposal Sent → Closed Deal) with intuitive Kanban boards.",
      icon: <Target className="h-8 w-8 text-primary-green" />,
    },
    {
      title: "Smart Lead Scoring & Task Follow-ups",
      description: "Prioritize hot prospects with AI-driven lead scoring. Never miss a follow-up with automated WhatsApp & email task reminders.",
      icon: <Sparkles className="h-8 w-8 text-primary-green" />,
    },
    {
      title: "Quotation & Proposal Management",
      description: "Generate professional GST quotations and client PDF proposals in under 60 seconds with automated discount logic.",
      icon: <FileText className="h-8 w-8 text-primary-green" />,
    },
    {
      title: "Sales Team Performance Analytics",
      description: "Monitor agent call logs, response velocity, lead conversion rates, and revenue forecasts with executive analytics dashboards.",
      icon: <BarChart3 className="h-8 w-8 text-primary-green" />,
    },
    {
      title: "Multi-Channel Activity Timeline",
      description: "View complete interaction histories for every client, including call notes, WhatsApp chats, email exchanges, and meeting logs.",
      icon: <Users className="h-8 w-8 text-primary-green" />,
    },
  ];

  const modules = [
    { name: "WhatsApp Sync", icon: <MessageSquare className="h-5 w-5" /> },
    { name: "Kanban Pipeline", icon: <Target className="h-5 w-5" /> },
    { name: "Lead Scoring", icon: <Sparkles className="h-5 w-5" /> },
    { name: "GST Proposals", icon: <FileText className="h-5 w-5" /> },
    { name: "Team Analytics", icon: <BarChart3 className="h-5 w-5" /> },
    { name: "Automated Follow-ups", icon: <Zap className="h-5 w-5" /> },
  ];

  const timeline = [
    { title: "Pipeline Audit", desc: "Understanding your sales stages, channels, & team roles.", icon: <FileText className="h-5 w-5" /> },
    { title: "CRM Setup", desc: "Connecting Meta Ads, website forms, & WhatsApp API.", icon: <Settings2 className="h-5 w-5" /> },
    { title: "Sales Team Onboarding", desc: "Training sales reps & managers on quick lead follow-ups.", icon: <Users2 className="h-5 w-5" /> },
    { title: "Go Live & Analytics", desc: "Live lead tracking with weekly performance reports.", icon: <Rocket className="h-5 w-5" /> },
  ];

  return (
    <div className="bg-background min-h-screen">
      <BreadcrumbHeader 
        title="Lead Management CRM" 
        pageName="Lead Management CRM" 
        parentLink={{ name: "Products", href: "/products" }} 
      />

      {/* Hero Showcase Section */}
      <Section light={true} className="py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-[1360px] mx-auto">
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-purple-100 text-purple-800 font-bold text-xs uppercase tracking-wider">
              SALES AUTOMATION &amp; LEAD CONVERSION
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F2D5C] tracking-tight leading-tight">
              Convert Every Lead Into a <span className="text-primary-green font-handwriting text-4xl sm:text-5xl lg:text-6xl font-normal inline-block">Paying Customer</span>
            </h1>
            <p className="text-slate-600 font-medium text-base sm:text-lg leading-relaxed">
              Stop losing leads to delayed follow-ups. Capture inquiries instantly from WhatsApp, Meta Ads, and web forms into a visual Kanban deal pipeline built to supercharge your sales team.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {highlights.map((h, i) => (
                <div key={i} className="p-3 bg-white rounded-xl border border-slate-200 text-center shadow-2xs">
                  <div className="text-primary-green flex justify-center mb-1">{h.icon}</div>
                  <div className="text-xl font-black text-[#0F2D5C]">{h.value}</div>
                  <div className="text-xs font-bold text-slate-500 uppercase">{h.label}</div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link href="/contact">
                <Button variant="primary" showArrow={true} className="px-8 h-[48px]">
                  Try Lead CRM Demo
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative group">
            <div className="absolute -inset-2 bg-primary-green/15 blur-3xl rounded-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xl bg-slate-900 aspect-video flex items-center justify-center">
              <Image
                src="/images/lead_crm.png"
                alt="Lead Management CRM Sales Pipeline Dashboard"
                width={800}
                height={450}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Core Features Section */}
      <Section light={true} className="py-10 md:py-14 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-[1360px] mx-auto">
          <FadeIn>
            <SectionHeader 
              title="Engineered to Maximize Sales Productivity"
              subtitle="Everything your sales team needs to respond faster, manage prospects, and close more deals."
            />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FadeIn key={index} delay={index * 0.08}>
                <Card className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary-green/40 transition-all duration-300 h-full flex flex-col justify-between text-left">
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary-green/10 flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-extrabold text-[#0F2D5C] tracking-tight">{feature.title}</h3>
                    <p className="text-slate-600 font-medium text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Module Overview */}
      <Section light={true} className="py-10 md:py-14">
        <div className="max-w-[1360px] mx-auto text-center space-y-8">
          <div className="max-w-2xl mx-auto space-y-2">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#DCFCE7] text-primary-green-dark font-bold text-xs uppercase tracking-wider">
              SALES ENGINE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F2D5C] tracking-tight">
              Powerful Sales Automation Features
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {modules.map((m, idx) => (
              <div key={idx} className="p-4 bg-white rounded-2xl border border-slate-200 shadow-2xs flex flex-col items-center justify-center space-y-2 text-brand-secondary font-extrabold text-sm hover:border-primary-green transition-all">
                <div className="p-2.5 bg-primary-green/10 text-primary-green rounded-xl">{m.icon}</div>
                <span>{m.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Implementation Workflow */}
      <Section light={true} className="py-10 md:py-14 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-[1360px] mx-auto text-center space-y-10">
          <div className="max-w-2xl mx-auto space-y-2">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#DCFCE7] text-primary-green-dark font-bold text-xs uppercase tracking-wider">
              QUICK ONBOARDING
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F2D5C] tracking-tight">
              How We Set Up Your Lead CRM
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {timeline.map((step, idx) => (
              <Card key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative">
                <div className="text-3xl font-black text-primary-green/30 mb-2">0{idx + 1}</div>
                <h4 className="text-lg font-black text-[#0F2D5C] mb-1">{step.title}</h4>
                <p className="text-xs sm:text-sm font-medium text-slate-600">{step.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-brand-primary py-12 md:py-16 text-center text-white">
        <FadeIn>
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
              Ready to Double Your <span className="underline decoration-white/30">Sales Team Efficiency?</span>
            </h2>
            <p className="text-lg md:text-xl font-medium mb-6 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Experience the power of automated lead management. Request a live CRM demo with custom WhatsApp integration.
            </p>
            <div className="flex justify-center">
              <Link href="/contact">
                <Button variant="white" showArrow={true} className="px-10 h-[50px]">
                  Get Free CRM Demo
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
