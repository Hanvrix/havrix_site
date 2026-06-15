import Section, { SectionHeader } from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import {
  Target, Eye, Shield, Users2, CheckCircle2, ArrowRight
} from "lucide-react";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import BreadcrumbHeader from "@/components/ui/BreadcrumbHeader";

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
    <div className="bg-[#ecf0f0] min-h-screen">
      {/* 1. Header / Intro */}
      <BreadcrumbHeader title="About Our Company" pageName="About Us" />

      {/* 2. Philosophy Section */}
      <Section light={true}>
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Column: Image with Skew & Shadow */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-brand-primary/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative rounded-[2.5rem] overflow-hidden border-[12px] border-white shadow-2xl skew-y-1">
                <Image 
                  src="/hero_software_engineer.jpg" 
                  alt="Innovative Tech Environment" 
                  width={800}
                  height={600}
                  className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
            {/* Right Column: Text content */}
            <div className="text-left">
              <span className="inline-flex items-center gap-2 text-brand-primary font-bold  tracking-[2px] text-xs mb-3">
                Get to Know Us
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-[#0c1e21] tracking-tighter mb-8 leading-tight">
                Our Engineering Philosophy
              </h2>
              <div className="space-y-6 text-[#364e52] text-lg font-medium leading-relaxed mb-10">
                <p>
                  We simplify complex business challenges through smart technology, creative thinking, and reliable solutions that provide the foundations required to lead your industry in a digital-first economy.
                </p>
                <p>
                  Our goal is to bridge the gap between technical features and business value. Every project is an ROI-driven infrastructure that outlasts market trends.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                {["Elite Architects", "Scalable Systems", "ROI Driven"].map(tag => (
                  <span key={tag} className="px-6 py-2.5 bg-white border border-[#c9d1d1] rounded-full text-[#0c1e21] font-bold text-sm tracking-tight hover:bg-brand-primary hover:text-white hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/20 cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* 3. Mission, Vision, Values Cards */}
        <div className="mt-25">
          <SectionHeader
            title="Vision, Mission & Values"
            subtitle="The core principles that drive our engineering excellence and client success."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Card key={index} className="group px-8 py-5 relative overflow-hidden text-left bg-white border-y-0 border-r-0 border-l-4 border-brand-primary">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="flex items-center space-x-5 mb-8 relative z-10">
                    <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary transition-all group-hover:bg-brand-primary group-hover:text-white group-hover:scale-110 duration-500">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-black text-[#0c1e21] tracking-tighter  leading-none">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-[#364e52] leading-relaxed font-medium text-[16px] relative z-10">
                    {card.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* 4. Why Choose Us Content */}
        <div className="mt-15 pt-15 border-t border-[#c9d1d1]/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            
            <div className="flex flex-col text-left">
              <span className="inline-flex items-center gap-2 text-brand-primary font-bold  tracking-[2px] text-lg mb-3">
                Why Partners Choose Hanvrix
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-[#0c1e21] tracking-tighter mb-4 leading-tight">
                A Technology Partner You Can Trust
              </h2>
              <p className="text-lg text-[#364e52] leading-relaxed font-medium mb-10">
                We combine innovation, expertise, and strategic thinking to deliver high-quality digital solutions tailored to business needs.
              </p>

              {/* Repaired text colors on dark card */}
              <div className="bg-[#0c1e21] text-white rounded-[24px] p-6 md:p-8 border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-12 h-12 bg-brand-primary rounded-2xl flex items-center justify-center text-white">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <span className="text-2xl font-black text-white tracking-tighter ">Hanvrix<span className="text-brand-primary">.</span></span>
                </div>
                <h3 className="text-2xl font-black text-white mb-6 leading-tight tracking-tight ">
                  Smart Technology Solutions For Modern Businesses
                </h3>
                <p className="text-gray-400 leading-relaxed font-medium text-[16px] mb-8">
                  Our focus is on performance, reliability, and long-term value for our clients. We build tactical advantages for ambitious enterprises.
                </p>
                <div className="h-1 lg:w-48 bg-brand-primary"></div>
              </div>
            </div>

            <div className="space-y-12 pt-12 text-left">
              <div className="group flex items-center gap-6 px-6 py-4 bg-white rounded-[24px] border-y-0 border-r-0 border-l-4 border-brand-primary transition-all duration-300">
                <div className="flex-shrink-0 w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                  <Target className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-black text-[#0c1e21] mb-3 tracking-tight ">Technical Strategy</h4>
                  <p className="text-[#364e52] leading-relaxed font-medium text-[15px]">
                    Our strategic approach focuses on understanding business needs and delivering solutions that drive efficiency.
                  </p>
                </div>  
              </div>

              <div className="group flex items-center gap-6 px-6 py-4 bg-white rounded-[24px] border-y-0 border-r-0 border-l-4 border-brand-primary transition-all duration-300">
                <div className="flex-shrink-0 w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                  <Users2 className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-black text-[#0c1e21] mb-3 tracking-tight ">Global Audience</h4>
                  <p className="text-[#364e52] leading-relaxed font-medium text-[15px]">
                    We deliver technology solutions that create meaningful impact and long-term value for a global client base.
                  </p>
                </div>
              </div>

              {/* Stats card */}
              <div className="flex items-center justify-between p-8 bg-brand-primary rounded-[24px] text-white shadow-xl shadow-brand-primary/10">
                <div>
                  <div className="text-4xl font-black mb-1">100%</div>
                  <div className="font-bold text-xs  tracking-widest opacity-80">Project Success</div>
                </div>
                <div className="w-px h-16 bg-white/20"></div>
                <div>
                  <div className="text-4xl font-black mb-1">24/7</div>
                  <div className="font-bold text-xs  tracking-widest opacity-80">Expert Support</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </Section>
    </div>
  );
}
