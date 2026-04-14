"use client";

import Link from "next/link";
import { useState, useEffect, ReactNode } from "react";
import {
  Menu, X, Rocket, ChevronDown,
  Shirt, Zap, Hammer, Car, HardHat, Building2, Landmark, Store, Wheat,
  Box, Database, Utensils, Ruler, Home, ShoppingCart, Globe2, Plane, LineChart, Leaf, ShoppingBag,
  Settings, Code2, Sparkles, Monitor, Smartphone, Headset
} from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./ui/Button";

interface MenuItem {
  name: string;
  icon: ReactNode;
  href?: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarBg = scrolled ? "bg-white shadow-md py-4" : "bg-bg-dark py-4";
  const textColor = scrolled ? "text-gray-900" : "text-white";
  const logoColor = scrolled ? "text-blue-600" : "text-white";
  const iconColor = scrolled ? "text-gray-900" : "text-white";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${navbarBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <div className={`transition-all duration-300 ${scrolled ? "scale-90" : "scale-100"}`}>
                <Image
                  src="/logo.png"
                  alt="Hanvrix Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain drop-shadow-sm"
                />
              </div>
              <span className={`text-2xl font-black tracking-tight transition-colors duration-300 ${logoColor}`}>
                Hanvrix
              </span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {mainLinks.slice(0, 2).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-semibold text-sm transition-colors duration-300 ${textColor} hover:text-brand-cta`}
              >
                {link.name}
              </Link>
            ))}

            {Object.entries(menuData).map(([title, items], idx) => (
              <div
                key={title}
                className="relative group py-2"
                onMouseEnter={() => setActiveDropdown(title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center space-x-1 font-semibold text-sm transition-colors duration-300 ${textColor} hover:text-brand-cta`}
                >
                  <span>{title}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === title ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === title && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 py-3 z-50 overflow-hidden"
                    >
                      {items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href || `/${title.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}/${item.name.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                          className="flex items-center space-x-3 px-6 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-brand-cta transition-colors group/item"
                        >
                          <span className="flex-shrink-0 w-8 h-8 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-500 group-hover/item:bg-orange-500/20 transition-colors">
                            {item.icon}
                          </span>
                          <span className="font-medium">{item.name}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <Link
              href={mainLinks[2].href}
              className={`font-semibold text-sm transition-colors duration-300 ${textColor} hover:text-brand-cta`}
            >
              {mainLinks[2].name}
            </Link>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Link href="/contact">
                <Button variant="cta" size="sm">Get Started</Button>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-xl transition-colors ${scrolled ? "hover:bg-gray-100" : "hover:bg-white/10"}`}
            >
              {isOpen ? <X className={`h-7 w-7 ${iconColor}`} /> : <Menu className={`h-7 w-7 ${iconColor}`} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden absolute top-full left-0 w-full overflow-hidden shadow-2xl border-t ${scrolled ? "bg-white border-gray-100" : "bg-[#0f1629] border-white/5"}`}
          >
            <div className="px-6 py-8 space-y-6 max-h-[80vh] overflow-y-auto">
              <div className="space-y-4">
                {mainLinks.slice(0, 2).map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block text-lg font-bold transition-colors ${scrolled ? "text-gray-900 hover:text-blue-600" : "text-white hover:text-blue-400"}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className={`h-px w-full ${scrolled ? "bg-gray-100" : "bg-white/5"}`}></div>

              {Object.entries(menuData).map(([title, items]) => (
                <div key={title} className="space-y-3">
                  <h3 className={`text-xs font-bold uppercase tracking-wider ${scrolled ? "text-gray-400" : "text-white/40"}`}>
                    {title}
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {items.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href || `/${title.toLowerCase()}/${item.name.toLowerCase().replace(/ /g, "-")}`}
                        className={`flex items-center space-x-3 text-base font-medium transition-colors group/mobile-item ${scrolled ? "text-gray-700 hover:text-brand-cta" : "text-white/70 hover:text-white"}`}
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="flex-shrink-0 w-8 h-8 bg-orange-500/10 rounded-lg flex items-center justify-center text-orange-500 group-hover/mobile-item:bg-orange-500/20 transition-colors">
                          {item.icon}
                        </span>
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              <div className={`h-px w-full ${scrolled ? "bg-gray-100" : "bg-white/5"}`}></div>

              <div className="space-y-4">
                <Link
                  href={mainLinks[2].href}
                  className={`block text-lg font-bold transition-colors ${scrolled ? "text-gray-900 hover:text-blue-600" : "text-white hover:text-blue-400"}`}
                  onClick={() => setIsOpen(false)}
                >
                  {mainLinks[2].name}
                </Link>
                <div className="pt-2">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Button variant="cta" className="w-full py-4 text-lg">Get Started</Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

