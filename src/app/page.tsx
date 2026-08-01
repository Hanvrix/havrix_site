"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2, Code2, Layers, Zap, Shield, Smartphone, 
  ArrowRight, ArrowDown, Cpu, ChevronDown, Phone
} from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import ServicesSlider from "@/components/ui/ServicesSlider";
import { FadeIn } from "@/components/ui/FadeIn";
import ZoomOnScroll from "@/components/ui/ZoomOnScroll";
import HeroNav from "@/components/HeroNav";
import { SocialLinks } from "@/components/ui/SocialLinks";
import AnimatedProgress from "@/components/ui/AnimatedProgress";

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
      title: "Innovative Solutions",
      desc: "We create innovative technology solutions that help businesses grow and stay competitive in the digital age.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Smart Technology",
      desc: "We combine strategy, design, and reliable software architecture to build future-ready platforms.",
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: "Expert Team",
      desc: "Our skilled developers and product managers transform complex ideas into high-performing SaaS products.",
      icon: <Code2 className="w-6 h-6" />
    },
    {
      title: "Dedicated Support",
      desc: "We provide continuous system maintenance and quick technical assistance to keep your operations running.",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Discovery & Planning",
      desc: "We begin by understanding your business goals and bottlenecks to define the ideal digital strategy."
    },
    {
      step: "02",
      title: "Design & Develop",
      desc: "Our engineering team designs responsive user interfaces and develops secure, scalable SaaS applications."
    },
    {
      step: "03",
      title: "Deploy & Support",
      desc: "We ensure smooth launch synchronizations and provide continuous technical maintenance."
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

      {/* 2. SERVICES SLIDER SECTION */}
      <section className="py-20 lg:py-28 bg-services-bg w-full">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <ServicesSlider />
          </FadeIn>
        </div>
      </section>

      {/* 3. ABOUT SECTION WITH PROGRESS BARS */}
      <section className="py-14 lg:py-14 bg-background border-t border-border-light/30">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <div className="text-left">
              <FadeIn direction="up">
                <span className="inline-flex items-center gap-2 text-brand-primary font-bold uppercase tracking-[2px] text-xs mb-3">
                  Get to Know Us
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-brand-secondary tracking-tighter mb-8 leading-tight">
                  Driving Innovation & Excellence for Sustainable Growth
                </h2>
                
                {/* Mission & Vision Rows */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="p-6 bg-white border-y-0 border-r-0 border-l-4 border-brand-primary rounded-[20px]">
                    <h2 className="text-xl font-bold text-brand-secondary mb-2">Our Mission</h2>
                    <p className="text-text-secondary text-[16px] leading-relaxed mb-4">
                      To shape the future of business through innovative technology, seamless digital experiences, and scalable solutions that unlock new opportunities for growth and success.
                    </p>
                    <ul className="space-y-1 text-md font-bold text-brand-secondary">
                      <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-brand-primary" /> Customer-Centric</li>
                      <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-brand-primary" /> AI & Digital Solutions</li>
                    </ul>
                  </div>
                  <div className="p-6 bg-white border-y-0 border-r-0 border-l-4 border-brand-primary rounded-[20px]">
                    <h2 className="text-xl font-bold text-brand-secondary mb-2">Our Vision</h2>
                    <p className="text-text-secondary text-[16px] leading-relaxed mb-4">
                      To shape the future of business by delivering transformative technology solutions that inspire innovation, accelerate growth, and create meaningful impact across industries.
                    </p>
                    <ul className="space-y-1 text-md font-bold text-brand-secondary">
                      <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-brand-primary" /> Tech Innovation</li>
                      <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-brand-primary" /> Sustainable Scale</li>
                    </ul>
                  </div>
                </div>

                <Link href="/about">
                  <Button variant="primary" showArrow={true}>Learn More About Us</Button>
                </Link>
              </FadeIn>
            </div>

            {/* Right: Image & Progress Overlay */}
            <div className="relative flex justify-center lg:justify-end mt-10 lg:mt-0">
              <ZoomOnScroll className="relative w-full max-w-[560px]">

                {/* Main Image with Bottom-Left Cutout */}
                <div className="overflow-hidden rounded-[24px] shadow-2xl relative">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                    alt="Hanvrix Team"
                    className="w-full h-auto object-cover aspect-[4/5]"
                  />
                  {/* Rounded Inner Corner Mask */}
                  <div className="absolute bottom-0 left-0 w-[60%] h-[28%] bg-background rounded-tr-[32px]" />
                </div>

                {/* Progress Card Inside Cutout */}
                <div
                  className="
                    absolute
                    left-0
                    bottom-0
                    w-[calc(100%-2rem)]
                    sm:w-[320px]
                    max-w-[320px]
                    bg-white
                    rounded-tr-[24px]
                    p-4
                    z-20
                    shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)]
                  "
                >
                  <h4 className="text-[20px] font-bold text-brand-secondary mb-6 tracking-tight">
                    Business Progress
                  </h4>

                  <div className="space-y-6">
                    {/* Project Success */}
                    <AnimatedProgress label="Project Success" percentage={98} />

                    {/* Customer Satisfaction */}
                    <AnimatedProgress label="Customer Satisfaction" percentage={90} />
                  </div>
                </div>

              </ZoomOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CHOOSE SECTION */}
      <section className="py-16 lg:py-28 bg-background">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Heading */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 text-brand-primary font-bold uppercase tracking-[2px] text-xs mb-3">
              Choose the Best
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-brand-secondary tracking-tighter">
              Empowering Business with Expertise
            </h2>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {chooseCards.map((card, idx) => (
              <ZoomOnScroll key={idx} className="flex">
                <div className="flex flex-col w-full bg-white border-y-0 border-r-0 border-l-4 border-brand-primary p-8 rounded-[24px] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group">
                  <div className="w-14 h-14 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center text-xl mb-6 transition-colors group-hover:bg-brand-primary group-hover:text-white">
                    {card.icon}
                  </div>
                  <h4 className="text-xl font-bold text-brand-secondary mb-3">
                    {card.title}
                  </h4>
                  <p className="text-text-secondary text-[15px] leading-relaxed font-medium">
                    {card.desc}
                  </p>
                </div>
              </ZoomOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INFINITE MARQUEE STRIP */}
      <div className="bg-bg-dark border-y border-white/5 py-10 overflow-hidden select-none flex whitespace-nowrap">
        <div className="animate-marquee flex gap-20 shrink-0">
          {["Enterprise Focus", "SaaS Model Architecture", "Cloud Native Deployments", "AI Driven Automation"].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 text-white font-bold text-lg tracking-tight uppercase select-none mr-20">
              <Cpu className="text-brand-primary w-5 h-5 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className="animate-marquee flex gap-20 shrink-0" aria-hidden="true">
          {["Enterprise Focus", "SaaS Model Architecture", "Cloud Native Deployments", "AI Driven Automation"].map((item, idx) => (
            <div key={`dup-${idx}`} className="flex items-center gap-4 text-white font-bold text-lg tracking-tight uppercase select-none mr-20">
              <Cpu className="text-brand-primary w-5 h-5 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 6. WORKING PROCESS SECTION */}
      <section className="py-20 lg:py-28 bg-bg-dark relative overflow-hidden">
        {/* Glow ambient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[max(300px,50vw)] h-[max(300px,50vw)] bg-brand-primary/5 blur-[80px] md:blur-[120px] rounded-full"></div>
        
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Centered Heading */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 text-brand-primary font-bold uppercase tracking-[2px] text-xs mb-3">
              Our Process
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
              Seamless Process and Great Results
            </h2>
          </div>

          {/* 3 Step Process Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12 relative">
            {steps.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.2} className="flex flex-col items-center text-center relative z-10 group">
                <span className="text-[12px] font-black uppercase tracking-[2px] text-brand-primary mb-4">
                  Step {item.step}
                </span>
                
                {/* Round indicator */}
                <div className="w-16 h-16 rounded-full border border-brand-primary flex items-center justify-center text-white font-black text-xl mb-6 bg-bg-footer/40 transition-transform duration-300 group-hover:scale-110 shadow-[0_0_20px_rgba(30,138,138,0.15)]">
                  {item.step}
                </div>

                <h4 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-[15px] leading-relaxed max-w-xs font-medium">
                  {item.desc}
                </p>

                {/* Connecting arrow/line on desktop */}
                {idx < steps.length - 1 && (
                  <motion.div 
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 + (idx * 0.2), ease: "easeInOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="hidden md:block absolute top-[90px] left-[65%] w-[70%] h-[1px] border-t border-dashed border-brand-primary/50 origin-left -z-10"
                  />
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ ACCORDION SECTION */}
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
              
              <div className="mt-8 pt-6 border-t border-border-light">
                <a 
                  href="tel:+918838213390" 
                  className="inline-flex items-center gap-3 text-brand-secondary font-black text-xl hover:text-brand-primary transition-colors"
                >
                  <span className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                    <Phone className="w-5 h-5" />
                  </span>
                  <span>+91 8838213390</span>
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

      {/* 8. CTA BANNER SECTION */}
      <section className="py-16 lg:py-24 bg-bg-footer relative overflow-hidden text-center">
        {/* Glow shape */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[80px] rounded-full"></div>
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-8">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-tight">
            Reach Out To Our Support Team?
          </h2>
          <div>
            <Link href="/contact">
              <Button variant="white" showArrow={true} className="px-10 h-[52px]">
                Contact us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
