import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import Icon from "@/utils/icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  spinnerClassName?: string;
}

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  spinnerClassName?: string;
  iconName?: string;
  iconWidth?: number;
  iconHeight?: number;
  bg?: string;
  textColor?: string;
  variant?: 'primary' | 'secondary' | 'danger' | 'custom';
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

export const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ 
    className, 
    isLoading, 
    spinnerClassName, 
    iconName,
    iconWidth = 16,
    iconHeight = 16,
    bg,
    textColor = "text-white",
    variant = "custom",
    children,
    style,
    ...props 
  }, ref) => {
    
    
    // Predefined variant styles
    const getVariantStyles = () => {
      switch (variant) {
        case 'primary':
          return {
            background: "linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%)",
            color: "#fff"
          };
        case 'secondary':
          return {
            background: "rgba(69, 127, 243, 0.15)",
            border: "1px solid rgba(21, 86, 216, 0.10)",
            color: "#276AEE"
          };
        case 'danger':
          return {
            background: "linear-gradient(148deg, #EB5C5C 16.41%, #F00 59.87%)",
            color: "#fff"
          };
        default:
          return {};
      }
    };

    const variantStyles = getVariantStyles();
    const combinedStyle = {
      ...variantStyles,
      ...(bg && { background: bg }),
      ...style
    };

    return (
      <button
        ref={ref}
        className={cn(
          "rounded-md px-5 py-2 text-base font-medium hover:brightness-110 transition-all duration-300 active:scale-[0.99] group relative inline-flex items-center justify-center overflow-hidden hover:scale-105",
          variant !== 'custom' ? '' : textColor,
          className
        )}
        style={combinedStyle}
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
        <div className="absolute inset-0 flex h-full w-full justify-center transform-[skew(-12deg)_translateX(-100%)]">
          <div className="relative h-full w-8 bg-white/20"></div>
        </div>
        <div className="relative z-10 flex items-center gap-2">
          {iconName && (
            <Icon name={iconName as any} width={iconWidth} height={iconHeight} />
          )}
          {children}
        </div>
      </button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";
