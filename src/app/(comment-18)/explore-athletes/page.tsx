import AthletesNearYou from "./_components/AthletesNearYou";
import AthletesWeek from "./_components/AthletesWeek";
import Banner from "./_components/Banner";
import RisingStarsInFootball from "./_components/RisingStarsInFootball";
import VerifiedAthletes from "./_components/VerifiedAthletes";

const ExploreAthletesPage = () => {
  return (
    <div className="p-6 md:p-8 space-y-6 md:space-y-8 rounded-2xl md:rounded-3xl bg-white/30 border border-white">
      <Banner />
      <AthletesWeek />
      <VerifiedAthletes />
      <AthletesNearYou />
      <RisingStarsInFootball />
    </div>
  );
};

export default ExploreAthletesPage;
