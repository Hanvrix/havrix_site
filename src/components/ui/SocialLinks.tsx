import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const socialLinks = [
  { icon: <Facebook className="h-5 w-5" />, href: "#" },
  { icon: <Twitter className="h-5 w-5" />, href: "#" },
  { icon: <Linkedin className="h-5 w-5" />, href: "#" },
  { icon: <Instagram className="h-5 w-5" />, href: "#" },
];

export const SocialLinks = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex space-x-4 ${className}`}>
      {socialLinks.map((social, idx) => (
        <a
          key={idx}
          href={social.href}
          className="w-10 h-10 text-white rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-primary hover:text-bg-dark hover:border-brand-primary transition-all duration-300"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};
