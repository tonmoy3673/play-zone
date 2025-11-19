import TopHeader from "./_components/TopHeader";
import MatrixCards from "./_components/MatrixCards";
import DailyGrowth from "./_components/DailyGrowth";
import RevenueTrend from "./_components/RevenueTrend";
import TrafficSource from "./_components/TrafficSource";
import WeeklyGrowth from "./_components/WeeklyGrowth";
import UserCohortRetention from "./_components/UserCohortRetention";
import UserCohortAnalytics from "./_components/UserCohortAnalytics";

const BusinessInsightsPage = () => {
  return (
    <div className="space-y-4">
      <TopHeader />

      <div className="grid md:grid-cols-2 gap-4">
        <MatrixCards />
        <RevenueTrend />
        <DailyGrowth />
        <WeeklyGrowth />
        <TrafficSource />
        <UserCohortRetention />
        <UserCohortAnalytics />
      </div>
    </div>
  );
};

export default BusinessInsightsPage;
