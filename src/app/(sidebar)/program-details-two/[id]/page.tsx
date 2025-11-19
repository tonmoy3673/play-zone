import Card from "@/components/ui/Card";
import AboutCoach from "./_components/AboutCoach";
import ProgramAbout from "./_components/ProgramAbout";
import ProgramReview from "./_components/ProgramReview";
import RelatedProgram from "./_components/CurrentProgram";
import ProgramPricingCard from "./_components/ProgramPricingCard";
import ProgramProfileHeader from "./_components/ProgramProfileHeader";

const ProgramPage = () => {
  return (
    <Card className="md:p-8 space-y-4 after:absolute after:size-48 after:bg-gradient-to-tr after:blur-3xl after:from-blue-400 after:to-transparent after:bottom-0 after:left-0 after:z-[-1]">
      <ProgramProfileHeader />

      <div className="grid md:grid-cols-[1fr_392px] gap-4 items-start">
        <div className="space-y-4">
          <ProgramAbout />
          <AboutCoach />
          <ProgramReview />
          <RelatedProgram />
        </div>

        <ProgramPricingCard />
      </div>
    </Card>
  );
};

export default ProgramPage;
