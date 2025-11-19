"use client";

import { useState } from "react";
import FilterTabs from "./_components/FilterTabs";
import ProgramCard from "./_components/ProgramCard";
import Button, { AnimatedButton } from "@/components/ui/Button";
import Link from "next/link";

export const programsData = [
  {
    id: "1",
    title: "QB Fundamentals Program",
    coach: "Coach Martinez",
    coachImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    athletes: 25,
    image:
      "https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=627",
    status: "LIVE" as const,
    progress: 75,
  },
  {
    id: "2",
    title: "QB Fundamentals Program",
    coach: "Coach Martinez",
    coachImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    athletes: 25,
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=300&fit=crop",
    status: "ONGOING" as const,
  },
  {
    id: "3",
    title: "QB Fundamentals Program",
    coach: "Coach Martinez",
    coachImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    athletes: 25,
    image:
      "https://images.unsplash.com/photo-1723965156429-547472562d98?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    status: "UPCOMING" as const,
    date: "Dec 15, 2:00 PM",
  },
  {
    id: "4",
    title: "QB Fundamentals Program",
    coach: "Coach Martinez",
    coachImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    athletes: 25,
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=300&fit=crop",
    status: "COMPLETE" as const,
    progress: 100,
    // date: "Dec 15, 2:00 PM",
  },
  {
    id: "5",
    title: "QB Fundamentals Program",
    coach: "Coach Martinez",
    coachImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    athletes: 25,
    image:
      "https://cdn.i-scmp.com/sites/default/files/styles/1200x800/public/d8/images/canvas/2025/02/07/ebfe7dbb-2ddc-482d-9b27-6301aa72e25c_a7881ce9.jpg?itok=9PNpa6ix&v=1738899017",
    status: "ONGOING" as const,
  },
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    { label: "All", count: 5 },
    { label: "Completed", count: 6 },
    { label: "Live", count: 8 },
    { label: "Upcoming", count: 6 },
    { label: "Ongoing", count: 6 },
  ];

  return (
    <div className="bg-[#ffffff4d]  p-8 rounded-3xl border border-white">
      <div className=" mx-auto">
        {/* Header */}
        <div className="mb-7">
          <h1 className="text-xl font-semibold text-dark mb-2">My Programs</h1>
          <p className="text-[#141b34b3] text-sm">
            Access your training programs and track your progress
          </p>
        </div>

        {/* Filter Tabs and CTA */}
        <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
          <FilterTabs
            filters={filters}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
          <Link href={"/program"}>
            <AnimatedButton
              style={{
                borderRadius: "100px",
                background:
                  "var(--Gradient, linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%))",
              }}
              className=" text-white font-normal px-5 text-sm py-2.5 rounded-full flex items-center gap-2 transition-all whitespace-nowrap"
            >
              Explore New Programs
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="12"
                viewBox="0 0 18 12"
                fill="none"
              >
                <path
                  opacity="0.4"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18 6C18 6.55228 17.5523 7 17 7L0.999983 7C0.447699 7 -1.7234e-05 6.55229 -1.72098e-05 6C-1.71857e-05 5.44772 0.447699 5 0.999983 5L17 5C17.5523 5 18 5.44772 18 6Z"
                  fill="white"
                />
                <path
                  d="M15.9721 6C15.8788 5.84523 15.6832 5.56711 15.4694 5.32506C15.0436 4.84323 14.4569 4.29284 13.8444 3.76105C13.2369 3.23357 12.6264 2.74365 12.166 2.38437C11.9364 2.20515 11.5401 1.90576 11.4069 1.80521C10.9623 1.47768 10.8673 0.851733 11.1948 0.40706C11.5223 -0.0376388 12.1483 -0.132641 12.593 0.194867L12.5967 0.19767C12.7411 0.306722 13.1597 0.62291 13.3965 0.80767C13.8736 1.18002 14.5131 1.69303 15.1556 2.25084C15.7931 2.80434 16.4564 3.4216 16.9681 4.00078C17.223 4.28923 17.4614 4.59179 17.6416 4.8906C17.8052 5.16195 18 5.55679 18 5.99996C18 6.44313 17.8052 6.83805 17.6416 7.1094C17.4614 7.40821 17.223 7.71077 16.9681 7.99922C16.4564 8.5784 15.7931 9.19566 15.1556 9.74916C14.5131 10.307 13.8736 10.82 13.3965 11.1923C13.1597 11.3771 12.7414 11.6931 12.597 11.8021L12.593 11.8051C12.1483 12.1326 11.5223 12.0376 11.1948 11.5929C10.8673 11.1483 10.9623 10.5223 11.4069 10.1948C11.5401 10.0942 11.9364 9.79485 12.166 9.61563C12.6264 9.25635 13.2369 8.76643 13.8444 8.23895C14.4569 7.70716 15.0436 7.15677 15.4694 6.67494C15.6832 6.43289 15.8788 6.15477 15.9721 6Z"
                  fill="white"
                />
              </svg>
            </AnimatedButton>
          </Link>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3   gap-7">
          {programsData.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}

          {/* Explore Programs CTA Card */}
          <div className="bg-white bg-[url('/frame_2147238666.svg')] bg-cover bg-center bg-no-repeat rounded-3xl border-2 max-w-md border-blue-300 p-8 flex flex-col items-center justify-center min-h-64  transition-shadow">
            <Button
              style={{
                borderRadius: "100px",
                background:
                  "var(--Gradient, linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%))",
              }}
              className=" text-white rounded-full px-7 py-3.5 mb-6 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="12"
                viewBox="0 0 18 12"
                fill="none"
              >
                <path
                  opacity="0.4"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18 6C18 6.55228 17.5523 7 17 7L0.999983 7C0.447699 7 -1.7234e-05 6.55229 -1.72098e-05 6C-1.71857e-05 5.44772 0.447699 5 0.999983 5L17 5C17.5523 5 18 5.44772 18 6Z"
                  fill="white"
                />
                <path
                  d="M15.9721 6C15.8788 5.84523 15.6832 5.56711 15.4694 5.32506C15.0436 4.84323 14.4569 4.29284 13.8444 3.76105C13.2369 3.23357 12.6264 2.74365 12.166 2.38437C11.9364 2.20515 11.5401 1.90576 11.4069 1.80521C10.9623 1.47768 10.8673 0.851733 11.1948 0.40706C11.5223 -0.0376388 12.1483 -0.132641 12.593 0.194867L12.5967 0.19767C12.7411 0.306722 13.1597 0.62291 13.3965 0.80767C13.8736 1.18002 14.5131 1.69303 15.1556 2.25084C15.7931 2.80434 16.4564 3.4216 16.9681 4.00078C17.223 4.28923 17.4614 4.59179 17.6416 4.8906C17.8052 5.16195 18 5.55679 18 5.99996C18 6.44313 17.8052 6.83805 17.6416 7.1094C17.4614 7.40821 17.223 7.71077 16.9681 7.99922C16.4564 8.5784 15.7931 9.19566 15.1556 9.74916C14.5131 10.307 13.8736 10.82 13.3965 11.1923C13.1597 11.3771 12.7414 11.6931 12.597 11.8021L12.593 11.8051C12.1483 12.1326 11.5223 12.0376 11.1948 11.5929C10.8673 11.1483 10.9623 10.5223 11.4069 10.1948C11.5401 10.0942 11.9364 9.79485 12.166 9.61563C12.6264 9.25635 13.2369 8.76643 13.8444 8.23895C14.4569 7.70716 15.0436 7.15677 15.4694 6.67494C15.6832 6.43289 15.8788 6.15477 15.9721 6Z"
                  fill="white"
                />
              </svg>
            </Button>
            <h3 className="text-base font-semibold text-dark mb-2">
              Explore Programs
            </h3>
            <p className="text-[#141b34b3] max-w-56 text-center text-xs font-medium">
              Discover new training programs to enhance your performance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
