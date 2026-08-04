import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import BreadcrumbHeader from "@/components/ui/BreadcrumbHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  Box, Shirt, Users, CheckCircle2, ArrowRight, Sparkles, ShieldCheck, Cpu, Zap 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Software Products & ERP Solutions | Hanvrix Salem",
  description: "Explore Hanvrix enterprise products: Textiles ERP (Silks), Garments ERP, and Lead Management CRM. Scalable, local-ready software built for Tamil Nadu industries.",
};

export default function ProductsPage() {
  const products = [
    {
      id: "textile-erp",
      title: "Textiles ERP (Silks)",
      tag: "Silk Saree & Weaving Specialization",
      image: "/images/textile_erp_silk.png",
      icon: Box,
      href: "/products/textile-erp",
      description: "Complete ERP software designed specifically for Silk Saree & Handloom/Powerloom manufacturers. Streamline yarn procurement, weaver allocations, design catalogs, color dyeing batches, and GST billing.",
      features: [
        "Yarn Stock & Raw Material Inventory",
        "Weaver & Loom Job Work Tracking",
        "Silk Saree & Jacquard Design Catalog",
        "Color Dyeing & Processing Batch Control",
        "Integrated GST Invoicing & Accounts"
      ],
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300"
    },
    {
      id: "garments-erp",
      title: "Garments ERP",
      tag: "Apparel & Knitwear Manufacturing",
      image: "/images/garments_erp.png",
      icon: Shirt,
      href: "/products/garments-erp",
      description: "All-in-one manufacturing ERP built for Garment factories and apparel exporters. Gain real-time visibility from cutting and stitching bundles to piece-rate payroll and buyer export shipments.",
      features: [
        "Style Master & Tech Pack Management",
        "Cut-to-Pack Bundle Production Tracking",
        "Worker Piece-Rate Payroll Automation",
        "Buyer Export Orders & Shipment Status",
        "In-line & Final Quality Control (QC)"
      ],
      badgeColor: "bg-blue-100 text-blue-800 border-blue-300"
    },
    {
      id: "lead-crm",
      title: "Lead Management CRM",
      tag: "Sales Pipeline & Lead Conversion",
      image: "/images/lead_crm.png",
      icon: Users,
      href: "/products/lead-management-crm",
      description: "Modern sales CRM engineered to capture leads instantly, track deal stages, and boost conversion rates with automated WhatsApp follow-ups and real-time team analytics.",
      features: [
        "Instant WhatsApp & Web Lead Capture",
        "Visual Kanban Drag-and-Drop Pipeline",
        "Smart Lead Scoring & Task Reminders",
        "Quotation & Proposal Management",
        "Sales Team Performance Reports"
      ],
      badgeColor: "bg-purple-100 text-purple-800 border-purple-300"
    }
  ];

  const highlights = [
    {
      icon: Zap,
      title: "Tailored Workflows",
      desc: "Built specifically around regional manufacturing and business processes rather than generic templates."
    },
    {
      icon: Cpu,
      title: "Cloud & On-Premise",
      desc: "Flexible deployment models allowing you to run your software safely from cloud servers or local factory networks."
    },
    {
      icon: ShieldCheck,
      title: "Dedicated Local Support",
      desc: "Get fast technical assistance and hands-on staff training from our local Salem-based engineering team."
    }
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* 1. Header */}
      <BreadcrumbHeader title="Enterprise Products & SaaS Solutions" pageName="Products" />

      {/* 2. Overview Intro */}
      <Section light={true} className="py-10 md:py-14">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#DCFCE7] text-primary-green-dark font-bold text-xs uppercase tracking-wider">
            OUR PRODUCT SUITE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F2D5C] tracking-tight">
            Software Built to <span className="text-primary-green font-handwriting text-4xl sm:text-5xl lg:text-6xl font-normal inline-block">Scale Your Operations</span>
          </h2>
          <p className="text-slate-600 font-medium text-base sm:text-lg">
            Purpose-built enterprise applications engineered for high efficiency, complete data accuracy, and maximum growth.
          </p>
        </div>

        {/* 3. Product Cards Stack */}
        <div className="space-y-12 max-w-[1360px] mx-auto">
          {products.map((product, idx) => {
            const IconComp = product.icon;
            const isEven = idx % 2 === 0;

            return (
              <FadeIn key={product.id} delay={idx * 0.1}>
                <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}>
                    
                    {/* Image Column */}
                    <div className={`lg:col-span-6 relative group ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <div className="absolute -inset-2 bg-primary-green/10 blur-2xl rounded-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 shadow-md bg-slate-900 aspect-video flex items-center justify-center">
                        <Image
                          src={product.image}
                          alt={product.title}
                          width={800}
                          height={450}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </div>

                    {/* Details Column */}
                    <div className={`lg:col-span-6 space-y-5 text-left ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <div>
                        <span className={`inline-block px-3.5 py-1 rounded-full border text-xs font-bold uppercase tracking-wider mb-3 ${product.badgeColor}`}>
                          {product.tag}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-black text-[#0F2D5C] tracking-tight flex items-center gap-3">
                          <IconComp className="w-8 h-8 text-primary-green shrink-0" />
                          <span>{product.title}</span>
                        </h3>
                      </div>

                      <p className="text-slate-600 font-medium text-base leading-relaxed">
                        {product.description}
                      </p>

                      {/* Feature Bullet Points */}
                      <ul className="space-y-2.5 pt-1">
                        {product.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center space-x-3 text-slate-700 text-sm font-semibold">
                            <CheckCircle2 className="w-5 h-5 text-primary-green shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Button */}
                      <div className="pt-4">
                        <Link href={product.href}>
                          <Button variant="primary" showArrow={true} className="px-8 h-[48px]">
                            View Product Details
                          </Button>
                        </Link>
                      </div>

                    </div>

                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* 4. Why Choose Hanvrix Software */}
      <Section light={true} className="py-10 md:py-14 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-[1360px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#DCFCE7] text-primary-green-dark font-bold text-xs uppercase tracking-wider">
              THE HANVRIX ADVANTAGE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F2D5C] tracking-tight">
              Why Businesses Choose <span className="text-primary-green">Our Products</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((h, i) => {
              const IconComponent = h.icon;
              return (
                <FadeIn key={i} delay={i * 0.1}>
                  <Card className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md text-left h-full flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-primary-green/10 flex items-center justify-center text-primary-green font-bold">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h4 className="text-xl font-extrabold text-[#0F2D5C]">{h.title}</h4>
                      <p className="text-slate-600 text-sm font-medium leading-relaxed">{h.desc}</p>
                    </div>
                  </Card>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </Section>

      {/* 5. Final CTA */}
      <section className="bg-brand-primary py-12 md:py-16 text-center text-white">
        <FadeIn>
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
              Need a Custom Demo for Your <span className="underline decoration-white/30">Factory or Sales Team?</span>
            </h2>
            <p className="text-lg md:text-xl font-medium mb-6 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Schedule a live software demonstration with our product specialists and see how our ERP &amp; CRM solutions fit your business.
            </p>
            <div className="flex justify-center">
              <Link href="/contact">
                <Button variant="white" showArrow={true} className="px-10 h-[50px]">
                  Request Free Demo
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
