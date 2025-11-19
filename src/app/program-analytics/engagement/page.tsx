import MatrixCards from "./_components/MatrixCards";
import ActivityHeatMap from "./_components/ActivityHeatMap";
import ContentEngagement from "./_components/ContentEngagement";
import DeviceAndPlatform from "./_components/DeviceAndPlatform";
import BehavioralInsights from "./_components/BehavioralInsights";
import ContentEngagementBars from "./_components/ContentEngagementBars";

export default function EngagementPage() {
  return (
    <div className="space-y-4">
      <MatrixCards />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_443px] gap-4">
        <ActivityHeatMap />
        <ContentEngagement />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <ContentEngagementBars />
        <DeviceAndPlatform />
      </div>

      <BehavioralInsights />
    </div>
  );
}
