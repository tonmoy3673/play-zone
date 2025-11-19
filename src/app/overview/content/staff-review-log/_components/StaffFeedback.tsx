"use client";

import Image from "next/image";
import Icon from "../../_components/icon";

// Sample data matching the Figma design
const feedbackData = [
  {
    id: 1,
    coach: {
      name: "Coach Sarah",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
    },
    athlete: "Jessica Williams",
    task: "Passing Drill",
    rating: 4,
    feedback:
      "Exceptional form on your deep passes. Your shoulder rotation and follow-through are textbook perfect. The only suggestion I have is to work on varying your release speed for different coverage situations.",
    tags: ["Top Effort", "Perfect Form"],
    timestamp: "Yesterday",
  },
  {
    id: 2,
    coach: {
      name: "Coach Amanda",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
    },
    athlete: "Carlos Rodriguez",
    task: "Footwork Training",
    rating: 4,
    feedback:
      "Great improvement on your lateral movement drills. Your change of direction is much smoother now. Let's work on maintaining lower body control when transitioning between forward and backward movement.",
    tags: ["Good Form"],
    timestamp: "Today",
  },
];

export default function StaffFeedback() {
  return (
    <div className="bg-white/30 backdrop-blur-3xl rounded-3xl p-5 border border-white my-5">
      {/* Title */}
      <h2 className="text-xl font-semibold text-dark mb-5">
        Recent Feedback Highlights
      </h2>

      {/* Feedback Cards */}
      <div className="flex flex-col lg:flex-row gap-[10px]">
        {feedbackData.map((feedback) => (
          <div
            key={feedback.id}
            className="bg-white/60 flex flex-col gap-[10px] p-5 rounded-[21px] flex-1"
          >
            <div className="flex flex-col gap-4">
              {/* Header: Coach info and rating */}
              <div className="flex items-center justify-between">
                <div className="flex gap-3 items-center">
                  <Image
                    src={feedback.coach.avatar}
                    alt={feedback.coach.name}
                    width={40}
                    height={40}
                    className="size-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col gap-0.5">
                    <p className="text-sm font-semibold text-dark leading-[1.3]">
                      {feedback.coach.name}
                    </p>
                    <p className="text-xs font-normal text-paragraph-dark leading-[1.4]">
                      to {feedback.athlete} • {feedback.task}
                    </p>
                  </div>
                </div>
                <div className="flex gap-1 items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon
                      key={star}
                      name={
                        star <= feedback.rating ? "star_filled" : "star_void"
                      }
                      height={16}
                      width={16}
                      className="stroke-[#FF8C1A]"
                    />
                  ))}
                </div>
              </div>

              {/* Feedback text */}
              <p className="text-xs font-normal text-paragraph-dark leading-[1.4] whitespace-pre-wrap">
                &quot;{feedback.feedback}&quot;
              </p>

              {/* Tags and timestamp */}
              <div className="flex items-center justify-between">
                <div className="flex gap-1 items-center flex-wrap">
                  {feedback.tags.map((tag, index) => {
                    const isPurple = tag === "Top Effort";
                    return (
                      <span
                        key={index}
                        className={`inline-flex items-center justify-center px-2 py-1.5 rounded-[61px] text-[10px] font-medium ${
                          isPurple
                            ? "bg-gradient-to-b from-[rgba(120,78,248,0.05)] to-[rgba(120,78,248,0.12)] border border-[rgba(120,78,248,0.1)] text-[#784ef8]"
                            : "bg-gradient-to-b from-[rgba(69,127,243,0.05)] to-[rgba(69,127,243,0.12)] border border-[rgba(69,127,243,0.1)] text-[#437EF7]"
                        }`}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
                <p className="text-xs font-normal text-dark leading-[1.4]">
                  {feedback.timestamp}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
