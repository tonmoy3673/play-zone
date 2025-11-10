"use client";

import React from "react";
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

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

const imgArrow =
  "https://www.figma.com/api/mcp/asset/24b0e20e-150e-4fe0-a475-0bc18c9ed753";
const imgPlayCircle =
  "https://www.figma.com/api/mcp/asset/c6dc6128-163d-4e92-9148-ef984df96edd";
const imgHeart =
  "https://www.figma.com/api/mcp/asset/3b8c897c-c3ec-4040-bf75-ba66fc279f9e";
const imgMessage =
  "https://www.figma.com/api/mcp/asset/df457239-46da-44ba-966f-761bb30fa9a3";

const defaultItems: FeedItem[] = [
  {
    id: "1",
    minutesAgo: "20 min ago",
    imageSrc:
      "https://www.figma.com/api/mcp/asset/f49cb904-54f5-43c3-b83a-38ecd35af089",
    likes: 20,
    replies: 30,
    authorName: "Alex Mark",
    authorAvatarSrc:
      "https://www.figma.com/api/mcp/asset/2f9f7f47-03ee-4b0b-9323-ca72f7a29e9f",
    body: "Top defensive line signees in the 2025 class!",
  },
  {
    id: "2",
    minutesAgo: "20 min ago",
    imageSrc:
      "https://www.figma.com/api/mcp/asset/aec0633c-da9b-4b52-9433-0581b013a5aa",
    likes: 20,
    replies: 30,
    authorName: "Coach Bronson",
    authorAvatarSrc:
      "https://www.figma.com/api/mcp/asset/4f30dfbc-7e64-4981-aa37-c223fe38a794",
    body: "Mahalo ",
    linkText: "@oregonfootball",
    linkHref: "https://x.com/oregonfootball",
  },
  {
    id: "3",
    minutesAgo: "20 min ago",
    imageSrc:
      "https://www.figma.com/api/mcp/asset/f49cb904-54f5-43c3-b83a-38ecd35af089",
    likes: 20,
    replies: 30,
    authorName: "Alex Mark",
    authorAvatarSrc:
      "https://www.figma.com/api/mcp/asset/2f9f7f47-03ee-4b0b-9323-ca72f7a29e9f",
    body: "Top defensive line signees in the 2025 class!",
  },
  {
    id: "4",
    minutesAgo: "20 min ago",
    imageSrc:
      "https://www.figma.com/api/mcp/asset/aec0633c-da9b-4b52-9433-0581b013a5aa",
    likes: 20,
    replies: 30,
    authorName: "Coach Bronson",
    authorAvatarSrc:
      "https://www.figma.com/api/mcp/asset/4f30dfbc-7e64-4981-aa37-c223fe38a794",
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
    <div className="w-[416px] overflow-hidden rounded-[24px] bg-white/30 border border-white">
      <div className="p-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-[20px] font-semibold leading-[1.5] text-[#141b34]">
            Community Feed
          </h2>
          <button
            type="button"
            aria-label="Next"
            className="inline-flex items-center justify-center rounded-full border border-white bg-white/60 p-2"
          >
            <img
              src={imgArrow}
              alt="arrow"
              className="w-[10px] h-[15px] rotate-90 scale-y-[-1]"
            />
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
                          src={imgPlayCircle}
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
                        <img src={imgHeart} alt="" className="w-4 h-4" />
                        <span className="text-[10px] font-medium text-[#141b34]">
                          {item.likes} Likes
                        </span>
                      </div>
                      <div className="flex items-center gap-[6px]">
                        <img src={imgMessage} alt="" className="w-4 h-4" />
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
