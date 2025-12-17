"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Task = () => {
  const router = useRouter();
  return (
    <>
      <div className="bg-[#FFFFFF99] p-6 rounded-2xl border border-white h-auto mb-5">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-medium text-lg text-[#141B34]">
            {/* current date like December 6, year */}
            {/* current date like December 6, 2025 */}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </h2>
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-blue-600"></span>
            <span className="text-xs text-blue-600 font-medium">Today</span>
          </div>
        </div>

        {/* Live Sessions */}
        <div className="mb-8">
          <h3 className="text-gray-600 text-sm font-medium mb-4">
            Live Sessions
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-[#141B34] text-sm mb-1">
                  Team Strategy Session
                </h4>
                <p className="text-[#141b34b3] text-xs">2:00 PM - 3:30 PM</p>
              </div>
              <button className="bg-[#FF0033] text-white px-4 py-2 rounded-lg text-sm font-medium">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Training Sessions */}
        <div className="mb-8">
          <h3 className="text-gray-600 text-sm font-medium mb-4">
            Training Sessions
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-[#141B34] text-sm mb-1">
                  Weight Training
                </h4>
                <p className="text-[#141b34b3] text-xs">Main Gym @ 5:00 PM</p>
              </div>
              <button className="bg-primary-gradient text-white px-4 py-2 rounded-lg text-sm font-medium">
                Check in
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-[#141B34] text-sm mb-1">
                  Basketball Training
                </h4>
                <p className="text-[#141b34b3] text-xs">
                  Indoor Court @ 4:30 PM
                </p>
              </div>
              <button className="bg-primary-gradient text-white px-4 py-2 rounded-lg text-sm font-medium">
                Check in
              </button>
            </div>
          </div>
        </div>

        {/* Upcoming Deadlines */}
        <div>
          <h3 className="text-gray-600 text-sm font-medium mb-4">
            Upcoming Deadlines
          </h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-medium text-[#141B34] text-sm mb-1">
                Game Film Analysis
              </h4>
              <p className="text-[#141b34b3] text-xs mb-2">
                Due: Jan 15, 11:59 PM
              </p>
              <div className="w-full bg-[#C4D4FD] rounded-full h-2 mb-1">
                <div
                  className="h-2 rounded-full bg-[linear-gradient(90deg,#7180DF_0%,#2C49FF_100%)]"
                  style={{ width: "60%" }}
                ></div>
              </div>
              <p className="text-gray-600 text-sm">60% Complete</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2nd part - Upcoming Tasks */}
      <div className="bg-[#FFFFFF99] p-6 rounded-2xl border border-white h-auto">
        <h2 className="text-gray-600 text-lg font-medium mb-6">
          Upcoming Tasks
        </h2>

        <div className="space-y-6">
          {/* Atlas Venture Task */}
          <div className="flex items-start gap-4">
            <Image src="/event.svg" alt="event" width={40} height={40} />

            <div className="flex-1">
              <h3 className="font-medium text-[#141B34] text-sm mb-1">
                Atlas Venture - Exclusive
              </h3>
              <p className="text-[#141b34b3] text-xs mb-1">
                Hawaii Trench Warriors
              </p>
              <p className="text-sm">
                <span className="text-[#FF1216] text-xs font-medium">Due</span>{" "}
                <span className="text-[#141B34]">Fri, Aug 3 at 3:30 PM</span>
              </p>
              <button
                onClick={() => router.push("/athlete/quiz")}
                className="bg-primary-gradient text-white px-6 py-2 rounded-full text-sm font-normal mt-3"
              >
                Start Now
              </button>
            </div>
          </div>

          {/* Exchange Benefits Task */}
          <div className="flex items-start gap-4">
            <Image src="/event2.svg" alt="event" width={40} height={40} />
            <div className="flex-1">
              <h3 className="font-medium text-[#141B34] text-sm mb-1">
                Exchange Benefits
              </h3>
              <p className="text-[#141b34b3] text-xs mb-1">
                Hawaii Trench Warriors
              </p>
              <p className="text-sm">
                <span className="text-[#FF1216] text-xs font-medium">Due</span>{" "}
                <span className="text-[#141B34]">Fri, Aug 3 at 3:30 PM</span>
              </p>
              <button
                onClick={() => router.push("/athlete/quiz")}
                className="bg-primary-gradient text-white px-6 py-2 rounded-full text-sm font-normal mt-3"
              >
                Start Now
              </button>
            </div>
          </div>

          {/* Toyota Load In Task */}
          <div className="flex items-start gap-4">
            <Image src="/event.svg" alt="event" width={40} height={40} />

            <div className="flex-1">
              <h3 className="font-medium text-[#141B34] text-sm mb-1">
                Toyota Load In - Non-Exclusive
              </h3>
              <p className="text-[#141b34b3] text-xs mb-1">
                Hawaii Trench Warriors
              </p>
              <p className="text-xs">
                <span className="text-[#FF1216] text-xs font-medium">Due</span>{" "}
                <span className="text-[#141B34]">Fri, Aug 3 at 3:30 PM</span>
              </p>
              <button
                onClick={() => router.push("/athlete/quiz")}
                className="bg-primary-gradient text-white px-6 py-2 rounded-full text-sm font-normal mt-3"
              >
                Start Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
