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
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuData: Record<string, MenuItem[]> = {
    Industries: [
      { name: "Textiles", icon: <Shirt className="w-4 h-4" /> },
      { name: "Electrical", icon: <Zap className="w-4 h-4" /> },
      { name: "Steel & Metals", icon: <Hammer className="w-4 h-4" /> },
      { name: "Automobiles", icon: <Car className="w-4 h-4" /> },
      { name: "Constructions", icon: <HardHat className="w-4 h-4" /> },
      { name: "Real Estate", icon: <Building2 className="w-4 h-4" /> },
      { name: "Finance", icon: <Landmark className="w-4 h-4" /> },
      { name: "Retail Companies", icon: <Store className="w-4 h-4" /> },
      { name: "Agriculture", icon: <Wheat className="w-4 h-4" /> },
    ],
    Products: [
      { name: "Textile ERP", icon: <Box className="w-4 h-4" /> },
      { name: "Steel ERP", icon: <Database className="w-4 h-4" /> },
      { name: "Food & Beverage ERP", icon: <Utensils className="w-4 h-4" /> },
      { name: "Construction ERP", icon: <Ruler className="w-4 h-4" /> },
      { name: "Real Estate ERP", icon: <Home className="w-4 h-4" /> },
      { name: "E-commerce", icon: <ShoppingCart className="w-4 h-4" /> },
      { name: "Import / Export", icon: <Globe2 className="w-4 h-4" /> },
      { name: "Travel", icon: <Plane className="w-4 h-4" /> },
      { name: "Finance", icon: <LineChart className="w-4 h-4" /> },
      { name: "Agriculture", icon: <Leaf className="w-4 h-4" /> },
      { name: "Retail", icon: <ShoppingBag className="w-4 h-4" /> },
    ],
    Services: [
      { name: "Digital Transformation", icon: <Sparkles className="w-4 h-4" />, href: "/services/digital-transformation" },
      { name: "Web & App Development", icon: <Monitor className="w-4 h-4" />, href: "/services/web-app-development" },
      { name: "Mobile App Development", icon: <Smartphone className="w-4 h-4" />, href: "/services/mobile-app-development" },
      { name: "Custom Development", icon: <Code2 className="w-4 h-4" />, href: "/services/custom-development" },
      { name: "CMS, E-Commerce & ERP", icon: <Code2 className="w-4 h-4" />, href: "/services/cms-ecommerce-erp" },
      { name: "BPO Support", icon: <Headset className="w-4 h-4" />, href: "/services/support" }
    ],
  };

  const mainLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-bg-dark/95 backdrop-blur-md py-3 shadow-xl" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="p-1.5 bg-brand-primary rounded-lg transition-transform group-hover:rotate-12">
                <Image
                  src="/logo.png"
                  alt="Hanvrix Logo"
                  width={28}
                  height={28}
                  className="w-7 h-7 object-contain brightness-0 invert"
                />
              </div>
              <span className={`text-2xl font-black tracking-tighter transition-colors ${isScrolled ? "text-white" : "text-black"}`}>
                HANVRIX<span className="text-brand-primary">.</span>
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {mainLinks.slice(0, 2).map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-bold text-[15px] transition-colors relative group py-2 ${
                    isActive ? "text-brand-primary" : (isScrolled ? "text-white" : "text-black")
                  } hover:text-brand-primary`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-brand-primary transform transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
                </Link>
              );
            })}

            {Object.entries(menuData).map(([title, items]) => {
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
                    className={`flex items-center space-x-1 font-bold text-[15px] transition-colors ${
                      isDropdownActive ? "text-brand-primary" : (isScrolled ? "text-white" : "text-black")
                    } hover:text-brand-primary`}
                  >
                    <span>{title}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === title ? "rotate-180" : ""}`} />
                  </button>

                  <div className={`absolute top-full left-1/2 -translate-x-1/2 w-[280px] bg-bg-dark rounded-2xl shadow-2xl border border-white/5 py-4 z-50 transition-all duration-300 origin-top ${activeDropdown === title ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-0 invisible"}`}>
                    <div className="grid grid-cols-1 gap-1 px-3">
                      {items.map((item) => {
                        const itemPath = item.href || `/${title.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}/${item.name.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`;
                        const isItemActive = pathname === itemPath;
                        return (
                          <Link
                            key={item.name}
                            href={itemPath}
                            className={`flex items-center space-x-3 px-4 py-3 text-[14px] rounded-xl transition-all ${
                              isItemActive
                                ? "text-white bg-brand-primary shadow-lg shadow-brand-primary/20"
                                : "text-gray-400 hover:bg-white/5 hover:text-white"
                            }`}
                          >
                            <span className={isItemActive ? "text-white" : "text-brand-primary"}>
                              {item.icon}
                            </span>
                            <span className="font-semibold">{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}

            <Link
              href={mainLinks[2].href}
              className={`font-bold text-[15px] transition-colors relative group py-2 ${
                pathname === mainLinks[2].href ? "text-brand-primary" : (isScrolled ? "text-white" : "text-black")
              } hover:text-brand-primary`}
            >
              {mainLinks[2].name}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-brand-primary transform transition-transform duration-300 ${pathname === mainLinks[2].href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}></span>
            </Link>

            <Link href="/contact" className="ml-4">
              <Button className="h-[50px] px-8"><Zap className="w-4 h-4 mr-2" /> Get IT Solution</Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors ${isScrolled ? "text-white" : "text-black"} hover:text-brand-primary`}
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-bg-dark border-t border-white/5 shadow-2xl transition-all duration-300 ${isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible h-0"}`}>
        <div className="px-6 py-8 space-y-6 max-h-[85vh] overflow-y-auto">
          {mainLinks.slice(0, 2).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block text-lg font-bold ${pathname === link.href ? "text-brand-primary" : "text-white"}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {Object.entries(menuData).map(([title, items]) => (
            <div key={title} className="space-y-4 pt-2">
              <h3 className="text-[12px] font-black uppercase tracking-[2px] text-brand-primary">
                {title}
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {items.map((item) => {
                  const itemPath = item.href || `/${title.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}/${item.name.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`;
                  return (
                    <Link
                      key={item.name}
                      href={itemPath}
                      className={`flex items-center space-x-4 text-[16px] font-semibold ${pathname === itemPath ? "text-brand-primary" : "text-gray-300"}`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="text-brand-primary">{item.icon}</span>
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="pt-6 space-y-6">
            <Link
              href={mainLinks[2].href}
              className={`block text-lg font-bold ${pathname === mainLinks[2].href ? "text-brand-primary" : "text-white"}`}
              onClick={() => setIsOpen(false)}
            >
              {mainLinks[2].name}
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block w-full">
              <Button className="w-full h-[60px]"><Zap className="w-5 h-5 mr-3" /> Get IT Solution</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
