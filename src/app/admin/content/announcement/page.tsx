import Card from "@/components/ui/Card";
import Filter from "./_components/Filter";
import MatrixCards from "./_components/MatrixCards";
import QuickAction from "./_components/QuickAction";
import CreateAnnouncement from "./_components/CreateAnnouncement";
import ActiveAnnouncement from "./_components/ActiveAnnouncement";
import ScheduledAnnouncement from "./_components/ScheduledAnnouncement";

const AnnouncementPage = () => {
  return (
    <div>
      <MatrixCards />

      <Card className="md:p-8 mb-4 mt-10 space-y-5">
        <div className="flex items-center gap-4 justify-between flex-wrap">
          <Filter />
          <CreateAnnouncement />
        </div>

        <ActiveAnnouncement />
        <ScheduledAnnouncement />
      </Card>

      <QuickAction />
    </div>
  );
};

export default AnnouncementPage;
