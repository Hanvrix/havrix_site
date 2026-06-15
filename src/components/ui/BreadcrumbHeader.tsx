"use client";

import Link from "next/link";
import { FadeIn } from "./FadeIn";
import { EmbeddedNav } from "@/components/HeroNav";

interface BreadcrumbHeaderProps {
  title: string;
  pageName: string;
  parentLink?: {
    name: string;
    href: string;
  };
}

export default function BreadcrumbHeader({ title, pageName, parentLink }: BreadcrumbHeaderProps) {
  return (
    <section className="bg-[#0c1e21] pb-20 relative">
      {/* Background & Glow Wrapper to allow dropdown menu to overflow vertically */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Ambient background glows matching Anhet.co */}
        <div className="absolute top-0 right-0 w-[max(300px,50vw)] h-[max(300px,50vw)] bg-brand-primary/10 blur-[130px] rounded-full -translate-y-1/3 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-teal-500/5 blur-[100px] rounded-full translate-y-1/3 -translate-x-1/4"></div>
        
        {/* Background cube grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{ 
            backgroundImage: "url('/images/hero-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
      </div>

      {/* Embedded nav — same as homepage */}
      <EmbeddedNav />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pb-4">
        <FadeIn direction="up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tighter uppercase leading-tight mb-6">
            {title}
          </h1>
          <div className="flex items-center justify-center space-x-2 text-[14px] font-bold text-gray-400">
            <Link href="/" className="hover:text-brand-primary transition-colors">
              Home
            </Link>
            <span className="text-white/20">/</span>
            {parentLink && (
              <>
                <Link href={parentLink.href} className="hover:text-brand-primary transition-colors">
                  {parentLink.name}
                </Link>
                <span className="text-white/20">/</span>
              </>
            )}
            <span className="text-brand-primary">{pageName}</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

