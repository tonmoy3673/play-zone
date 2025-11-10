import CoachAbout from "./_components/CoachAbout";
import CoachPrograms from "./_components/CoachPrograms";
import CoachProfileHeader from "./_components/CoachProfileHeader";
import CoachTestimonials from "./_components/CoachTestimonials";

const CoachProfilePage = () => {
  return (
    <div className="bg-white/30 backdrop-blur-3xl mx-auto rounded-2xl md:rounded-3xl border border-white p-8 space-y-6 md:space-y-8">
      <div className="space-y-8">
        <CoachProfileHeader />

        <div className="grid md:grid-cols-2 gap-4">
          <CoachAbout />
          <CoachTestimonials />
        </div>

        <CoachPrograms />
      </div>
    </div>
  );
};

export default CoachProfilePage;
