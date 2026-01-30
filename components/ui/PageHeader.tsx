
import React from "react";
import { Container } from "@/components/layout/Container";
import { clsx } from "clsx";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  className,
}) => {
  return (
    <section className={clsx("relative bg-slate-900 pt-28 pb-12 md:pt-40 md:pb-24", className)}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/90 z-10" />
        {/* Abstract background pattern */}
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-500 to-transparent z-20 opacity-30" />
      </div>

      <Container className="relative z-20 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-white tracking-tight mb-4 md:mb-6 px-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base md:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed px-4">
            {subtitle}
          </p>
        )}
      </Container>
    </section>
  );
};
