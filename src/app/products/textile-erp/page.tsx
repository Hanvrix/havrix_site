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
  FileText
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
      icon: <LayoutGrid className="text-[#b45309]" />,
    },
    {
      title: "Cutting Optimization",
      description: "Reduce fabric wastage with intelligent marker planning and cut-plan algorithms tailored for maximum material utilization.",
      icon: <Scissors className="text-[#b45309]" />,
    },
    {
      title: "Production Planning",
      description: "End-to-end tracking from order to dispatch. Real-time line balancing and bottleneck identification.",
      icon: <LineChart className="text-[#b45309]" />,
    },
    {
      title: "BOM & Costing",
      description: "Multi-level bill of materials with precise costing. Track your margins in real-time as prices fluctuate.",
      icon: <Coins className="text-[#b45309]" />,
    },
    {
      title: "Inventory Management",
      description: "Real-time tracking of fabric, trims, and accessories. Automated reorder points and supplier analytics.",
      icon: <Box className="text-[#b45309]" />,
    },
    {
      title: "Quality Control",
      description: "Integrated AQL inspection workflows, defect tracking, and supplier rankings to ensure zero-defect exports.",
      icon: <ClipboardCheck className="text-[#b45309]" />,
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
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-8 pb-10 lg:pt-12 lg:pb-16 border-b border-gray-200 text-center">
        <FadeIn>
          <div className="max-w-4xl mx-auto px-4">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-50 border border-gray-200 mb-8">
              <span className="text-slate-600 font-bold text-[11px] uppercase tracking-widest">Enterprise Grade ERP</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
              Textile ERP Software
            </h1>

            <p className="text-[17px] text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              The Complete Digital Nervous System for Garment & Textile Manufacturers.
            </p>

            <div className="flex justify-center">
              <Link href="/contact">
                <Button className="bg-[#b45309] hover:bg-[#92400e]">Get Free Demo</Button>
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-slate-50 rounded-[10px] border border-gray-200">
              {highlights.map((h, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-slate-600 mb-2">
                      {h.icon}
                    </div>
                    <div className="text-xl font-bold text-slate-900">{h.value}</div>
                    <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">{h.label}</div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
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
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6 border border-gray-200">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-slate-600 text-[14px] leading-relaxed font-medium">
                  {feature.description}
                </p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Modules Section */}
      <Section light={false}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <div>
              <h6 className="text-slate-500 font-bold tracking-wider text-[13px] uppercase mb-4">Unified Ecosystem</h6>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Real-Time Cross-Module Sync
              </h2>
              <p className="text-[15px] text-slate-600 mb-10 font-medium leading-relaxed">
                Experience the power of a fully integrated ERP where every module communicates 
                in real-time, eliminating data silos and operational lag.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {modules.map((module, i) => (
                  <div key={i} className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-slate-600">{module.icon}</div>
                    <span className="font-semibold text-slate-900 text-[14px]">{module.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div>
               <Card className="p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
                     <span className="text-[12px] font-bold text-slate-900 uppercase tracking-widest">Active Order Management</span>
                     <div className="px-2 py-0.5 bg-slate-100 text-slate-500 rounded border border-gray-200 text-[10px] font-bold uppercase">Live</div>
                  </div>
                  <div className="space-y-4">
                     {[1, 2, 3].map((item) => (
                       <div key={item} className="p-4 bg-slate-50 rounded-lg flex items-center justify-between border border-gray-200">
                          <div className="flex items-center space-x-4">
                             <div className="w-10 h-10 bg-white border border-gray-200 rounded-md flex items-center justify-center text-slate-600 text-xs font-bold">WIP</div>
                             <div>
                                <p className="text-slate-900 font-bold text-[13px]">Style #TX-90{item}</p>
                                <p className="text-slate-500 text-[12px]">Processing: Cutting</p>
                             </div>
                          </div>
                          <div className="text-right">
                             <p className="text-slate-900 font-bold text-[13px]">78%</p>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Industry-Specific", desc: "Built for textiles, not adapted." },
            { title: "Fast Implementation", desc: "Go live in weeks, not months." },
            { title: "Scalability", desc: "Global multi-location support." },
            { title: "Local Expertise", desc: "Deep understanding of bottlenecks." },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <Card className="text-center p-6 bg-slate-50 border-0 h-full hover:bg-slate-100 transition-colors">
                <h4 className="text-[15px] font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-600 text-[13px] font-medium leading-relaxed">{item.desc}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Timeline Section */}
      <Section light={false} className="border-t border-gray-200">
        <FadeIn>
          <SectionHeader 
            title="The Path to Go-Live"
            subtitle="A structured methodology ensuring successful digital transformation with zero operational downtime."
          />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {timeline.map((step, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="text-center">
                <div className="w-12 h-12 bg-white border border-gray-200 shadow-sm rounded-lg flex items-center justify-center mx-auto mb-4 text-slate-900">
                  {step.icon}
                </div>
                <h4 className="text-slate-900 font-bold text-[14px] mb-2">{step.title}</h4>
                <p className="text-slate-500 text-[13px] font-medium">{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

    </div>
  );
}
