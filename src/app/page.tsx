"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2, Code2, Layers, Zap, Shield, Smartphone, 
  ArrowRight, ArrowDown, Cpu, ChevronDown, Phone,
  Shirt, Database, Box, FileText, Sparkles, ShoppingCart, Users, Megaphone, Target,
  Coffee, ClipboardCheck, SearchCheck, Rocket
} from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import ServicesSlider from "@/components/ui/ServicesSlider";
import { FadeIn } from "@/components/ui/FadeIn";
import HeroNav from "@/components/HeroNav";
import { SocialLinks } from "@/components/ui/SocialLinks";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const headlines = [
    {
      line1: "Turn Your Dreams into",
      highlight: "Digital Reality."
    },
    {
      line1: "Run Your Business",
      highlight: "from Anywhere."
    },
    {
      line1: "Wake Up. It's Time to",
      highlight: "Take Your Business Online."
    }
  ];

  const [currentHeadline, setCurrentHeadline] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [headlines.length]);

  const chooseCards = [
    {
      title: "Unique",
      desc: "Every business is different, so we create solutions tailored to your needs instead of using one-size-fits-all templates.",
      icon: <Layers className="w-5 h-5 text-primary-green" />
    },
    {
      title: "Different",
      desc: "We focus on understanding your business first, then build software that solves real problems and supports long-term growth.",
      icon: <Cpu className="w-5 h-5 text-primary-green" />
    },
    {
      title: "Fast Delivery",
      desc: "Our streamlined development process helps us deliver high-quality solutions quickly without compromising on performance or reliability.",
      icon: <Zap className="w-5 h-5 text-primary-green" />
    },
    {
      title: "Dedicated Support",
      desc: "We're always here when you need us. From implementation to ongoing support, our team is committed to your success.",
      icon: <Shield className="w-5 h-5 text-primary-green" />
    }
  ];

  const marqueeItems = [
    { title: "Garments ERP", icon: <Shirt className="w-5 h-5 shrink-0" /> },
    { title: "Textile ERP", icon: <Layers className="w-5 h-5 shrink-0" /> },
    { title: "Custom ERP Solutions", icon: <Database className="w-5 h-5 shrink-0" /> },
    { title: "Inventory Management", icon: <Box className="w-5 h-5 shrink-0" /> },
    { title: "Billing Automation", icon: <FileText className="w-5 h-5 shrink-0" /> },
    { title: "AI Automation", icon: <Sparkles className="w-5 h-5 shrink-0" /> },
    { title: "Web Application Development", icon: <Code2 className="w-5 h-5 shrink-0" /> },
    { title: "Mobile App Development", icon: <Smartphone className="w-5 h-5 shrink-0" /> },
    { title: "E-Commerce Development", icon: <ShoppingCart className="w-5 h-5 shrink-0" /> },
    { title: "CRM Solutions", icon: <Users className="w-5 h-5 shrink-0" /> },
    { title: "Digital Marketing", icon: <Megaphone className="w-5 h-5 shrink-0" /> },
    { title: "Google & Meta Ads", icon: <Target className="w-5 h-5 shrink-0" /> },
  ];

  const steps = [
    {
      num: "01",
      title: "Meet Up",
      desc: "Every successful project starts with a conversation. We take the time to understand your business, your goals, and the challenges you face. This helps us create the right strategy and build a solution that truly fits your needs.",
      icon: <Coffee className="w-9 h-9 text-primary-green" />
    },
    {
      num: "02",
      title: "Plan",
      desc: "We carefully understand your requirements and create a clear plan for your project. Whether it's a website, mobile app, ERP system, e-commerce platform, or digital marketing solution, every detail is planned before development begins.",
      icon: <ClipboardCheck className="w-9 h-9 text-primary-green" />
    },
    {
      num: "03",
      title: "Development",
      desc: "Once the plan is finalized, our development team starts building your solution using the latest technologies. Every feature is carefully developed, tested, and optimized to ensure high performance, security, and reliability.",
      icon: <Code2 className="w-9 h-9 text-primary-green" />
    },
    {
      num: "04",
      title: "Testing",
      desc: "Before delivery, every feature is carefully tested to ensure everything works smoothly. We check performance, security, and usability to deliver a reliable, high-quality solution.",
      icon: <SearchCheck className="w-9 h-9 text-primary-green" />
    },
    {
      num: "05",
      title: "Launch",
      desc: "Once everything is approved, we launch your project with confidence. We ensure a smooth deployment and provide the support you need to help your business succeed from day one.",
      icon: <Rocket className="w-9 h-9 text-primary-green" />
    }
  ];

  const faqs = [
    {
      q: "How can AI and software solutions improve my business operations?",
      a: "AI and modern software solutions can automate repetitive tasks, streamline workflows, and provide valuable insights from your business data. This helps reduce manual work, improve productivity, and support smarter decision-making for long-term growth."
    },
    {
      q: "What types of businesses do you work with?",
      a: "We work with textile mills, retail brands, agriculture distributors, and startups looking to implement cloud ERP systems, custom web dashboards, or mobile applications."
    },
    {
      q: "Can you build a complete digital solution for my business?",
      a: "Yes, we provide end-to-end digital solutions including web development, mobile app development, custom software, AI integration, digital marketing, and branding to support your entire business ecosystem."
    },
    {
      q: "How do you ensure the quality of your software solutions?",
      a: "Our development process includes detailed planning, modern development practices, continuous testing, and post-deployment reviews to deliver high-fidelity platforms."
    },
    {
      q: "What support do you provide after the project is completed?",
      a: "We offer ongoing technical support, system maintenance, updates, and improvements to ensure your digital platforms continue to run smoothly and adapt to future business needs."
    }
  ];

  return (
    <div className="bg-background overflow-hidden">
      
      {/* 1. HERO SECTION — Full Width Hero with heroBG.png Background */}
      <section 
        className="relative w-full bg-[#0B0F17] overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/heroBG.png')" }}
      >
        {/* Subtle Dark Overlay for contrast & text legibility */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

        {/* Ambient Glow & Bottom Fade */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[650px] h-[650px] bg-primary-green/15 blur-[160px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#0B0F17]"></div>
        </div>

        {/* ─── EMBEDDED NAVBAR ─── */}
        <HeroNav />

        {/* ─── HERO CONTENT ─── */}
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pt-4 pb-6 md:pb-8 relative z-10 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column (Main Copy & Actions) */}
            <div className="lg:col-span-7 space-y-8">
              {/* Top Badge & Ticker Dots */}
              <FadeIn direction="up">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary-green animate-pulse"></span>
                  <span className="text-gray-200 uppercase tracking-widest text-[12px] font-semibold">Salem&apos;s Premier Software & IT Company</span>
                  <div className="hidden sm:flex items-center gap-1.5 ml-2 border-l border-white/10 pl-3">
                    {headlines.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentHeadline(idx)}
                        className={`h-1.5 rounded-full transition-all duration-500 ${
                          currentHeadline === idx ? "w-5 bg-primary-green" : "w-1.5 bg-white/20 hover:bg-white/40"
                        }`}
                        aria-label={`Slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Rotating Main Headline with Handwriting Font Format (Fixed Height - No Layout Shift) */}
              <FadeIn direction="up" delay={0.1}>
                <div className="h-[180px] sm:h-[220px] lg:h-[260px] xl:h-[280px] flex items-center overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.h1
                      key={currentHeadline}
                      initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-black text-white tracking-tight leading-[1.1]"
                    >
                      {headlines[currentHeadline].line1}{" "}
                      <br />
                      <span className="text-primary-green font-handwriting text-5xl sm:text-6xl lg:text-7xl xl:text-[84px] font-normal block sm:inline leading-none">
                        {headlines[currentHeadline].highlight}
                      </span>
                    </motion.h1>
                  </AnimatePresence>
                </div>
              </FadeIn>

              {/* Subtitle Paragraph */}
              <FadeIn direction="up" delay={0.2}>
                <p className="text-gray-300 text-lg sm:text-xl max-w-2xl leading-relaxed font-normal">
                  Hanvrix builds enterprise-grade software applications, scalable web & mobile platforms, and customized ERP systems for forward-thinking businesses.
                </p>
              </FadeIn>

              {/* CTA Buttons */}
              <FadeIn direction="up" delay={0.3}>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link href="/contact">
                    <Button variant="primary" showArrow={true} className="px-8 py-4 text-base font-bold rounded-xl shadow-lg shadow-primary-green/20">
                      Book Free Consultation
                    </Button>
                  </Link>
                  <Link href="/services" className="group flex items-center space-x-3 px-7 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold text-base transition-all backdrop-blur-sm">
                    <span>Our Services</span>
                    <ArrowRight className="w-4 h-4 text-primary-green group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Right Column (Modern Interactive Software Showcase Deck) */}
            <div className="lg:col-span-5 relative">
              <FadeIn direction="left" delay={0.3}>
                <div className="relative border border-white/10 rounded-2xl bg-white/5 backdrop-blur-xl p-6 shadow-2xl space-y-6">
                  
                  {/* Window Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="text-[11px] font-mono text-gray-400 bg-black/30 px-3 py-1 rounded-md border border-white/5">
                      hanvrix.app/system-status
                    </div>
                  </div>

                  {/* Active Architecture Status */}
                  <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 bg-primary-green/20 rounded-lg text-primary-green">
                        <Cpu className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm">Enterprise Microservices</div>
                        <div className="text-xs text-gray-400">High-Availability Cloud Architecture</div>
                      </div>
                    </div>
                    <span className="flex h-3 w-3 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-green opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-green"></span>
                    </span>
                  </div>

                  {/* Tech Stack Cards Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary-green/50 transition-colors">
                      <Code2 className="w-6 h-6 text-primary-green mb-2" />
                      <div className="text-white font-bold text-sm">Custom Web & SaaS</div>
                      <div className="text-xs text-gray-400 mt-0.5">Next.js & Node Platforms</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary-green/50 transition-colors">
                      <Smartphone className="w-6 h-6 text-primary-green mb-2" />
                      <div className="text-white font-bold text-sm">Mobile Apps</div>
                      <div className="text-xs text-gray-400 mt-0.5">iOS & Android Solutions</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary-green/50 transition-colors">
                      <Layers className="w-6 h-6 text-primary-green mb-2" />
                      <div className="text-white font-bold text-sm">Textile & Retail ERP</div>
                      <div className="text-xs text-gray-400 mt-0.5">End-to-End Automation</div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary-green/50 transition-colors">
                      <Shield className="w-6 h-6 text-primary-green mb-2" />
                      <div className="text-white font-bold text-sm">Cloud & Security</div>
                      <div className="text-xs text-gray-400 mt-0.5">99.9% Uptime SLA</div>
                    </div>
                  </div>

                  {/* Footer Social / Trust Info */}
                  <div className="pt-2 flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-primary-green" />
                      <span>ISO Standard Code Quality</span>
                    </div>
                    <div className="text-primary-green font-semibold">Ready to Scale</div>
                  </div>

                </div>
              </FadeIn>
            </div>

          </div>

          {/* Bottom Content: Row 1 Social Links, Row 2 Scroll to Explore */}
          <div className="mt-10 pt-4 space-y-6">
            {/* Row 1: Social Links */}
            <FadeIn direction="up" delay={0.5} className="flex items-center justify-start">
              <SocialLinks />
            </FadeIn>

            {/* Row 2: Centered Scroll to Explore Widget */}
            <FadeIn direction="up" delay={0.6} className="flex items-center justify-center pt-2">
              <button
                onClick={() => {
                  window.scrollTo({
                    top: window.innerHeight * 0.88,
                    behavior: "smooth"
                  });
                }}
                className="group flex items-center gap-3 cursor-pointer opacity-90 hover:opacity-100 transition-opacity"
              >
                <div className="flex flex-col items-center">
                  {/* Animated Mouse Pill Icon */}
                  <div className="w-5 h-8 border-2 border-white/40 group-hover:border-primary-green rounded-full flex justify-center p-1 transition-colors">
                    <motion.div
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      className="w-1 h-1.5 bg-primary-green rounded-full"
                    />
                  </div>
                  {/* Bouncing Arrow Down */}
                  <motion.div
                    animate={{ y: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                    className="mt-0.5 text-white/60 group-hover:text-primary-green transition-colors"
                  >
                    <ArrowDown className="w-3.5 h-3.5" />
                  </motion.div>
                </div>

                <span className="text-xs font-semibold text-gray-300 group-hover:text-white uppercase tracking-wider transition-colors">
                  Scroll to <span className="text-primary-green font-bold">Explore</span>
                </span>
              </button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. WHY CHOOSE US (CHOOSE SECTION) */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column (Heading, Paragraph & Metrics) */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <FadeIn direction="up">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#DCFCE7] text-primary-green-dark font-bold text-xs uppercase tracking-wider">
                  WHY CHOOSE US
                </span>
              </FadeIn>

              <FadeIn direction="up" delay={0.1}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F2D5C] tracking-tight leading-[1.15]">
                  Helping Your Business Grow with{" "}
                  <span className="text-primary-green">Smart Technology</span>
                </h2>
                {/* Helping Your Business Grow with Technology. */}
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                  {/* We don&apos;t simply build websites &amp; Apps. We build digital solutions that fuel your growth. By combining technical expertise with strategic business insight, our team delivers results-oriented platforms designed to automate, perform, and drive success. */}
                  We don't just build websites and apps. We create digital solutions that help your business grow. Our software is simple to use, built for your needs, and designed to save time, improve efficiency, and support your success.
                </p>
              </FadeIn>
            </div>

            {/* Right Column (2x2 Cards Grid) */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {chooseCards.map((card, idx) => (
                  <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                    <div className="bg-[#F8FAFC] border border-slate-100 hover:border-primary-green/30 p-7 sm:p-8 rounded-3xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group flex flex-col h-full text-left">
                      <div className="flex items-center gap-3.5 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-center shrink-0 group-hover:bg-primary-green/10 transition-colors">
                          {card.icon}
                        </div>
                        <h3 className="text-xl font-bold text-[#0F2D5C]">
                          {card.title}
                        </h3>
                      </div>
                      <p className="text-slate-500 text-sm leading-relaxed font-normal">
                        {card.desc}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. INFINITE MARQUEE STRIP — High-Tech Emerald Theme */}
      <div 
        className="relative border-y border-primary-green/30 py-9 overflow-hidden select-none flex whitespace-nowrap bg-cover bg-center bg-no-repeat shadow-[0_0_30px_rgba(22,163,74,0.1)]"
        style={{ backgroundImage: "url('/images/heroBG.png')" }}
      >
        {/* Dark Emerald Glow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061A14]/95 via-[#0B2E23]/85 to-[#061A14]/95 pointer-events-none"></div>

        {/* Cyber Tech Dot Matrix Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none"></div>

        {/* Ambient Pulsing Glow Orbs */}
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary-green/25 blur-3xl rounded-full pointer-events-none animate-pulse"></div>
        <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary-green/25 blur-3xl rounded-full pointer-events-none"></div>

        {/* Marquee Content */}
        <div className="relative z-10 flex w-full">
          <div className="animate-marquee flex gap-12 shrink-0 items-center pr-12">
            {marqueeItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3.5 text-white font-semibold tracking-wider uppercase select-none">
                <span className="p-2.5 rounded-xl bg-gradient-to-br from-primary-green/25 to-primary-green/10 border border-primary-green/40 text-primary-green shadow-xs backdrop-blur-md">
                  {item.icon}
                </span>
                <span className="drop-shadow-sm">{item.title}</span>
                <span className="w-2 h-2 rounded-full bg-primary-green/50 ml-8 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
              </div>
            ))}
          </div>
          <div className="animate-marquee flex gap-12 shrink-0 items-center pr-12" aria-hidden="true">
            {marqueeItems.map((item, idx) => (
              <div key={`dup-${idx}`} className="flex items-center gap-3.5 text-white font-semibold tracking-wider uppercase select-none">
                <span className="p-2.5 rounded-xl bg-gradient-to-br from-primary-green/25 to-primary-green/10 border border-primary-green/40 text-primary-green shadow-xs backdrop-blur-md">
                  {item.icon}
                </span>
                <span className="drop-shadow-sm">{item.title}</span>
                <span className="w-2 h-2 rounded-full bg-primary-green/50 ml-8 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. OUR PROCESS (WORKING PROCESS ZIGZAG FLOWCHART SECTION) */}
      <section className="py-20 lg:py-28 bg-white relative overflow-hidden border-t border-slate-100 min-h-[900px] flex items-center">
        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Left Vertical Rotated Title Banner — Centered Vertically */}
          <div className="hidden xl:flex absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 items-center justify-center">
            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-black uppercase tracking-wider [writing-mode:vertical-rl] rotate-180 select-none">
              <span className="text-[#0F2D5C]">OUR </span>
              <span className="text-primary-green">PROCESS</span>
            </h2>
          </div>

          {/* Mobile/Tablet Top Heading */}
          <div className="xl:hidden text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#DCFCE7] text-primary-green-dark font-bold text-xs uppercase tracking-wider mb-3">
              OUR PROCESS
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F2D5C] tracking-tight">
              Seamless 5-Step Development Flow
            </h2>
          </div>

          {/* Zigzag Snake Flowchart Grid */}
          <div className="xl:ml-36 max-w-[1100px] mx-auto space-y-12 lg:space-y-16 relative">
            
            {steps.map((item, idx) => {
              const isEven = idx % 2 === 0; // even (0, 2, 4): Left side, odd (1, 3): Right side
              
              return (
                <div key={idx} className="relative">
                  
                  {/* Step Card Container */}
                  <div className={`flex flex-col sm:flex-row items-start gap-6 max-w-[540px] ${isEven ? 'mr-auto' : 'ml-auto'}`}>
                    
                    {/* Round Soft-Green Icon Circle */}
                    <div className="relative shrink-0">
                      <div className="w-24 h-24 rounded-full bg-[#EBF7EE] border border-primary-green/20 flex items-center justify-center shadow-xs">
                        {item.icon}
                      </div>
                    </div>

                    {/* Step Content Block */}
                    <div className="space-y-2 text-left">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-[#EBF7EE] border border-primary-green/40 text-primary-green font-extrabold text-sm flex items-center justify-center shrink-0">
                          {item.num}
                        </span>
                        <h3 className="text-2xl font-extrabold text-[#0F2D5C]">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>

                  </div>

                  {/* Green Dashed L-Curved Connecting Line with Arrow */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block absolute z-0 pointer-events-none"
                      style={{
                        top: isEven ? "85px" : "45px",
                        left: isEven ? "530px" : "auto",
                        right: isEven ? "auto" : "580px",
                        width: "380px",
                        height: "160px"
                      }}
                    >
                      <svg className="w-full h-full" viewBox="0 0 210 160" fill="none">
                        <defs>
                          <marker id={`arrowhead-green-${idx}`} markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
                            <polygon points="0 0, 8 4, 0 8" fill="#16A34A" />
                          </marker>
                          <marker id={`dot-green-${idx}`} markerWidth="6" markerHeight="6" refX="3" refY="3">
                            <circle cx="3" cy="3" r="3" fill="#16A34A" />
                          </marker>
                        </defs>

                        {isEven ? (
                          // Left to Right Curve (Bottom-Right of Text -> Top of Next Icon)
                          <path
                            d="M 10 10 H 270 A 20 20 0 0 1 280 30 V 100"
                            stroke="#16A34A"
                            strokeWidth="2"
                            strokeDasharray="6 6"
                            fill="none"
                            markerStart={`url(#dot-green-${idx})`}
                            markerEnd={`url(#arrowhead-green-${idx})`}
                          />
                        ) : (
                          // Right to Left Curve (Bottom-Left of Text -> Top of Next Icon)
                          <path
                            d="M 280 10 H 20 A 20 20 0 0 0 5 30 V 100"
                            stroke="#16A34A"
                            strokeWidth="2"
                            strokeDasharray="6 6"
                            fill="none"
                            markerStart={`url(#dot-green-${idx})`}
                            markerEnd={`url(#arrowhead-green-${idx})`}
                          />
                        )}
                      </svg>
                    </div>
                  )}

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* 5. SERVICES (WHAT WE DO — FULL WIDTH WARM PARCHMENT PAPER SECTION) */}
      <section 
        className="pt-4 pb-6 lg:pt-8 lg:pb-10 w-full relative overflow-hidden bg-cover bg-center bg-no-repeat border-y border-slate-200/60 isolate"
        style={{ backgroundImage: "url('/images/paper-texture.png')" }}
      >
        <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Left Vertical Rotated Title Banner — Exact Straight-Line Alignment with OUR PROCESS */}
          <div className="hidden xl:flex absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 items-center justify-center">
            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-black uppercase tracking-wider [writing-mode:vertical-rl] rotate-180 select-none">
              <span className="text-[#0F2D5C]">WHAT WE </span>
              <span className="text-primary-green">DO</span>
            </h2>
          </div>

          <FadeIn direction="up">
            <ServicesSlider />
          </FadeIn>
        </div>
      </section>

      {/* 6. FAQ ACCORDION SECTION */}
      <section className="py-20 lg:py-28 bg-background border-t border-border-light/30">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            {/* Left: Heading & Call */}
            <div className="text-left lg:col-span-1 lg:sticky lg:top-24">
              <span className="inline-flex items-center gap-2 text-brand-primary font-bold uppercase tracking-[2px] text-xs mb-3">
                Our Solutions
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-brand-secondary tracking-tighter leading-tight">
                Find answers to common questions
              </h2>
              
              <div className="mt-8 pt-6 border-t border-border-light flex flex-wrap items-center gap-6">
                <a 
                  href="tel:+918838213390" 
                  className="inline-flex items-center gap-3 text-brand-secondary font-black text-xl hover:text-brand-primary transition-colors"
                >
                  <span className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                    <Phone className="w-5 h-5" />
                  </span>
                  <span>+91 8838213390</span>
                </a>

                <a 
                  href="https://wa.me/918838213390" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white px-4 py-2.5 rounded-xl font-bold text-sm shadow-md transition-all duration-300"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Right: Custom Accordion */}
            <div className="lg:col-span-2 space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div 
                    key={index} 
                    className={`bg-white rounded-[20px] border border-border-light transition-all duration-300 ${
                      isOpen ? "shadow-lg border-brand-primary" : "hover:border-brand-primary/50"
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex items-center justify-between w-full p-6 text-left font-bold text-brand-secondary text-lg cursor-pointer"
                    >
                      <span className="pr-4">{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-brand-primary transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`} />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="p-6 pt-0 text-text-secondary text-[15px] leading-relaxed font-medium">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA BANNER SECTION — Reduced Padding & Filled Background */}
      <section className="py-10 lg:py-14 bg-[#090D16] relative overflow-hidden text-center border-t border-slate-800/60">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35 pointer-events-none"></div>

        {/* Ambient Glowing Orbs */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-primary-green/20 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-emerald-500/15 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <FadeIn direction="up">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-primary-green animate-pulse"></span>
              <span className="text-gray-300 uppercase tracking-widest text-[11px] font-bold">24/7 Dedicated Technical Support</span>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Ready to Accelerate Your <span className="text-primary-green font-handwriting text-4xl sm:text-5xl lg:text-6xl font-normal">Digital Growth?</span>
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto font-medium">
              Have a project in mind or need expert technical guidance? Our engineering support team is ready to assist you.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link href="/contact">
                <Button variant="white" showArrow={true} className="px-8 py-3.5 text-base font-bold rounded-xl shadow-lg">
                  Contact Us Now
                </Button>
              </Link>
              <a href="tel:+918838213390" className="inline-flex items-center space-x-2.5 px-7 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold text-base transition-all backdrop-blur-sm">
                <Phone className="w-4 h-4 text-primary-green" />
                <span>+91 88382 13390</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
