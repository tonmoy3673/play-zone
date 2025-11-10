import ProgramCard2 from "@/components/Athlete/ProgramCard2";
import VideoPlayer from "@/components/Athlete/Video";
import { AnimatedButton } from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import Icon from "@/utils/icon";
import { User } from "lucide-react";
import React from "react";

const Page = () => {
  const completionPercentage = 22;
  const daysRemaining = 3;
  return (
    <div className="min-h-screen overflow-y-auto">
      <Container className="p-6">
        <div className="flex gap-8 items-center">
          <div className="bg-white rounded-full p-3">
            <Icon name="right_arrow" width={20} height={20} />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-dark">
              Film Breakdown - Part 1
            </h1>
            <p className="text-sm text-gray-500 pb-2">
              Advanced footwork analysis
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 items-start mt-10">
          <div className="col-span-2">
            <div className="border border-[#FFFFFF4D] rounded-2xl">
              <VideoPlayer />

              <div className="mt-5 flex gap-3 items-center">
                <AnimatedButton
                  style={{
                    borderRadius: "100px",
                    background:
                      "var(--Gradient, linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%))",
                  }}
                  className=" text-white font-semibold px-5 text-sm py-3 leading-4 rounded-full flex items-center gap-2 transition-all whitespace-nowrap"
                >
                  <Icon name="eye" width={16} height={16} />
                  Mark as Watched
                </AnimatedButton>

                <AnimatedButton
                  style={{
                    borderRadius: "50px",
                    border: "1px solid rgba(21, 86, 216, 0.10)",
                    background: "rgba(69, 127, 243, 0.15)",
                  }}
                  className="font-semibold text-[#276AEE] px-5 text-sm py-3 leading-4 rounded-full flex items-center gap-2 transition-all whitespace-nowrap"
                >
                  <Icon name="note" width={16} height={16} />
                  Add Notes & Submit
                </AnimatedButton>

                <AnimatedButton
                  style={{
                    borderRadius: "50px",
                    border: "1px solid rgba(21, 86, 216, 0.10)",
                    background: "rgba(69, 127, 243, 0.15)",
                  }}
                  className="font-semibold text-[#276AEE] px-5 text-sm py-3 leading-4 rounded-full flex items-center gap-2 transition-all whitespace-nowrap"
                >
                  <Icon name="note" width={16} height={16} />
                  Ask Coach
                </AnimatedButton>
              </div>

              <div className="mt-8">
                <p className="text-dark">My Notes</p>
                {/* textarea */}
                <textarea
                  rows={4}
                  placeholder="Write your notes here..."
                  className={cn(
                    "w-full py-4 rounded-xl bg-[#ffffff80] h-40 px-6 mt-4 text-sm text-gray-900 placeholder:text-placeholder focus:outline-none  border border-white",
                    "focus:border-[#5C8FF7]"
                  )}
                />

                <div className="flex justify-end mt-3">
                  <AnimatedButton
                    style={{
                      borderRadius: "100px",
                      background:
                        "var(--Gradient, linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%))",
                    }}
                    className=" text-white font-semibold px-5 text-sm py-3 leading-4 rounded-full flex items-center gap-2 transition-all whitespace-nowrap"
                  >
                    Save Notes
                  </AnimatedButton>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              overflow: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            className="col-span-1 rounded-2xl overflow-auto"
          >
            {/* Right Sidebar */}
            <div
              className="rounded-2xl overflow-auto bg-[#FFFFFF99] "
              style={{
                overflow: "auto",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <div className="w-full">
                {/* Task Details Card */}
                <div className="p-5">
                  <h2 className="text-gray-800 font-semibold text-lg mb-4">
                    Task Details
                  </h2>

                  {/* User Info */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 bg-teal-700 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-medium text-sm">
                        Jason Martinez
                      </h3>
                      <p className="text-dark text-sm">Quarterback • Senior</p>
                    </div>
                  </div>

                  {/* Instructions */}
                  <div className="mb-5">
                    <h3 className="text-dark font-semibold text-sm mb-2">
                      Instructions
                    </h3>
                    <p className="text-[#141b34b3] text-sm">
                      Record 3 complete repetitions of the QB footwork drill
                      from sideline view. Focus on proper foot placement,
                      balance, and timing. Make sure the video captures your
                      entire body movement from setup to release position. Each
                      rep should demonstrate the 3-step, 5-step, and 7-step drop
                      progressions we practiced in training.
                    </p>
                  </div>

                  {/* Key Learning Points */}
                  <div className="mb-5">
                    <h3 className="text-dark font-semibold text-sm mb-4">
                      Key Learning Point
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-gray-800 rounded-full mt-1.5 flex-shrink-0"></span>
                        <span className="text-dark text-sm">
                          Proper foot placement and spacing
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-gray-800 rounded-full mt-1.5 flex-shrink-0"></span>
                        <span className="text-dark text-sm">
                          Smooth transition between steps
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-gray-800 rounded-full mt-1.5 flex-shrink-0"></span>
                        <span className="text-dark text-sm">
                          Maintain balance throughout movement
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-gray-800 rounded-full mt-1.5 flex-shrink-0"></span>
                        <span className="text-dark text-sm">
                          Quick release at the end of each rep
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Due Date */}
                  <div>
                    <h3 className="text-gray-800 font-semibold text-sm mb-2">
                      Due Date
                    </h3>
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <line
                          x1="16"
                          y1="2"
                          x2="16"
                          y2="6"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <line
                          x1="8"
                          y1="2"
                          x2="8"
                          y2="6"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <line
                          x1="3"
                          y1="10"
                          x2="21"
                          y2="10"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="text-gray-700 text-sm">
                        January 15, 2025
                      </span>
                      <span className="text-dark text-sm ml-auto">
                        3 days remaining
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Task Progress Card */}
            <div className="mt-8 p-5 bg-[#FFFFFF99] rounded-2xl">
              <h2 className="text-gray-800 font-semibold text-lg mb-6">
                Task Progress
              </h2>

              <div className="flex items-center justify-around">
                {/* Watch Progress */}
                <div className="flex flex-col items-center">
                  <div className="relative w-24 h-24 mb-3">
                    <svg className="w-24 h-24 transform -rotate-90">
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="#E5E7EB"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="#3B82F6"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={`${
                          2 * Math.PI * 40 * (1 - completionPercentage / 100)
                        }`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-800">
                        {completionPercentage}%
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm font-medium">
                    Watch Progress
                  </p>
                </div>

                {/* Days Remaining */}
                <div className="flex flex-col">
                  <div className="mb-3">
                    <span className="text-6xl font-bold text-blue-500">
                      {daysRemaining}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm font-medium">
                    Days
                    <br />
                    Remaining
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-4">
          <ProgramCard2 />
        </div>
      </Container>
    </div>
  );
};

export default Page;
