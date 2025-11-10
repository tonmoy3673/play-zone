import React from "react";
import Header from "./_components/Header";
import LeftProfile from "./_components/LeftProfile";
import StreakCard from "./_components/StreakCard";
import RecentActivity from "./_components/RecentActivity";
import ProgressTracking from "./_components/ProgressTracking";

const Page = () => {
  return (
    <div className="bg-[#E7F2F5] p-8 rounded-3xl backdrop-blur-3xl">
      <Header />
      <div className="mt-8 flex items-start gap-4">
        <LeftProfile />
        <div className="bg-[#ffffff4d] w-full p-5 rounded-4xl border border-white">
          <div className="flex justify-between  mb-4 gap-4">
            <div className="bg-[#ffffff99] max-w-md rounded-3xl p-4">
              <p className="text-lg font-medium text-dark mb-4">
                Performance Stats
              </p>
              <div className="flex items-start gap-4">
                <div className="bg-white rounded-2xl p-5">
                  <p className="text-2xl font-semibold text-dark">12</p>
                  <p className="text-[#141b34b3] font-medium text-xs mt-2">
                    LIVE Sessions Aattended
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-5">
                  <p
                    style={{
                      background:
                        "var(--Gradient, linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%))",
                      backgroundClip: "text",
                    }}
                    className="text-2xl font-bold text-transparent bg-clip-text"
                  >
                    97%
                  </p>
                  <p className="text-[#141b34b3] font-medium text-xs mt-2">
                    Average Assignment Grade
                  </p>
                </div>
              </div>
            </div>
            <StreakCard />
          </div>
          <RecentActivity />
          <ProgressTracking />
        </div>
      </div>
    </div>
  );
};

export default Page;
