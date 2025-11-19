"use client";

import Icon from "@/app/overview/content/_components/icon";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Image assets from Figma
const imgEllipse1783 =
  "https://www.figma.com/api/mcp/asset/db499e80-7ee6-491a-bf18-9c79524809f1";
const imgEllipse1784 =
  "https://www.figma.com/api/mcp/asset/d8be7f76-29b4-43f1-9030-9c09feb67d7a";
const imgRectangle2103 =
  "https://www.figma.com/api/mcp/asset/75bf1b6f-9f2a-4d90-8051-5cebc7517db5";

type Member = {
  id: number;
  name: string;
  joinDate: string;
  status: string | null;
  lastOnline: string;
  avatar: string;
};

interface ListViewProps {
  members: Member[];
}

export default function ListView({ members }: ListViewProps) {
  // Helper function to extract time from lastOnline string
  const extractTime = (lastOnline: string): string => {
    // If it's already just a time like "10:59 PM", return it
    if (lastOnline.match(/^\d{1,2}:\d{2}\s?(AM|PM)$/i)) {
      return lastOnline;
    }
    // Otherwise extract time from "Last online - 10:59 PM"
    const match = lastOnline.match(/(\d{1,2}:\d{2}\s?(AM|PM))/i);
    return match ? match[1] : lastOnline;
  };

  return (
    <div className="bg-[rgba(255,255,255,0.73)] rounded-[20px] overflow-hidden w-full">
      <div className="flex items-start w-full">
        {/* Athlete Column */}
        <div
          className="flex flex-col min-w-[343px] flex-1"
          style={{ flexBasis: "343px" }}
        >
          {/* Header */}
          <div className="bg-white border-b border-[#e7f2f5] pl-4 pr-6 py-4">
            <p className="font-medium text-[12px] leading-[1.4] text-paragraph-dark">
              Athlete
            </p>
          </div>
          {/* Rows */}
          {members.map((member, index) => (
            <div
              key={member.id}
              className={cn(
                "border-b border-[#e7f2f5] h-[72px] p-4 flex items-center gap-2",
                index === members.length - 1 && "border-b-0"
              )}
            >
              <div className="flex items-center gap-2">
                {/* Avatar */}
                <div className="relative shrink-0 size-10">
                  {member.avatar === imgRectangle2103 ? (
                    <div className="border border-[#68b0ea] rounded-full size-10 overflow-hidden relative">
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        width={40}
                        height={40}
                        className="absolute inset-0 w-full h-full object-cover rounded-full"
                      />
                    </div>
                  ) : (
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      width={40}
                      height={40}
                      className="w-full h-full rounded-full object-cover"
                    />
                  )}
                </div>
                {/* Name and Status */}
                <div
                  className={cn(
                    "flex flex-col items-start min-w-0",
                    member.status ? "gap-1.5" : "gap-0.5"
                  )}
                >
                  <p className="font-medium text-[12px] leading-[1.4] text-dark truncate">
                    {member.name}
                  </p>
                  {member.status && (
                    <div className="bg-gradient-to-b from-[rgba(69,127,243,0.12)] to-[rgba(69,127,243,0.15)] border border-[rgba(69,127,243,0.1)] rounded-full p-1.5 h-4 flex items-center justify-center w-fit">
                      <p
                        className="bg-clip-text text-transparent bg-primary-gradient font-medium text-[10px] leading-[17px]"
                        style={{ WebkitTextFillColor: "transparent" }}
                      >
                        {member.status}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Date Column */}
        <div
          className="flex flex-col min-w-[251px] flex-1"
          style={{ flexBasis: "251px" }}
        >
          {/* Header */}
          <div className="bg-white border-b border-[#e7f2f5] p-4">
            <p className="font-medium text-[12px] leading-[1.4] text-paragraph-dark">
              Join Date
            </p>
          </div>
          {/* Rows */}
          {members.map((member, index) => (
            <div
              key={member.id}
              className={cn(
                "border-b border-[#e7f2f5] h-[72px] p-4 flex items-center",
                index === members.length - 1 && "border-b-0"
              )}
            >
              <p className="font-medium text-[12px] leading-[1.4] text-dark flex-1">
                {member.joinDate}
              </p>
            </div>
          ))}
        </div>

        {/* Last Online Column */}
        <div
          className="flex flex-col min-w-[253px] flex-1"
          style={{ flexBasis: "253px" }}
        >
          {/* Header */}
          <div className="bg-white border-b border-[#e7f2f5] p-4">
            <p className="font-medium text-[12px] leading-[1.4] text-paragraph-dark">
              Last Online
            </p>
          </div>
          {/* Rows */}
          {members.map((member, index) => (
            <div
              key={member.id}
              className={cn(
                "border-b border-[#e7f2f5] h-[72px] p-4 flex items-center",
                index === members.length - 1 && "border-b-0"
              )}
            >
              <p className="font-medium text-[12px] leading-[1.4] text-dark">
                {extractTime(member.lastOnline)}
              </p>
            </div>
          ))}
        </div>

        {/* Actions Column */}
        <div
          className="flex flex-col min-w-[206px] flex-1"
          style={{ flexBasis: "206px" }}
        >
          {/* Header */}
          <div className="bg-white border-b border-[#e7f2f5] p-4">
            <p className="font-medium text-[12px] leading-[1.4] text-paragraph-dark">
              Actions
            </p>
          </div>
          {/* Rows */}
          {members.map((member, index) => (
            <div
              key={member.id}
              className={cn(
                "border-b border-[#e7f2f5] h-[72px] p-4 flex items-center",
                index === members.length - 1 && "border-b-0"
              )}
            >
              <div className="flex items-center gap-2">
                {/* Video Button */}
                <button
                  className="bg-white rounded-full size-10 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
                  aria-label="Video call"
                >
                  <Icon name="video_01" height={20} width={20} />
                </button>
                {/* Message Button */}
                <button
                  className="bg-white rounded-full size-10 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
                  aria-label="Send message"
                >
                  <Icon name="message_02" height={20} width={20} />
                </button>
                {/* More Options Button */}
                <button
                  className="bg-white rounded-full size-10 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
                  aria-label="More options"
                >
                  <Icon name="three_dots_vertical" height={20} width={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
