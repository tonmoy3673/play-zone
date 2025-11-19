import AnnounceCard, { AnnounceProp } from "./AnnounceCard";
import { SectionHeader } from "@/components/shared/SectionHeader";

const announces: AnnounceProp[] = [
  {
    title: "Scheduled Maintenance Window",
    description:
      "System maintenance scheduled for January 20th from 2:00 AM to 4:00 AM EST. Some features may be temporarily unavailable.",
    action: "Maintenance",
    status: "Active",
    push: "On",
    email: "On",
    target: "Free users",
    date: "Jan 16, 2025",
  },
];

const ScheduledAnnouncement = () => {
  return (
    <div>
      <SectionHeader
        className="mb-4"
        title="Scheduled Announcement"
        titleClass="text-base"
      />

      <div className="grid gap-3">
        {announces?.map((announce, idx) => (
          <AnnounceCard key={idx} announce={announce} />
        ))}
      </div>
    </div>
  );
};

export default ScheduledAnnouncement;
