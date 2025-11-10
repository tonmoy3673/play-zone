import React from "react";
import { StatsCards } from "./_components/StatsCards";
import ProgramCard from "@/components/Athlete/ProgramCard";
import WeeklyTaskList from "./_components/WeeklyTaskOverview";
import CommunityFeed from "./_components/CommunityFeed";

const Page = () => {
  return (
    <div>
      <StatsCards />
      <ProgramCard />
      <div className="flex justify-between  pb-7 gap-4">
        <WeeklyTaskList />
        <CommunityFeed />
      </div>
    </div>
  );
};

export default Page;
