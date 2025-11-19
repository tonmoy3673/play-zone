"use client";
import React, { useState } from "react";

interface Badge {
  id: string;
  title: string;
  description: string;
  gradientColor: string;
  textColor: "white" | "dark";
  gradientPosition?: string;
}

interface BadgeSelectorProps {
  selectedBadges?: string[];
  onBadgeToggle?: (badgeId: string) => void;
}

const BadgeSelector: React.FC<BadgeSelectorProps> = ({
  selectedBadges = [],
  onBadgeToggle,
}) => {
  const [localSelectedBadges, setLocalSelectedBadges] =
    useState<string[]>(selectedBadges);

  const badges: Badge[] = [
    {
      id: "top-effort",
      title: "Top Effort",
      description: "Awarded for exceptional quality or effort in submission",
      gradientColor:
        "linear-gradient(135deg, #5C8FF7 0%, #276AEE 50%, #1E5DD4 100%)",
      textColor: "white",
      gradientPosition: "right",
    },
    {
      id: "fastest-submission",
      title: "Fastest Submission",
      description: "First athlete to complete the task gets this badge",
      gradientColor:
        "linear-gradient(135deg, #FFD89B 0%, #FF9A56 50%, #FF6B6B 100%)",
      textColor: "dark",
      gradientPosition: "center",
    },
    {
      id: "custom-badge",
      title: "Custom Badge",
      description:
        "For athletes showing significant improvement from previous attempts",
      gradientColor:
        "linear-gradient(135deg, #667EEA 0%, #764BA2 50%, #5A3D7A 100%)",
      textColor: "white",
      gradientPosition: "left",
    },
  ];

  const handleBadgeClick = (badgeId: string) => {
    const newSelected = localSelectedBadges.includes(badgeId)
      ? localSelectedBadges.filter((id) => id !== badgeId)
      : [...localSelectedBadges, badgeId];

    setLocalSelectedBadges(newSelected);
    onBadgeToggle?.(badgeId);
  };

  return (
    <div className="bg-[#FFFFFF99] rounded-[30px] p-8">
      <div className="flex flex-col gap-1 mb-6" style={{ gap: "4px" }}>
        <h3 className="text-[14px] font-medium text-dark leading-[1.3]">
          Earn Badges
        </h3>
        <p className="text-[12px] font-normal text-paragraph-dark leading-[1.4]">
          Select which badges athletes can earn by completing this task
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {badges.map((badge) => {
          const isSelected = localSelectedBadges.includes(badge.id);
          const textColorClass =
            badge.textColor === "white" ? "text-white" : "text-dark";
          const descriptionColorClass =
            badge.textColor === "white" ? "text-white" : "text-paragraph-dark";
          const backgroundImage =
            badge.id === "top-effort"
              ? "/top-effort.png"
              : badge.id === "fastest-submission"
              ? "/fastest-submission.png"
              : badge.id === "custom-badge"
              ? "/custom-badge.png"
              : undefined;
          const hasImageBackground = Boolean(backgroundImage);

          return (
            <div
              key={badge.id}
              onClick={() => handleBadgeClick(badge.id)}
              className={`
                                relative h-[164px] rounded-[16px] cursor-pointer transition-all duration-200 overflow-hidden w-full
                                ${
                                  isSelected
                                    ? "border-2 border-[#5c8ff7] shadow-lg"
                                    : "border-2 border-transparent hover:border-[#5c8ff7]/50"
                                }
                            `}
            >
              {/* Base Background */}
              {!hasImageBackground && (
                <div className="absolute inset-0 bg-[rgba(255,255,255,0.6)]" />
              )}

              {/* Main Gradient Background */}
              {hasImageBackground ? (
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${backgroundImage})` }}
                />
              ) : (
                <div
                  className="absolute inset-0"
                  style={{
                    background: badge.gradientColor,
                    opacity: badge.id === "fastest-submission" ? 0.5 : 0.7,
                  }}
                />
              )}

              {/* Blend Mode Overlay for specific badges */}
              {!hasImageBackground && badge.id === "custom-badge" && (
                <div
                  className="absolute inset-0"
                  style={{
                    background: badge.gradientColor,
                    opacity: 0.2,
                    mixBlendMode: "color-dodge",
                  }}
                />
              )}

              {/* Additional gradient layer for depth */}
              {!hasImageBackground && badge.id === "fastest-submission" && (
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 0%, rgba(255, 107, 107, 0.6) 0%, transparent 60%)",
                  }}
                />
              )}

              {!hasImageBackground && badge.id === "custom-badge" && (
                <div
                  className="absolute inset-0 opacity-25"
                  style={{
                    background:
                      "radial-gradient(circle at 70% 30%, rgba(118, 75, 162, 0.7) 0%, transparent 70%)",
                  }}
                />
              )}

              {/* Content */}
              <div className="relative h-full flex flex-col justify-center items-start p-4 z-10">
                <div className="flex flex-col gap-2" style={{ gap: "8px" }}>
                  <h4
                    className={`text-[14px] font-semibold leading-[1.3] ${textColorClass} drop-shadow-sm`}
                  >
                    {badge.title}
                  </h4>
                  <p
                    className={`text-[12px] font-normal leading-[1.4] ${descriptionColorClass} drop-shadow-sm`}
                    style={{ maxWidth: "229px" }}
                  >
                    {badge.description}
                  </p>
                </div>
              </div>

              {/* Checkmark Icon (when selected) */}
              {isSelected && (
                <div className="absolute top-[13px] right-[13px] z-20">
                  <div className="w-[18px] h-[18px] rounded-full bg-[#5c8ff7] flex items-center justify-center shadow-md">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M10 3L4.5 8.5L2 6"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BadgeSelector;
