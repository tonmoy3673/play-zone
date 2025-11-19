import Card from "@/components/ui/Card";
import Filter from "./_components/Filter";
import NewCoach from "./_components/NewRisingCoach";
import ConsultCoach from "./_components/ConsultCoach";
import TopFootballCoach from "./_components/TopFootballCoach";
import MostFollowedCoach from "./_components/MostFollowedCoach";

const CoachPage = () => {
  return (
    <Card className="md:p-8 space-y-6 md:space-y-8 after:absolute after:size-48 after:bg-gradient-to-tr after:blur-3xl after:from-blue-400 after:to-transparent after:bottom-0 after:left-0 after:z-[-1]">
      <Filter />
      <MostFollowedCoach />
      <NewCoach />
      <TopFootballCoach />
      <ConsultCoach />
    </Card>
  );
};

export default CoachPage;
