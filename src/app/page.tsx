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
  ArrowRight,
  TrendingUp,
  Cpu,
  Info,
  MonitorCheck,
  Calendar
} from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Section, { SectionHeader } from "@/components/ui/Section";
import ServicesSlider from "@/components/ui/ServicesSlider";
import { FadeIn } from "@/components/ui/FadeIn";

export default function Home() {

  const technologies = [
    { name: "SaaS Products", icon: <Layers className="h-5 w-5" /> },
    { name: "Custom Apps", icon: <Smartphone className="h-5 w-5" /> },
    { name: "Automation", icon: <Zap className="h-5 w-5" /> },
    { name: "Support", icon: <Shield className="h-5 w-5" /> },
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
      icon: <Eye />,
    },
    {
      title: "Architecture",
      description: "Engineering the technical blueprint and user journey for maximum scalability.",
      icon: <Terminal />,
    },
    {
      title: "Development",
      description: "Sprints focused on technical precision, security, and iterative value delivery.",
      icon: <Code2 />,
    },
    {
      title: "Deployment",
      description: "Rigorous testing and optimized launch into your live digital ecosystem.",
      icon: <Rocket />,
    },
    {
      title: "Synchronization",
      description: "Ongoing support and performance optimization.",
      icon: <Activity />,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-10 pb-10 lg:pt-20 lg:pb-10 overflow-hidden bg-bg-dark">
        {/* Animated Background Gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/10 blur-[150px] -z-0 rounded-full -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] -z-0 rounded-full translate-y-1/2 -translate-x-1/4"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            {/* Left Side: Content */}
            <FadeIn direction="up">
              <div className="max-w-2xl">
                <div className="flex items-center space-x-3 text-brand-primary font-black uppercase tracking-[4px] text-[13px] mb-6">
                  <span className="w-10 h-[2px] bg-brand-primary"></span>
                  <span>Technology Partner</span>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-[72px] font-black text-white tracking-tighter leading-[1] mb-8">
                  Make Your Business <br />
                  <span className="text-brand-primary">Smarter</span> and <span className="underline decoration-brand-primary/30">Easier.</span>
                </h1>
                <p className="text-xl text-gray-400 mb-10 leading-relaxed font-medium">
                  Powerful technology designed to streamline operations and unlock new opportunities. We build smart digital solutions that drive real-world impact.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <Link href="/contact" className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto px-12 h-[54px] shadow-2xl shadow-brand-primary/20">
                      <Zap className="w-5 h-5" /> Initialize Integration
                    </Button>
                  </Link>
                  <Link href="/about" className="group flex items-center space-x-3 text-white font-bold hover:text-brand-primary transition-colors">
                    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-primary transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                    <span>View Projects</span>
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* Right Side: Visual Mockups */}
            <FadeIn direction="right" delay={0.2}>
              <div className="relative w-full aspect-square flex items-center justify-center">
                <div className="absolute inset-0 bg-brand-primary/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="relative z-10 w-full max-w-[500px] transform hover:scale-105 transition-transform duration-700">
                   {/* Tech Mockup Stack */}
                   <div className="relative border-8 border-white/10 rounded-[3rem] overflow-hidden shadow-2xl skew-x-[-2deg] skew-y-[1deg]">
                      <img 
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
                        alt="IT Dashboard" 
                        className="w-full h-auto"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent"></div>
                      <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                        <div>
                          <div className="text-brand-primary text-3xl font-black mb-1">99%</div>
                          <div className="text-white text-xs font-bold uppercase tracking-wider">Uptime Rate</div>
                        </div>
                        <div className="p-4 bg-brand-primary rounded-2xl">
                          <TrendingUp className="text-white w-6 h-6" />
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats / Logos Strip */}
      <div className="bg-bg-dark border-y border-white/5 py-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-100">
             {["Enterprise", "Saas Model", "Cloud Native", "AI Driven"].map((item) => (
               <div key={item} className="flex items-center justify-center space-x-3">
                 <Cpu className="text-brand-primary w-5 h-5" />
                 <span className="text-white font-bold text-lg tracking-tight">{item}</span>
               </div>
             ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <Section light={true} className="relative overflow-hidden w-full">
        <FadeIn direction="up">
          <ServicesSlider />
        </FadeIn>
      </Section>

      {/* Innovation Section */}
      <Section light={false}>
        <FadeIn direction="up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-brand-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative rounded-[2.5rem] overflow-hidden border-[12px] border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=80"
                  alt="Tech Strategy"
                  className="w-full h-auto scale-105 group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              {/* <div className="absolute -bottom-8 -right-8 p-10 bg-brand-primary text-white rounded-[2rem] shadow-2xl hidden md:block">
                <div className="text-4xl font-black mb-1">12+</div>
                <div className="font-bold uppercase tracking-wider text-xs opacity-80">Years Experience</div>
              </div> */}
            </div>
            <div>
              <SectionHeader
                centered={false}
                theme="dark"
                title="Innovating Technology For A Smarter Future"
                subtitle="Hanvrix is a technology-driven company focused on delivering innovative digital solutions for modern businesses. We help organizations improve efficiency and strengthen their digital presence."
              />
              <div className="grid grid-cols-2 gap-8 mb-12">
                {technologies.map((tech, idx) => (
                  <div key={idx} className="flex items-center space-x-4 bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-brand-primary/30 transition-colors">
                    <div className="text-brand-primary">
                      {tech.icon}
                    </div>
                    <span className="font-bold text-white tracking-tight">{tech.name}</span>
                  </div>
                ))}
              </div>
              <Link href="/about">
                <Button className="group"><Info className="w-5 h-5" /> Explore More About Us <ArrowRight className="w-5 h-5 transition-transform group-hover:-rotate-45" /></Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Tactical Advantage / Why Us */}
      <Section light={true}>
        <FadeIn direction="up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1">
               <SectionHeader
                  centered={false}
                  title="The Tactical Advantage"
                  subtitle="We prioritize architectural integrity and industry-specific precision to ensure your digital systems are secure, scalable, and conversion-ready."
               />
               <div className="space-y-8 mb-12">
                 {reasons.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-5 group">
                    <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary flex-shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-all">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-black text-bg-dark text-xl mb-1 tracking-tight">{reason.title}</h4>
                      <p className="text-gray-500 font-medium leading-relaxed">{reason.desc}</p>
                    </div>
                  </div>
                ))}
               </div>
               <Link href="/contact">
                 <Button variant="outline"><Calendar className="w-5 h-5" /> Schedule A Consultation</Button>
               </Link>
            </div>
            
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-6">
               <div className="space-y-6 pt-12">
                 <Card className="bg-brand-primary border text-black p-6">
                   <MonitorCheck className="w-12 h-12 mb-6 text-brand-primary" />
                   <div className="text-4xl font-black mb-2">100%</div>
                   <div className="font-bold text-sm uppercase tracking-widest opacity-80">Security</div>
                 </Card>
                 <Card className="bg-bg-dark border text-black p-6">
                   <Globe2 className="w-12 h-12 mb-6 text-brand-primary" />
                   <div className="text-4xl font-black mb-2">Global</div>
                   <div className="font-bold text-sm uppercase tracking-widest opacity-80">Connectivity</div>
                 </Card>
               </div>
               <div className="space-y-6">
                  <Card className="bg-slate-50 p-6 border-[#eee]">
                    <Layers className="w-12 h-12 mb-6 text-brand-primary" />
                    <div className="text-4xl font-black mb-2 text-bg-dark text-bg-dark">Enterprise</div>
                    <div className="font-bold text-sm uppercase tracking-widest text-gray-500">Solutions</div>
                  </Card>
                  <Card className="bg-brand-primary p-1 text-white overflow-hidden aspect-square h-auto">
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80" className="w-full h-full object-cover rounded-[20px] opacity-80" />
                  </Card>
               </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* Process Section */}
      <Section light={false} className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/circuit-board.png')" }}></div>
        <FadeIn direction="up">
          <SectionHeader
            theme="dark"
            title="Deployment Workflow"
            subtitle="A high-velocity methodology designed to take your vision from discovery to market dominance with zero friction."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="group relative text-center">
                <div className="w-24 h-24 bg-white/5 rounded-[2rem] flex items-center justify-center mx-auto mb-8 border border-white/10 relative transition-transform group-hover:scale-110 group-hover:bg-brand-primary group-hover:border-brand-primary duration-500">
                  <div className="text-brand-primary group-hover:text-white transition-colors">
                    {step.icon}
                  </div>
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-brand-primary text-white rounded-2xl flex items-center justify-center font-black text-sm border-4 border-bg-dark group-hover:bg-bg-dark group-hover:text-brand-primary transition-colors">
                    0{index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight leading-none">{step.title}</h3>
                <p className="text-gray-400 text-[15px] leading-relaxed font-medium">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(100%-20px)] w-[calc(100%-60px)] h-[2px] bg-gradient-to-r from-brand-primary/20 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

    </div>
  );
}
