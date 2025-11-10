/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";

export interface RangeProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onValueChange?: (value: number) => void;
  readOnly?: boolean;
  trackColor?: string;
  fillGradient?: string;
  height?: number | string;
}

const Range: React.FC<RangeProps> = ({
  value,
  min = 0,
  max = 100,
  step = 1,
  onValueChange,
  readOnly = true,
  trackColor = "#C4D4FD",
  fillGradient = "linear-gradient(to bottom, #7180DF, #2C49FF)",
  height = "0.375rem",
  ...rest
}) => {
  const pct = Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100));

  return (
    <div className="relative w-full" style={{ height }}>
      <div className="absolute inset-0">
        <div
          style={{ background: trackColor, height, borderRadius: 9999 }}
          className="w-full"
        />
      </div>

      <div className="absolute inset-0">
        <div
          style={{
            width: `${pct}%`,
            height,
            borderRadius: 9999,
            background: fillGradient,
          }}
          className="transition-all"
        />
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        readOnly={readOnly}
        onChange={(e) => {
          const v = Number(e.target.value);
          onValueChange && onValueChange(v);
          // also call native onChange if provided via rest
          if (rest.onChange) rest.onChange(e as any);
        }}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        {...rest}
      />
    </div>
  );
};

export default Range;
