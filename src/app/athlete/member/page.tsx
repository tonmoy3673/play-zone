"use client";

import Icon from "@/app/overview/content/_components/icon";
import { AnimatedButton } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ListView from "./_components/ListView";

const imgRectangle2103 =
  "https://images.unsplash.com/photo-1605895004577-85c4b39013f5?w=100";
const mockMembers = [
  {
    id: 1,
    name: "Marvin McKinney",
    joinDate: "Joined 2 month ago",
    status: "NEW",
    lastOnline: "Last online - 10:59 PM",
    avatar: imgRectangle2103,
  },
  {
    id: 2,
    name: "John Doe",
    joinDate: "Joined 1 month ago",
    status: null,
    lastOnline: "Last online - 8:30 AM",
    avatar: imgRectangle2103,
  },
  {
    id: 3,
    name: "Jane Smith",
    joinDate: "Joined 3 months ago",
    status: "NEW",
    lastOnline: "Last online - 11:15 PM",
    avatar: imgRectangle2103,
  },
  {
    id: 4,
    name: "Robert Johnson",
    joinDate: "Joined 1 week ago",
    status: null,
    lastOnline: "Last online - 9:45 AM",
    avatar: imgRectangle2103,
  },
  {
    id: 5,
    name: "Emily Davis",
    joinDate: "Joined 4 months ago",
    status: null,
    lastOnline: "Last online - 7:20 PM",
    avatar: imgRectangle2103,
  },
  {
    id: 6,
    name: "Michael Brown",
    joinDate: "Joined 2 weeks ago",
    status: "NEW",
    lastOnline: "Last online - 6:10 PM",
    avatar: imgRectangle2103,
  },
  {
    id: 7,
    name: "Sarah Wilson",
    joinDate: "Joined 5 months ago",
    status: null,
    lastOnline: "Last online - 4:30 PM",
    avatar: imgRectangle2103,
  },
  {
    id: 8,
    name: "David Lee",
    joinDate: "Joined 3 weeks ago",
    status: null,
    lastOnline: "Last online - 2:45 PM",
    avatar: imgRectangle2103,
  },
  {
    id: 9,
    name: "Lisa Anderson",
    joinDate: "Joined 6 months ago",
    status: null,
    lastOnline: "Last online - 1:20 PM",
    avatar: imgRectangle2103,
  },
  {
    id: 10,
    name: "William Martinez",
    joinDate: "Joined 7 months ago",
    status: null,
    lastOnline: "Last online - 12:00 PM",
    avatar: imgRectangle2103,
  },
  {
    id: 11,
    name: "Olivia Taylor",
    joinDate: "Joined 8 months ago",
    status: null,
    lastOnline: "Last online - 11:00 AM",
    avatar: imgRectangle2103,
  },
  {
    id: 12,
    name: "James Wilson",
    joinDate: "Joined 9 months ago",
    status: null,
    lastOnline: "Last online - 10:00 AM",
    avatar: imgRectangle2103,
  },
  {
    id: 13,
    name: "Emma Johnson",
    joinDate: "Joined 10 months ago",
    status: null,
    lastOnline: "Last online - 9:00 AM",
    avatar: imgRectangle2103,
  },
  {
    id: 14,
    name: "Daniel Smith",
    joinDate: "Joined 11 months ago",
    status: null,
    lastOnline: "Last online - 8:00 AM",
    avatar: imgRectangle2103,
  },
  {
    id: 15,
    name: "Sophia Brown",
    joinDate: "Joined 12 months ago",
    status: null,
    lastOnline: "Last online - 7:00 AM",
    avatar: imgRectangle2103,
  },
];

type FilterType = "All" | "Athletes" | "Staff";
type ViewType = "grid" | "list";

