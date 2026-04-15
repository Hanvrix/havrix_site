import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  delay?: number; // Ignored to remove staggered heavy animations, kept for type compatibility
}

const Card = ({ children, className = "", delay }: CardProps) => {
  return (
    <div
      className={`bg-white rounded-[10px] p-5 border border-gray-200 shadow-sm transition-shadow duration-300 hover:shadow-md ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
