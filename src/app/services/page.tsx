import Section, { SectionHeader } from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import {
  MessageSquare,
  Phone,
  CheckCircle2,
  Activity,
  ShieldAlert,
  Rocket,
  Target,
  Share2,
  Palette,
  BarChart3,
  Megaphone,
  Users,
  Zap,
  Server,
  Wrench,
  Cloud
} from "lucide-react";
import Link from "next/link";
import ServicesSlider from "@/components/ui/ServicesSlider";
import { FadeIn } from "@/components/ui/FadeIn";
import BreadcrumbHeader from "@/components/ui/BreadcrumbHeader";
import { 
  WebVectorImage, 
  MobileVectorImage, 
  SoftwareVectorImage, 
  SeoVectorImage, 
  ErpVectorImage, 
  SupportVectorImage 
} from "@/components/ui/ServiceVectors";

export default function ServicesPage() {
  const services = [
    {
      title: "Website / Interactive",
      description: "Your website is the first impression for your company and where customers make the decision to do business with you. We design and build responsive, high-converting digital web experiences.",
      vector: WebVectorImage,
    },
    {
      title: "Mobile App Development",
      description: "We build intuitive, high-performance mobile applications for Android and iOS that deliver seamless user experiences, powerful features, and native performance.",
      vector: MobileVectorImage,
    },
    {
      title: "Customized Softwares",
      description: "Tailored enterprise software built for your exact business workflows. We streamline operations, eliminate technical debt, and build scalable system architectures.",
      vector: SoftwareVectorImage,
    },
    {
      title: "Digital Transformation & SEO",
      description: "Strategic evolution of your business infrastructure with search engine dominance, lead generation, cloud integration, and process automation.",
      vector: SeoVectorImage,
    },
    {
      title: "CMS, E-Commerce & ERP",
      description: "Unified e-commerce platforms and automated enterprise resource planning systems designed to scale inventory, orders, and sales channels effortlessly.",
      vector: ErpVectorImage,
    },
    {
      title: "BPO & 24/7 Support Services",
      description: "Human-centric 24/7 customer support infrastructure (Chat, Mail, Telecalling) and technical maintenance to ensure non-stop operational reliability.",
      vector: SupportVectorImage,
    },
  ];

  const remainingServices = [
    {
      title: "Lead Generation",
      description: "High-intent B2B & B2C lead acquisition strategies that scale your sales pipeline.",
      icon: Target,
    },
    {
      title: "Social Media Management",
      description: "Comprehensive brand presence, content curation, and community growth across all platforms.",
      icon: Share2,
    },
    {
      title: "Graphic Design & Branding",
      description: "High-impact visual identity, UI assets, and corporate brand design systems.",
      icon: Palette,
    },
    {
      title: "Programmatic Advertising",
      description: "Data-driven automated ad placements for maximum ROI and precision audience targeting.",
      icon: BarChart3,
    },
    {
      title: "Google Ads & PPC Campaigns",
      description: "Targeted pay-per-click campaigns engineered for high conversion rates and measurable ROI.",
      icon: Megaphone,
    },
    {
      title: "CRM Solutions",
      description: "Custom customer relationship management systems for seamless client tracking and sales automation.",
      icon: Users,
    },
    {
      title: "Business Process Automation",
      description: "Automated business workflows that eliminate repetitive tasks and increase operational speed.",
      icon: Zap,
    },
    {
      title: "IT Backend Support",
      description: "Robust server architecture, database management, and backend infrastructure reliability.",
      icon: Server,
    },
    {
      title: "Website Maintenance & Support",
      description: "Continuous website updates, security patches, backups, and speed performance optimizations.",
      icon: Wrench,
    },
    {
      title: "Cloud & Hosting Support",
      description: "Scalable cloud infrastructure management, seamless migration, and 24/7 uptime monitoring.",
      icon: Cloud,
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* 1. Breadcrumb Header */}
      <BreadcrumbHeader title="Our Solutions & Capabilities" pageName="Services" />

      {/* 2. Vector Illustration Capability Cards */}
      <Section light={true} className="py-8 md:py-12">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#DCFCE7] text-primary-green-dark font-bold text-xs uppercase tracking-wider">
            FEATURED SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F2D5C] tracking-tight">
            Comprehensive <span className="text-primary-green font-handwriting text-4xl sm:text-5xl lg:text-6xl font-normal inline-block">Solutions</span>
          </h2>
          <p className="text-slate-600 font-medium text-base sm:text-lg">
            Direct access to our core development teams with immediate chat and call support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-[1360px] mx-auto">
          {services.map((s, i) => {
            const VectorComp = s.vector;
            return (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="flex flex-col h-full bg-white rounded-3xl border border-slate-200/90 p-5 sm:p-6 shadow-sm hover:shadow-xl hover:border-primary-green/40 transition-all duration-300 text-center items-center justify-between group">
                  
                  <div className="w-full flex flex-col items-center">
                    {/* Top Vector Illustration */}
                    <div className="w-full h-32 sm:h-36 relative mb-4 flex items-center justify-center overflow-hidden">
                      <VectorComp className="w-auto h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-lg sm:text-xl font-black text-[#0F2D5C] tracking-tight mb-2">
                      {s.title}
                    </h3>

                    <p className="text-slate-600 font-medium text-xs sm:text-sm leading-relaxed mb-4 max-w-xs">
                      {s.description}
                    </p>
                  </div>

                {/* Bottom Action Pill Buttons (Chat With Us & Call Us) */}
                <div className="pt-3.5 border-t border-slate-100 flex items-center justify-center gap-2.5 w-full">
                  <a
                    href="https://wa.me/919842212345"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-primary-green hover:bg-primary-green-dark text-white font-extrabold text-xs tracking-tight shadow-md flex items-center justify-center gap-1.5 transition-all duration-300 hover:scale-105 shrink-0"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-white" />
                    <span>Chat With Us</span>
                  </a>
                  
                  <a
                    href="tel:+919842212345"
                    className="px-4 py-2 rounded-full bg-[#0F2D5C] hover:bg-[#0A1F3F] text-white font-extrabold text-xs tracking-tight shadow-md flex items-center justify-center gap-1.5 transition-all duration-300 hover:scale-105 shrink-0"
                  >
                    <Phone className="w-3.5 h-3.5 text-white" />
                    <span>Call Us</span>
                  </a>
                </div>

              </div>
            </FadeIn>
          );
        })}
        </div>
      </Section>

      {/* 3. Additional Specialized Services List */}
      <Section light={true} className="py-6 md:py-10">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#DCFCE7] text-primary-green-dark font-bold text-xs uppercase tracking-wider">
            MORE CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F2D5C] tracking-tight">
            Specialized Tech &amp; <span className="text-primary-green font-handwriting text-4xl sm:text-5xl font-normal inline-block">Growth Services</span>
          </h2>
          <p className="text-slate-600 font-medium text-base">
            End-to-end digital expertise tailored to empower your business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[1360px] mx-auto">
          {remainingServices.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <FadeIn key={idx} delay={idx * 0.04}>
                <div className="group p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-primary-green/40 transition-all duration-300 flex items-center gap-5 text-left">
                  {/* Left SVG Icon Box */}
                  <div className="w-14 h-14 rounded-2xl bg-[#0F2D5C]/10 border border-[#0F2D5C]/30 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 group-hover:bg-[#0F2D5C] group-hover:border-[#0F2D5C] transition-all duration-300">
                    <IconComp className="w-7 h-7 stroke-[1.8] text-primary-green group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Right Content */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-extrabold text-[#0F2D5C] mb-1 tracking-tight group-hover:text-primary-green transition-colors truncate">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm font-medium text-slate-600 line-clamp-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Section>

      {/* 4. Final CTA */}
      <section className="bg-brand-primary py-12 md:py-16 text-center text-white">
        <FadeIn>
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight leading-tight">
              Ready to Grow Your <span className="underline decoration-white/30">Business Online?</span>
            </h2>
            <p className="text-lg md:text-xl font-medium mb-6 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Whether you need a custom website, mobile app, or enterprise ERP software, our expert team is ready to help you build the right solution.
            </p>
            <div className="flex justify-center">
              <Link href="/contact">
                <Button variant="white" showArrow={true} className="px-10 h-[50px]">
                  Get a Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}

