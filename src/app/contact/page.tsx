import Section from "@/components/ui/Section";
import ContactForm from "@/components/ContactForm";
import Card from "@/components/ui/Card";
import { Mail } from "lucide-react";
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
    <div className="pb-12 bg-white min-h-screen">
      <Section light={true} className="py-8 lg:py-12">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-24">

          {/* Left Side: Info & Cards */}
          <FadeIn direction="left">
            <div className="flex flex-col space-y-10">
              <div>
                <h6 className="text-slate-500 font-bold tracking-wider text-[13px] uppercase mb-4">Contact Us</h6>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                  Get in Touch with Our Team
                </h1>

                <p className="text-[17px] text-slate-600 max-w-lg leading-relaxed font-medium">
                  Have questions about Hanvrix? We&apos;re here to help. Reach out and we&apos;ll get back to you as soon as possible.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, i) => (
                  <Card key={i} className="p-5 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{info.title}</h3>
                    <p className="text-slate-600 font-medium text-[14px] mb-4">{info.description}</p>
                    <a href={`mailto:${info.email}`} className="inline-flex items-center text-slate-900 font-semibold text-[14px] hover:text-[#b45309] transition-colors">
                      <Mail className="w-4 h-4 mr-2" />
                      {info.email}
                    </a>
                  </Card>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right Side: Contact Form */}
          <FadeIn direction="right" delay={0.2}>
            <div className="xl:pl-8">
              <ContactForm />
            </div>
          </FadeIn>

        </div>
      </Section>
    </div>
  );
}
