import React from "react";

type DayPill = {
  id: string;
  day: string;
  date: string;
  active?: boolean;
};

type TaskItem = {
  id: string;
  title: string;
  description?: string;
  meta?: string;
  time: string;
  emphasized?: boolean;
  live?: boolean;
  badgeText?: string;
};

const defaultDays: DayPill[] = [
  { id: "thu", day: "Thu", date: "3/12" },
  { id: "fri", day: "Fri", date: "3/12" },
  { id: "tue", day: "Tue", date: "3/13", active: true },
  { id: "wed", day: "Wed", date: "3/14" },
  { id: "sun", day: "Sun", date: "3/15" },
  { id: "mon", day: "Mon", date: "3/16" },
  { id: "sat", day: "Sat", date: "3/12" },
];

const defaultTasks: TaskItem[] = [
  {
    id: "1",
    title: "Boost Program",
    description: "Meeting with Marks",
    time: "2: 40 am",
    emphasized: true,
  },
  {
    id: "2",
    title: "University Of Oregon Virtual Camp",
    description: "Meeting with Marks",
    time: "3: 00 am",
    live: true,
  },
  {
    id: "3",
    title: "QB Fundamentals",
    meta: "12 Sessions  |  Mrs. Willson",
    time: "5: 40 am",
    badgeText: "Video submission required",
  },
  {
    id: "4",
    title: "Linebacker Drills",
    meta: "8 Sessions  |  Mrs. Willson",
    time: "5: 40 am",
  },
  {
    id: "5",
    title: "Linebacker Drills",
    meta: "8/12 Sessions  |  Mrs. Willson",
    time: "5: 40 am",
    badgeText: "Video submission required",
  },
];

export default function TodaysTask({
  days = defaultDays,
  tasks = defaultTasks,
}: {
  days?: DayPill[];
  tasks?: TaskItem[];
}) {
  return (
    <div className="relative w-full overflow-clip rounded-[24px] bg-white/30">
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-[20px] font-semibold leading-[1.5] text-dark">
            Today’s Task
          </h2>

          <button
            type="button"
            className="inline-flex h-10 items-center justify-center rounded-[64px] border border-[#1556d8]/30 px-3 py-1.5 text-[10px] font-medium text-white"
          >
            View Entire Schedule
          </button>
        </div>

        <div className="mt-5 flex items-center gap-2 overflow-x-auto pb-1">
          {days.map((d) => (
            <div
              key={d.id}
              className={[
                "shrink-0 rounded-[16px] w-[62px] flex flex-col items-center justify-center gap-3",
                d.active
                  ? "bg-white h-[78px]"
                  : "bg-white/60 px-3 py-[12px] h-[78px]",
              ].join(" ")}
            >
              <p className="text-[18px] text-dark">{d.day}</p>
              <p className="text-[10px] text-dark">{d.date}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 flex max-h-[340px] flex-col gap-2 overflow-y-auto pr-1">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={[
                "w-full shrink-0 rounded-[12px] px-3 py-3",
                task.emphasized ? "bg-white" : "",
              ].join(" ")}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[7.5px]">
                  <p className="capitalize text-[14px] font-medium tracking-[-0.42px] text-dark">
                    {task.title}
                  </p>

                  {task.live ? (
                    <div className="inline-flex items-center gap-1 rounded-[37.5px] bg-white/65 px-2 py-1">
                      <span className="size-[6px] rounded-[1.5px] bg-[#ff5151]" />
                      <span className="text-[8px] font-medium tracking-[-0.24px] text-[#ff5252]">
                        Live
                      </span>
                    </div>
                  ) : null}

                  {task.badgeText ? (
                    <div className="inline-flex h-[17px] items-center justify-center rounded-[14px] bg-dark/10 px-2 py-1">
                      <span className="text-[8px] font-medium tracking-[-0.24px] text-dark">
                        {task.badgeText}
                      </span>
                    </div>
                  ) : null}
                </div>

                <p className="w-[69px] text-right text-[10px] font-medium leading-[1.4] text-dark/70">
                  {task.time}
                </p>
              </div>

              {task.description ? (
                <p className="mt-1 w-full text-[12px] font-normal leading-[1.4] text-dark/70">
                  {task.description}
                </p>
              ) : null}
              {task.meta ? (
                <p className="mt-1 w-full text-[12px] font-normal leading-[1.4] text-dark/70">
                  {task.meta}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
