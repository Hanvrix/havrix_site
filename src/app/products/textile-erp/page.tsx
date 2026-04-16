import { 
  BarChart3, 
  Box, 
  ClipboardCheck, 
  Coins, 
  Cpu, 
  Globe2, 
  LayoutGrid, 
  LineChart, 
  Rocket, 
  Settings2, 
  ShieldCheck, 
  Users2,
  Zap,
  Scissors,
  FileText,
  CheckCircle2,
  ArrowRight,
  PlayCircle,
  Settings
} from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Section, { SectionHeader } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";

export default function TextileERP() {
  const highlights = [
    { label: "Faster Production", value: "40%", icon: <Zap className="h-5 w-5" /> },
    { label: "Fabric Savings", value: "8%", icon: <Scissors className="h-5 w-5" /> },
    { label: "Compliance", value: "100%", icon: <ShieldCheck className="h-5 w-5" /> },
    { label: "Visibility", value: "Live", icon: <Globe2 className="h-5 w-5" /> },
  ];

  const features = [
    {
      title: "Size-Color Matrix",
      description: "Manage multiple SKU variations with automated generation. Perfect for handling thousands of combinations effortlessly.",
      icon: <LayoutGrid className="h-8 w-8" />,
    },
    {
      title: "Cutting Optimization",
      description: "Reduce fabric wastage with intelligent marker planning and cut-plan algorithms tailored for maximum material utilization.",
      icon: <Scissors className="h-8 w-8" />,
    },
    {
      title: "Production Planning",
      description: "End-to-end tracking from order to dispatch. Real-time line balancing and bottleneck identification.",
      icon: <LineChart className="h-8 w-8" />,
    },
    {
      title: "BOM & Costing",
      description: "Multi-level bill of materials with precise costing. Track your margins in real-time as prices fluctuate.",
      icon: <Coins className="h-8 w-8" />,
    },
    {
      title: "Inventory Management",
      description: "Real-time tracking of fabric, trims, and accessories. Automated reorder points and supplier analytics.",
      icon: <Box className="h-8 w-8" />,
    },
    {
      title: "Quality Control",
      description: "Integrated AQL inspection workflows, defect tracking, and supplier rankings to ensure zero-defect exports.",
      icon: <ClipboardCheck className="h-8 w-8" />,
    },
  ];

  const modules = [
    { name: "Production", icon: <Cpu className="h-5 w-5" /> },
    { name: "Inventory", icon: <Box className="h-5 w-5" /> },
    { name: "Quality", icon: <ShieldCheck className="h-5 w-5" /> },
    { name: "Sales", icon: <BarChart3 className="h-5 w-5" /> },
    { name: "Finance", icon: <Coins className="h-5 w-5" /> },
    { name: "HR & Payroll", icon: <Users2 className="h-5 w-5" /> },
  ];

  const timeline = [
    { title: "Discovery", desc: "Understanding workflow.", icon: <FileText className="h-5 w-5" /> },
    { title: "Setup", desc: "Configuring logic.", icon: <Settings2 className="h-5 w-5" /> },
    { title: "Training", desc: "Empowering teams.", icon: <Users2 className="h-5 w-5" /> },
    { title: "Go Live", desc: "Operational excellence.", icon: <Rocket className="h-5 w-5" /> },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-bg-dark pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/10 blur-[150px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn direction="up">
             <div className="max-w-4xl mx-auto">
                <div className="inline-flex items-center space-x-3 text-brand-primary font-black uppercase tracking-[4px] text-[13px] mb-8 bg-white/5 px-6 py-2 rounded-full border border-white/10">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Enterprise Grade ERP</span>
                </div>
                <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[1] mb-10 uppercase">
                   Textile <span className="text-brand-primary underline decoration-white/20">ERP</span> Software
                </h1>
                <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto mb-12">
                   The Complete Digital Nervous System for Garment & Textile Manufacturers.
                </p>
                <div className="flex justify-center mb-16">
                   <Link href="/contact">
                     <Button className="px-12 shadow-2xl shadow-brand-primary/20">
                       <PlayCircle className="w-5 h-5" /> Get Free Demo
                     </Button>
                   </Link>
                </div>
             </div>

             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-white/5 rounded-[40px] border border-white/10 backdrop-blur-sm max-w-4xl mx-auto">
                {highlights.map((h, i) => (
                  <div key={i} className="flex flex-col items-center group">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-brand-primary mb-4 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                      {h.icon}
                    </div>
                    <div className="text-2xl font-black text-white group-hover:text-brand-primary transition-colors">{h.value}</div>
                    <div className="text-[11px] text-gray-400 font-black tracking-[1px]">{h.label}</div>
                  </div>
                ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Core Features Section */}
      <Section light={true}>
        <FadeIn>
          <SectionHeader 
            title="Engineered for Precision"
            subtitle="A suite of specialized modules designed to handle the high complexity of textile manufacturing."
          />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Card className="flex flex-col !p-8 h-full border-none bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="flex items-center space-x-5 mb-6 relative z-10">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-primary shadow-sm group-hover:bg-brand-primary group-hover:text-white group-hover:scale-110 transition-all duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-black text-bg-dark tracking-tight leading-none">{feature.title}</h3>
                </div>
                <p className="text-[15px] text-gray-500 mb-2 leading-relaxed font-medium relative z-10">
                  {feature.description}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Modules Section */}
      <Section light={false} className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }}></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <FadeIn direction="left">
            <div>
              <div className="inline-flex items-center space-x-3 text-brand-primary font-black uppercase tracking-[4px] text-[13px] mb-6">
                <div className="w-8 h-[2px] bg-brand-primary"></div>
                <span>Unified Ecosystem</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-tight uppercase">
                Real-Time <span className="text-brand-primary">Cross-Module</span> Sync
              </h2>
              <p className="text-lg text-gray-400 mb-12 font-medium leading-relaxed">
                Experience the power of a fully integrated ERP where every module communicates 
                in real-time, eliminating data silos and operational lag.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {modules.map((module, i) => (
                  <div key={i} className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white hover:text-bg-dark transition-all duration-500 group">
                    <div className="text-brand-primary group-hover:text-bg-dark transition-colors">{module.icon}</div>
                    <span className="font-black tracking-tight text-[15px]">{module.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div>
               <Card className="!p-0 border-none bg-white/5 overflow-hidden shadow-2xl">
                  <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
                     <span className="font-black text-white tracking-[2px]">Active Order Management</span>
                     <div className="px-3 py-1 bg-brand-primary/20 text-brand-primary rounded-full border border-brand-primary/30 text-[10px] font-black uppercase tracking-widest">Live</div>
                  </div>
                  <div className="p-6 space-y-6 bg-bg-dark/50">
                     {[1, 2, 3].map((item) => (
                       <div key={item} className="p-6 bg-white/5 rounded-2xl flex items-center justify-between border border-white/5 hover:border-brand-primary/30 transition-all duration-300">
                          <div className="flex items-center space-x-5">
                             <div className="w-12 h-12 bg-brand-primary/10 border border-brand-primary/20 rounded-xl flex items-center justify-center text-brand-primary text-xs font-black uppercase tracking-widest">WIP</div>
                             <div>
                                <p className="text-white font-black text-[15px] tracking-tight">Style #TX-90{item}</p>
                                <p className="text-gray-400 text-[13px] font-medium">Processing: Cutting</p>
                             </div>
                          </div>
                          <div className="text-right">
                             <p className="text-brand-primary font-black text-xl tracking-tighter">78%</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </Card>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section light={true}>
        <FadeIn>
          <SectionHeader 
            title="Why Leading Brands Choose Us"
            subtitle="Because we don't build generic software. We engineer textile-specific logic."
          />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-10">
          {[
            { title: "Industry-Specific", desc: "Built for textiles, not adapted.", icon: <Cpu className="h-5 w-5" /> },
            { title: "Fast Implementation", desc: "Go live in weeks, not months.", icon: <Zap className="h-5 w-5" /> },
            { title: "Scalability", desc: "Global multi-location support.", icon: <Globe2 className="h-5 w-5" /> },
            { title: "Local Expertise", desc: "Deep understanding of bottlenecks.", icon: <Users2 className="h-5 w-5" /> },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <Card className="!p-8 border bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-500 group relative overflow-hidden h-full flex flex-col">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="flex items-center space-x-4 mb-6 relative z-10">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center text-brand-primary shadow-sm group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 relative">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-black text-bg-dark tracking-tight leading-none group-hover:text-brand-primary transition-colors">{item.title}</h4>
                </div>
                <p className="text-gray-500 text-[15px] font-medium leading-relaxed group-hover:text-gray-700 transition-colors relative z-10">{item.desc}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Timeline Section */}
      <Section light={false} className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] rounded-full"></div>
        <FadeIn>
          <SectionHeader 
            theme="dark"
            title="The Path to Go-Live"
            subtitle="A structured methodology ensuring successful digital transformation with zero operational downtime."
          />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-10 relative z-10">
          {timeline.map((step, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="text-center group">
                <div className="w-16 h-16 bg-white/5 border border-white/10 shadow-2xl rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand-primary group-hover:bg-brand-primary group-hover:text-white group-hover:scale-110 transition-all duration-500">
                  {step.icon}
                </div>
                <h4 className="text-lg font-black text-white mb-3 tracking-tight leading-none group-hover:text-brand-primary transition-colors">{step.title}</h4>
                <p className="text-gray-400 text-[14px] font-medium leading-relaxed group-hover:text-gray-300 transition-colors">{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <section className="bg-brand-primary py-20 text-center text-white">
        <FadeIn>
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter uppercase leading-[1]">
              Redefine Your <span className="underline decoration-white/30">Process.</span>
            </h2>
            <p className="text-xl font-medium mb-12 opacity-90 max-w-2xl mx-auto">
               Experience the most advanced Textile ERP system ever built.
            </p>
            <div className="flex justify-center">
              <Link href="/contact">
                <Button variant="white" className="px-12 h-[54px] text-bg-dark font-black uppercase tracking-widest text-sm"><Settings className="w-5 h-5" /> Request Access</Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
