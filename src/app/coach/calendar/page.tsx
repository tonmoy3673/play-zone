"use client";
import { AnimatedButton } from "@/components/ui/Button";
import { useMemo, useState } from "react";
import Icon from "../task/content/_components/icon";
import CalendarModal from "./_components/CalendarModal";
import TodayTasks from "./_components/TodayTasks";

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getCurrentDate = () => {
  const now = new Date();
  return {
    year: now.getFullYear(),
    month: now.getMonth(),
    day: now.getDate(),
  };
};

const generateCalendarDays = (
  year: number,
  month: number,
  currentDay: number
) => {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const firstDayOfWeek = (firstDay.getDay() + 6) % 7; // Convert Sunday=0 to Monday=0
  const daysInMonth = lastDay.getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const days: Array<{
    day: number;
    events: any[];
    highlighted?: boolean;
    isCurrentMonth?: boolean;
  }> = [];

  // Previous month's days
  for (let i = firstDayOfWeek - 1; i >= 0; i--) {
    days.push({
      day: daysInPrevMonth - i,
      events: [],
      isCurrentMonth: false,
    });
  }

  // Current month's days
  for (let day = 1; day <= daysInMonth; day++) {
    const isToday =
      day === currentDay &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear();
    days.push({
      day,
      events: getEventsForDay(day),
      highlighted: isToday,
      isCurrentMonth: true,
    });
  }

  // Next month's days to fill the grid
  const remainingDays = 42 - days.length; // 6 rows * 7 days
  for (let day = 1; day <= remainingDays; day++) {
    days.push({
      day,
      events: [],
      isCurrentMonth: false,
    });
  }

  return days;
};

