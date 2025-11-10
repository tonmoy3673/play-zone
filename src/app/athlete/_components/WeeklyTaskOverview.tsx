/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { AnimatedButton } from "@/components/ui/Button";
import { useState } from "react";

const DEMO_TASKS = {
  0: [
    // Sunday
    {
      id: 1,
      title: "Team Meeting",
      tag: "Discussion Required",
      team: "Hawaii Trench Warriors",
      status: "pending",
      action: "Join",
      color: "blue",
    },
    {
      id: 2,
      title: "Film Review Session",
      team: "Hawaii Trench Warriors",
      status: "live",
      time: "2:00 pm",
      action: "Remind Me",
      color: "orange",
    },
  ],
  1: [
    // Monday
    {
      id: 1,
      title: "Strength Training",
      tag: "Mandatory",
      team: "Hawaii Trench Warriors",
      status: "pending",
      action: "Upload",
      color: "blue",
    },
    {
      id: 2,
      title: "Conditioning Drills",
      team: "Hawaii Trench Warriors",
      status: "complete",
      action: "Done",
      color: "blue",
    },
  ],
  2: [
    // Tuesday
    {
      id: 1,
      title: "Linebacker Drills",
      tag: "Video Submission Required",
      team: "Hawaii Trench Warriors",
      status: "pending",
      action: "Upload",
      color: "blue",
    },
    {
      id: 2,
      title: "University Of Oregon Virtual Camp",
      team: "Hawaii Trench Warriors",
      status: "live",
      time: "5:30 pm",
      action: "Remind Me",
      color: "orange",
    },
    {
      id: 3,
      title: "QB Fundamentals",
      team: "Hawaii Trench Warriors",
      status: "complete",
      action: "Done",
      color: "blue",
    },
  ],
  3: [
    // Wednesday
    {
      id: 1,
      title: "Offensive Line Techniques",
      tag: "Video Required",
      team: "Hawaii Trench Warriors",
      status: "pending",
      action: "Upload",
      color: "blue",
    },
    {
      id: 2,
      title: "Practice Session",
      team: "Hawaii Trench Warriors",
      status: "complete",
      action: "Done",
      color: "blue",
    },
  ],
  4: [
    // Thursday
    {
      id: 1,
      title: "Game Strategy Review",
      tag: "Analysis Required",
      team: "Hawaii Trench Warriors",
      status: "pending",
      action: "Upload",
      color: "blue",
    },
    {
      id: 2,
      title: "Team Bonding Event",
      team: "Hawaii Trench Warriors",
      status: "live",
      time: "6:00 pm",
      action: "Remind Me",
      color: "orange",
    },
  ],
  5: [
    // Friday
    {
      id: 1,
      title: "Final Preparation",
      tag: "Game Day Prep",
      team: "Hawaii Trench Warriors",
      status: "pending",
      action: "Upload",
      color: "blue",
    },
    {
      id: 2,
      title: "Pre-Game Meeting",
      team: "Hawaii Trench Warriors",
      status: "live",
      time: "4:00 pm",
      action: "Remind Me",
      color: "orange",
    },
  ],
  6: [
    // Saturday
    {
      id: 1,
      title: "Game Day",
      tag: "Live Event",
      team: "Hawaii Trench Warriors",
      status: "live",
      time: "7:00 pm",
      action: "Remind Me",
      color: "orange",
    },
  ],
};

