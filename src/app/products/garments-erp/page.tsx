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
  Scissors,
  FileText,
  Shirt,
  Layers,
  Sparkles,
  CheckCircle2,
  Truck
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Section, { SectionHeader } from "@/components/ui/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Garments ERP Software | Apparel Factory Management | Hanvrix Salem",
  description: "End-to-end Garments & Apparel Manufacturing ERP. Track cut-to-pack operations, worker piece-rate payroll, tech packs, buyer export orders, and quality control.",
};

export default function GarmentsERP() {
  const highlights = [
    { label: "Fabric Savings", value: "8-10%", icon: <Scissors className="h-5 w-5" /> },
    { label: "Line Output", value: "+28%", icon: <Zap className="h-5 w-5" /> },
    { label: "Piece Payroll", value: "Auto", icon: <Coins className="h-5 w-5" /> },
    { label: "Export On-Time", value: "99%", icon: <Truck className="h-5 w-5" /> },
  ];

  const features = [
    {
      title: "Style Master & Tech Pack Management",
      description: "Centralized repository for garment style specs, measurement sheets, trim cards, colorways, and multi-level BOM costing.",
      icon: <Shirt className="h-8 w-8 text-primary-green" />,
    },
    {
      title: "Cut-to-Pack Bundle Production Tracking",
      description: "Barcode & QR bundle tracking across laying, cutting, panel numbering, sewing lines, washing, pressing, and final packing.",
      icon: <Scissors className="h-8 w-8 text-primary-green" />,
    },
    {
      title: "Worker Piece-Rate Payroll Automation",
      description: "Automated calculation of operator piece-rate wages, daily production logs, line efficiency scores, and overtime allowances.",
      icon: <Coins className="h-8 w-8 text-primary-green" />,
    },
    {
      title: "Buyer Export Orders & Shipment Status",
      description: "Manage buyer POs, target delivery dates, container stuffing lists, commercial export invoicing, and shipping status.",
      icon: <Truck className="h-8 w-8 text-primary-green" />,
    },
    {
      title: "In-line & Final Quality Control (AQL)",
      description: "Mobile tablet QC audits at cutting, sewing, and packing stages. Track defect counts, top defect types, and supplier ratings.",
      icon: <ClipboardCheck className="h-8 w-8 text-primary-green" />,
    },
    {
      title: "Fabric Roll & Trim Inventory Control",
      description: "Track fabric rolls by shade batch and GSM, manage trims/accessory stocks, auto-calculate marker efficiency and wastage.",
      icon: <Box className="h-8 w-8 text-primary-green" />,
    },
  ];

  const modules = [
    { name: "Style & Tech Pack", icon: <Shirt className="h-5 w-5" /> },
    { name: "Cutting & Bundles", icon: <Scissors className="h-5 w-5" /> },
    { name: "Sewing Line Balancing", icon: <Layers className="h-5 w-5" /> },
    { name: "Piece-Rate Payroll", icon: <Coins className="h-5 w-5" /> },
    { name: "AQL Quality Control", icon: <ClipboardCheck className="h-5 w-5" /> },
    { name: "Export & Shipping", icon: <Truck className="h-5 w-5" /> },
  ];

  const timeline = [
    { title: "Factory Audit", desc: "Mapping cutting floor, sewing lines, & buyer requirements.", icon: <FileText className="h-5 w-5" /> },
    { title: "System Setup", desc: "Configuring style templates & piece-rate rates.", icon: <Settings2 className="h-5 w-5" /> },
    { title: "Floor Training", desc: "Training floor supervisors & barcode scanning operators.", icon: <Users2 className="h-5 w-5" /> },
    { title: "Go Live & Support", desc: "Live order tracking with 24/7 technical support.", icon: <Rocket className="h-5 w-5" /> },
  ];

  return (
    <div className="bg-background min-h-screen">
      <BreadcrumbHeader 
        title="Garments ERP Software" 
        pageName="Garments ERP" 
        parentLink={{ name: "Products", href: "/products" }} 
      />

      {/* Hero Showcase Section */}
      <Section light={true} className="py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-[1360px] mx-auto">
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs uppercase tracking-wider">
              FOR APPAREL &amp; KNITWEAR FACTORIES
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F2D5C] tracking-tight leading-tight">
              Streamline Your <span className="text-primary-green font-handwriting text-4xl sm:text-5xl lg:text-6xl font-normal inline-block">Garment Factory</span> Operations
            </h1>
            <p className="text-slate-600 font-medium text-base sm:text-lg leading-relaxed">
              Designed for garment manufacturers, knitwear units, and apparel exporters. Gain 100% floor visibility from fabric cutting bundles to piece-rate operator payroll and buyer export shipments.
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
                  Request Factory Demo
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative group">
            <div className="absolute -inset-2 bg-primary-green/15 blur-3xl rounded-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xl bg-slate-900 aspect-video flex items-center justify-center">
              <Image
                src="/images/garments_erp.png"
                alt="Garments Manufacturing ERP Dashboard"
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
              title="Built for Apparel Manufacturing Precision"
              subtitle="Eliminate production bottlenecks, control fabric wastage, and automate piece-rate worker payouts."
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
              FACTORY SUITE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F2D5C] tracking-tight">
              Complete Garment ERP Modules
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
              FAST DEPLOYMENT
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F2D5C] tracking-tight">
              How We Setup Your Garment ERP
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
              Ready to Upgrade Your <span className="underline decoration-white/30">Garment Production?</span>
            </h2>
            <p className="text-lg md:text-xl font-medium mb-6 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Schedule a live demonstration with our apparel software experts and see how Garments ERP transforms factory efficiency.
            </p>
            <div className="flex justify-center">
              <Link href="/contact">
                <Button variant="white" showArrow={true} className="px-10 h-[50px]">
                  Book Free Demo
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
