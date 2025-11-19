"use client";
import { useState } from "react";

// Figma assets (temporary CDN, may expire after 7 days)
const videoThumb =
  "https://www.figma.com/api/mcp/asset/51420b66-a86a-4dbb-a808-4e01b1338d50";
const playIcon =
  "https://www.figma.com/api/mcp/asset/2ca23724-aa9d-4c4f-905d-1ff4be3a555f";
const avatarImg =
  "https://www.figma.com/api/mcp/asset/5f61f9f5-a27e-4abe-8662-9da8b48dd0c6";

// Collections
const detailRows = [
  { label: "Task:", value: "Passing Drill Submission" },
  { label: "Submitted:", value: "Today, 10:45 AM" },
  { label: "Due Date:", value: "June 7, 2023" },
];

const feedbackTypes = [
  { key: "physical", label: "Physical" },
  { key: "technical", label: "Technical" },
  { key: "mental", label: "Mental" },
];

const badgeOptions = [
  {
    key: "top-effort",
    label: "Top Effort",
    textClass: "text-[#027a48]",
    gradient:
      "from-[rgba(0,226,128,0.05)] to-[rgba(0,124,70,0.12)] border-[rgba(0,226,128,0.1)]",
  },
  {
    key: "perfect-form",
    label: "Perfect Form",
    textClass: "text-[#2a6be8]",
    gradient:
      "from-[rgba(69,127,243,0.05)] to-[rgba(69,127,243,0.12)] border-[rgba(69,127,243,0.1)]",
  },
  {
    key: "improved",
    label: "Improved",
    textClass: "text-[#784ef8]",
    gradient:
      "from-[rgba(120,78,248,0.05)] to-[rgba(120,78,248,0.12)] border-[rgba(120,78,248,0.1)]",
  },
  {
    key: "creative",
    label: "Creative",
    textClass: "text-[#ff0033]",
    gradient:
      "from-[rgba(255,0,51,0.05)] to-[rgba(255,0,51,0.12)] border-[rgba(255,0,51,0.1)]",
  },
];

export default function Page() {
  const [rating, setRating] = useState(4);
  const [feedback, setFeedback] = useState("");
  const [selectedType, setSelectedType] = useState("technical");
  const [selectedBadges, setSelectedBadges] = useState(["top-effort"]);

  function toggleBadge(key: string) {
    setSelectedBadges((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  }

  return (
    <div className="min-h-screen bg-[#e7f2f5] p-6 flex justify-center">
      <div className="w-full max-w-[1200px] bg-white/30 rounded-[24px] p-6 flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-dark text-[30px] leading-[1.5] font-semibold">
              Passing Drill Review Submission
            </h2>
            <p className="text-[12px] text-[#141b34b3] mt-1">
              Review athlete submissions and provide feedback on their progress.
            </p>
          </div>
          <button className="px-6 py-3 rounded-full border border-[rgba(21,86,216,0.3)] text-white bg-gradient-to-r from-[#4d8ffb] to-[#2a6be8]">
            Create New Task
          </button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: Submission Details */}
          <div className="bg-white/60 rounded-[16px] p-5">
            {/* Video */}
            <div className="relative overflow-hidden rounded-[16px] h-[245px]">
              <img
                src={videoThumb}
                alt="submission video"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <button
                type="button"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center"
                aria-label="Play video"
              >
                <img src={playIcon} alt="play" className="w-6 h-6" />
              </button>
            </div>

            {/* Details */}
            <div className="mt-6">
              <h3 className="text-dark text-[16px] font-medium">
                Submission Details
              </h3>

              {/* Athlete */}
              <div className="flex items-center gap-3 mt-4">
                <img
                  src={avatarImg}
                  alt="athlete avatar"
                  className="w-9 h-9 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-[14px] font-medium text-dark">
                    Jason Martinez
                  </span>
                  <span className="text-[12px] text-[#141b34b3]">
                    Quarterback • Senior
                  </span>
                </div>
              </div>

              <div className="my-4 border-t border-[#e5e7eb]" />

              {/* Log rows */}
              <div className="flex flex-col gap-3">
                <p className="text-[14px] font-medium text-dark">
                  Conditioning Log
                </p>
                <div className="flex flex-col gap-2">
                  {detailRows.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between text-[12px]"
                    >
                      <span className="text-[#141b34b3]">{row.label}</span>
                      <span className="text-dark text-[10px]">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="my-4 border-t border-[#e5e7eb]" />

              {/* Notes */}
              <div className="flex flex-col gap-2">
                <p className="text-[14px] font-medium text-dark">
                  Athlete Notes:
                </p>
                <p className="text-[12px] text-[#141b34b3]">
                  I focused on my follow-through and keeping my elbow high
                  during the throw. Included slow-motion clips at 0:45 and 1:32
                  to highlight my mechanics.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Provide Feedback */}
          <div className="bg-white/60 rounded-[16px] p-5 flex flex-col gap-6">
            <h3 className="text-dark text-[16px] font-medium">
              Provide Feedback
            </h3>

            {/* Rating */}
            <div>
              <p className="text-[14px] font-medium text-dark mb-3">Rating</p>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }, (_, i) => i + 1).map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="w-5 h-5"
                    aria-label={`Set rating ${star}`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className={
                        star <= rating ? "fill-yellow-400" : "fill-gray-300"
                      }
                    >
                      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            {/* Feedback textarea */}
            <div>
              <p className="text-[14px] font-medium text-dark mb-3">
                Provide Feedback
              </p>
              <textarea
                className="w-full min-h-[96px] rounded-[16px] bg-white p-3 text-[12px] text-dark placeholder:text-[#141b34b3] outline-none"
                placeholder="Provide detailed feedback on the athlete's performance..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
            </div>

            {/* Feedback type chips */}
            <div>
              <p className="text-[14px] font-medium text-dark mb-3">
                Feedback Type
              </p>
              <div className="grid grid-cols-3 gap-2">
                {feedbackTypes.map((type) => {
                  const active = selectedType === type.key;
                  return (
                    <button
                      key={type.key}
                      type="button"
                      onClick={() => setSelectedType(type.key)}
                      className={`px-4 py-3 rounded-[16px] bg-white text-[10px] font-medium text-dark border ${
                        active
                          ? "border-[#2a6be8] ring-2 ring-[#2a6be8]/20"
                          : "border-transparent"
                      }`}
                    >
                      {type.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Award badges */}
            <div>
              <p className="text-[14px] font-medium text-dark mb-3">
                <span>Award Badges </span>
                <span className="text-[#141b3499]">(Optional)</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {badgeOptions.map((badge) => {
                  const active = selectedBadges.includes(badge.key);
                  return (
                    <button
                      key={badge.key}
                      type="button"
                      onClick={() => toggleBadge(badge.key)}
                      className={`px-3 py-2 rounded-full border text-[10px] font-medium bg-gradient-to-b ${
                        badge.gradient
                      } ${active ? "ring-2 ring-black/10" : ""}`}
                    >
                      <span className={badge.textClass}>{badge.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-2">
              <button className="px-4 py-3 rounded-full bg-gradient-to-b from-[rgba(69,127,243,0.05)] to-[rgba(69,127,243,0.12)] border border-[rgba(69,127,243,0.1)] text-[14px] font-medium text-[#2a6be8]">
                Save Draft
              </button>
              <button className="px-4 py-3 rounded-full border border-[rgba(21,86,216,0.3)] bg-gradient-to-r from-[#4d8ffb] to-[#2a6be8] text-white text-[14px] font-medium">
                Complete Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
