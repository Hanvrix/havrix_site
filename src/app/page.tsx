import {
  CheckCircle2,
  Code2,
  Globe2,
  Layers,
  MessageSquare,
  Rocket,
  Settings,
  Terminal,
  Server,
  Zap,
  Shield,
  Smartphone,
  Eye,
  Activity,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Section, { SectionHeader } from "@/components/ui/Section";
import ServicesSlider from "@/components/ui/ServicesSlider";
import { FadeIn } from "@/components/ui/FadeIn";
import FloatingTechBackground from "@/components/ui/FloatingTechBackground";

export default function Home() {

  const technologies = [
    { name: "SaaS Products", icon: <Layers className="h-5 w-5 text-[#b45309]" /> },
    { name: "Custom Apps", icon: <Smartphone className="h-5 w-5 text-[#b45309]" /> },
    { name: "Automation", icon: <Zap className="h-5 w-5 text-[#b45309]" /> },
    { name: "Support", icon: <Shield className="h-5 w-5 text-[#b45309]" /> },
  ];

  const reasons = [
    { title: "Architectural Integrity", desc: "Every line of code is written for scalability and security." },
    { title: "Industry Precision", desc: "Deep expertise in Textile and SaaS market challenges." },
    { title: "End-to-End Ownership", desc: "Your dedicated engineering partner from discovery to support." }
  ];

  const steps = [
    {
      title: "Discovery",
      description: "High-fidelity analysis of your current bottlenecks and business objectives.",
      icon: <Eye className="text-[#b45309]" />,
    },
    {
      title: "Architecture",
      description: "Engineering the technical blueprint and user journey for maximum scalability.",
      icon: <Terminal className="text-[#b45309]" />,
    },
    {
      title: "Development",
      description: "Sprints focused on technical precision, security, and iterative value delivery.",
      icon: <Code2 className="text-[#b45309]" />,
    },
    {
      title: "Deployment",
      description: "Rigorous testing and optimized launch into your live digital ecosystem.",
      icon: <Rocket className="text-[#b45309]" />,
    },
    {
      title: "Synchronization",
      description: "Ongoing support and performance optimization.",
      icon: <Activity className="text-[#b45309]" />,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-0 pb-8 lg:pt-2 lg:pb-10 overflow-hidden border-b border-gray-200">
        <FloatingTechBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn direction="up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
              {/* Left Side: Content */}
              <div className="max-w-xl">
                <div className="uppercase tracking-widest text-[#b45309] text-[11px] font-bold mb-4">
                  Engineered for Enterprise Excellence
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-slate-900 tracking-tight leading-[1.15] mb-6">
                  Make Your Business <br className="hidden md:block" />
                  Smarter and Easier.
                </h1>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Powerful technology designed to streamline operations and unlock new opportunities. We build smart digital solutions that drive real-world impact.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Link href="/contact" className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto bg-[#b45309] hover:bg-[#92400e] text-white">Get Started Now</Button>
                  </Link>
                  <Link href="/about" className="w-full sm:w-auto">
                    <Button variant="white" className="w-full sm:w-auto border border-gray-200">View Demos</Button>
                  </Link>
                </div>
              </div>

              {/* Right Side: Visual Mockups */}
              <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[550px] flex items-center justify-end">
                {/* Laptop Stand-in (Tilted Right Corner) */}
                <div 
                  className="absolute -right-8 lg:-right-16 top-1/2 -translate-y-1/2 w-[95%] lg:w-[110%] aspect-[16/10] bg-slate-100 rounded-xl overflow-hidden shadow-2xl z-10 border border-slate-200 hidden sm:block"
                  style={{ transform: "perspective(1200px) rotateY(-20deg) rotateZ(2deg)", transformOrigin: "right center" }}
                >
                  <div className="w-full h-8 bg-slate-900 flex items-center px-4 space-x-2">
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                  </div>
                  <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80" alt="Web Dashboard" className="w-full h-full object-cover" />
                </div>
                
                {/* Mobile Stand-in (Smaller, Straight, Next to it) */}
                <div className="absolute left-8 lg:left-4 bottom-4 lg:bottom-12 w-[160px] sm:w-[180px] lg:w-[200px] aspect-[9/19] bg-slate-900 rounded-[2rem] border-[6px] border-slate-900 shadow-2xl z-20 overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-4 bg-slate-900 rounded-b-xl w-[80px] mx-auto z-30"></div>
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80" alt="Mobile App" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Short About Section */}
      <Section light={true}>
        <FadeIn direction="up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="w-full h-auto aspect-video object-cover rounded-[10px] shadow-sm border border-gray-200"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Innovating Technology For A Smarter Future
              </h2>
              <div className="space-y-6 text-slate-600 text-[15px] leading-relaxed mb-8">
                <p>
                  Hanvrix is a technology-driven company focused on delivering innovative digital solutions for modern businesses. We help organizations improve efficiency, strengthen their digital presence, and adapt to the rapidly evolving technology landscape.
                </p>
                <p>
                  Our goal is to simplify complex business challenges through smart technology, creative thinking, and reliable solutions that support long-term growth and success.
                </p>
              </div>
              <div>
                <Link href="/about">
                  <Button>Learn More About Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Services Section */}
      <Section light={false}>
        <FadeIn direction="up">
          <ServicesSlider />
        </FadeIn>
      </Section>

      {/* About Section */}
      <Section light={true}>
        <FadeIn direction="up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                The Hanvrix Standard
              </h2>
              <p className="text-[15px] text-slate-600 mb-10 leading-relaxed">
                Hanvrix Tech is a collective of elite software architects and designers dedicated to
                engineering the next generation of business technology. We specialize in building tactical advantages for ambitious enterprises.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {technologies.map((tech, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-slate-900">
                    <div className="p-2 border border-gray-200 rounded-lg text-slate-600 flex items-center justify-center w-10 h-10">
                      {tech.icon}
                    </div>
                    <span className="font-semibold text-[15px]">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <Card className="border-l-4 border-l-slate-900 border-t-gray-200 border-b-gray-200 border-r-gray-200">
                <p className="text-lg text-slate-700 italic font-medium leading-relaxed mb-8">
                  "We bridge the gap between technical features and business value. Our engineering is
                  ROI-driven infrastructure that outlasts market trends."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-lg font-bold text-white">
                    HT
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Hanvrix Team</p>
                    <p className="text-sm text-slate-500 font-medium">Elite Engineering</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Why Choose Us */}
      <Section light={false}>
        <FadeIn direction="up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="grid grid-cols-1 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-1 mt-1 rounded-full bg-[#b45309] text-white flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">{reason.title}</h4>
                    <p className="text-slate-600 text-[15px] leading-relaxed">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 tracking-tight">
                The Tactical Advantage
              </h2>
              <p className="text-[15px] text-slate-600 mb-10 leading-relaxed">
                We prioritize architectural integrity and industry-specific precision to ensure
                your digital systems are secure, scalable, and conversion-ready.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <Card className="text-center p-5 bg-slate-900 text-white border-0">
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="font-medium text-[12px] opacity-80 uppercase tracking-wide">Architectural Integrity</div>
                </Card>
                <Card className="text-center p-5 bg-white border border-gray-200">
                  <div className="text-3xl font-bold text-slate-900 mb-2">24/7</div>
                  <div className="font-medium text-[12px] text-slate-500 uppercase tracking-wide">Mission Support</div>
                </Card>
                <Card className="text-center p-5 bg-white border border-gray-200">
                  <div className="text-3xl font-bold text-slate-900 mb-2">ROI</div>
                  <div className="font-medium text-[12px] text-slate-500 uppercase tracking-wide">Driven Infrastructure</div>
                </Card>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Process Section */}
      <Section light={true}>
        <FadeIn direction="up">
          <SectionHeader
            title="The Deployment Workflow"
            subtitle="A high-velocity methodology designed to take your vision from discovery to market dominance with zero friction."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-slate-50 rounded-lg flex items-center justify-center mx-auto mb-6 border border-gray-200 relative">
                  {step.icon}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 text-[14px] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

    </div>
  );
}
