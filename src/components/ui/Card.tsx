import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number; // Ignored to remove staggered heavy animations, kept for type compatibility
}

const Card = ({ children, className = "", delay }: CardProps) => {
  return (
    <div
      className={`bg-white rounded-[24px] p-8 transition-all duration-400 border border-[#c9d1d1] hover:border-brand-primary hover:shadow-[0_20px_50px_rgba(30,138,138,0.12)] hover:-translate-y-2 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;

