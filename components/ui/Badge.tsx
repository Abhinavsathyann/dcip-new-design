import React from "react";
import { clsx } from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "secondary";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  className,
}) => {
  const baseStyles =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";

  const variants = {
    default: "border-transparent bg-indigo-600 text-white shadow hover:bg-indigo-700",
    secondary: "border-transparent bg-slate-100 text-slate-900 hover:bg-slate-200",
    outline: "text-slate-900 border border-slate-200",
  };

  return (
    <div className={clsx(baseStyles, variants[variant], className)}>
      {children}
    </div>
  );
};