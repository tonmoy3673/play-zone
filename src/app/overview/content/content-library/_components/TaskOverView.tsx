"use client";

import ProgressBar from "@/components/shared/ProgressBar";
import { AnimatedButton } from "@/components/ui/Button";
import Icon from "@/utils/icon";
import { Check, FileText, Plus, Star, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Profile from "./Profile";

// Image assets from Figma
const imgJasonAvatar =
  "https://www.figma.com/api/mcp/asset/e7e020a7-f865-4035-9d89-be9466befdd4";
const imgCoachMichael =
  "https://www.figma.com/api/mcp/asset/64ce542f-81ae-4620-bf5f-81fd804a3467";
const imgCoachTomas =
  "https://www.figma.com/api/mcp/asset/5a18edd3-58af-4891-9385-d28abb5d9bd9";
const imgDocument =
  "https://www.figma.com/api/mcp/asset/851eec9a-2f8b-41d6-a0e0-1983d56b37b2";
const imgCheckmark =
  "https://www.figma.com/api/mcp/asset/851eec9a-2f8b-41d6-a0e0-1983d56b37b2";
const imgPencil =
  "https://www.figma.com/api/mcp/asset/b57b2fa5-1c53-4d3a-9f1e-f0d72a091720";
const imgStarOutline =
  "https://www.figma.com/api/mcp/asset/898c22e8-8995-4b13-8826-7f0b72e352";

interface ActiveTask {
  id: string;
  title: string;
  description: string;
  status: "In Progress" | "Not Started";
  progress: number;
}

interface RecentCompletion {
  id: string;
  taskName: string;
  completedDate: string;
  coachName: string;
  coachAvatar: string;
  rating: number;
}

const activeTasks: ActiveTask[] = [
  {
    id: "1",
    title: "Sprint Form Analysis",
    description: "Video review and technique feedback",
    status: "In Progress",
    progress: 60,
  },
  {
    id: "2",
    title: "Nutrition Quiz",
    description: "Weekly nutrition knowledge assessment",
    status: "Not Started",
    progress: 0,
  },
  {
    id: "3",
    title: "Training Plan Review",
    description: "Weekly training plan completion",
    status: "In Progress",
    progress: 85,
  },
];

const recentCompletions: RecentCompletion[] = [
  {
    id: "1",
    taskName: "Recovery Protocol",
    completedDate: "Completed Jan 6, 2025",
    coachName: "Coach Michael",
    coachAvatar: imgCoachMichael,
    rating: 4.6,
  },
  {
    id: "2",
    taskName: "Recovery Protocol",
    completedDate: "Completed Jan 6, 2025",
    coachName: "Coach Tomas",
    coachAvatar: imgCoachTomas,
    rating: 4.5,
  },
  {
    id: "3",
    taskName: "Recovery Protocol",
    completedDate: "Completed Jan 6, 2025",
    coachName: "Coach Michael",
    coachAvatar: imgCoachMichael,
    rating: 4.2,
  },
  {
    id: "4",
    taskName: "Recovery Protocol",
    completedDate: "Completed Jan 6, 2025",
    coachName: "Coach Michael",
    coachAvatar: imgCoachMichael,
    rating: 4.2,
  },
];

export default function TaskOverView() {
  return (
    <div className="w-full p-6">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Link
            href="/overview/content/content-library"
            className="text-dark bg-[#ffffff4d] p-0 backdrop-blur-3xl rounded-full size-10 border border-white flex items-center justify-center hover:brightness-110"
          >
            <Icon name="left_arrow" height={20} width={20} />
          </Link>
          <div>
            <h1 className="text-3xl font-semibold text-dark">
              Sarah Chen - Task Overview
            </h1>
            <p className="text-sm text-black/70 mt-1">
              Personalized task dashboard and completion tracking.
            </p>
          </div>
        </div>
        <AnimatedButton
          onClick={() => {}}
          style={{
            borderRadius: "40px",
            background:
              "linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%)",
          }}
          className="flex items-center justify-center gap-2 text-white font-normal px-5 py-4 rounded-full hover:bg-blue-700"
        >
          <Plus className="size-5" />
          Assign New Task
        </AnimatedButton>
      </div>

      {/* Athlete Profile Card */}
      <div className="mb-6">
        <Profile
          avatar={imgJasonAvatar}
          name="Jason Martinez"
          role="Sprint Specialist"
          joinDate="Jan 2025"
          totalTasks={23}
          activeTasks={4}
          completed={20}
          inProgress={3}
          overdue={0}
          progress={64}
          buttonText="View program profile"
          buttonOnClick={() => {}}
        />
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Current Tasks */}
        <div className="bg-[rgba(255,255,255,0.3)] overflow-clip relative rounded-[24px] p-5">
          <div className="flex flex-col gap-8 items-start">
            <div className="flex items-center justify-between w-full">
              <h3 className="text-xs font-semibold text-dark leading-[16px]">
                Current Tasks
              </h3>
              <div className="bg-[rgba(255,255,255,0.65)] border border-white rounded-full size-10 flex items-center justify-center">
                <FileText className="size-5 text-dark" />
              </div>
            </div>
            <div className="flex flex-col gap-1 items-start w-full">
              <p className="text-[30px] font-semibold text-dark leading-[1.5]">
                4
              </p>
              <div className="flex gap-1 items-center">
                <TrendingUp className="size-[14px] text-[#38aa4b]" />
                <p className="text-xs font-medium text-paragraph-dark leading-[20px]">
                  <span className="text-[#38aa4b]">12% increase</span>
                  <span> from last month</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Complete Tasks */}
        <div className="bg-[rgba(255,255,255,0.3)] overflow-clip relative rounded-[24px] p-5">
          <div className="flex flex-col gap-8 items-start">
            <div className="flex items-center justify-between w-full">
              <h3 className="text-xs font-semibold text-dark leading-[16px]">
                Complete Tasks
              </h3>
              <div className="bg-[rgba(255,255,255,0.65)] border border-white rounded-full size-10 flex items-center justify-center">
                <Check className="size-5 text-dark" />
              </div>
            </div>
            <div className="flex flex-col gap-1 items-start w-full">
              <p className="text-[30px] font-semibold text-dark leading-[1.5]">
                20
              </p>
              <div className="flex gap-1 items-center">
                <TrendingUp className="size-[14px] text-[#38aa4b]" />
                <p className="text-xs font-medium text-paragraph-dark leading-[20px]">
                  <span className="text-[#38aa4b]">3% increase</span>
                  <span> from last month</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Avg Score */}
        <div className="bg-[rgba(255,255,255,0.3)] overflow-clip relative rounded-[24px] p-5">
          <div className="flex flex-col gap-8 items-start">
            <div className="flex items-center justify-between w-full">
              <h3 className="text-xs font-semibold text-dark leading-[16px]">
                Avg Score
              </h3>
              <div className="bg-[rgba(255,255,255,0.65)] border border-white rounded-full size-10 flex items-center justify-center">
                <FileText className="size-5 text-dark" />
              </div>
            </div>
            <div className="flex flex-col gap-1 items-start w-full">
              <p className="text-[30px] font-semibold text-dark leading-[1.5]">
                94%
              </p>
              <div className="flex gap-1 items-center">
                <TrendingUp className="size-[14px] text-[#38aa4b]" />
                <p className="text-xs font-medium text-paragraph-dark leading-[20px]">
                  <span className="text-[#38aa4b]">3% increase</span>
                  <span> from last month</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Day Streak */}
        <div className="bg-[rgba(255,255,255,0.3)] overflow-clip relative rounded-[24px] p-5">
          <div className="flex flex-col gap-8 items-start">
            <div className="flex items-center justify-between w-full">
              <h3 className="text-xs font-semibold text-dark leading-[16px]">
                Day Streak
              </h3>
              <div className="bg-[rgba(255,255,255,0.65)] border border-white rounded-full size-10 flex items-center justify-center">
                <Star className="size-5 text-dark" />
              </div>
            </div>
            <div className="flex flex-col gap-1 items-start w-full">
              <p className="text-[30px] font-semibold text-dark leading-[1.5]">
                12
              </p>
              <div className="flex gap-1 items-center">
                <TrendingUp className="size-[14px] text-[#38aa4b]" />
                <p className="text-xs font-medium text-paragraph-dark leading-[20px]">
                  <span className="text-[#38aa4b]">3% increase</span>
                  <span> from last month</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Active Tasks and Recent Completions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Tasks */}
        <div className="bg-[rgba(255,255,255,0.3)] overflow-clip relative rounded-[24px] p-5">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-medium text-dark leading-[1.4]">
              Active Tasks
            </h2>
            <div className="bg-gradient-to-b from-[rgba(69,127,243,0.05)] to-[rgba(69,127,243,0.12)] border border-[rgba(69,127,243,0.1)] text-[#437EF7] px-3 py-1 rounded-[61px]">
              <p className="text-xs font-medium">04 Tas</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {activeTasks.map((task) => (
              <div
                key={task.id}
                className="bg-white/60 rounded-[20px] p-4 flex flex-col gap-3"
              >
                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-1 flex-1">
                    <h3 className="text-sm font-medium text-dark">
                      {task.title}
                    </h3>
                    <p className="text-xs font-normal text-paragraph-dark">
                      {task.description}
                    </p>
                  </div>
                  <div
                    className={`px-2 py-1 rounded-[61px] text-[10px] font-medium ${
                      task.status === "In Progress"
                        ? "bg-gradient-to-b from-[rgba(255,193,7,0.05)] to-[rgba(255,193,7,0.12)] border border-[rgba(255,193,7,0.1)] text-[#FFC107]"
                        : "bg-gradient-to-b from-[rgba(108,117,125,0.05)] to-[rgba(108,117,125,0.12)] border border-[rgba(108,117,125,0.1)] text-[#6C757D]"
                    }`}
                  >
                    {task.status}
                  </div>
                </div>
                <ProgressBar
                  percentage={task.progress}
                  percentageText={`${task.progress}% Complete`}
                  showPercentage={false}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Recent Completions */}
        <div className="bg-[rgba(255,255,255,0.3)] overflow-clip relative rounded-[24px] p-5">
          <h2 className="text-lg font-medium text-dark leading-[1.4] mb-5">
            Recent Completions
          </h2>
          <div className="flex flex-col gap-4">
            {recentCompletions.map((completion) => (
              <div
                key={completion.id}
                className="bg-white/60 rounded-[20px] p-4 flex items-center gap-3"
              >
                <div className="bg-[rgba(0,226,128,0.1)] rounded-full size-8 flex items-center justify-center flex-shrink-0">
                  <Check className="size-4 text-[#027a48]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-dark truncate">
                    {completion.taskName}
                  </p>
                  <p className="text-xs font-normal text-paragraph-dark">
                    {completion.completedDate}
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <Image
                    src={completion.coachAvatar}
                    alt={completion.coachName}
                    width={24}
                    height={24}
                    className="rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <p className="text-xs font-medium text-dark">
                      {completion.coachName}
                    </p>
                    <div className="flex items-center gap-1">
                      <Star className="size-3 fill-[#FFC107] text-[#FFC107]" />
                      <p className="text-xs font-medium text-dark">
                        {completion.rating}/5
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
