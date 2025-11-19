"use client";

import dynamic from "next/dynamic";
import News from "./_components/News";
import TodaysTask from "./_components/TodaysTask";
import CommunityFeed from "./_components/CommunityFeed";
import RecentActivity from "./_components/RecentActivity";
import YourAthletesTasks from "./_components/YourAthletesTasks";

const FinancialOverview = dynamic(
  () => import("./_components/FinancialOverview"),
  { ssr: false }
);

export default function Page() {
  return (
    <div className="grid lg:grid-cols-[1fr_416px] gap-4">
      <div className="space-y-4">
        <News />
        <FinancialOverview />
        <YourAthletesTasks />
      </div>
      <div className="space-y-4">
        <RecentActivity />
        <TodaysTask />
        <CommunityFeed />
      </div>
    </div>
  );
}
