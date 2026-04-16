import Section, { SectionHeader } from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { ArrowRight, Layers, Cpu, Zap, CheckCircle2, Rocket } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

export default function PortfolioPage() {
  const projects = [
    {
      title: "Hanvrix CRM Elite",
      category: "SaaS Architecture",
      description: "A high-performance customer relationship architecture that moves beyond simple spreadsheets. Track leads, automate follow-ups, and visualize your sales pipeline with zero friction.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      icon: <Layers className="h-6 w-6" />,
    },
    {
      title: "Textile Integrity System (TIS)",
      category: "Industries ERP",
      description: "A specialized ERP ecosystem for the textile industry. Automate supply chains, manage inventory in real-time, and eliminate manufacturing bottlenecks through data-driven precision.",
      image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=800",
      icon: <Cpu className="h-6 w-6" />,
    },
    {
      title: "Adaptive Workflow Automation",
      category: "Custom Automation",
      description: "Custom-built \"set-and-forget\" automation tools that bridge the gaps between your existing software. We digitize manual processes to reclaim your most valuable asset: time.",
      image: "https://images.unsplash.com/photo-151877066ae2b-518cfb7d608b?auto=format&fit=crop&q=80&w=800",
      icon: <Zap className="h-6 w-6" />,
    },
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
                  <span className="w-8 h-[2px] bg-brand-primary"></span>
                  <span>Tactical Scaling</span>
                </div>
                <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[1] mb-10 uppercase">
                   The <span className="text-brand-primary">Portfolio</span>
                </h1>
                <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto mb-12">
                   Explore our elite portfolio of SaaS products and Industries-grade software ecosystems designed for high-stakes business environments.
                </p>
                 <div className="flex justify-center mb-16">
                    <Link href="/contact">
                      <Button className="px-12 shadow-2xl shadow-brand-primary/20">
                        <Rocket className="w-5 h-5" /> Start Collaboration
                      </Button>
                    </Link>
                 </div>
             </div>
          </FadeIn>
        </div>
      </section>

      <Section light={true}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <Card className="!p-0 overflow-hidden flex flex-col h-full border-none bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-500 group relative">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700 z-20"></div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-bg-dark/40 group-hover:bg-bg-dark/20 transition-colors duration-500"></div>
                  <div className="absolute top-6 left-6 z-10">
                    <div className="px-4 py-1 bg-brand-primary text-bg-dark text-[11px] font-black uppercase tracking-widest rounded-full">
                      {p.category}
                    </div>
                  </div>
                </div>

                <div className="!p-8 flex flex-col flex-grow relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-primary shadow-sm group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 shrink-0">
                      {p.icon}
                    </div>
                    <h3 className="text-xl font-black text-bg-dark tracking-tight leading-none uppercase">{p.title}</h3>
                  </div>

                  <p className="text-gray-500 font-medium text-[15px] leading-relaxed mb-6">
                    {p.description}
                  </p>

                  <div className="mt-auto pt-6 border-t border-slate-100">
                    <Link href="/contact" className="inline-flex items-center text-bg-dark font-black uppercase tracking-widest text-[13px] group/btn hover:text-brand-primary transition-colors">
                      Initialize Review <ArrowRight className="ml-3 h-5 w-5 group-hover/btn:-rotate-45 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section light={false} className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }}></div>
        <FadeIn>
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="bg-white/5 rounded-[40px] p-16 md:p-32 text-center border border-white/10 backdrop-blur-sm">
                <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-[1.1]">
                   Start Your <span className="text-brand-primary">Dominance</span>
                </h2>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
                  We engine digital experiences that don&apos;t just exist—they lead.
                  Let&apos;s architect your next tactical advantage today.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Link href="/contact" className="w-full sm:w-auto">
                    <Button className="px-12 shadow-2xl shadow-brand-primary/20 w-full"><Rocket className="w-5 h-5" /> Deploy Project</Button>
                  </Link>
                </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section light={true}>
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-3 text-brand-primary font-black uppercase tracking-[4px] text-[13px] mb-8">
              <CheckCircle2 className="h-5 w-5" />
              <span>Verified Impact</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-bg-dark italic leading-tight mb-12 tracking-tighter uppercase">
              "Hanvrix didn't just build our platform; they engineered a digital powerhouse that scaled our revenue by <span className="text-brand-primary underline underline-offset-8">400%</span>."
            </h3>
            <div className="flex items-center justify-center space-x-6">
              <div className="w-16 h-16 bg-bg-dark rounded-3xl flex items-center justify-center font-black text-white text-xl">DM</div>
              <div className="text-left">
                <p className="font-black text-bg-dark text-xl uppercase tracking-tight">David Miller</p>
                <p className="text-gray-500 font-black uppercase tracking-[2px] text-[12px]">Director @ TexGlobal</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
}