const getEventsForDay = (day: number) => {
  // Sample events - in a real app, this would come from an API
  const eventMap: Record<number, any[]> = {
    4: [
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
    13: [
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
    14: [
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
    25: [
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
    29: [
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
    30: [
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
  };

  return eventMap[day] || [];
};

const formatUTCDate = (utcDateString: string): string => {
  const date = new Date(utcDateString);
  const daysOfWeekShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthsShort = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dayOfWeek = daysOfWeekShort[date.getUTCDay()];
  const month = monthsShort[date.getUTCMonth()];
  const day = date.getUTCDate();

  let hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
  const time = `${hours}:${minutesStr} ${ampm}`;

  return `Due ${dayOfWeek}, ${month} ${day} at ${time}`;
};

const CalendarDashboard = () => {
  // Sample upcomingTasks with UTC time values
  const upcomingTasks = [
    {
      title: "Atlas Venture - Exclusive",
      subtitle: "Hasset Twanch Wertners",
      timeUTC: "2025-08-15T14:30:00Z", // UTC value
      action: "Start Now",
      icon: "🏁",
    },
    {
      title: "Exchange Benefits",
      subtitle: "Hasset Twanch Wertners",
      timeUTC: "2025-08-16T09:15:00Z", // UTC value
      action: "Start Now",
      icon: "⏰",
    },
    {
      title: "Toyota Lead In - Non-Exclusive",
      subtitle: "Hasset Twanch Wertners",
      timeUTC: "2025-08-17T16:45:00Z", // UTC value
      action: "Start here",
      icon: "⏰",
    },
    {
      title: "Exchange Benefits",
      subtitle: "Hasset Twanch Wertners",
      timeUTC: "2025-08-18T11:00:00Z", // UTC value
      action: "Start Now",
      icon: "⏰",
    },
    {
      title: "Toyota Lead In - Non-Exclusive",
      subtitle: "Hasset Twanch Wertners",
      timeUTC: "2025-08-19T13:20:00Z", // UTC value
      action: "Start here",
      icon: "⏰",
    },
  ];

  // Map UTC values to formatted display strings
  const tasksWithFormattedTime = upcomingTasks.map((task) => ({
    ...task,
    time: formatUTCDate(task.timeUTC), // Mapped value using the format
  }));

  return tasksWithFormattedTime;
};

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const currentDate = useMemo(() => getCurrentDate(), []);
  const [view, setView] = useState<"Month" | "Week">("Month");
  const [currentMonth, setCurrentMonth] = useState(currentDate.month);
  const [currentYear, setCurrentYear] = useState(currentDate.year);

  const calendarDays = useMemo(() => {
    return generateCalendarDays(currentYear, currentMonth, currentDate.day);
  }, [currentYear, currentMonth, currentDate.day]);

  const currentMonthDisplay = `${months[currentMonth]} ${currentYear}`;

  const navigateMonth = (direction: "prev" | "next") => {
    if (direction === "next") {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    } else {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const getWeekDays = () => {
    // For week view, show the week containing the first day of the selected month
    // or the current week if viewing current month
    const referenceDate = new Date(currentYear, currentMonth, 1);
    const today = new Date();
    const isCurrentMonth =
      currentMonth === today.getMonth() && currentYear === today.getFullYear();

    const targetDate = isCurrentMonth ? today : referenceDate;
    const currentDayOfWeek = (targetDate.getDay() + 6) % 7; // Convert to Monday=0
    const weekStart = new Date(targetDate);
    weekStart.setDate(targetDate.getDate() - currentDayOfWeek);

    const weekDays = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(weekStart);
      day.setDate(weekStart.getDate() + i);
      const todayDate = new Date();
      weekDays.push({
        date: day,
        day: day.getDate(),
        dayName: daysOfWeek[i],
        month: day.getMonth(),
        year: day.getFullYear(),
        isToday: day.toDateString() === todayDate.toDateString(),
      });
    }
    return weekDays;
  };

  const weekDays = useMemo(() => getWeekDays(), [currentYear, currentMonth]);

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
          <AnimatedButton
            onClick={handleOpenModal}
            style={{
              borderRadius: "40px",
              background:
                "linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%)",
            }}
            className="flex items-center justify-center gap-2 text-white font-medium px-6 py-4 rounded-full hover:bg-blue-700 text-sm"
          >
            <Icon name="plus_sign" height={20} width={20} />
            Create Event
          </AnimatedButton>
        </div>

        {/* Search, view controls & month navigation */}
        <div className="mt-6">
          <div className="flex justify-between gap-4">
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
                  <button
                    onClick={() => setView("Month")}
                    className={`rounded-xl px-6 py-2 text-sm font-medium ${
                      view === "Month"
                        ? "text-white bg-gradient-to-b from-[#5C8FF7] to-[#276AEE]"
                        : "text-[#141b3499]"
                    }`}
                  >
                    Month
                  </button>
                  <button
                    onClick={() => setView("Week")}
                    className={`px-6 py-2 text-sm font-medium rounded-xl ${
                      view === "Week"
                        ? "text-white bg-gradient-to-b from-[#5C8FF7] to-[#276AEE]"
                        : "text-[#141b3499]"
                    }`}
                  >
                    Week
                  </button>
                </div>
                <div className="flex items-center  border border-white rounded-xl px-4 py-2 bg-white/40">
                  <button
                    onClick={() => navigateMonth("prev")}
                    className="p-1 hover:bg-gray-100 rounded-lg"
                  >
                    <Icon name="arrow_left_01" height={14} width={14} />
                  </button>
                  <span className="text-sm font-medium text-gray-700 px-2 select-none">
                    {currentMonthDisplay}
                  </span>
                  <button
                    onClick={() => navigateMonth("next")}
                    className="p-1 hover:bg-gray-100 rounded-lg"
                  >
                    <Icon name="arrow_right_01" height={14} width={14} />
                  </button>
                </div>
              </div>

              {/* Calendar */}
              <div className="rounded-xl">
                {view === "Month" ? (
                  <>
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
                            dayData.highlighted
                              ? "bg-blue-50 ring-2 ring-blue-500"
                              : ""
                          }
                          ${
                            dayData.events.length &&
                            "bg-gradient-to-b from-[rgba(69,127,243,0.05)] to-[rgba(69,127,243,0.12)]"
                          }
                          ${!dayData.isCurrentMonth ? "opacity-40" : ""}
                          `}
                        >
                          <div className="flex items-center justify-between mb-2 p-2">
                            <span
                              className={`text-sm font-medium ${
                                dayData.highlighted
                                  ? "text-blue-600"
                                  : "text-gray-700"
                              }`}
                            >
                              {dayData.day}
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
                            {dayData.events.slice(0, 3).map((event, idx) => (
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
                            {dayData.events.length > 3 && (
                              <div>
                                <span className="text-[9px] font-medium ml-2">
                                  {dayData.events.length - 3} more...
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    {/* Week view */}
                    <div className="grid grid-cols-7 mb-4 border-white">
                      {weekDays.map((weekDay) => (
                        <div
                          key={weekDay.day}
                          className="pt-3 text-sm font-medium text-[#141b3499] text-center"
                        >
                          <div>{weekDay.dayName}</div>
                          <div
                            className={`text-xs mt-1 ${
                              weekDay.isToday
                                ? "text-blue-600 font-semibold"
                                : "text-gray-500"
                            }`}
                          >
                            {months[weekDay.month].substring(0, 3)}{" "}
                            {weekDay.day}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-2">
                      {weekDays.map((weekDay, index) => {
                        const dayEvents = getEventsForDay(weekDay.day);
                        return (
                          <div
                            key={index}
                            className={`min-h-[400px] backdrop-blur-3xl p-1 border border-white shadow-xs rounded-xl ${
                              weekDay.isToday
                                ? "bg-blue-50 ring-2 ring-blue-500"
                                : ""
                            }
                            ${
                              dayEvents.length &&
                              "bg-gradient-to-b from-[rgba(69,127,243,0.05)] to-[rgba(69,127,243,0.12)]"
                            }`}
                          >
                            <div className="flex items-center justify-between mb-2 p-2">
                              <span
                                className={`text-sm font-medium ${
                                  weekDay.isToday
                                    ? "text-blue-600"
                                    : "text-gray-700"
                                }`}
                              >
                                {weekDay.day}
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
                                dayEvents.length && "bg-white/70"
                              } p-1 rounded-xl`}
                            >
                              {dayEvents.map((event, idx) => (
                                <div
                                  key={idx}
                                  className={`p-2 rounded ${event.color} flex flex-col`}
                                >
                                  <div className="text-xs font-medium">
                                    {event.title}
                                  </div>
                                  <div className="text-[10px] text-black/70 mt-1">
                                    {event.time}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            </div>
            {/* Right side - Today tasks card cloned from Figma node 2326-10450 */}
            <TodayTasks />
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