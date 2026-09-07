import Section, { SectionHeader } from "@/components/ui/Section";
import ContactForm from "@/components/ContactForm";
import Card from "@/components/ui/Card";
import { Mail, Phone, MapPin, ArrowRight, Navigation } from "lucide-react";
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
      title: "Direct Phone Call",
      description: "Speak directly with our software & sales team in Salem",
      value: "+91 8838213390",
      href: "tel:+918838213390",
      isPhone: true,
    },
    {
      title: "Sales & Inquiries",
      description: "Talk to our sales team about Hanvrix for your business",
      email: "hanvrix@gmail.com",
    },
    {
      title: "Support & Help",
      description: "Get technical support with your existing Hanvrix products",
      email: "hanvrix@gmail.com",
    },
    {
      title: "Partnerships",
      description: "Interested in business or agency partnership with Hanvrix?",
      email: "hanvrix@gmail.com",
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* 1. Breadcrumb Header */}
      <BreadcrumbHeader title="Contact Our Salem Experts" pageName="Contact" />

      {/* 2. Form & Contacts Grid */}
      <Section light={true} className="!py-8 md:!py-12">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12 items-start">

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
                          {info.isPhone ? <Phone className="w-5 h-5" /> : <Mail className="w-5 h-5" />}
                       </div>
                    </div>
                    <p className="text-text-secondary font-semibold text-[15px] mb-2 leading-relaxed">{info.description}</p>
                    <a 
                      href={info.href || `mailto:${info.email}`} 
                      className="inline-flex items-center text-brand-secondary font-black text-[15px] hover:text-brand-primary transition-colors group"
                    >
                      {info.value || info.email}
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:-rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </Card>
                ))}
              </div>
              
              <div className="p-6 bg-bg-dark rounded-[20px] text-white mt-8 border border-white/5 relative overflow-hidden group flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                 <div>
                   <div className="flex items-center space-x-4 mb-3 relative z-10">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                      <span className="text-xs font-bold tracking-widest text-gray-400">Instant Response</span>
                   </div>
                   <p className="text-xl font-bold tracking-tight relative z-10">Average response: Under 4 hours</p>
                 </div>
                 <a 
                   href="https://wa.me/918838213390"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white px-5 py-3 rounded-xl font-bold transition-all relative z-10 shadow-lg shrink-0"
                 >
                   Chat on WhatsApp
                 </a>
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

      {/* 3. Interactive Location & Google Map Section */}
      <Section light={false} className="bg-slate-900 text-white !py-12 md:!py-16 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <SectionHeader
            title="Visit Our Office in Salem"
            subtitle="Headquartered in Salem, Tamil Nadu, India. Delivering world-class software solutions globally."
            theme="dark"
          />

          <FadeIn direction="up" delay={0.2}>
            <div className="relative rounded-[24px] overflow-hidden border border-white/10 shadow-2xl bg-slate-800/50 backdrop-blur-md mt-6">
              {/* Overlay Info Box */}
              <div className="md:absolute top-6 left-6 z-10 max-w-sm bg-[#0B0F17]/95 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl text-white m-4 md:m-0">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/20 flex items-center justify-center text-brand-primary shrink-0">
                    <MapPin className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg leading-tight">Hanvrix Technologies</h4>
                    <p className="text-xs text-gray-400 font-medium">Salem, Tamil Nadu, India</p>
                  </div>
                </div>
                <p className="text-xs text-gray-300 mb-5 leading-relaxed font-normal">
                  Located in Salem, Tamil Nadu. Reach out to schedule an in-person meeting or software demonstration.
                </p>
                <a
                  href="https://maps.google.com/?q=Salem,+Tamil+Nadu,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-brand-primary hover:bg-brand-secondary text-bg-dark font-extrabold text-xs transition-all duration-300 shadow-md"
                >
                  <span>Get Directions on Google Maps</span>
                  <Navigation className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Google Map iframe */}
              <div className="w-full h-[400px] md:h-[500px]">
                <iframe
                  title="Hanvrix Salem Location Map"
                  src="https://maps.google.com/maps?q=Salem,%20Tamil%20Nadu,%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
}
