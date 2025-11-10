"use client";

import { SectionHeader } from "@/components/shared/SectionHeader";
import Icon, { IconName } from "@/utils/icon";

export default function Achievements() {
  const achievementsData = [
    {
      id: 1,
      icon: "check_check" as IconName,
      title: "Completed 5 Programs",
      color: "text-gray-700",
    },
    {
      id: 2,
      icon: "toffee" as IconName,
      title: "Top 3 on Leaderboard",
      color: "text-yellow-600",
    },
    {
      id: 3,
      icon: "check_check" as IconName,
      title: "1-On-1s Completed: 8",
      color: "text-gray-700",
    },
    {
      id: 4,
      icon: "fire_emoji" as IconName,
      title: "10 Days Streak",
      color: "text-orange-500",
    },
  ];

  return (
    <div className="p-5 rounded-3xl border mt-5 bg-white/30 border-white">
      <SectionHeader title="Achievements" />

      <div className="space-y-2">
        {achievementsData.map((achievement) => (
          <div
            key={achievement.id}
            className="bg-white/60 rounded-2xl p-4 flex items-center gap-2"
          >
            <Icon name={achievement.icon} height={20} width={20} />
            <p className="text-sm font-medium text-dark">{achievement.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
