import Section, { SectionHeader } from "@/components/ui/Section";
import ContactForm from "@/components/ContactForm";
import Card from "@/components/ui/Card";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export default function ContactPage() {
  const contactInfo = [
    {
      title: "Sales",
      description: "Talk to our sales team about Hanvrix for your business",
      email: "marketing@hanvrix.solutions",
    },
    {
      title: "Support",
      description: "Get help with your existing Hanvrix account",
      email: "info@hanvrix.com",
    },
    {
      title: "Partnerships",
      description: "Interested in partnering with Hanvrix?",
      email: "partners@hanvrix.com",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Header Section */}
      <section className="bg-bg-dark pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/10 blur-[150px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn direction="up">
             <div className="max-w-3xl">
                <div className="flex items-center space-x-3 text-brand-primary font-black uppercase tracking-[4px] text-[13px] mb-6">
                  <span className="w-10 h-[2px] bg-brand-primary"></span>
                  <span>Get In Touch</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight mb-8">
                  Let&apos;s Build Something <br />
                  <span className="text-brand-primary">Exceptional Together</span>
                </h1>
                <p className="text-xl text-gray-400 font-medium leading-relaxed">
                   Have questions about Hanvrix? We&apos;re here to help. Reach out and we&apos;ll get back to you within 24 hours.
                </p>
             </div>
          </FadeIn>
        </div>
      </section>

      <Section light={true}>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 xl:gap-32">

          {/* Left Side: Info & Cards */}
          <FadeIn direction="left">
            <div className="flex flex-col">
              <div className="-mb-4">
                <SectionHeader
                  centered={false}
                  title="Connect With Our Global Team"
                  subtitle="We bridge the gap between technical features and business value. Every project is an ROI-driven infrastructure that is built to last."
                />
              </div>

              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, i) => (
                  <Card key={i} className="group !p-4 !pl-6 border bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-500">
                    <div className="flex items-center justify-between mb-2">
                       <h3 className="text-2xl font-black text-bg-dark tracking-tight leading-none">{info.title}</h3>
                       <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                          <Mail className="w-5 h-5" />
                       </div>
                    </div>
                    <p className="text-gray-500 font-medium text-[16px] mb-2 leading-relaxed">{info.description}</p>
                    <a 
                      href={`mailto:${info.email}`} 
                      className="inline-flex items-center text-bg-dark font-black text-[15px] hover:text-brand-primary transition-colors group"
                    >
                      {info.email}
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:-rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </Card>
                ))}
              </div>
              
              <div className="p-4 pl-6 bg-bg-dark rounded-[1rem] text-white mt-6">
                 <div className="flex items-center space-x-4 mb-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs font-bold tracking-widest text-gray-400">Response Time</span>
                 </div>
                 <p className="text-xl font-bold tracking-tight">Average response: 4 hours</p>
              </div>
            </div>
          </FadeIn>

          {/* Right Side: Contact Form */}
          <FadeIn direction="right" delay={0.2}>
            <div className="bg-white rounded-[1rem] p-2 md:p-4 shadow-[0_30px_100px_rgba(0,11,29,0.05)] border border-[#eee]">
               <div className="mb-6 text-center">
                  <h2 className="text-2xl font-black text-bg-dark mb-4 mt-4 uppercase tracking-tighter">Send Us A Message</h2>
                  <div className="h-1 w-12 bg-brand-primary mx-auto rounded-full"></div>
               </div>
               <ContactForm />
            </div>
          </FadeIn>

        </div>
      </Section>
    </div>
  );
}
