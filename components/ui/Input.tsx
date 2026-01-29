import React from "react";
import { clsx } from "clsx";
import { Label } from "./Label";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  containerClassName?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  className,
  containerClassName,
  id,
  required,
  ...props
}) => {
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className={containerClassName}>
      <Label htmlFor={inputId} required={required}>
        {label}
      </Label>
      <input
        id={inputId}
        className={clsx(
          "block w-full rounded-md border-0 py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset placeholder:text-slate-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 transition-shadow",
          error
            ? "ring-red-300 focus:ring-red-500 bg-red-50"
            : "ring-slate-300 focus:ring-indigo-600 bg-white",
          className
        )}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />
      {error && (
        <p className="mt-2 text-sm text-red-600" id={`${inputId}-error`}>
          {error}
        </p>
      )}
    </div>
  );
};