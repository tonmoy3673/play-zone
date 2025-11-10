import NewCoach from "./_components/NewRisingCoach";
import ConsultCoach from "./_components/ConsultCoach";
import TopFootballCoach from "./_components/TopFootballCoach";
import MostFollowedCoach from "./_components/MostFollowedCoach";

const CoachPage = () => {
  return (
    <div className="bg-white/30 backdrop-blur-3xl mx-auto rounded-2xl md:rounded-3xl border border-white p-8 space-y-6 md:space-y-8">
      <MostFollowedCoach />
      <NewCoach />
      <TopFootballCoach />
      <ConsultCoach />
    </div>
  );
};

export default CoachPage;
