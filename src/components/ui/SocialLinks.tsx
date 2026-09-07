import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const socialLinks = [
  { name: "Facebook", icon: <Facebook className="h-5 w-5" />, href: "https://www.facebook.com/hanvrix" },
  { name: "Twitter", icon: <Twitter className="h-5 w-5" />, href: "https://x.com/hanvrix_tech" },
  { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/company/hanvrix/" },
  { name: "Instagram", icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/hanvrix?stkn=NnB1MXFqZWQ3NHlq" },
];

export const SocialLinks = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex space-x-4 ${className}`}>
      {socialLinks.map((social, idx) => (
        <a
          key={idx}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className="w-10 h-10 text-white rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:text-bg-dark hover:border-brand-primary transition-all duration-300"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};
