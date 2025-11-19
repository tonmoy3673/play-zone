"use client";

import { useState } from "react";
import Icon, { type IconName } from "../../_components/icon";
import ReviewSubmissionModal from "./ReviewSubmissionModal";

interface SubmissionCardProps {
  thumbnail: string;
  duration: string;
  athleteName: string;
  athleteRole: string;
  badge: {
    label: string;
    variant: "danger" | "purple" | "info" | "success";
  };
  title: string;
  submitted: string;
  taskType: string;
  notes: string;
  fileType: "video" | "pdf" | "file";
  onReviewClick: () => void;
  icon: IconName;
}

const badgeStyles = {
  danger:
    "bg-gradient-to-b from-[rgba(255,0,51,0.05)] to-[rgba(255,0,51,0.12)] border border-[rgba(255,0,51,0.1)] text-[#ff0033]",
  purple:
    "bg-gradient-to-b from-[rgba(120,78,248,0.05)] to-[rgba(120,78,248,0.12)] border border-[rgba(120,78,248,0.1)] text-[#784ef8]",
  info: "bg-gradient-to-b from-[rgba(69,127,243,0.05)] to-[rgba(69,127,243,0.12)] border border-[rgba(69,127,243,0.1)] text-[#437EF7]",
  success:
    "bg-gradient-to-b from-[rgba(0,226,128,0.05)] to-[rgba(0,226,128,0.12)] border border-[rgba(0,226,128,0.1)] text-[#027a48]",
};

