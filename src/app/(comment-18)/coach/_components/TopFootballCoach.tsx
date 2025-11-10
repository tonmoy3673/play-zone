import CoachList from "./CoachList";
import { SectionHeader } from "@/components/shared/SectionHeader";

const TopFootballCoach = () => {
  return (
    <div>
      <SectionHeader
        title="Top Football Coaches"
        href="/"
        iconName="football_emoji"
        className="mb-5"
      />

      <CoachList />
    </div>
  );
};

export default TopFootballCoach;
