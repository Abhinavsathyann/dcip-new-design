import React from "react";
import { clsx } from "clsx";
import { Label } from "./Label";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { label: string; value: string }[];
  error?: string;
  containerClassName?: string;
  placeholder?: string;
}

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  error,
  className,
  containerClassName,
  id,
  required,
  placeholder = "Select an option",
  ...props
}) => {
  const selectId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className={containerClassName}>
      <Label htmlFor={selectId} required={required}>
        {label}
      </Label>
      <select
        id={selectId}
        className={clsx(
          "block w-full rounded-md border-0 py-2.5 px-3 text-slate-900 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 transition-shadow",
          error
            ? "ring-red-300 focus:ring-red-500 bg-red-50"
            : "ring-slate-300 focus:ring-indigo-600 bg-white",
          className
        )}
        aria-invalid={!!error}
        aria-describedby={error ? `${selectId}-error` : undefined}
        defaultValue=""
        {...props}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="mt-2 text-sm text-red-600" id={`${selectId}-error`}>
          {error}
        </p>
      )}
    </div>
  );
};