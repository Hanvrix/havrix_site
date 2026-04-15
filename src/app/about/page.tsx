import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import {
  Target, Eye, Shield, Users2, CheckCircle2
} from "lucide-react";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";

export default function AboutPage() {
  const aboutCards = [
    {
      title: "Our Mission",
      description: "To provide businesses with the technical precision required to lead their industries in a digital-first economy, creating sustainable success.",
      icon: <Target className="text-[#b45309]" />,
    },
    {
      title: "Our Vision",
      description: "To become the global benchmark for technical excellence, where business automation and human creativity converge for limitless scale.",
      icon: <Eye className="text-[#b45309]" />,
    },
    {
      title: "Core Values",
      description: "We bridge the gap between technical features and business value. Every project is an ROI-driven infrastructure that is built to last.",
      icon: <Shield className="text-[#b45309]" />,
    }
  ];

  return (
    <div className="pb-8 bg-white min-h-screen text-slate-600">
      <Section light={true} className="pt-4 lg:pt-8">
        
        {/* 1. About Hanvrix Content */}
        <FadeIn>
          <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h6 className="text-slate-500 font-bold tracking-wider text-[13px] uppercase mb-4">About Hanvrix</h6>
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
                Innovating Technology For A Smarter Future
              </h2>
              <div className="space-y-6 text-slate-600 text-[15px] font-medium leading-relaxed">
                <p>
                  Hanvrix is a collective of elite software architects and designers dedicated to engineering the next generation of business technology. We help organizations improve efficiency, strengthen their digital presence, and adapt to the rapidly evolving tech landscape.
                </p>
                <p>
                  Our goal is to simplify complex business challenges through smart technology, creative thinking, and reliable solutions that provide the foundations required to lead your industry in a digital-first economy.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-[10px] overflow-hidden bg-slate-50 border border-gray-200 shadow-sm relative">
                <Image 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                  alt="Innovative Tech Environment" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </FadeIn>

        {/* 2. Mission, Vision, Values Cards */}
        <FadeIn delay={0.2}>
          <div className="mb-20 pt-10 border-t border-gray-200">
            <div className="text-center mb-12">
              <h6 className="text-slate-500 font-bold tracking-wider text-[13px] uppercase mb-4">
                OUR COMPANY
              </h6>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                Vision, Mission & Values
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aboutCards.map((card, index) => (
                <Card key={index} className="flex flex-col h-full hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6 border border-gray-200">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-medium flex-grow text-[15px]">
                    {card.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* 3. Why Choose Us Content */}
        <FadeIn>
          <div className="pt-10 border-t border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              
              <div className="flex flex-col h-full">
                <div className="mb-10">
                  <h6 className="text-slate-500 font-bold tracking-wider text-[13px] uppercase mb-4">Why Choose Us</h6>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                    A Technology Partner You Can Trust
                  </h2>
                </div>

                <Card className="mt-auto bg-slate-900 text-white border-0 !p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-slate-900">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <span className="text-xl font-bold text-white tracking-tight">Hanvrix</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 leading-tight">
                    Smart Technology Solutions For Modern Businesses
                  </h3>
                  <p className="text-slate-300 leading-relaxed font-medium text-[15px]">
                    We combine innovation, expertise, and strategic thinking to deliver high-quality digital solutions tailored to business needs. Our focus is on performance, reliability, and long-term value for our clients.
                  </p>
                </Card>
              </div>

              <div className="flex flex-col h-full">
                <div className="w-full aspect-[16/9] rounded-[10px] overflow-hidden mb-12 border border-gray-200 shadow-sm">
                  <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" alt="Team meeting" className="w-full h-full object-cover" />
                </div>

                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center border border-gray-200">
                      <Target className="text-[#b45309]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Strategy</h4>
                      <p className="text-slate-600 leading-relaxed font-medium text-[15px]">
                        Our strategic approach focuses on understanding business needs and delivering innovative IT and technology solutions that drive efficiency and long-term success.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center border border-gray-200">
                      <Users2 className="text-[#b45309]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-2 tracking-tight">Audience</h4>
                      <p className="text-slate-600 leading-relaxed font-medium text-[15px]">
                        We focus on understanding our clients' business goals and target audience to deliver technology solutions that create meaningful impact and long-term value.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </FadeIn>

      </Section>
    </div>
  );
}