function SubmissionCard({
  thumbnail,
  duration,
  athleteName,
  athleteRole,
  badge,
  title,
  submitted,
  taskType,
  notes,
  fileType,
  icon,
  onReviewClick,
}: SubmissionCardProps) {
  console.log(icon);

  return (
    <div className="bg-[rgba(255,255,255,0.6)] overflow-clip relative rounded-[16px] shrink-0 p-4 flex flex-col">
      {/* Background blur effect */}
      <div className="absolute bottom-[-1236.17px] flex h-[calc(1px*((var(--transform-inner-width)*0.866025447845459)+(var(--transform-inner-height)*0.4999999701976776)))] items-center justify-center left-[calc(50%+889.08px)] translate-x-[-50%] w-[calc(1px*((var(--transform-inner-height)*0.866025447845459)+(var(--transform-inner-width)*0.4999999701976776)))] pointer-events-none">
        <div className="flex-none rotate-[60deg] scale-y-[-100%]">
          <div className="blur-md filter h-[540px] relative w-[663px]">
            <div className="absolute inset-0 opacity-30 overflow-hidden pointer-events-none">
              <img
                alt=""
                className="absolute h-[106.24%] left-[-21.02%] max-w-none top-[-2.39%] w-[120.73%]"
                src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnail with overlay */}
      <div className="relative bg-[rgba(39,106,238,0.06)] h-[140px] overflow-clip rounded-[11px] w-full mb-4">
        <div className="absolute h-[140px] left-0 top-0 w-full">
          <img
            alt="thumbnail"
            src={thumbnail}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        {/* Duration badge */}
        <div className="absolute bg-[rgba(255,255,255,0.15)] flex gap-2.5 items-center justify-center px-2 py-1.5 rounded-lg right-2 bottom-2  backdrop-blur-xs">
          <p className="text-[10px] font-medium text-white leading-normal ">
            {duration}
          </p>
        </div>
        {/* Play button overlay */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-10 rounded-full bg-[rgba(255,255,255,0.3)] backdrop-blur-xs flex items-center justify-center">
          <Icon name={icon} height={22} width={22} />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 items-start w-full">
        {/* Athlete info and badge */}
        <div className="flex items-center justify-between w-full">
          <div className="flex gap-2 items-center">
            <div className="relative rounded-[28px] size-9 shrink-0">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
                alt={athleteName}
                className="absolute inset-0 w-full h-full object-cover rounded-[28px]"
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="text-sm font-medium text-dark leading-normal">
                {athleteName}
              </p>
              <p className="text-xs font-normal text-paragraph-dark leading-normal">
                {athleteRole}
              </p>
            </div>
          </div>
          <div
            className={`bg-gradient-to-b border rounded-[61px] flex gap-1 h-6 items-center justify-center px-2 py-2.5 shrink-0 ${
              badgeStyles[badge.variant]
            }`}
          >
            <p className="text-[10px] font-medium leading-normal">
              {badge.label}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[rgba(0,0,0,0.1)] w-full" />

        {/* Task details */}
        <div className="flex flex-col gap-5 w-full">
          <div className="flex flex-col gap-4">
            <p className="text-base font-medium text-dark leading-normal">
              {title}
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <p className="text-xs font-normal text-paragraph-dark leading-normal">
                  Submitted:
                </p>
                <p className="text-[10px] font-medium text-dark leading-normal">
                  {submitted}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs font-normal text-paragraph-dark leading-normal">
                  Task Type:
                </p>
                <p className="text-[10px] font-medium text-dark leading-normal">
                  {taskType}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs font-normal text-paragraph-dark leading-normal">
                  Notes:
                </p>
                <p className="text-[10px] font-medium text-dark leading-normal">
                  {notes}
                </p>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-2 items-center justify-center w-full">
            <button className="bg-gradient-to-b from-[rgba(69,127,243,0.05)] to-[rgba(69,127,243,0.12)] border border-[rgba(69,127,243,0.1)] rounded-[61px] flex gap-3 items-center justify-center px-4 py-3 w-[122px]">
              <p className="text-sm font-medium text-[#437EF7] leading-normal">
                Quick View
              </p>
            </button>
            <button
              onClick={onReviewClick}
              className="border border-[rgba(21,86,216,0.3)] rounded-[61px] flex gap-3 items-center justify-center px-4 py-3 w-[131px] bg-primary-gradient hover:opacity-90 transition-opacity"
            >
              <p className="text-sm font-medium text-white leading-normal">
                Review Now
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Submission data
const submissions = [
  {
    id: "a",
    thumbnail:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop",
    duration: "02:34",
    athleteName: "Jason Martinez",
    athleteRole: "Quarterback • Senior",
    badge: { label: "High Priority", variant: "danger" as const },
    title: "Passing Drill Submission",
    submitted: "Today, 10:45 AM",
    taskType: "Video Demonstration",
    notes: "Included slow-motion clips",
    fileType: "video" as const,
    icon: "play" as const,
  },
  {
    id: "b",
    thumbnail:
      "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&h=600&fit=crop",
    duration: "02:34",
    athleteName: "Jason Martinez",
    athleteRole: "Quarterback • Senior",
    badge: { label: "Elite Program", variant: "purple" as const },
    title: "Route Running Technique",
    submitted: "Today, 10:45 AM",
    taskType: "Video Demonstration",
    notes: "Included slow-motion clips",
    fileType: "video" as const,
    icon: "play" as const,
  },
  {
    id: "c",
    thumbnail:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop",
    duration: "02:34",
    athleteName: "Jason Martinez",
    athleteRole: "Quarterback • Senior",
    badge: { label: "New Athlete", variant: "info" as const },
    title: "Tactical Analysis Quiz",
    submitted: "Today, 10:45 AM",
    taskType: "Video Demonstration",
    notes: "Included slow-motion clips",
    fileType: "file" as const,
    icon: "pdf_01" as const,
  },
  {
    id: "d",
    thumbnail:
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&h=600&fit=crop",
    duration: "02:34",
    athleteName: "Jason Martinez",
    athleteRole: "Quarterback • Senior",
    badge: { label: "New Athlete", variant: "info" as const },
    title: "Conditioning Log",
    submitted: "Today, 10:45 AM",
    taskType: "Video Demonstration",
    notes: "Included slow-motion clips",
    fileType: "video" as const,
    icon: "play" as const,
  },
  {
    id: "e",
    thumbnail:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop",
    duration: "02:34",
    athleteName: "Jason Martinez",
    athleteRole: "Quarterback • Senior",
    badge: { label: "Elite Program", variant: "purple" as const },
    title: "Footwork Training Video",
    submitted: "Today, 10:45 AM",
    taskType: "Video Demonstration",
    notes: "Included slow-motion clips",
    fileType: "video" as const,
    icon: "play" as const,
  },
  {
    id: "f",
    thumbnail:
      "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&h=600&fit=crop",
    duration: "02:34",
    athleteName: "Jason Martinez",
    athleteRole: "Quarterback • Senior",
    badge: { label: "Regular Program", variant: "success" as const },
    title: "Play Analysis Worksheet",
    submitted: "Today, 10:45 AM",
    taskType: "Video Demonstration",
    notes: "Included slow-motion clips",
    fileType: "file" as const,
    icon: "image_01" as const,
  },
];

export default function Submission() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="bg-[rgba(255,255,255,0.3)] overflow-clip relative rounded-[24px] w-full px-5 py-5 border border-white/80">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-4">
          {submissions.map((item) => (
            <SubmissionCard
              key={item.id}
              thumbnail={item.thumbnail}
              duration={item.duration}
              athleteName={item.athleteName}
              athleteRole={item.athleteRole}
              badge={item.badge}
              title={item.title}
              submitted={item.submitted}
              taskType={item.taskType}
              notes={item.notes}
              fileType={item.fileType}
              onReviewClick={() => setIsModalOpen(true)}
              icon={item.icon}
            />
          ))}
        </div>
      </div>

      <ReviewSubmissionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
