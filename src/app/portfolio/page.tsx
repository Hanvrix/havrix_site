import Section, { SectionHeader } from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { ArrowRight, Layers, Cpu, Zap } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

export default function PortfolioPage() {
  const projects = [
    {
      title: "Hanvrix CRM Elite",
      category: "SaaS Architecture",
      description: "A high-performance customer relationship architecture that moves beyond simple spreadsheets. Track leads, automate follow-ups, and visualize your sales pipeline with zero friction.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      icon: <Layers className="text-[#b45309]" />,
    },
    {
      title: "Textile Integrity System (TIS)",
      category: "Industries ERP",
      description: "A specialized ERP ecosystem for the textile industry. Automate supply chains, manage inventory in real-time, and eliminate manufacturing bottlenecks through data-driven precision.",
      image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=800",
      icon: <Cpu className="text-[#b45309]" />,
    },
    {
      title: "Adaptive Workflow Automation",
      category: "Custom Automation",
      description: "Custom-built \"set-and-forget\" automation tools that bridge the gaps between your existing software. We digitize manual processes to reclaim your most valuable asset: time.",
      image: "https://images.unsplash.com/photo-151877066ae2b-518cfb7d608b?auto=format&fit=crop&q=80&w=800",
      icon: <Zap className="text-[#b45309]" />,
    },
  ];

  return (
    <div className="bg-white">
      <Section className="pb-10 text-center">
        <FadeIn>
          <h6 className="text-slate-500 font-bold tracking-wider text-[13px] uppercase mb-4">Tactical Scaling</h6>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
            The Portfolio
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Explore our elite portfolio of SaaS products and Industries-grade software ecosystems
            designed for high-stakes business environments.
          </p>
        </FadeIn>
      </Section>

      <Section light={false}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <Card className="p-0 overflow-hidden flex flex-col h-full rounded-[10px] hover:shadow-xl transition-shadow">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center border border-gray-200">
                      {p.icon}
                    </div>
                    <div className="text-[12px] font-bold text-slate-500 uppercase tracking-wider">
                      {p.category}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-4">{p.title}</h3>
                  <p className="text-slate-600 font-medium text-[14px] leading-relaxed mb-8 flex-grow">
                    {p.description}
                  </p>

                  <div className="mt-auto">
                    <Link href="/contact" className="inline-flex items-center text-slate-900 font-semibold text-[14px] hover:text-[#b45309] transition-colors">
                      Initialize Review <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section className="py-10">
        <FadeIn>
          <div className="bg-slate-50 rounded-[10px] p-16 md:p-24 text-center border border-gray-200">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Start Your Dominance</h2>
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
              We engine digital experiences that don&apos;t just exist—they lead.
              Let&apos;s architect your next tactical advantage today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="w-full bg-[#b45309] hover:bg-[#92400e]">Deploy Project</Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section light={false} className="border-t border-gray-200">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h6 className="text-slate-500 font-bold tracking-wider text-[13px] uppercase mb-8">Verified Impact</h6>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 italic leading-relaxed mb-10">
              "Hanvrix didn't just build our platform; they engineered a digital powerhouse that scaled our revenue by 400%."
            </h3>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center font-bold text-white">DM</div>
              <div className="text-left">
                <p className="font-bold text-slate-900 text-[15px]">David Miller</p>
                <p className="text-slate-500 font-medium text-[13px]">Director @ TexGlobal</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
}
