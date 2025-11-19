import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const ProgressBar = ({
  percentage,
  label,
  className,
  percentageClass,
  labelClass,
  percentageText,
  showPercentage = true,
  percentageTextClass,
  isThumbIndicator,
}: {
  percentage: number;
  label?: string;
  className?: string;
  percentageClass?: string;
  labelClass?: string;
  showPercentage?: boolean;
  percentageText?: string;
  percentageTextClass?: string;
  isThumbIndicator?: boolean;
}) => {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="flex items-center justify-between">
        {label && (
          <p className={cn("font-medium text-[10px] text-dark/70", labelClass)}>
            {label}
          </p>
        )}
        <div className="flex items-center gap-1">
          {percentageText && (
            <span
              className={cn(
                "text-[10px] font-medium text-dark",
                percentageTextClass
              )}
            >
              {percentageText}
            </span>
          )}
          {showPercentage && (
            <p className={cn("text-sm text-dark font-medium", percentageClass)}>
              {percentage}%
            </p>
          )}
        </div>
      </div>

      <div className="w-full relative h-2.5 bg-[#C4D4FD] rounded-full">
        <div
          style={{
            width: `${percentage}%`,
          }}
          className={`h-full bg-[linear-gradient(90deg,#7180DF_0%,#2C49FF_100%)] rounded-full`}
        ></div>
        <Image
          className={`absolute top-1/2 -translate-y-1/2 -translate-x-[60%]`}
          style={{
            left: `${percentage}%`,
          }}
          height={12}
          width={12}
          alt="Thumb Indicator"
          src={"/thumb-indicator.png"}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
