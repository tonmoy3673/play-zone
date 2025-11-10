import AboutCoach from "./_components/AboutCoach";
import ProgramAbout from "./_components/ProgramAbout";
import ProgramPricingCard from "./_components/ProgramPricingCard";
import ProgramProfileHeader from "./_components/ProgramProfileHeader";
import ProgramReview from "./_components/ProgramReview";
import RelatedProgram from "./_components/CurrentProgram";

const ProgramPage = () => {
  return (
    <div className="bg-white/30 backdrop-blur-3xl mx-auto rounded-2xl md:rounded-3xl border border-white p-8 space-y-6 md:space-y-8">
      <ProgramProfileHeader />

      <div className="grid md:grid-cols-[1fr_392px] gap-4">
        <div className="space-y-4">
          <ProgramAbout />
          <AboutCoach />
          <ProgramReview />
          <RelatedProgram />
        </div>
        <ProgramPricingCard />
      </div>
    </div>
  );
};

export default ProgramPage;
