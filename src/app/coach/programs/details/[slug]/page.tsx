import React from "react";
import HeroSection from "../_components/hero";
import RecentActivity from "../_components/RecentActivitySection";
import LeaderboardSection from "../_components/LeaderboardSection";
import WeeklyTasksOverview from "@/app/athlete/_components/WeeklyTaskOverview";
import TasksPage from "@/app/athlete/_components/WeeklyTaskOverview";
import TasksCoachPage from "@/app/athlete/_components/CoachWeeklyTask";

const Page = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <HeroSection />
        </div>
        <div className="lg:col-span-1">
          <RecentActivity />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="mt-6">
          <LeaderboardSection />
        </div>
        <div className="mt-6">
          <TasksCoachPage />
        </div>
      </div>
    </>
  );
};

export default Page;
