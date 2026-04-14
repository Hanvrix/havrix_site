import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "white" | "cta";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const Button = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) => {
  const sizeStyles = {
    sm: "px-6 py-2.5 rounded-xl text-xs",
    md: "px-10 py-5 rounded-2xl text-sm",
    lg: "px-12 py-6 rounded-3xl text-base",
  };

  const baseStyles = `inline-flex items-center justify-center font-black tracking-tight transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed ${sizeStyles[size]}`;

  const variants = {
    primary: "bg-brand-primary text-white hover:bg-blue-700 shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40",
    secondary: "bg-brand-secondary text-white hover:bg-slate-800 border border-white/5 shadow-2xl",
    outline: "bg-transparent border border-white/10 text-white hover:border-brand-primary hover:bg-brand-primary/5",
    white: "bg-white text-brand-secondary hover:bg-blue-50 shadow-2xl",
    cta: "bg-brand-cta text-white hover:scale-105 shadow-[0_20px_40px_-15px_rgba(217,119,6,0.5)] hover:shadow-[0_25px_50px_-12px_rgba(217,119,6,0.7)] border border-white/10",
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
