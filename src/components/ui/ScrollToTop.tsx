"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (scrollHeight > 0) {
        const percentage = Math.round((scrollTop / scrollHeight) * 100);
        setScrollPercentage(percentage);
      }
      
      setIsVisible(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger initially
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const isNearEnd = scrollPercentage >= 95;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full flex items-center justify-center cursor-pointer shadow-2xl transition-transform duration-300 hover:scale-110 active:scale-95"
          style={{
            background: `conic-gradient(var(--brand-primary) ${scrollPercentage}%, rgba(255, 255, 255, 0.15) ${scrollPercentage}%)`,
            padding: "3px", // Creates the border thickness
          }}
        >
          {/* Inner Core Circle */}
          <div className="w-full h-full rounded-full bg-bg-dark flex items-center justify-center text-white select-none">
            {isNearEnd ? (
              <motion.div
                initial={{ y: 5 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <ArrowUp className="w-5 h-5 text-brand-primary" />
              </motion.div>
            ) : (
              <span className="text-[12px] font-bold tracking-tight">
                {scrollPercentage}%
              </span>
            )}
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
