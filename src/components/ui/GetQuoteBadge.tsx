"use client";

import Link from "next/link";

export default function GetQuoteBadge() {
  return (
    <Link
      href="/contact"
      className="fixed right-0 top-1/2 z-[999] bg-brand-primary text-white font-bold tracking-widest py-3 px-3.5 rounded-r-xl shadow-2xl transition-all duration-300 hover:translate-x-1 flex items-center justify-center text-xs md:text-sm select-none cursor-pointer border-l border-white/10"
      style={{
        writingMode: "vertical-rl",
        transform: "translateY(-50%) rotate(180deg)",
      }}
    >
      Get Quote
    </Link>
  );
}
