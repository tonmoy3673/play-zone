/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Card from "@/components/ui/Card";
import {
  ChevronLeft,
  ChevronRight,
  MoreVertical,
  Plus,
  Search,
} from "lucide-react";
import React, { useState } from "react";
import CalendarModal from "./_components/CalendarModal";

const CalendarDashboard = () => {
  const [currentMonth, setCurrentMonth] = useState("August 2025");
  const [view, setView] = useState("Month");
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const getCurrentMonthIndex = () => {
    const [monthName, year] = currentMonth.split(" ");
    return months.findIndex((m) => m === monthName);
  };

  const getCurrentYear = () => {
    return parseInt(currentMonth.split(" ")[1]);
  };

  const navigateMonth = (direction: "prev" | "next") => {
    const currentMonthIndex = getCurrentMonthIndex();
    const currentYear = getCurrentYear();

    let newMonthIndex = currentMonthIndex;
    let newYear = currentYear;

    if (direction === "next") {
      newMonthIndex = currentMonthIndex + 1;
      if (newMonthIndex > 11) {
        newMonthIndex = 0;
        newYear = currentYear + 1;
      }
    } else {
      newMonthIndex = currentMonthIndex - 1;
      if (newMonthIndex < 0) {
        newMonthIndex = 11;
        newYear = currentYear - 1;
      }
    }

    setCurrentMonth(`${months[newMonthIndex]} ${newYear}`);
  };

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
          title: "Upload Plan...",
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
      ],
    },
    {
      day: 15,
      events: [
        {
          title: "Upload Plan...",
          time: "11:30am",
          color: "bg-green-100 text-green-700",
        },
        {
          title: "Workout F...",
          time: "10:30 am",
          color: "bg-purple-100 text-purple-700",
        },
      ],
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
      ],
    },
  ];

  const liveSessions = [
    {
      title: "Team Strategy Session",
      time: "3:58 PM - 5:30 PM",
      status: "LIVE",
    },
  ];

  const trainingSessions = [
    {
      title: "Weight Training",
      subtitle: "Team Gym @ 5:00 PM",
      action: "Check in",
    },
    {
      title: "Baseball Training",
      subtitle: "Indoor Court @ 4:30 PM",
      action: "Check in",
    },
  ];

  const upcomingDeadlines = [
    {
      title: "Game Film Analysis",
      subtitle: "Due Jan 16, 11:58 PM",
      progress: 60,
    },
  ];

  const upcomingTasks = [
    {
      title: "Atlas Venture - Exclusive",
      subtitle: "Hasset Twanch Wertners",
      time: "Due Fri, Aug 3 at 2:30 PM",
      action: "Start Now",
      icon: "🏁",
    },
    {
      title: "Exchange Benefits",
      subtitle: "Hasset Twanch Wertners",
      time: "Due Fri, Aug 3 at 2:30 PM",
      action: "Start Now",
      icon: "⏰",
    },
    {
      title: "Toyota Lead In - Non-Exclusive",
      subtitle: "Hasset Twanch Wertners",
      time: "Due Fri, Aug 3 at 2:30 PM",
      action: "Start here",
      icon: "⏰",
    },
    {
      title: "Exchange Benefits",
      subtitle: "Hasset Twanch Wertners",
      time: "Due Fri, Aug 3 at 2:30 PM",
      action: "Start Now",
      icon: "⏰",
    },
    {
      title: "Toyota Lead In - Non-Exclusive",
      subtitle: "Hasset Twanch Wertners",
      time: "Due Fri, Aug 3 at 2:30 PM",
      action: "Start here",
      icon: "⏰",
    },
  ];

  return (
    <div className="rounded-2xl bg-[#E7F2F5]">
      <div className="grid lg:grid-cols-3 gap-3 grid-cols-1 items-start">
        <div
          className="col-span-2 bg-[#E7F2F5] h-screen rounded-2xl overflow-auto"
          style={{
            overflow: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {/* Main Calendar Section */}
          <div className="p-6 h-full">
            <div className="">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className="mb-6">
                  <h1 className="text-2xl font-bold text-gray-900 mb-1">
                    Calendar
                  </h1>
                  <p className="text-sm text-gray-500">
                    Manage your upcoming, past, and cancelled coaching sessions.
                  </p>
                </div>
                <AnimatedButton
                  onClick={() => setIsModalOpen(true)}
                  style={{
                    borderRadius: "40px",
                    background:
                      "linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%)",
                  }}
                  className="flex items-center justify-center gap-2 text-white font-normal px-5 py-4 rounded-full hover:bg-blue-700"
                >
                  <span>
                    <Plus />
                  </span>
                  Create Event
                </AnimatedButton>
              </div>

              {/* Search and Controls */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search"
                      className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:outline-none w-64 bg-[#f8fbfc]"
                    />
                  </div>
                  <div className="flex bg-[#f3f9fa] rounded-xl border border-gray-200 px-1 py-0.5">
                    <Button
                      aria-label="View Month"
                      bg="linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%)"
                      textColor="#fff"
                      badgeTextColor="#1e40af"
                      className="rounded-xl px-6 py-2"
                      onClick={() => setView("Month")}
                    >
                      Month
                    </Button>
                    <Button
                      aria-label="View Week"
                      bg="transparent"
                      textColor={view === "Week" ? "#ffffff" : "#4B5563"}
                      className={`px-6 py-2 text-black rounded-xl text-sm font-medium ${
                        view === "Week"
                          ? "bg-blue-500 text-white"
                          : "text-[#141b3499]"
                      }`}
                      onClick={() => setView("Week")}
                    >
                      Week
                    </Button>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center bg-transparent border border-white rounded-xl px-2 py-1">
                    <button
                      className="p-1 hover:bg-gray-100 rounded-lg"
                      onClick={() => navigateMonth("prev")}
                    >
                      <ChevronLeft className="w-5 h-5 text-[#141b3499]" />
                    </button>
                    <span className="text-sm font-medium text-gray-700 px-2 select-none">
                      {currentMonth}
                    </span>
                    <button
                      className="p-1 hover:bg-gray-100 rounded-lg"
                      onClick={() => navigateMonth("next")}
                    >
                      <ChevronRight className="w-5 h-5 text-[#141b3499]" />
                    </button>
                  </div>
                </div>
              </div>
              {/* Calendar Grid */}
              <Card className="rounded-xl border border-gray-200">
                {/* Days of Week Header */}
                <div className="grid grid-cols-7 border-b border-gray-200">
                  {daysOfWeek.map((day) => (
                    <div
                      key={day}
                      className="p-4 text-sm font-medium text-[#141b3499] text-center"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Days */}
                <div className="grid grid-cols-7 gap-2">
                  {calendarDays.map((dayData, index) => (
                    <div
                      key={index}
                      className={`min-h-32 p-3 border shadow-sm border-white rounded-lg ${
                        dayData.highlighted
                          ? "bg-blue-50 ring-2 ring-blue-500"
                          : ""
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span
                          className={`text-sm font-medium ${
                            dayData.highlighted
                              ? "text-blue-600"
                              : "text-gray-700"
                          }`}
                        >
                          {dayData.day}
                        </span>
                        {dayData.events.length > 0 && (
                          <button className="text-gray-400 hover:text-[#141b3499]">
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                      <div className="space-y-1">
                        {dayData.events.slice(0, 3).map((event, idx) => (
                          <div
                            key={idx}
                            className={`text-xs px-2 py-1 rounded ${event.color}`}
                          >
                            <div className="font-medium truncate">
                              {event.title}
                            </div>
                            <div className="text-xs opacity-75">
                              {event.time}
                            </div>
                          </div>
                        ))}
                        {dayData.events.length > 3 && (
                          <button className="text-xs text-blue-600 font-medium">
                            {dayData.events.length - 3} more...
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>

        <div
          style={{
            overflow: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          className="col-span-1 p-5 bg-[#FFFFFF99] h-screen rounded-2xl overflow-auto"
        >
          {/* Right Sidebar */}
          <div
            className="rounded-2xl overflow-auto"
            style={{
              overflow: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {/* Today's Date */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-lg font-medium text-black">
                  August 13, 2025
                </div>
              </div>
              <button className="text-xs text-blue-600 font-medium flex items-center gap-1">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                Today
              </button>
            </div>

            {/* Live Sessions */}
            <div className="mb-6 mt-6">
              <h3 className="text-sm font-semibold text-gray-900 my-3">
                Live Sessions
              </h3>
              {liveSessions.map((session, idx) => (
                <div key={idx} className="rounded-lg mt-4">
                  <div className="flex items-start justify-between mb-1">
                    <div className="text-sm font-medium text-gray-900">
                      {session.title}
                    </div>
                    <span className="px-2 py-0.5 bg-red-500 text-white text-xs font-semibold rounded">
                      LIVE
                    </span>
                  </div>
                  <div className="text-xs text-[#141b3499]">{session.time}</div>
                </div>
              ))}
            </div>

            {/* Training Sessions */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                Training Sessions
              </h3>
              {trainingSessions.map((session, idx) => (
                <div
                  key={idx}
                  className="flex items-start justify-between mb-3 py-2"
                >
                  <div>
                    <div className="text-[16px] font-medium text-gray-900">
                      {session.title}
                    </div>
                    <div className="text-xs text-gray-500 my-1">
                      {session.subtitle}
                    </div>
                  </div>
                  <button className="px-3 bg-gradient-to-r from-[#5C8FF7] to-[#276AEE] text-white text-xs font-medium rounded-md py-1.5">
                    {session.action}
                  </button>
                </div>
              ))}
            </div>

            {/* Upcoming Deadlines */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                Upcoming Deadlines
              </h3>
              {upcomingDeadlines.map((deadline, idx) => (
                <div key={idx} className="mb-3">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {deadline.title}
                      </div>
                      <div className="text-xs text-gray-500">
                        {deadline.subtitle}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-[#5C8FF7] to-[#276AEE] h-2 rounded-full"
                        style={{ width: `${deadline.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-xs font-medium text-[#141b3499]">
                      {deadline.progress}% Complete
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Upcoming Tasks */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                Upcoming Tasks
              </h3>
              <div className="space-y-3">
                {upcomingTasks.map((task, idx) => (
                  <div key={idx} className="flex items-start gap-3 py-2">
                    <div className="text-2xl">{task.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-gray-900 truncate">
                        {task.title}
                      </div>
                      <div className="text-xs text-gray-500 truncate">
                        {task.subtitle}
                      </div>
                      <div className="text-xs text-[#141b3499] mt-0.5">
                        {task.time}
                      </div>
                      <button className="px-3 bg-gradient-to-r from-[#5C8FF7] to-[#276AEE] text-white text-xs font-medium rounded-xl mt-2 py-1.5">
                        {task.action}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Modal */}
      <CalendarModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default CalendarDashboard;

import { AnimatedButton } from "@/components/ui/Button";
import Icon, { IconName } from "@/utils/icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  bg?: string;
  textColor?: string;
  count?: number;
  badgeClassName?: string;
  badgeBg?: string;
  badgeTextColor?: string;
  badgeBorderRadius?: number | string;
  badgeStyle?: React.CSSProperties;
  icon?: React.ReactNode;
  iconName?: IconName;
  iconPosition?: "left" | "right";
  iconWidth?: number | string;
  iconHeight?: number | string;
  iconClassName?: string;
  iconStyle?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  bg,
  textColor = "#fff",
  count,
  badgeClassName = "",
  badgeBg,
  badgeTextColor,
  badgeBorderRadius,
  badgeStyle,
  icon,
  iconName,
  iconPosition = "right",
  iconWidth = 16,
  iconHeight = 16,
  iconClassName,
  iconStyle,
  children,
  style,
  className = "",
  ...rest
}) => {
  const defaultBg = "linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%)";

  const mergedStyle: React.CSSProperties = {
    background: bg || defaultBg,
    color: textColor,
    ...style,
  } as React.CSSProperties;

  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-2 rounded-full text-sm transition-colors ${className}`}
      style={mergedStyle}
      {...rest}
    >
      {/* Icon left */}
      {iconPosition === "left" &&
        (icon ||
          (iconName && (
            <Icon
              name={iconName}
              width={iconWidth}
              height={iconHeight}
              className={iconClassName}
              style={iconStyle}
            />
          )))}

      <span>{children}</span>

      {/* Icon right */}
      {iconPosition === "right" &&
        (icon ||
          (iconName && (
            <Icon
              name={iconName}
              width={iconWidth}
              height={iconHeight}
              className={iconClassName}
              style={iconStyle}
            />
          )))}
      {typeof count === "number" && (
        <span
          className={`inline-flex items-center justify-center px-2 py-1 font-semibold text-xs ${badgeClassName}`}
          style={{
            background: badgeBg ?? "rgba(255,255,255,1)",
            color: badgeTextColor ?? "#141B34",
            borderRadius:
              typeof badgeBorderRadius === "number"
                ? `${badgeBorderRadius}px`
                : badgeBorderRadius ?? "44px",
            ...badgeStyle,
          }}
        >
          {count}
        </span>
      )}
    </button>
  );
};
