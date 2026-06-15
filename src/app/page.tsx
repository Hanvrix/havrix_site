"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2, Code2, Globe2, Layers, Settings, Server, Zap, Shield, Smartphone, 
  Eye, Activity, ArrowRight, TrendingUp, Cpu, Info, Phone, ChevronDown, Calendar, MessageSquare
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
    <div className="bg-[#ecf0f0] overflow-hidden">
      
      {/* 1. HERO SECTION — Anhet.co style floating rounded card */}
      <div className="px-3 pt-3 md:px-4 md:pt-4">
        <section className="relative rounded-[20px] md:rounded-[28px] bg-[#0c1e21]">
          {/* Background & Glow Wrapper to clip rounded corners and allow dropdown overflow */}
          <div className="absolute inset-0 overflow-hidden rounded-[20px] md:rounded-[28px] pointer-events-none">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: "url('/images/hero-bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            {/* Very subtle teal glow — minimal so geometric pattern shows through */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[max(300px,50vw)] h-[max(300px,50vw)] bg-brand-primary/5 blur-[100px] md:blur-[150px] rounded-full"></div>
          </div>

          {/* ─── EMBEDDED NAVBAR ─── */}
          <HeroNav />

          {/* ─── HERO CONTENT ─── */}
          <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 pb-8 md:pb-12 relative z-10 text-left">
            {/* Huge Main Header */}
            <FadeIn direction="up">
              <h1 className="text-5xl sm:text-7xl md:text-[85px] lg:text-[110px] xl:text-[130px] font-medium text-white tracking-tighter leading-[1.05] mb-10 uppercase">
                Empower{" "}
                <span className="inline-flex items-center justify-start border-4 border-brand-primary w-[85px] sm:w-[130px] md:w-[150px] h-[40px] sm:h-[60px] md:h-[70px] rounded-full px-2 mx-1 sm:mx-3 align-middle">
                  <span className="w-6 sm:w-10 md:w-12 h-6 sm:h-10 md:h-12 rounded-full bg-brand-primary block ml-auto"></span>
                </span>{" "}
                Your <br />
                Business.
              </h1>
            </FadeIn>

            {/* Under-header Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mt-4">
              {/* Left Column (col-span-7) */}
              <div className="lg:col-span-7 space-y-6">
                <FadeIn direction="up" delay={0.1}>
                  <div className="space-y-4">
                    <span className="w-12 h-[3px] bg-brand-primary block"></span>
                    <h4 className="text-white text-xl font-bold uppercase tracking-wide">Solutions That Scale.</h4>
                    <p className="text-gray-400 text-lg max-w-xl leading-relaxed font-medium">
                      Recognized by industry leaders, Hanvrix is the premier Software Development Company in Salem, Tamil Nadu. We deliver innovative, scalable, high-performance IT solutions.
                    </p>
                  </div>
                </FadeIn>

                <FadeIn direction="up" delay={0.2}>
                  <div className="pt-4 flex flex-col sm:flex-row items-center gap-6">
                    <Link href="/contact" className="w-full sm:w-auto">
                      <Button variant="primary" showArrow={true} className="w-full sm:w-auto px-10 h-[52px]">
                        Get Started
                      </Button>
                    </Link>
                    <Link href="/about" className="group flex items-center space-x-3 text-white font-bold hover:text-brand-primary transition-colors">
                      <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-primary transition-colors">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                      <span>View About us</span>
                    </Link>
                  </div>
                </FadeIn>
              </div>

              {/* Right Column (col-span-5) */}
              <div className="lg:col-span-5 relative">
                <FadeIn direction="right" delay={0.3}>
                  <div className="relative border border-white/10 rounded-[24px] overflow-hidden shadow-2xl max-w-[500px] ml-auto">
                    <img 
                      src="/hero_software_engineer.jpg" 
                      alt="Software Engineer" 
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1e21]/70 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                      <div>
                        <div className="text-brand-primary text-2xl font-black mb-0.5">99%</div>
                        <div className="text-white text-[10px] font-bold uppercase tracking-wider">Uptime Reliability</div>
                      </div>
                      <div className="p-3 bg-brand-primary rounded-xl">
                        <TrendingUp className="text-white w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>

            {/* Social Links on Bottom Left */}
            <FadeIn direction="up" delay={0.4} className="mt-8 md:mt-12">
              <SocialLinks />
            </FadeIn>
          </div>
        </section>
      </div>

      {/* 2. SERVICES SLIDER SECTION */}
      <section className="py-20 lg:py-28 bg-[#f8fafa] w-full">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <ServicesSlider />
          </FadeIn>
        </div>
      </section>

      {/* 3. ABOUT SECTION WITH PROGRESS BARS */}
      <section className="py-14 lg:py-14 bg-[#ecf0f0] border-t border-[#c9d1d1]/30">
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
                  <div className="absolute bottom-0 left-0 w-[60%] h-[28%] bg-[#ecf0f0] rounded-tr-[32px]" />
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
      <section className="py-16 lg:py-28 bg-[#ecf0f0]">
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
      <div className="bg-[#0c1e21] border-y border-white/5 py-10 overflow-hidden select-none flex whitespace-nowrap">
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
      <section className="py-20 lg:py-28 bg-[#0c1e21] relative overflow-hidden">
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
                <div className="w-16 h-16 rounded-full border border-brand-primary flex items-center justify-center text-white font-black text-xl mb-6 bg-[#202e30]/40 transition-transform duration-300 group-hover:scale-110 shadow-[0_0_20px_rgba(32,192,151,0.15)]">
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
      <section className="py-20 lg:py-28 bg-[#ecf0f0] border-t border-[#c9d1d1]/30">
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
              
              <div className="mt-8 pt-6 border-t border-[#c9d1d1]">
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
                    className={`bg-white rounded-[20px] border border-[#c9d1d1] transition-all duration-300 ${
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
      <section className="py-16 lg:py-24 bg-[#202e30] relative overflow-hidden text-center">
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
