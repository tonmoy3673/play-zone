"use client";
import { AnimatedButton } from "@/components/ui/Button";
import { useState } from "react";
import Icon from "@/components/ui/Icon";
import CalendarModal from "@/app/coach/calendar/_components/CalendarModal";
import Task from "./_components/Task";

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const calendarDays = [
  { day: 26, events: [] },
  { day: 27, events: [] },
  { day: 28, events: [] },
  { day: 29, events: [] },
  { day: 30, events: [] },
  { day: 1, events: [] },
  { day: 2, events: [] },
  { day: 3, events: [] },
  {
    day: 4,
    events: [
      {
        title: "Upload Plan...",
        time: "11:30 am",
        color: "bg-green-100 text-green-700",
      },
      {
        title: "Team Strate...",
        time: "8:30 am",
        color: "bg-red-100 text-red-700",
      },
      {
        title: "Workout F...",
        time: "10:30 am",
        color: "bg-purple-100 text-purple-700",
      },
      {
        title: "Upload P...",
        time: "10:30 am",
        color: "bg-green-100 text-green-700",
      },
    ],
  },
  { day: 5, events: [] },
  { day: 6, events: [] },
  { day: 7, events: [] },
  { day: 8, events: [] },
  { day: 9, events: [] },
  { day: 10, events: [] },
  { day: 11, events: [] },
  { day: 12, events: [] },
  {
    day: 13,
    events: [
      {
        title: "Upload P...",
        time: "10:30 am",
        color: "bg-green-100 text-green-700",
      },
      {
        title: "Team Strate...",
        time: "9:30 am",
        color: "bg-red-100 text-red-700",
      },
      {
        title: "Workout F...",
        time: "10:30 am",
        color: "bg-purple-100 text-purple-700",
      },
      {
        title: "Team Strate...",
        time: "9:30 am",
        color: "bg-red-100 text-red-700",
      },
      {
        title: "Workout F...",
        time: "10:30 am",
        color: "bg-purple-100 text-purple-700",
      },
      {
        title: "Workout F...",
        time: "10:30 am",
        color: "bg-purple-100 text-purple-700",
      },
      {
        title: "Team Strate...",
        time: "9:30 am",
        color: "bg-red-100 text-red-700",
      },
    ],
    highlighted: true,
  },
  {
    day: 14,
    events: [
      {
        title: "Team Strate...",
        time: "8:30 am",
        color: "bg-purple-100 text-purple-700",
      },
      {
        title: "Upload Plan..",
        time: "10:30 am",
        color: "bg-green-100 text-green-700",
      },
      {
        title: "Team Strate...",
        time: "9:30 am",
        color: "bg-red-100 text-red-700",
      },
      {
        title: "Upload P...",
        time: "10:30 am",
        color: "bg-green-100 text-green-700",
      },
      {
        title: "Team Strate...",
        time: "9:30 am",
        color: "bg-red-100 text-red-700",
      },
    ],
  },
  {
    day: 15,
    events: [],
  },
  { day: 16, events: [] },
  { day: 17, events: [] },
  { day: 18, events: [] },
  { day: 19, events: [] },
  { day: 20, events: [] },
  { day: 21, events: [] },
  { day: 22, events: [] },
  { day: 23, events: [] },
  { day: 24, events: [] },
  {
    day: 25,
    events: [
      {
        title: "Upload Plan...",
        time: "11:30 am",
        color: "bg-green-100 text-green-700",
      },
      {
        title: "Team Strate...",
        time: "8:30 am",
        color: "bg-red-100 text-red-700",
      },
      {
        title: "Workout F...",
        time: "10:30 am",
        color: "bg-purple-100 text-purple-700",
      },
      {
        title: "Upload P...",
        time: "10:30 am",
        color: "bg-green-100 text-green-700",
      },
      {
        title: "Team Strate...",
        time: "9:30 am",
        color: "bg-red-100 text-red-700",
      },
    ],
  },
  { day: 26, events: [] },
  { day: 27, events: [] },
  { day: 28, events: [] },
  {
    day: 29,
    events: [
      {
        title: "Team Strate...",
        time: "8:30 am",
        color: "bg-red-100 text-red-700",
      },
      {
        title: "Workout F...",
        time: "10:30 am",
        color: "bg-purple-100 text-purple-700",
      },
      {
        title: "Upload P...",
        time: "10:30 am",
        color: "bg-green-100 text-green-700",
      },
      {
        title: "Team Strate...",
        time: "9:30 am",
        color: "bg-red-100 text-red-700",
      },
    ],
  },
  {
    day: 30,
    events: [
      {
        title: "Upload Plan...",
        time: "11:30 am",
        color: "bg-green-100 text-green-700",
      },
      {
        title: "Team Strate...",
        time: "8:30 am",
        color: "bg-red-100 text-red-700",
      },
      {
        title: "Workout F...",
        time: "10:30 am",
        color: "bg-purple-100 text-purple-700",
      },
      {
        title: "Upload P...",
        time: "10:30 am",
        color: "bg-green-100 text-green-700",
      },
      {
        title: "Team Strate...",
        time: "9:30 am",
        color: "bg-red-100 text-red-700",
      },
    ],
  },
  { day: 31, events: [] },
  { day: 1, events: [] },
  { day: 2, events: [] },
  { day: 3, events: [] },
  { day: 4, events: [] },
  { day: 5, events: [] },
  { day: 6, events: [] },
];

