import Card from "@/components/ui/Card";
import CoachAbout from "./_components/CoachAbout";
import BackBtn from "@/components/shared/BackBtn";
import CoachPrograms from "./_components/CoachPrograms";
import CoachProfileHeader from "./_components/CoachProfileHeader";
import CoachTestimonials from "./_components/CoachTestimonials";

const CoachProfilePage = () => {
  return (
    <Card className="md:p-8 after:absolute after:size-48 after:bg-gradient-to-tr after:blur-3xl after:from-blue-400 after:to-transparent after:bottom-0 after:left-0 after:z-[-1]">
      <BackBtn title="Profile" href="/coach" className="mb-5 md:mb-5" />

      <div className="space-y-4">
        <CoachProfileHeader />

        <div className="grid md:grid-cols-2 gap-4">
          <CoachAbout />
          <CoachTestimonials />
        </div>

        <CoachPrograms />
      </div>
    </Card>
  );
};

export default CoachProfilePage;
