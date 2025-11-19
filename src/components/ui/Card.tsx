import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "relative bg-white/30 rounded-2xl md:rounded-3xl p-5 border border-white/80 overflow-hidden backdrop-blur-3xl z-[1]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