const currentMonth = "August 2025";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="bg-[#E7F2F5] p-8 rounded-3xl">
      <div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-medium text-black mb-2">Calendar</h1>
            <p className="text-black/65 text-sm">
              Manage your upcoming, past, and cancelled coaching sessions.
            </p>
          </div>
          
        </div>

        {/* Search, view controls & month navigation */}
        <div className="mt-6">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
            <div className="col-span-2">

            
            <div className="space-y-6 bg-white/30 p-4 rounded-3xl border border-white w-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2">
                      <Icon name="search_01" height={20} width={20} />
                    </span>
                    <input
                      type="text"
                      placeholder="Search"
                      className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none w-64 bg-[#f8fbfc]"
                    />
                  </div>
                </div>
                <div className="flex bg-[#f3f9fa] rounded-xl border border-gray-200 p-1">
                  <button className="rounded-xl px-6 py-2 text-sm font-medium text-white bg-linear-to-b from-[#5C8FF7] to-[#276AEE]">
                    Month
                  </button>
                  <button className="px-6 py-2 text-sm font-medium rounded-xl text-[#141b3499]">
                    Week
                  </button>
                </div>
                <div className="flex items-center  border border-white rounded-xl px-4 py-2 bg-white/40">
                  <button className="p-1 hover:bg-gray-100 rounded-lg">
                    <Icon name="arrow_left_01" height={14} width={14} />
                  </button>
                  <span className="text-sm font-medium text-gray-700 px-2 select-none">
                    {currentMonth}
                  </span>
                  <button className="p-1 hover:bg-gray-100 rounded-lg">
                    <Icon name="arrow_right_01" height={14} width={14} />
                  </button>
                </div>
              </div>

              {/* Calendar */}
              <div className="rounded-xl">
                {/* Days of week */}
                <div className="grid grid-cols-7 mb-4 border-white">
                  {daysOfWeek.map((day) => (
                    <div
                      key={day}
                      className="pt-3 text-sm font-medium text-[#141b3499] text-center"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar days */}
                <div className="grid grid-cols-7 gap-2 ">
                  {calendarDays.map((dayData, index) => (
                    <div
                      key={index}
                      className={` min-h-[132px] backdrop-blur-3xl p-1 border border-white shadow-xs rounded-xl ${
                        (dayData as { highlighted?: boolean }).highlighted
                          ? "bg-blue-50 ring-2 ring-blue-500"
                          : ""
                      }
                      ${
                        dayData.events.length &&
                        "bg-gradient-to-b from-[rgba(69,127,243,0.05)] to-[rgba(69,127,243,0.12)]"
                      }
                      
                      `}
                    >
                      <div className="flex items-center justify-between mb-2 p-2">
                        <span
                          className={`text-sm font-medium ${
                            (dayData as { highlighted?: boolean }).highlighted
                              ? "text-blue-600"
                              : "text-gray-700"
                          }`}
                        >
                          {(dayData as { day: number }).day}
                        </span>
                        <button className="text-gray-400 hover:text-[#141b3499]">
                          <Icon
                            name="three_dots_vertical"
                            height={12}
                            width={10}
                          />
                        </button>
                      </div>

                      <div
                        className={`space-y-[3px] ${
                          dayData.events.length && "bg-white/70"
                        } p-1 rounded-xl`}
                      >
                        {(dayData as { events: any[] }).events
                          .slice(0, 3)
                          .map((event, idx) => (
                            <div
                              key={idx}
                              className={`p-1 p-y1.5 rounded ${event.color} flex justify-center items-center`}
                            >
                              <div className="text-[8px] font-medium truncate">
                                {event.title}
                              </div>
                              <div className="text-[8px] text-black/70">
                                {event.time}
                              </div>
                            </div>
                          ))}
                        {(dayData as { events: any[] }).events.length > 3 && (
                          <div>
                            <span className="text-[9px] font-medium ml-2">
                              {(dayData as { events: any[] }).events.length - 3}{" "}
                              more...
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            </div>

            {/* Right side - Today tasks card cloned from Figma node 2326-10450 */}
            <div className="col-span-1">
            <Task />

            </div>
          </div>
        </div>
      </div>
      <CalendarModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
