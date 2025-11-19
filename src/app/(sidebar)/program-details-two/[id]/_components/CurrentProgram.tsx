"use client";

import Card from "@/components/ui/Card";
import { SectionHeader } from "@/components/shared/SectionHeader";
import ProgramCard, { ProgramProp } from "@/components/shared/ProgramCard";

import "swiper/css";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";

export const currentPrograms: ProgramProp[] = [
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
    badge: "New",
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
    badge: "New",
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
    badge: "New",
  },
];

const CurrentProgram = () => {
  return (
    <Card className="bg-white/60 grid">
      <SectionHeader
        title="Current Programs"
        href="/program"
        linkText="View All"
      />

      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        className="max-w-full"
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { freeMode: true, slidesPerView: "auto" },
        }}
      >
        {currentPrograms.map((program, idx) => (
          <SwiperSlide key={idx} className="lg:!w-[293px]">
            <ProgramCard program={program} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Card>
  );
};

export default CurrentProgram;
