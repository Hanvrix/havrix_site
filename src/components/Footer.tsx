import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Github } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Industries: [
      { name: "Textiles & apparel & Spinning Mills", href: "/industries/textiles" },
      { name: "Electrical & Electronics", href: "/industries/electrical" },
      { name: "Steel & Metals", href: "/industries/steel-metals" },
      { name: "Automotive", href: "/industries/automotive" },
      { name: "Construction & Infrastructure", href: "/industries/construction" },
      { name: "Real Estate", href: "/industries/real-estate" },
      { name: "Banking & Finance", href: "/industries/banking-finance" },
      { name: "E-Commerce", href: "/industries/e-commerce" },
      { name: "Agriculture", href: "/industries/agriculture" },
      { name: "Education", href: "/industries/education" },
      { name: "Logistics & Supply Chain", href: "/industries/logistics" },
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "FAQ", href: "/faq" },
      { name: "Contact", href: "/contact" },
      // { name: "Blog", href: "/blog" },
      // { name: "Careers", href: "/careers" },
      // { name: "Support", href: "/support" },
    ],
    products: [
      { name: "Textile ERP", href: "/products/textile-erp" },
      // { name: "Steel ERP", href: "/products/steel-erp" },
      // { name: "Food and Beverage ERP", href: "/products/food-and-beverage-erp" },
      // { name: "Construnction ERP", href: "/products/construnction-erp" },
      // { name: "Real Estate ERP", href: "/products/real-estate-erp" },
      { name: "E-Commerce ERP", href: "/products/e-commerce-erp" },
      // { name: "Logistics ERP", href: "/products/logistics-erp" },
      // { name: "Travel ERP", href: "/products/travel-erp" },
      // { name: "Finance ERP", href: "/products/finance-erp" },
      // { name: "Agriculture ERP", href: "/products/agriculture-erp" },
      { name: "Electrical ERP", href: "/products/electrical-erp" },
      // { name: "Retail ERP", href: "/products/retail-erp" },
    ],
    services: [
      { name: "Digital Transformation", href: "/services" },
      { name: "Web & Application Development", href: "/services" },
      { name: "Mobile Application Development", href: "/services" },
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
    { icon: <Twitter className="h-5 w-5" />, href: "#" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#" },
    { icon: <Instagram className="h-5 w-5" />, href: "#" },
    { icon: <Github className="h-5 w-5" />, href: "#" },
  ];

  return (
    <footer className="bg-bg-dark text-blue-100/70 pt-16 pb-16 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-primary/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div>
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <Link href="/" className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 transition-transform duration-300 hover:scale-110">
                  <Image
                    src="/logo.png"
                    alt="Hanvrix Logo"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-2xl font-black text-white tracking-tight text-gradient-green">Hanvrix</span>
              </Link>
              <p className="mb-10 max-w-sm leading-relaxed text-blue-100/60 font-medium">
                Empowering forward-thinking companies with cutting-edge digital solutions. We build
                modern web applications that scale with your ambitions.
              </p>
              <div className="flex space-x-5">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all duration-300 border border-white/5 hover:border-brand-primary/50 text-blue-100/50"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-10">
              <h3 className="text-white font-black mb-8 text-lg uppercase tracking-wider">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-4">
                  <div className="p-2.5 bg-blue-500/10 rounded-lg shrink-0">
                    <MapPin className="h-5 w-5 text-brand-primary" />
                  </div>
                  <span className="font-medium text-blue-100/60">Salem, Tamil Nadu, India</span>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="p-2.5 bg-blue-500/10 rounded-lg shrink-0">
                    <Mail className="h-5 w-5 text-brand-primary" />
                  </div>
                  <a href="mailto:info@hanvrix.com" className="hover:text-white transition-all font-medium">
                    hanvrix@gmail.com
                  </a>
                </li>
                <li className="flex items-center space-x-4">
                  <div className="p-2.5 bg-blue-500/10 rounded-lg shrink-0">
                    <Phone className="h-5 w-5 text-brand-primary" />
                  </div>
                  <a href="tel:+918838213390" className="hover:text-white transition-all font-medium">
                    +91 8838213390
                  </a>
                </li>
              </ul>
            </div>
          </div>


          <div>
            <div>
              <h3 className="text-white font-black mb-8 text-lg uppercase tracking-wider">Company</h3>
              <ul className="space-y-5">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-brand-primary transition-all font-semibold">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10">
              <div>
                <h3 className="text-white font-black mb-8 text-lg uppercase tracking-wider">Services</h3>
                <ul className="space-y-5">
                  {footerLinks.services.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="hover:text-brand-primary transition-all font-semibold">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-black mb-8 text-lg uppercase tracking-wider">Industries</h3>
            <ul className="space-y-5">
              {footerLinks.Industries.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-brand-primary transition-all font-semibold">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-black mb-8 text-lg uppercase tracking-wider">Products</h3>
            <ul className="space-y-5">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-brand-primary transition-all font-semibold">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-semibold opacity-40">
            &copy; {currentYear} Hanvrix. All rights reserved.
          </p>
          <div className="flex space-x-8 text-sm font-semibold opacity-40">
            {footerLinks.legal.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-white transition-all">
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

