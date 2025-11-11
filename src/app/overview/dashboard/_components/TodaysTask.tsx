"use client";
import { AnimatedButton } from "@/components/ui/Button";
import React, { useState } from "react";


// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import ProfileModal from "@/components/Modal/ProfileModal";
import ProgramStartModal from "./ProgramStart";

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
  { id: "1", title: "Boost Program", description: "Meeting with Marks", time: "2:40 am", emphasized: true },
  { id: "2", title: "University Of Oregon Virtual Camp", description: "Meeting with Marks", time: "3:00 am", live: true },
  { id: "3", title: "QB Fundamentals", meta: "12 Sessions  |  Mrs. Willson", time: "5:40 am", badgeText: "Video submission required" },
  { id: "4", title: "Linebacker Drills", meta: "8 Sessions  |  Mrs. Willson", time: "5:40 am" },
  { id: "5", title: "Linebacker Drills", meta: "8/12 Sessions  |  Mrs. Willson", time: "5:40 am", badgeText: "Video submission required" },
];

export default function TodaysTask({
  days = defaultDays,
  tasks = defaultTasks,
}: {
  days?: DayPill[];
  tasks?: TaskItem[];
}): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative w-min-[416px] overflow-hidden rounded-[24px] bg-white/30 border border-white">
      <div className="p-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-[20px] font-semibold leading-[1.5] text-[#141b34]">
            Today's Task
          </h2>
          <AnimatedButton
            onClick={handleOpenModal}
            style={{
              borderRadius: "40px",
              background: "linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%)",
            }}
            className="flex items-center justify-center gap-1 text-white font-normal text-[10px] px-4 py-2.5 rounded-full hover:bg-blue-700 cursor-pointer"
          >
            View Entire Schedule
          </AnimatedButton>
        </div>

        {/* Days Swiper */}
        <div className="mt-5">
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
                <div className={[
                  "flex flex-col items-center justify-center w-[62px] h-[78px] rounded-[16px]",
                  d.active ? "bg-white shadow-md" : "bg-white/60 px-3 py-[12px]"
                ].join(" ")}>
                  <p className="text-[18px] text-[#141b34]">{d.day}</p>
                  <p className="text-[10px] text-[#141b34]">{d.date}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Tasks List */}
        <div className="mt-5 flex flex-col gap-2 overflow-y-auto pr-1 max-h-[340px]">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={[
                "w-full shrink-0 rounded-[12px] px-3 py-2",
                task.emphasized ? "bg-white" : "",
              ].join(" ")}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[7.5px]">
                  <p className="capitalize text-[14px] font-medium tracking-[-0.42px] text-[#141b34]">
                    {task.title}
                  </p>

                  {task.live && (
                    <div className="inline-flex items-center gap-1 rounded-[37.5px] bg-white/65 px-2 py-1">
                      <span className="size-[6px] rounded-[1.5px] bg-[#ff5151]" />
                      <span className="text-[8px] font-medium tracking-[-0.24px] text-[#ff5252]">Live</span>
                    </div>
                  )}

                  {task.badgeText && (
                    <div className="inline-flex h-[17px] items-center justify-center rounded-[14px] bg-[#141b34]/10 px-2 py-1">
                      <span className="text-[8px] font-medium tracking-[-0.24px] text-[#141b34]">
                        {task.badgeText}
                      </span>
                    </div>
                  )}
                </div>

                <p className="w-[69px] text-right text-[10px] font-medium leading-[1.4] text-[#141b34]/70">
                  {task.time}
                </p>
              </div>

              {task.description && (
                <p className="mt-1 w-full text-[12px] font-normal leading-[1.4] text-[#141b34]/70">
                  {task.description}
                </p>
              )}
              {task.meta && (
                <p className="mt-1 w-full text-[12px] font-normal leading-[1.4] text-[#141b34]/70">
                  {task.meta}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal - positioned inside Today's Task section */}
      <ProfileModal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ProgramStartModal onClose={handleCloseModal} />
      </ProfileModal>
    </div>
  );
}