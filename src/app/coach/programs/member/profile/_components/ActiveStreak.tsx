"use client";

import Icon from "@/app/coach/task/content/_components/icon";
import { cn } from "@/lib/utils";

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
    <div className="bg-[rgba(255,255,255,0.3)] rounded-3xl overflow-hidden relative w-3/5 bg-[url('/content/svg/profile-bg.svg')] bg-cover bg-center">
      {/* Bottom right gradient */}
      <div
        className="absolute bottom-0 right-0 w-[291px] h-[191px]  pointer-events-none"
        style={{
          background: "rgba(44, 73, 255, 0.3)",
          filter: "blur(92px)",
        }}
      />
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
        "bg-[rgba(255,255,255,0.1)] rounded-[40px] p-3 flex flex-col gap-3 items-center shrink-0 border border-white/60",
        isCurrent && "bg-[rgba(255,255,255,0.6)] "
      )}
    >
      <p className="font-medium text-xs leading-[1.4] text-dark text-center whitespace-pre-wrap ">
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
              <img src="/content/fire.png" alt="fire" className="" />
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