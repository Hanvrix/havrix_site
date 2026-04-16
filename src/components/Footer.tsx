import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Github, Facebook } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Industries: [
      { name: "Textiles & apparel", href: "/industries/textiles" },
      { name: "Electrical & Electronics", href: "/industries/electrical" },
      { name: "Steel & Metals", href: "/industries/steel-metals" },
      { name: "Automotive", href: "/industries/automotive" },
      { name: "Construction & Infrastructure", href: "/industries/construction" },
      { name: "Real Estate", href: "/industries/real-estate" },
      { name: "Banking & Finance", href: "/industries/banking-finance" },
      { name: "E-Commerce", href: "/industries/e-commerce" },
      { name: "Agriculture", href: "/industries/agriculture" },
      { name: "Education", href: "/industries/education" },
      { name: "Logistics", href: "/industries/logistics" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "FAQ", href: "/faq" },
      { name: "Contact", href: "/contact" },
    ],
    products: [
      { name: "Textile ERP", href: "/products/textile-erp" },
      { name: "E-Commerce ERP", href: "/products/e-commerce-erp" },
      { name: "Electrical ERP", href: "/products/electrical-erp" },
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

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#" },
    { icon: <Twitter className="h-5 w-5" />, href: "#" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#" },
    { icon: <Instagram className="h-5 w-5" />, href: "#" },
    { icon: <Github className="h-5 w-5" />, href: "#" },
  ];

  return (
    <footer className="bg-bg-footer text-white pt-24 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
          {/* Brand Identity */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="p-1.5 bg-brand-primary rounded-lg">
                <Image
                  src="/logo.png"
                  alt="Hanvrix Logo"
                  width={24}
                  height={24}
                  className="w-6 h-6 object-contain brightness-0 invert"
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

            <div className="flex space-x-4">
              {socialLinks.slice(0, 4).map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:text-bg-dark transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
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
            
            <h3 className="text-white font-semibold mb-6 mt-8 text-[15px]">Products</h3>
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

          <div>
            <h3 className="text-white font-semibold mb-6 text-[15px]">Industries</h3>
            <ul className="space-y-4 text-[14px]">
              {footerLinks.Industries.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[14px]">
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
