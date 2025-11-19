"use client";

import Image from "next/image";
import Icon from "@/utils/icon";
import Card from "@/components/ui/Card";
import { SectionHeader } from "@/components/shared/SectionHeader";

import "swiper/css";
import "swiper/css/free-mode";
import { Swiper, SwiperSlide } from "swiper/react";

const programsData = [
  {
    id: "1",
    title: "QB Fundamentals Program",
    coach: "Coach Martinez",
    coachImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    image:
      "https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=627",
    progress: 75,
  },
  {
    id: "2",
    title: "QB Fundamentals Program",
    coach: "Coach Martinez",
    coachImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=300&fit=crop",
    progress: 75,
  },
  {
    id: "3",
    title: "QB Fundamentals Program",
    coach: "Coach Martinez",
    coachImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    image:
      "https://images.unsplash.com/photo-1723965156429-547472562d98?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    progress: 75,
  },
  {
    id: "4",
    title: "QB Fundamentals Program",
    coach: "Coach Martinez",
    coachImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    image:
      "https://images.unsplash.com/photo-1723965156429-547472562d98?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    progress: 75,
  },
];

export default function CurrentPrograms() {
  return (
    <Card className="bg-white/60 max-w-full grid">
      <SectionHeader title="Current Programs" href="/" linkText="View All" />

      <Swiper
        spaceBetween={16}
        slidesPerView={1}
        className="max-w-full"
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { freeMode: true, slidesPerView: "auto" },
        }}
      >
        {programsData.map((program, idx) => (
          <SwiperSlide key={idx} className="lg:!w-[290px]">
            <ProgramCard program={program} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Card>
  );
}

interface Program {
  id: string;
  title: string;
  coach: string;
  coachImage: string;
  image: string;
  progress: number;
}

interface ProgramCardProps {
  program: Program;
}

function ProgramCard({ program }: ProgramCardProps) {
  return (
    <div className="relative bg-white rounded-2xl overflow-hidden h-[290px] z-[1] after:absolute after:inset-0 after:bg-[linear-gradient(179deg,rgba(255,255,255,0.00)_40.79%,rgba(255,255,255,0.74)_56.87%,#FFF_70.53%,#FFF_73.97%,#FFF_99.49%)] after:z-[-1]">
      <Image
        src={program.image}
        alt="Banner"
        fill
        className="size-full object-cover absolute inset-0 z-[-2]"
      />

      <div className="right-4 top-6 flex items-center justify-center size-10 rounded-full bg-white/20 absolute z-[1] backdrop-blur-xs after:absolute after:inset-0 after:border-l after:border-r after:border-white/50 after:rotate-45 after:rounded-full after:z-[-1]">
        <Icon name="dot_white" height={20} width={20} />
      </div>

      <div className="flex flex-col justify-end absolute inset-0 p-4">
        <h3 className="text-lg font-medium text-dark mb-1">{program.title}</h3>
        <div className="flex items-center gap-1.5">
          <Image
            width={24}
            height={24}
            src={program.coachImage || "/placeholder.svg"}
            alt={program.coach}
            className="size-6 rounded-full object-cover"
          />
          <span className="text-xs font-medium text-dark">{program.coach}</span>
        </div>

        <hr className="border-[#F5F9FF] my-3" />

        <div className="space-y-2">
          <div className="w-full bg-[#C4D4FD] rounded-full h-2.5">
            <div
              className="bg-[linear-gradient(90deg,#7180DF_0%,#2C49FF_100%)] h-full rounded-full transition-all"
              style={{
                width: `${program.progress}%`,
              }}
            />
          </div>

          <div className="flex items-center gap-1">
            <span className="block size-3 rounded bg-primary-gradient border-t border-[#68B0EA]"></span>
            <span className="text-[10px] font-medium text-dark">
              {program.progress}% Complete
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
