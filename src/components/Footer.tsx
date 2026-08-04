import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Github, Facebook } from "lucide-react";
import Image from "next/image";
import { SocialLinks } from "@/components/ui/SocialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "FAQ", href: "/faq" },
      { name: "Contact", href: "/contact" },
    ],
    products: [
      { name: "Textiles ERP (Silks)", href: "/products/textile-erp" },
      { name: "Garments ERP", href: "/products/garments-erp" },
      { name: "Lead Management CRM", href: "/products/lead-management-crm" },
    ],
    services: [
      { name: "Digital Transformation", href: "/services" },
      { name: "Web & App Development", href: "/services" },
      { name: "Mobile App Development", href: "/services" },
      { name: "Custom Development", href: "/services" },
      { name: "CMS, E-Commerce & ERP", href: "/services" },
      { name: "BPO Support Services", href: "/services" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
  };



  return (
    <footer 
      className="relative w-full text-white pt-16 pb-5 overflow-hidden bg-[#0B0F17] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/heroBG.png')" }}
    >
      {/* Dark Overlay for contrast & text legibility */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>

      {/* Ambient Green Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-primary-green/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-10">
          {/* Brand Identity */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Hanvrix Logo"
                  width={36}
                  height={36}
                  className="w-9 h-9 object-contain"
                />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white uppercase">
                Hanvrix<span className="text-brand-primary">.</span>
              </span>
            </Link>
            <p className="text-gray-400 text-[15px] leading-relaxed max-w-sm">
              Helping businesses navigate the digital landscape with innovative IT solutions and world-class engineering.
            </p>

            <div className="space-y-4 text-gray-400">
              <div className="flex items-center space-x-3 text-[14px]">
                <MapPin className="text-brand-primary h-5 w-5" />
                <span>Salem, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center space-x-3 text-[14px]">
                <Mail className="text-brand-primary h-5 w-5" />
                <a href="mailto:hanvrix@gmail.com" className="hover:text-white transition-colors">
                  hanvrix@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-[14px]">
                <Phone className="text-brand-primary h-5 w-5" />
                <a href="tel:+918838213390" className="hover:text-white transition-colors">
                  +91 8838213390
                </a>
              </div>
            </div>

            <SocialLinks />
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 text-[15px]">Company</h3>
            <ul className="space-y-4 text-[14px]">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 text-[15px]">Services</h3>
            <ul className="space-y-4 text-[14px]">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 text-[15px]">Products</h3>
            <ul className="space-y-4 text-[14px]">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Infinite Marquee Slider */}
      <div className="w-full border-t border-b border-slate-800/40 py-5 overflow-hidden select-none bg-black/10 flex whitespace-nowrap mb-8 relative z-10">
        <div className="animate-marquee flex gap-16 shrink-0">
          {["Growth", "Web Development", "Mobile Apps", "Custom Solutions", "Digital Marketing", "Branding"].map((word, idx) => (
            <div key={idx} className="flex items-center gap-16">
              <span className="text-xl sm:text-2xl font-black uppercase text-white/10 tracking-widest select-none">{word}</span>
              <span className="text-xl sm:text-2xl font-black text-white/5 select-none">•</span>
            </div>
          ))}
          {["Growth", "Web Development", "Mobile Apps", "Custom Solutions", "Digital Marketing", "Branding"].map((word, idx) => (
            <div key={`dup-${idx}`} className="flex items-center gap-16">
              <span className="text-xl sm:text-2xl font-black uppercase text-white/10 tracking-widest select-none">{word}</span>
              <span className="text-xl sm:text-2xl font-black text-white/5 select-none">•</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="pt-4 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[14px]">
          <p>
            &copy; {currentYear} Hanvrix. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {footerLinks.legal.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-white transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
