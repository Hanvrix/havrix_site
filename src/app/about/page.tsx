import Section, { SectionHeader } from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import {
  Target, Eye, Shield, Users2, CheckCircle2, ArrowRight
} from "lucide-react";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Hanvrix | Top IT Company in Salem & Software Experts",
  description: "Learn about Hanvrix, the best software company in Salem. We provide specialized textile software and Salem IT services for global businesses in Tamil Nadu.",
};

export default function AboutPage() {
  const aboutCards = [
    {
      title: "Our Mission",
      description: "To provide businesses with the technical precision required to lead their industries in a digital-first economy, creating sustainable success.",
      icon: Target,
    },
    {
      title: "Our Vision",
      description: "To become the global benchmark for technical excellence, where business automation and human creativity converge for limitless scale.",
      icon: Eye,
    },
    {
      title: "Core Values",
      description: "We bridge the gap between technical features and business value. Every project is an ROI-driven infrastructure that is built to last.",
      icon: Shield,
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Header / Intro */}
      <section className="bg-bg-dark pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn direction="up">
             <div className="max-w-3xl">
                <div className="flex items-center space-x-3 text-brand-primary font-black uppercase tracking-[4px] text-[13px] mb-6">
                  <span className="w-10 h-[2px] bg-brand-primary"></span>
                  <span>About Our Company</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight mb-8">
                  The Best <span className="text-brand-primary">Software Company in Salem</span> <br />
                  <span className="text-brand-primary">Engineering Your Success</span>
                </h1>
                <p className="text-xl text-gray-400 font-medium leading-relaxed">
                   Hanvrix is the leading **IT company in Salem**, dedicated to providing world-class **Textile software** and specialized **Salem IT** services for modern enterprises in Tamil Nadu.
                </p>
             </div>
          </FadeIn>
        </div>
      </section>

      <Section light={true}>
        {/* 1. About Hanvrix Content */}
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-brand-primary/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative rounded-[2.5rem] overflow-hidden border-[12px] border-white shadow-2xl skew-y-1">
                <Image 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                  alt="Innovative Tech Environment" 
                  width={800}
                  height={600}
                  className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
            <div>
              <SectionHeader
                centered={false}
                title="Our Engineering Philosophy"
                subtitle="We simplify complex business challenges through smart technology, creative thinking, and reliable solutions that provide the foundations required to lead your industry in a digital-first economy."
              />
              <div className="space-y-3 text-gray-600 text-lg font-medium leading-relaxed mb-10">
                <p>
                  Our goal is to bridge the gap between technical features and business value. Every project is an ROI-driven infrastructure that outlasts market trends.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                 {["Elite Architects", "Scalable Systems", "ROI Driven"].map(tag => (
                   <span key={tag} className="px-6 py-2 bg-slate-50 border border-slate-200 rounded-full text-bg-dark font-bold text-sm tracking-tight hover:bg-brand-primary hover:text-white hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/20">
                     {tag}
                   </span>
                 ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* 2. Mission, Vision, Values Cards */}
        <div className="mt-32">
          <SectionHeader
            title="Vision, Mission & Values"
            subtitle="The core principles that drive our engineering excellence and client success."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Card key={index} className="group !p-10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="flex items-center space-x-5 mb-8 relative z-10">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary transition-all group-hover:bg-brand-primary group-hover:text-white group-hover:scale-110 duration-500">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-black text-bg-dark tracking-tighter uppercase leading-none">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 leading-relaxed font-medium text-lg relative z-10">
                    {card.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* 3. Why Choose Us Content */}
        <div className="mt-20 pt-20 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            
            <div className="flex flex-col">
              <SectionHeader
                centered={false}
                title="A Technology Partner You Can Trust"
                subtitle="We combine innovation, expertise, and strategic thinking to deliver high-quality digital solutions tailored to business needs."
              />

              <Card className="bg-bg-dark text-white border-none !p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center text-white">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <span className="text-2xl font-black text-black tracking-tighter uppercase">Hanvrix<span className="text-brand-primary">.</span></span>
                </div>
                <h3 className="text-2xl font-black text-black mb-6 leading-tight tracking-tight">
                   Smart Technology Solutions For Modern Businesses
                </h3>
                <p className="text-gray-400 leading-relaxed font-medium text-lg mb-8">
                   Our focus is on performance, reliability, and long-term value for our clients. We build tactical advantages for ambitious enterprises.
                </p>
                <div className="h-1 lg:w-48 bg-brand-primary"></div>
              </Card>
            </div>

            <div className="space-y-12 pt-12">
              <div className="group flex gap-6 p-6 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-brand-primary/30 transition-all">
                <div className="flex-shrink-0 w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-primary shadow-sm group-hover:bg-brand-primary group-hover:text-white transition-all">
                  <Target className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-black text-bg-dark mb-3 tracking-tight">Technical Strategy</h4>
                  <p className="text-gray-500 leading-relaxed font-medium text-lg">
                    Our strategic approach focuses on understanding business needs and delivering solutions that drive efficiency.
                  </p>
                </div>
              </div>

              <div className="group flex gap-6 p-6 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-brand-primary/30 transition-all">
                <div className="flex-shrink-0 w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-primary shadow-sm group-hover:bg-brand-primary group-hover:text-white transition-all">
                  <Users2 className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-black text-bg-dark mb-3 tracking-tight">Global Audience</h4>
                  <p className="text-gray-500 leading-relaxed font-medium text-lg">
                    We deliver technology solutions that create meaningful impact and long-term value for a global client base.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between p-6 bg-brand-primary rounded-[2.5rem] text-white">
                 <div>
                    <div className="text-3xl font-black mb-1">100%</div>
                    <div className="font-bold text-sm uppercase tracking-widest opacity-80">Project Success</div>
                 </div>
                 <div className="w-px h-16 bg-white/20"></div>
                 <div>
                    <div className="text-3xl font-black mb-1">24/7</div>
                    <div className="font-bold text-sm uppercase tracking-widest opacity-80">Expert Support</div>
                 </div>
              </div>
            </div>
            
          </div>
        </div>
      </Section>
    </div>
  );
}
