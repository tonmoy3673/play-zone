"use client";

import Icon from "@/utils/icon";
import { useState } from "react";
import Card from "@/components/ui/Card";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { cn } from "@/lib/utils";

type CurriculumProp = {
  week: number;
  title: string;
  content: string;
  list: {
    type: "VIDEO" | "PDF";
    title: string;
    duration?: string;
  }[];
  lessons: number;
  minutes: number;
};

const curriculum: CurriculumProp[] = [
  {
    week: 1,
    title: "Foundations of Finishing",
    content:
      "Overview, expectations, and curriculum breakdown with orientation details.",
    list: [
      {
        type: "VIDEO",
        title: "Introduction to Clinical Finishing",
        duration: "15:32",
      },
      {
        type: "VIDEO",
        title: "Basic Shooting Technique",
        duration: "15:32",
      },
      {
        type: "PDF",
        title: "Week 1 Drills Worksheet",
      },
    ],
    lessons: 3,
    minutes: 103,
  },
  {
    week: 2,
    title: "Power and Placement",
    content:
      "Overview, expectations, and curriculum breakdown with orientation details.",
    list: [
      {
        type: "VIDEO",
        title: "Introduction to Clinical Finishing",
        duration: "15:32",
      },
      {
        type: "VIDEO",
        title: "Basic Shooting Technique",
        duration: "15:32",
      },
      {
        type: "PDF",
        title: "Week 1 Drills Worksheet",
      },
    ],
    lessons: 3,
    minutes: 103,
  },
  {
    week: 3,
    title: "One-on-One Finishing",
    content:
      "Overview, expectations, and curriculum breakdown with orientation details.",
    list: [
      {
        type: "VIDEO",
        title: "Introduction to Clinical Finishing",
        duration: "15:32",
      },
      {
        type: "VIDEO",
        title: "Basic Shooting Technique",
        duration: "15:32",
      },
      {
        type: "PDF",
        title: "Week 1 Drills Worksheet",
      },
    ],
    lessons: 3,
    minutes: 103,
  },
  {
    week: 4,
    title: "Volleying and Half-Volleying",
    content:
      "Overview, expectations, and curriculum breakdown with orientation details.",
    list: [
      {
        type: "VIDEO",
        title: "Introduction to Clinical Finishing",
        duration: "15:32",
      },
      {
        type: "VIDEO",
        title: "Basic Shooting Technique",
        duration: "15:32",
      },
      {
        type: "PDF",
        title: "Week 1 Drills Worksheet",
      },
    ],
    lessons: 3,
    minutes: 103,
  },
  {
    week: 5,
    title: "Foundations of Finishing",
    content:
      "Overview, expectations, and curriculum breakdown with orientation details.",
    list: [
      {
        type: "VIDEO",
        title: "Introduction to Clinical Finishing",
        duration: "15:32",
      },
      {
        type: "VIDEO",
        title: "Basic Shooting Technique",
        duration: "15:32",
      },
      {
        type: "PDF",
        title: "Week 1 Drills Worksheet",
      },
    ],
    lessons: 3,
    minutes: 103,
  },
  {
    week: 6,
    title: "Power and Placement",
    content:
      "Overview, expectations, and curriculum breakdown with orientation details.",
    list: [
      {
        type: "VIDEO",
        title: "Introduction to Clinical Finishing",
        duration: "15:32",
      },
      {
        type: "VIDEO",
        title: "Basic Shooting Technique",
        duration: "15:32",
      },
      {
        type: "PDF",
        title: "Week 1 Drills Worksheet",
      },
    ],
    lessons: 3,
    minutes: 103,
  },
  {
    week: 7,
    title: "One-on-One Finishing",
    content:
      "Overview, expectations, and curriculum breakdown with orientation details.",
    list: [
      {
        type: "VIDEO",
        title: "Introduction to Clinical Finishing",
        duration: "15:32",
      },
      {
        type: "VIDEO",
        title: "Basic Shooting Technique",
        duration: "15:32",
      },
      {
        type: "PDF",
        title: "Week 1 Drills Worksheet",
      },
    ],
    lessons: 3,
    minutes: 103,
  },
  {
    week: 8,
    title: "Volleying and Half-Volleying",
    content:
      "Overview, expectations, and curriculum breakdown with orientation details.",
    list: [
      {
        type: "VIDEO",
        title: "Introduction to Clinical Finishing",
        duration: "15:32",
      },
      {
        type: "VIDEO",
        title: "Basic Shooting Technique",
        duration: "15:32",
      },
      {
        type: "PDF",
        title: "Week 1 Drills Worksheet",
      },
    ],
    lessons: 3,
    minutes: 103,
  },
];

