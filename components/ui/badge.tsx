import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-bronze-500/10 text-bronze-400 border border-bronze-500/30",
        secondary:
          "bg-charcoal-800 text-ivory-200 border border-charcoal-700",
        outline:
          "border border-charcoal-700 text-ivory-300",
        accent:
          "bg-bronze-500 text-charcoal-950 font-semibold",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
