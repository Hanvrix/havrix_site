"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, Menu, X, ChevronDown,
  Shirt, Zap, Hammer, Car, HardHat, Building2, Landmark, Store, Wheat,
  Box, Database, Utensils, Ruler, Home, ShoppingCart, Globe2, Plane, LineChart, Leaf, ShoppingBag,
  Code2, Sparkles, Monitor, Smartphone, Headset, Phone, Mail, MapPin,
  Facebook, Twitter, Linkedin, Instagram
} from "lucide-react";
import Image from "next/image";
import Button from "./ui/Button";

/* ─── shared data ─── */
export const menuData: Record<string, { name: string; icon: React.ReactNode; href?: string }[]> = {
  Industries: [
    { name: "Textiles",        icon: <Shirt      className="w-4 h-4" />, href: "/industries/textiles" },
    { name: "Electrical",      icon: <Zap        className="w-4 h-4" /> },
    { name: "Steel & Metals",  icon: <Hammer     className="w-4 h-4" /> },
    { name: "Automobiles",     icon: <Car        className="w-4 h-4" /> },
    { name: "Constructions",   icon: <HardHat    className="w-4 h-4" /> },
    { name: "Real Estate",     icon: <Building2  className="w-4 h-4" /> },
    { name: "Finance",         icon: <Landmark   className="w-4 h-4" /> },
    { name: "Retail Companies",icon: <Store      className="w-4 h-4" /> },
    { name: "Agriculture",     icon: <Wheat      className="w-4 h-4" /> },
  ],
  Products: [
    { name: "Textile ERP",        icon: <Box          className="w-4 h-4" />, href: "/products/textile-erp" },
    // { name: "Steel ERP",          icon: <Database     className="w-4 h-4" /> },
    // { name: "Food & Beverage ERP",icon: <Utensils     className="w-4 h-4" /> },
    // { name: "Construction ERP",   icon: <Ruler        className="w-4 h-4" /> },
    // { name: "Real Estate ERP",    icon: <Home         className="w-4 h-4" /> },
    { name: "E-commerce",         icon: <ShoppingCart className="w-4 h-4" /> },
    { name: "Electrical ERP",         icon: <ShoppingCart className="w-4 h-4" /> },
    // { name: "Import / Export",    icon: <Globe2       className="w-4 h-4" /> },
    // { name: "Travel",             icon: <Plane        className="w-4 h-4" /> },
    // { name: "Finance",            icon: <LineChart    className="w-4 h-4" /> },
    // { name: "Agriculture",        icon: <Leaf         className="w-4 h-4" /> },
    // { name: "Retail",             icon: <ShoppingBag  className="w-4 h-4" /> },
  ],
  Services: [
    { name: "Digital Transformation",  icon: <Sparkles    className="w-4 h-4" />, href: "/services/digital-transformation" },
    { name: "Web & App Development",   icon: <Monitor     className="w-4 h-4" />, href: "/services/web-app-development" },
    { name: "Mobile App Development",  icon: <Smartphone  className="w-4 h-4" />, href: "/services/mobile-app-development" },
    { name: "Custom Development",      icon: <Code2       className="w-4 h-4" />, href: "/services/custom-development" },
    { name: "CMS, E-Commerce & ERP",   icon: <Code2       className="w-4 h-4" />, href: "/services/cms-ecommerce-erp" },
    { name: "BPO Support",             icon: <Headset     className="w-4 h-4" />, href: "/services/support" },
  ],
};

export const navLinks = [
  { name: "Home",      href: "/" },
  { name: "About us",  href: "/about" },
  { name: "Contact",   href: "/contact" },
];

/* ─── helper to build item path ─── */
export function itemPath(title: string, item: { name: string; href?: string }) {
  return (
    item.href ||
    `/${title.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}/${item.name
      .toLowerCase()
      .replace(/ & /g, "-")
      .replace(/ /g, "-")}`
  );
}

