import { ReactNode, ButtonHTMLAttributes } from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "outline" | "white";
  size?: string;    // Kept for backwards compatibility
  showArrow?: boolean;
}

const Button = ({
  children,
  className = "",
  variant = "primary",
  size,
  showArrow = true,
  ...props
}: ButtonProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "outline":
        return "bg-transparent border border-border-light text-brand-secondary hover:border-brand-primary hover:text-brand-primary";
      case "white":
        return "bg-white text-brand-secondary border-none hover:bg-brand-primary hover:text-white";
      default: // primary
        return "bg-brand-primary text-white border-none";
    }
  };

  const hasArrow = showArrow && (variant === "primary" || variant === "white");
  const paddingClass = hasArrow ? "pl-7 pr-1.5 py-1.5" : "px-8 py-3";

  return (
    <button
      {...props}
      className={`relative inline-flex items-center justify-between cursor-pointer font-bold text-[15px] h-[52px] rounded-full transition-all duration-300 overflow-hidden group z-10 ${getVariantClasses()} ${paddingClass} disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {/* Sliding text container */}
      <span className="relative overflow-hidden block h-[22px] flex-grow text-left">
        <span className="block transition-transform duration-400 ease-in-out group-hover:-translate-y-7 select-none">
          <span className="flex items-center gap-2">{children}</span>
          {/* Duplicate text for slide hover effect */}
          <span className="absolute left-0 top-7 flex items-center gap-2 select-none">{children}</span>
        </span>
      </span>

      {/* Circular Arrow Icon */}
      {hasArrow && (
        <span className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-brand-secondary text-white ml-3 transition-colors duration-300 group-hover:bg-white group-hover:text-brand-primary shrink-0">
          <ArrowRight className="w-4 h-4 -rotate-45 transition-transform duration-350 group-hover:rotate-0" />
        </span>
      )}
    </button>
  );
};

export default Button;

