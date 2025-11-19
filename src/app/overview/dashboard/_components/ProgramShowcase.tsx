"use client";
import { AnimatedButton } from "@/components/ui/Button";
import React from "react";
import ModalHeader from "./ModalHeader";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

type ProgramCard = {
  id: string;
  title: string;
  coachName: string;
  price: string;
  image: string;
  participants: string;
  duration: string;
  rating: number;
  featured?: boolean;
};

const defaultPrograms: ProgramCard[] = [
  {
    id: "p1",
    title: "James Wilson Elite Soccer Club",
    coachName: "Coach James Wilson",
    price: "$100",
    image: "/overview/imgCenter.png",
    participants: "3.4K+",
    duration: "6 months",
    rating: 4.0,
    featured: true,
  },
  {
    id: "p2",
    title: "MMA Long Beach",
    coachName: "Coach Rivera",
    price: "$59",
    image: "/overview/imgRight.png",
    participants: "2.1K+",
    duration: "8 weeks",
    rating: 4.7,
  },
  {
    id: "p3",
    title: "Youth Academy – Finishing School",
    coachName: "Coach Martins",
    price: "$79",
    image: "/overview/imageLeft.png",
    participants: "1.2K+",
    duration: "10 weeks",
    rating: 4.5,
  },
];

export default function ProgramShowcase({
  isOpen,
  onClose,
  onNext,
  programs = defaultPrograms,
}: ModalProps & { programs?: ProgramCard[] }) {
  if (!isOpen) return null;

  const [center, left, right] = [
    programs[0],
    programs[1] ?? programs[0],
    programs[2] ?? programs[0],
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-white/30 bg-[url('/overview/modalBG.png')] w-[90vw] max-w-[800px] max-h-[85vh] backdrop-blur-lg rounded-[24px] border border-white/30 shadow-2xl overflow-hidden">
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 23.3%, rgba(255, 255, 255, 0.74) 41.73%, #FFF 57.98%, #FFF 66.3%, #FFF 99.37%)",
          }}
          className="h-full flex flex-col"
        >
          <ModalHeader title="Welcome to Playzone" onClose={onClose} />

          <div className="p-6 flex-1 overflow-y-auto">
            <div className="flex flex-col items-center">
              {/* Decorative glows from Figma */}
              <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-[60px] h-[540px] w-[663px] -translate-x-1/2 rotate-[60deg] -scale-y-100 blur-md opacity-30">
                  <img
                    src={"/public/overview/imgImage341.png"}
                    alt=""
                    className="size-full object-cover"
                  />
                </div>
                <div className="absolute left-1/2 top-[120px] h-[650px] w-[650px] -translate-x-1/2 rotate-[210deg] -scale-y-100 blur-[60px] opacity-80">
                  <img
                    src={"/overview/showBG.png"}
                    alt=""
                    className="size-full"
                  />
                </div>
              </div>

              {/* Centered carousel-style cards */}
              <div className="relative mx-auto mt-4 h-[258px] w-full max-w-[372px] md:max-w-[740px]">
                {/* Left preview card */}
                <div className="pointer-events-none absolute left-1/2 top-0 h-[209.6px] w-[303px] -translate-x-[calc(50%+160px)] rounded-[6.279px] border-[4.874px] border-white/60 opacity-60 blur-[0.5px]">
                  <CardImage image={left.image} />
                  <CardOverlay program={left} compact />
                </div>
                {/* Right preview card */}
                <div className="pointer-events-none absolute left-1/2 top-0 h-[209.6px] w-[303px] -translate-x-[calc(50%-160px)] rounded-[6.279px] border-[4.874px] border-white/60 opacity-60 blur-[0.5px]">
                  <CardImage image={right.image} />
                  <CardOverlay program={right} compact />
                </div>
                {/* Center featured card */}
                <div
                  className="absolute left-1/2 top-[-17] -translate-x-1/2 backdrop-blur"
                  style={{
                    height: "258px",
                    width: "372px",
                    borderRadius: "7.729px",
                    border: "6px solid rgba(255, 255, 255, 0.44)",
                    background: "#FFF",
                    boxShadow: "0 4px 37px 10px rgba(26, 103, 161, 0.25)",
                  }}
                >
                  <CardImage image={center.image} />
                  <CardOverlay program={center} />
                </div>
              </div>

              {/* Heading + copy */}
              <div className="mt-6 text-center">
                <h2 className="text-[30px] font-medium leading-[1.5] text-dark">
                  Start Building Your Coaching Empire
                </h2>
                <p className="mx-auto mt-2 max-w-[720px] text-[14px] leading-[1.3] text-dark/70">
                  Every great coach needs a platform. PlayerZone provides you
                  with all the tools to manage your athletes, create powerful
                  programs, and monetize your expertise—all in one place. Your
                  journey to scale starts now.
                </p>
              </div>

              {/* Progress Dots */}
              <div className="flex items-center gap-2 mt-4 mb-4">
                <span className="h-2 w-2 rounded-full bg-gray-300"></span>
                <span className="h-2 w-8 rounded-full bg-blue-500"></span>
                <span className="h-2 w-2 rounded-full bg-gray-300"></span>
                <span className="h-2 w-2 rounded-full bg-gray-300"></span>
                <span className="h-2 w-2 rounded-full bg-gray-300"></span>
              </div>

              {/* Continue CTA */}
              <AnimatedButton
                onClick={onNext}
                style={{
                  borderRadius: "40px",
                  background:
                    "linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%)",
                }}
                className="flex items-center justify-center gap-1 text-white font-normal text-[10px] px-4 py-2.5 rounded-full hover:bg-blue-700 cursor-pointer transition-all mb-6"
              >
                Continue
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardImage({ image }: { image: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[inherit]">
      <img src={image} alt="" className="size-full w-full object-cover" />
    </div>
  );
}

