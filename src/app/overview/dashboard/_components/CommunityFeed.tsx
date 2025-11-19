"use client";

import React from "react";
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import Card from "@/components/ui/Card";
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
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=1170&auto=format&fit=crop",
    likes: 20,
    replies: 30,
    authorName: "Alex Mark",
    authorAvatarSrc:
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=1170&auto=format&fit=crop",
    body: "Top defensive line signees in the 2025 class!",
  },
  {
    id: "2",
    minutesAgo: "20 min ago",
    imageSrc:
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=1170&auto=format&fit=crop",
    likes: 20,
    replies: 30,
    authorName: "Coach Bronson",
    authorAvatarSrc:
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=1170&auto=format&fit=crop",
    body: "Mahalo ",
    linkText: "@oregonfootball",
    linkHref: "https://x.com/oregonfootball",
  },
  {
    id: "3",
    minutesAgo: "20 min ago",
    imageSrc:
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=1170&auto=format&fit=crop",
    likes: 20,
    replies: 30,
    authorName: "Alex Mark",
    authorAvatarSrc:
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=1170&auto=format&fit=crop",
    body: "Top defensive line signees in the 2025 class!",
  },
  {
    id: "4",
    minutesAgo: "20 min ago",
    imageSrc:
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=1170&auto=format&fit=crop",
    likes: 20,
    replies: 30,
    authorName: "Coach Bronson",
    authorAvatarSrc:
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=1170&auto=format&fit=crop",
    body: "Mahalo ",
    linkText: "@oregonfootball",
    linkHref: "https://x.com/oregonfootball",
  },
];

export default function CommunityFeed({
  items = defaultItems,
}: {
  items?: FeedItem[];
}) {
  return (
    <Card>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-dark">Community Feed</h2>
        <button
          type="button"
          aria-label="Next"
          className="inline-flex items-center justify-center rounded-full border border-white bg-white/60 size-10"
        >
          <Icon
            name="arrow_right"
            height={20}
            width={20}
            className="text-dark"
          />
        </button>
      </div>

      <div className="mt-4 grid">
        <Swiper
          modules={[Autoplay,FreeMode]}
          spaceBetween={16}
          slidesPerView="auto"
          freeMode={true}
          grabCursor={true}
           autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="!py-2 w-full"
        >
          {items.map((item) => (
            <SwiperSlide key={item.id} className="!w-[260px]">
              <Card className="h-[295px] md:rounded-[16px] bg-white/60 p-3">
                <div className="absolute inset-0 p-3 flex flex-col h-full">
                  <div className="relative h-[127px] w-full overflow-hidden rounded-[12px] bg-white">
                    <img
                      src={item.imageSrc}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    <div className="pointer-events-none absolute left-1/2 top-1/2 size-[30px] flex items-center justify-center bg-[#FFFFFF05] border border-white/10 backdrop-blur-xs -translate-x-1/2 -translate-y-1/2 rounded-full">
                      <Icon
                        name="play_circle"
                        height={20}
                        width={20}
                        className="text-white"
                      />
                    </div>

                    <div className="absolute left-2.5 top-2.5 text-[10px] px-2 py-1 inline-flex h-5 items-center justify-center rounded-[37.5px] bg-white/80 backdrop-blur-xs border border-white">
                      {item.minutesAgo}
                    </div>
                  </div>

                  {/* Likes & Replies */}
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-[6px]">
                      <Icon name="heart_emoji" height={20} width={20} />
                      <span className="text-[10px] font-medium text-dark">
                        {item.likes} Likes
                      </span>
                    </div>
                    <div className="flex items-center gap-[6px]">
                      <Icon
                        name="message_2"
                        height={20}
                        width={20}
                        className="text-dark"
                      />
                      <span className="text-[10px] font-medium text-dark">
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
                      <p className="text-[14px] font-medium text-dark">
                        {item.authorName}
                      </p>
                    </div>

                    <p className="text-[12px] text-dark">
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
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Card>
  );
}
