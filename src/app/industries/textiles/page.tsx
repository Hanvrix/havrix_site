import { 
  Check, 
  ArrowRight,
  BarChart3,
  Scissors,
  Settings2,
  TrendingUp,
  Zap,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
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
    { title: "Incremental Efficiency", desc: "Optimize processes to squeeze every bit of productivity from your lines.", icon: <Zap className="text-[#b45309]" /> },
    { title: "Real-Time Visibility", desc: "Live tracking of WIP and inventory across all processing units.", icon: <BarChart3 className="text-[#b45309]" /> },
    { title: "Pre-planned Activity", desc: "Predictive planning to eliminate bottlenecks before they occur.", icon: <Settings2 className="text-[#b45309]" /> },
    { title: "Quality Assurance", desc: "Maintain global standards with automated digital checkpoints.", icon: <ShieldCheck className="text-[#b45309]" /> },
    { title: "Waste Minimization", desc: "Drastically reduce fabric and material waste through smart optimization.", icon: <Scissors className="text-[#b45309]" /> },
    { title: "Cost Optimization", desc: "Precise costing models to protect and improve your business margins.", icon: <TrendingUp className="text-[#b45309]" /> },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-8 pb-10 lg:pt-12 lg:pb-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <FadeIn direction="left">
              <div className="space-y-8">
                <h6 className="text-slate-500 font-bold tracking-wider text-[13px] uppercase mb-4">Textiles & Apparel</h6>
                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
                  Weaving Efficiency into Every Thread
                </h1>
                <p className="text-[17px] text-slate-600 leading-relaxed max-w-xl font-medium">
                  Tailored ERP solutions for textile mills, garment manufacturers, fashion brands, 
                  and trading houses designed for global scale and local precision.
                </p>
                <div className="flex gap-4 pt-4 items-center">
                  <Link href="/contact">
                    <Button className="bg-[#b45309] hover:bg-[#92400e]">Request Demo</Button>
                  </Link>
                  <Link href="/products/textile-erp" className="inline-flex items-center text-slate-900 font-semibold hover:text-slate-600 transition-colors text-[14px]">
                    View Product Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="relative aspect-[4/3] rounded-[10px] overflow-hidden border border-gray-200 shadow-sm bg-slate-50 hover:shadow-md transition-shadow">
                <img 
                  src="/images/textile-handloom.png" 
                  alt="Professional Handloom Weaving" 
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Capabilities Section */}
      <Section light={true}>
        <FadeIn>
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <h6 className="text-slate-500 font-bold tracking-wider text-[13px] uppercase mb-4">For Industries</h6>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
               Purpose-Built for Textiles & Apparel
            </h2>
            <p className="text-slate-600 font-medium">
               Industry-specific features designed to address your unique manufacturing challenges.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 mb-6 border border-gray-200">
                   <Check className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">{cap.title}</h3>
                <p className="text-slate-600 text-[14px] leading-relaxed font-medium">{cap.desc}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Benefits Section */}
      <Section light={false}>
        <FadeIn>
          <div className="text-center mb-10 max-w-2xl mx-auto">
             <h6 className="text-slate-500 font-bold tracking-wider text-[13px] uppercase mb-4">The Benefits</h6>
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
               Transform Your Operations
             </h2>
             <p className="text-slate-600 font-medium">
                Achieve measurable improvements across your entire value chain.
             </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
           {benefits.map((benefit, i) => (
             <FadeIn key={i} delay={i * 0.1}>
               <div className="flex space-x-5 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white border border-gray-200 shadow-sm flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <div>
                     <h4 className="text-[15px] font-bold text-slate-900 tracking-tight mb-2">{benefit.title}</h4>
                     <p className="text-slate-600 text-[13px] leading-relaxed font-medium">{benefit.desc}</p>
                  </div>
               </div>
             </FadeIn>
           ))}
        </div>
      </Section>

      {/* Product Spotlight Section */}
      <Section light={true}>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="space-y-8">
                <div>
                   <h6 className="text-slate-500 font-bold tracking-wider text-[13px] uppercase mb-4">Our Product</h6>
                   <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tighter mb-4">Hanvrix Textile ERP</h2>
                   <p className="text-[15px] text-slate-600 font-medium leading-relaxed">A specialized ERP for the next generation of textile manufacturers.</p>
                </div>
                
                <div className="space-y-4">
                   {[
                     "Key Analytics & Insights",
                     "Automate WIP tracking",
                     "Unmatched Cost Control",
                     "Inventory Visibility",
                     "Total Compliance Management"
                   ].map((item, i) => (
                     <div key={i} className="flex items-center space-x-3">
                        <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center border border-gray-200">
                            <Check className="h-3 w-3" />
                        </div>
                        <span className="font-semibold text-slate-700 text-[14px]">{item}</span>
                     </div>
                   ))}
                </div>

                <Link href="/products/textile-erp" className="inline-block mt-4">
                   <Button className="bg-[#b45309] hover:bg-[#92400e]">View Full Product Details</Button>
                </Link>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="rounded-[10px] border border-gray-200 bg-slate-50 p-2 shadow-sm hover:shadow-md transition-shadow">
                 <div className="rounded-md overflow-hidden aspect-[4/3] bg-white border border-gray-200 relative">
                    <img 
                      src="/images/textile-dashboard.png" 
                      alt="Hanvrix Textile ERP Dashboard" 
                      className="w-full h-full object-cover"
                    />
                 </div>
              </div>
            </FadeIn>
         </div>
      </Section>

      {/* Brand CTA */}
      <Section light={false} className="py-16 text-center">
         <FadeIn>
           <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
                Scale Your Textile Enterprise Globally
              </h2>
              <p className="text-slate-600 text-[17px] max-w-2xl mx-auto font-medium leading-relaxed mb-8">
                Join the world's leading manufacturers who have optimized their operations with our specialized ERP solution.
              </p>
              <div className="flex justify-center gap-4">
                <Link href="/contact">
                  <Button className="bg-[#b45309] hover:bg-[#92400e]">Book a Demo</Button>
                </Link>
              </div>
           </div>
         </FadeIn>
      </Section>
    </div>
  );
}
