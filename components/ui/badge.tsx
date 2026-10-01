import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-white shadow hover:bg-blue-600",
        secondary:
          "border-transparent bg-secondary text-text-primary hover:bg-zinc-700",
        destructive:
          "border-transparent bg-destructive text-white shadow hover:bg-red-600",
        outline: "text-text-primary border-border",
        success: "border-transparent bg-accent-success/20 text-accent-success border-accent-success/30",
        warning: "border-transparent bg-accent-warning/20 text-accent-warning border-accent-warning/30",
        danger: "border-transparent bg-accent-danger/20 text-accent-danger border-accent-danger/30",
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
