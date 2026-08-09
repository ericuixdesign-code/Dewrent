import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  helper?: string;
  error?: string;
  optional?: boolean;
  containerClassName?: string;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { label, helper, error, optional, containerClassName, className, id, required, rows = 4, ...rest },
    ref,
  ) => {
    const inputId = id ?? rest.name ?? label?.toLowerCase().replace(/\s+/g, "-");
    const hasError = Boolean(error);
    return (
      <div className={cn("flex flex-col gap-2", containerClassName)}>
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-neutral-700 flex items-center justify-between"
          >
            <span>
              {label}
              {required && <span className="text-danger-500 ml-1">*</span>}
            </span>
            {optional && (
              <span className="text-xs text-neutral-400 font-normal">
                Opsional
              </span>
            )}
          </label>
        )}
        <textarea
          id={inputId}
          ref={ref}
          required={required}
          rows={rows}
          className={cn(
            "w-full rounded-md border-[1.5px] bg-white px-4 py-4 text-[15px] resize-y min-h-[120px]",
            "text-neutral-800 placeholder:text-neutral-400 font-sans",
            "border-neutral-200 hover:border-neutral-300",
            "focus:outline-none focus:border-primary-500 focus:shadow-focus-primary transition-all duration-200 ease-out",
            "disabled:bg-neutral-50 disabled:text-neutral-400 disabled:cursor-not-allowed",
            hasError &&
              "border-danger-500 focus:border-danger-500 focus:shadow-[0_0_0_4px_rgba(239,68,68,0.2)]",
            className,
          )}
          {...rest}
        />
        {helper && !hasError && (
          <p className="text-[13px] text-neutral-500 font-sans">{helper}</p>
        )}
        {hasError && (
          <p className="text-[13px] text-danger-500 font-medium font-sans">
            {error}
          </p>
        )}
      </div>
    );
  },
);
Textarea.displayName = "Textarea";
