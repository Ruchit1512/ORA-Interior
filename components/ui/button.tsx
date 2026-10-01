import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-bronze-400 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-bronze-500 text-charcoal-950 font-semibold shadow-md hover:bg-bronze-400 hover:shadow-bronze-500/20 hover:shadow-lg",
        secondary:
          "bg-charcoal-800 text-ivory-100 border border-charcoal-700 hover:bg-charcoal-700 hover:border-bronze-500/40",
        outline:
          "border border-bronze-500/40 text-bronze-300 bg-transparent hover:bg-bronze-500/10 hover:border-bronze-400",
        ghost:
          "text-ivory-200 hover:bg-charcoal-800/80 hover:text-ivory-50",
        link: "text-bronze-400 underline-offset-4 hover:underline",
        whatsapp:
          "bg-emerald-600 text-white font-semibold hover:bg-emerald-500 shadow-md hover:shadow-emerald-600/20",
      },
      size: {
        default: "h-11 px-6 py-2 rounded-sm",
        sm: "h-9 px-4 rounded-sm text-xs",
        lg: "h-13 px-8 py-3 rounded-sm text-base",
        icon: "h-10 w-10 rounded-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
