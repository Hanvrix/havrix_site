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
      className={`py-12 md:py-20 lg:py-24 ${light ? "bg-transparent" : "bg-bg-dark text-white"} ${className}`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
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
    className={`mb-10 md:mb-16 ${centered ? "text-center mx-auto" : "text-left"}`}
  >
    <div className="inline-flex items-center gap-2 text-brand-primary font-bold uppercase tracking-[2px] text-xs mb-3">
      <span>//</span>
      <span>Our Capabilities</span>
    </div>
    <h2 className={`text-3xl md:text-5xl font-black tracking-tighter leading-tight mb-6 ${theme === "dark" ? "text-white" : "text-[#0c1e21]"}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-lg max-w-3xl leading-relaxed font-medium ${centered ? "mx-auto" : ""} ${theme === "dark" ? "text-gray-400" : "text-[#364e52]"}`}>
        {subtitle}
      </p>
    )}
  </div>
);

