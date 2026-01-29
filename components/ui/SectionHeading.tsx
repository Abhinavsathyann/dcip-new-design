import React from "react";
import { clsx } from "clsx";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  align = "center",
  className,
}) => {
  return (
    <div
      className={clsx(
        "mb-12 max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-serif">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={clsx(
          "mt-6 h-1 w-20 bg-indigo-600 rounded-full",
          align === "center" ? "mx-auto" : ""
        )}
      />
    </div>
  );
};