import CoachList from "./CoachList";
import { SectionHeader } from "@/components/shared/SectionHeader";

const MostFollowedCoach = () => {
  return (
    <div>
      <SectionHeader
        title="Most Followed Coaches"
        href="/"
        iconName="fire_emoji"
        className="mb-5"
      />

      <CoachList />
    </div>
  );
};

export default MostFollowedCoach;
