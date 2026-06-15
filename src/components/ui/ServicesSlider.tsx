"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Zap, Code2, Globe2, Settings, Server, MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Digital Transformation",
    description: "We help businesses adopt modern technologies and digital strategies to optimize processes, increase productivity, and stay competitive.",
    icon: Zap,
    href: "/services/digital-transformation",
  },
  {
    title: "Web Development",
    description: "Web development is the process of creating websites and web applications for the internet or intranet.",
    icon: Code2,
    href: "/services/web-app-development",
  },
  {
    title: "Software Development",
    description: "We build scalable web and mobile applications that improve business operations, enhance user experience, and support digital growth.",
    icon: Globe2,
    href: "/services/mobile-app-development",
  },
  {
    title: "Custom Software",
    description: "We develop tailored software solutions designed specifically to meet unique business requirements and streamline internal processes.",
    icon: Settings,
    href: "/services/custom-development",
  },
  {
    title: "CMS, E-Commerce & ERP",
    description: "We provide CMS, e-commerce, and ERP solutions that help businesses manage content, sales, and operations efficiently.",
    icon: Server,
    href: "/services/cms-ecommerce-erp",
  },
  {
    title: "BPO Support Services",
    description: "Our BPO support services deliver reliable customer assistance through chat, email, and voice channels to improve engagement and satisfaction.",
    icon: MessageSquare,
    href: "/services/support",
  },
];

export default function ServicesSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
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
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div className="text-left w-full md:w-auto mb-8 md:mb-0">
          <div className="flex items-center space-x-3 text-brand-primary font-black uppercase tracking-[3px] text-[12px] mb-3">
            <span className="w-8 h-[2px] bg-brand-primary"></span>
            <span>Our Solutions</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter text-brand-secondary">
            Transforming Ideas Into Digital Success
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed font-medium">
            Precision-engineered services designed to eliminate technical debt and accelerate your digital dominance.
          </p>
        </div>
        
        {/* Navigation Buttons */}
        <div className="flex items-center space-x-4 shrink-0">
          <button
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
            className="w-10 h-10 rounded-full border border-[#c9d1d1] bg-white flex items-center justify-center text-brand-secondary hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group cursor-pointer"
            aria-label="Previous service"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
            className="w-10 h-10 rounded-full border border-[#c9d1d1] bg-white flex items-center justify-center text-brand-secondary hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group cursor-pointer"
            aria-label="Next service"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Slider Viewport */}
      <div className="overflow-hidden -mx-4 px-4 -my-12 py-12" ref={emblaRef}>
        <div className="flex -ml-6 touch-pan-y">
          {services.map((service, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%]">
              <div className="flex flex-col h-full bg-white group border-y-0 border-r-0 border-l-4 border-brand-primary hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 p-6 rounded-[20px] relative">
                
                {/* Header Row: Number + Icon + Title */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center justify-center w-6 h-6 bg-[#f4f7f7] text-brand-primary rounded-xl transition-all duration-500 shadow-sm shrink-0 border border-black/5">
                    <service.icon className="w-4 h-4" />
                  </div>

                  <h3 className="text-[22px] font-bold text-brand-primary tracking-tight leading-tight">
                    {service.title}
                  </h3>
                 
                </div>

                <p className="text-text-secondary text-[16px] leading-relaxed mb-4 flex-grow font-medium">
                  {service.description}
                </p>

                {/* Footer Row: Action */}
                <div className="mt-auto pt-2 border-t border-[#c9d1d1]/40 flex items-center justify-between">
                  <span className="text-[13px] font-bold text-brand-secondary group-hover:text-brand-primary transition-colors duration-500">
                    Learn More
                  </span>
                  <Link 
                    href={service.href} 
                    className="flex items-center justify-center w-8 h-8 rounded-full border border-[#c9d1d1]/80 text-brand-secondary group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-white transition-all duration-500 shadow-sm"
                  >
                    <ArrowRight className="w-4 h-4 -rotate-45 transition-transform duration-500 group-hover:rotate-0" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

