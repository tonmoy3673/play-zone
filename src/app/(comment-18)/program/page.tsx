import NewReleaseProgram from "./_components/NewReleaseProgram";
import TrendingProgram from "./_components/TrendingProgram";
import ProgramProfileHeader from "./_components/ProgramProfileHeader";
import BeginnerFriendlyProgram from "./_components/BeginnerFriendlyProgram";

const ProgramPage = () => {
  return (
    <div className="bg-white/30 backdrop-blur-3xl mx-auto rounded-2xl md:rounded-3xl border border-white p-8 space-y-6 md:space-y-8">
      <ProgramProfileHeader />
      <TrendingProgram />
      <NewReleaseProgram />
      <BeginnerFriendlyProgram />
    </div>
  );
};

export default ProgramPage;
