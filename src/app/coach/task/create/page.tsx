"use client";

import React, { useState } from 'react';
import TasksMenu, { TaskStep } from './_components/TasksMenu';
import TaskBasic from './_components/TaskBasic';
import TaskAttachContent from './_components/TaskAttachContent';
import Icon from '@/components/ui/Icon';
import TaskAssignSchedule from './_components/TaskAssignSchedule';
import TaskSubmissionSettings from './_components/TaskSubmissionSettings';
import TaskScoringLeaderboard from './_components/TaskScoringLeaderboard';
import TaskReviewAndPublish from './_components/TaskReviewAndPublish';

const CreateTaskPage = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const steps: TaskStep[] = [
        {
            id: 1,
            title: "Task Basics",
            status: "in_progress",
        },
        {
            id: 2,
            title: "Attach Content",
            status: "pending",
        },
        {
            id: 3,
            title: "Assign & Schedule",
            status: "pending",
        },
        {
            id: 4,
            title: "Submission Settings",
            status: "pending",
        },
        {
            id: 5,
            title: "Scoring & Leaderboard",
            status: "pending",
        },
        {
            id: 6,
            title: "Review & Publish",
            status: "pending",
        },
    ];

    const handleStepClick = (stepId: number) => {
        setCurrentStep(stepId);
    };

    return (
        <div className="p-6">
            <div className="flex items-start  min-h-screen gap-4 ">
                <div className="sticky bg-[#E7F2F5] rounded-3xl border border-white p-6 w-full max-w-[330px]">
                    <TasksMenu
                        steps={steps}
                        currentStep={currentStep}
                        onStepClick={handleStepClick}
                    />
                </div>

                <div className="bg-[#E7F2F5] rounded-3xl border border-white p-10 w-full mx-auto flex flex-col min-h-full">
                    <div className="flex-1">
                        {currentStep === 1 && <TaskBasic />}
                        {currentStep === 2 && <TaskAttachContent />}
                        {currentStep === 3 && <TaskAssignSchedule />}
                        {currentStep === 4 && <TaskSubmissionSettings />}
                        {currentStep === 5 && <TaskScoringLeaderboard />}
                        {currentStep === 6 && <TaskReviewAndPublish />}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 justify-between mt-12">
                        {currentStep > 1 && (
                            <>
                                <button onClick={() => handleStepClick(currentStep - 1)} type='button' className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-blue-100 transition flex gap-2 items-center">
                                    <Icon name='arrow-left-icon' />
                                    Back
                                </button>
                            </>
                        )}
                        <div className="flex gap-4 justify-end items-end">
                            {currentStep != steps.length && (
                                <button className="px-8 py-3 rounded-full bg-blue-100 text-blue-600 font-semibold hover:bg-blue-200 transition">
                                    Save Draft
                                </button>
                            )}
                            {currentStep < steps.length && (
                                <button onClick={() => handleStepClick(Math.min(currentStep + 1, steps.length))} type='button' className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                                    Next
                                </button>
                            )}
                            {currentStep === steps.length && (
                                <button type='button' className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                                    Publish
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateTaskPage