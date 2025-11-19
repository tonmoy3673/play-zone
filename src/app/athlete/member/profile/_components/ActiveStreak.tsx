"use client";

import Icon from "@/app/overview/content/_components/icon";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Image assets from Figma
const imgEllipse7618 =
  "https://www.figma.com/api/mcp/asset/9d1ba688-7a05-4088-ba44-f69d7728bf28";
const imgEllipse7617 =
  "https://www.figma.com/api/mcp/asset/903fe751-6b38-43c7-b063-e4a609e34b45";
const imgGroup2085665521 =
  "https://www.figma.com/api/mcp/asset/6567330c-fe82-422d-a0d4-f746804e4c7d";
const imgTick1 =
  "https://www.figma.com/api/mcp/asset/9b52def2-9cc0-446f-a665-9cb7a1a7b483";
const imgGroup2085665522 =
  "https://www.figma.com/api/mcp/asset/9a53e512-d854-4ef9-8dbc-ac07f646b346";
const imgTick2 =
  "https://www.figma.com/api/mcp/asset/e9849cb3-0b56-4b50-974d-d20daa899455";
const imgGroup2085665523 =
  "https://www.figma.com/api/mcp/asset/9f210f19-57c2-42ac-b52e-4ad5af104505";
const imgImage502 =
  "https://www.figma.com/api/mcp/asset/678a41dd-1ef1-4c6e-b402-c3cb43550b2b";
const imgGroup2085665524 =
  "https://www.figma.com/api/mcp/asset/3398604a-04b6-4230-874e-92fe3c51b656";
const imgGroup2085665525 =
  "https://www.figma.com/api/mcp/asset/d6e4abef-38da-4c05-af69-8f7f3e2c2eed";
const imgGroup2085665526 =
  "https://www.figma.com/api/mcp/asset/229393ea-05d3-41ac-9c72-677d97762bf1";

type DayStatus = "completed" | "partial" | "current" | "inactive";

interface DayData {
  label: string;
  status: DayStatus;
  percentage?: number;
}

const weekData: DayData[] = [
  { label: "Mo", status: "completed" },
  { label: "Tu", status: "completed" },
  { label: "We", status: "partial", percentage: 75 },
  { label: "Th", status: "current" },
  { label: "Fr", status: "inactive" },
  { label: "Sa", status: "partial", percentage: 50 },
  { label: "Su", status: "inactive" },
];

export default function ActiveStreak() {
  const activeDays = weekData.filter(
    (day) => day.status === "completed" || day.status === "current"
  ).length;
  const totalDays = 7;

  return (
    <div className="bg-[rgba(255,255,255,0.3)] rounded-2xl overflow-hidden relative w-3/5 h-[205px]">
      {/* Background decorative circles */}
      <div className="absolute left-[-104px] size-[236px] top-[-112px] pointer-events-none">
        <div className="absolute inset-[-69.49%]">
          <Image
            alt=""
            src={imgEllipse7618}
            fill
            className="object-contain"
            unoptimized
          />
        </div>
      </div>
      <div className="absolute left-[292px] size-[291px] top-[99px] pointer-events-none">
        <div className="absolute inset-[-63.23%]">
          <Image
            alt=""
            src={imgEllipse7617}
            fill
            className="object-contain"
            unoptimized
          />
        </div>
      </div>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between px-5 pt-5">
        <h3 className="font-medium text-lg leading-[1.4] text-dark">
          Active Streak
        </h3>
        <div className="relative">
          <div
            className="rounded-[32px] px-3 py-2 flex items-center justify-center gap-2"
            style={{
              background:
                "linear-gradient(148deg, #FDB631 16.41%, #EC4213 59.87%)",
              boxShadow: "inset -4px 8px 26px 0 rgba(255, 255, 255, 0.10)",
            }}
          >
            <p className="font-medium text-[12px] leading-[1.4] text-white whitespace-nowrap">
              Hot Streak
            </p>
          </div>
        </div>
      </div>

      {/* Days Container */}
      <div className="relative z-10 flex gap-1.5 px-5 mt-4 justify-center">
        {weekData.map((day, index) => (
          <DayCapsule key={index} day={day} />
        ))}
      </div>

      {/* Summary Text */}
      <p className="absolute bottom-5 left-5 font-medium text-xs leading-[1.4] text-dark z-10">
        {activeDays} out of {totalDays} days active this week
      </p>
    </div>
  );
}

function DayCapsule({ day }: { day: DayData }) {
  const isCurrent = day.status === "current";
  const isCompleted = day.status === "completed";
  const isPartial = day.status === "partial";
  const isInactive = day.status === "inactive";

  return (
    <div
      className={cn(
        "bg-[rgba(255,255,255,0.1)] rounded-[40px] p-3 flex flex-col gap-3 items-center shrink-0",
        isCurrent && "bg-[rgba(255,255,255,0.6)]"
      )}
    >
      <p className="font-medium text-xs leading-[1.4] text-dark text-center whitespace-pre-wrap">
        {day.label}
      </p>

      <div className="relative shrink-0">
        {isCompleted && (
          <>
            {day.label === "Mo" && (
              <div className="relative size-[26px] flex items-center justify-center">
                <Icon name="mo" height={26} width={26} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon name="tick_01" height={12} width={12} />
                </div>
              </div>
            )}
            {day.label === "Tu" && (
              <div className="relative size-[32px]">
                <Icon name="tu" height={32} width={32} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon name="tick_01" height={14} width={14} />
                </div>
              </div>
            )}
          </>
        )}

        {isPartial && day.percentage !== undefined && (
          <>
            {day.label === "We" && (
              <div className="relative size-[36px]">
                <Icon name="we" height={36} width={36} />
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-medium text-[8px] leading-[1.4] text-dark text-center">
                  {day.percentage}%
                </p>
              </div>
            )}
            {day.label === "Sa" && (
              <div className="relative size-[32px]">
                <Icon name="sa" height={32} width={32} />
                <p className="absolute top-[34.38%] left-1/2 -translate-x-1/2 font-medium text-[8px] leading-[1.4] text-dark text-center">
                  {day.percentage}%
                </p>
              </div>
            )}
          </>
        )}

        {isCurrent && (
          <div className="relative size-[37px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Image
                alt=""
                src={imgImage502}
                fill
                className="object-contain scale-[3.51] -translate-x-[25.92%] -translate-y-[73.66%]"
                unoptimized
              />
            </div>
          </div>
        )}

        {isInactive && (
          <>
            {day.label === "Fr" && (
              <div className="relative size-[36px]">
                <Icon name="fr" height={36} width={36} />
              </div>
            )}
            {day.label === "Su" && (
              <div className="relative size-[24px]">
                <Icon name="su" height={24} width={24} />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
