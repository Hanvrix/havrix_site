"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Cpu,
  Globe2,
  Layers,
  MessageSquare,
  Rocket,
  Search,
  Settings,
  Users,
  Terminal,
  Server,
  Zap,
  Shield,
  Smartphone,
  Eye,
  Activity,
  ArrowUpRight
} from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Section, { SectionHeader } from "@/components/ui/Section";

export default function Home() {
  const services = [
    {
      title: "Digital Transformation",
      description: "We help businesses adopt modern technologies and digital strategies to optimize processes, increase productivity, and stay competitive.",
      icon: <Zap className="h-8 w-8 text-orange-500" />,
      delay: 0.5,
      href: "/services/digital-transformation",
    },
    {
      title: "Web Development",
      description: "Web development is the process of creating websites and web applications for the internet or intranet.",
      icon: <Code2 className="h-8 w-8 text-orange-500" />,
      delay: 0.1,
      href: "/services/web-app-development",
    },
    {
      title: "Software Development",
      description: "We build scalable web and mobile applications that improve business operations, enhance user experience, and support digital growth.",
      icon: <Globe2 className="h-8 w-8 text-orange-500" />,
      delay: 0.2,
      href: "/services/mobile-app-development",
    },
    {
      title: "Custom Software",
      description: "We develop tailored software solutions designed specifically to meet unique business requirements and streamline internal processes.",
      icon: <Settings className="h-8 w-8 text-orange-500" />,
      delay: 0.3,
      href: "/services/custom-development",
    },
    {
      title: "CMS, E-Commerce & ERP",
      description: "We provide CMS, e-commerce, and ERP solutions that help businesses manage content, sales, and operations efficiently.",
      icon: <Server className="h-8 w-8 text-orange-500" />,
      delay: 0.4,
      href: "/services/cms-ecommerce-erp",
    },
    {
      title: "BPO Support Services",
      description: "Our BPO support services deliver reliable customer assistance through chat, email, and voice channels to improve engagement and satisfaction.",
      icon: <MessageSquare className="h-8 w-8 text-orange-500" />,
      delay: 0.6,
      href: "/services/support",
    },
  ];

  const technologies = [
    { name: "SaaS Products", icon: <Layers className="h-5 w-5" /> },
    { name: "Custom Apps", icon: <Smartphone className="h-5 w-5" /> },
    { name: "Automation", icon: <Zap className="h-5 w-5" /> },
    { name: "Support", icon: <Shield className="h-5 w-5" /> },
  ];

  const reasons = [
    { title: "Architectural Integrity", desc: "Every line of code is written for scalability and security." },
    { title: "Industry Precision", desc: "Deep expertise in Textile and SaaS market challenges." },
    { title: "End-to-End Ownership", desc: "Your dedicated engineering partner from discovery to support." },
    // { title: "Conversion-First Design", desc: "UX engineered to drive user action and business results." },
  ];

  const steps = [
    {
      title: "Discovery",
      description: "High-fidelity analysis of your current bottlenecks and business objectives.",
      icon: <Eye className="h-7 w-7" />,
    },
    {
      title: "Architecture",
      description: "Engineering the technical blueprint and user journey for maximum scalability.",
      icon: <Terminal className="h-7 w-7" />,
    },
    {
      title: "Development",
      description: "Sprints focused on technical precision, security, and iterative value delivery.",
      icon: <Code2 className="h-7 w-7" />,
    },
    {
      title: "Deployment",
      description: "Rigorous testing and optimized launch into your live digital ecosystem.",
      icon: <Rocket className="h-7 w-7" />,
    },
    {
      title: "Synchronization",
      description: "Ongoing support and performance optimization to ensure dominance.",
      icon: <Activity className="h-7 w-7" />,
    },
  ];

  const testimonials = [
    {
      quote: "Hanvrix didn't just digitize our inventory; they helped us redefine our entire supply chain logic. Our operational efficiency increased by 40% in six months.",
      author: "Sarah Kensington",
      role: "CTO, FlowSense",
    },
    {
      quote: "The technical precision and architectural depth they brought to our CRM build was world-class. It’s a tool that finally scales as fast as our sales team.",
      author: "David Miller",
      role: "Operations Director, TexGlobal",
    },
    {
      quote: "Elite performance, stunning UI, and a team that actually understands business goals. Simply the best software partners we've worked with.",
      author: "Emily Rodriguez",
      role: "Product Lead, Innovate AI",
    },
  ];

  return (
    <div className="overflow-hidden bg-bg-dark">
      {/* Hero Section */}
      <section className="relative pt-10 pb-15 lg:pt-20 lg:pb-22 flex items-center justify-center overflow-hidden">
        {/* Innovative Background Image */}
        <div className="absolute inset-0 -z-20">
          <img
            src="/images/hero-bg.png"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-bg-dark/20"></div>
        </div>

        <div className="absolute top-0 inset-x-0 h-screen hero-glow -z-10 opacity-60"></div>
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute inset-0 opacity-[0.03] -z-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center pr-6 pl-2 py-2 rounded-full glass-morphism text-sm font-black border border-white/5 mb-10 tracking-widest uppercase"
            >
              <div className="w-6 h-6 bg-orange-500/20 rounded-lg flex items-center justify-center mr-3">
                <Zap className="h-3 w-3  text-orange-500" />
              </div>
              <span className="text-brand-accent">Everyday is your's</span>
            </motion.div>

            <motion.h6
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-6"
            >
              Make Your <br />
              <span className="text-gradient">Business </span>
              Smarter and Easier.
            </motion.h6>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-base md:text-lg text-blue-100/60 max-w-3xl mx-auto mb-10 leading-relaxed font-medium"
            >
              Powerful technology designed to streamline operations and unlock new opportunities. We build smart digital solutions
              that drive real‑world impact and sustainable growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-8"
            >
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="cta" size="sm" className="w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
              <Link href="/about" className="w-full sm:w-auto">
                <Button variant="outline" size="sm" className="w-full sm:w-auto">
                  About Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Short About Section */}
      <Section light={true} className="bg-white overflow-hidden py-1 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Side: Images */}
            <div className="relative flex justify-center lg:justify-start">
              {/* Main Circular Image */}
              <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden shadow-2xl border-[12px] border-gray-50 z-10">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Overlapping Small Image */}
              <div className="absolute bottom-0 right-0 sm:bottom-10 sm:-right-8 lg:bottom-12 lg:-right-12 w-40 h-40 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-2xl border-[12px] border-white z-20">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80"
                  alt="Modern office"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decor elements */}
              <div className="absolute top-10 -left-10 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl -z-10"></div>
              <div className="absolute bottom-20 -right-20 w-40 h-40 bg-brand-primary/10 rounded-full blur-3xl -z-10"></div>
            </div>

            {/* Right Side: Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col space-y-3"
            >
              <div className="inline-flex items-center space-x-3">
                <span className="text-orange-500 font-bold tracking-widest text-sm uppercase">Short About</span>
                <div className="w-12 h-[2px] bg-orange-500/30"></div>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-5xl font-black text-gray-900 leading-[1.15] tracking-tight">
                Innovating Technology For A <span className="text-gradient">Smarter Future</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-base leading-relaxed pt-2 pb-4">
                <p>
                  Hanvrix is a technology-driven company focused on delivering innovative digital solutions for modern businesses. We help organizations improve efficiency, strengthen their digital presence, and adapt to the rapidly evolving technology landscape.
                </p>
                <p>
                  Our goal is to simplify complex business challenges through smart technology, creative thinking, and reliable solutions that support long-term growth and success.
                </p>
              </div>
              <div>
                <Link href="/about">
                  <Button variant="cta" size="sm" className="h-10 px-6 py-0 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">About Us</Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section light={false} id="services" className="relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <SectionHeader
          title="Our Service"
          subtitle="Precision-engineered services designed to eliminate technical debt and accelerate your digital dominance."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} delay={service.delay} className="flex flex-col h-full group hover:-translate-y-2 transition-transform duration-500 hover:shadow-2xl hover:shadow-orange-500/10 border border-white/5 hover:border-orange-500/30">
              <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black text-white mb-2 tracking-tight">{service.title}</h3>
              <p className="text-blue-100/50 leading-relaxed mb-4 font-medium flex-grow">
                {service.description}
              </p>
              <div className="mt-auto">
                <Link href={service.href} className="text-brand-primary font-bold inline-flex items-center group/link hover:text-white transition-colors">
                  Learn More
                  <ArrowUpRight className="h-4 w-4 ml-2 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* About Section */}
      <Section light={true} className="overflow-hidden border-y border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="w-20 h-2 bg-brand-primary mb-1 rounded-full"></div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-1 tracking-tighter leading-tight">
              The <span className="text-gradient">Hanvrix</span>
            </h2>
            <p className="text-base text-gray-600 mb-12 leading-relaxed font-medium">
              Hanvrix Tech is a collective of elite software architects and designers dedicated to
              engineering the next generation of business technology. We don&apos;t just &quot;build apps&quot;—we design tactical advantages.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-12">
              {technologies.map((tech, idx) => (
                <div key={idx} className="flex items-center space-x-4 text-gray-900">
                  <div className="p-3 bg-orange-500/10 border border-orange-500/20 rounded-xl text-orange-500 flex items-center justify-center w-12 h-12">
                    {tech.icon}
                  </div>
                  <span className="font-bold text-lg">{tech.name}</span>
                </div>
              ))}
            </div>
            {/* <Link href="/about">
              <Button variant="primary" size="sm" className="h-10 px-6 py-0">Our Mission</Button>
            </Link> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative lg:pl-10 mt-10 lg:mt-0"
          >
            <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 p-8 md:p-12 relative flex flex-col group transition-all duration-500 hover:shadow-[0_8px_40px_rgb(0,0,0,0.12)] mt-8">
              {/* Overlapping Orange Quote Box */}
              <div className="absolute -top-8 -left-6 md:-left-8 w-16 h-16 md:w-20 md:h-20 bg-[#d97706] rounded-2xl flex items-center justify-center text-white shadow-lg">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21L16.417 14.5H10.5V3H21.5V12.5L18.017 21H14.017ZM3.017 21L5.417 14.5H-0.5V3H10.5V12.5L7.017 21H3.017Z" />
                </svg>
              </div>

              <div className="pt-4 md:pt-6">
                <p className="text-base md:text-xl text-gray-600 italic font-medium leading-relaxed mb-10">
                  &quot;We bridge the gap between &apos;technical features&apos; and &apos;business value.&apos; Our engineering is
                  ROI-driven infrastructure that outlasts market trends.&quot;
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-[#f29339] rounded-full flex items-center justify-center text-xl md:text-2xl font-black text-white">
                    HT
                  </div>
                  <div>
                    <p className="font-bold text-lg md:text-xl text-gray-900 tracking-tight">Hanvrix Team</p>
                    <p className="text-gray-500 font-medium">Elite Engineering</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section light={false}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, order: 1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-tight">
              The Tactical <br />
              <span className="text-brand-primary text-glow">Advantage</span>
            </h2>
            <p className="text-base text-blue-100/50 mb-10 leading-relaxed font-medium">
              We prioritize architectural integrity and industry-specific precision to ensure
              your digital systems are secure, scalable, and conversion-ready.
            </p>
            <div className="grid grid-cols-1 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex flex-col space-y-2 p-5 glass-morphism rounded-2xl group border border-white/5 hover:border-brand-primary/30 transition-all">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-orange-500/10 border border-orange-500/20 rounded-xl group-hover:bg-orange-500/20 transition-colors flex items-center justify-center w-12 h-12">
                      <CheckCircle2 className="h-6 w-6 text-orange-500" />
                    </div>
                    <span className="font-black text-white text-lg tracking-tight uppercase">{reason.title}</span>
                  </div>
                  <p className="text-blue-100/40 font-medium pl-14">{reason.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="lg:order-1 relative">
            <div className="grid grid-cols-2 gap-6 relative z-10">
              <div className="p-8 glass-morphism rounded-3xl border border-white/5 text-center mt-10">
                <div className="text-4xl font-black text-white mb-2">100%</div>
                <div className="text-brand-accent font-bold uppercase tracking-widest text-[10px]">Architectural Integrity</div>
              </div>
              <div className="p-8 glass-morphism rounded-3xl border border-white/5 text-center mb-10">
                <div className="text-4xl font-black text-brand-primary mb-2">24/7</div>
                <div className="text-blue-100/60 font-bold uppercase tracking-widest text-[10px]">Mission Support</div>
              </div>
              <div className="p-8 glass-morphism rounded-3xl border border-white/5 text-center mt-10">
                <div className="text-4xl font-black text-white mb-2">ROI</div>
                <div className="text-brand-accent font-bold uppercase tracking-widest text-[10px]">Driven Infrastructure</div>
              </div>
              {/* <div className="p-10 glass-morphism rounded-[2.5rem] border border-white/5 text-center mb-12">
                <div className="text-5xl font-black text-brand-primary mb-2">10K+</div>
                <div className="text-blue-100/60 font-bold uppercase tracking-widest text-xs">Active Users Scaled</div>
              </div> */}
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px] -z-10"></div>
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section light={true} className="relative overflow-hidden">
        <SectionHeader
          title="The Deployment Workflow"
          subtitle="A high-velocity methodology designed to take your vision from discovery to market dominance with zero friction."
        />
        <div className="relative">
          <div className="hidden lg:block absolute top-[60px] left-[5%] w-[90%] h-0.5 bg-white/5 -z-10"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <div className="w-17 h-17 bg-orange-500/10 text-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-2xl border border-orange-500/20 group-hover:border-orange-500/50 group-hover:-translate-y-2 transition-all duration-500">
                  {step.icon}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-4 tracking-tight uppercase tracking-wider">{step.title}</h3>
                <p className="text-gray-600 font-medium leading-relaxed text-sm">{step.description}</p>
                <div className="mt-8 text-5xl font-black text-gray-900 select-none">{index + 1}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      {/* <Section light={false}>
        <SectionHeader
          title="Verified Impact"
          subtitle="Explore the tangible business value we've delivered through Everyday is your's and architectural depth."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <Card key={i} className="relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-0 bg-brand-primary group-hover:h-full transition-all duration-700"></div>
              <div className="relative z-10 pt-4">
                <span className="text-7xl text-brand-primary/10 absolute -top-4 left-0 font-serif leading-none select-none">&quot;</span>
                <p className="relative z-10 leading-relaxed text-blue-100/70 mb-12 pt-6 text-lg font-bold italic">
                  {t.quote}
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center font-black text-orange-500 border border-orange-500/20 group-hover:bg-orange-500/20 transition-colors">
                    {t.author[0]}
                  </div>
                  <div>
                    <p className="font-black text-white tracking-tight uppercase">{t.author}</p>
                    <p className="text-sm text-brand-accent font-bold">{t.role}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section> */}

      {/* CTA Section */}
      {/* <Section light={false} className="py-24">
        <div className="bg-brand-primary rounded-[4rem] py-24 px-10 text-center text-white overflow-hidden relative shadow-2xl shadow-blue-500/20 group">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] group-hover:scale-110 transition-transform duration-1000"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-brand-accent/20 rounded-full blur-[100px]"></div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-12 leading-[0.9] tracking-tighter"
            >
              Stop Reacting. <br />
              <span className="text-blue-100">Start Dominating.</span>
            </motion.h2>
            <p className="text-xl md:text-2xl text-blue-100/80 mb-16 max-w-2xl mx-auto font-bold leading-relaxed">
              Your business deserves elite digital infrastructure.
              Let&apos;s architect your next tactical advantage together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="cta" className="bg-white text-brand-primary hover:bg-blue-50">
                  Initialize Your Project
                </Button>
              </Link>
              <Link href="/portfolio" className="text-white font-black text-lg inline-flex items-center group/btn hover:text-blue-100 transition-colors tracking-widest uppercase">
                Explore Legacy
                <ArrowRight className="h-6 w-6 ml-3 group-hover/btn:translate-x-3 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </Section> */}
    </div>
  );
}

