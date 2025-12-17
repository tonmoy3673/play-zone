"use client";

import MatrixCards from "./_components/MatrixCards";
import { AnimatedButton } from "@/components/ui/Button";
import DailyEngagement from "./_components/DailyEngagement";
import AthletesMissingTasks from "./_components/AthletesMissingTasks";
import TopPerformingModules from "./_components/TopPerformingModules";

export default function SpecificProgramAnalyticsPage() {
  return (
    <div className="space-y-4">
      <MatrixCards />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <DailyEngagement />

        <div className="space-y-4">
          <AthletesMissingTasks />
          <TopPerformingModules />
        </div>
      </div>

      <div className="flex justify-end mt-8">
        <AnimatedButton className="flex items-center gap-1.5 py-4 px-4 h-12 rounded-full text-white text-sm font-medium bg-primary-gradient">
          Duplicate Program
        </AnimatedButton>
      </div>
    </div>
  );
}
