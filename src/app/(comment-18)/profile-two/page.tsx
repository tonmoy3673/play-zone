"use client";

import About from "./_components/About";
import BackBtn from "@/components/shared/BackBtn";
import RecentActivity from "./_components/RecentActivity";
import Achievements from "./_components/Achievements";
import MainProfileCard from "./_components/MainProfileCard";
import CurrentPrograms from "./_components/CurrentPrograms";
import GalleryHighlights from "./_components/GalleryHighlights";

// Demo data

export default function Home() {
  return (
    <div className="bg-[#ffffff4d] backdrop-blur-3xl mx-auto rounded-3xl border border-white p-8">
      {/* Header with back button */}
      <BackBtn title="Profile" href="/" className="mb-4 md:mb-4" />

      {/* Main Profile Card */}
      <MainProfileCard />

      <div className="grid md:grid-cols-[1fr_392px] items-start gap-4 mt-4">
        <div>
          <GalleryHighlights />
          <CurrentPrograms />
        </div>
        <div>
          <About />
          <Achievements />
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}
