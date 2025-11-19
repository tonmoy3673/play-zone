/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import type React from "react";
import { cn } from "../../lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  label?: string;
  leftIcon?: any;
}

const Textarea = ({
  className,
  error,
  label,
  leftIcon = "",
  ...props
}: TextareaProps): React.ReactElement => {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-3 block text-sm font-medium text-dark">
          {label}
        </label>
      )}

      <div className="relative">
        {leftIcon && (
          <p className="size-15 absolute top-4 left-4">{leftIcon}</p>
        )}

        <textarea
          className={cn(
            "w-full rounded-xl bg-[#ffffff80] min-h-32 p-5 text-sm text-gray-900 placeholder:text-placeholder focus:outline-none border border-white resize-none",
            error ? "border-red-500" : "focus:border-[#5C8FF7]",
            leftIcon && "pl-13 pt-4",
            className
          )}
          {...props}
        />
      </div>

      {error && <p className="mt-2 text-sm font-light text-red-500">{error}</p>}
    </div>
  );
};

export default Textarea;
