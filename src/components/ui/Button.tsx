import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "outline" | "white";
  size?: string;    // Kept for backwards compatibility
}

const Button = ({
  children,
  className = "",
  variant = "primary",
  size,
  ...props
}: ButtonProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "outline":
        return "bg-transparent border-2 border-brand-primary text-brand-primary hover:text-white";
      case "white":
        return "bg-white text-brand-secondary border-none hover:bg-brand-primary hover:text-white";
      default: // primary
        return "bg-brand-primary text-white border-none";
    }
  };

  return (
    <button
      {...props}
      className={`relative inline-flex items-center justify-center cursor-pointer font-bold text-[15px] h-[50px] px-8 rounded-full transition-all duration-300 overflow-hidden group z-10 ${getVariantClasses()} disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {/* Slide-over effect background */}
      <span className="absolute inset-0 bg-brand-secondary transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 -z-10" />
      
      <span className="relative flex items-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default Button;
