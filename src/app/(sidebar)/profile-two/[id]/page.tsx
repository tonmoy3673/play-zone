"use client";

import About from "./_components/About";
import Card from "@/components/ui/Card";
import BackBtn from "@/components/shared/BackBtn";
import Achievements from "./_components/Achievements";
import RecentActivity from "./_components/RecentActivity";
import MainProfileCard from "./_components/MainProfileCard";
import CurrentPrograms from "./_components/CurrentPrograms";
import GalleryHighlights from "./_components/GalleryHighlights";

export default function Home() {
  return (
    <Card className="md:p-8 after:absolute after:size-48 after:bg-gradient-to-tr after:blur-3xl after:from-blue-400 after:to-transparent after:bottom-0 after:left-0 after:z-[-1]">
      <BackBtn
        title="Profile"
        href="/explore-athletes"
        className="mb-4 md:mb-4"
      />

      <MainProfileCard />

      <div className="grid lg:grid-cols-[1fr_392px] items-start gap-4 mt-4">
        <div className="space-y-4">
          <GalleryHighlights />
          <CurrentPrograms />
        </div>
        <div className="space-y-4">
          <About />
          <Achievements />
          <RecentActivity />
        </div>
      </div>
    </Card>
  );
}
