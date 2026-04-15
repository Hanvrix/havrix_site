import Section, { SectionHeader } from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { 
  Smartphone, 
  Layers, 
  Zap, 
  ShieldCheck, 
  Activity, 
  Database, 
  BarChart3, 
  Users,
  Rocket
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export default function MobileAppDevelopmentPage() {
  const badge = {
    icon: Smartphone,
    text: "Native Performance"
  };

  const hero = {
    title: "Native Performance, Global Reach",
    subtitle: "Custom mobile applications engineered with React Native for high-impact user experiences and native-level speed.",
    primaryCTA: "Build Your App",
    secondaryCTA: "View Features",
  };

  const stats = [
    {
      value: "iOS/Android",
      label: "Native Output",
      description: "Single codebase, two high-performance native applications."
    },
    {
      value: "99%",
      label: "Crash-Free Rate",
      description: "Robust error handling and architectural integrity for zero-downtime."
    },
    {
      value: "Biometric",
      label: "Security",
      description: "FaceID and Fingerprint authentication integrated at the core."
    },
    {
      value: "Real-time",
      label: "Sync Logic",
      description: "Instant data synchronization across all user devices."
    }
  ];

  const overview = {
    title: "Mobile First Ecosystems",
    content: "The future of engagement is mobile. We build cross-platform applications that don't compromise on speed, security, or aesthetic, ensuring your brand is always in your customer's pocket."
  };

  const features = [
    {
      icon: Layers,
      title: "React Native Excellence",
      description: "Leveraging the power of React to build native-speed apps with pixel-perfect precision.",
      points: ["Shared Logic Engine", "Custom Native Modules", "Smooth Animations"]
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Security",
      description: "Encryption and secure storage protocols to protect sensitive customer data.",
      points: ["AES-256 Encryption", "Secure Keychain Access", "JWT Authentication"]
    },
    {
      icon: Activity,
      title: "Real-time Analytics",
      description: "Deep telemetry integration to understand user behavior and optimize engagement.",
      points: ["Event Tracking", "Heatmap Analysis", "Conversion Funnels"]
    }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: "Rapid Deployment",
      description: "Accelerate your time-to-market with our efficient cross-platform development logic."
    },
    {
      icon: Users,
      title: "Global Engagement",
      description: "Reach billions of users across the iOS and Android ecosystems with one tool."
    }
  ];

  const process = [
    {
      title: "UX Prototyping",
      description: "Designing interactive high-fidelity mockups with a focus on mobile ergonomics."
    },
    {
      title: "Sprint-Based Dev",
      description: "Iterative feature engineering with weekly builds and transparent progress."
    },
    {
      title: "Rigorous QA",
      description: "Testing across multiple device resolutions and OS versions for perfect stability."
    },
    {
      title: "Store Launch",
      description: "Managing the complex App Store and Play Store submission and approval process."
    }
  ];

  const whyChooseUs = [
    {
      icon: Zap,
      title: "Push Notifications",
      description: "Sophisticated re-engagement logic via cloud messaging integrations."
    },
    {
      icon: Database,
      title: "Offline-First Logic",
      description: "Ensuring your app works perfectly even without an active internet connection."
    },
    {
      icon: BarChart3,
      title: "Scalable Backend",
      description: "Robust cloud infrastructure designed to handle millions of concurrent users."
    }
  ];

  const finalCTA = {
    title: "Go Mobile Today",
    subtitle: "Deploy your most ambitious projects with the world's most precise engineering squad.",
    buttonText: "Establish Mission"
  };

  const BadgeIcon = badge.icon;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Section className="pt-8 pb-10 lg:pt-12 lg:pb-16 border-b border-gray-200">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center px-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-md border border-gray-200 bg-slate-50 mb-8">
              <BadgeIcon className="text-[#b45309]" />
              <span className="text-slate-600 font-bold tracking-wider text-[11px] uppercase">{badge.text}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight text-slate-900">
              {hero.title}
            </h1>
            
            <p className="text-[17px] text-slate-600 leading-relaxed font-medium mb-12">
              {hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-[#b45309] hover:bg-[#92400e]">
                  {hero.primaryCTA}
                </Button>
              </Link>
              <Link href="#overview">
                <Button variant="outline">
                  {hero.secondaryCTA}
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Stats Section */}
      <Section id="stats" light={true}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <Card className="text-center p-6 bg-slate-50 border-0 hover:bg-slate-100 transition-colors">
                <div className="text-4xl font-bold text-slate-900 mb-2 tracking-tight">{stat.value}</div>
                <div className="text-[12px] font-bold text-slate-600 uppercase tracking-widest mb-4">{stat.label}</div>
                <p className="text-[13px] text-slate-500 font-medium leading-relaxed">{stat.description}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Overview Section */}
      <Section id="overview" light={false}>
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
              <h6 className="text-slate-500 font-bold tracking-wider text-[13px] uppercase mb-4">Overview</h6>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight text-slate-900">{overview.title}</h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  {overview.content}
              </p>
          </div>
        </FadeIn>
      </Section>

      {/* Features Grid */}
      <Section light={true}>
        <FadeIn>
          <SectionHeader title="Core Capabilities" subtitle="Advanced technologies deployed for mobile resilience." />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <FadeIn key={i} delay={i * 0.1}>
                <Card className="flex flex-col p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6 border border-gray-200">
                    <Icon className="text-[#b45309]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                  <p className="text-[14px] text-slate-600 mb-8 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                  <ul className="mt-auto space-y-3">
                    {feature.points.map((point, idx) => (
                      <li key={idx} className="flex items-center space-x-3 text-slate-700">
                        <ShieldCheck className="shrink-0 text-[#b45309]" />
                        <span className="font-semibold text-[13px]">{point}</span>
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
      <Section light={false}>
        <FadeIn>
          <SectionHeader title="Business Outcomes" subtitle="What you can expect from a strategic integration." />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                    <FadeIn key={i} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
                        <Card className="flex gap-6 p-6 items-start h-full hover:shadow-md transition-shadow">
                             <div className="shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-gray-200 shadow-sm">
                                <Icon className="text-[#b45309]" />
                             </div>
                             <div>
                                <h4 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h4>
                                <p className="text-slate-600 leading-relaxed font-medium text-[14px]">
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                    <div className="text-center">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 border border-gray-200 shadow-sm mx-auto">
                            <span className="text-lg font-bold text-slate-900">{i + 1}</span>
                        </div>
                        <h4 className="text-[15px] font-bold text-slate-900 mb-3">{step.title}</h4>
                        <p className="text-slate-600 font-medium text-[13px] leading-relaxed">{step.description}</p>
                    </div>
                </FadeIn>
            ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section light={false} className="border-t border-gray-200">
        <FadeIn>
          <SectionHeader title="The Hanvrix Edge" subtitle="Engineered precision to redefine your operational landscape." />
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, i) => {
                const Icon = item.icon;
                return (
                    <FadeIn key={i} delay={i * 0.1}>
                        <Card className="text-center p-6 bg-slate-50 border-0 h-full hover:bg-slate-100 transition-colors">
                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 mx-auto border border-gray-200 shadow-sm">
                                <Icon className="text-[#b45309]" />
                            </div>
                            <h4 className="text-[15px] font-bold text-slate-900 mb-3">{item.title}</h4>
                            <p className="text-slate-600 font-medium text-[13px] leading-relaxed">{item.description}</p>
                        </Card>
                    </FadeIn>
                );
            })}
        </div>
      </Section>

      {/* Final CTA */}
      <Section light={true} className="py-16 border-t border-gray-200 text-center">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
              {finalCTA.title}
            </h2>
            <p className="text-lg text-slate-600 mb-10 font-medium leading-relaxed">
              {finalCTA.subtitle}
            </p>
            <Link href="/contact">
              <Button className="bg-[#b45309] hover:bg-[#92400e]">
                {finalCTA.buttonText}
              </Button>
            </Link>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
}
