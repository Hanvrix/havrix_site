"use client";

import { motion } from "framer-motion";
import { 
  ChevronRight, 
  Check, 
  Quote, 
  ArrowRight,
  BarChart3,
  Box,
  ClipboardCheck,
  Scissors,
  Layers,
  Settings2,
  TrendingUp,
  Zap,
  ShieldCheck,
  Users2,
  FileText
} from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function TextilesRedesign() {
  const capabilities = [
    { title: "Fiber to Fabric Monitor", desc: "Track raw material to finished fabric transformation with unmatched precision." },
    { title: "Collection Management", desc: "Organize seasonal collections and styles with centralized data control." },
    { title: "Cut Plan Optimization", desc: "Reduce fabric wastage with intelligent marker and cut-plan algorithms." },
    { title: "Production Tracking", desc: "Real-time visibility into every stage of the manufacturing floor." },
    { title: "Quality Control", desc: "Integrated AQL standards and defect tracking for zero-defect exports." },
    { title: "Subcontracting", desc: "Manage outsourced job work with clear visibility into material movement." },
  ];

  const benefits = [
    { title: "Incremental Efficiency", desc: "Optimize processes to squeeze every bit of productivity from your lines.", icon: <Zap /> },
    { title: "Real-Time Visibility", desc: "Live tracking of WIP and inventory across all processing units.", icon: <BarChart3 /> },
    { title: "Pre-planned Activity", desc: "Predictive planning to eliminate bottlenecks before they occur.", icon: <Settings2 /> },
    { title: "Quality Assurance", desc: "Maintain global standards with automated digital checkpoints.", icon: <ShieldCheck /> },
    { title: "Waste Minimization", desc: "Drastically reduce fabric and material waste through smart optimization.", icon: <Scissors /> },
    { title: "Cost Optimization", desc: "Precise costing models to protect and improve your business margins.", icon: <TrendingUp /> },
  ];

  const otherIndustries = [
    { name: "Electronic", icon: <Zap className="text-blue-500" />, color: "bg-blue-50" },
    { name: "Personal Care / Cosmetics", icon: <Users2 className="text-green-500" />, color: "bg-green-50" },
    { name: "Other manufacturing", icon: <Settings2 className="text-orange-500" />, color: "bg-orange-50" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-rose-100 selection:text-rose-900">
      {/* Hero Section */}
      <section className="relative pt-10 pb-6 lg:pt-14 lg:pb-8 bg-[#FFF9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-rose-600"></span>
                <span className="text-rose-600 font-bold tracking-[0.2em] text-xs uppercase">Textiles & Apparel</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#1A1A1A] leading-[1.1] tracking-tight">
                Weaving Efficiency into <span className="text-rose-600">Every Thread</span>
              </h1>
              <p className="text-base text-gray-600 leading-relaxed max-w-xl font-medium">
                Tailored ERP solutions for textile mills, garment manufacturers, fashion brands, 
                and trading houses designed for global scale and local precision.
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                <Link href="/contact">
                  <button className="bg-rose-600 hover:bg-rose-700 text-white font-bold h-10 px-10 rounded-xl shadow-lg shadow-rose-200 transition-all hover:-translate-y-1 active:scale-95 text-sm uppercase tracking-wider">
                    Request Demo
                  </button>
                </Link>
                <Link href="/products/textile-erp" className="inline-flex items-center text-rose-600 font-bold hover:text-rose-700 transition-colors group">
                  View Product Details
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white z-10 aspect-[4/3]">
                <img 
                  src="/images/textile-handloom.png" 
                  alt="Professional Handloom Weaving" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>



              {/* Decorative elements */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-rose-200/30 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-rose-400/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Capabilities Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <span className="text-rose-600 font-bold text-xs uppercase tracking-[0.3em]">For Industries</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
               Purpose-Built for Textiles & Apparel
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">
               Industry-specific features designed to address your unique manufacturing challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center text-rose-600 mb-8 border border-rose-100 group-hover:bg-rose-600 group-hover:text-white transition-colors duration-500">
                   <Check className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4 tracking-tight">{cap.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 bg-[#FCFCFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
             <span className="text-rose-600 font-bold text-xs uppercase tracking-[0.3em]">The Benefits</span>
             <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
               Transform Your Textiles & Apparel Operations
             </h2>
             <p className="text-gray-500 max-w-2xl mx-auto font-medium">
                Achieve measurable improvements across your entire value chain.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
             {benefits.map((benefit, i) => (
               <div key={i} className="flex space-x-6">
                  <div className="flex-shrink-0">
                     <div className="w-10 h-10 rounded-xl bg-rose-600 flex items-center justify-center text-white shadow-lg shadow-rose-200">
                        {benefit.icon}
                     </div>
                  </div>
                  <div className="space-y-2">
                     <h4 className="text-lg font-black text-gray-900 tracking-tight uppercase">{benefit.title}</h4>
                     <p className="text-gray-500 text-sm leading-relaxed font-medium">{benefit.desc}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Product Spotlight Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-10 group">
                 <div className="space-y-4">
                    <span className="text-rose-600 font-bold text-xs uppercase tracking-[0.3em]">Our Product</span>
                    <h2 className="text-5xl font-black text-gray-900 tracking-tighter">Hanvrix Textile</h2>
                    <p className="text-base text-gray-500 font-medium">A specialized ERP for the next generation of textile manufacturers.</p>
                 </div>
                 
                 <div className="space-y-5">
                    {[
                      "Key Analytics & Insights",
                      "Automate WIP tracking",
                      "Unmatched Cost Control",
                      "Inventory Visibility",
                      "Total Compliance Management"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center space-x-4">
                         <div className="w-6 h-6 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100">
                             <Check className="h-4 w-4" />
                         </div>
                         <span className="font-black text-gray-700 uppercase tracking-tight text-sm">{item}</span>
                      </div>
                    ))}
                 </div>

                 <Link href="/products/textile-erp">
                    <button className="bg-rose-600 text-white font-bold h-10 px-10 rounded-2xl shadow-xl shadow-rose-200 transition-all hover:bg-rose-700 uppercase tracking-widest text-xs">
                       View Full Product Details
                    </button>
                 </Link>
              </div>

              <div className="relative">
                 <div className="absolute inset-0 bg-rose-600/5 rounded-[3rem] -rotate-6"></div>
                 <div className="relative glass-morphism rounded-[3rem] border border-gray-100 bg-white shadow-2xl overflow-hidden group aspect-video">
                    <img 
                      src="/images/textile-dashboard.png" 
                      alt="Hanvrix Textile ERP Dashboard" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                       <span className="text-white font-bold text-sm uppercase tracking-widest">Live System Preview</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Brand CTA */}
      <section className="py-10">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[10px] bg-gradient-to-br from-rose-700 via-rose-800 to-rose-950 p-12 md:p-20 text-center relative overflow-hidden shadow-2xl border border-white/10">
               <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
               <div className="relative z-10 space-y-8">
                  <div className="space-y-4">
                     <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1.1]">
                        Scale Your Textile Enterprise <br className="hidden md:block" />
                        Globally with Hanvrix
                     </h2>
                     <p className="text-rose-100/70 text-lg md:text-xl max-w-3xl mx-auto font-medium">
                        Join the world's leading manufacturers who have optimized their spinning, weaving, and processing operations with our specialized vertical ERP solution.
                     </p>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                     <Link href="/contact" className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto bg-[#CC8F47] hover:bg-[#B67E3C] text-white font-bold h-10 px-10 rounded-[10px] text-xs uppercase tracking-widest shadow-xl transition-all hover:-translate-y-1 active:scale-95">
                           Book a Demo
                        </button>
                     </Link>
                     <Link href="/contact" className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white border border-white/20 font-bold h-10 px-10 rounded-[10px] text-xs uppercase tracking-widest transition-all active:scale-95">
                           Contact Sales
                        </button>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
