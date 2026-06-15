"use client";

import Link from "next/link";
import { useState, useEffect, ReactNode } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, ChevronDown, Phone, Mail, MapPin,
  Shirt, Zap, Hammer, Car, HardHat, Building2, Landmark, Store, Wheat,
  Box, Database, Utensils, Ruler, Home, ShoppingCart, Globe2, Plane, LineChart, Leaf, ShoppingBag,
  Code2, Sparkles, Monitor, Smartphone, Headset, Facebook, Twitter, Linkedin, Instagram, Github
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
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);
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
      // { name: "Steel ERP", icon: <Database className="w-4 h-4" /> },
      // { name: "Food & Beverage ERP", icon: <Utensils className="w-4 h-4" /> },
      // { name: "Construction ERP", icon: <Ruler className="w-4 h-4" /> },
      // { name: "Real Estate ERP", icon: <Home className="w-4 h-4" /> },
      // { name: "E-commerce", icon: <ShoppingCart className="w-4 h-4" /> },
      // { name: "Import / Export", icon: <Globe2 className="w-4 h-4" /> },
      // { name: "Travel", icon: <Plane className="w-4 h-4" /> },
      // { name: "Finance", icon: <LineChart className="w-4 h-4" /> },
      // { name: "Agriculture", icon: <Leaf className="w-4 h-4" /> },
      // { name: "Retail", icon: <ShoppingBag className="w-4 h-4" /> },
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

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#" },
    { icon: <Twitter className="h-5 w-5" />, href: "#" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#" },
    { icon: <Instagram className="h-5 w-5" />, href: "#" },
  ];

  const toggleMobileSection = (section: string) => {
    if (expandedMobileSection === section) {
      setExpandedMobileSection(null);
    } else {
      setExpandedMobileSection(section);
    }
  };

  // Hide global navbar on homepage — homepage has its own embedded nav inside the hero card
  if (pathname === "/") return null;

  return (
    <>
      <nav
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 flex items-center justify-between ${
          isScrolled
            ? "top-0 w-full bg-[#0c1e21]/95 backdrop-blur-md py-3 shadow-xl border-b border-white/5 px-4 sm:px-6 lg:px-8"
            : "top-4 w-[calc(100%-32px)] max-w-[1400px] bg-[#0c1e21]/40 backdrop-blur-md py-4 rounded-2xl border border-white/10 px-6 sm:px-8"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="p-1.5 bg-brand-primary rounded-lg transition-transform duration-300 group-hover:rotate-12">
              <Image
                src="/logo.png"
                alt="Hanvrix Logo"
                width={28}
                height={28}
                className="w-7 h-7 object-contain brightness-0 invert"
              />
            </div>
            <span className="text-2xl font-black tracking-tighter text-white">
              HANVRIX<span className="text-brand-primary">.</span>
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-3">
          {mainLinks.slice(0, 2).map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-semibold text-[13px] tracking-wide uppercase px-4 py-1.5 rounded-full border transition-all duration-300 ${
                  isActive 
                    ? "border-brand-primary text-brand-primary bg-brand-primary/5 shadow-sm" 
                    : "border-white/10 text-white/80 hover:border-brand-primary hover:text-white"
                }`}
              >
                {link.name}
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
                className="relative group py-3"
                onMouseEnter={() => setActiveDropdown(title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`flex items-center space-x-1 font-semibold text-[13px] tracking-wide uppercase px-4 py-1.5 rounded-full border transition-all duration-300 ${
                    isDropdownActive 
                      ? "border-brand-primary text-brand-primary bg-brand-primary/5 shadow-sm" 
                      : "border-white/10 text-white/80 hover:border-brand-primary hover:text-white"
                  }`}
                >
                  <span>{title}</span>
                  <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${activeDropdown === title ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === title && (
                    <motion.div
                      initial={{ opacity: 0, scaleY: 0.8 }}
                      animate={{ opacity: 1, scaleY: 1 }}
                      exit={{ opacity: 0, scaleY: 0.8 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[280px] bg-[#202e30] rounded-2xl shadow-2xl border border-white/5 py-4 z-50 origin-top"
                    >
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
                                  : "text-white/60 hover:bg-white/5 hover:text-white"
                              }`}
                              onClick={() => setActiveDropdown(null)}
                            >
                              <span className={isItemActive ? "text-white" : "text-brand-primary"}>
                                {item.icon}
                              </span>
                              <span className="font-semibold">{item.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          <Link
            href={mainLinks[2].href}
            className={`font-semibold text-[13px] tracking-wide uppercase px-4 py-1.5 rounded-full border transition-all duration-300 ${
              pathname === mainLinks[2].href 
                ? "border-brand-primary text-brand-primary bg-brand-primary/5 shadow-sm" 
                : "border-white/10 text-white/80 hover:border-brand-primary hover:text-white"
            }`}
          >
            {mainLinks[2].name}
          </Link>

          <Link href="/contact" className="ml-2">
            <Button className="h-[44px] px-6 text-xs uppercase tracking-wider" showArrow={true} variant="primary">
              Contact
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 text-white hover:text-brand-primary transition-colors"
          >
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </nav>

      {/* Premium Full-Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed inset-0 bg-[#0c1e21] z-[100] flex flex-col overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 sm:px-8 border-b border-white/5 bg-[#0c1e21]/80 backdrop-blur-md sticky top-0 z-10">
              <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                <div className="p-1.5 bg-brand-primary rounded-lg">
                  <Image
                    src="/logo.png"
                    alt="Hanvrix Logo"
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain brightness-0 invert"
                  />
                </div>
                <span className="text-xl font-black tracking-tighter text-white">
                  HANVRIX<span className="text-brand-primary">.</span>
                </span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-brand-primary hover:text-bg-dark transition-all duration-300"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Content Body */}
            <div className="flex-grow flex flex-col pt-8 pb-12 px-6 sm:px-8 max-w-lg mx-auto w-full">
              <motion.div 
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
                }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  {mainLinks.slice(0, 2).map((link) => (
                    <motion.div key={link.name} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
                      <Link
                        href={link.href}
                        className={`block text-3xl md:text-4xl font-black uppercase tracking-tight transition-colors ${
                          pathname === link.href ? "text-brand-primary" : "text-white hover:text-brand-primary"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-4 pt-4 border-t border-white/10">
                  {Object.entries(menuData).map(([title, items]) => {
                    const isExpanded = expandedMobileSection === title;
                    return (
                      <motion.div key={title} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="space-y-2">
                        <button
                          onClick={() => toggleMobileSection(title)}
                          className="flex items-center justify-between w-full text-left text-2xl font-black uppercase tracking-tight text-white/90 hover:text-brand-primary transition-colors py-2"
                        >
                          <span>{title}</span>
                          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                        </button>
                        
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 space-y-4 border-l-2 border-brand-primary/30 mt-4 overflow-hidden"
                            >
                              {items.map((item) => {
                                const itemPath = item.href || `/${title.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}/${item.name.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`;
                                return (
                                  <Link
                                    key={item.name}
                                    href={itemPath}
                                    className={`flex items-center space-x-4 text-[16px] font-bold uppercase transition-colors ${
                                      pathname === itemPath ? "text-brand-primary" : "text-white/60 hover:text-white"
                                    }`}
                                    onClick={() => setIsOpen(false)}
                                  >
                                    <span className="text-brand-primary bg-brand-primary/10 p-2 rounded-lg">{item.icon}</span>
                                    <span>{item.name}</span>
                                  </Link>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>

                <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="pt-4 border-t border-white/10">
                  <Link
                    href={mainLinks[2].href}
                    className={`block text-3xl font-black uppercase tracking-tight transition-colors ${
                      pathname === mainLinks[2].href ? "text-brand-primary" : "text-white hover:text-brand-primary"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {mainLinks[2].name}
                  </Link>
                </motion.div>
              </motion.div>

              {/* Bottom Footer Area */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-auto pt-12 space-y-8"
              >
                <div className="space-y-4">
                  <div className="flex space-x-4">
                    {socialLinks.map((social, idx) => (
                      <a
                        key={idx}
                        href={social.href}
                        className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-brand-primary hover:text-[#0c1e21] transition-all duration-300"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                <Link href="/contact" onClick={() => setIsOpen(false)} className="block w-full">
                  <Button className="w-full h-[60px] text-lg justify-center shadow-[0_0_30px_rgba(32,192,151,0.3)]" variant="primary" showArrow={true}>
                    Start Your Project
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
