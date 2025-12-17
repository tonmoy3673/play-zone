"use client";

import Icon from "@/utils/icon";
import { SectionHeader } from "@/components/shared/SectionHeader";
import ProgramCard, { ProgramProp } from "@/components/shared/ProgramCard";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";

const tradingPrograms: ProgramProp[] = [
  {
    title: "James Wilson Elite Soccer Club",
    coach: "Coach James Wilson",
    coachImage:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=200&q=80",
    banner:
      "https://images.unsplash.com/photo-1631801751858-9f4f5a2fbdb4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032",
    price: 100,
    rating: 4.0,
    students: "3.4K+",
    badge: "Featured",
  },
  {
    title: "Advanced Basketball Drills",
    coach: "Coach Michael Carter",
    coachImage:
      "https://images.unsplash.com/photo-1546539782-6fc531453083?auto=format&fit=crop&w=200&q=80",
    banner:
      "https://images.unsplash.com/photo-1707126458822-cb3f2458a3b9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=580",
    price: 120,
    rating: 4.5,
    students: "5.2K+",
    badge: "Featured",
  },
  {
    title: "Pro Tennis Training Camp",
    coach: "Coach Serena Ellis",
    coachImage:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80",
    banner:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
    price: 150,
    rating: 4.8,
    students: "6.1K+",
    badge: "Featured",
  },
  {
    title: "Pro Tennis Training Camp",
    coach: "Coach Serena Ellis",
    coachImage:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80",
    banner:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
    price: 150,
    rating: 4.8,
    students: "6.1K+",
    badge: "Featured",
  },
];

const TrendingProgram = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  return (
    <div>
      <SectionHeader
        title="Trending Programs This Week"
        href="/program"
        className="mb-5"
        linkText="View All"
      />

      <div className="relative">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onReachEnd={() => setIsEnd(true)}
          onReachBeginning={() => setIsBeginning(true)}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {tradingPrograms.map((program, index) => (
            <SwiperSlide key={index}>
              <ProgramCard program={program} />
            </SwiperSlide>
          ))}
        </Swiper>

        {!isBeginning && (
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 top-[50%] z-20 -translate-y-1/2 -translate-x-1/2
                     bg-white/60 hover:bg-white border border-white size-10 grid place-items-center rounded-full"
          >
            <Icon
              name="chevron_left"
              height={20}
              width={20}
              className="text-dark"
            />
          </button>
        )}

        {!isEnd && (
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 top-[50%] z-20 -translate-y-1/2 translate-x-1/2
                     bg-white/60 hover:bg-white border border-white size-10 grid place-items-center rounded-full"
          >
            <Icon
              name="chevron_right"
              height={20}
              width={20}
              className="text-dark"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default TrendingProgram;