function MemberCard({
  member,
  viewType,
}: {
  member: (typeof mockMembers)[0];
  viewType: ViewType;
}) {
  return (
    <div
      className={cn(
        "bg-[rgba(255,255,255,0.6)] border border-[rgba(69,127,243,0.1)] border-solid h-[192px] overflow-hidden relative rounded-[16px] w-full",
        "flex flex-col bg-white bg-[url('/image341.svg')] bg-cover bg-center bg-no-repeat"
      )}
    >
      {/* Top Section: Avatar and Action Buttons */}
      <div className="relative flex items-center justify-between px-5 pt-5 z-10">
        {/* Avatar - Centered */}
        <div className="absolute border-2 border-[#68b0ea] rounded-full size-12 overflow-hidden">
          <Image
            src={member.avatar}
            alt={member.name}
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Action buttons - Right side */}
        <div className="flex gap-1 ml-auto">
          <button
            className="bg-white rounded-full size-10 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
            aria-label="Video call"
          >
            <Icon name="video_01" height={20} width={20} />
          </button>
          <button
            className="bg-white rounded-full size-10 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
            aria-label="Send message"
          >
            <Icon name="message_02" height={20} width={20} />
          </button>
          <button
            className="bg-white rounded-full size-10 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
            aria-label="More options"
          >
            <Icon name="three_dots_vertical" height={20} width={20} />
          </button>
        </div>
      </div>

      {/* Bottom Section: Name, Join Date, Status, Last Online */}
      <div className="relative flex-1 px-5 pb-5 my-5 flex flex-col justify-between z-10">
        {/* Name and Join Date Row */}
        <div className="flex items-start justify-between gap-2">
          {/* Left: Name and Join Date */}
          <div className="flex flex-col gap-1.5 flex-1 min-w-0">
            <Link href={`/athlete/member/profile`}>
              <h3 className="font-medium text-base text-dark leading-normal truncate">
                {member.name}
              </h3>
            </Link>
            <div className="flex items-center gap-1.5">
              <Icon name="calendar_03" height={16} width={16} />
              <p className="font-normal text-xs text-paragraph-dark leading-[1.4]">
                {member.joinDate}
              </p>
            </div>
          </div>

          {/* Right: Status Badge */}
          {member.status && (
            <div className="bg-gradient-to-b from-[rgba(69,127,243,0.12)] to-[rgba(69,127,243,0.15)] border border-[rgba(69,127,243,0.1)] rounded-full px-1.5 py-1 flex items-center justify-center shrink-0">
              <p className="text-[10px] font-medium leading-[17px] primary-gradient-text px-1.5">
                {member.status}
              </p>
            </div>
          )}
        </div>

        {/* Last Online Indicator */}
        <div className="flex items-center gap-2 mt-3">
          <div className="w-2 h-2 rounded-full bg-[#68b0ea] border-t border-[#68b0ea]" />
          <p className="font-normal text-xs text-dark leading-[1.4] truncate">
            {member.lastOnline}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function MemberPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");
  const [viewType, setViewType] = useState<ViewType>("grid");

  return (
    <div className="bg-[rgba(255,255,255,0.3)] overflow-clip relative rounded-[30px] w-full min-h-screen p-8">
      {/* Background blur effect */}
      <div className="absolute bottom-[-454.17px] flex h-[calc(1px*((var(--transform-inner-width)*0.866025447845459)+(var(--transform-inner-height)*0.4999999701976776)))] items-center justify-center left-1/2 -translate-x-1/2 w-[calc(1px*((var(--transform-inner-height)*0.866025447845459)+(var(--transform-inner-width)*0.4999999701976776)))] pointer-events-none">
        <div className="flex-none rotate-60 -scale-y-100">
          <div className="blur-md filter h-[540px] relative w-[663px]">
            <div className="absolute inset-0 opacity-50 overflow-hidden pointer-events-none">
              <Image
                alt=""
                src={"/public/content/member-bg.png"}
                width={663}
                height={540}
                className="absolute h-[106.24%] left-[-21.02%] max-w-none top-[-2.39%] w-[120.73%]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 flex items-start justify-between mb-6">
        {/* Page Title */}
        <h1 className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-normal not-italic text-dark text-2xl">
          Athletes & Members
        </h1>

        {/* Add Staff Member Button */}
        <AnimatedButton className="bg-primary-gradient text-white px-6 py-3 rounded-full flex items-center gap-2">
          <Icon name="plus_sign" height={20} width={20} />
          <span className="font-medium text-base">Add Staff Member</span>
        </AnimatedButton>
      </div>

      {/* Filter Tabs and View Toggle */}
      <div className="relative z-10 bg-[rgba(255,255,255,0.3)] box-border flex gap-[10px] items-center px-[10px] py-[10px] rounded-[16px] mb-6 w-full">
        <div className="flex items-center justify-between w-full">
          {/* Filter Tabs */}
          <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
            <button
              onClick={() => setActiveFilter("All")}
              className={cn(
                "border border-[rgba(21,86,216,0.1)] border-solid box-border content-stretch flex gap-[8px] items-center px-[16px] py-[13px] relative rounded-[12px] shrink-0 transition-all",
                activeFilter === "All"
                  ? "bg-primary-gradient border-[rgba(21,86,216,0.3)]"
                  : "bg-[rgba(69,127,243,0.15)]"
              )}
            >
              <p
                className={cn(
                  "font-['Inter:Medium',sans-serif] font-medium leading-[1.3] not-italic relative shrink-0 text-[14px] text-center",
                  activeFilter === "All"
                    ? "text-white"
                    : "primary-gradient-text"
                )}
              >
                All
              </p>
            </button>
            <button
              onClick={() => setActiveFilter("Athletes")}
              className={cn(
                "border border-[rgba(21,86,216,0.1)] border-solid box-border content-stretch flex gap-[8px] items-center px-[16px] py-[13px] relative rounded-[12px] shrink-0 transition-all",
                activeFilter === "Athletes"
                  ? "bg-primary-gradient border-[rgba(21,86,216,0.3)]"
                  : "bg-[rgba(69,127,243,0.15)]"
              )}
            >
              <p
                className={cn(
                  "font-['Inter:Medium',sans-serif] font-medium leading-[1.3] not-italic relative shrink-0 text-[14px] text-center",
                  activeFilter === "Athletes"
                    ? "text-white"
                    : "primary-gradient-text"
                )}
              >
                Athletes
              </p>
            </button>
            <button
              onClick={() => setActiveFilter("Staff")}
              className={cn(
                "border border-[rgba(21,86,216,0.1)] border-solid box-border content-stretch flex gap-[8px] items-center px-[16px] py-[13px] relative rounded-[12px] shrink-0 transition-all",
                activeFilter === "Staff"
                  ? "bg-primary-gradient border-[rgba(21,86,216,0.3)]"
                  : "bg-[rgba(69,127,243,0.15)]"
              )}
            >
              <p
                className={cn(
                  "font-['Inter:Medium',sans-serif] font-medium leading-[1.3] not-italic relative shrink-0 text-[14px] text-center",
                  activeFilter === "Staff"
                    ? "text-white"
                    : "primary-gradient-text"
                )}
              >
                Staff
              </p>
            </button>
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewType("list")}
              className={cn(
                "box-border flex items-center justify-center p-3 rounded-[12px] transition-all",
                viewType === "list"
                  ? "border-[#68b0ea] border-b-0 border-l-0 border-r-0 border-solid border-t bg-[linear-gradient(177deg,#5C8FF7_10.06%,#276AEE_62.94%)]"
                  : "hover:bg-white/30"
              )}
            >
              <Icon
                name="list_view"
                height={20}
                width={20}
                className={
                  viewType === "list"
                    ? "!stroke-white [&_path]:!stroke-white"
                    : ""
                }
              />
            </button>
            <button
              onClick={() => setViewType("grid")}
              className={cn(
                "box-border flex items-center justify-center p-3 rounded-[12px] transition-all",
                viewType === "grid"
                  ? "border-[#68b0ea] border-b-0 border-l-0 border-r-0 border-solid border-t bg-[linear-gradient(177deg,#5C8FF7_10.06%,#276AEE_62.94%)]"
                  : "hover:bg-white/30"
              )}
            >
              <Icon
                name="dashboard_square_01"
                height={20}
                width={20}
                className={
                  viewType === "grid"
                    ? "!stroke-white [&_path]:!stroke-white"
                    : ""
                }
              />
            </button>
          </div>
        </div>
      </div>

      {/* Members Grid/List */}
      <div className="relative z-10 flex flex-col gap-4 pb-8 w-full">
        {viewType === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {mockMembers.map((member) => (
              <MemberCard key={member.id} member={member} viewType={viewType} />
            ))}
          </div>
        ) : (
          <ListView members={mockMembers} />
        )}
      </div>
    </div>
  );
}