export default function TasksPage() {
  const [selectedDay, setSelectedDay] = useState(2); // Default to Tuesday

  const getCurrentWeek = () => {
    const today = new Date();
    const currentDay = today.getDay();
    const diff = today.getDate() - currentDay;
    const sunday = new Date(today.setDate(diff));

    const week = [];
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    for (let i = 0; i < 7; i++) {
      const date = new Date(sunday);
      date.setDate(sunday.getDate() + i);
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const isToday = new Date().toDateString() === date.toDateString();

      week.push({
        day: dayNames[i],
        date: `${month}/${day}`,
        index: i,
        isToday,
      });
    }
    return week;
  };

  const days = getCurrentWeek();
  const tasksForSelectedDay =
    DEMO_TASKS[selectedDay as keyof typeof DEMO_TASKS] || [];

  return (
    <div className="bg-[#ffffff5e]  flex-1 border p-5 border-white rounded-2xl  backdrop-blur-3xl  overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-xl font-semibold text-dark">Todays tasks</h1>
        <AnimatedButton
          style={{
            borderRadius: "40px",
            background:
              "linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%)",
          }}
          className=" flex items-center justify-center gap-1 text-white font-normal text-[10px] px-4 py-2.5 rounded-full hover:bg-blue-700 "
        >
          View Entire Schedule
        </AnimatedButton>
      </div>

      {/* Calendar Week */}
      <div className="flex justify-between gap-4 mb-5">
        {days.map((item) => (
          <button
            key={item.index}
            onClick={() => setSelectedDay(item.index)}
            className={`flex flex-col items-center justify-center w-20 h-20 rounded-xl font-semibold transition-all relative cursor-pointer ${
              selectedDay === item.index
                ? "bg-white"
                : "bg-[#ffffff66] hover:bg-white/60"
            }`}
          >
            <div className="text-lg font-normal  text-dark">{item.day}</div>
            <div className="text-dark text-xs font-normal">{item.date}</div>
            {item.index === 4 && (
              <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-blue-500" />
            )}
            {item.index === 5 && (
              <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-orange-500" />
            )}
          </button>
        ))}
      </div>

      {/* Tasks - Now dynamically rendered based on selected day */}
      <div
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        className="space-y-4 h-48 overflow-y-auto"
      >
        {tasksForSelectedDay.map((task: any) => (
          <div
            key={task.id}
            className="hover:bg-[#ffffff66]  rounded-2xl px-4 py-2 flex items-center justify-between"
          >
            <div className="flex items-center gap-4 flex-1">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-sm font-medium text-black">
                    {task.title}
                  </h3>
                  {task.status === "live" && (
                    <p className="bg-[#ffffffa6] flex items-center gap-1 text-red-600 text-xs font-medium px-3 py-1 rounded-xl">
                      <span className="size-[7px] text-sm rounded bg-[#FF5151] block"></span>{" "}
                      Live
                    </p>
                  )}
                  {task.tag && (
                    <span className="bg-[#0000001a] text-black font-medium text-[8px] px-3 py-1 rounded-full">
                      {task.tag}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 mt-3 text-gray-600">
                  <div
                    style={{
                      borderRadius: "4px",
                      borderTop: "1px solid #68B0EA",
                      background:
                        "linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%)",
                    }}
                    className={`w-3 h-3 rounded-full ${
                      task.color === "blue" ? "bg-blue-600" : "bg-orange-500"
                    }`}
                  />
                  <span className="text-[#141b34cc] text-xs">{task.team}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {task.status === "pending" && (
                <div className="flex items-center gap-2 text-gray-600">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-[10px] text-[#141b34cc]">
                    Due Today
                  </span>
                </div>
              )}
              {task.status === "live" && (
                <button
                  style={{
                    borderRadius: "24px",
                    background:
                      "linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%)",
                  }}
                  className=" flex items-center justify-center gap-1 text-white text-[10px] px-3 py-1.5 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 2m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="">{task.time}</span>
                </button>
              )}
              {task.status === "complete" && (
                <div className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                  >
                    <path
                      opacity="0.4"
                      d="M0.333313 7.99935C0.333313 11.9574 3.54194 15.166 7.49998 15.166C11.458 15.166 14.6666 11.9574 14.6666 7.99935C14.6666 4.04131 11.458 0.832682 7.49998 0.832682C3.54194 0.832682 0.333313 4.04131 0.333313 7.99935Z"
                      fill="#18952D"
                    />
                    <path
                      d="M10.7517 5.34692C10.9284 5.66996 10.8097 6.07504 10.4867 6.25171C9.57244 6.75168 8.71386 7.79835 8.05832 8.80215C7.73874 9.2915 7.48235 9.74711 7.30601 10.0802C7.21802 10.2465 7.15041 10.3814 7.10527 10.4737L7.03978 10.6106C6.93678 10.8358 6.71742 10.9855 6.47021 10.9991C6.22293 11.0128 5.98846 10.8882 5.86134 10.6757C5.6542 10.3294 5.32504 10.0132 5.02 9.77205C4.87178 9.65487 4.73837 9.56248 4.64316 9.50011L4.50297 9.41243C4.18331 9.22996 4.072 8.82294 4.25437 8.50318C4.43677 8.18335 4.84392 8.07195 5.16375 8.25436L5.37378 8.38478C5.49523 8.46434 5.66182 8.57977 5.84694 8.72613C5.9884 8.83798 6.14658 8.97247 6.30628 9.12741C6.47751 8.81982 6.69146 8.45666 6.94195 8.0731C7.61974 7.03523 8.62783 5.74857 9.84693 5.08188C10.17 4.90522 10.5751 5.02388 10.7517 5.34692Z"
                      fill="#18952D"
                    />
                  </svg>
                  <span className="text-[10px] text-[#18952D] font-normal">
                    Complete
                  </span>
                </div>
              )}
              <button
                style={{
                  borderRadius: "24px",
                  background:
                    "linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%)",
                }}
                className={`flex items-center justify-center gap-1 text-white text-[10px] px-4 py-1.5 rounded-full hover:bg-blue-700 transition-colors  ${
                  task.status === "complete"
                    ? "bg-gray-400 hover:bg-gray-500"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {task.action === "Upload" && <span>+</span>}
                {task.action === "Remind Me" && <span>☁️</span>}
                {task.action}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
