/* eslint-disable @next/next/no-img-element */
import CommunityFeed from "../content/new/_components/CommunityFeed";
import YourAthletesTasks from "../content/new/_components/YourAthletesTasks";
import FigmaCardGrid from "./_components/FigmaCardGrid";
import FinancialOverview from "./_components/FinancialOverview";
import News from "./_components/News";
import PremiumUpsell from "./_components/PremiumUpsell";
import ProgramLiveCongrats from "./_components/ProgramLiveCongrats";
import ProgramShowcase from "./_components/ProgramShowcase";
import ProgramStart from "./_components/ProgramStart";
import RecentActivity from "./_components/RecentActivity";
import TodaysTask from "./_components/TodaysTask";
import WelcomeIntro from "./_components/WelcomeIntro";

export default function page() {
  return (
    <div className="flex flex-row gap-4">
      {/* news card */}
      <div className="flex-2 flex flex-col gap-y-4">
        <News />
        <FinancialOverview />
         <YourAthletesTasks />
        <WelcomeIntro />
        <ProgramShowcase />
        <PremiumUpsell />
        <ProgramLiveCongrats />
        <FigmaCardGrid />
        
      </div>
      <div className="flex-1 flex flex-col gap-y-4">
        <RecentActivity />
        <TodaysTask />
         <CommunityFeed />
        {/* <ProgramStart /> */}

      </div>

      {/* <News />
      <FinancialOverview />
      <RecentActivity />
      
      <YourAthletesTasks />
      <CommunityFeed /> */}
    </div>
  );
}
