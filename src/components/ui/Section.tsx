import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  light?: boolean; // Kept for compatibility but we mostly use white/light gray
}

const Section = ({ children, id, className = "", light = true }: SectionProps) => {
  return (
    <section
      id={id}
      className={`py-10 md:py-16 ${light ? "bg-white" : "bg-slate-50 border-y border-gray-200"} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;

export const SectionHeader = ({
  title,
  subtitle,
  centered = true,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
}) => (
  <div
    className={`mb-8 md:mb-12 ${centered ? "text-center" : "text-left"}`}
  >
    <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-slate-900">
      {title}
    </h2>
    {subtitle && (
      <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
        {subtitle}
      </p>
    )}
  </div>
);
