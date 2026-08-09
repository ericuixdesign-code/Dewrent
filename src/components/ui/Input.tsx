import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type Size = "sm" | "md" | "lg" | "xl";

const sizeCls: Record<Size, string> = {
  sm: "h-11 px-3.5 text-sm",
  md: "h-14 px-4 text-[15px]",
  lg: "h-16 px-5 text-base",
  xl: "h-18 px-6 text-[17px]",
};

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  label?: string;
  helper?: string;
  error?: string;
  size?: Size;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  optional?: boolean;
  containerClassName?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helper,
      error,
      size = "md",
      leftIcon,
      rightIcon,
      optional,
      containerClassName,
      className,
      id,
      required,
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
        <div className={cn("relative flex items-center")}>
          {leftIcon && (
            <span className="absolute left-4 text-neutral-400 pointer-events-none">
              {leftIcon}
            </span>
          )}
          <input
            id={inputId}
            ref={ref}
            required={required}
            className={cn(
              "w-full rounded-md border-[1.5px] bg-white transition-all duration-200 ease-out",
              "text-neutral-800 placeholder:text-neutral-400 font-sans",
              "border-neutral-200 hover:border-neutral-300",
              "focus:outline-none focus:border-primary-500 focus:shadow-focus-primary",
              "disabled:bg-neutral-50 disabled:text-neutral-400 disabled:cursor-not-allowed",
              hasError &&
                "border-danger-500 focus:border-danger-500 focus:shadow-[0_0_0_4px_rgba(239,68,68,0.2)]",
              sizeCls[size],
              leftIcon && "pl-12",
              rightIcon && "pr-12",
              className,
            )}
            {...rest}
          />
          {rightIcon && (
            <span className="absolute right-4 text-neutral-400 pointer-events-none">
              {rightIcon}
            </span>
          )}
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
Input.displayName = "Input";
