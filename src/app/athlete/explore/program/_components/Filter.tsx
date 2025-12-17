"use client";

import { useState } from "react";
import Select from "@/components/ui/Select";
import Switch from "@/components/ui/Switch";

export const filters = [
  {
    label: "Sports",
    options: [
      { label: "18-24", value: "18_24" },
      { label: "25-34", value: "25_34" },
      { label: "35-44", value: "35_44" },
      { label: "45+", value: "45_plus" },
    ],
  },
  {
    label: "Position",
    options: [
      { label: "Junior", value: "junior" },
      { label: "Mid", value: "mid" },
      { label: "Senior", value: "senior" },
      { label: "Lead", value: "lead" },
    ],
  },
  {
    label: "Age Group",
    options: [
      { label: "Junior", value: "junior" },
      { label: "Mid", value: "mid" },
      { label: "Senior", value: "senior" },
      { label: "Lead", value: "lead" },
    ],
  },
  {
    label: "Region",
    options: [
      { label: "Junior", value: "junior" },
      { label: "Mid", value: "mid" },
      { label: "Senior", value: "senior" },
      { label: "Lead", value: "lead" },
    ],
  },
  {
    label: "Skill Level",
    options: [
      { label: "Junior", value: "junior" },
      { label: "Mid", value: "mid" },
      { label: "Senior", value: "senior" },
      { label: "Lead", value: "lead" },
    ],
  },
  {
    label: "Most Active",
    options: [
      { label: "Junior", value: "junior" },
      { label: "Mid", value: "mid" },
      { label: "Senior", value: "senior" },
      { label: "Lead", value: "lead" },
    ],
  },
];

const Filter = () => {
  const [verified, setVerified] = useState(true);

  return (
    <div className="flex flex-wrap gap-2 mb-5 justify-between">
      <div className="flex gap-2 flex-wrap">
        <button className="h-12 px-6 flex items-center bg-primary-gradient border border-[#1556D84D] text-white rounded-full">
          All
        </button>
        {filters.map((item, idx) => (
          <Select
            key={idx}
            placeholder={item.label}
            options={item.options}
            className="h-12 px-3 bg-[#457FF326] text-dark/70 border-[#1556D81A] rounded-full"
          />
        ))}
      </div>

      <div className="flex items-center gap-5">
        <span className="text-sm font-medium text-dark">Verified Only</span>
        <Switch
          value={verified}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={(e: any) => setVerified(e.target.checked)}
        />
      </div>
    </div>
  );
};

export default Filter;
