"use client";

import React from "react";
import { 
  Cpu, Code2, Layers, Users, Globe, Smartphone, ShoppingCart, 
  Zap, Search, Target, Megaphone, BarChart3, Share2, Server, 
  Headphones, Palette, Wrench, Cloud 
} from "lucide-react";
import Link from "next/link";

const servicesGridData = [
  { title: "Website Development", icon: Globe, href: "/services" },
  { title: "E-Commerce Development", icon: ShoppingCart, href: "/services" },
  { title: "Mobile App Development", icon: Smartphone, href: "/services" },
  
  { title: "Custom Software Development", icon: Code2, href: "/services" },
  { title: "Search Engine Optimization (SEO)", icon: Search, href: "/services" },
  { title: "Lead Generation", icon: Target, href: "/services" },

  { title: "Digital Transformation", icon: Cpu, href: "/services" },
  { title: "Social Media Management", icon: Share2, href: "/services" },
  { title: "Graphic Design", icon: Palette, href: "/services" },

  { title: "Programmatic Advertising", icon: BarChart3, href: "/services" },
  { title: "ERP Solutions", icon: Layers, href: "/products/textile-erp" },
  { title: "Google Ads", icon: Megaphone, href: "/services" },

  { title: "CRM Solutions", icon: Users, href: "/services" },
  { title: "Business Process Automation", icon: Zap, href: "/services" },
  { title: "IT Backend Support", icon: Server, href: "/services" },

  { title: "BPO Support Services", icon: Headphones, href: "/services" },
  { title: "Website Maintenance & Support", icon: Wrench, href: "/services" },
  { title: "Cloud & Hosting Support", icon: Cloud, href: "/services" },
];

export default function ServicesSlider() {
  return (
    <div className="relative w-full pt-2 pb-1 px-4 sm:px-8">
      
      {/* Mobile/Tablet Section Header */}
      <div className="xl:hidden text-center max-w-2xl mx-auto mb-10 space-y-3">
        <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-wider">
          <span className="text-[#0F2D5C]">WHAT WE </span>
          <span className="text-primary-green">DO</span>
        </h2>
        <div className="w-16 h-1.5 bg-primary-green mx-auto rounded-full"></div>
      </div>

      {/* 18 Services Grid shifted right on desktop for left vertical title banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-10 max-w-[1240px] xl:ml-32 mx-auto relative z-10">
        {servicesGridData.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <Link
              key={idx}
              href={item.href}
              className="group flex items-center gap-4.5 transition-transform duration-300 hover:translate-x-1.5 select-none"
            >
              {/* Outside Navy Blue Box with Inside Brand Green Icon */}
              <div className="w-14 h-14 rounded-2xl bg-[#0F2D5C]/10 border border-[#0F2D5C]/30 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 group-hover:bg-[#0F2D5C] group-hover:border-[#0F2D5C] transition-all duration-300">
                <IconComp className="w-7 h-7 stroke-[1.8] text-primary-green group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Service Title */}
              <h3 className="text-base sm:text-lg font-extrabold text-[#1E293B] group-hover:text-primary-green transition-colors leading-snug">
                {item.title}
              </h3>
            </Link>
          );
        })}
      </div>

    </div>
  );
}
