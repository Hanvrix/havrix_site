import Section, { SectionHeader } from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { 
  Code2, 
  Layers, 
  Database, 
  Smartphone, 
  Rocket, 
  Lock, 
  Activity, 
  Shield, 
  ShieldCheck,
  CheckCircle2,
  Users,
  ArrowRight,
  Zap
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export default function CustomDevelopmentPage() {
  const badge = {
    icon: Code2,
    text: "Custom Engineering"
  };

  const hero = {
    title: "Build Exactly What You Need",
    subtitle: "When out-of-the-box features aren't enough, our development team builds custom solutions tailored to your unique business requirements.",
    primaryCTA: "Discuss Your Project",
    secondaryCTA: "View Portfolio",
  };

  const stats = [
    {
      value: "500+",
      label: "Projects Delivered",
      description: "From startup MVPs to enterprise-grade ecosystem components."
    },
    {
      value: "200+",
      label: "API Integrations",
      description: "Seamlessly connecting your digital tools into a unified logic."
    },
    {
      value: "99.9%",
      label: "System Uptime",
      description: "Reliability engineered into every line of code we ship."
    },
    {
      value: "4.9/5",
      label: "Partner Satisfaction",
      description: "Consistent delivery of high-impact digital solutions."
    }
  ];

  const overview = {
    title: "Bespoke Logic, Global Scale",
    content: "Off-the-shelf software often fails to capture the unique competitive advantages of your business. We build tailored applications that align perfectly with your internal workflows, ensuring maximum efficiency and architectural longevity."
  };

  const features = [
    {
      icon: Layers,
      title: "Scalable Microservices",
      description: "Decoupling complex systems into manageable, independent services for easier scaling and maintenance.",
      points: ["Message Queues", "Distributed Logic", "Fault Tolerance"]
    },
    {
      icon: Database,
      title: "High-Performance Data",
      description: "Optimizing database schemas and query logic to handle massive throughput with sub-millisecond latency.",
      points: ["ACID Compliance", "Real-time Sync", "Data Encryption"]
    },
    {
      icon: Smartphone,
      title: "Cross-Platform Sync",
      description: "Developing unified experiences that run seamlessly across web, mobile, and desktop environments.",
      points: ["Native Performance", "Offline Capability", "Unified UI/UX"]
    }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: "Rapid ROI",
      description: "Decrease time-to-market with our agile development methodology and pre-built module library."
    },
    {
      icon: Lock,
      title: "Security First",
      description: "Enterprise-grade security protocols integrated from the initial architecture phase."
    }
  ];

  const process = [
    {
      title: "Deep Discovery",
      description: "Understanding your business logic and identifying technical requirements."
    },
    {
      title: "Rapid Prototyping",
      description: "Visualizing the solution with interactive mockups and architectural drafts."
    },
    {
      title: "Agile Development",
      description: "Iterative sprints with continuous feedback and transparent progress tracking."
    },
    {
      title: "Safe Deployment",
      description: "Zero-downtime releases with automated testing and rollback procedures."
    }
  ];

  const whyChooseUs = [
    {
      icon: Activity,
      title: "Real-time Telemetry",
      description: "We monitor every deployment with granular metrics to ensure peak performance."
    },
    {
      icon: Shield,
      title: "Technical Debt Zero",
      description: "We write clean, documented code that is easy to inherit and scale."
    },
    {
      icon: Users,
      title: "Collaborative Logic",
      description: "We act as an extension of your team, not just an external vendor."
    }
  ];

  const finalCTA = {
    title: "Build Your Vision Today",
    subtitle: "Deploy your most ambitious projects with the world's most precise engineering squad.",
    buttonText: "Initialize Integration"
  };

  const BadgeIcon = badge.icon;

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-bg-dark pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/10 blur-[150px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn direction="up">
             <div className="max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center space-x-3 text-brand-primary font-black uppercase tracking-[4px] text-[13px] mb-8 bg-white/5 px-6 py-2 rounded-full border border-white/10">
                  <BadgeIcon className="h-4 w-4" />
                  <span>{badge.text}</span>
                </div>
                <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[1] mb-10 uppercase">
                   {hero.title}
                </h1>
                <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-3xl mx-auto mb-12">
                   {hero.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                   <Link href="/contact">
                     <Button className="px-12 h-[54px] h-full shadow-2xl shadow-brand-primary/20">
                       <Code2 className="w-5 h-5" /> {hero.primaryCTA}
                     </Button>
                   </Link>
                   <Link href="#overview">
                     <Button variant="white" className="px-12 h-[54px] font-black uppercase tracking-widest text-sm">
                        <Layers className="w-5 h-5" /> {hero.secondaryCTA}
                     </Button>
                   </Link>
                </div>
             </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats Section */}
      <Section id="stats" light={true}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <Card className="text-center !p-8 border bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="text-5xl font-black text-bg-dark mb-2 tracking-tighter group-hover:text-brand-primary transition-colors relative z-10">{stat.value}</div>
                <div className="text-[13px] font-black text-gray-400 uppercase tracking-[3px] mb-2 relative z-10">{stat.label}</div>
                <p className="text-[15px] text-gray-500 font-medium leading-relaxed relative z-10">{stat.description}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Overview Section */}
      <Section id="overview" light={false} className="relative overflow-hidden !pb-0">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] rounded-full"></div>
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center relative z-10 -mb-8 md:-mb-12">
              <SectionHeader
                centered={true}
                theme="dark"
                title={overview.title}
                subtitle={overview.content}
              />
          </div>
        </FadeIn>
      </Section>

      {/* Features Grid */}
      <Section light={true}>
        <FadeIn>
          <SectionHeader title="Core Capabilities" subtitle="Advanced technologies deployed for operational resilience." />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <FadeIn key={i} delay={i * 0.1}>
                <Card className="flex flex-col !p-8 h-full border-none bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-500 group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="flex items-center space-x-4 mb-6 relative z-10">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-primary shadow-sm group-hover:bg-brand-primary group-hover:text-white group-hover:scale-110 transition-all duration-500 shrink-0">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-black text-bg-dark tracking-tight leading-none uppercase">{feature.title}</h3>
                  </div>
                  <p className="text-[16px] text-gray-500 mb-8 leading-relaxed font-medium relative z-10">
                    {feature.description}
                  </p>
                  <ul className="mt-auto space-y-4 relative z-10">
                    {feature.points.map((point, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle2 className="shrink-0 text-brand-primary h-5 w-5" />
                        <span className="font-bold text-bg-dark text-[14px]">{point}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* Benefits Section */}
      <Section light={false} className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-primary/5 blur-[100px] rounded-full"></div>
        <FadeIn>
          <SectionHeader theme="dark" title="Business Outcomes" subtitle="What you can expect from a strategic integration." />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
            {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                    <FadeIn key={i} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
                        <Card className="flex gap-6 !p-5 items-start h-full border-none bg-white/5 hover:bg-white hover:text-bg-dark transition-all duration-500 group relative overflow-hidden">
                             <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/10 group-hover:bg-brand-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                             <div className="shrink-0 w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 relative z-10">
                                <Icon className="h-8 w-8" />
                             </div>
                             <div className="relative z-10">
                                <h4 className="text-2xl font-black mb-2 tracking-tight group-hover:text-bg-dark transition-colors">{benefit.title}</h4>
                                <p className="text-gray-400 leading-relaxed font-medium text-[16px] group-hover:text-gray-600 transition-colors">
                                    {benefit.description}
                                </p>
                             </div>
                        </Card>
                    </FadeIn>
                );
            })}
        </div>
      </Section>

      {/* Process Section */}
      <Section light={true}>
        <FadeIn>
          <SectionHeader title="Our Strategic Process" subtitle="A structured approach to implementation with minimal friction." />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-10">
            {process.map((step, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                    <div className="text-center group relative overflow-hidden bg-slate-50 p-6 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-500">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                        <div className="relative z-10 w-16 h-16 bg-white rounded-3xl flex items-center justify-center mb-6 shadow-sm mx-auto group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                            <span className="text-2xl font-black">{i + 1}</span>
                        </div>
                        <h4 className="relative z-10 text-xl font-black text-bg-dark mb-2 uppercase tracking-tight leading-none">{step.title}</h4>
                        <p className="relative z-10 text-gray-500 font-medium text-[15px] leading-relaxed">{step.description}</p>
                    </div>
                </FadeIn>
            ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section light={false} className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/carbon-fibre.png')" }}></div>
        <FadeIn>
          <SectionHeader theme="dark" title="The Hanvrix Edge" subtitle="Engineered precision to redefine your operational landscape." />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {whyChooseUs.map((item, i) => {
                const Icon = item.icon;
                return (
                    <FadeIn key={i} delay={i * 0.1}>
                        <Card className="text-center !p-8 bg-white/5 border-none h-full hover:bg-white hover:text-bg-dark transition-all duration-500 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/10 group-hover:bg-brand-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 mx-auto text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 relative z-10">
                                <Icon className="h-8 w-8" />
                            </div>
                            <h4 className="text-xl font-black mb-2 uppercase tracking-tight group-hover:text-bg-dark transition-colors relative z-10">{item.title}</h4>
                            <p className="text-gray-400 font-medium text-[15px] leading-relaxed group-hover:text-gray-600 transition-colors relative z-10">{item.description}</p>
                        </Card>
                    </FadeIn>
                );
            })}
        </div>
      </Section>

      {/* Final CTA */}
      <section className="bg-brand-primary py-20 text-center text-white">
        <FadeIn>
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter uppercase leading-[1]">
              Engineered <span className="underline decoration-white/30">Excellence.</span>
            </h2>
            <p className="text-xl font-medium mb-12 opacity-90 max-w-2xl mx-auto">
              {finalCTA.subtitle}
            </p>
            <div className="flex justify-center">
              <Link href="/contact">
                <Button variant="white" className="px-12 h-[54px] text-bg-dark font-black uppercase tracking-widest text-sm">
                  <Rocket className="w-5 h-5" /> {finalCTA.buttonText}
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
