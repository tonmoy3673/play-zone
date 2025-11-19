"use client";

import { useState } from "react";
import {
  Calendar,
  Clock,
  User,
  MessageCircle,
  Bell,
  CheckCircle2,
} from "lucide-react";
import { AnimatedButton } from "@/components/ui/Button";
import Icon from "@/utils/icon";
import FilterTabs from "../../programs/_components/FilterTabs";
import AnnouncementCard from "./AnnouncementCard";
import Switch from "@/components/ui/Switch";

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
    buttons: [{ label: "View Details", variant: "primary" as const }],
    likes: 891,
    replies: 34,
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
    buttons: [{ label: "View Details", variant: "primary" as const }],
    likes: 891,
    replies: 34,
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
    buttons: [{ label: "View Details", variant: "primary" as const }],
    likes: 891,
    replies: 34,
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

const Previous = () => {
  const [activeFilter, setActiveFilter] = useState("All Time");

  const filters = [
    { label: "All Time" },
    { label: "Last 30 Days" },
    { label: "Q2 2025" },
    { label: "Q1 2025" },
    { label: "2024" },
  ];

  const [selectedAnnouncement, setSelectedAnnouncement] = useState(
    announcements[0]
  );

  const [recordingTipsEnabled, setRecordingTipsEnabled] = useState(true);

  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
      {/* Left Panel - Upcoming Announcements List */}
      <div className="col-span-2">
        <div className="p-5 bg-[#FFFFFF4D] rounded-3xl border border-white">
          {/* Header */}
          <div className="bg-[#FFFFFF] flex justify-between items-center px-6 py-4 rounded-t-2xl">
            <h2 className="text-lg font-normal text-dark">
              Previous / Archived Announcements
            </h2>
            <div className="flex gap-3">
              <Icon name="search" width={16} height={16} />
              <Icon name="compare" width={16} height={16} />
            </div>
          </div>

          {/* Content - Announcements List */}
          <div className="bg-[#FFFFFF99] p-6 rounded-b-2xl space-y-4">
            {/* Date Header */}
            <div className="flex items-start">
              <FilterTabs
                filters={filters}
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
              />
            </div>

            {/* Announcements */}
            {announcements.map((announcement) => (
              <AnnouncementCard
                key={announcement.id}
                data={announcement}
                onClick={() => setSelectedAnnouncement(announcement)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel - Announcement Details */}
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
                <p className="text-base text-dark mb-3 font-medium">
                  Archived Information
                </p>
              </div>

              {/* Scheduled For */}
              <div className="flex flex-col space-y-4">
                <div className="flex justify-between">
                  <span className="text-xs text-[#141b34b3]">
                    Total Archived:
                  </span>
                  <p className="text-sm text-dark">12 Announcements</p>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-[#141b34b3]">Date Range:</span>
                  <p className="text-sm text-dark">12 Jan 1 -Jun 7, 2025</p>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-[#141b34b3]">
                    Storaged Used:
                  </span>
                  <p className="text-sm text-dark">24.5 MB</p>
                </div>
              </div>
            </div>

            <div className="bg-[#FFFFFF99] p-5 rounded-2xl space-y-6">
              {/* Announcement Title */}
              <div className="flex justify-between items-center">
                <p className="text-base text-dark font-medium">Bulk Actions</p>
                <Icon
                  name="bulk_add"
                  width={24}
                  height={24}
                  className="text-dark"
                />
              </div>

              {/* Scheduled For */}
              <div className="flex flex-col space-y-4">
                <div className="flex justify-between mb-6">
                  <div className="flex gap-2">
                    <Icon
                      name="export"
                      width={16}
                      height={16}
                      className="text-[#141b34b3]"
                    />
                    <p className="text-sm text-dark">Export Archived Data</p>
                  </div>
                  <Icon
                    name="chev_right"
                    width={16}
                    height={16}
                    className="text-dark"
                  />
                </div>
                <div className="flex justify-between mb-6">
                  <div className="flex gap-2">
                    <Icon
                      name="delete"
                      width={16}
                      height={16}
                      className="text-[#141b34b3]"
                    />
                    <p className="text-sm text-dark">Delete Selected</p>
                  </div>
                  <Icon
                    name="chev_right"
                    width={16}
                    height={16}
                    className="text-dark"
                  />
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <Icon
                      name="refresh"
                      width={16}
                      height={16}
                      className="text-[#141b34b3]"
                    />
                    <p className="text-sm text-dark">Restore Selected</p>
                  </div>
                  <Icon
                    name="chev_right"
                    width={16}
                    height={16}
                    className="text-dark"
                  />
                </div>
              </div>
            </div>

            <div className="bg-[#FFFFFF99] p-5 rounded-2xl space-y-6">
              {/* Announcement Title */}
              <div className="flex justify-between items-center">
                <p className="text-base text-dark font-medium">
                  Archive Settings{" "}
                </p>
              </div>

              <div className="mt-4">
                <hr className="border-[#EFF3F4]" />
              </div>

              {/* Scheduled For */}
              <div className="flex flex-col space-y-4">
                <div className="flex justify-between mb-6">
                  <div className="">
                    <p className="text-sm text-dark">
                      Auto-archive after 60 days
                    </p>
                    <span className="text-[#141b34b3] text-xs">
                      Automatically move old announcement to archive
                    </span>
                  </div>
                  <Switch
                    value={recordingTipsEnabled}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setRecordingTipsEnabled(e.target.checked)
                    }
                  />
                </div>
                <div className="flex justify-between mb-6">
                  <div className="">
                    <p className="text-sm text-dark">
                      Auto-delete after 1 year
                    </p>
                    <span className="text-[#141b34b3] text-xs">
                      Permanently remove archived items
                    </span>
                  </div>
                  <Switch
                    value={recordingTipsEnabled}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setRecordingTipsEnabled(e.target.checked)
                    }
                  />
                </div>
                <div className="flex justify-between mb-6">
                  <div className="">
                    <p className="text-sm text-dark">Include engagement data</p>
                    <span className="text-[#141b34b3] text-xs">
                      Archive likes, comment, and interaction
                    </span>
                  </div>
                  <Switch
                    value={recordingTipsEnabled}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setRecordingTipsEnabled(e.target.checked)
                    }
                  />
                </div>
                <div className="flex justify-between mb-6">
                  <div className="">
                    <p className="text-sm text-dark">
                      Archive comments with announcement
                    </p>
                    <span className="text-[#141b34b3] text-xs">
                      Keep discussion thread in archive
                    </span>
                  </div>
                  <Switch
                    value={recordingTipsEnabled}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setRecordingTipsEnabled(e.target.checked)
                    }
                  />
                </div>

                <p className="mt-2 text-[#141b34b3] text-xs">
                  Your organization retains archive announcements for 1 year
                  before permanent deletion
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Previous;
