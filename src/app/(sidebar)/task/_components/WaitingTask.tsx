"use client";
import { AnimatedButton } from "@/components/ui/Button";
import Icon from "@/utils/icon";
import React from "react";

interface WaitingTaskProps {
  icon: string;
  title: string;
  description: string;
  programName: string;
  duration: string;
  dueDate: string;
  progress?: string;
  status: "not-started" | "in-progress" | "completed";
  category: string;
  categoryColor?: string;
  categoryTextColor?: string;
  onAction?: () => void;
}

const WaitingTask: React.FC<WaitingTaskProps> = ({
  icon,
  title,
  description,
  programName,
  duration,
  dueDate,
  progress,
  status,
  category,
  categoryColor = "#5C8FF7",
  categoryTextColor = "#FFFFFF",
  onAction,
}) => {
  const getActionButton = () => {
    switch (status) {
      case "completed":
        return (
          <AnimatedButton
            onClick={onAction}
            className="px-4 py-2 rounded-full bg-[#F0F4FF] text-[#5C8FF7] text-sm font-medium hover:bg-[#E6EDFF] transition-colors"
          >
            View
          </AnimatedButton>
        );
      case "in-progress":
        return (
          <AnimatedButton
            onClick={onAction}
            className="px-4 py-2 rounded-full bg-[#5C8FF7] text-white text-sm font-medium hover:bg-[#4A7EE7] transition-colors"
          >
            Resume
          </AnimatedButton>
        );
      case "not-started":
      default:
        return (
          <AnimatedButton
            onClick={onAction}
            className="px-4 py-2 rounded-full bg-[#F0F4FF] text-[#5C8FF7] text-sm font-medium hover:bg-[#E6EDFF] transition-colors"
          >
            Start
          </AnimatedButton>
        );
    }
  };

  const getStatusText = () => {
    if (status === "completed") return "Completed";
    if (status === "in-progress" && progress) return progress;
    return "Not Started";
  };

  const getStatusColor = () => {
    if (status === "completed") return "text-[#10B981]";
    if (status === "in-progress") return "text-[#5C8FF7]";
    return "text-[#6B7280]";
  };

  return (
    <div className="bg-white/60 backdrop-blur-sm border border-white/80 rounded-2xl p-5 hover:bg-white/70 transition-all">
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="w-10 h-10 rounded-full bg-[#FFFFFF99] border border-white flex items-center justify-center flex-shrink-0">
          <Icon name="session" height={20} width={20} className="text-[#5C8FF7]" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-start gap-3 flex-1">
              <div>
                <div className="flex gap-3">
                  <h4 className="text-base font-semibold text-[#141B34] mb-1 leading-tight">
                    {title}
                  </h4>
                  <div
                    className="px-3 py-1 rounded-full text-xs font-medium text-white whitespace-nowrap"
                    style={{ backgroundColor: categoryColor, color: categoryTextColor }}
                  >
                    {category}
                  </div>
                </div>
                <p className="text-sm text-[#141B34]/70 mb-2">{description}</p>
                <div className="flex items-center gap-1 mb-3">
                  <div className="w-2 h-2 rounded-full bg-[#5C8FF7]"></div>
                  <span className="text-sm font-medium text-[#141B34]">
                    {programName}
                  </span>
                </div>
              </div>
            </div>

            {/* Category Tag */}
				{/* Action Button */}
            {getActionButton()}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-[#141B34]/60">
              <div className="flex items-center gap-1">
                <Icon name="clock" height={14} width={14} />
                <span>{duration}</span>
              </div>
              <div className="flex items-center gap-1">
                <Icon name="calendar" height={14} width={14} />
                <span>{dueDate}</span>
              </div>
              <span className={`font-medium ${getStatusColor()}`}>
                {getStatusText()}
              </span>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingTask;
