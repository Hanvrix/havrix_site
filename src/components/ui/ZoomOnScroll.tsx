"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ZoomOnScrollProps {
  children: ReactNode;
  className?: string;
}

export default function ZoomOnScroll({ children, className = "" }: ZoomOnScrollProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "center center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Scale from 0.85 up to 1 as it scrolls to the center of the viewport
  const scale = useTransform(smoothProgress, [0, 1], [0.85, 1]);
  const opacity = useTransform(smoothProgress, [0, 0.8], [0.6, 1]);

  return (
    <motion.div
      ref={targetRef}
      style={{ scale, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
