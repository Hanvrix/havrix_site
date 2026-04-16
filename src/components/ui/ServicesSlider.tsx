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
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
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
          <div className="flex items-center space-x-3 text-brand-primary font-black uppercase tracking-[4px] text-[12px] mb-4">
            <span className="w-10 h-[2px] bg-brand-primary"></span>
             <span>Our Services</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter text-bg-dark uppercase">
             IT Solutions & Services
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl leading-relaxed font-medium">
             Precision-engineered services designed to eliminate technical debt and accelerate your digital dominance.
          </p>
        </div>
        
        {/* Navigation Buttons inline */}
        <div className="flex items-center space-x-4 shrink-0">
          <button
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
            className="w-14 h-14 rounded-2xl border border-slate-100 bg-white shadow-lg flex items-center justify-center text-bg-dark hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group"
            aria-label="Previous service"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
            className="w-14 h-14 rounded-2xl border border-slate-100 bg-white shadow-lg flex items-center justify-center text-bg-dark hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed group"
            aria-label="Next service"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Slider Viewport */}
      <div className="overflow-hidden -mx-4 px-4 -my-12 py-12" ref={emblaRef}>
        <div className="flex -ml-6 touch-pan-y">
          {services.map((service, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 pl-6 sm:flex-[0_0_50%] lg:flex-[0_0_33.33%]">
              <Card className="flex flex-col h-full bg-white group shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-500 !p-8 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="flex items-center space-x-4 mb-8 relative z-10">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-primary shadow-sm group-hover:bg-brand-primary group-hover:text-white group-hover:scale-110 transition-all duration-500 shrink-0">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-bg-dark tracking-tight leading-none uppercase">{service.title}</h3>
                </div>
                <p className="text-gray-500 text-[16px] leading-relaxed mb-4 flex-grow font-medium relative z-10">
                  {service.description}
                </p>
                <div className="mt-auto pt-6 border-t border-slate-200 flex justify-end relative z-10">
                  <Link href={service.href} className="text-bg-dark font-black inline-flex items-center text-[15px] hover:text-brand-primary transition-all group/link">
                    Explore Details
                    <div className="ml-3 w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover/link:bg-brand-primary group-hover/link:border-brand-primary group-hover/link:text-white transition-all">
                       <ArrowRight className="h-4 w-4 transition-transform -rotate-45 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </div>
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
