"use client";

import { useState } from "react";
import { Calendar, Clock, User, MessageCircle, Bell } from "lucide-react";
import { AnimatedButton } from "@/components/ui/Button";
import Icon from "@/utils/icon";
import AnnouncementCard from "./AnnouncementCard";

const announcements = [
  {
    id: 1,
    author: "Sam Guy",
    handle: "@samguy",
    badge: "Scheduled",
    date: "12 June, 2025",
    time: "12:03 PM",
    title: "Live video session",
    description: "COACH GORDAN & COACH MCCULLUM Live video session",
    buttons: [
      { label: "Live Session", variant: "primary" as const },
      { label: "Required", variant: "secondary" as const },
    ],
  },
  {
    id: 2,
    author: "Sam Guy",
    handle: "@samguy",
    badge: "Scheduled",
    date: "12 June, 2025",
    time: "12:03 PM",
    title: "Live video session",
    description: "COACH GORDAN & COACH MCCULLUM Live video session",
    buttons: [
      { label: "Live Session", variant: "primary" as const },
      { label: "Required", variant: "secondary" as const },
    ],
  },
  {
    id: 3,
    author: "Sam Guy",
    handle: "@samguy",
    badge: "Scheduled",
    date: "12 June, 2025",
    time: "12:03 PM",
    title: "Live video session",
    description: "COACH GORDAN & COACH MCCULLUM Live video session",
    buttons: [
      { label: "Live Session", variant: "primary" as const },
      { label: "Required", variant: "secondary" as const },
    ],
  },
];

const AnnouncementDetailsData = {
  title: "Elite Basketball Fundamentals",
  scheduledDate: "June 18, 2025",
  scheduledTime: "2:00 PM",
  createdBy: { name: "Admin Jessica", avatar: "AJ" },
  type: ["Live Session", "Required"],
  audience: "All Team Members",
  engagement: {
    commentsEnabled: true,
    notificationsEnabled: true,
  },
  callToAction: "Add to Calendar",
};

const Upcoming = () => {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(
    announcements[0]
  );

  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
      {/* Left Panel - Upcoming Announcements List */}
      <div className="col-span-2">
        <div className="p-4 bg-[#FFFFFF4D] rounded-3xl border border-white">
          {/* Header */}
          <div className="bg-[#FFFFFF] flex justify-between items-center px-6 py-4 rounded-t-2xl">
            <h2 className="text-lg font-normal text-dark">
              Upcoming / Scheduled Announcements
            </h2>
            <div className="flex gap-3">
              <Icon name="search" width={16} height={16} />
              <Icon name="compare" width={16} height={16} />
            </div>
          </div>

          {/* Content - Announcements List */}
          <div className="bg-[#FFFFFF99] p-6 rounded-b-2xl space-y-4">
            {/* Date Header */}
            <div className="mb-4">
              <p className="text-lg font-normal text-dark">12 June, 2025</p>
            </div>

            {/* Announcements */}
            {announcements.map((announcement) => (
              <AnnouncementCard
                key={announcement.id}
                data={announcement}
                onClick={() => setSelectedAnnouncement(announcement)}
                onEdit={() =>
                  console.log("Edit announcement:", announcement.id)
                }
                onDelete={() =>
                  console.log("Delete announcement:", announcement.id)
                }
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel - Announcement Details */}
      <div className="col-span-1">
        <div className="bg-[#FFFFFF4D] rounded-3xl border border-white border-opacity-20">
          {/* Header */}
          <div className="bg-[#FFFFFF] flex justify-between items-center px-6 py-4 rounded-t-2xl">
            <h2 className="text-lg font-normal text-dark">
              Announcement Details
            </h2>
          </div>

          {/* Content - Details */}
          <div className="bg-[#FFFFFF99] p-5 rounded-b-2xl space-y-5">
            <div className="bg-[#FFFFFF99] p-5 rounded-2xl space-y-6">
              {/* Announcement Title */}
              <div>
                <p className="text-sm text-[#141b3499] mb-3 font-medium">
                  Announcement Title
                </p>
                <p className="text-sm font-medium text-dark">
                  {AnnouncementDetailsData.title}
                </p>
              </div>

              {/* Scheduled For */}
              <div>
                <p className="text-sm text-[#141b3499] mb-3 font-medium">
                  Scheduled For
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar
                      width={16}
                      height={16}
                      className="text-[#141b3499]"
                    />
                    <span className="text-sm text-dark">
                      {AnnouncementDetailsData.scheduledDate}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock
                      width={16}
                      height={16}
                      className="text-[#141b3499]"
                    />
                    <span className="text-sm text-dark">
                      {AnnouncementDetailsData.scheduledTime}
                    </span>
                  </div>
                </div>
              </div>

              {/* Created By */}
              <div>
                <p className="text-sm text-[#141b3499] mb-2 font-medium">
                  Created By
                </p>
                <div className="flex items-center gap-2">
                  <img
                    src="/user.png"
                    alt={AnnouncementDetailsData.createdBy.name}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="text-sm text-dark">
                    {AnnouncementDetailsData.createdBy.name}
                  </span>
                </div>
              </div>

              {/* Type */}
              <div>
                <p className="text-sm text-[#141b3499] mb-2 font-medium">
                  Type
                </p>
                <div className="flex gap-2 flex-wrap">
                  {AnnouncementDetailsData.type.map((tag, idx) => (
                    <AnimatedButton
                      key={idx}
                      style={{
                        borderRadius: "50px",
                        border: "1px solid rgba(21, 86, 216, 0.10)",
                        background: "rgba(69, 127, 243, 0.15)",
                      }}
                      className="font-normal text-[#276AEE] px-5 text-sm py-3 leading-4 rounded-full flex items-center gap-2 transition-all whitespace-nowrap"
                    >
                      {tag}
                    </AnimatedButton>
                  ))}
                </div>
              </div>

              {/* Audience */}
              <div>
                <p className="text-sm text-[#141b3499] mb-2 font-medium">
                  Audience
                </p>
                <div className="flex items-center gap-2">
                  <User width={16} height={16} className="text-[#141b3499]" />
                  <span className="text-sm text-dark">
                    {AnnouncementDetailsData.audience}
                  </span>
                </div>
              </div>

              {/* Engagement Settings */}
              <div>
                <p className="text-sm text-[#141b3499] mb-3 font-medium">
                  Engagement Settings
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MessageCircle
                      width={16}
                      height={16}
                      className="text-[#141b3499]"
                    />
                    <span className="text-sm text-dark">Comments Enabled</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bell width={16} height={16} className="text-[#141b3499]" />
                    <span className="text-sm text-dark">
                      Notifications Enabled
                    </span>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div>
                <p className="text-sm text-[#141b3499] mb-3 font-medium">
                  Call to Action
                </p>
                <div className="mt-3">
                  <p className="text-sm">Add to Calendar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
