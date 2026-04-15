"use client";

import Link from "next/link";
import { useState, useEffect, ReactNode } from "react";
import { usePathname } from "next/navigation";
import {
  Menu, X, ChevronDown,
  Shirt, Zap, Hammer, Car, HardHat, Building2, Landmark, Store, Wheat,
  Box, Database, Utensils, Ruler, Home, ShoppingCart, Globe2, Plane, LineChart, Leaf, ShoppingBag,
  Code2, Sparkles, Monitor, Smartphone, Headset
} from "lucide-react";
import Image from "next/image";
import Button from "./ui/Button";

interface MenuItem {
  name: string;
  icon: ReactNode;
  href?: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const menuData: Record<string, MenuItem[]> = {
    Industries: [
      { name: "Textiles", icon: <Shirt className="w-4 h-4 text-[#b45309]" /> },
      { name: "Electrical", icon: <Zap className="w-4 h-4 text-[#b45309]" /> },
      { name: "Steel & Metals", icon: <Hammer className="w-4 h-4 text-[#b45309]" /> },
      { name: "Automobiles", icon: <Car className="w-4 h-4 text-[#b45309]" /> },
      { name: "Constructions", icon: <HardHat className="w-4 h-4 text-[#b45309]" /> },
      { name: "Real Estate", icon: <Building2 className="w-4 h-4 text-[#b45309]" /> },
      { name: "Finance", icon: <Landmark className="w-4 h-4 text-[#b45309]" /> },
      { name: "Retail Companies", icon: <Store className="w-4 h-4 text-[#b45309]" /> },
      { name: "Agriculture", icon: <Wheat className="w-4 h-4 text-[#b45309]" /> },
    ],
    Products: [
      { name: "Textile ERP", icon: <Box className="w-4 h-4 text-[#b45309]" /> },
      { name: "Steel ERP", icon: <Database className="w-4 h-4 text-[#b45309]" /> },
      { name: "Food & Beverage ERP", icon: <Utensils className="w-4 h-4 text-[#b45309]" /> },
      { name: "Construction ERP", icon: <Ruler className="w-4 h-4 text-[#b45309]" /> },
      { name: "Real Estate ERP", icon: <Home className="w-4 h-4 text-[#b45309]" /> },
      { name: "E-commerce", icon: <ShoppingCart className="w-4 h-4 text-[#b45309]" /> },
      { name: "Import / Export", icon: <Globe2 className="w-4 h-4 text-[#b45309]" /> },
      { name: "Travel", icon: <Plane className="w-4 h-4 text-[#b45309]" /> },
      { name: "Finance", icon: <LineChart className="w-4 h-4 text-[#b45309]" /> },
      { name: "Agriculture", icon: <Leaf className="w-4 h-4 text-[#b45309]" /> },
      { name: "Retail", icon: <ShoppingBag className="w-4 h-4 text-[#b45309]" /> },
    ],
    Services: [
      { name: "Digital Transformation", icon: <Sparkles className="w-4 h-4 text-[#b45309]" />, href: "/services/digital-transformation" },
      { name: "Web & App Development", icon: <Monitor className="w-4 h-4 text-[#b45309]" />, href: "/services/web-app-development" },
      { name: "Mobile App Development", icon: <Smartphone className="w-4 h-4 text-[#b45309]" />, href: "/services/mobile-app-development" },
      { name: "Custom Development", icon: <Code2 className="w-4 h-4 text-[#b45309]" />, href: "/services/custom-development" },
      { name: "CMS, E-Commerce & ERP", icon: <Code2 className="w-4 h-4 text-[#b45309]" />, href: "/services/cms-ecommerce-erp" },
      { name: "BPO Support", icon: <Headset className="w-4 h-4 text-[#b45309]" />, href: "/services/support" }
    ],
  };

  const mainLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <Image
                src="/logo.png"
                alt="Hanvrix Logo"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Hanvrix
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {mainLinks.slice(0, 2).map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-medium text-[14px] transition-colors ${
                    isActive ? "text-[#b45309]" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {Object.entries(menuData).map(([title, items], idx) => {
              const isDropdownActive = items.some(item => {
                const itemPath = item.href || `/${title.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}/${item.name.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`;
                return pathname === itemPath;
              });

              return (
                <div
                  key={title}
                  className="relative group py-5"
                  onMouseEnter={() => setActiveDropdown(title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`flex items-center space-x-1 font-medium text-[14px] transition-colors ${
                      isDropdownActive ? "text-[#b45309]" : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <span>{title}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>

                  {activeDropdown === title && (
                    <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                      {items.map((item) => {
                        const itemPath = item.href || `/${title.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}/${item.name.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`;
                        const isItemActive = pathname === itemPath;
                        return (
                          <Link
                            key={item.name}
                            href={itemPath}
                            className={`flex items-center space-x-3 px-4 py-2.5 text-[14px] transition-colors ${
                              isItemActive
                                ? "text-[#b45309] bg-orange-50/50"
                                : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                            }`}
                          >
                            <span className={isItemActive ? "text-[#b45309]" : "text-slate-400"}>
                              {item.icon}
                            </span>
                            <span className="font-medium">{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            <Link
              href={mainLinks[2].href}
              className={`font-medium text-[14px] transition-colors ${
                pathname === mainLinks[2].href ? "text-[#b45309]" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {mainLinks[2].name}
            </Link>

            <Link href="/contact">
              <Button className="bg-[#b45309] hover:bg-[#92400e] text-white">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:text-slate-900"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-lg">
          <div className="px-4 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
            {mainLinks.slice(0, 2).map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`block text-base font-medium ${
                    isActive ? "text-[#b45309]" : "text-slate-700 hover:text-slate-900"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="h-px bg-gray-200 w-full my-4"></div>

            {Object.entries(menuData).map(([title, items]) => {
              const isDropdownActive = items.some(item => {
                const itemPath = item.href || `/${title.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}/${item.name.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`;
                return pathname === itemPath;
              });

              return (
                <div key={title} className="space-y-3">
                  <h3 className={`text-[13px] font-bold uppercase tracking-wider ${isDropdownActive ? "text-[#b45309]" : "text-slate-400"}`}>
                    {title}
                  </h3>
                  <div className="grid grid-cols-1 gap-2">
                    {items.map((item) => {
                      const itemPath = item.href || `/${title.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}/${item.name.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`;
                      const isItemActive = pathname === itemPath;
                      return (
                        <Link
                          key={item.name}
                          href={itemPath}
                          className={`flex items-center space-x-3 text-[15px] font-medium ${
                            isItemActive ? "text-[#b45309]" : "text-slate-600 hover:text-slate-900"
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          <span className={isItemActive ? "text-[#b45309]" : "text-slate-400"}>{item.icon}</span>
                          <span>{item.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            <div className="h-px bg-gray-200 w-full my-4"></div>

            <div className="space-y-4">
              <Link
                href={mainLinks[2].href}
                className={`block text-base font-medium ${
                  pathname === mainLinks[2].href ? "text-[#b45309]" : "text-slate-700 hover:text-slate-900"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {mainLinks[2].name}
              </Link>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="block w-full">
                <Button className="w-full bg-[#b45309] hover:bg-[#92400e] text-white">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
