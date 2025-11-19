"use client";
import Checkbox from "@/components/ui/Checkbox";
import React, { useState } from "react";
import BadgeSelector from "./BadgeSelector";
import TaskBonusMultipliers from "./TaskBonusMultipliers";

const TaskScoringLeaderboard = () => {
  const [showOnProgramLeaderboard, setShowOnProgramLeaderboard] =
    useState(false);
  const [points, setPoints] = useState(50);
  const minPoints = 0;
  const maxPoints = 100;
  const [showIndividualTaskRanking, setShowIndividualTaskRanking] =
    useState(false);
  const percentage = ((points - minPoints) / (maxPoints - minPoints)) * 100;
  const [autoGradedResult, setAutoGradedResult] = useState(false);
  const [manualReviewRequired, setManualReviewRequired] = useState(false);
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Scoring & Leaderboard</h1>
        <span className="text-sm text-gray-500">
          Connect task to points and community-based motivation
        </span>
      </div>

      <div className="flex gap-4">
        <div className="w-full flex flex-col gap-4">
          <div className="bg-[#FFFFFF4D] rounded-[30px] p-8 shadow-sm">
            <h2 className="text-base font-medium text-dark mb-2">
              Award Points
            </h2>
            <span className="text-sm text-gray-500">
              Set points athletes earn for completing this task
            </span>

            {/* Points Slider */}
            <div className="mt-6 flex flex-col gap-4">
              <div className="relative w-full">
                {/* Slider Track Container */}
                <div className="relative w-full h-[10px]">
                  {/* Background Track */}
                  <div
                    className="absolute inset-0 rounded-[40px]"
                    style={{ backgroundColor: "#c4d4fd" }}
                  />

                  {/* Filled Track */}
                  <div
                    className="absolute inset-y-0 left-0 rounded-[40px] transition-all duration-200"
                    style={{
                      width: `${percentage}%`,
                      backgroundImage:
                        "linear-gradient(to bottom, #7180DF, #2C49FF)",
                    }}
                  />

                  {/* Thumb Indicator */}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-[20px] h-[20px] rounded-full transition-all duration-200 pointer-events-none z-20"
                    style={{
                      left: `clamp(0px, calc(${percentage}% - 10px), calc(100% - 20px))`,
                      background:
                        "linear-gradient(to bottom, #7180DF, #2C49FF)",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                      border: "2px solid white",
                    }}
                  />

                  {/* Hidden Input for interaction */}
                  <input
                    type="range"
                    min={minPoints}
                    max={maxPoints}
                    step={1}
                    value={points}
                    onChange={(e) => setPoints(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    style={{ WebkitAppearance: "none" }}
                  />
                </div>

                {/* Points Labels */}
                <div className="flex items-center justify-between text-[14px] font-medium text-dark leading-[1.3] mt-4">
                  <span>{minPoints} pts</span>
                  <span>50 pts</span>
                  <span>{maxPoints} pts</span>
                </div>
              </div>
            </div>

            {/* Suggested Points Cards */}
            <div className="mt-6 flex gap-4 items-center flex-wrap">
              {/* Video Tasks Card */}
              <div className="bg-[rgba(255,255,255,0.6)] rounded-[16px] p-5 flex flex-col gap-[10px] flex-1 min-w-[266px]">
                <p className="text-[12px] font-normal text-dark/70 leading-[1.4]">
                  Suggested for
                </p>
                <div className="flex flex-col gap-[6px]">
                  <p className="text-[14px] font-medium text-dark leading-[1.3]">
                    Video Tasks:
                  </p>
                  <p className="text-[12px] font-normal text-dark/70 leading-[1.4]">
                    25-50 pts
                  </p>
                </div>
              </div>

              {/* Quiz Tasks Card */}
              <div className="bg-[rgba(255,255,255,0.6)] rounded-[16px] p-5 flex flex-col gap-[10px] flex-1 min-w-[266px]">
                <p className="text-[12px] font-normal text-dark/70 leading-[1.4]">
                  Suggested for
                </p>
                <div className="flex flex-col gap-[6px]">
                  <p className="text-[14px] font-medium text-dark leading-[1.3]">
                    Quiz Tasks:
                  </p>
                  <p className="text-[12px] font-normal text-dark/70 leading-[1.4]">
                    10-25 pts
                  </p>
                </div>
              </div>

              {/* Text Tasks Card */}
              <div className="bg-[rgba(255,255,255,0.6)] rounded-[16px] p-5 flex flex-col gap-[10px] flex-1 min-w-[266px]">
                <p className="text-[12px] font-normal text-dark/70 leading-[1.4]">
                  Suggested for
                </p>
                <div className="flex flex-col gap-[6px]">
                  <p className="text-[14px] font-medium text-dark leading-[1.3]">
                    Text Tasks:
                  </p>
                  <p className="text-[12px] font-normal text-dark/70 leading-[1.4]">
                    5-15 pts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 mb-4">
        <h1 className="text-base font-medium">Leaderboard Visibility</h1>
      </div>
      <div className="flex gap-4">
        <div className="w-full flex flex-col gap-4">
          <div className="bg-[#FFFFFF99] rounded-[16px] p-8 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-base font-medium text-dark mb-1">
                  Show on Program Leaderboard
                </h2>
                <span className="text-sm text-gray-500">
                  Task completion will be visible on the main leaderboard
                </span>
              </div>
              <Checkbox
                name="showOnProgramLeaderboard"
                checked={showOnProgramLeaderboard}
                onChange={(e) => setShowOnProgramLeaderboard(e.target.checked)}
              />
            </div>

            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-base font-medium text-dark mb-1">
                  Show Individual Task Ranking
                </h2>
                <span className="text-sm text-gray-500">
                  Create a separate ranking just for this task
                </span>
              </div>
              <Checkbox
                name="showIndividualTaskRanking"
                checked={showIndividualTaskRanking}
                onChange={(e) => setShowIndividualTaskRanking(e.target.checked)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 mb-4">
        <h1 className="text-base font-medium">Result Type</h1>
      </div>
      <div className="flex gap-4">
        <div className="w-full flex flex-col gap-4">
          <div className="bg-[#FFFFFF99] rounded-[16px] p-8 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-base font-medium text-dark mb-1">
                  Auto-Graded Result
                </h2>
                <span className="text-sm text-gray-500">
                  Results available immediately after submission for auto-graded
                  questions
                </span>
              </div>
              <Checkbox
                name="autoGradedResult"
                checked={autoGradedResult}
                onChange={(e) => setAutoGradedResult(e.target.checked)}
              />
            </div>

            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-base font-medium text-dark mb-1">
                  Manual Review Required
                </h2>
                <span className="text-sm text-gray-500">
                  You&apos;ll receive a notification when coach martinez
                  completes the review
                </span>
              </div>
              <Checkbox
                name="manualReviewRequired"
                checked={manualReviewRequired}
                onChange={(e) => setManualReviewRequired(e.target.checked)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Badge Selector */}
      <div className="mt-8">
        <BadgeSelector />
      </div>
      <div className="mt-8">
        <TaskBonusMultipliers />
      </div>
    </div>
  );
};

export default TaskScoringLeaderboard;
