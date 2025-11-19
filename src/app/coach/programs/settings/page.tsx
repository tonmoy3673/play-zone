"use client";
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import ProgramSettingsMenu from './_components/ProgramSettingsMenu';
import BasicInformation from './_components/BasicInformation';
import ProgramAdvanceSettings from './_components/ProgramAdvanceSettings';
import VisibilityEnrollment from './_components/VisibilityEnrollment';
import DeleteProgramModal from './_components/DeleteProgramModal';
const Page = () => {
    const [activeTab, setActiveTab] = useState<string>("basic-info");
    const [isDeleteProgramOpen, setIsDeleteProgramOpen] = useState<boolean>(false);
    return (
        <div
            className={cn(
                "bg-[#E7F2F5]   mx-auto rounded-3xl border border-white p-8"
                // !isOpen && "backdrop-blur-3xl"
            )}
        >
            <h1 className="text-3xl text-black sticky top-5 font-semibold mb-8">
                Program Settings
            </h1>
            <div className="flex items-start  min-h-screen  gap-8 ">
                <div className="sticky top-24">
                    <ProgramSettingsMenu
                        activeState={activeTab}
                        setActiveState={setActiveTab}
                        setIsDeleteProgramOpen={setIsDeleteProgramOpen}
                    />
                </div>
                {activeTab == "basic-info" && <BasicInformation />}
                {activeTab == "advance-settings" && <ProgramAdvanceSettings />}
                {activeTab == "visibility-enrollment" && <VisibilityEnrollment />}
            </div>
            <DeleteProgramModal
                isOpen={isDeleteProgramOpen}
                setIsOpen={setIsDeleteProgramOpen}
            />
        </div>
    );
};

export default Page;