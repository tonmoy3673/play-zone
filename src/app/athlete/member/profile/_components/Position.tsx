"use client";

import Icon from "@/app/overview/content/_components/icon";
import { AnimatedButton } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

// Image assets from Figma
const imgImage341 =
  "https://www.figma.com/api/mcp/asset/4d85e8c9-a78f-4a30-a890-4b2764e85487";
const imgRectangle2103 =
  "https://www.figma.com/api/mcp/asset/41de75d3-55ac-497c-8929-94b1d9baccb5";

interface PositionProps {
  isOpen?: boolean;
  onClose?: () => void;
  athleteName?: string;
  joinDate?: string;
  avatar?: string;
}

const positionOptions = [
  { value: "point-guard", label: "Point Guard" },
  { value: "shooting-guard", label: "Shooting Guard" },
  { value: "small-forward", label: "Small Forward" },
  { value: "power-forward", label: "Power Forward" },
  { value: "center", label: "Center" },
];

export default function Position({
  isOpen = true,
  onClose,
  athleteName = "Jane Cooper",
  joinDate = "Joined 2 month ago",
  avatar = imgRectangle2103,
}: PositionProps) {
  const [selectedPosition, setSelectedPosition] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const selectedOption = positionOptions.find(
    (opt) => opt.value === selectedPosition
  );

  if (!isOpen) return null;

  return (
    <div className="bg-white rounded-2xl overflow-hidden relative w-full max-w-[737px]">
      {/* Background decorative element */}
      <div className="absolute bottom-[-1454px] left-[calc(50%+712px)] -translate-x-1/2 pointer-events-none opacity-30">
        <div className="rotate-60 -scale-y-100">
          <div className="blur-md h-[540px] w-[663px] relative">
            <Image
              src={imgImage341}
              alt=""
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="border-b border-[#ebf1ff] px-5 py-5 flex items-center justify-between">
        <h2 className="font-medium text-base leading-normal text-dark">
          Add Position
        </h2>
        <button
          onClick={onClose}
          className="size-6 flex items-center justify-center hover:opacity-70 transition-opacity"
        >
          <Icon name="cancel_circle" height={20} width={20} />
        </button>
      </div>

      {/* Content */}
      <div className="px-5 py-6 flex flex-col gap-4">
        {/* User Info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="border border-[#68b0ea] rounded-[44px] size-12 relative overflow-hidden shrink-0">
              <Image
                src={avatar}
                alt={athleteName}
                fill
                className="object-cover rounded-[44px]"
                unoptimized
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="font-medium text-base leading-normal text-dark">
                {athleteName}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <Icon
              name="calendar_03"
              height={16}
              width={16}
              className="text-paragraph-dark"
            />
            <p className="font-normal text-xs leading-[1.4] text-paragraph-dark">
              {joinDate}
            </p>
          </div>
        </div>

        {/* Program Position Dropdown */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center gap-1">
            <p className="font-medium text-sm leading-[1.3] text-dark">
              Program Position
            </p>
            <p className="font-normal text-[10px] leading-[1.4] text-paragraph-dark max-w-[445px]">
              Change this athlete&apos;s position for this program. Their main
              profile position will not be affected. This allows you to better
              organize your program members.
            </p>
          </div>
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-[#f8faff] w-full h-14 px-5 py-4 rounded-2xl flex items-center justify-between hover:bg-[#f0f5ff] transition-colors"
            >
              <span
                className={cn(
                  "font-normal text-sm leading-[1.3]",
                  selectedOption ? "text-dark" : "text-dark"
                )}
              >
                {selectedOption ? selectedOption.label : "Specific Position"}
              </span>
              <span className="size-6 flex items-center justify-center">
                <Icon
                  name="arrow_right_01"
                  height={16}
                  width={16}
                  className="text-dark transition-transform rotate-90"
                />
              </span>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-[#ebf1ff] rounded-2xl shadow-lg z-10 overflow-hidden">
                {positionOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      setSelectedPosition(option.value);
                      setIsDropdownOpen(false);
                    }}
                    className={cn(
                      "w-full px-5 py-3 text-left font-normal text-sm leading-[1.3] text-dark hover:bg-[#f8faff] transition-colors",
                      selectedPosition === option.value && "bg-[#f8faff]"
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[#ebf1ff] px-5 py-5 flex items-center justify-between">
        <AnimatedButton
          onClick={onClose}
          className="bg-linear-to-b from-[rgba(69,127,243,0.05)] to-[rgba(69,127,243,0.12)] border border-[rgba(69,127,243,0.1)] px-4 py-3 rounded-[61px] flex items-center justify-center"
        >
          <span className="primary-gradient-text font-medium text-sm leading-[1.3]">
            Cancel
          </span>
        </AnimatedButton>
        <AnimatedButton
          onClick={() => {
            // Handle save changes
            onClose?.();
          }}
          className="bg-primary-gradient text-white px-4 py-3 rounded-[61px] flex items-center justify-center border border-[rgba(21,86,216,0.3)]"
        >
          <span className="font-medium text-sm leading-[1.3]">
            Save Changes
          </span>
        </AnimatedButton>
      </div>
    </div>
  );
}
