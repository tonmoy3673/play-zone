"use client";

import Icon, { type IconName } from "@/app/coach/task/content/_components/icon";
import { AnimatedButton } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ActiveStreak from "./_components/ActiveStreak";
import Badges from "./_components/Badges";
import Position from "./_components/Position";

// Mock data
const athleteData = {
  name: "Jason Martinez",
  joinDate: "Jan 2025",
  lastOnline: "30 min ago",
  avatar: "https://images.unsplash.com/photo-1605895004577-85c4b39013f5?w=200",
  currentRank: 12,
  totalPoints: 95,
  currentStreak: 2,
  ongoingProgram: 0,
  liveSessionsAttended: 12,
  averageGrade: 97,
  activeDays: 4,
  totalDays: 7,
};

const recentActivities: Array<{
  icon: IconName;
  title: string;
  time: string;
  points: string;
}> = [
  {
    icon: "video_01",
    title: 'Completed "Mental Drill Practice"',
    time: "2 hours ago",
    points: "+2 pts",
  },
  {
    icon: "file_01",
    title: 'Quiz: "Basketball Fundamentals" - 92%',
    time: "1 day ago",
    points: "+5 pts",
  },
  {
    icon: "equipment_gym_03",
    title: 'Attended Live Session: "Team Strategy"',
    time: "2 days ago",
    points: "+3 pts",
  },
  {
    icon: "equipment_gym_03",
    title: "Daily Streak Bonus",
    time: "2 days ago",
    points: "+1 pts",
  },
];

const progressItems = [
  { label: "Overall Program Progress", percentage: 55 },
  { label: "Skill Development", percentage: 45 },
  { label: "Knowledge Base", percentage: 82 },
  { label: "Consistency", percentage: 30 },
];

