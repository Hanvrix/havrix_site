import { ReactNode } from "react";
import { motion } from "framer-motion";

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
      className={`py-24 ${light ? "bg-bg-light" : "bg-bg-dark text-text-dark"} ${className}`}
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
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`mb-16 ${centered ? "text-center" : "text-left"}`}
  >
    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-inherit">
      {title}
    </h2>
    {subtitle && (
      <p className="text-lg opacity-80 max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    )}
  </motion.div>
);
