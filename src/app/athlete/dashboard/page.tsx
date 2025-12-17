import React from "react";
import { StatsCards } from "../_components/StatsCards";
import ProgramCard from "@/components/Athlete/ProgramCard";
import WeeklyTaskList from "../_components/WeeklyTaskOverview";
import CommunityFeed from "../_components/CommunityFeed";
import { AnimatedButton } from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

const Page = () => {
  return (
    <div>
      <StatsCards />
      <ProgramCard />
      <div className="flex justify-between  pb-7 gap-4">
        <WeeklyTaskList />
        {/* <CommunityFeed /> */}
        <div className="p-7 items-center bg-[url('/coming_community.png')] bg-center bg-cover bg-no-repeat flex justify-end max-w-[600px] flex-col bg-[#FFFFFF99] rounded-2xl border border-white h-auto w-full">
          <h1 className="text-4xl text-[#276AEE] font-semibold">Coming Soon</h1>
          <p className="text-center text-sm text-[#141b34b3] my-4">
            We're working hard to bring you this <br /> feature. Stay tuned for
            updates!
          </p>
          <AnimatedButton className="flex items-center gap-1.5 py-3 px-5 rounded-full text-sm text-white bg-primary-gradient">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="19"
              viewBox="0 0 17 19"
              fill="none"
            >
              <path
                d="M2.54864 8.65918C2.48741 9.82251 2.5578 11.0608 1.51844 11.8403C1.0347 12.2031 0.75 12.7725 0.75 13.3772C0.75 14.209 1.4015 14.9167 2.25 14.9167H14.25C15.0985 14.9167 15.75 14.209 15.75 13.3772C15.75 12.7725 15.4653 12.2031 14.9816 11.8403C13.9422 11.0608 14.0126 9.82251 13.9514 8.65918C13.7918 5.62686 11.2865 3.25 8.25 3.25C5.21348 3.25 2.70824 5.62685 2.54864 8.65918Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7 1.6875C7 2.37786 7.55964 3.25 8.25 3.25C8.94036 3.25 9.5 2.37786 9.5 1.6875C9.5 0.997144 8.94036 0.75 8.25 0.75C7.55964 0.75 7 0.997144 7 1.6875Z"
                stroke="white"
                stroke-width="1.5"
              />
              <path
                d="M10.75 14.918C10.75 16.2987 9.63071 17.418 8.25 17.418C6.86929 17.418 5.75 16.2987 5.75 14.918"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Notify Me
          </AnimatedButton>
        </div>
      </div>
    </div>
  );
};

export default Page;
