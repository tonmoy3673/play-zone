"use client";

import { AnimatedButton } from "@/components/ui/Button";
import Image from "next/image";
import Icon from "../../_components/icon";

const defaultAvatar =
  "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&q=80";
const badgeIcon =
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80";

interface ProfileProps {
  avatar?: string;
  name: string;
  role: string;
  joinDate: string;
  totalTasks: number;
  activeTasks: number;
  completed: number;
  inProgress: number;
  overdue: number;
  progress: number;
  buttonText?: string;
  buttonOnClick?: () => void;
}

export default function Profile({
  avatar = defaultAvatar,
  name,
  role,
  joinDate,
  totalTasks,
  activeTasks,
  completed,
  inProgress,
  overdue,
  progress,
  buttonText = "View program profile",
  buttonOnClick,
}: ProfileProps) {
  return (
    <div className="bg-[rgba(255,255,255,0.3)] overflow-clip relative rounded-[24px] w-full h-[310px]">
      {/* Background Image */}
      <div className="absolute h-[310px] left-0 top-0 w-full">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Image
            src="/content/task-profile-bg.png"
            alt="Background"
            fill
            className="absolute h-[414.72%] left-0 max-w-none top-[-151.57%] w-[100.16%] object-cover"
            priority
          />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bg-linear-to-b from-[13.376%] from-[rgba(0,0,0,0)] via-black/50 to-[#000000] to-[77.389%] h-[154px] left-0 top-[156px] w-full" />

      {/* Profile Section - Left Side */}
      <div className="absolute left-6 top-8">
        {/* Profile Picture and Badge */}
        <div className="flex flex-col gap-3 items-start w-[213.224px]">
          <div className="flex flex-col items-center pb-3 w-[96px]">
            <div className="aspect-square border-2 border-solid border-white relative rounded-[48px] w-full mb-[-12px]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[48px]">
                <Image
                  src={avatar}
                  alt={name}
                  fill
                  className="absolute h-[142.43%] left-0 max-w-none top-[-30.15%] w-full object-cover"
                />
              </div>
            </div>
            <div className="border border-white flex gap-1 items-center justify-center px-1 py-1 rounded-[40.926px] mb-[-12px] w-full bg-linear-to-b from-[#FF8A00] to-[#FF6B00]">
              <div className="relative shrink-0 size-4">
                <Image
                  src={badgeIcon}
                  alt="Badge icon"
                  fill
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                />
              </div>
              <p className="font-medium leading-[1.4] text-[10px] text-center text-white">
                Elite Athlete
              </p>
            </div>
          </div>

          {/* Name and Role */}
          <div className="flex flex-col gap-1 items-start text-white w-full">
            <p className="font-medium leading-normal text-xl min-w-full whitespace-pre-wrap">
              {name}
            </p>
            <p className="font-normal leading-[1.4] text-xs">
              {role} • Joined: {joinDate}
            </p>
          </div>
        </div>

        {/* KPIs Section */}
        <div className="absolute flex gap-6 items-center left-0 top-[203px]">
          <div className="flex flex-col gap-2 items-center shrink-0">
            <p className="font-semibold leading-normal text-2xl text-white min-w-full whitespace-pre-wrap">
              {totalTasks}
            </p>
            <p className="font-medium leading-[1.4] text-[10px] text-[rgba(255,255,255,0.7)] text-center">
              Total Tasks
            </p>
          </div>
          <div className="flex h-[36px] items-center justify-center shrink-0 w-px">
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[36px]">
                <div className="absolute bottom-0 left-0 right-0 -top-px">
                  <div className="h-px w-full bg-white/70" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center shrink-0">
            <p className="font-semibold leading-normal text-2xl text-white min-w-full whitespace-pre-wrap">
              {activeTasks}
            </p>
            <p className="font-medium leading-[1.4] text-[10px] text-[rgba(255,255,255,0.7)] text-center">
              Active Tasks
            </p>
          </div>
          <div className="flex h-[38px] items-center justify-center shrink-0 w-px">
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[38px]">
                <div className="absolute bottom-0 left-0 right-0 -top-px">
                  <div className="h-px w-full bg-white/70" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center shrink-0">
            <p className="font-semibold leading-normal text-2xl text-white min-w-full whitespace-pre-wrap">
              {completed}
            </p>
            <p className="font-medium leading-[1.4] text-[10px] text-[rgba(255,255,255,0.7)] text-center">
              Completed
            </p>
          </div>
          <div className="flex h-[38px] items-center justify-center shrink-0 w-px">
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[38px]">
                <div className="absolute bottom-0 left-0 right-0 -top-px">
                  <div className="h-px w-full bg-white/70" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center shrink-0">
            <p className="font-semibold leading-normal text-2xl text-white min-w-full whitespace-pre-wrap">
              {inProgress}
            </p>
            <p className="font-medium leading-[1.4] text-[10px] text-[rgba(255,255,255,0.7)] text-center">
              In Progress
            </p>
          </div>
          <div className="flex h-[38px] items-center justify-center shrink-0 w-px">
            <div className="flex-none rotate-90">
              <div className="h-0 relative w-[38px]">
                <div className="absolute bottom-0 left-0 right-0 -top-px">
                  <div className="h-px w-full bg-white/70" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center shrink-0">
            <p className="font-semibold leading-normal text-2xl text-white min-w-full whitespace-pre-wrap">
              {overdue}
            </p>
            <p className="font-medium leading-[1.4] text-[10px] text-[rgba(255,255,255,0.7)] text-center">
              Overdue
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Button and Progress Card */}
      <div className="absolute flex gap-6 items-end right-6 top-[151px]">
        {/* Button */}
        <AnimatedButton
          onClick={() => {}}
          style={{
            borderRadius: "40px",
            background:
              "linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%)",
          }}
          className="flex items-center justify-center gap-2 text-white font-medium px-4 py-3 rounded-full hover:bg-blue-700 text-xs"
        >
          {buttonText}
        </AnimatedButton>

        {/* Progress Card */}
        <div className="bg-[rgba(255,255,255,0.08)] border border-[#e7f2f5] border-solid h-[135px] relative rounded-[15px] shrink-0 w-[154px]">
          <div className="h-[135px] overflow-clip relative rounded-[inherit] w-[154px]">
            {/* Background Pattern */}
            <div className="absolute flex h-[214.773px] items-center justify-center left-[-14px] mix-blend-luminosity top-0 w-[245px]">
              <div className="flex-none rotate-270 -scale-y-100">
                <div className="h-[214.773px] relative w-[245px]">
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <Image
                      src="/content/progress-bg.png"
                      alt="Background pattern"
                      fill
                      className="absolute h-[186.17%] left-[-24.68%] max-w-none top-[-43.09%] w-[244.81%] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <p className="absolute font-normal leading-[1.4] left-3 not-italic text-dark text-xs top-[calc(50%+-58.5px)]">
              Overall Progress
            </p>
            <div className="absolute left-[27px] top-[31px]">
              <div className="relative size-[100px]">
                <Icon name="ellipse_16" height={100} width={100} />
                <p className="absolute font-medium leading-normal left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 not-italic text-dark text-base">
                  {progress}%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
