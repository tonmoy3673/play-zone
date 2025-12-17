import Card from "@/components/ui/Card";
import Filter from "./_components/Filter";
import TrendingProgram from "./_components/TrendingProgram";
import NewReleaseProgram from "./_components/NewReleaseProgram";
import ProgramProfileHeader from "./_components/ProgramProfileHeader";
import BeginnerFriendlyProgram from "./_components/BeginnerFriendlyProgram";

const ProgramPage = () => {
  return (
    <Card className="md:p-8 space-y-6 md:space-y-8 after:absolute after:size-48 after:bg-gradient-to-tr after:blur-3xl after:from-blue-400 after:to-transparent after:bottom-0 after:left-0 after:z-[-1]">
      <Filter />
      <ProgramProfileHeader />
      <TrendingProgram />
      <NewReleaseProgram />
      <BeginnerFriendlyProgram />
    </Card>
  );
};

export default ProgramPage;