function CardOverlay({
  program,
  compact = false,
}: {
  program: ProgramCard;
  compact?: boolean;
}) {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 23.3%, rgba(255, 255, 255, 0.15) 45%, rgba(255, 255, 255, 0.60) 65%, #FFF 85%)",
      }}
      className="absolute  inset-0 flex flex-col justify-between pt-3 px-5"
    >
      {/* Top row: Featured + more */}
      <div className="flex items-start justify-between">
        {program.featured ? (
          <span className="rounded-[6px] bg-[#ff7a00] px-2 py-1 text-[10px] font-semibold text-white">
            Featured
          </span>
        ) : (
          <span />
        )}
        <button
          type="button"
          className="inline-flex size-[26px] items-center justify-center rounded-full bg-white/60 hover:bg-white/80 cursor-pointer transition-colors"
        >
          <span className="block size-[3px] rounded-full bg-dark" />
        </button>
      </div>

      {/* Content block */}
      <div className="space-y-1 pt-6">
        <div className="space-y-1">
          <p
            className={[
              "text-dark font-semibold leading-[1.5] whitespace-pre-wrap",
              compact ? "text-[13px]" : "text-[11.6px]",
            ].join(" ")}
          >
            {program.title}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <span className="inline-block size-4 rounded-full bg-white/60" />
              <p className="text-[12px] font-medium leading-[1.4] text-dark">
                {program.coachName}
              </p>
            </div>
            <p className="text-[12px] font-semibold text-dark">
              {program.price}
            </p>
          </div>
        </div>

        <div className="h-px w-full bg-dark/10" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="inline-block size-4 rounded-full bg-[#1556d8]/10" />
            <p className="text-[12px] font-semibold leading-[1.4] text-dark">
              {program.participants}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <span className="inline-block size-4 rounded-full bg-[#1556d8]/10" />
            <p className="text-[12px] font-medium leading-[1.4] text-dark">
              {program.duration}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => {
                const filled = i < Math.round(program.rating);
                return (
                  <span
                    key={`${program.id}-star-${i}`}
                    className={[
                      "mr-0.5 inline-block size-3 rounded-[2px]",
                      filled ? "bg-[#ffb545]" : "bg-[#e5e7eb]",
                    ].join(" ")}
                  />
                );
              })}
            </div>
            <p className="text-[12px] font-medium leading-[1.3] text-dark">
              {program.rating.toFixed(1)}
            </p>
          </div>
        </div>

        {/* Subtle progress rail like in Figma */}
        <div className="h-[14px] w-full rounded-full bg-[#e6ecff]">
          <div className="h-full w-1/2 rounded-full bg-[#bcd0ff]" />
        </div>

        <button
          type="button"
          className="inline-flex h-[26px] w-full items-center justify-center rounded-[61px] border border-[#1556d8]/30 bg-[#5c8ff7]/60 px-3 text-[12px] font-medium text-white hover:bg-[#5c8ff7]/50 cursor-pointer transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
