"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import FilterTabs from "./_components/FilterTabs";
import { AnimatedButton } from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import CoachProgramCard from "./_components/CoachProgramCard";

export const programsData = [
  {
    id: "1",
    title: "QB Fundamentals Program",
    description: "Master the essential quarterback skills and techniques",
    athletes: 25,
    image:
      "https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=627",
    rating: 4.5,
    timeLine: 8,
  },
  {
    id: "2",
    title: "QB Fundamentals Program",
    description: "Develop explosive speed and agility for competitive edge",
    athletes: 25,
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=300&fit=crop",
    rating: 4.5,
    timeLine: 8,
  },
  {
    id: "3",
    title: "QB Fundamentals Program",
    description: "Develop explosive speed and agility for competitive edge",
    athletes: 25,
    image:
      "https://images.unsplash.com/photo-1723965156429-547472562d98?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    rating: 4.5,
    timeLine: 8,
  },
  {
    id: "4",
    title: "QB Fundamentals Program",
    description: "Master the essential quarterback skills and techniques",
    athletes: 25,
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=300&fit=crop",
    rating: 4.5,
    timeLine: 8,
  },
  {
    id: "5",
    title: "QB Fundamentals Program",
    description: "Master the essential quarterback skills and techniques",
    athletes: 25,
    image:
      "https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/canvas/2025/02/07/ebfe7dbb-2ddc-482d-9b27-6301aa72e25c_a7881ce9.jpg?itok=9PNpa6ix&v=1738899017",
    rating: 4.5,
    timeLine: 8,
  },
  {
    id: "6",
    title: "QB Fundamentals Program",
    description: "Develop explosive speed and agility for competitive",
    athletes: 25,
    image:
      "https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/canvas/2025/02/07/ebfe7dbb-2ddc-482d-9b27-6301aa72e25c_a7881ce9.jpg?itok=9PNpa6ix&v=1738899017",
    rating: 4.5,
    timeLine: 8,
  },
];

export default function Home() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState("Active");

  const filters = [
    { label: "Active", count: 6 },
    { label: "Archived", count: 6 },
  ];

  return (
    <div className="bg-[#ffffff4d]  p-8 rounded-3xl border border-white">
      <div className=" mx-auto">
        {/* Header */}
        <div className="mb-7">
          <h1 className="text-xl font-semibold text-dark mb-2">My Programs</h1>
          <p className="text-[#141b34b3] text-sm">
            Manage and monitor your training programs
          </p>
        </div>

        {/* Filter Tabs and CTA */}
        <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
          <FilterTabs
            filters={filters}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
          <AnimatedButton
            onClick={() => router.push("/overview/program")}
            style={{
              borderRadius: "100px",
              background:
                "var(--Gradient, linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%))",
            }}
            className=" text-white font-normal px-5 text-sm py-2.5 rounded-full flex items-center gap-2 transition-all whitespace-nowrap"
          >
            <Icon name="plus-icon" />
            Create Program
          </AnimatedButton>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {programsData.map((program) => (
            <CoachProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>
    </div>
  );
}
