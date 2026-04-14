import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const Card = ({ children, className = "", delay = 0 }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`bg-brand-secondary/40 backdrop-blur-sm rounded-2xl p-6 border border-white/5 shadow-xl transition-all duration-500 hover:border-brand-primary/30 group card-hover ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;
