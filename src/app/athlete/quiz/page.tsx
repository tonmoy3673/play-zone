"use client";

import React, { useState } from 'react';
import Icon from '@/components/ui/Icon';
import AllQuestions from './_components/AllQuestions';
import ReviewAnswers from './_components/ReviewAnswers';
import Results from './_components/Results';
import AnnouncementMenu, { AnnouncementStep } from '../announcement/_components/AnnouncementMenu';

const Page = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [answers, setAnswers] = useState<Record<number, string>>({});

    const steps: AnnouncementStep[] = [
        {
            id: 1,
            title: "Complete All Questions",
            status: currentStep === 1 ? "in_progress" : currentStep > 1 ? "completed" : "pending",
        },
        {
            id: 2,
            title: "Review Answers",
            status: currentStep === 2 ? "in_progress" : currentStep > 2 ? "completed" : "pending",
        },
        {
            id: 3,
            title: "Results",
            status: currentStep === 3 ? "in_progress" : "pending",
        },
    ];

    const handleStepClick = (stepId: number) => {
        setCurrentStep(stepId);
    };

    const handleAnswerChange = (questionId: number, answer: string) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: answer
        }));
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
                        {currentStep === 1 && (
                            <AllQuestions 
                                answers={answers}
                                onAnswerChange={handleAnswerChange}
                                onNext={() => handleStepClick(2)} 
                            />
                        )}
                        {currentStep === 2 && (
                            <ReviewAnswers 
                                answers={answers}
                                onBack={() => handleStepClick(1)}
                                onSubmit={() => handleStepClick(3)}
                            />
                        )}
                        {currentStep === 3 && <Results answers={answers} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page