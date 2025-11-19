import Card from "@/components/ui/Card";
import Icon from "@/utils/icon";
import React from "react";

import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type AthleteTask = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  creatorName: string;
  creatorAvatarSrc?: string;
  imageSrc?: string;
  progressPercent: number;
};

// rectangle avatar from figma context

const imgTaskIcon2 =
  "https://www.figma.com/api/mcp/asset/5bc67d26-b406-4ac6-a3eb-ed0bd4a26c44";

const defaultTasks: AthleteTask[] = [
  {
    id: "a1",
    title: "Art of Tackling",
    subtitle: "Elite Basketball Fundamentals",
    description:
      "This task focused on foundational techniques for disengaging blocks and pursuing the ball carrier. It included a video demonstration, a drill checklist, and a required video submission of athletes performing the drill.",
    creatorName: "Jason M.",
    creatorAvatarSrc: "/overview/imgDefaultCreator.png",
    imageSrc: "/overview/imgTaskIcon1.png",
    progressPercent: 70,
  },
  {
    id: "a2",
    title: "Red Zone Offense",
    subtitle: "Elite Basketball Fundamentals",
    description:
      "This task focused on foundational techniques for disengaging blocks and pursuing the ball carrier. It included a video demonstration, a drill checklist, and a required video submission of athletes performing the drill.",
    creatorName: "Jason M.",
    creatorAvatarSrc: "/overview/imgDefaultCreator.png",
    imageSrc: "/overview/imgTaskIcon2.png",
    progressPercent: 70,
  },
  {
    id: "a3",
    title: "Red Zone Offense",
    subtitle: "Elite Basketball Fundamentals",
    description:
      "This task focused on foundational techniques for disengaging blocks and pursuing the ball carrier. It included a video demonstration, a drill checklist, and a required video submission of athletes performing the drill.",
    creatorName: "Jason M.",
    creatorAvatarSrc: "/overview/imgDefaultCreator.png",
    imageSrc: "/overview/imgTaskIcon2.png",
    progressPercent: 70,
  },
];

export default function YourAthletesTasks({
  tasks = defaultTasks,
}: {
  tasks?: AthleteTask[];
}) {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-[20px] font-semibold leading-[1.5] text-dark">
          Your Athlete’s Tasks
        </h2>
        <button
          type="button"
          aria-label="Next"
          className="relative inline-flex size-10 items-center justify-center rounded-full border border-white bg-white/65"
        >
          <Icon name="right_arrow" width={20} height={20} />
        </button>
      </div>

      <div className="mt-4 grid">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
          className="w-full"
        >
          {tasks.map((task) => (
            <SwiperSlide key={task.id}>
              <Card className="relative h-[264px] px-4 py-6 bg-white/60">
                <div className="flex h-full flex-col gap-6">
                  <div className="flex w-full flex-col gap-5">
                    <div className="flex items-center gap-3">
                      <div className="relative size-[45px] shrink-0">
                        {task.imageSrc ? (
                          <img
                            src={task.imageSrc}
                            alt=""
                            className="absolute -inset-[3.33%] max-w-none"
                            height={48}
                            width={48}
                          />
                        ) : (
                          <div className="size-full rounded-[12px] bg-white/70" />
                        )}
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <p className="text-[16px] font-semibold leading-[1.5] text-dark">
                          {task.title}
                        </p>
                        <p className="text-[12px] font-normal leading-[1.4] text-dark">
                          {task.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex w-full flex-col gap-2.5">
                      <p className="w-full text-[12px] font-normal leading-[1.4] text-dark">
                        {task.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-[12px] font-normal leading-[1.4] text-dark/70">
                          Created by:
                        </p>
                        <div className="flex items-center gap-1">
                          <span className="relative inline-block size-4 shrink-0 overflow-hidden rounded-[37px]">
                            <img
                              src={
                                task.creatorAvatarSrc ??
                                "/overview/imgDefaultCreator.png"
                              }
                              alt=""
                              className="absolute inset-0 size-full max-w-none object-cover"
                            />
                          </span>
                          <p className="text-[10px] font-medium leading-[1.4] text-dark">
                            {task.creatorName}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="flex items-center justify-between">
                      <p className="text-[10px] font-medium leading-[1.4] text-dark">
                        Majority Completion
                      </p>
                      <div className="flex items-center gap-1">
                        <span
                          className="inline-block size-3 rounded-[4px] border-t border-[#68b0ea]"
                          style={{
                            borderTopColor: "#68B0EA",
                            background:
                              "linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%)",
                            width: "12px",
                            height: "12px",
                          }}
                        />
                        <p className="text-[10px] font-medium leading-[1.4] text-dark">
                          {Math.round(task.progressPercent)}% Complete
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 h-[7px] w-full rounded-[40px] bg-[#c4d4fd]">
                      <div
                        className="h-full rounded-[80px] bg-gradient-to-r from-[#68b0ea] to-[#1556d8]"
                        style={{
                          width: `${Math.max(
                            0,
                            Math.min(100, task.progressPercent)
                          )}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Card>
  );
}
