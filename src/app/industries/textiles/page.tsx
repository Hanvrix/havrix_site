import { 
  Check, 
  ArrowRight,
  BarChart3,
  Scissors,
  Settings2,
  TrendingUp,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Layers,
  PlayCircle,
  LayoutGrid
} from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Section, { SectionHeader } from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";

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

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-bg-dark pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/10 blur-[150px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeIn direction="left">
              <div className="space-y-8">
                <div className="flex items-center space-x-3 text-brand-primary font-black uppercase tracking-[4px] text-[13px]">
                   <span className="w-10 h-[2px] bg-brand-primary"></span>
                   <span>Textiles & Apparel</span>
                </div>
                <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter">
                  Weaving Efficiency <br />
                  <span className="text-brand-primary">into Every Thread</span>
                </h1>
                <p className="text-xl text-gray-400 leading-relaxed max-w-xl font-medium">
                  Tailored ERP solutions for textile mills, garment manufacturers, fashion brands, 
                  and trading houses designed for global scale and local precision.
                </p>
                <div className="flex flex-wrap gap-6 pt-4 items-center">
                  <Link href="/contact">
                    <Button className="px-10"><Calendar className="w-5 h-5" /> Request Demo</Button>
                  </Link>
                  <Link href="/products/textile-erp" className="group inline-flex items-center text-white font-bold hover:text-brand-primary transition-colors text-[16px]">
                    View Product Details
                    <div className="ml-3 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                       <ArrowRight className="h-4 w-4 transition-transform group-hover:-rotate-45" />
                    </div>
                  </Link>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="relative group">
                <div className="absolute -inset-4 bg-brand-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative rounded-[2.5rem] overflow-hidden border-[12px] border-white/10 shadow-2xl skew-x-1">
                  <img 
                    src="/images/textile-handloom.png" 
                    alt="Professional Handloom Weaving" 
                    className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/60 via-transparent to-transparent"></div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Capabilities Section */}
      <Section light={true}>
        <FadeIn>
           <SectionHeader
              centered={true}
              title="Purpose-Built for Textiles & Apparel"
              subtitle="Industry-specific features designed to address your unique manufacturing challenges and drive digital transformation."
           />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <Card className="group !p-8 border-none bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="flex items-center gap-5 mb-6 relative z-10">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center text-brand-primary shadow-sm group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 group-hover:scale-110">
                     <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-black text-bg-dark tracking-tight leading-tight">{cap.title}</h3>
                </div>
                <p className="text-gray-500 text-[15px] leading-relaxed font-medium relative z-10">{cap.desc}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Benefits Section */}
      <Section light={false} className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-primary/5 blur-[100px] rounded-full"></div>
        <FadeIn>
           <SectionHeader
              centered={true}
              theme="dark"
              title="Transform Your Operations"
              subtitle="Achieve measurable improvements across your entire value chain with our high-velocity manufacturing methodology."
           />
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
           {benefits.map((benefit, i) => (
             <FadeIn key={i} delay={i * 0.1}>
               <div className="group flex space-x-6 items-start p-5 bg-white/5 rounded-[2rem] border border-white/5 hover:border-brand-primary/30 transition-all duration-500">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                    {benefit.icon}
                  </div>
                  <div>
                     <h4 className="text-xl font-black text-white tracking-tight mb-2 leading-none">{benefit.title}</h4>
                     <p className="text-gray-400 text-[15px] leading-relaxed font-medium">{benefit.desc}</p>
                  </div>
               </div>
             </FadeIn>
           ))}
        </div>
      </Section>

      {/* Product Spotlight Section */}
      <Section light={true}>
         <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center">
            <FadeIn direction="left">
              <div className="space-y-10">
                <div>
                  <SectionHeader
                    centered={false}
                    title="Hanvrix Textile ERP"
                    subtitle="A specialized ERP for the next generation of textile manufacturers. Tactical, scalable, and ROI-driven."
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   {[
                     "Key Analytics & Insights",
                     "Automate WIP tracking",
                     "Unmatched Cost Control",
                     "Inventory Visibility",
                     "Total Compliance Management"
                   ].map((item, i) => (
                     <div key={i} className="flex items-center space-x-3 group">
                        <div className="w-6 h-6 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all">
                            <Check className="h-3.5 w-3.5" />
                        </div>
                        <span className="font-bold text-bg-dark tracking-tight">{item}</span>
                     </div>
                   ))}
                </div>

                <div className="pt-6">
                  <Link href="/products/textile-erp">
                     <Button variant="outline" className="px-10"><Layers className="w-5 h-5" /> View Full Product Details</Button>
                  </Link>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="relative group max-w-xl lg:max-w-none lg:w-[90%] ml-auto">
                 {/* Glow Background */}
                 <div className="absolute -inset-10 bg-brand-primary/20 blur-[120px] rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-1000"></div>
                 
                 {/* PC Monitor / Browser Frame */}
                 <div className="relative rounded-[2rem] bg-slate-900 border-[12px] border-slate-800 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)] overflow-hidden scale-100 group-hover:scale-[1.02] transition-transform duration-700">
                    {/* Top Browser Bar */}
                    <div className="h-10 bg-slate-800 border-b border-white/5 flex items-center px-6 justify-between">
                       <div className="flex space-x-2">
                          <div className="w-3 h-3 rounded-full bg-red-400/30"></div>
                          <div className="w-3 h-3 rounded-full bg-amber-400/30"></div>
                          <div className="w-3 h-3 rounded-full bg-emerald-400/30"></div>
                       </div>
                       <div className="px-4 py-1 bg-white/5 rounded-md text-[10px] text-gray-500 font-bold tracking-widest uppercase">hanvrix-erp.v2</div>
                       <div className="w-10"></div>
                    </div>
                    
                    <img 
                      src="/images/textile-erp-dashboard-new.png" 
                      alt="Hanvrix Textile ERP Dashboard" 
                      className="w-full h-auto opacity-100"
                    />
                    
                    {/* Perspective Highlight */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
                 </div>

                 {/* Floating Metric Badge */}
                 <div className="absolute -bottom-6 -right-6 bg-brand-primary text-white p-4 rounded-3xl shadow-2xl backdrop-blur-xl border border-white/20 hidden lg:block transform group-hover:-translate-y-4 transition-transform duration-500">
                    <div className="flex items-center space-x-4">
                       <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                          <BarChart3 className="w-6 h-6" />
                       </div>
                       <div>
                          <div className="text-xl font-black leading-none mb-1">94.2%</div>
                          <div className="text-[10px] font-bold tracking-widest opacity-80">Cycle Efficiency</div>
                       </div>
                    </div>
                 </div>
              </div>
            </FadeIn>
         </div>
      </Section>

      {/* Brand CTA */}
      <section className="bg-bg-dark py-20 relative overflow-hidden text-center">
         <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }}></div>
         <FadeIn>
           <div className="max-w-4xl mx-auto px-4 relative z-10">
              <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[1] mb-8 uppercase">
                Scale Your <span className="text-brand-primary">Textile Enterprise</span> Globally
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed mb-12">
                Join the world&apos;s leading manufacturers who have optimized their operations with our specialized ERP solution.
              </p>
              <div className="flex justify-center flex-col sm:flex-row gap-6">
                <Link href="/contact">
                  <Button className="px-12 h-[54px]"><Calendar className="w-5 h-5" /> Book a Strategic Demo</Button>
                </Link>
                <Link href="/about">
                   <Button variant="white" className="px-12 h-[54px]"><LayoutGrid className="w-5 h-5" /> Read Case Studies</Button>
                </Link>
              </div>
           </div>
         </FadeIn>
      </section>
    </div>
  );
}
