"use client";
import HeroSection from "@/app/coach/programs/details/_components/hero";
import LeaderboardSection from "@/app/coach/programs/details/_components/LeaderboardSection";
import RecentActivity from "@/app/coach/programs/details/_components/RecentActivitySection";
import ProgramCard from "../_components/ProgramDetailsContent";
import TasksPage from "@/app/athlete/_components/WeeklyTaskOverview";
import Icon from "@/utils/icon";
import AnnouncementCard from "@/app/athlete/announcement/_components/AnnouncementCard";
const announcements = [
  {
    id: 1,
    author: "Sam Guy",
    handle: "@samguy",
    badge: "THE MINDSET",
    date: "Today",
    time: "8 hours ago",
    title: "Live video session",
    description: "COACH GORDAN & COACH MCCULLUM Live video session",
    image: "/announcement.png",
    isVideo: true,
    likes: 891,
    replies: 34,
    buttons: [
      { label: "Join Live", variant: "primary" as const },
      { label: "RSVP to Practice", variant: "secondary" as const },
    ],
  },
  {
    id: 2,
    author: "Sam Guy",
    handle: "@samguy",
    badge: "THE MINDSET",
    date: "Today",
    time: "4 hours ago",
    title: "Casual Ride!",
    description:
      "Join us for a Friday morning casual bike ride around Central Park! We will meet you at 9AM EST near Great Lawn, Sheep Field 7!",
    image: "/location.png",
    likes: 891,
    replies: 34,
    buttons: [
      { label: "Count Me In", variant: "primary" as const },
      { label: "View Location", variant: "secondary" as const },
    ],
  },
  {
    id: 3,
    author: "Sam Guy",
    handle: "@samguy",
    badge: "THE MINDSET",
    date: "Today",
    time: "2 hours ago",
    title: "The Battle Begins!",
    description:
      "The May Fitz starts the 28th June at NY. Join us for back to back matches, thrilling gates, and non-stop energy. Don't miss the action - bring your friends, wear your colors, and show your support! 🏈",
    likes: 891,
    replies: 34,
    buttons: [
      { label: "Confirm Attendance", variant: "primary" as const },
      { label: "View Agenda", variant: "secondary" as const },
    ],
  },
];
const Page = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="lg:col-span-2">
        <HeroSection />
      </div>
      <div className="flex gap-7 mt-7">
        <div className="flex flex-col gap-7">
          <ProgramCard />
          <TasksPage />
        </div>
        <RecentActivity />
      </div>

      <div className="flex gap-7">
        <div className="mt-7 flex-1">
          <div className="rounded-3xl border border-white bg-[#FFFFFF4D] p-6">
            {/* Header Section */}
            <div className="flex items-center justify-between rounded-t-2xl bg-white px-8 py-4">
              <h2 className="text-lg font-medium text-dark">
                {"Today's"} Announcements
              </h2>
              <div className="flex gap-3">
                <Icon name="search" width={16} height={16} />
                <Icon name="compare" width={16} height={16} />
              </div>
            </div>

            {/* Content Section - Announcements List */}
            <div className="space-y-6 rounded-b-2xl bg-[#FFFFFF99] p-5">
              {announcements.map((announcement) => (
                <AnnouncementCard
                  key={announcement.id}
                  data={announcement}
                  onClick={() =>
                    console.log("Clicked announcement:", announcement.id)
                  }
                  // onEdit={() => console.log('Edit announcement:', announcement.id)}
                  // onDelete={() => console.log('Delete announcement:', announcement.id)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-7 flex-1">
          <LeaderboardSection />
        </div>
      </div>
    </div>
  );
};

export default Page;
