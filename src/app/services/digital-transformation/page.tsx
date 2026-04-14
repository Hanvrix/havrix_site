"use client";

import { motion } from "framer-motion";
import Section, { SectionHeader } from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { 
  Zap, 
  BrainCircuit, 
  Cloud, 
  Network, 
  ShieldCheck, 
  Cpu, 
  BarChart3, 
  Globe,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

export default function DigitalTransformationPage() {
  const badge = {
    icon: Zap,
    text: "Digital Evolution"
  };

  const hero = {
    title: "Transform Your Manufacturing",
    subtitle: "Navigate the journey to Industry 4.0 with expert guidance. We help manufacturers modernize operations, embrace digital technologies, and achieve operational excellence.",
    primaryCTA: "Start Assessment",
    secondaryCTA: "View Case Studies",
    backgroundImage: "C:\\Users\\Asus\\.gemini\\antigravity\\brain\\15f87fc1-fade-4710-a266-b5dd03796744\\digital_transformation_hero_bg_1773988373858.png"
  };

  const stats = [
    {
      value: "10 Weeks",
      label: "Go-Live Timeline",
      description: "From strategic assessment to full-scale deployment."
    },
    {
      value: "40%",
      label: "Efficiency Gain",
      description: "Average operational throughput increase across our partners."
    },
    {
      value: "25%",
      label: "Cost Reduction",
      description: "Minimized overhead via automated process optimization."
    },
    {
      value: "24/7",
      label: "Integrity",
      description: "Mission-critical monitoring and system health management."
    }
  ];

  const overview = {
    title: "The Evolution of Industry",
    content: "Digital transformation is no longer a luxury; it's the baseline for survival. We provide the architectural integrity and strategic foresight required to transition from legacy systems to a cloud-native, AI-driven ecosystem that scales effortlessly."
  };

  const features = [
    {
      icon: BrainCircuit,
      title: "AI/ML Integration",
      description: "Deploying proprietary neural networks to automate complex decision-making and predictive maintenance.",
      points: ["Predictive Analytics", "Natural Language Processing", "Autonomous Workflows"]
    },
    {
      icon: Cloud,
      title: "Cloud Adoption",
      description: "Migrating mission-critical infrastructure to elastic, edge-optimized clouds for global reach and zero latency.",
      points: ["Multi-Cloud Strategy", "Serverless Architecture", "Edge Computing"]
    },
    {
      icon: Network,
      title: "IoT Connectivity",
      description: "Bridging the gap between physical operations and digital logic with real-time sensor integration and data telemetry.",
      points: ["Smart Manufacturing", "Real-time Telemetry", "Industrial Automation"]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Operational Velocity",
      description: "Accelerate your internal processes with automated logic that outpaces market shifts."
    },
    {
      icon: ShieldCheck,
      title: "Architectural Integrity",
      description: "Build on a foundation that eliminates technical debt and ensures long-term scalability."
    }
  ];

  const process = [
    {
      title: "Strategic Audit",
      description: "Comprehensive mapping of existing infrastructure and bottleneck identification."
    },
    {
      title: "Digital Roadmap",
      description: "Architecting the transition path with minimal operational friction."
    },
    {
      title: "Agile Execution",
      description: "Iterative deployment of cloud-native modules and AI integrations."
    },
    {
      title: "Continuous Optimization",
      description: "Post-deployment monitoring and recursive system refinement."
    }
  ];

  const whyChooseUs = [
    {
      icon: Cpu,
      title: "Technology First",
      description: "We are engineers, not theorists. Our solutions are built to run, not just to look good."
    },
    {
      icon: BarChart3,
      title: "Data-Driven Logic",
      description: "Every decision is backed by rigorous telemetry and performance metrics."
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Our architectures are designed for international scale and multi-region deployment."
    }
  ];

  const finalCTA = {
    title: "Start Your Evolution Today",
    subtitle: "Deploy your most ambitious projects with the world's most precise engineering squad.",
    buttonText: "Establish Mission"
  };

  const BadgeIcon = badge.icon;

  return (
    <div className="bg-bg-dark text-white">
      {/* Hero Section */}
      <Section className="pt-24 pb-20 relative overflow-hidden bg-bg-dark border-b border-white/5 min-h-[70vh] flex items-center">
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
      <Section id="stats" className="py-10 bg-[#0D1B2A] border-y border-white/5" light={false}>
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
      <Section id="overview" className="bg-bg-dark py-16" light={false}>
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-12 tracking-tight uppercase tracking-wider">{overview.title}</h2>
            <p className="text-xl md:text-2xl text-blue-100/60 leading-relaxed font-bold">
                {overview.content}
            </p>
        </div>
      </Section>

      {/* Features Grid */}
      <Section className="bg-bg-dark pb-16" light={false}>
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
      <Section className="bg-[#0b1121] py-16 border-y border-white/5" light={false}>
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
      <Section className="bg-bg-dark py-16" light={false}>
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
      <Section className="bg-[#0b1121] py-16" light={false}>
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
      <Section className="py-20 bg-bg-dark" light={false}>
        <div className="text-center max-w-5xl mx-auto glass-morphism p-16 rounded-[3rem] border border-white/5 relative overflow-hidden group">
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
