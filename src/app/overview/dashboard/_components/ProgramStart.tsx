"use client";
import React, { useState } from "react";

const imgImage341 =
  "https://www.figma.com/api/mcp/asset/8317cf7f-0e9f-4656-b7eb-3ed493a9aba0";
const imgRectangle2081 =
  "https://www.figma.com/api/mcp/asset/f5cd1c09-8833-4378-9393-36af8d3b2bf6";
const uncheckedIcon =
  "https://www.figma.com/api/mcp/asset/789023ff-b982-46d4-9895-7e29db78e8c1";
const checkedIcon =
  "https://www.figma.com/api/mcp/asset/8ea08a11-81b3-4e1e-ae5e-be3269e9a231";

type FrameProps = {
  className?: string;
  property1?: "Check" | "uncheck";
  onClick?: () => void;
};

function Frame({ className, property1 = "Check", onClick }: FrameProps) {
  return (
    <div className={`${className} cursor-pointer`} onClick={onClick}>
      <div className="overflow-clip relative shrink-0 size-[24px]">
        <div className="absolute inset-[7.29%]">
          <img
            alt=""
            className="block max-w-none size-full"
            src={property1 === "Check" ? checkedIcon : uncheckedIcon}
          />
        </div>
      </div>
    </div>
  );
}

type ProgramTask = {
  id: number;
  text: string;
  property1: "Check" | "uncheck";
  button?: string;
};

interface ProgramStartModalProps {
  onClose: () => void;
}

export default function ProgramStartModal({ onClose }: ProgramStartModalProps) {
  const [tasks, setTasks] = useState<ProgramTask[]>([
    {
      id: 1,
      text: "Profile creation",
      property1: "uncheck",
      button: "Take me",
    },
    {
      id: 2,
      text: "Program creation",
      property1: "uncheck",
    },
    {
      id: 3,
      text: "Creating your first tasks",
      property1: "uncheck",
    },
    {
      id: 4,
      text: "Boosting your program",
      property1: "uncheck",
    },
  ]);

  const completedTasks = tasks.filter(
    (task) => task.property1 === "Check"
  ).length;
  const totalTasks = tasks.length;
  const progressPercentage = (completedTasks / totalTasks) * 100;

  const handleTaskToggle = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              property1: task.property1 === "Check" ? "uncheck" : "Check",
            }
          : task
      )
    );
  };

  const handleButtonClick = (taskId: number) => {
    // Mark the task as completed when "Take me" is clicked
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, property1: "Check" } : task
      )
    );
  };

  // Function to determine which task should show the "Take me" button
  const getTaskWithButton = () => {
    // Find the first unchecked task
    const firstUncheckedTask = tasks.find(
      (task) => task.property1 === "uncheck"
    );
    return firstUncheckedTask ? firstUncheckedTask.id : null;
  };

  const taskWithButtonId = getTaskWithButton();

  return (
    <div
      style={{ boxShadow: "0 30px 35.8px 11px rgba(8, 44, 114, 0.30)" }}
      className="bg-white/40 backdrop-blur-lg border-2 border-white relative rounded-[21px] w-[380px] h-[420px] overflow-hidden"
    >
      <div className="overflow-clip relative rounded-[inherit] size-full">
        {/* Background Image */}
        <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.5829582810401917)+(var(--transform-inner-height)*0.8125020861625671)))] items-center justify-center left-[calc(50%+45.5px)] top-[calc(50%+-65.81px)] translate-x-[-50%] translate-y-[-50%] w-[calc(1px*((var(--transform-inner-height)*0.5829582810401917)+(var(--transform-inner-width)*0.8125020861625671)))]">
          <div className="flex-none rotate-[215.659deg] scale-y-[-100%]">
            <div className="blur-sm filter h-[561.587px] relative w-[689.691px]">
              <div className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none">
                <img
                  alt=""
                  className="absolute h-[106.24%] left-[-21.02%] max-w-none top-[-2.39%] w-[120.73%]"
                  src={imgImage341}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[16px] not-italic text-[#141b34] text-[16px] top-[28px] translate-y-[-50%] whitespace-nowrap">
          <p className="leading-[1.5]">Starting your first program</p>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 w-6 h-6 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-gray-600 font-bold text-sm z-10 backdrop-blur-sm"
        >
          ×
        </button>

        {/* Content */}
        <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[16px] top-[60px] w-[348px]">
          {/* Progress Section */}
          <div className="content-stretch flex flex-col gap-[6px] h-[35px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium items-center justify-between leading-[1.4] not-italic relative shrink-0 text-[#141b34] text-[12px] w-full">
              <p className="relative shrink-0">Complete</p>
              <p className="relative shrink-0">
                {Math.round(progressPercentage)}%
              </p>
            </div>
            <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-0 py-[2px] relative shrink-0 w-full">
              <div className="bg-[#c4d4fd]/30 content-stretch flex flex-col gap-[10px] h-[8px] items-start relative rounded-[40px] shrink-0 w-full">
                <div
                  className="h-[8px] relative rounded-[80px] shrink-0 bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
          </div>

          {/* Tasks List */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            {tasks.map((task) => {
              const hasButton = task.id === taskWithButtonId;
              return (
                <div
                  key={task.id}
                  className={[
                    "box-border content-stretch flex flex-col gap-[10px] items-start p-[12px] relative rounded-[12px] shrink-0 w-full transition-all duration-200",
                    hasButton
                      ? "bg-white/40 border border-white/30 shadow-sm"
                      : "bg-transparent",
                  ].join(" ")}
                >
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
                      <Frame
                        property1={task.property1}
                        className="content-stretch flex gap-[10px] items-center relative shrink-0"
                        onClick={() => handleTaskToggle(task.id)}
                      />
                      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#141b34] text-[12px] whitespace-nowrap">
                        <p className="leading-[1.4]">{task.text}</p>
                      </div>
                    </div>
                    {hasButton && (
                      <button
                        onClick={() => handleButtonClick(task.id)}
                        className="border border-[rgba(21,86,216,0.4)] border-solid box-border content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[12px] py-0 relative rounded-[8px] shrink-0 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 cursor-pointer transition-all duration-200 shadow-sm"
                      >
                        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[12px] text-center text-white">
                          Take me
                        </p>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Progress Info */}
          <div className="mt-2 w-full">
            <p className="text-[12px] text-[#141b34]/70 leading-[1.4] text-center">
              {completedTasks === totalTasks
                ? "🎉 Congratulations! You've completed all steps!"
                : `Complete ${completedTasks}/${totalTasks} steps to get your program ${progressPercentage}% ready`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
