"use client";

import { Phone } from "lucide-react";

const WhatsAppIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    className="w-6 h-6 fill-current" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.739-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.45 5.515 0 9.961-4.45 9.964-9.97 0-2.673-1.04-5.186-2.93-7.078-1.89-1.891-4.401-2.934-7.077-2.934-5.518 0-10.015 4.453-10.018 9.975-.001 1.773.469 3.513 1.35 5.052L.954 22.2l6.23-1.636zM17.5 14.38c-.3-.149-1.774-.874-2.048-.974-.274-.1-.474-.149-.674.149-.2.3-.774.974-.95 1.173-.175.2-.35.224-.65.075-1.025-.513-1.743-.884-2.427-1.523-.623-.582-1.03-1.298-1.15-1.5-.125-.2-.013-.308.113-.433.112-.113.25-.299.375-.449.125-.15.166-.25.25-.415.083-.166.04-.316-.02-.465-.06-.149-.474-1.144-.65-1.564-.17-.419-.34-.362-.474-.362-.12-.003-.258-.003-.396-.003-.139 0-.362.052-.553.258-.19.208-.727.709-.727 1.729s.74 2.003.843 2.138c.102.136 1.456 2.222 3.527 3.114 1.229.53 2.185.842 2.931 1.077.625.197 1.192.169 1.64.102.499-.075 1.774-.725 2.023-1.424.249-.699.249-1.298.175-1.424-.075-.125-.275-.199-.575-.349z"/>
  </svg>
);

export default function FloatingActions() {
  return (
    <div className="fixed left-6 bottom-6 z-[999] flex flex-col gap-6 select-none">
      {/* Phone Call Button */}
      <a
        href="tel:+918838213390"
        className="w-10 h-10 md:w-12 h-12 bg-brand-primary hover:bg-brand-secondary text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer border border-white/10"
        aria-label="Call Us"
      >
        <Phone className="w-4 h-4 stroke-[2.5]" />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918838213390"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 md:w-12 h-12 bg-brand-primary hover:bg-brand-secondary text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer border border-white/10"
        aria-label="WhatsApp Us"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}
