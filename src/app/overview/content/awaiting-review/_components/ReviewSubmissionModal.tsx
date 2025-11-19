"use client";

import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Icon, { IconName } from "../../_components/icon";
import BadgesModal from "./BadgesModal";

// Define the Badge type
type Badge = {
  id: string;
  icon: IconName;
  label: string;
  gradient: string;
  border: string;
  text: string;
};

interface ReviewSubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReviewSubmissionModal({
  isOpen,
  onClose,
}: ReviewSubmissionModalProps) {
  const [rating, setRating] = useState(4);
  const [feedback, setFeedback] = useState("");
  const [feedbackType, setFeedbackType] = useState<
    "physical" | "technical" | "mental"
  >("physical");
  const [selectedBadges, setSelectedBadges] = useState<string[]>([]);
  const [actionType, setActionType] = useState<"follow-up" | "schedule">(
    "follow-up"
  );
  const [isBadgesModalOpen, setIsBadgesModalOpen] = useState(false);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleBadge = (badge: string) => {
    setSelectedBadges((prev) =>
      prev.includes(badge) ? prev.filter((b) => b !== badge) : [...prev, badge]
    );
  };

  if (!isOpen || !mounted) return null;

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/20" onClick={onClose} />

      {/* Modal Content */}
      <div className="relative z-10 bg-[#e7f2f5] w-full max-w-[1283px] max-h-[calc(100vh-2rem)] flex flex-col rounded-[24px] shadow-2xl">
        {/* Header */}
        <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-4 md:px-8 lg:px-[120px] pt-4 pb-2 flex-shrink-0">
          <div className="flex flex-col gap-1 items-start flex-1 min-w-0">
            <h2 className="text-xl md:text-2xl lg:text-[30px] font-semibold text-dark leading-normal break-words">
              Passing Drill Review Submission
            </h2>
            <p className="text-xs font-normal text-paragraph-dark leading-[1.4]">
              Review athlete submissions and provide feedback on their progress.
            </p>
          </div>
          <button
            onClick={() => setIsBadgesModalOpen(true)}
            className="border border-[rgba(21,86,216,0.3)] rounded-[66px] flex items-center gap-2 px-3 md:px-6 py-2 md:py-4 hover:opacity-80 transition-opacity bg-primary-gradient shrink-0"
          >
            <Plus className="size-4 md:size-6 text-white" />
            <span className="text-xs md:text-sm font-medium text-white whitespace-nowrap">
              Create New Task
            </span>
          </button>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute left-4 md:left-8 top-4 bg-[rgba(255,255,255,0.3)] rounded-[66px] size-10 md:size-14 flex items-center justify-center hover:bg-[rgba(255,255,255,0.4)] transition-colors z-20"
        >
          <Icon name="arrow_left_02_round" height={24} width={24} />
        </button>

        {/* Content */}
        <div className="relative flex flex-col lg:flex-row gap-4 lg:gap-6 px-4 md:px-8 pb-4 md:pb-8 pt-2 flex-1 min-h-0">
          {/* Left Panel - Submission Details */}
          <div className="bg-[rgba(255,255,255,0.6)] rounded-[16px] w-full lg:w-[601px] min-h-[400px] lg:min-h-[628px] relative shrink-0 flex flex-col">
            {/* Video Thumbnail */}
            <div className="bg-[rgba(39,106,238,0.06)] h-[245px] mx-5 mt-5 rounded-[16px] overflow-hidden relative shrink-0">
              <img
                src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop"
                alt="Video thumbnail"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[rgba(255,255,255,0.02)] rounded-[60px] size-10 flex items-center justify-center">
                  <Icon name="play" height={24} width={24} />
                </div>
              </div>
            </div>

            {/* Submission Details */}
            <div className="flex flex-col gap-4 px-4 md:px-5 py-4 md:py-5 flex-1">
              <h3 className="text-base font-medium text-dark leading-normal">
                Submission Details
              </h3>

              <div className="flex flex-col gap-4">
                {/* Athlete Info */}
                <div className="flex items-center gap-[43px]">
                  <div className="flex items-center gap-2">
                    <div className="relative rounded-[28px] size-9 shrink-0 overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
                        alt="Jason Martinez"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <p className="text-sm font-medium text-dark leading-[1.3]">
                        Jason Martinez
                      </p>
                      <p className="text-xs font-normal text-paragraph-dark leading-[1.4]">
                        Quarterback • Senior
                      </p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-[rgba(0,0,0,0.1)] w-full" />

                {/* Task Details */}
                <div className="flex flex-col gap-3">
                  <p className="text-sm font-medium text-dark leading-[1.3]">
                    Conditioning Log
                  </p>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-normal text-paragraph-dark leading-[1.4]">
                        Task:
                      </p>
                      <p className="text-[10px] font-medium text-dark">
                        Passing Drill Submission
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-normal text-paragraph-dark leading-[1.4]">
                        Submitted:
                      </p>
                      <p className="text-[10px] font-medium text-dark">
                        Today, 10:45 AM
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-normal text-paragraph-dark leading-[1.4]">
                        Due Date:
                      </p>
                      <p className="text-[10px] font-medium text-dark">
                        June 7, 2023
                      </p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-[rgba(0,0,0,0.1)] w-full" />

                {/* Athlete Notes */}
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium text-dark leading-[1.3]">
                    Athlete Notes:
                  </p>
                  <p className="text-xs font-normal text-paragraph-dark leading-[1.4]">
                    I focused on my follow-through and keeping my elbow high
                    during the throw. Included slow-motion clips at 0:45 and
                    1:32 to highlight my mechanics.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Feedback Form */}
          <div className="bg-[rgba(255,255,255,0.6)] rounded-[16px] w-full lg:w-[601px] min-h-[400px] lg:min-h-[628px] relative shrink-0 flex flex-col">
            <div className="flex flex-col gap-4 md:gap-6 p-4 md:p-5 flex-1">
              <h3 className="text-base font-medium text-dark leading-normal">
                Provide Feedback
              </h3>

              <div className="flex flex-col gap-5">
                {/* Rating */}
                <div className="flex flex-col gap-3">
                  <p className="text-sm font-medium text-dark leading-[1.3]">
                    Rating
                  </p>
                  <div className="flex gap-1 items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setRating(star)}
                        className="cursor-pointer hover:opacity-80 transition-opacity"
                      >
                        {star <= rating ? (
                          <Icon name="star_filled" height={16} width={16} />
                        ) : (
                          <Icon name="star_void_gold" height={16} width={16} />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Feedback Textarea */}
                <div className="flex flex-col gap-3">
                  <p className="text-sm font-medium text-dark leading-[1.3]">
                    Provide Feedback
                  </p>
                  <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Provide detailed feedback on the athlete's performance..."
                    className="bg-white h-24 rounded-[16px] px-4 py-3 text-xs font-normal text-paragraph-dark placeholder:text-paragraph-dark focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                  />
                </div>

                {/* Feedback Type */}
                <div className="flex flex-col gap-3">
                  <p className="text-sm font-medium text-dark leading-[1.3]">
                    Feedback Type
                  </p>
                  <div className="flex gap-2">
                    {(
                      [
                        {
                          id: "physical",
                          icon: "body_part_muscle",
                          label: "Physical",
                        },
                        {
                          id: "technical",
                          icon: "workout_run",
                          label: "Technical",
                        },
                        { id: "mental", icon: "brain_02", label: "Mental" },
                      ] as const
                    ).map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setFeedbackType(type.id)}
                        className={`flex-1 bg-white rounded-[16px] px-4 py-3.5 flex items-center justify-center gap-3 border transition-colors ${
                          feedbackType === type.id
                            ? "border-[rgba(69,127,243,0.3)] bg-[rgba(69,127,243,0.05)]"
                            : "border-transparent"
                        }`}
                      >
                        <Icon name={type.icon} height={20} width={20} />
                        <span className="text-[10px] font-medium text-dark">
                          {type.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Award Badges */}
                <div className="flex flex-col gap-3">
                  <p className="text-sm font-medium text-dark leading-[1.3]">
                    Award Badges{" "}
                    <span className="text-paragraph-dark font-normal">
                      (Optional)
                    </span>
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {(
                      [
                        {
                          id: "top-effort",
                          icon: "ranking_badge",
                          label: "Top Effort",
                          gradient:
                            "from-[rgba(0,226,128,0.05)] to-[rgba(0,124,70,0.12)]",
                          border: "border-[rgba(0,226,128,0.1)]",
                          text: "text-[#027a48]",
                        },
                        {
                          id: "perfect-form",
                          icon: "tick_double_01_badge",
                          label: "Perfect Form",
                          gradient:
                            "from-[rgba(69,127,243,0.05)] to-[rgba(69,127,243,0.12)]",
                          border: "border-[rgba(69,127,243,0.1)]",
                          text: "text-[#437EF7]",
                        },
                        {
                          id: "improved",
                          icon: "analytics_up_badge",
                          label: "Improved",
                          gradient:
                            "from-[rgba(120,78,248,0.05)] to-[rgba(120,78,248,0.12)]",
                          border: "border-[rgba(120,78,248,0.1)]",
                          text: "text-[#784ef8]",
                        },
                        {
                          id: "creative",
                          icon: "idea_badge",
                          label: "Creative",
                          gradient:
                            "from-[rgba(255,0,51,0.05)] to-[rgba(255,0,51,0.12)]",
                          border: "border-[rgba(255,0,51,0.1)]",
                          text: "text-[#ff0033]",
                        },
                      ] as Badge[]
                    ).map((badge) => (
                      <button
                        key={badge.id}
                        onClick={() => toggleBadge(badge.id)}
                        className={`bg-gradient-to-b ${badge.gradient} border ${
                          badge.border
                        } rounded-[61px] px-3 py-2 flex items-center gap-2 transition-opacity hover:opacity-80 ${
                          selectedBadges.includes(badge.id)
                            ? "opacity-100"
                            : "opacity-60"
                        }`}
                      >
                        <Icon name={badge.icon} height={20} width={20} />
                        <span
                          className={`text-[10px] font-medium ${badge.text}`}
                        >
                          {badge.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Action Type */}
                <div className="flex flex-col gap-3">
                  <p className="text-sm font-medium text-dark leading-[1.3]">
                    Feedback Type
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setActionType("follow-up")}
                      className={`flex-1 bg-white rounded-[16px] px-4 py-3.5 flex items-center justify-center gap-3 border transition-colors ${
                        actionType === "follow-up"
                          ? "border-[rgba(69,127,243,0.3)] bg-[rgba(69,127,243,0.05)]"
                          : "border-transparent"
                      }`}
                    >
                      <Icon name="note_edit" height={20} width={20} />
                      <span className="text-[10px] font-medium text-dark">
                        Assign Follow-up
                      </span>
                    </button>
                    <button
                      onClick={() => setActionType("schedule")}
                      className={`flex-1 bg-white rounded-[16px] px-4 py-3.5 flex items-center justify-center gap-3 border transition-colors ${
                        actionType === "schedule"
                          ? "border-[rgba(69,127,243,0.3)] bg-[rgba(69,127,243,0.05)]"
                          : "border-transparent"
                      }`}
                    >
                      <Icon name="video_01" height={20} width={20} />
                      <span className="text-[10px] font-medium text-dark">
                        Schedule 1:1
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 mt-auto">
                <button
                  onClick={onClose}
                  className="flex-1 bg-gradient-to-b from-[rgba(69,127,243,0.05)] to-[rgba(69,127,243,0.12)] border border-[rgba(69,127,243,0.1)] rounded-[61px] px-4 py-3 text-sm font-medium text-[#437EF7] hover:opacity-80 transition-opacity"
                >
                  Save Draft
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 border border-[rgba(21,86,216,0.3)] rounded-[61px] px-4 py-3 text-sm font-medium text-white bg-primary-gradient hover:opacity-90 transition-opacity"
                >
                  Complete Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {createPortal(modalContent, document.body)}
      <BadgesModal
        isOpen={isBadgesModalOpen}
        onClose={() => setIsBadgesModalOpen(false)}
      />
    </>
  );
}