const ProgramCurriculum = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const mid = Math.ceil(curriculum.length / 2);
  const leftColumn = curriculum.slice(0, mid);
  const rightColumn = curriculum.slice(mid);

  return (
    <Card>
      <SectionHeader title="Program Curriculum" />

      <div className="grid md:grid-cols-2 gap-x-3 gap-y-2.5 items-start">
        <div className="space-y-2.5">
          {leftColumn.map((item, index) => (
            <CurriculumItem
              key={index}
              item={item}
              index={index}
              activeIndex={activeIndex}
              toggle={toggle}
            />
          ))}
        </div>

        <div className="space-y-2.5">
          {rightColumn.map((item, index) => (
            <CurriculumItem
              key={mid + index}
              item={item}
              index={mid + index}
              activeIndex={activeIndex}
              toggle={toggle}
            />
          ))}
        </div>
      </div>
    </Card>
  );
};

const CurriculumItem = ({
  item,
  index,
  activeIndex,
  toggle,
}: {
  item: CurriculumProp;
  index: number;
  activeIndex: number | null;
  toggle: (index: number) => void;
}) => {
  return (
    <div
      className={cn(
        "bg-white/60 border border-white rounded-xl p-2 overflow-hidden transition-all",
        activeIndex === index && "bg-white"
      )}
    >
      <button
        onClick={() => toggle(index)}
        className={cn(
          "w-full flex items-center justify-between pr-3",
          activeIndex === index && "pb-4 border-b border-[#F5F9FD]"
        )}
      >
        <div className="flex-1 flex items-center gap-3">
          <div className="shrink-0 h-12 px-2.5 rounded-xl border border-[#457FF333] text-[10px] uppercase font-medium bg-[linear-gradient(180deg,rgba(69,127,243,0.08)_0%,rgba(69,127,243,0.15)_100%)] flex flex-col items-center justify-center">
            <span className="primary-gradient-text">WEEK</span>
            <span className="primary-gradient-text ">{item.week}</span>
          </div>
          <span className="text-sm font-medium text-dark">{item.title}</span>
        </div>

        <Icon
          name="chevron_down"
          height={24}
          width={24}
          className={`text-[#595F70] transition-transform duration-300 ${
            activeIndex === index ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          activeIndex === index ? "px-3 py-4" : "max-h-0 px-3"
        }`}
      >
        <div className="space-y-4">
          {item.list?.map(({ type, title, duration }, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between flex-wrap gap-2"
            >
              <div className="flex items-center gap-2.5">
                <Icon
                  name={type === "VIDEO" ? "play_outline" : "pdf"}
                  className="text-[#595F70]"
                  height={20}
                  width={20}
                />
                <p className="text-xs text-dark">{title}</p>
              </div>
              <span className="text-xs text-dark font-medium">
                {type === "VIDEO" && duration
                  ? duration
                  : type === "PDF" && "PDF"}
              </span>
            </div>
          ))}
        </div>

        <hr className="border-[#F5F9FD] my-3" />

        <div className="flex items-center justify-between text-xs font-medium text-dark">
          <span>{item.lessons} Lessons</span>
          <span>{item.minutes} min</span>
        </div>
      </div>
    </div>
  );
};

export default ProgramCurriculum;
