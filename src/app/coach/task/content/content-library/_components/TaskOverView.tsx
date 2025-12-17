"use client";

import { AnimatedButton } from "@/components/ui/Button";
import { Plus } from "lucide-react";
import Link from "next/link";
import Icon from "../../_components/icon";
import Profile from "./Profile";

// Image assets from Figma
interface ActiveTask {
  id: string;
  title: string;
  description: string;
  status: "In Progress" | "Not Started";
  progress: number;
  icon: "video_01" | "file_01" | "equipment_gym_03";
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
    icon: "video_01",
  },
  {
    id: "2",
    title: "Nutrition Quiz",
    description: "Weekly nutrition knowledge assessment",
    status: "Not Started",
    progress: 0,
    icon: "file_01",
  },
  {
    id: "3",
    title: "Training Plan Review",
    description: "Weekly training plan completion",
    status: "In Progress",
    progress: 85,
    icon: "equipment_gym_03",
  },
];

const recentCompletions: RecentCompletion[] = [
  {
    id: "1",
    taskName: "Recovery Protocol",
    completedDate: "Completed Jan 6, 2025",
    coachName: "Coach Michael",
    coachAvatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80",
    rating: 4.6,
  },
  {
    id: "2",
    taskName: "Recovery Protocol",
    completedDate: "Completed Jan 6, 2025",
    coachName: "Coach Tomas",
    coachAvatar:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=200&q=80",
    rating: 4.5,
  },
  {
    id: "3",
    taskName: "Recovery Protocol",
    completedDate: "Completed Jan 6, 2025",
    coachName: "Coach Michael",
    coachAvatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80",
    rating: 4.2,
  },
  {
    id: "4",
    taskName: "Recovery Protocol",
    completedDate: "Completed Jan 6, 2025",
    coachName: "Coach Michael",
    coachAvatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80",
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
            href="/coach/task/content/task-overview"
            className="text-dark bg-[#ffffff4d] backdrop-blur-3xl rounded-full border border-white flex items-center justify-center hover:brightness-110"
          >
            <span className="p-4">
              <Icon name="arrow_right_02_round" height={20} width={20} />
            </span>
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
          avatar="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80"
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
                <Icon name="task_01" height={20} width={20} />
              </div>
            </div>
            <div className="flex flex-col gap-1 items-start w-full">
              <p className="text-[30px] font-semibold text-dark leading-normal">
                4
              </p>
              <div className="flex gap-1 items-center">
                <Icon
                  name="up"
                  height={14}
                  width={14}
                  className="text-[#38aa4b]"
                />
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
                <Icon name="tick_double_02" height={20} width={20} />
              </div>
            </div>
            <div className="flex flex-col gap-1 items-start w-full">
              <p className="text-[30px] font-semibold text-dark leading-normal">
                20
              </p>
              <div className="flex gap-1 items-center">
                <Icon
                  name="up"
                  height={14}
                  width={14}
                  className="text-[#38aa4b]"
                />
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
                <Icon name="dashboard_speed_01" height={20} width={20} />
              </div>
            </div>
            <div className="flex flex-col gap-1 items-start w-full">
              <p className="text-[30px] font-semibold text-dark leading-normal">
                94%
              </p>
              <div className="flex gap-1 items-center">
                <Icon
                  name="up"
                  height={14}
                  width={14}
                  className="text-[#38aa4b]"
                />
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
                <Icon name="star_void" height={20} width={20} />
              </div>
            </div>
            <div className="flex flex-col gap-1 items-start w-full">
              <p className="text-[30px] font-semibold text-dark leading-normal">
                12
              </p>
              <div className="flex gap-1 items-center">
                <Icon
                  name="up"
                  height={14}
                  width={14}
                  className="text-[#38aa4b]"
                />
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
        <div className="bg-white/30 border border-white rounded-[24px] p-6">
          <div className="flex items-center justify-start mb-6 gap-2">
            <h2 className="text-lg font-medium text-[#141B34] leading-[1.4]">
              Active Tasks
            </h2>
            <div className="bg-linear-to-b from-[#E6EEFF] to-[#D5E3FF] border border-[#ADC1FF] text-[#2D4EB5] px-3 py-1 rounded-[999px] text-[10px] font-semibold">
              04 Tas
            </div>
          </div>
          <div className="flex flex-col gap-5">
            {activeTasks.map((task, index) => (
              <div
                key={task.id}
                className={`flex flex-col gap-2 ${
                  index < activeTasks.length - 1
                    ? "border-b border-[#E7EBF4] pb-4"
                    : ""
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/60 bg-white/60 shadow-[0_15px_30px_rgba(20,45,95,0.08)] px-3">
                      <Icon
                        name={task.icon}
                        height={24}
                        width={24}
                        className="text-[#2D4EB5]"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-[#141B34] truncate">
                        {task.title}
                      </p>
                      <p className="text-xs font-normal text-[#5C6375]">
                        {task.description}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`inline-flex items-center justify-center rounded-[999px] border px-3 py-1 text-[10px] font-semibold ${
                      task.status === "In Progress"
                        ? "bg-linear-to-b from-[#FFF5D8] to-[#FFF9EA] border-[#FFD48C] text-[#B87524]"
                        : "bg-white border-[#D7DCE6] text-[#6A728A]"
                    }`}
                  >
                    {task.status}
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <div className="relative">
                    <div className="bg-[#c4d4fd] h-2 rounded-[40px] w-full relative">
                      <div
                        className="bg-[linear-gradient(90deg,#7180DF_0%,#2C49FF_100%)] h-2 rounded-[80px]"
                        style={{ width: `${task.progress}%` }}
                      />
                      {task.progress > 0 && (
                        <img
                          src="/content/progress-circle.png"
                          alt="Progress indicator"
                          className="absolute top-1/2 -translate-y-1/2 size-3.5 object-contain"
                          style={{
                            left: `calc(${task.progress}% - 7px)`,
                          }}
                        />
                      )}
                    </div>
                  </div>
                  <p className="text-[10px] font-medium text-dark">
                    {task.progress}% Complete
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Completions */}
        <div className="bg-white/30 rounded-3xl p-6">
          <h2 className="text-lg font-medium text-[#141B34] leading-[1.4] mb-4">
            Recent Completions
          </h2>
          <div className="flex flex-col gap-4">
            {recentCompletions.map((completion, index) => (
              <div
                key={completion.id}
                className={`flex items-center gap-4 p-4  ${
                  index < recentCompletions.length - 1
                    ? "border-b border-[#E6E9F2] pb-4"
                    : ""
                }`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white">
                  <Icon
                    name="tick_double_02"
                    height={20}
                    width={20}
                    className="text-[#2D4EB5]"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[#141B34] truncate">
                    {completion.taskName}
                  </p>
                  <p className="text-xs font-normal text-[#5C6375]">
                    {completion.completedDate}
                  </p>
                </div>
                <div className="flex items-center justify-start gap-3 shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80"
                    alt=""
                    className="rounded-full h-12 w-12 object-cover"
                  />
                  <div className="flex flex-col items-start">
                    <p className="text-xs font-medium text-[#141B34]">
                      {completion.coachName}
                    </p>
                    <div className="flex items-center gap-1">
                      <Icon
                        name="star_filled"
                        height={14}
                        width={14}
                        className="text-[#FFC107]"
                      />
                      <p className="text-xs font-medium text-[#141B34]">
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
