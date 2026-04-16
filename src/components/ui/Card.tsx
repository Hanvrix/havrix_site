import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number; // Ignored to remove staggered heavy animations, kept for type compatibility
}

const Card = ({ children, className = "", delay }: CardProps) => {
  return (
    <div
      className={`bg-white rounded-[18px] p-8 transition-all duration-400 border border-[#eee] hover:border-brand-primary hover:shadow-[0_20px_50px_rgba(253,74,24,0.1)] hover:-translate-y-2 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
