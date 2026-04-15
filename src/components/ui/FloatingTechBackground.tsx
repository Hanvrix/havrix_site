"use client";

import { motion } from "framer-motion";
import { Code2, Database, Zap, Binary, Cpu, Shield, Workflow } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingTechBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid hydration mismatch on initial server render

  const elements = [
    { id: 1, Icon: Binary, size: 48, top: "15%", left: "5%", color: "text-slate-300", duration: 15, delay: 0, opacity: 0.22 },
    { id: 2, Icon: Database, size: 32, top: "65%", left: "10%", color: "text-[#b45309]", duration: 18, delay: 2, opacity: 0.35 },
    { id: 3, Icon: Code2, size: 64, top: "25%", left: "85%", color: "text-slate-200", duration: 25, delay: 1, opacity: 0.18 },
    { id: 4, Icon: Cpu, size: 40, top: "75%", left: "80%", color: "text-slate-300", duration: 20, delay: 3, opacity: 0.22 },
    { id: 5, Icon: Zap, size: 28, top: "45%", left: "55%", color: "text-[#b45309]", duration: 12, delay: 1, opacity: 0.4 },
    { id: 6, Icon: Shield, size: 56, top: "85%", left: "45%", color: "text-slate-200", duration: 22, delay: 4, opacity: 0.2 },
    { id: 7, Icon: Workflow, size: 36, top: "12%", left: "50%", color: "text-slate-300", duration: 16, delay: 2, opacity: 0.28 },
    // { id: 8, Icon: Rocket, size: 44, top: "35%", left: "20%", color: "text-slate-200", duration: 19, delay: 5, opacity: 0.25 },
    // { id: 9, Icon: Terminal, size: 50, top: "55%", left: "95%", color: "text-[#b45309]", duration: 24, delay: 0, opacity: 0.3 },
    // { id: 10, Icon: Globe2, size: 38, top: "75%", left: "35%", color: "text-slate-300", duration: 21, delay: 1, opacity: 0.22 },
    // { id: 11, Icon: Server, size: 42, top: "85%", left: "65%", color: "text-slate-200", duration: 17, delay: 3, opacity: 0.22 },
    // { id: 12, Icon: Activity, size: 30, top: "8%", left: "80%", color: "text-[#b45309]", duration: 14, delay: 2, opacity: 0.35 },
    { id: 13, Icon: Code2, size: 36, top: "20%", left: "30%", color: "text-slate-200", duration: 22, delay: 6, opacity: 0.2 },
    { id: 14, Icon: Cpu, size: 52, top: "40%", left: "5%", color: "text-[#b45309]", duration: 28, delay: 1, opacity: 0.25 },
    { id: 15, Icon: Database, size: 44, top: "80%", left: "15%", color: "text-slate-200", duration: 20, delay: 4, opacity: 0.22 },
    { id: 16, Icon: Binary, size: 30, top: "50%", left: "40%", color: "text-slate-300", duration: 16, delay: 2, opacity: 0.28 },
    { id: 17, Icon: Zap, size: 48, top: "10%", left: "90%", color: "text-[#b45309]", duration: 18, delay: 3, opacity: 0.35 },
    { id: 18, Icon: Workflow, size: 58, top: "70%", left: "85%", color: "text-slate-200", duration: 30, delay: 0, opacity: 0.2 },
    // { id: 19, Icon: Terminal, size: 34, top: "30%", left: "70%", color: "text-slate-300", duration: 15, delay: 5, opacity: 0.24 },
    // { id: 20, Icon: Smartphone, size: 40, top: "60%", left: "50%", color: "text-[#b45309]", duration: 25, delay: 2, opacity: 0.3 },
    { id: 21, Icon: Binary, size: 24, top: "25%", left: "20%", color: "text-slate-200", duration: 13, delay: 1, opacity: 0.18 },
    // { id: 22, Icon: Server, size: 38, top: "15%", left: "75%", color: "text-slate-300", duration: 19, delay: 4, opacity: 0.22 },
    { id: 23, Icon: Shield, size: 32, top: "45%", left: "10%", color: "text-slate-200", duration: 21, delay: 2, opacity: 0.2 },
    // { id: 24, Icon: Rocket, size: 28, top: "90%", left: "25%", color: "text-[#b45309]", duration: 14, delay: 5, opacity: 0.3 },
    { id: 25, Icon: Code2, size: 44, top: "5%", left: "60%", color: "text-slate-300", duration: 26, delay: 0, opacity: 0.2 },
    // { id: 26, Icon: Globe2, size: 36, top: "95%", left: "75%", color: "text-slate-200", duration: 22, delay: 1, opacity: 0.18 },
    { id: 27, Icon: Zap, size: 24, top: "15%", left: "40%", color: "text-[#b45309]", duration: 11, delay: 3, opacity: 0.35 },
    { id: 28, Icon: Database, size: 30, top: "35%", left: "80%", color: "text-slate-300", duration: 17, delay: 2, opacity: 0.22 },
    { id: 29, Icon: Binary, size: 42, top: "85%", left: "90%", color: "text-slate-200", duration: 20, delay: 6, opacity: 0.2 },
    { id: 30, Icon: Workflow, size: 32, top: "55%", left: "5%", color: "text-[#b45309]", duration: 18, delay: 1, opacity: 0.25 },
    // { id: 31, Icon: Activity, size: 26, top: "40%", left: "30%", color: "text-slate-300", duration: 12, delay: 4, opacity: 0.28 },
    // { id: 32, Icon: Terminal, size: 38, top: "2%", left: "15%", color: "text-[#b45309]", duration: 23, delay: 0, opacity: 0.3 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Soft gradient blur spheres for tech depth */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-slate-50 opacity-40 blur-3xl"
      />
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }} 
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[20%] -right-[10%] w-[30%] h-[40%] rounded-full bg-orange-50 blur-3xl"
      />

      {/* Floating SVG Icons */}
      {elements.map((el) => {
        const IconComponent = el.Icon;
        return (
          <motion.div
            key={el.id}
            className={`absolute ${el.color}`}
            style={{ 
              top: el.top, 
              left: el.left,
              opacity: el.opacity || 0.4
            }}
            animate={{
              y: [0, -30, 0, 20, 0],
              x: [0, 20, 0, -20, 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: el.duration,
              repeat: Infinity,
              ease: "linear",
              delay: el.delay
            }}
          >
            <IconComponent size={el.size} strokeWidth={1} />
          </motion.div>
        );
      })}
    </div>
  );
}
