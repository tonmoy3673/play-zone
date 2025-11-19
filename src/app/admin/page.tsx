import Card from "@/components/ui/Card";
import TopHeader from "./_components/TopHeader";
import SignupSource from "./_components/SignupSource";
import KeyPerforming from "./_components/KeyPerforming";
import TaskCompletion from "./_components/TaskCompletion";
import CoreUserMetrics from "./_components/CoreUserMetrics";
import EngagementMatrix from "./_components/EngagementMatrix";
import ConversionFunnel from "./_components/ConversionFunnel";
import CoachCentricMatrix from "./_components/CoachCentricMatrix";
import { SectionHeader } from "@/components/shared/SectionHeader";
import DailyLoginActivity from "./_components/DailyLoginActivity";
import AthleteCentricMatrix from "./_components/AthleteCentricMatrix";
import TopPerformingCoaches from "./_components/TopPerformingCoaches";
import TopPerformingAthletes from "./_components/TopPerformingAthletes";

export default function AdminDashboard() {
  return (
    <div className="space-y-4">
      <TopHeader />

      <Card className="space-y-4">
        <CoreUserMetrics />
        <DailyLoginActivity />
      </Card>

      <Card className="space-y-4">
        <SectionHeader title="Engagement Metrics" />

        <div className="grid md:grid-cols-2 gap-4">
          <EngagementMatrix />
          <TaskCompletion />
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-4">
        <Card className="space-y-6 md:space-y-8">
          <CoachCentricMatrix />
          <TopPerformingCoaches />
        </Card>
        <Card className="space-y-6 md:space-y-8">
          <AthleteCentricMatrix />
          <TopPerformingAthletes />
        </Card>
      </div>

      <Card>
        <SectionHeader title="Growth & Funnel Metrics" />

        <div className="grid md:grid-cols-3 gap-4">
          <SignupSource />
          <ConversionFunnel />
          <KeyPerforming />
        </div>
      </Card>
    </div>
  );
}
