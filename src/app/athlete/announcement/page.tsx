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
import Image from "next/image";

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
          {/* <AnimatedButton
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
          </AnimatedButton> */}
        </div>

        {/* Main Announcements Container */}
        {/* Main Announcements Container */}
        {activeFilter === "Today" && (
          <div className="space-y-6">
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
              <div className="col-span-2">
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

              <div className="col-span-1">
                <div className="">
                  {/* Header */}
                  <div className="bg-[#FFFFFF] flex justify-between items-center px-6 py-4 rounded-t-2xl">
                    <h2 className="text-lg font-normal text-dark">
                      Activity
                    </h2>
                  </div>

                  {/* Content - Details */}
                  <div className="bg-[#FFFFFF99] p-5 rounded-b-2xl space-y-5 mb-4">
                    {/* Announcement Title */}
                    <div className="flex justify-between items-center">
                      <p className="text-base text-dark mb-3 font-medium">
                        Recent Activity
                      </p>
                      <span className="text-xs font-medium text-[#5C8FF7]">
                        See All
                      </span>
                    </div>

                    {/* Scheduled For */}
                    <div className="flex flex-col gap-y-4 mb-4">
                      <div className="flex gap-2 items-start mb-3">
                        <Image
                          src="/user.png"
                          alt="User"
                          width={40}
                          height={40}
                        />
                        <div className="flex flex-col">
                          <p className="text-sm font-medium">
                            Sam Guy comments on your announcement, ”it’s very
                            hel....
                          </p>
                          <span className="text-xs">1 min ago</span>
                        </div>
                      </div>

                      <div className="flex gap-2 items-start mb-3">
                        <Image
                          src="/user.png"
                          alt="User"
                          width={40}
                          height={40}
                        />
                        <div className="flex flex-col">
                          <p className="text-sm font-medium">
                            Sam Guy comments on your announcement, ”it’s very
                            hel....
                          </p>
                          <span className="text-xs">1 min ago</span>
                        </div>
                      </div>

                      <div className="flex gap-2 items-start mb-3">
                        <Image
                          src="/user.png"
                          alt="User"
                          width={40}
                          height={40}
                        />
                        <div className="flex flex-col">
                          <p className="text-sm font-medium">
                            Sam Guy comments on your accounsments, ”it’s very
                            hel....
                          </p>
                          <span className="text-xs">1 min ago</span>
                        </div>
                      </div>

                      <div className="flex gap-2 items-start mb-3">
                        <Image
                          src="/user.png"
                          alt="User"
                          width={40}
                          height={40}
                        />
                        <div className="flex flex-col">
                          <p className="text-sm font-medium">
                            Sam Guy comments on your accounsments, ”it’s very
                            hel....
                          </p>
                          <span className="text-xs">1 min ago</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#FFFFFF99] p-5 rounded-b-2xl space-y-5 mb-5 rounded-2xl">
                    <div className="flex justify-between items-center mt-4 ">
                      <p className="text-base text-dark mb-3 font-medium">
                        Upcoming Event
                      </p>
                      <span className="text-xs font-medium text-[#5C8FF7]">
                        See All
                      </span>
                    </div>

                    <div className="flex flex-col gap-y-4">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <div
                          key={index}
                          className="flex gap-2 items-start mb-3"
                        >
                          <Image
                            src="/event.svg"
                            alt="User"
                            width={40}
                            height={40}
                          />
                          <div className="flex flex-col space-y-1">
                            <p className="text-base font-medium">
                              Atlas Venture - Exclusive
                            </p>
                            <span className="text-xs text-[#141B34B2]">
                              Fri, Aug 3 at 3:30 PM
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-[#FFFFFF99] p-5 rounded-b-2xl space-y-5 rounded-2xl">
                    <div className="flex justify-between items-center mt-4">
                      <p className="text-xl text-dark mb-3 font-medium">
                        Announcement Preview
                      </p>
                    </div>

                    <div className="">
                      <p className="text-base font-medium text-[#141B34]">
                        Team Strategy Meeting{" "}
                      </p>
                      <span className="text-xs text-[#141B3480]">
                        Scheduled for June 7, 9:00 AM PST
                      </span>

                      <p className="py-4 text-base text-[#141B34] font-normal">
                        Pre-game strategy session. We'll review our opponent's
                        plays and finalize our game plan. All players must
                        attend.
                      </p>

                      <div className="flex flex-col p-12 justify-center items-center bg-white rounded-2xl mb-5">
                        <Icon name="video" width={24} height={24} />
                        <span className="text-sm font-medium ml-2 mt-5">
                          Strategy Presentation
                        </span>
                      </div>

                      <div className="flex justify-between gap-2 py-2">
                        <AnimatedButton className="flex w-1/2 items-center gap-1.5 px-4 py-3 -translate-y-2 rounded-full  text-white bg-primary-gradient">
                          <Icon
                            name="play"
                            height={14}
                            width={14}
                            className="text-white"
                          />
                          Add to Calendar
                        </AnimatedButton>

                        <AnimatedButton className="flex w-1/2 items-center gap-1.5 px-4 py-3 -translate-y-2 rounded-full  text-[#5C8FF7] bg-[#457FF326]">
                          <Icon
                            name="dashboard_circle"
                            height={14}
                            width={14}
                            className="text-[#5C8FF7]"
                          />
                          Acknowledge
                        </AnimatedButton>
                      </div>
                    </div>
                  </div>
                </div>
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
