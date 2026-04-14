"use client";

import Link from "next/link";
import { HardHat, Hammer, AlertTriangle, ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-dark flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-3xl w-full text-center relative z-10 glass-morphism p-12 md:p-20 rounded-[3rem] border border-white/5 shadow-2xl">
        <div className="flex justify-center mb-8 relative">
          <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-2xl"></div>
          <div className="w-24 h-24 bg-orange-500/10 border border-orange-500/30 rounded-3xl flex items-center justify-center relative z-10 shadow-lg shadow-orange-500/20 animate-pulse">
            <HardHat className="w-12 h-12 text-orange-400" />
          </div>
        </div>

        <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-brand-primary/10 border border-brand-primary/20 rounded-full mb-6">
          <AlertTriangle className="w-4 h-4 text-brand-primary" />
          <span className="text-sm font-bold text-brand-accent tracking-widest uppercase">Under Construction</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-tight">
          Sector <span className="text-gradient">Unknown</span>
        </h1>

        <p className="text-xl text-blue-100/60 font-medium max-w-xl mx-auto mb-10 leading-relaxed">
          The module you are looking for is currently being engineered by our elite squad.
          Deployment is scheduled. Please return to the main hub.
        </p>

        <Link href="/">
          <Button variant="cta" className="h-14 px-8 rounded-2xl text-lg shadow-xl inline-flex items-center group">
            <ArrowLeft className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform" />
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
