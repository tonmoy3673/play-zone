import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  spinnerClassName?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, isLoading, spinnerClassName, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "rounded-md px-5 py-2 text-base font-medium hover:brightness-110 transition-all duration-300 active:scale-[0.99] ",
          className
        )}
        {...props}
        disabled={isLoading}
      >
        {isLoading && (
          <p
            className={cn(
              "mr-1 inline-block h-5 w-5 animate-spin rounded-full border-[3px] border-white border-t-[#6A6EF6]",
              spinnerClassName
            )}
          />
        )}

        {props.children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;

export const AnimatedButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, isLoading, spinnerClassName, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "rounded-md px-5 py-2 text-base font-medium hover:brightness-110 transition-all duration-300 active:scale-[0.99] group relative inline-flex items-center justify-center overflow-hidden  hover:scale-105",
          className
        )}
        {...props}
        disabled={isLoading}
      >
        {isLoading && (
          <p
            className={cn(
              "mr-1 inline-block h-5 w-5 animate-spin rounded-full border-[3px] border-white border-t-[#6A6EF6]",
              spinnerClassName
            )}
          />
        )}
        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
          <div className="relative h-full w-8 bg-white/20"></div>
        </div>
        {props.children}
      </button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";
