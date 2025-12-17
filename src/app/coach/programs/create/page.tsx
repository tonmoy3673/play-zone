"use client";

import { useState } from "react";
import { initialSteps, Step } from "./steps";
import ProgramDetails from "./_components/ProgramDetails";
import RolePermissions from "./_components/RolePermissions";
import ProgramSchedule from "./_components/ProgramSchedule";
import ProgramReviewLaunch from "./_components/ProgramReviewLaunch";
import ProgramCreationSteps from "./_components/ProgramCreationSteps";
import UnlockPremiumFeatures from "./_components/UnlockPremiumFeatures";
import ChooseYourProgramSection from "./_components/ChooseYourProgramSection";
import { AnimatedButton } from "@/components/ui/Button";
import Icon from "@/utils/icon";
import Card from "@/components/ui/Card";

export default function Page() {
  const [steps, setSteps] = useState<Step[]>(initialSteps);
  const [currentStep, setCurrentStep] = useState<number>(1);

  const handleNext = () => {
    if (currentStep < steps.length) {
      const newSteps: Step[] = steps.map((step) =>
        step.id === currentStep
          ? { ...step, status: "complete" }
          : step.id === currentStep + 1
          ? { ...step, status: "current" }
          : step
      );
      setSteps(newSteps);
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      const newSteps: Step[] = steps.map((step) =>
        step.id === currentStep
          ? { ...step, status: "pending" }
          : step.id === currentStep - 1
          ? { ...step, status: "current" }
          : step
      );
      setSteps(newSteps);
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepComponent = () => {
    switch (currentStep) {
      case 1:
        return <ChooseYourProgramSection />;
      case 2:
        return <ProgramDetails />;
      case 3:
        return <ProgramSchedule />;
      case 4:
        return <RolePermissions />;
      case 5:
        return <UnlockPremiumFeatures />;
      case 6:
        return <ProgramReviewLaunch />;

      default:
        return <ChooseYourProgramSection />;
    }
  };

  return (
    <div className="grid md:grid-cols-[262px_1fr] gap-3">
      <ProgramCreationSteps steps={steps} />

      <Card className="space-y-8 md:space-y-10 lg:space-y-14 bg-[#E7F2F5] p-6 md:p-10 lg:pl-11">
        {renderStepComponent()}

        <div className="flex items-center justify-between ">
          <button
            type="button"
            onClick={() => handleBack()}
            className="inline-flex items-center gap-2 rounded-full bg-white/30 px-5 py-3 text-[16px] font-medium text-dark hover:bg-white/40  border border-white"
          >
            <Icon name="back_arrow" width={24} height={24} />
            Back
          </button>

          <AnimatedButton
            onClick={() => handleNext()}
            className="flex items-center py-3 px-12 rounded-full border border-[#68B0EA] text-[16px] font-medium  text-white bg-[linear-gradient(177deg,#5C8FF7_10.06%,#276AEE_62.94%)]"
          >
            Next
          </AnimatedButton>
        </div>
      </Card>
    </div>
  );
}
