"use client";
import React, { useMemo, useState } from "react";
import { VideoCard } from "./VideoCard";
import { UpcomingLives } from "./UpcomingLive";
import Icon from "@/utils/icon";

const chunk = <T,>(arr: T[], size: number): T[][] => {
  const res: T[][] = [];
  for (let i = 0; i < arr.length; i += size) res.push(arr.slice(i, i + size));
  return res;
};

const ProgramCard = () => {
  // demo dataset — replace with real data when available
  const videos = useMemo(
    () =>
      Array.from({ length: 8 }).map((_, i) => ({
        id: i,
        title: `Speed Training Basics ${i + 1}`,
        thumbnail: "./program/program1.svg",
        progress: 45,
        dueDate: "Due in 3 days",
        progressColor: "bg-blue-500",
      })),
    []
  );

  const perPage = 4;
  const pages = useMemo(() => chunk(videos, perPage), [videos]);
  const [pageIndex, setPageIndex] = useState(0);

  const canPrev = pageIndex > 0;
  const canNext = pageIndex < pages.length - 1;

  return (
    <div className=" flex justify-between  mb-7 gap-4">
      <div className="bg-[#ffffff4d] p-4 flex-1 border border-white rounded-2xl  backdrop-blur-3xl  overflow-hidden">
        <div className="flex justify-between items-center">
          <h2 className="font-inter text-xl font-semibold">
            Continue Where You Left off
          </h2>

          <div className="flex items-center gap-2">
            {/* left arrow */}
            <button
              aria-label="previous"
              onClick={() => setPageIndex((p) => Math.max(0, p - 1))}
              className={`bg-white rounded-full p-2 ${
                !canPrev ? "opacity-40 pointer-events-none" : ""
              }`}
            >
              <Icon
                name="right_arrow"
                width={24}
                height={24}
                className="transform rotate-180 text-dark"
              />
            </button>

            {/* right arrow */}
            <button
              aria-label="next"
              onClick={() =>
                setPageIndex((p) => Math.min(p + 1, pages.length - 1))
              }
              className={`bg-white rounded-full p-2 ${
                !canNext ? "opacity-40 pointer-events-none" : ""
              }`}
            >
              <Icon
                name="right_arrow"
                className="text-dark"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>

        <div className="mt-4">
          {/* slider container */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${pageIndex * 100}%)` }}
            >
              {pages.map((page, pIndex) => (
                <div key={pIndex} className="min-w-full">
                  <div className="flex items-center gap-4">
                    {page.map((v) => (
                      <VideoCard
                        key={v.id}
                        title={v.title}
                        thumbnail={v.thumbnail}
                        progress={v.progress}
                        dueDate={v.dueDate}
                        progressColor={v.progressColor}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <UpcomingLives />
    </div>
  );
};

export default ProgramCard;