/* ══════════════════════════════════════════════════════════
   NavDropdowns — shared dropdown menus for both dark & light navbars
══════════════════════════════════════════════════════════ */
export function NavDropdowns({
  activeDropdown,
  setActiveDropdown,
  pathname,
  dark,
}: {
  activeDropdown: string | null;
  setActiveDropdown: (v: string | null) => void;
  pathname: string;
  dark: boolean;
}) {
  return (
    <>
      {Object.entries(menuData).map(([title, items]) => {
        const isActive = items.some((item) => pathname === itemPath(title, item));
        return (
          <div
            key={title}
            className="relative group py-3"
            onMouseEnter={() => setActiveDropdown(title)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className={`flex items-center gap-1 font-semibold text-[13px] tracking-wide px-4 py-1.5 rounded-full border transition-all duration-300 ${
                dark
                  ? isActive
                    ? "border-brand-primary text-brand-primary bg-brand-primary/5"
                    : "border-white/15 text-white/80 hover:border-brand-primary/60 hover:text-white"
                  : isActive
                  ? "border-brand-primary text-brand-primary"
                  : "border-[#c9d1d1] text-[#364e52] hover:border-brand-primary hover:text-brand-primary"
              }`}
            >
              {title}
              <ChevronDown
                className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === title ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {activeDropdown === title && (
                <motion.div
                  initial={{ opacity: 0, scaleY: 0.85, y: -4 }}
                  animate={{ opacity: 1, scaleY: 1, y: 0 }}
                  exit={{ opacity: 0, scaleY: 0.85, y: -4 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[270px] bg-[#0f2628] rounded-2xl shadow-2xl border border-white/10 py-3 z-50 origin-top"
                >
                  <div className="grid grid-cols-1 gap-0.5 px-2">
                    {items.map((item) => {
                      const p = itemPath(title, item);
                      return (
                        <Link
                          key={item.name}
                          href={p}
                          className={`flex items-center gap-3 px-4 py-2.5 text-[13px] rounded-xl transition-all ${
                            pathname === p
                              ? "text-white bg-brand-primary"
                              : "text-white/60 hover:bg-white/5 hover:text-white"
                          }`}
                          onClick={() => setActiveDropdown(null)}
                        >
                          <span className={pathname === p ? "text-white" : "text-brand-primary"}>{item.icon}</span>
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
    </>
  );
}

/* ══════════════════════════════════════════════════════════
   NavDropdownsPlain — plain text dropdowns for the sticky nav (no pill borders)
══════════════════════════════════════════════════════════ */
export function NavDropdownsPlain({
  activeDropdown,
  setActiveDropdown,
  pathname,
}: {
  activeDropdown: string | null;
  setActiveDropdown: (v: string | null) => void;
  pathname: string;
}) {
  return (
    <>
      {Object.entries(menuData).map(([title, items]) => {
        const isActive = items.some((item) => pathname === itemPath(title, item));
        return (
          <div
            key={title}
            className="relative group py-3"
            onMouseEnter={() => setActiveDropdown(title)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className={`flex items-center gap-1 font-semibold text-[13px] tracking-wide px-3 py-1.5 transition-all duration-300 ${
                isActive ? "text-brand-primary" : "text-[#364e52] hover:text-brand-primary"
              }`}
            >
              {title}
              <ChevronDown
                className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === title ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {activeDropdown === title && (
                <motion.div
                  initial={{ opacity: 0, scaleY: 0.85, y: -4 }}
                  animate={{ opacity: 1, scaleY: 1, y: 0 }}
                  exit={{ opacity: 0, scaleY: 0.85, y: -4 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[270px] bg-[#0f2628] rounded-2xl shadow-2xl border border-white/10 py-3 z-50 origin-top"
                >
                  <div className="grid grid-cols-1 gap-0.5 px-2">
                    {items.map((item) => {
                      const p = itemPath(title, item);
                      return (
                        <Link
                          key={item.name}
                          href={p}
                          className={`flex items-center gap-3 px-4 py-2.5 text-[13px] rounded-xl transition-all ${
                            pathname === p
                              ? "text-white bg-brand-primary"
                              : "text-white/60 hover:bg-white/5 hover:text-white"
                          }`}
                          onClick={() => setActiveDropdown(null)}
                        >
                          <span className={pathname === p ? "text-white" : "text-brand-primary"}>{item.icon}</span>
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
    </>
  );
}

/* ══════════════════════════════════════════════════════════
   MobileDrawer — shared mobile off-canvas drawer
══════════════════════════════════════════════════════════ */
export function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed inset-0 bg-[#0c1e21] z-[120] flex flex-col overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 sm:px-8 border-b border-white/5 bg-[#0c1e21]/80 backdrop-blur-md sticky top-0 z-10">
              <Link href="/" className="flex items-center space-x-2" onClick={onClose}>
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
                onClick={onClose}
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
                  {navLinks.slice(0, 2).map((link) => (
                    <motion.div key={link.name} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
                      <Link
                        href={link.href}
                        className={`block text-3xl md:text-4xl font-black uppercase tracking-tight transition-colors ${
                          pathname === link.href ? "text-brand-primary" : "text-white hover:text-brand-primary"
                        }`}
                        onClick={onClose}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-4 pt-4 border-t border-white/10">
                  {Object.entries(menuData).map(([title, items]) => {
                    const isExpanded = expandedSection === title;
                    return (
                      <motion.div key={title} variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="space-y-2">
                        <button
                          onClick={() => setExpandedSection(isExpanded ? null : title)}
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
                                const p = itemPath(title, item);
                                return (
                                  <Link
                                    key={item.name}
                                    href={p}
                                    className={`flex items-center space-x-4 text-[16px] font-bold uppercase transition-colors ${
                                      pathname === p ? "text-brand-primary" : "text-white/60 hover:text-white"
                                    }`}
                                    onClick={onClose}
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
                    href={navLinks[2].href}
                    className={`block text-3xl font-black uppercase tracking-tight transition-colors ${
                      pathname === navLinks[2].href ? "text-brand-primary" : "text-white hover:text-brand-primary"
                    }`}
                    onClick={onClose}
                  >
                    {navLinks[2].name}
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
                    {[
                      <Facebook key="fb" className="w-5 h-5" />,
                      <Twitter  key="tw" className="w-5 h-5" />,
                      <Linkedin key="li" className="w-5 h-5" />,
                      <Instagram key="ig" className="w-5 h-5" />,
                    ].map((icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-brand-primary hover:text-[#0c1e21] transition-all duration-300"
                      >
                        {icon}
                      </a>
                    ))}
                  </div>
                </div>

                <Link href="/contact" onClick={onClose} className="block w-full">
                  <Button className="w-full h-[60px] text-lg justify-center shadow-[0_0_30px_rgba(32,192,151,0.3)]" variant="primary" showArrow={true}>
                    Get Free Quote
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ══════════════════════════════════════════════════════════
   EmbeddedNav — the dark nav INSIDE any hero section/card
   Used by: HeroNav (homepage) and BreadcrumbHeader (inner pages)
══════════════════════════════════════════════════════════ */
export function EmbeddedNav() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="relative z-30 flex items-center justify-between px-6 sm:px-8 lg:px-12 py-5">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group shrink-0">
          <div className="p-1.5 bg-brand-primary rounded-lg transition-transform duration-300 group-hover:rotate-12">
            <Image
              src="/logo.png"
              alt="Hanvrix Logo"
              width={26}
              height={26}
              className="w-6 h-6 object-contain brightness-0 invert"
            />
          </div>
          <span className="text-xl font-black tracking-tighter text-white">
            HANVRIX<span className="text-brand-primary">.</span>
          </span>
        </Link>

        {/* Center */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-semibold text-[13px] tracking-wide px-4 py-1.5 rounded-full border transition-all duration-300 ${
                  isActive
                    ? "border-brand-primary text-brand-primary bg-brand-primary/5"
                    : "border-white/15 text-white/80 hover:border-brand-primary/60 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <NavDropdowns
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
            pathname={pathname}
            dark={true}
          />
        </div>

        {/* Right */}
        <div className="flex items-center gap-3 shrink-0">
          <Link href="/contact" className="hidden lg:block">
            <Button variant="primary" showArrow={true} className="h-[40px] px-5 text-[13px]">
              Contact Us
            </Button>
          </Link>
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2 text-white hover:text-brand-primary transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

/* ══════════════════════════════════════════════════════════
   StickyNav — fixed top bar that slides in when user scrolls.
   Rendered globally in layout.tsx for ALL pages.
══════════════════════════════════════════════════════════ */
export function StickyNav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {scrolled && (
          <motion.nav
            initial={{ y: -70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -70, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 sm:px-8 lg:px-12 py-5 bg-white/95 backdrop-blur-md shadow-md border-b border-[#c9d1d1]/60"
          >
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group shrink-0">
              <div className="p-1.5 bg-brand-primary rounded-lg transition-transform duration-300 group-hover:rotate-12">
                <Image src="/logo.png" alt="Hanvrix Logo" width={24} height={24} className="w-5 h-5 object-contain brightness-0 invert" />
              </div>
              <span className="text-lg font-black tracking-tighter text-[#0c1e21]">
                HANVRIX<span className="text-brand-primary">.</span>
              </span>
            </Link>

            {/* Center (light style) */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`font-semibold text-[13px] tracking-wide px-4 py-1.5 transition-all duration-300 ${
                      isActive
                        ? "text-brand-primary"
                        : "text-[#364e52] hover:text-brand-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <NavDropdownsPlain
                activeDropdown={activeDropdown}
                setActiveDropdown={setActiveDropdown}
                pathname={pathname}
              />
            </div>

            {/* Right */}
            <div className="flex items-center gap-3 shrink-0">
              <Link href="/contact" className="hidden lg:block">
                <Button variant="primary" showArrow={true} className="h-[40px] px-5 text-[13px]">
                  Contact Us
                </Button>
              </Link>
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 text-[#0c1e21] hover:text-brand-primary transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <MobileDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

/* ══════════════════════════════════════════════════════════
   HeroNav — default export used in homepage page.tsx
   Renders EmbeddedNav (inside hero) + StickyNav (on scroll)
══════════════════════════════════════════════════════════ */
export default function HeroNav() {
  return (
    <>
      <EmbeddedNav />
      <StickyNav />
    </>
  );
}
