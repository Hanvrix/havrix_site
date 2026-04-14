"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import {
  ArrowUpRight, Target, Eye, Shield, Users2, CheckCircle2
} from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function AboutPage() {
  const aboutCards = [
    {
      title: "Our Mission",
      description: "To provide businesses with the technical precision required to lead their industries in a digital-first economy, creating sustainable success.",
      icon: <Target className="h-7 w-7 text-orange-500" />,
      delay: 0.1,
    },
    {
      title: "Our Vision",
      description: "To become the global benchmark for technical excellence, where business automation and human creativity converge for limitless scale.",
      icon: <Eye className="h-7 w-7 text-orange-500" />,
      delay: 0.2,
    },
    {
      title: "Core Values",
      description: "We bridge the gap between technical features and business value. Every project is an ROI-driven infrastructure that is built to last.",
      icon: <Shield className="h-7 w-7 text-orange-500" />,
      delay: 0.3,
    }
  ];

  const reasons = [
    { title: "Architectural Integrity", desc: "Every line of code is written for scalability, performance, and bulletproof security." },
    { title: "Industry Precision", desc: "Deep expertise in modern SaaS and technical sectors allows us to understand your specific market." },
    { title: "End-to-End Ownership", desc: "We are your dedicated engineering partners from the initial discovery phase to post-launch support." },
    { title: "Conversion-First Design", desc: "Outstanding UX/UI engineered specifically to drive user action and tangible business results." },
  ];

  return (
    <div className="pt-24 pb-10 bg-white min-h-screen text-gray-600 overflow-hidden relative">
      <Section light={true} className="relative z-10 pt-10 lg:pt-20">

        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        {/* 1. About Hanvrix Content */}
        <div className="mb-24 lg:mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h6 className="text-orange-500 font-bold tracking-[0.2em] text-sm uppercase mb-4">About Hanvrix</h6>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.1] mb-8">
              Innovating Technology For A <span className="text-orange-500">Smarter Future</span>
            </h2>
            <div className="space-y-6 text-gray-600 text-lg md:text-xl font-medium leading-relaxed">
              <p>
                Hanvrix is a collective of elite software architects and designers dedicated to engineering the next generation of business technology. We help organizations improve efficiency, strengthen their digital presence, and adapt to the rapidly evolving tech landscape.
              </p>
              <p>
                Our goal is to simplify complex business challenges through smart technology, creative thinking, and reliable solutions that provide the foundations required to lead your industry in a digital-first economy.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative lg:ml-10"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-white border border-gray-100 p-10 flex flex-col items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <Users2 className="w-24 h-24 text-orange-500 mb-8" />
              <h3 className="text-3xl font-black text-gray-900 mb-2 uppercase tracking-widest">Elite Ops</h3>
              <p className="text-gray-500 text-center font-bold tracking-widest text-sm uppercase">Ready for Deployment</p>
            </div>
          </motion.div>
        </div>

        {/* 2. Mission, Vision, Values Cards */}
        <div className="mb-24 lg:mb-32 pt-10 border-t border-gray-100">
          <div className="text-center mb-16 relative">
            <motion.h6
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-orange-500 font-bold tracking-[0.2em] text-sm uppercase mb-4"
            >
              OUR COMPANY
            </motion.h6>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight"
            >
              Vision, Mission & Values
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {aboutCards.map((card, index) => (
              <Card
                key={index}
                delay={card.delay}
                className="flex flex-col h-full group hover:-translate-y-2 transition-transform duration-500 hover:shadow-[0_8px_40px_rgb(0,0,0,0.12)] border border-gray-100 hover:border-orange-500/30 bg-white"
              >
                <div className="w-16 h-16 bg-orange-50/50 rounded-2xl flex items-center justify-center mb-8 border border-orange-500/10 group-hover:bg-orange-50 transition-all duration-500">
                  {card.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-orange-500 transition-colors duration-300">
                  {card.title}
                </h3>

                <p className="text-gray-600 leading-relaxed font-medium flex-grow text-[15px]">
                  {card.description}
                </p>

                {/* <div className="mt-auto">
                  <Link
                    href="/contact"
                    className="inline-flex items-center space-x-2 text-sm font-bold text-white bg-white/5 border border-white/10 px-5 py-2.5 rounded-full group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-300 shadow-sm"
                  >
                    <span className="tracking-wider uppercase text-xs">Learn More</span>
                    <ArrowUpRight className="h-4 w-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div> */}
              </Card>
            ))}
          </div>
        </div>

        {/* 3. Why Choose Us Content */}
        <div className="pt-24 border-t border-gray-100 pb-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start relative z-10">
            {/* Left Column */}
            <div className="flex flex-col h-full">
              <div className="mb-14 lg:mb-20">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-[2px] bg-orange-500/50"></div>
                  <span className="text-orange-500 font-bold tracking-[0.1em] text-sm uppercase">Why Choose Us</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.1]">
                  Technology Partner <br /> You Can Trust
                </h2>
              </div>

              {/* Hanvrix Brand Box */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 lg:p-12 border border-gray-100 relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] mt-auto">
                <div className="absolute -top-32 -right-32 w-80 h-80 border-[1px] border-gray-100 rounded-full z-0 opacity-50"></div>
                <div className="absolute top-10 -right-10 w-40 h-40 border-[1px] border-gray-100 rounded-full z-0 opacity-50"></div>

                <div className="flex items-center space-x-3 mb-8 relative z-10">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-md text-white">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <span className="text-2xl font-black text-gray-900 tracking-tight">Hanvrix</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight relative z-10">
                  Smart Technology Solutions For Modern Businesses
                </h3>
                <h4 className="text-xl font-bold text-orange-500 mb-6 relative z-10">
                  Driven By Innovation.
                </h4>
                <p className="text-gray-600 leading-relaxed font-medium relative z-10 text-[15px]">
                  We combine innovation, expertise, and strategic thinking to deliver high-quality digital solutions tailored to business needs. Our focus is on performance, reliability, and long-term value for our clients.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col h-full">
              {/* Image container */}
              <div className="w-full h-[350px] lg:h-[400px] rounded-sm overflow-hidden mb-12 shadow-2xl mt-4 lg:mt-0">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Team meeting" className="w-full h-full object-cover" />
              </div>

              {/* Strategy & Audience */}
              <div className="space-y-10 lg:pl-8 mt-auto">
                {/* Strategy */}
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full border border-gray-200 group-hover:border-orange-500/50 transition-colors duration-500 flex items-center justify-center overflow-hidden">
                    <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-orange-500/10 transition-colors duration-500">
                      <Target className="w-6 h-6 text-orange-500" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight group-hover:text-orange-500 transition-colors duration-300">Strategy</h4>
                    <p className="text-gray-600 leading-relaxed font-medium text-[15px]">
                      Our strategic approach focuses on understanding business needs and delivering innovative IT and technology solutions that drive efficiency and long-term success.
                    </p>
                  </div>
                </div>

                {/* Audience */}
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full border border-gray-200 group-hover:border-orange-500/50 transition-colors duration-500 flex items-center justify-center overflow-hidden">
                    <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-orange-500/10 transition-colors duration-500">
                      <Users2 className="w-6 h-6 text-orange-500" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight group-hover:text-orange-500 transition-colors duration-300">Audience</h4>
                    <p className="text-gray-600 leading-relaxed font-medium text-[15px]">
                      We focus on understanding our clients' business goals and target audience to deliver technology solutions that create meaningful impact and long-term value.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Simple CTA below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <Link href="/contact">
            <Button variant="cta" className="shadow-lg hover:shadow-xl">Get In Touch Today</Button>
          </Link>
        </motion.div>
      </Section>
    </div>
  );
}
