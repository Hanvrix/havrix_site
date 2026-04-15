import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: string; // Kept for backwards compatibility, ignored in styling
  size?: string;    // Kept for backwards compatibility, ignored in styling
}

const Button = ({
  children,
  className = "",
  variant,
  size,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center font-semibold text-[14px] h-[40px] px-6 rounded-[10px] transition-colors duration-200 bg-slate-900 text-white hover:bg-slate-800 border border-transparent disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
