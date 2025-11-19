import Checkbox from "@/components/ui/Checkbox";
import Icon from "@/components/ui/Icon";
import React from "react";

type ReviewAttachment = {
  id: string;
  icon: string;
  title: string;
  meta?: string;
};

type ReviewCard = {
  id: string;
  category?: string;
  icon: string;
  title: string;
  description?: string;
  estimatedTime?: string;
  points?: string;
  assigned_to?: string;
  due_date?: string;
  attachments?: ReviewAttachment[];
  requirements?: {
    fields: { label: string; value: string }[];
    settings: string[];
  };
};

const reviewCards: ReviewCard[] = [
  {
    id: "sprint-form-drill",
    category: "Cardio",
    icon: "cardio-icon",
    title: "Sprint Form Drill",
    description:
      "Improve your running technique with focused sprint drills. Focus on proper form, arm movement, and breathing patterns.",
    estimatedTime: "15 minutes",
    points: "25 pts",
  },
  {
    id: "reaction-ladder",
    icon: "assessment-icon",
    title: "Assignment Details",
    description: "",
    estimatedTime: "",
    assigned_to: "All Program Athletes (24 members)",
    points: "",
    due_date: "Jan 15, 2025, at 6:00 PM",
  },
  {
    id: "breathing-circuit",
    category: "Content Attached",
    title: "Content Attached",
    icon: "link-icon",
    description: "",
    attachments: [
      {
        id: "sprint-technique-demo",
        icon: "video-icon",
        title: "Sprint Technique Demo",
        meta: "(Video - 3:24)",
      },
      {
        id: "sprint-training-guide",
        icon: "file-icon",
        title: "Sprint Training Guide",
        meta: "(PDF - 2.1 MB)",
      },
    ],
  },
  {
    id: "stride-holds",
    category: "Submission Requirements",
    icon: "submission-icon",
    title: "",
    description: "",
    requirements: {
      fields: [
        { label: "Video Upload", value: "Video Upload" },
        { label: "Review Process:", value: "Coach Review Required" },
      ],
      settings: ["Comments Enabled", "Leaderboard Visible", "Badge Eligible"],
    },
  },
];

const TaskReviewAndPublish = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-dark">Final Review & Publish</h1>
        <span className="text-sm text-paragraph-dark">
          Review your task setup before publishing to athletes.
        </span>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {reviewCards.map((card) => (
          <div
            key={card.id}
            className="relative overflow-hidden rounded-[30px] border border-white/60 bg-white/60 p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-white/70">
                <Icon name={card.icon} className="h-5 w-5 text-dark" />
              </span>
              {card.category && (
                <span className="text-[14px] font-medium text-dark">
                  {card.category}
                </span>
              )}
            </div>

            <div className="space-y-3">
              <p className="text-[14px] font-medium text-dark">{card.title}</p>
              {card.description && (
                <p className="text-[12px] leading-[1.4] text-paragraph-dark">
                  {card.description}
                </p>
              )}

              {card.attachments && card.attachments.length > 0 && (
                <div className="mt-2 space-y-3">
                  {card.attachments.map((attachment) => (
                    <div
                      key={attachment.id}
                      className="flex items-center justify-between rounded-2xl bg-white/70 px-4 py-3"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex size-12 items-center justify-center rounded-2xl bg-white/80">
                          <Icon
                            name={attachment.icon}
                            className="h-6 w-6 text-dark"
                          />
                        </span>
                        <div className="flex flex-col">
                          <span className="text-[14px] font-medium text-dark">
                            {attachment.title}
                          </span>
                          {attachment.meta && (
                            <span className="text-[12px] text-paragraph-dark">
                              {attachment.meta}
                            </span>
                          )}
                        </div>
                      </div>
                      <Checkbox checked={true} onChange={() => {}} />
                    </div>
                  ))}
                </div>
              )}

              {card.requirements && (
                <div className="mt-4 space-y-6">
                  <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
                    {card.requirements.fields.map((field) => (
                      <div
                        key={field.label}
                        className="flex flex-col gap-1 text-paragraph-dark"
                      >
                        <span className="text-[12px]">{field.label}</span>
                        <span className="text-[14px] font-medium text-dark">
                          {field.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    <p className="text-[14px] font-medium text-dark">
                      Additional Settings
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {card.requirements.settings.map((setting) => (
                        <span
                          key={setting}
                          className="rounded-full bg-white px-4 py-1 text-[12px] text-paragraph-dark"
                        >
                          {setting}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {(card.estimatedTime ||
              card.assigned_to ||
              card.points ||
              card.due_date) && (
              <div className="mt-6 flex items-center justify-between gap-3 text-[14px] text-paragraph-dark">
                <span className="leading-[1.3]">
                  {card.estimatedTime && (
                    <span className="leading-[1.3]">
                      <span>Estimated Time:</span>
                      <span className="text-dark"> {card.estimatedTime}</span>
                    </span>
                  )}
                  {card.assigned_to && (
                    <span className="leading-[1.3] flex flex-col gap-1">
                      <span>Assigned To:</span>
                      <span className="text-dark">{card.assigned_to}</span>
                    </span>
                  )}
                </span>
                <span className="leading-[1.3]">
                  {card.points && (
                    <span className="leading-[1.3]">
                      <span>Points: </span>
                      <span className="text-dark">{card.points}</span>
                    </span>
                  )}
                  {card.due_date && (
                    <span className="leading-[1.3] flex flex-col gap-1">
                      <span>Due Date:</span>
                      <span className="text-dark">{card.due_date}</span>
                    </span>
                  )}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskReviewAndPublish;
