"use client";

import Icon from "@/components/ui/Icon";
import React from "react";

export interface TaskStep {
    id: number;
    title: string;
    status: "in_progress" | "pending" | "completed";
}

interface TasksMenuProps {
    steps: TaskStep[];
    currentStep: number;
    onStepClick: (step: number) => void;
}

export default function TasksMenu({
    steps,
    currentStep,
    onStepClick,
}: TasksMenuProps) {
    const getStepStatus = (stepId: number): "in_progress" | "pending" | "completed" => {
        if (stepId < currentStep) return "completed";
        if (stepId === currentStep) return "in_progress";
        return "pending";
    };

    return (
        <div className="relative rounded-2xl p-6">
            <div className="relative space-y-6">
                {steps.map((step, index) => {
                    const status = getStepStatus(step.id);
                    const isActive = status === "in_progress";
                    const isCompleted = status === "completed";

                    return (
                        <div
                            key={step.id}
                            className="relative flex items-start gap-4 cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={() => onStepClick(step.id)}
                        >
                            {/* Vertical Connector Line */}
                            {index < steps.length - 1 && (
                                <div
                                    className="absolute left-[18px] top-[40px] w-0.5 h-[45px]"
                                    style={
                                        isCompleted
                                            ? {
                                                background: "#5C8FF7",
                                            }
                                            : isActive
                                                ? {
                                                    background:
                                                        "linear-gradient(to bottom, #5C8FF7 0%, #5C8FF7 50%, #D1D5DB 50%, #D1D5DB 100%)",
                                                }
                                                : {
                                                    background: "#D1D5DB",
                                                }
                                    }
                                />
                            )}

                            {/* Circle Icon */}
                            <div className="relative z-10">
                                {isActive ? (
                                    <div
                                        className="w-9 h-9 rounded-full flex items-center justify-center text-white font-medium text-sm shadow-sm"
                                        style={{
                                            background: "linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%)",
                                        }}
                                    >
                                        {step.id}
                                    </div>
                                ) : (
                                    <div
                                        className={`w-9 h-9 rounded-full flex items-center justify-center font-medium text-sm border-2 ${isCompleted
                                            ? "bg-blue-100 border-blue-300 text-blue-600"
                                            : "bg-transparent border-gray-300 text-gray-400"
                                            }`}
                                    >
                                        {isCompleted ? (
                                            <Icon name="circle-check" />
                                        ) : (
                                            <span>{step.id}</span>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex-1 pt-1">
                                <h3
                                    className={`font-medium text-base mb-2 ${isActive
                                        ? "text-[#276AEE]"
                                        : isCompleted
                                            ? "text-gray-700"
                                            : "text-[#141b3499]"
                                        }`}
                                >
                                    {step.title}
                                </h3>
                                <div
                                    className={`inline-flex px-3 py-1 text-xs font-medium ${isActive
                                        ? "bg-blue-100 text-[#276AEE] rounded-full"
                                        : isCompleted
                                            ? "text-gray-700"
                                            : "bg-gray-100 text-gray-500 rounded-full"
                                        }`}
                                    style={
                                        isCompleted
                                            ? {
                                                borderRadius: "44px",
                                                background: "rgba(183, 247, 178, 0.50)",
                                            }
                                            : undefined
                                    }
                                >
                                    {isActive ? "In Progress" : isCompleted ? "Completed" : "Pending"}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

