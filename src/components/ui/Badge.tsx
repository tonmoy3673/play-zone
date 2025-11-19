import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "danger" | "secondary" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Badge = ({ children, variant = "default", className }: BadgeProps) => {
  const backgroundColors = {
    default:
      "bg-[linear-gradient(180deg,rgba(69,127,243,0.05)_0%,rgba(69,127,243,0.12)_100%)] border-[#457FF31A]",
    success:
      "bg-[linear-gradient(180deg,rgba(0,226,128,0.05)_0%,rgba(0,124,70,0.12)_100%)] border-[#00E2801A]",
    warning:
      "bg-[linear-gradient(180deg,rgba(235,158,15,0.12)_0%,rgba(235,158,15,0.15)_100%)] border-[#EB9E0F1A]",
    secondary:
      "bg-[linear-gradient(180deg,rgba(120,78,248,0.12)_0%,rgba(120,78,248,0.20)_100%)] border-[#784EF81A]",
    danger:
      "bg-[linear-gradient(180deg,rgba(255,0,51,0.05)_0%,rgba(255,0,51,0.12)_100%)] border-[#FF00331A]",
    dark: "bg-[linear-gradient(180deg,rgba(183,183,183,0.12)_0%,rgba(183,183,183,0.15)_100%)] border-[#B7B7B71A]",
  };

  const textColors = {
    default: "primary-gradient-text",
    success: "text-[#027A48]",
    warning:
      "bg-[linear-gradient(207deg,#FFB42A_39.14%,#EB9E0F_71.52%)] bg-clip-text text-transparent",
    secondary: "text-[#784EF8]",
    danger: "text-[#F03]",
    dark: "text-dark/70",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center font-medium overflow-hidden rounded-full px-3 border h-6 text-[10px]",
        backgroundColors[variant],
        className
      )}
    >
      <span
        className={cn("inline-flex items-center gap-1.5 whitespace-nowrap", textColors[variant])}
      >
        {children}
      </span>
    </span>
  );
};

export default Badge;
