"use client";

/* eslint-disable @next/next/no-img-element */
import { AnimatedButton } from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Icon from "@/utils/icon";

import "swiper/css";
import { Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type ActivityItem = {
  id: string;
  title: string;
  body?: string;
  timeAgo: string;
  avatarSrc?: string;
};

const defaultItems: ActivityItem[] = [
  {
    id: "1",
    title: "Johnny Manziel completed 'Strength Training’",
    body: "Check the itinerary for optimization suggestions.",
    timeAgo: "1min ago",
    avatarSrc: "/overview/logoView.svg",
  },
  {
    id: "2",
    title: "Johnny Manziel completed 'Strength Training’",
    body: "Each workout adds momentum to his progress. Consistency is turning effort into real results.”",
    timeAgo: "1min ago",
    avatarSrc: "/overview/logoView.svg",
  },
  {
    id: "3",
    title: "Johnny Manziel completed 'Strength Training’",
    body: "Check the itinerary for optimization suggestions.",
    timeAgo: "1min ago",
    avatarSrc: "/overview/logoView.svg",
  },
  {
    id: "4",
    title: "Johnny Manziel completed 'Strength Training’",
    body: "Check the itinerary for optimization suggestions.",
    timeAgo: "1min ago",
    avatarSrc: "/overview/logoView2.svg",
  },
  {
    id: "5",
    title: "Johnny Manziel completed 'Strength Training’",
    body: "Check the itinerary for optimization suggestions.",
    timeAgo: "1min ago",
    avatarSrc: "/overview/logoView2.svg",
  },
  {
    id: "6",
    title: "Johnny Manziel completed 'Strength Training’",
    body: "Check the itinerary for optimization suggestions.",
    timeAgo: "1min ago",
    avatarSrc: "/overview/logoView2.svg",
  },
];

export default function RecentActivity({
  items = defaultItems,
}: {
  items?: ActivityItem[];
}) {
  return (
    <Card className="pb-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-semibold text-dark">Recent Activity</h2>
          <div className="flex items-center gap-1.5">
            <div>
              <Icon name="live" width={20} height={20} />
            </div>

            <span className="text-center text-[10.5px] font-bold  text-[#4ec470]">
              LIVE
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <div className="inline-flex size-10 items-center justify-center rounded-full border border-white bg-white/65">
              <Icon name="iconEqualizer" width={20} height={20} />
            </div>
          </div>

          <AnimatedButton className="h-10 flex items-center justify-center gap-1 text-white font-medium text-[10px] px-4 py-2.5 rounded-full bg-primary-gradient">
            View Progress
          </AnimatedButton>
        </div>
      </div>

      <Swiper
        direction="vertical"
        slidesPerView="auto"
        spaceBetween={9}
        mousewheel={true}
        modules={[Mousewheel]}
        className="mt-4 max-h-[438px] mb-4"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className="!w-full !h-auto">
            <div className="flex w-full shrink-0 gap-3 rounded-2xl p-3 group hover:bg-white/40">
              <div className="size-12 flex items-center rounded-full justify-center bg-white/60 group-hover:bg-white">
                <Icon
                  name="vue"
                  height={20}
                  className="group-hover:text-[#276AEE] text-[#44517ECC]"
                />
              </div>

              <div className="flex flex-1 flex-col gap-2">
                <div className="flex items-start justify-between gap-3">
                  <p className="w-[223px] text-sm font-semibold text-dark">
                    {item.title}
                  </p>
                  <p className="shrink-0 text-[10px] leading-[1.5] text-[#1556d8]">
                    {item.timeAgo}
                  </p>
                </div>

                {item.body ? (
                  <p className="text-sm text-dark/70">{item.body}</p>
                ) : null}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Card>
  );
}
