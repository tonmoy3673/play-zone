"use client";

import React, { useState } from 'react';
import Icon from '@/components/ui/Icon';
import AnnouncementMenu, { AnnouncementStep } from '../_components/AnnouncementMenu';
import TaskBasic from '../../task/create/_components/TaskBasic';
import Compose from '../_components/Compose';
import AttachContent from '../_components/AttachContent';
import EngagementOptions from '../_components/EngagementOptions';
import NotifyMembers from '../_components/NotifyMembers';
import Publish from '../_components/Publish';

const CreateTaskPage = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const steps: AnnouncementStep[] = [
        {
            id: 1,
            title: "Compose",
            status: "in_progress",
        },
        {
            id: 2,
            title: "Attach Content",
            status: "pending",
        },
        {
            id: 3,
            title: "Engagement Option",
            status: "pending",
        },
        {
            id: 4,
            title: "Notify Members",
            status: "pending",
        },
        {
            id: 5,
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
                    <AnnouncementMenu
                        steps={steps}
                        currentStep={currentStep}
                        onStepClick={handleStepClick}
                    />
                </div>

                <div className="bg-[#E7F2F5] rounded-3xl border border-white p-10 w-full mx-auto flex flex-col min-h-full">
                    <div className="flex-1">
                        {currentStep === 1 && <Compose />}
                        {currentStep === 2 && <AttachContent />}
                        {currentStep === 3 && <EngagementOptions />}
                        {currentStep === 4 && <NotifyMembers />}
                        {currentStep === 5 && <Publish />}
                    </div>

                    {/* Buttons */}
                      {/* Buttons */}
                    <div className="flex gap-4 justify-between mt-12">
                        {currentStep > 1 && (
                            <>
                                <button onClick={() => handleStepClick(currentStep - 1)} type='button' className="px-8 py-3 rounded-full bg-[#FFFFFF4D] text-black font-semibold hover:bg-blue-100 transition flex gap-2 items-center">
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