import CoachList from "./CoachList";
import { SectionHeader } from "@/components/shared/SectionHeader";

const ConsultCoach = () => {
  return (
    <div>
      <SectionHeader
        title="Coaches With Open DMs / Consults"
        href="/"
        iconName="message_emoji"
        className="mb-5"
      />

      <CoachList />
    </div>
  );
};

export default ConsultCoach;
