"use client";
import FilterTabs from "@/app/athlete/programs/_components/FilterTabs";
import { AnimatedButton } from "@/components/ui/Button";
import Icon from "@/utils/icon";
import { useState } from "react";
import Previous from "./_components/Previous";
import AnnouncementCard from "./_components/AnnouncementCard";
import TodayConversationList, {
  TodayConversationItem,
} from "./_components/TodayConversationList";
import Upcoming from "./_components/UpcomingAnnounce";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState("Today");

  const filters = [
    { label: "Today", count: 3 },
    { label: "Upcoming/Scheduled", count: 5 },
    { label: "Previous/Archived", count: 12 },
  ];

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

  const todayConversations: TodayConversationItem[] = [
    {
      id: 1,
      name: "Mike Thompson",
      timestamp: "2 hours ago",
      message:
        "I'm feeling confident. The new routine is\ncoming together well 👍",
      avatarUrl: "/user.png",
      isOnline: true,
    },
  ];

  return (
    <div>
      <div className="min-h-screen overflow-y-auto">
        {/* Filter Tabs and CTA */}
        <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
          <FilterTabs
            filters={filters}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
          <AnimatedButton
            onClick={() => router.push("/coach/announcement/create")}
            style={{
              borderRadius: "100px",
              background:
                "var(--Gradient, linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%))",
            }}
            className=" text-white font-normal px-5 text-sm py-2.5 rounded-full flex items-center gap-2 transition-all whitespace-nowrap"
          >
            <Icon name="plus" />
            Create New Announcement
          </AnimatedButton>
        </div>

        {/* Main Announcements Container */}
        {activeFilter === "Today" && (
          <div className="space-y-6">
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

            {/* <div className="rounded-3xl border border-[#EDF5F8] bg-white px-8 py-6">
              <TodayConversationList items={todayConversations} />
            </div> */}
          </div>
        )}

        {activeFilter === "Upcoming/Scheduled" && (
          <div>
            <Upcoming />
          </div>
        )}

        {activeFilter === "Previous/Archived" && (
          <div>
            <Previous />
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
