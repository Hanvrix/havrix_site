"use client";

import Link from "next/link";
import { HardHat, Hammer, AlertTriangle, ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-dark flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-xl w-full text-center relative z-10 glass-morphism p-8 md:p-14 rounded-[10px] border border-white/5 shadow-2xl">
        <div className="flex justify-center mb-6 relative">
          <div className="absolute inset-0 bg-brand-primary/20 rounded-full blur-2xl"></div>
          <div className="w-20 h-20 bg-brand-primary/10 border border-brand-primary/30 rounded-[10px] flex items-center justify-center relative z-10 shadow-lg shadow-brand-primary/20">
            <HardHat className="w-10 h-10 text-brand-accent" />
          </div>
        </div>

        <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-brand-primary/10 border border-brand-primary/20 rounded-full mb-6">
          <AlertTriangle className="w-3.5 h-3.5 text-brand-primary" />
          <span className="text-[10px] font-bold text-brand-accent tracking-widest uppercase">Under Construction</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tighter leading-tight">
          Sector <span className="text-gradient">Unknown</span>
        </h1>

        <p className="text-base text-blue-100/60 font-medium max-w-md mx-auto mb-8 leading-relaxed">
          The module you are looking for is currently being engineered by our elite squad. Deployment is scheduled. 
        </p>

        <Link href="/">
          <Button variant="cta" className="h-10 px-10 rounded-[10px] text-xs uppercase tracking-widest shadow-xl inline-flex items-center group font-bold">
            <ArrowLeft className="w-4 h-4 mr-3 group-hover:-translate-x-1 transition-transform" />
            Return to Headquarters
          </Button>
        </Link>
      </div>

      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-20"
        style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      ></div>
    </div>
  );
}
