import Card from "@/components/ui/Card";
import Banner from "./_components/Banner";
import Filter from "./_components/Filter";
import AthletesWeek from "./_components/AthletesWeek";
import VerifiedAthletes from "./_components/VerifiedAthletes";
import AthletesNearYou from "./_components/AthletesNearYou";
import RisingStarsInFootball from "./_components/RisingStarsInFootball";

const ExploreAthletesPage = () => {
  return (
    <Card className="md:p-8 space-y-6 md:space-y-8 after:absolute after:size-48 after:bg-gradient-to-tr after:blur-3xl after:from-blue-400 after:to-transparent after:bottom-0 after:left-0 after:z-[-1]">
      <Banner />
      <Filter />
      <AthletesWeek />
      <VerifiedAthletes />
      <AthletesNearYou />
      <RisingStarsInFootball />
    </Card>
  );
};

export default ExploreAthletesPage;
