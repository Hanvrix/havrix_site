"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

export const FadeIn = ({ children, delay = 0, className = "", direction = "up" }: FadeInProps) => {
  const directionOffset = {
    up: { y: 60, x: 0, scale: 0.96 },
    down: { y: -60, x: 0, scale: 0.96 },
    left: { x: 60, y: 0, scale: 0.96 },
    right: { x: -60, y: 0, scale: 0.96 },
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directionOffset[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0,
        scale: 1 
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay: delay, 
        ease: [0.16, 1, 0.3, 1] // Snappier corporate easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
