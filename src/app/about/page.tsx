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
    <div className="bg-background min-h-screen">
      {/* 1. Header / Intro */}
      <BreadcrumbHeader title="About Hanvrix" pageName="About Us" />

      {/* 2. Philosophy Section */}
      <Section light={true}>
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Image with Ambient Glow & Floating Badge */}
            <div className="lg:col-span-6 relative group">
              <div className="absolute -inset-4 bg-primary-green/15 blur-3xl rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative rounded-[2.5rem] overflow-hidden border-[8px] border-white shadow-2xl bg-white">
                <Image 
                  src="/images/about.png" 
                  alt="Hanvrix Software Engineering Philosophy" 
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>

              {/* Floating Experience Badge Overlay */}
              <div className="absolute -bottom-6 -left-4 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-xl flex items-center gap-4 z-20">
                <div className="w-12 h-12 rounded-xl bg-primary-green/15 text-primary-green flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-7 h-7 text-primary-green" />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-black text-[#0F2D5C]">100+ Enterprise</div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Solutions Delivered</div>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Typography & Value Points */}
            <div className="lg:col-span-6 text-left space-y-6">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#DCFCE7] text-primary-green-dark font-bold text-xs uppercase tracking-wider">
                GET TO KNOW US
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F2D5C] tracking-tight leading-[1.15]">
                Our Engineering{" "}
                <span className="text-primary-green font-handwriting text-4xl sm:text-5xl lg:text-6xl font-normal inline-block">
                  Philosophy
                </span>
              </h2>

              <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
                We simplify complex business challenges through smart technology, creative thinking, and reliable software architecture that provides the foundations required to lead your industry in a digital-first economy.
              </p>

              {/* Checkmark Highlights */}
              <div className="space-y-3.5 pt-2">
                {[
                  "Architected for High Scalability & Zero Overhead",
                  "ROI-Driven Software Solutions Tailored to Your Growth",
                  "ISO-Standard Security & Long-Term System Reliability"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary-green/15 text-primary-green flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-primary-green" />
                    </div>
                    <span className="text-slate-700 font-bold text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>

              {/* Pill Tags */}
              <div className="flex flex-wrap gap-3 pt-3">
                {["Elite Software Architects", "Scalable Systems", "ROI Driven"].map(tag => (
                  <span 
                    key={tag} 
                    className="px-5 py-2 rounded-full bg-slate-100 border border-slate-200 text-[#0F2D5C] font-extrabold text-xs sm:text-sm tracking-tight hover:bg-primary-green hover:text-white hover:border-primary-green hover:-translate-y-0.5 transition-all duration-300 shadow-2xs cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>

          </div>
        </FadeIn>

        {/* 3. Mission, Vision, Values Cards — Compact & Sleek Height */}
        <div className="mt-14">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#DCFCE7] text-primary-green-dark font-bold text-xs uppercase tracking-wider">
              VISION &amp; VALUES
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F2D5C] tracking-tight">
              Our Core Purpose &amp; <span className="text-primary-green font-handwriting text-3xl sm:text-4xl lg:text-5xl font-normal inline-block">Principles</span>
            </h2>
            <p className="text-slate-600 font-medium text-sm sm:text-base">
              The core principles that drive our engineering excellence, culture, and long-term client partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {aboutCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div key={index} className="group p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-primary-green/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden text-left flex flex-col justify-between">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary-green/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                  
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary-green/10 border border-primary-green/20 text-primary-green flex items-center justify-center mb-4 group-hover:bg-primary-green group-hover:text-white transition-all duration-300 shadow-2xs">
                      <Icon className="h-6 w-6 stroke-[1.8]" />
                    </div>

                    <h3 className="text-xl font-black text-[#0F2D5C] tracking-tight mb-2 group-hover:text-primary-green transition-colors">
                      {card.title}
                    </h3>

                    <p className="text-slate-600 font-medium text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-extrabold text-primary-green uppercase tracking-wider">
                    <span>Hanvrix Standard</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary-green" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. Why Partners Choose Hanvrix — Compact & Balanced Height */}
        <div className="mt-14 pt-10 border-t border-slate-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Heading & Dark Hero Banner */}
            <div className="lg:col-span-6 flex flex-col text-left space-y-4">
              <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#DCFCE7] text-primary-green-dark font-bold text-xs uppercase tracking-wider w-fit">
                WHY CHOOSE US
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F2D5C] tracking-tight leading-[1.2]">
                A Technology Partner <span className="text-primary-green font-handwriting text-3xl sm:text-4xl lg:text-5xl font-normal inline-block">You Can Trust</span>
              </h2>

              <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                We combine innovation, technical expertise, and strategic thinking to deliver high-quality digital solutions tailored to your unique business needs.
              </p>

              {/* Dark Hero Accent Card */}
              <div className="bg-gradient-to-br from-[#090D16] to-[#0F172A] text-white rounded-2xl p-6 sm:p-7 border border-slate-800/80 relative overflow-hidden shadow-xl mt-2">
                <div className="absolute top-0 right-0 w-36 h-36 bg-primary-green/15 blur-[50px] rounded-full pointer-events-none"></div>

                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-primary-green/20 text-primary-green flex items-center justify-center border border-primary-green/40">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <span className="text-xl font-black tracking-tight text-white">Hanvrix<span className="text-primary-green">.</span></span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white mb-2 leading-snug tracking-tight">
                  Smart Technology Solutions For Modern Businesses
                </h3>

                <p className="text-slate-300 leading-relaxed font-medium text-sm mb-4">
                  Our focus is on performance, reliability, and long-term value for our clients. We build tactical advantages for ambitious enterprises.
                </p>

                <div className="w-16 h-1 bg-primary-green rounded-full"></div>
              </div>
            </div>

            {/* Right Column: Feature Cards & Metrics Banner */}
            <div className="lg:col-span-6 space-y-4 text-left">
              
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-300 flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary-green/10 border border-primary-green/30 text-primary-green flex items-center justify-center shrink-0 group-hover:bg-primary-green group-hover:text-white transition-all duration-300">
                  <Target className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-[#0F2D5C] mb-1 tracking-tight">Technical Strategy</h4>
                  <p className="text-slate-600 leading-relaxed font-medium text-sm">
                    Our strategic approach focuses on understanding core business needs and delivering clean, efficient software architectures that scale effortlessly.
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-300 flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary-green/10 border border-primary-green/30 text-primary-green flex items-center justify-center shrink-0 group-hover:bg-primary-green group-hover:text-white transition-all duration-300">
                  <Users2 className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-[#0F2D5C] mb-1 tracking-tight">Global Client Base</h4>
                  <p className="text-slate-600 leading-relaxed font-medium text-sm">
                    We deliver enterprise technology solutions that create meaningful impact, ROI, and long-term value for clients across multiple industries.
                  </p>
                </div>
              </div>

              {/* Stats Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-primary-green text-white shadow-lg shadow-primary-green/20 grid grid-cols-2 gap-4 items-center text-center">
                <div>
                  <div className="text-3xl sm:text-4xl font-black mb-0.5">100%</div>
                  <div className="font-extrabold text-[11px] uppercase tracking-widest text-white/90">Project Success</div>
                </div>
                <div className="border-l border-white/30 pl-4">
                  <div className="text-3xl sm:text-4xl font-black mb-0.5">24/7</div>
                  <div className="font-extrabold text-[11px] uppercase tracking-widest text-white/90">Expert Support</div>
                </div>
              </div>

            </div>
            
          </div>
        </div>
      </Section>
    </div>
  );
}
