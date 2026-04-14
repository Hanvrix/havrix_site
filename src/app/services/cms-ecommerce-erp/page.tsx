"use client";

import { motion } from "framer-motion";
import Section, { SectionHeader } from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { 
  Database, 
  ShoppingCart, 
  Box, 
  Zap, 
  ShieldCheck, 
  History, 
  BarChart3, 
  Clock,
  Rocket,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export default function CMSEcommerceERPPage() {
  const badge = {
    icon: Database,
    text: "Unified Systems"
  };

  const hero = {
    title: "Unified Commerce, Intelligent Workflows",
    subtitle: "Headless CMS, custom E-Commerce, and ERP integrations designed to automate your business logic and scale efficiently.",
    primaryCTA: "Optimize Operations",
    secondaryCTA: "View Integrations",
    backgroundImage: "C:\\Users\\Asus\\.gemini\\antigravity\\brain\\15f87fc1-fade-4710-a266-b5dd03796744\\cms_ecommerce_erp_hero_bg_1773989095672.png"
  };

  const stats = [
    {
      value: "ERP-Ready",
      label: "Integration",
      description: "Seamless sync with Sage, SAP, Oracle, and proprietary systems."
    },
    {
      value: "Secure",
      label: "Checkout",
      description: "PCI-DSS compliant commerce architecture for total transaction safety."
    },
    {
      value: "30%",
      label: "Efficiency Gain",
      description: "Average reduction in manual data entry via automated ERP workflows."
    },
    {
      value: "Real-time",
      label: "Inventory",
      description: "Instant stock synchronization across all sales channels and warehouses."
    }
  ];

  const overview = {
    title: "Dynamic Business Logic",
    content: "Disjointed systems are the primary killer of operational efficiency. We bridge the gap between your content, your commerce, and your enterprise resource planning to create a unified digital engine."
  };

  const features = [
    {
      icon: ShoppingCart,
      title: "Headless E-Commerce",
      description: "Custom commerce engines that decouple the frontend from the transactional logic for total flexibility.",
      points: ["Custom Cart Logic", "Multi-Currency Support", "Omnichannel Ready"]
    },
    {
      icon: Box,
      title: "ERP Connectivity",
      description: "Deep-level integrations that ensure your digital storefront speaks directly to your back-office.",
      points: ["Automated Invoicing", "Stock Level Sync", "Customer Relation Hub"]
    },
    {
      icon: History,
      title: "CMS Versatility",
      description: "Empowering your marketing team with flexible, headless content management tools.",
      points: ["Dynamic Content Models", "Multi-Language Support", "Instant Publishing"]
    }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: "Operational Scale",
      description: "Scale your business without increasing headcount via intelligent automation."
    },
    {
      icon: ShieldCheck,
      title: "Data Integrity",
      description: "One source of truth across all systems, eliminating data silos and errors."
    }
  ];

  const process = [
    {
      title: "Systems Audit",
      description: "Analyzing current data flow and identifying integration bottlenecks."
    },
    {
      title: "Data Mapping",
      description: "Designing the logic for seamless information transfer between CMS/ERP/E-Com."
    },
    {
      title: "Secure Migration",
      description: "Managing the safe transition of legacy data into your new unified ecosystem."
    },
    {
      title: "Workflow Training",
      description: "Onboarding your team to the new automated business processes."
    }
  ];

  const whyChooseUs = [
    {
      icon: Zap,
      title: "High Performance",
      description: "Ultra-fast Shopify or custom deployments that out-convert standard templates."
    },
    {
      icon: Clock,
      title: "Automated Sync",
      description: "Scheduled and real-time data pulses to keep your business records accurate."
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Custom reporting dashboards that pull data from all integrated systems."
    }
  ];

  const finalCTA = {
    title: "Unify Your Systems",
    subtitle: "Deploy your most ambitious projects with the world's most precise engineering squad.",
    buttonText: "Establish Mission"
  };

  const BadgeIcon = badge.icon;

  return (
    <div className="bg-bg-dark text-white">
      {/* Hero Section */}
      <Section className="pt-48 pb-40 relative overflow-hidden bg-bg-dark border-b border-white/5 min-h-[80vh] flex items-center">
        {hero.backgroundImage && (
          <div className="absolute inset-0 z-0">
            <img 
              src={hero.backgroundImage} 
              alt="" 
              className="w-full h-full object-cover opacity-40 blur-[2px]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/80 via-bg-dark/40 to-bg-dark"></div>
          </div>
        )}
        
        <div className="max-w-6xl mx-auto text-center relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-5 py-2 rounded-full glass-morphism text-white/90 text-sm font-bold border border-white/10 mb-10 tracking-wide"
          >
            <div className="p-1 bg-white/10 rounded-md">
              <BadgeIcon className="h-4 w-4 text-brand-accent" />
            </div>
            <span>{badge.text}</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-10 leading-[0.9] tracking-tighter text-white"
          >
            {hero.title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-blue-100/70 leading-relaxed max-w-3xl mx-auto font-medium mb-16"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link href="/contact">
              <Button variant="white" className="h-16 px-12 text-lg shadow-2xl group border-none">
                {hero.primaryCTA}
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="#overview">
              <Button variant="outline" className="h-16 px-12 text-lg border-white/20 hover:border-white/40">
                {hero.secondaryCTA}
              </Button>
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section id="stats" className="py-20 bg-[#0D1B2A] border-y border-white/5" light={false}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-5xl font-black text-brand-accent mb-2 tracking-tighter">{stat.value}</div>
              <div className="text-xs font-black text-white uppercase tracking-[0.2em] mb-4 opacity-100">{stat.label}</div>
              <p className="text-sm text-blue-100/40 font-bold leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Overview Section */}
      <Section id="overview" className="bg-bg-dark py-32" light={false}>
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-12 tracking-tight uppercase tracking-wider">{overview.title}</h2>
            <p className="text-xl md:text-2xl text-blue-100/60 leading-relaxed font-bold">
                {overview.content}
            </p>
        </div>
      </Section>

      {/* Features Grid */}
      <Section className="bg-bg-dark pb-32" light={false}>
        <SectionHeader title="Core Capabilities" centered />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Card key={i} delay={i * 0.1} className="h-full flex flex-col p-12 rounded-[3rem]">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-8 border border-brand-primary/20">
                  <Icon className="h-8 w-8 text-brand-primary" />
                </div>
                <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-wider">{feature.title}</h3>
                <p className="text-blue-100/50 mb-10 leading-relaxed font-bold">
                  {feature.description}
                </p>
                <ul className="mt-auto space-y-4">
                  {feature.points.map((point, idx) => (
                    <li key={idx} className="flex items-center space-x-3 text-white/90 font-bold">
                      <CheckCircle2 className="h-5 w-5 text-brand-accent shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Benefits Section */}
      <Section className="bg-[#0b1121] py-32 border-y border-white/5" light={false}>
        <SectionHeader title="Business Outcomes" centered />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                    <div key={i} className="flex gap-8 p-10 glass-morphism rounded-[3rem] border border-white/5 hover:border-brand-primary/30 transition-all group">
                         <div className="shrink-0 w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-brand-primary/20 transition-colors">
                            <Icon className="h-10 w-10 text-brand-primary" />
                         </div>
                         <div>
                            <h4 className="text-2xl font-black text-white mb-3 uppercase tracking-wider">{benefit.title}</h4>
                            <p className="text-blue-100/60 leading-relaxed font-bold">
                                {benefit.description}
                            </p>
                         </div>
                    </div>
                );
            })}
        </div>
      </Section>

      {/* Process Section */}
      <Section className="bg-bg-dark py-32" light={false}>
        <SectionHeader title="Our Strategic Process" centered />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/5 -z-10"></div>
            {process.map((step, i) => (
                <div key={i} className="relative group">
                    <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-8 border border-white/10 group-hover:bg-brand-primary group-hover:border-brand-primary transition-all duration-500 relative z-10 mx-auto">
                        <span className="text-xl font-black text-white">{i + 1}</span>
                    </div>
                    <div className="text-center">
                        <h4 className="text-xl font-black text-white mb-4 uppercase tracking-widest">{step.title}</h4>
                        <p className="text-blue-100/40 font-bold text-sm leading-relaxed">{step.description}</p>
                    </div>
                </div>
            ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-[#0b1121] py-32" light={false}>
        <SectionHeader title="The Hanvrix Edge" centered />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {whyChooseUs.map((item, i) => {
                const Icon = item.icon;
                return (
                    <div key={i} className="text-center group">
                        <div className="w-20 h-20 bg-brand-primary/5 rounded-3xl flex items-center justify-center mb-8 mx-auto border border-white/5 group-hover:scale-110 transition-transform duration-500">
                            <Icon className="h-10 w-10 text-brand-accent" />
                        </div>
                        <h4 className="text-xl font-black text-white mb-4 uppercase tracking-widest">{item.title}</h4>
                        <p className="text-blue-100/50 font-bold leading-relaxed">{item.description}</p>
                    </div>
                );
            })}
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="py-48 bg-bg-dark" light={false}>
        <div className="text-center max-w-5xl mx-auto glass-morphism p-24 rounded-[4rem] border border-white/5 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent"></div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter relative z-10 uppercase tracking-widest leading-none">
            {finalCTA.title}
          </h2>
          <p className="text-xl md:text-3xl text-blue-100/60 mb-16 max-w-3xl mx-auto font-bold relative z-10">
            {finalCTA.subtitle}
          </p>
          <Link href="/contact" className="relative z-10 inline-block">
            <Button variant="cta" className="h-20 px-24 text-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500 uppercase">
              {finalCTA.buttonText}
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
