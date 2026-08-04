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
    <section 
      className="relative w-full pb-10 md:pb-14 overflow-hidden bg-[#0B0F17] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/heroBG.png')" }}
    >
      {/* Dark Overlay for contrast & legibility */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>

      {/* Ambient background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-primary-green/15 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-emerald-500/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Embedded nav — same as homepage */}
      <EmbeddedNav />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pb-4 pt-4">
        <FadeIn direction="up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-tight mb-6">
            {title}
          </h1>
          <div className="flex items-center justify-center space-x-2 text-[14px] font-bold text-gray-300">
            <Link href="/" className="hover:text-primary-green transition-colors">
              Home
            </Link>
            <span className="text-white/30">/</span>
            {parentLink && (
              <>
                <Link href={parentLink.href} className="hover:text-primary-green transition-colors">
                  {parentLink.name}
                </Link>
                <span className="text-white/30">/</span>
              </>
            )}
            <span className="text-primary-green">{pageName}</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
