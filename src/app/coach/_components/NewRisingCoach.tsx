import CoachList from "./CoachList";
import { SectionHeader } from "@/components/shared/SectionHeader";

const NewCoach = () => {
  return (
    <div>
      <SectionHeader
        title="New & Rising Coaches"
        href="/"
        iconName="rocket_emoji"
        className="mb-5"
      />

      <CoachList />
    </div>
  );
};

export default NewCoach;
