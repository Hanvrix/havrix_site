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
      <section className="relative pt-16 pb-24 lg:pt-32 lg:pb-32 bg-[#FFF9FA]">
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
                Weaving Efficiency into <span className="text-rose-600 italic">Every Thread</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl font-medium">
                Tailored ERP solutions for textile mills, garment manufacturers, fashion brands, 
                and trading houses designed for global scale and local precision.
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                <Link href="/contact">
                  <button className="bg-rose-600 hover:bg-rose-700 text-white font-bold px-10 py-4 rounded-xl shadow-lg shadow-rose-200 transition-all hover:-translate-y-1 active:scale-95 text-sm uppercase tracking-wider">
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
                  src="https://images.unsplash.com/photo-1558444458-5cd05bcbd26d?auto=format&fit=crop&w=1200&q=80" 
                  alt="Textile industry manufacturing" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Stats Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-2xl border border-rose-50 z-20"
              >
                <div className="flex items-center space-x-4">
                   <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-600">
                      <Users2 className="h-6 w-6" />
                   </div>
                   <div>
                      <p className="text-2xl font-black text-gray-900 leading-none">150+</p>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Happy Customers</p>
                   </div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-rose-200/30 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-rose-400/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="flex items-center space-x-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
           <Link href="/" className="hover:text-rose-600 transition-colors">Home</Link>
           <ChevronRight className="h-3 w-3" />
           <Link href="/industries" className="hover:text-rose-600 transition-colors">Industries</Link>
           <ChevronRight className="h-3 w-3" />
           <span className="text-rose-600">Textiles & Apparel</span>
        </nav>
      </div>

      {/* Capabilities Section */}
      <section className="py-24 bg-white">
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
      <section className="py-24 bg-[#FCFCFC]">
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

      {/* Testimonial Section */}
      <section className="py-24 bg-[#FFF9FA]">
        <div className="max-w-4xl mx-auto px-4 text-center">
           <Quote className="h-16 w-16 text-rose-100 mx-auto mb-10" />
           <p className="text-2xl md:text-3xl font-bold text-gray-800 italic leading-relaxed mb-12">
             "The technical precision and architectural depth they brought to our textile processing units was world-class. It’s a tool that finally scales as fast as our production lines."
           </p>
           <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white mb-4 shadow-xl">
                 <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80" alt="Author" className="w-full h-full object-cover" />
              </div>
              <div>
                 <p className="text-lg font-black text-gray-900 tracking-tight">Sarah Thompson</p>
                 <p className="text-xs text-rose-600 font-bold uppercase tracking-widest mt-1">CTO, Global Apparel Corp</p>
              </div>
           </div>
        </div>
      </section>

      {/* Product Spotlight Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-10 group">
                 <div className="space-y-4">
                    <span className="text-rose-600 font-bold text-xs uppercase tracking-[0.3em]">Our Product</span>
                    <h2 className="text-5xl font-black text-gray-900 tracking-tighter">FlowSense Textile</h2>
                    <p className="text-lg text-gray-500 font-medium">A specialized ERP for the next generation of textile manufacturers.</p>
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
                    <button className="bg-rose-600 text-white font-bold px-10 py-5 rounded-2xl shadow-xl shadow-rose-200 transition-all hover:bg-rose-700 uppercase tracking-widest text-xs">
                       View Full Product Details
                    </button>
                 </Link>
              </div>

              <div className="relative">
                 <div className="absolute inset-0 bg-rose-600/5 rounded-[3rem] -rotate-6"></div>
                 <div className="p-8 md:p-12 glass-morphism rounded-[3rem] border border-gray-100 relative bg-white shadow-2xl overflow-hidden group">
                    <div className="bg-rose-50 p-6 rounded-2xl mb-8 flex items-center justify-between border border-rose-100">
                       <span className="text-xs font-black text-rose-600 uppercase tracking-widest">Dashboard Preview</span>
                       <div className="w-3 h-3 rounded-full bg-rose-600 animate-pulse"></div>
                    </div>
                    <div className="space-y-6">
                       <div className="h-2 bg-gray-100 rounded-full w-3/4"></div>
                       <div className="h-2 bg-gray-100 rounded-full w-1/2"></div>
                       <div className="grid grid-cols-2 gap-4 pt-4">
                          <div className="h-24 bg-rose-50/50 rounded-2xl border border-rose-100/50"></div>
                          <div className="h-24 bg-rose-50/50 rounded-2xl border border-rose-100/50"></div>
                       </div>
                       <div className="h-32 bg-gray-50 rounded-3xl border border-gray-100 mt-4 flex items-center justify-center">
                          <BarChart3 className="h-12 w-12 text-rose-200" />
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Guide Card */}
      <section className="py-12 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="#" className="block">
               <div className="p-10 bg-white rounded-[2.5rem] border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row items-center justify-between group">
                  <div className="flex items-center space-x-8">
                     <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-600 border border-rose-100 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                        <FileText className="h-8 w-8" />
                     </div>
                     <div>
                        <h4 className="text-2xl font-black text-gray-900 tracking-tight">Textile & Apparel ERP in 2026: Complete Guide</h4>
                        <p className="text-gray-500 font-medium">Learn how to modernize your operations with the latest ERP technologies.</p>
                     </div>
                  </div>
                  <div className="mt-6 md:mt-0">
                     <span className="text-rose-600 font-bold uppercase tracking-widest text-sm flex items-center">
                        Read Guide <ChevronRight className="ml-2 h-4 w-4" />
                     </span>
                  </div>
               </div>
            </Link>
         </div>
      </section>

      {/* Brand CTA */}
      <section className="py-24">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[4rem] bg-gradient-to-br from-rose-700 via-rose-800 to-rose-950 p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
               <div className="relative z-10 space-y-12">
                  <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
                     Ready to Transform Your <br />
                     Textiles & Apparel Operations?
                  </h2>
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                     <Link href="/contact" className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto bg-[#CC8F47] hover:bg-[#B67E3C] text-white font-bold px-12 py-6 rounded-2xl text-sm uppercase tracking-widest shadow-xl transition-all hover:-translate-y-1">
                           Book a Demo
                        </button>
                     </Link>
                     <Link href="/contact" className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white border-2 border-white/20 font-bold px-12 py-6 rounded-2xl text-sm uppercase tracking-widest transition-all">
                           Contact Sales
                        </button>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Explore Other Industries */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h3 className="text-3xl font-black text-gray-900 tracking-tight">Explore Other Industries</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {otherIndustries.map((industry, i) => (
                 <div key={i} className={`p-8 rounded-[2rem] ${industry.color} border border-transparent hover:border-white/50 transition-all cursor-pointer group`}>
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-10 shadow-sm">
                       {industry.icon}
                    </div>
                    <div className="flex items-center justify-between">
                       <h4 className="text-xl font-black text-gray-900 tracking-tight pr-4">{industry.name}</h4>
                       <ArrowRight className="h-6 w-6 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-2 transition-all" />
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
