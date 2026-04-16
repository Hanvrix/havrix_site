import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  light?: boolean;
}

const Section = ({ children, id, className = "", light = true }: SectionProps) => {
  return (
    <section
      id={id}
      className={`py-10 md:py-14 lg:py-16 ${light ? "bg-white" : "bg-bg-dark text-white"} ${className}`}
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
  theme = "light",
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
  theme?: "light" | "dark";
}) => (
  <div
    className={`mb-8 md:mb-12 ${centered ? "text-center mx-auto" : "text-left"}`}
  >
    <div className={`uppercase tracking-[3px] text-[12px] font-black mb-4 ${theme === "dark" ? "text-brand-primary" : "text-brand-primary"}`}>
      <span>// </span>Our Expertise
    </div>
    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black mb-6 tracking-tighter leading-tight ${theme === "dark" ? "text-white" : "text-bg-dark"}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-lg md:text-xl max-w-3xl leading-relaxed font-medium ${centered ? "mx-auto" : ""} ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
        {subtitle}
      </p>
    )}
  </div>
);
