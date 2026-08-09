import { forwardRef, type SelectHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type SelectSize = "sm" | "md" | "lg" | "xl";

const sizeCls: Record<SelectSize, string> = {
  sm: "h-11 px-3.5 pr-11 text-sm",
  md: "h-14 px-4 pr-12 text-[15px]",
  lg: "h-16 px-5 pr-14 text-base",
  xl: "h-18 px-6 pr-16 text-[17px]",
};

type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> & {
  label?: string;
  helper?: string;
  error?: string;
  size?: SelectSize;
  optional?: boolean;
  containerClassName?: string;
  placeholder?: string;
  children: ReactNode;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      helper,
      error,
      size = "md",
      optional,
      containerClassName,
      className,
      id,
      required,
      placeholder,
      children,
      ...rest
    },
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
        <div className="relative">
          <select
            id={inputId}
            ref={ref}
            required={required}
            className={cn(
              "w-full appearance-none rounded-md border-[1.5px] bg-white",
              "text-neutral-800 font-sans",
              "border-neutral-200 hover:border-neutral-300",
              "focus:outline-none focus:border-primary-500 focus:shadow-focus-primary transition-all duration-200 ease-out",
              "disabled:bg-neutral-50 disabled:text-neutral-400 disabled:cursor-not-allowed",
              hasError && "border-danger-500 focus:border-danger-500",
              sizeCls[size],
              className,
            )}
            {...rest}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {children}
          </select>
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
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
Select.displayName = "Select";
