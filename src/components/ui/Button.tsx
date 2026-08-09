import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "accent" | "dark" | "link";
type Size = "xs" | "sm" | "md" | "lg" | "xl";

const sizeCls: Record<Size, string> = {
  xs: "h-9 px-4 text-[13px] gap-1.5",
  sm: "h-11 px-5 text-sm gap-2",
  md: "h-13 px-7 text-[15px] gap-2",
  lg: "h-15 px-9 text-base gap-2.5",
  xl: "h-[68px] px-11 text-[17px] gap-3",
};

const variantCls: Record<Variant, string> = {
  primary:
    "bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 shadow-sm focus-visible:shadow-focus-primary disabled:bg-primary-200 disabled:text-white/70",
  secondary:
    "bg-primary-100 text-primary-700 hover:bg-primary-200 active:bg-primary-300 focus-visible:shadow-focus-primary disabled:bg-neutral-100 disabled:text-neutral-400",
  outline:
    "bg-transparent border-[1.5px] border-primary-300 text-primary-700 hover:bg-primary-50 hover:border-primary-500 active:bg-primary-100 focus-visible:shadow-focus-primary",
  ghost:
    "bg-transparent text-primary-700 hover:bg-primary-50 active:bg-primary-100 focus-visible:shadow-focus-primary",
  accent:
    "bg-secondary-500 text-neutral-900 hover:bg-secondary-600 hover:text-white active:bg-secondary-700 active:text-white focus-visible:shadow-focus-secondary shadow-sm",
  dark:
    "bg-neutral-900 text-white hover:bg-neutral-800 active:bg-neutral-700 shadow-sm",
  link:
    "bg-transparent text-primary-600 hover:text-primary-800 font-bold shadow-none border-0",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    as?: "button";
    href?: never;
    to?: never;
  };

type ButtonAsLink = CommonProps & {
  as: "link";
  to: LinkProps["to"];
  href?: never;
} & Omit<LinkProps, "to" | "className" | "children">;

type ButtonAsAnchor = CommonProps & {
  as: "a";
  href: string;
  to?: never;
  target?: string;
  rel?: string;
};

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

const baseCls =
  "inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 ease-out select-none whitespace-nowrap disabled:cursor-not-allowed focus:outline-none focus-visible:outline-none focus-visible:ring-0 tracking-wide";

export const Button = forwardRef<HTMLElement, ButtonProps>((props, ref) => {
  const {
    variant = "primary",
    size = "md",
    fullWidth,
    leftIcon,
    rightIcon,
    className,
    children,
  } = props;

  const cls = cn(
    baseCls,
    sizeCls[size],
    variantCls[variant],
    fullWidth && "w-full",
    className,
  );

  const content = (
    <>
      <span className="font-mono text-current opacity-70">[</span>
      {leftIcon && <span className="inline-flex">{leftIcon}</span>}
      <span className="inline-flex items-center">{children}</span>
      {rightIcon && <span className="inline-flex">{rightIcon}</span>}
      <span className="font-mono text-current opacity-70">]</span>
    </>
  );

  if (props.as === "link") {
    const { as: _as, to, variant: _v, size: _s, fullWidth: _f, leftIcon: _l, rightIcon: _r, className: _c, children: _ch, ...rest } = props;
    return (
      <Link
        ref={ref as any}
        to={to}
        className={cls}
        {...rest}
      >
        {content}
      </Link>
    );
  }

  if (props.as === "a") {
    const { as: _as, href, target, rel, ...rest } = props as ButtonAsAnchor;
    return (
      <a
        ref={ref as any}
        href={href}
        target={target}
        rel={rel}
        className={cls}
        {...(rest as any)}
      >
        {content}
      </a>
    );
  }

  const { as: _as, variant: _v, size: _s, fullWidth: _f, leftIcon: _l, rightIcon: _r, className: _c, children: _ch, ...rest } = props as ButtonAsButton;
  return (
    <button
      ref={ref as any}
      className={cls}
      {...rest}
    >
      {content}
    </button>
  );
});
Button.displayName = "Button";
