"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface AnimatedProgressProps {
  label: string;
  percentage: number;
}

export default function AnimatedProgress({ label, percentage }: AnimatedProgressProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1500; // 1.5 seconds
      const increment = percentage / (duration / 16); // 60fps approximation
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= percentage) {
          setCount(percentage);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, percentage]);

  return (
    <div ref={ref}>
      <div className="flex justify-between text-[14px] font-semibold text-brand-secondary mb-2">
        <span>{label}</span>
        <span>{count}%</span>
      </div>
      <div className="w-full bg-border-light h-[4px] rounded-full overflow-hidden">
        <motion.div
          className="bg-brand-primary h-full rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
