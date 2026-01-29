import React from "react";
import { clsx } from "clsx";
import { Label } from "./Label";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  containerClassName?: string;
  wordCount?: number;
  minWords?: number;
  maxWords?: number;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  className,
  containerClassName,
  id,
  required,
  wordCount,
  minWords,
  maxWords,
  ...props
}) => {
  const textareaId = id || label.toLowerCase().replace(/\s+/g, "-");
  
  // Calculate status color for word count
  const isWordCountValid = 
    minWords && maxWords && wordCount !== undefined 
      ? wordCount >= minWords && wordCount <= maxWords
      : true;

  return (
    <div className={containerClassName}>
      <div className="flex justify-between items-end mb-2">
        <Label htmlFor={textareaId} required={required} className="mb-0">
          {label}
        </Label>
        {wordCount !== undefined && maxWords && (
          <span className={clsx(
            "text-xs font-medium",
            !isWordCountValid ? "text-red-600" : "text-slate-500"
          )}>
            {wordCount} / {maxWords} words
          </span>
        )}
      </div>
      <textarea
        id={textareaId}
        className={clsx(
          "block w-full rounded-md border-0 py-2 px-3 text-slate-900 shadow-sm ring-1 ring-inset placeholder:text-slate-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 transition-shadow min-h-[120px]",
          error
            ? "ring-red-300 focus:ring-red-500 bg-red-50"
            : "ring-slate-300 focus:ring-indigo-600 bg-white",
          className
        )}
        aria-invalid={!!error}
        aria-describedby={error ? `${textareaId}-error` : undefined}
        {...props}
      />
      {error && (
        <p className="mt-2 text-sm text-red-600" id={`${textareaId}-error`}>
          {error}
        </p>
      )}
      {!error && minWords && (
        <p className="mt-2 text-xs text-slate-500">
          Minimum {minWords} words required.
        </p>
      )}
    </div>
  );
};