/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import type React from "react";
import { cn } from "../../lib/utils";
import { useState } from "react";
import countriesData from "../../lib/countries";
import Icon, { IconName } from "@/utils/icon";

export interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
  leftIcon?: IconName;
  leftIconClassName?: string;
  rightIcon?: IconName;
  rightIconClassName?: string;
}

const Input = ({
  className,
  error,
  label,
  type = "text",
  leftIcon,
  leftIconClassName = "",
  rightIcon,
  rightIconClassName = "",
  ...props
}: FormInputProps &
  React.InputHTMLAttributes<HTMLInputElement>): React.ReactElement => {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-3 block text-sm font-medium text-dark">
          {label}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <Icon
            name={leftIcon}
            height={24}
            width={24}
            className={cn(
              "absolute left-4 top-1/2 -translate-y-1/2 text-dark/70",
              leftIconClassName
            )}
          />
        )}

        {rightIcon && (
          <Icon
            name={rightIcon}
            height={24}
            width={24}
            className={cn(
              "absolute right-4 top-1/2 -translate-y-1/2 text-dark/70",
              rightIconClassName
            )}
          />
        )}

        <input
          type={type}
          className={cn(
            "w-full rounded-2xl bg-[#ffffff80] h-13 px-5  text-sm text-dark placeholder:text-placeholder focus:outline-none  border border-white",
            error ? "border-red-500" : "focus:border-[#5C8FF7]",
            leftIcon && "pl-13",
            className
          )}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-2 h-1 text-sm font-light text-red-500">{error}</p>
      )}
    </div>
  );
};

export default Input;

export interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
  leftIcon?: any;
  countrySelectClassName?: string;
}

export const PhoneInput = ({
  className,
  error,
  label,
  type = "text",
  leftIcon = "",
  countrySelectClassName = "",
  ...props
}: FormInputProps &
  React.InputHTMLAttributes<HTMLInputElement>): React.ReactElement => {
  const [selectedCountry, setSelectedCountry] = useState(countriesData[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className="w-full">
      {label && (
        <label className="mb-2 block text-sm font-medium text-dark">
          {label}
        </label>
      )}
      <div className={`relative flex gap-2 items-start`}>
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={cn(
              `flex items-center gap-2 px-3  rounded-2xl border-r w-24 bg-[#ffffff80] border border-white h-13 focus:outline-none`,
              countrySelectClassName
            )}
          >
            <img
              src={`https://flagsapi.com/${selectedCountry.code}/flat/32.png`}
              alt={selectedCountry.name}
              className="size-7 object-cover rounded-full"
            />
            {selectedCountry?.dialCode}
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <>
              {/* Backdrop to close dropdown */}
              <div
                className="fixed inset-0 z-10"
                onClick={() => setIsDropdownOpen(false)}
              />

              {/* Dropdown Content */}
              <div
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                className={`absolute left-0 top-full mt-1 w-72 max-h-60  overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg z-20 transition-all duration-300 ease-in-out `}
              >
                <div className="py-1">
                  {countriesData.map((country) => (
                    <button
                      key={country.code}
                      type="button"
                      onClick={() => {
                        setSelectedCountry(country);
                        setIsDropdownOpen(false);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-100 text-left"
                    >
                      <img
                        src={`https://flagsapi.com/${country.code}/flat/32.png`}
                        alt={country.name}
                        className="w-6 h-4 object-cover rounded-sm flex-shrink-0"
                      />
                      <span className="text-sm font-medium flex-1">
                        {country.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {country.dialCode}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
        <input
          type={type}
          className={cn(
            "w-full rounded-2xl bg-[#ffffff80] h-13 px-6  text-sm text-gray-900 placeholder:text-placeholder focus:outline-none  border border-white",
            error ? "border-red-500" : "focus:border-[#5C8FF7]",
            leftIcon && "pl-13",
            className
          )}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-2 h-1 text-sm font-light text-red-500">{error}</p>
      )}
    </div>
  );
};
