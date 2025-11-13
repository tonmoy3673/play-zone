"use client";

import React from "react";
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Icon from "@/utils/icon";

type FeedItem = {
  id: string;
  minutesAgo: string;
  imageSrc: string;
  likes: number;
  replies: number;
  authorName: string;
  authorAvatarSrc: string;
  body: string;
  linkText?: string;
  linkHref?: string;
};

const defaultItems: FeedItem[] = [
  {
    id: "1",
    minutesAgo: "20 min ago",
    imageSrc: "/overview/slide1.png",
    likes: 20,
    replies: 30,
    authorName: "Alex Mark",
    authorAvatarSrc: "/overview/slide-1.png",
    body: "Top defensive line signees in the 2025 class!",
  },
  {
    id: "2",
    minutesAgo: "20 min ago",
    imageSrc: "/overview/slide2.png",
    likes: 20,
    replies: 30,
    authorName: "Coach Bronson",
    authorAvatarSrc: "/overview/slide-2.png",
    body: "Mahalo ",
    linkText: "@oregonfootball",
    linkHref: "https://x.com/oregonfootball",
  },
  {
    id: "3",
    minutesAgo: "20 min ago",
    imageSrc: "/overview/slide1.png",
    likes: 20,
    replies: 30,
    authorName: "Alex Mark",
    authorAvatarSrc: "/overview/slide-1.png",
    body: "Top defensive line signees in the 2025 class!",
  },
  {
    id: "4",
    minutesAgo: "20 min ago",
    imageSrc: "/overview/slide2.png",
    likes: 20,
    replies: 30,
    authorName: "Coach Bronson",
    authorAvatarSrc: "/overview/slide-2.png",
    body: "Mahalo ",
    linkText: "@oregonfootball",
    linkHref: "https://x.com/oregonfootball",
  },
];

export default function CommunityFeed({
  items = defaultItems,
}: {
  items?: FeedItem[];
}): JSX.Element {
  return (
    <div className="max-w-[530px] overflow-hidden rounded-[24px] bg-white/30 border border-white">
      <div className="p-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-[20px] font-semibold leading-[1.5] text-[#141b34]">
            Community Feed
          </h2>
          <button
            type="button"
            aria-label="Next"
            className="relative inline-flex size-10 items-center justify-center rounded-full border border-white bg-white/65 cursor-pointer hover:bg-white/80 transition-colors"
          >
            <Icon name="right_arrow" width={20} height={20} />
          </button>
        </div>

        {/* Swiper */}
        <div className="mt-4">
          <Swiper
            modules={[FreeMode]}
            spaceBetween={16}
            slidesPerView="auto"
            freeMode={true}
            grabCursor={true}
            className="!py-2"
          >
            {items.map((item) => (
              <SwiperSlide key={item.id} className="!w-[260px]">
                <div className="relative h-[295px] w-full overflow-hidden rounded-[16px] bg-white/60">
                  <div className="absolute inset-0 p-3 flex flex-col h-full">
                    {/* Image Section */}
                    <div className="relative h-[127px] w-full overflow-hidden rounded-[12px] bg-white">
                      <img
                        src={item.imageSrc}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover"
                      />

                      {/* Play Button */}
                      <div className="pointer-events-none absolute left-1/2 top-1/2 w-[30px] h-[30px] -translate-x-1/2 -translate-y-1/2 rounded-full">
                        <img
                          src={"/overview/playCircle.svg"}
                          alt=""
                          className="absolute left-[3px] top-[3px] w-[24px] h-[24px]"
                        />
                      </div>

                      {/* Minutes Ago */}
                      <div className="absolute left-[10px] top-[10px] inline-flex h-[20px] items-center justify-center rounded-[37.5px] bg-white/80 px-[3.75px] py-[2.25px]">
                        <span className="text-[10px] leading-none tracking-[-0.3px] text-[#141b34]">
                          {item.minutesAgo}
                        </span>
                      </div>
                    </div>

                    {/* Likes & Replies */}
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center gap-[6px]">
                        <img
                          src={"/overview/heart.svg"}
                          alt=""
                          className="w-4 h-4"
                        />
                        <span className="text-[10px] font-medium text-[#141b34]">
                          {item.likes} Likes
                        </span>
                      </div>
                      <div className="flex items-center gap-[6px]">
                        <img
                          src={"/overview/message.svg"}
                          alt=""
                          className="w-4 h-4"
                        />
                        <span className="text-[10px] font-medium text-[#141b34]">
                          {item.replies} Replies
                        </span>
                      </div>
                    </div>

                    {/* Author & Body */}
                    <div className="mt-3 flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <span className="relative inline-block w-[26px] h-[26px] overflow-hidden rounded-full">
                          <img
                            src={item.authorAvatarSrc}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover"
                          />
                        </span>
                        <p className="text-[14px] font-medium text-[#141b34]">
                          {item.authorName}
                        </p>
                      </div>

                      <p className="text-[12px] text-[#141b34]">
                        {item.body}
                        {item.linkText && (
                          <>
                            <a
                              href={item.linkHref}
                              target="_blank"
                              rel="noreferrer"
                              className="px-1 text-[#1556d8] underline underline-offset-2"
                            >
                              {item.linkText}
                            </a>
                            {" for hosting our Island Boys from the 808!!"}
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
