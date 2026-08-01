"use client";

import React from "react";
import { 
  Cpu, Code2, Layers, Users, Globe, Smartphone, ShoppingCart, 
  Zap, Search, Target, Megaphone, BarChart3, Share2, Server, 
  Headphones, Palette, Wrench, Cloud 
} from "lucide-react";
import Link from "next/link";

const servicesGridData = [
  { title: "Website Development", icon: Globe, href: "/services/web-app-development" },
  { title: "E-Commerce Development", icon: ShoppingCart, href: "/services/cms-ecommerce-erp" },
  { title: "Mobile App Development", icon: Smartphone, href: "/services/mobile-app-development" },
  
  { title: "Custom Software Development", icon: Code2, href: "/services/custom-development" },
  { title: "Search Engine Optimization (SEO)", icon: Search, href: "/services/digital-transformation" },
  { title: "Lead Generation", icon: Target, href: "/services/digital-transformation" },

  { title: "Digital Transformation", icon: Cpu, href: "/services/digital-transformation" },
  { title: "Social Media Management", icon: Share2, href: "/services/digital-transformation" },
  { title: "Graphic Design", icon: Palette, href: "/services/custom-development" },

  { title: "Programmatic Advertising", icon: BarChart3, href: "/services/digital-transformation" },
  { title: "ERP Solutions", icon: Layers, href: "/products/textile-erp" },
  { title: "Google Ads", icon: Megaphone, href: "/services/digital-transformation" },

  { title: "CRM Solutions", icon: Users, href: "/services/custom-development" },
  { title: "Business Process Automation", icon: Zap, href: "/services/custom-development" },
  { title: "IT Backend Support", icon: Server, href: "/services/support" },

  { title: "BPO Support Services", icon: Headphones, href: "/services/support" },
  { title: "Website Maintenance & Support", icon: Wrench, href: "/services/support" },
  { title: "Cloud & Hosting Support", icon: Cloud, href: "/services/support" },
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
              {/* Amber Outline Icon Box Matching Reference Image */}
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/40 text-amber-600 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                <IconComp className="w-7 h-7 stroke-[1.8]" />
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