export default function AthleteProgramProfile() {
  const [isPositionModalOpen, setIsPositionModalOpen] = useState(false);

  return (
    <div className="bg-white/30 backdrop-blur-3xl  rounded-[24px] overflow-hidden relative w-full min-h-screen p-8">
      {/* Header */}
      <div className="relative z-10 flex items-center gap-4 mb-8">
        <button className="bg-[rgba(255,255,255,0.3)] rounded-full size-14 flex items-center justify-center hover:bg-white/50 transition-colors">
          <Link href="/coach/programs/member">
            <Icon
              name="arrow_left_02_round"
              height={24}
              width={24}
              className="text-dark"
            />
          </Link>
        </button>
        <h1 className="font-semibold text-[30px] leading-normal text-dark">
          Athlete Program Profile
        </h1>
        <div className="ml-auto flex items-center gap-2">
          <AnimatedButton className="bg-[rgba(69,127,243,0.15)] px-6 py-4 rounded-[46px] flex items-center gap-2 text-sm font-medium border border-[rgba(21,86,216,0.1)]">
            <Icon
              name="message_01_blue"
              height={24}
              width={24}
              className="text-[#276AEE]"
            />
            <span className="primary-gradient-text">Send Message</span>
          </AnimatedButton>
          <AnimatedButton className="bg-[rgba(69,127,243,0.15)] px-6 py-4 rounded-[46px] flex items-center gap-2 text-sm font-medium border border-[rgba(21,86,216,0.1)]">
            <Icon
              name="award_01"
              height={24}
              width={24}
              className="text-[#276AEE]"
            />
            <span className="primary-gradient-text">View Leaderboard</span>
          </AnimatedButton>
          <AnimatedButton className="bg-primary-gradient text-white px-6 py-4 rounded-[46px] flex items-center gap-2 text-sm font-medium border border-[rgba(21,86,216,0.3)]">
            <Icon name="user_circle" height={24} width={24} />
            View Main Profile
          </AnimatedButton>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-between gap-6">
        {/* Left Sidebar */}
        <div className=" flex flex-col gap-6">
          {/* Profile Card */}
          <div className="bg-[rgba(255,255,255,0.3)]  overflow-hidden relative border border-white rounded-[24px]">
            {/* Background Image */}
            <div className="h-[149px] relative overflow-hidden">
              <Image
                src="/content/task-profile-bg.png"
                alt="task-profile-bg"
                fill
                className="object-cover"
              />
            </div>

            {/* Profile Info */}
            <div className="p-5 flex flex-col gap-4">
              {/* Avatar */}
              <div className="relative -mt-30">
                <div className="border-2 border-white rounded-full size-24 overflow-hidden relative">
                  <Image
                    src={athleteData.avatar}
                    alt={athleteData.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name and Details */}
              <div className="flex flex-col gap-1">
                <h2 className="font-medium text-xl leading-normal text-dark">
                  {athleteData.name}
                </h2>
                <div className="flex items-center justify-between text-xs text-dark">
                  <span>Joined: {athleteData.joinDate}</span>
                  <span>Last online: {athleteData.lastOnline}</span>
                </div>
              </div>

              {/* Add Program Position Button */}
              <AnimatedButton
                onClick={() => setIsPositionModalOpen(true)}
                className="bg-primary-gradient text-white px-5 py-3 rounded-xl w-full flex items-center justify-center text-base font-medium"
              >
                Add Program Position
              </AnimatedButton>
            </div>

            {/* Stats Cards */}
            <div className="px-5 pb-5 flex flex-col gap-2.5">
              <div className="flex gap-2.5">
                <div className="bg-white rounded-2xl p-5 flex-1">
                  <p className="font-semibold text-2xl leading-normal text-dark">
                    #{athleteData.currentRank}
                  </p>
                  <p className="font-medium text-xs leading-[1.4] text-paragraph-dark mt-1.5">
                    Current Rank
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-5 flex-1">
                  <p className="font-semibold text-2xl leading-normal text-dark">
                    {athleteData.totalPoints} pts
                  </p>
                  <p className="font-medium text-xs leading-[1.4] text-paragraph-dark mt-1.5">
                    Total Points
                  </p>
                </div>
              </div>
              <div className="flex gap-2.5">
                <div className="bg-white rounded-2xl p-5 flex-1">
                  <p className="font-semibold text-2xl leading-normal text-dark">
                    🔥 {athleteData.currentStreak} Days
                  </p>
                  <p className="font-medium text-xs leading-[1.4] text-paragraph-dark mt-1.5">
                    Current Streak
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-5 flex-1">
                  <p className="font-semibold text-2xl leading-normal text-dark">
                    {athleteData.ongoingProgram}%
                  </p>
                  <p className="font-medium text-xs leading-[1.4] text-paragraph-dark mt-1.5">
                    Ongoing Program
                  </p>
                </div>
              </div>
            </div>

            {/* Earned Badges */}
            <Badges />
          </div>
        </div>

        {/* Right Content */}
        <div className="bg-white/30 backdrop-blur-3xl border border-white p-5  rounded-[24px] w-3/4">
          <div className="flex-1 flex flex-col gap-6">
            {/* Top Row: Performance Stats and Active Streak */}
            <div className="flex gap-6">
              {/* Performance Stats */}
              <div className="bg-[rgba(255,255,255,0.6)] rounded-2xl p-5 flex-1">
                <h3 className="font-medium text-lg leading-normal text-dark mb-5">
                  Performance Stats
                </h3>
                <div className="flex gap-4">
                  <div className="bg-white rounded-2xl p-5 flex-1 h-[135px] flex flex-col justify-between">
                    <p className="font-semibold text-2xl leading-normal text-dark">
                      {athleteData.liveSessionsAttended}
                    </p>
                    <p className="font-medium text-xs leading-[1.4] text-paragraph-dark">
                      LIVE Sessions Attended
                    </p>
                  </div>
                  <div className="bg-white rounded-2xl p-5 flex-1 h-[135px] flex flex-col justify-between">
                    <p className="font-semibold text-2xl leading-normal primary-gradient-text">
                      {athleteData.averageGrade}%
                    </p>
                    <p className="font-medium text-xs leading-[1.4] text-paragraph-dark">
                      Average Assignment Grade
                    </p>
                  </div>
                </div>
              </div>

              {/* Active Streak */}
              <ActiveStreak />
            </div>

            {/* Recent Activity */}
            <div className="bg-[rgba(255,255,255,0.6)] rounded-2xl p-5">
              <h3 className="font-medium text-lg leading-normal text-dark mb-5">
                Recent Activity
              </h3>
              <div className="flex flex-col gap-4">
                {recentActivities.map((activity, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-3">
                      <div className="bg-white/30 rounded-full size-12 flex items-center justify-center shrink-0">
                        <Icon
                          name={activity.icon}
                          height={24}
                          width={24}
                          className="text-dark"
                        />
                      </div>
                      <div className="flex-1 flex items-center justify-between">
                        <div className="flex flex-col gap-1">
                          <p className="font-medium text-sm leading-[1.3] text-dark">
                            {activity.title}
                          </p>
                          <p className="font-normal text-xs leading-[1.4] text-paragraph-dark">
                            {activity.time}
                          </p>
                        </div>
                        <div className="bg-gradient-to-b from-[rgba(183,183,183,0.12)] to-[rgba(183,183,183,0.15)] border border-[rgba(183,183,183,0.1)] rounded-full px-2.5 py-1.5 h-6 flex items-center">
                          <p className="font-medium text-[10px] leading-[17px] text-paragraph-dark">
                            {activity.points}
                          </p>
                        </div>
                      </div>
                    </div>
                    {index < recentActivities.length - 1 && (
                      <div className="h-px bg-white/30 mt-4" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Progress Tracking */}
            <div className="bg-[rgba(255,255,255,0.6)] rounded-2xl p-5">
              <h3 className="font-medium text-lg leading-normal text-dark mb-6">
                Progress Tracking
              </h3>
              <div className="flex flex-col gap-4">
                {progressItems.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-medium text-sm leading-[1.3] text-dark">
                        {item.label}
                      </p>
                      <p className="font-medium text-[10px] leading-[1.4] text-dark">
                        {item.percentage}% Complete
                      </p>
                    </div>
                    <div className="bg-[#c4d4fd] h-2 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary-gradient rounded-full transition-all"
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    {index < progressItems.length - 1 && (
                      <div className="h-px bg-white/30 mt-4" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Position Modal */}
      {isPositionModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsPositionModalOpen(false)}
          />
          {/* Modal Content */}
          <div className="relative z-10 w-full max-w-[737px]">
            <Position
              isOpen={isPositionModalOpen}
              onClose={() => setIsPositionModalOpen(false)}
              athleteName={athleteData.name}
              joinDate={`Joined ${athleteData.joinDate}`}
              avatar={athleteData.avatar}
            />
          </div>
        </div>
      )}
    </div>
  );
}