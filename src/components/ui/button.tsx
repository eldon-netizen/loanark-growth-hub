import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 ease-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden min-h-[44px] min-w-[44px]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-custom-md active:translate-y-0 active:shadow-custom-sm",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:-translate-y-0.5 hover:shadow-custom-md active:translate-y-0 active:shadow-custom-sm",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:-translate-y-0.5 hover:shadow-custom-md active:translate-y-0 active:shadow-custom-sm",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:-translate-y-0.5 hover:shadow-custom-md active:translate-y-0 active:shadow-custom-sm",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:-translate-y-0.5 hover:shadow-custom-sm",
        link: "text-primary underline-offset-4 hover:underline",
        heroPrimary: "bg-loanark-red hover:bg-loanark-red/90 text-white font-semibold shadow-glow hover:scale-105 hover:-translate-y-1 hover:shadow-custom-lg hover:brightness-105",
        heroOutline: "border-2 border-loanark-light-blue bg-loanark-navy/60 text-primary-foreground hover:bg-loanark-light-blue hover:text-loanark-navy font-semibold backdrop-blur-sm hover:-translate-y-0.5 hover:shadow-custom-md",
        serviceOutline: "border border-loanark-blue text-loanark-blue hover:bg-loanark-blue hover:text-white hover:-translate-y-0.5 hover:shadow-custom-md active:translate-y-0 active:shadow-custom-sm",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        hero: "h-auto px-8 py-4 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
