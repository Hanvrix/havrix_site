import Section, { SectionHeader } from "@/components/ui/Section";
import ContactForm from "@/components/ContactForm";
import Card from "@/components/ui/Card";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Metadata } from "next";
import BreadcrumbHeader from "@/components/ui/BreadcrumbHeader";

export const metadata: Metadata = {
  title: "Contact Hanvrix | Best Software Company in Salem for IT Support",
  description: "Get in touch with Hanvrix, the top software company in Salem. Contact us for Salem IT services, Textile software development, and SaaS solutions.",
};

export default function ContactPage() {
  const contactInfo = [
    {
      title: "Sales",
      description: "Talk to our sales team about Hanvrix for your business",
      email: "hanvrix@gmail.com",
    },
    {
      title: "Support",
      description: "Get help with your existing Hanvrix account",
      email: "hanvrix@gmail.com",
    },
    {
      title: "Partnerships",
      description: "Interested in partnering with Hanvrix?",
      email: "hanvrix@gmail.com",
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* 1. Breadcrumb Header */}
      <BreadcrumbHeader title="Contact Our Salem Experts" pageName="Contact" />

      {/* 2. Form & Contacts Grid */}
      <Section light={true}>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 xl:gap-32 items-start">

          {/* Left Side: Info & Cards */}
          <FadeIn direction="left">
            <div className="flex flex-col text-left">
              <span className="inline-flex items-center gap-2 text-brand-primary font-bold  tracking-[2px] text-xs mb-3">
                Get In Touch
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-brand-secondary tracking-tighter mb-6 leading-tight ">
                Connect With Our Team
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed font-medium mb-6">
                We bridge the gap between technical features and business value. Every project is an ROI-driven infrastructure that is built to last.
              </p>

              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, i) => (
                  <Card key={i} className="group !px-6 py-4 border-y-0 border-r-0 border-l-4 border-brand-primary bg-white hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-500 relative text-left">
                    <div className="flex items-center justify-between mb-2">
                       <h3 className="text-xl font-black text-brand-secondary tracking-tight leading-none ">{info.title}</h3>
                       <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                          <Mail className="w-5 h-5" />
                       </div>
                    </div>
                    <p className="text-text-secondary font-semibold text-[15px] mb-2 leading-relaxed">{info.description}</p>
                    <a 
                      href={`mailto:${info.email}`} 
                      className="inline-flex items-center text-brand-secondary font-black text-[15px] hover:text-brand-primary transition-colors group"
                    >
                      {info.email}
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:-rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </Card>
                ))}
              </div>
              
              <div className="p-6 bg-bg-dark rounded-[20px] text-white mt-8 border border-white/5 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                 <div className="flex items-center space-x-4 mb-3 relative z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-xs font-bold tracking-widest text-gray-400 ">Response Time</span>
                 </div>
                 <p className="text-xl font-bold tracking-tight relative z-10">Average response: 4 hours</p>
              </div>
            </div>
          </FadeIn>

          {/* Right Side: Contact Form */}
          <FadeIn direction="right" delay={0.2}>
            <div className="relative">
               <ContactForm />
            </div>
          </FadeIn>

        </div>
      </Section>
    </div>
  );
}
