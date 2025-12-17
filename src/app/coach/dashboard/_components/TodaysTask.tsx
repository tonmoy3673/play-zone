"use client";
import { AnimatedButton } from "@/components/ui/Button";
import React, { useState } from "react";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import ProgramStartModal from "./ProgramStart";
import ProfileModal from "@/components/Modal/ProfileModal";
import Card from "@/components/ui/Card";

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
    time: "2:40 am",
    emphasized: true,
  },
  {
    id: "2",
    title: "University Of Oregon Virtual Camp",
    description: "Meeting with Marks",
    time: "3:00 am",
    live: true,
  },
  {
    id: "3",
    title: "QB Fundamentals",
    meta: "12 Sessions  |  Mrs. Willson",
    time: "5:40 am",
    badgeText: "Video submission required",
  },
  {
    id: "4",
    title: "Linebacker Drills",
    meta: "8 Sessions  |  Mrs. Willson",
    time: "5:40 am",
  },
  {
    id: "5",
    title: "Linebacker Drills",
    meta: "8/12 Sessions  |  Mrs. Willson",
    time: "5:40 am",
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Card className="!p-0">
      <div className="flex items-center justify-between p-5">
        <h2 className="text-[20px] font-semibold leading-[1.5] text-dark">
          Today&apos;s Task
        </h2>
        <AnimatedButton
          onClick={handleOpenModal}
          className="flex items-center justify-center text-white font-medium text-[10px] px-4 py-2.5 rounded-full bg-primary-gradient h-10 cursor-pointer"
        >
          View Entire Schedule
        </AnimatedButton>
      </div>

      <div>
        <Swiper
          modules={[FreeMode]}
          spaceBetween={8}
          slidesPerView={"auto"}
          freeMode={true}
          grabCursor={true}
          loop={true}
          className="!py-2"
        >
          {days.map((d) => (
            <SwiperSlide
              key={d.id}
              style={{ width: 62 }}
              className="h-[78px] flex justify-center"
            >
              <div
                className={[
                  "flex flex-col items-center justify-center w-[62px] p-3 rounded-2xl gap-3",
                  d.active
                    ? "bg-white shadow-md"
                    : "bg-white/60 hover:bg-white border border-white/90",
                ].join(" ")}
              >
                <p className="text-lg text-dark">{d.day}</p>
                <p className="text-[10px] text-dark">{d.date}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="p-5 pt-2 flex flex-col gap-2 overflow-y-auto">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="w-full rounded-xl py-3.5 px-3 space-y-1 hover:bg-white transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <p className="capitalize text-sm font-medium text-dark">
                  {task.title}
                </p>

                {task.live && (
                  <div className="inline-flex items-center gap-1 rounded-[37.5px] bg-white/65 px-2 py-1">
                    <span className="size-[6px] rounded-[1.5px] bg-[#ff5151]" />
                    <span className="text-[8px] font-medium tracking-[-0.24px] text-[#ff5252]">
                      Live
                    </span>
                  </div>
                )}

                {task.badgeText && (
                  <div className="inline-flex h-[17px] items-center justify-center rounded-[14px] bg-dark/10 px-2 py-1">
                    <span className="text-[8px] font-medium tracking-[-0.24px] text-dark">
                      {task.badgeText}
                    </span>
                  </div>
                )}
              </div>

              <p className="text-right text-[10px] font-medium leading-[1.4] text-dark/70">
                {task.time}
              </p>
            </div>

            {task.description && (
              <p className="text-xs text-dark/70">{task.description}</p>
            )}
            {task.meta && <p className="text-xs text-dark/70">{task.meta}</p>}
          </div>
        ))}
      </div>

      {/* Modal - positioned inside Today&apos;s Task section */}
      <ProfileModal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ProgramStartModal onClose={handleCloseModal} />
      </ProfileModal>
    </Card>
  );
}
