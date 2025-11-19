"use client";

import { cn } from "@/lib/utils";
import Icon from "@/utils/icon";
import { useState, useRef, useEffect } from "react";
import type React from "react";

export interface SelectOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface SelectProps {
  label?: string;
  labelClassName?: string;
  error?: string;
  placeholder?: string;
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const Select = ({
  label,
  labelClassName,
  error,
  placeholder = "Select an option",
  options,
  value,
  onChange,
  className = "",
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (optionValue: string) => {
    onChange?.(optionValue);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef}>
      {label && (
        <label
          className={cn(
            "mb-2 block text-sm font-medium text-dark",
            labelClassName
          )}
        >
          {label}
        </label>
      )}
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            `w-full rounded-2xl border border-white bg-[#ffffff80] backdrop-blur-sm px-4 py-4 text-left text-dark placeholder:text-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all flex items-center justify-between ${
              error ? "border-red-500" : ""
            }`,
            className
          )}
        >
          <span
            className={cn(
              "whitespace-nowrap text-sm font-medium text-dark",
              selectedOption ? "text-dark" : "text-[#141b34b3]"
            )}
          >
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <Icon
            name="chevron_down"
            height={20}
            width={20}
            className={cn(
              "text-[#5C8FF7] transition-transform",
              isOpen ? "rotate-180" : ""
            )}
          />
        </button>

        {/* Dropdown */}
        {isOpen && (
          <div className="absolute z-[9999999] w-full px-2 space-y-1 py-4 mt-2 rounded-xl border border-white bg-white/95 backdrop-blur-sm shadow-lg overflow-hidden">
            {options.map((option) => {
              const isSelected = option.value === value;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  className={`w-full px-4 py-2.5 rounded-md text-left hover:bg-[#F7F8FF] transition-colors flex items-center justify-between group ${
                    isSelected ? "bg-[#F7F8FF]" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {option.icon && (
                      <div className="text-[#141b3499] w-5 h-5 flex items-center justify-center">
                        {option.icon}
                      </div>
                    )}
                    <span className="text-dark whitespace-nowrap text-sm font-normal">
                      {option.label}
                    </span>
                  </div>
                  {isSelected && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="21"
                      viewBox="0 0 22 21"
                      fill="none"
                    >
                      <path
                        d="M1.5 10.5C1.5 6.02166 1.5 3.78249 2.89124 2.39124C4.28249 1 6.52166 1 11 1C15.4783 1 17.7175 1 19.1088 2.39124C20.5 3.78249 20.5 6.02166 20.5 10.5C20.5 14.9783 20.5 17.2175 19.1088 18.6088C17.7175 20 15.4783 20 11 20C6.52166 20 4.28249 20 2.89124 18.6088C1.5 17.2175 1.5 14.9783 1.5 10.5Z"
                        stroke="url(#paint0_linear_5218_5474)"
                        strokeWidth="1.5"
                      />
                      <path
                        opacity="0.4"
                        d="M7 11L9.5 13.5L15 7.5"
                        stroke="url(#paint1_linear_5218_5474)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_5218_5474"
                          x1="9.14453"
                          y1="2.65369"
                          x2="9.61427"
                          y2="13.1306"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#5C8FF7" />
                          <stop offset="1" stopColor="#276AEE" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_5218_5474"
                          x1="10.2187"
                          y1="8.02222"
                          x2="10.3301"
                          y2="11.3336"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#5C8FF7" />
                          <stop offset="1" stopColor="#276AEE" />
                        </linearGradient>
                      </defs>
                    </svg>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Select;
