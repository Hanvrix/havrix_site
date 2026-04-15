"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Zap, Code2, Globe2, Settings, Server, MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";
import Card from "@/components/ui/Card";

const services = [
  {
    title: "Digital Transformation",
    description: "We help businesses adopt modern technologies and digital strategies to optimize processes, increase productivity, and stay competitive.",
    icon: <Zap className="text-[#b45309]" />,
    href: "/services/digital-transformation",
  },
  {
    title: "Web Development",
    description: "Web development is the process of creating websites and web applications for the internet or intranet.",
    icon: <Code2 className="text-[#b45309]" />,
    href: "/services/web-app-development",
  },
  {
    title: "Software Development",
    description: "We build scalable web and mobile applications that improve business operations, enhance user experience, and support digital growth.",
    icon: <Globe2 className="text-[#b45309]" />,
    href: "/services/mobile-app-development",
  },
  {
    title: "Custom Software",
    description: "We develop tailored software solutions designed specifically to meet unique business requirements and streamline internal processes.",
    icon: <Settings className="text-[#b45309]" />,
    href: "/services/custom-development",
  },
  {
    title: "CMS, E-Commerce & ERP",
    description: "We provide CMS, e-commerce, and ERP solutions that help businesses manage content, sales, and operations efficiently.",
    icon: <Server className="text-[#b45309]" />,
    href: "/services/cms-ecommerce-erp",
  },
  {
    title: "BPO Support Services",
    description: "Our BPO support services deliver reliable customer assistance through chat, email, and voice channels to improve engagement and satisfaction.",
    icon: <MessageSquare className="text-[#b45309]" />,
    href: "/services/support",
  },
];

export default function ServicesSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 2500, stopOnInteraction: false })]
  );
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      {/* Title & Navigation Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div className="text-left w-full md:w-auto mb-6 md:mb-0">
          <h2 className="text-3xl font-bold mb-3 tracking-tight text-slate-900">
            Our Services
          </h2>
          <p className="text-[15px] text-slate-600 max-w-xl leading-relaxed">
            Precision-engineered services designed to eliminate technical debt and accelerate your digital dominance.
          </p>
        </div>
        
        {/* Navigation Buttons inline */}
        <div className="flex items-center space-x-3 shrink-0">
          <button
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
            className="w-10 h-10 rounded-[10px] border border-gray-200 bg-white shadow-sm flex items-center justify-center text-slate-600 hover:text-[#b45309] hover:border-[#b45309] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous service"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
            className="w-10 h-10 rounded-[10px] border border-gray-200 bg-white shadow-sm flex items-center justify-center text-slate-600 hover:text-[#b45309] hover:border-[#b45309] transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next service"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Slider Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4 touch-pan-y">
          {services.map((service, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_25%]">
              <Card className="flex flex-col h-full bg-white hover:shadow-lg transition-shadow duration-300 !p-5">
                <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-4 border border-gray-200 shrink-0">
                  {service.icon}
                </div>
                <h3 className="text-[16px] font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-500 text-[13px] leading-relaxed mb-4 flex-grow">
                  {service.description}
                </p>
                <div className="mt-auto pt-2 border-t border-gray-100 flex justify-end">
                  <Link href={service.href} className="text-slate-900 font-semibold inline-flex items-center text-[13px] hover:text-[#b45309] transition-colors group">
                    Learn More
                    <ArrowRight className="h-3 w-3 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
