"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import ContactForm from "@/components/ContactForm";
import { Mail } from "lucide-react";

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
    <div className="pb-20 bg-gray-50 min-h-screen">
      <Section light={true} className="py-12 bg-transparent border-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-24">

            {/* Left Side: Info & Cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col space-y-8"
            >
              <div>
                <div className="inline-flex items-center px-4 py-1.5 bg-orange-100/50 rounded-full mb-8">
                  <span className="text-sm font-bold text-[#c85a17]">Contact Us</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-gray-900 mb-6 tracking-tight leading-[1.1]">
                  Get in Touch with Our Team
                </h1>

                <p className="text-lg text-gray-500 max-w-lg leading-relaxed font-medium">
                  Have questions about Hanvrix? We&apos;re here to help. Reach out and we&apos;ll get back to you as soon as possible.
                </p>
              </div>

              <div className="space-y-4 pt-4">
                {contactInfo.map((info, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i + 0.2 }}
                    className="bg-white p-7 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_4px_25px_rgb(0,0,0,0.06)] transition-shadow"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                    <p className="text-gray-500 font-medium text-sm mb-5">{info.description}</p>
                    <a href={`mailto:${info.email}`} className="inline-flex items-center text-[#c85a17] font-semibold text-[15px] hover:text-[#a64911] transition-colors">
                      <Mail className="w-4 h-4 mr-2" />
                      {info.email}
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="xl:pl-8"
            >
              <ContactForm />
            </motion.div>

          </div>
        </div>
      </Section>
    </div>
  );
}
