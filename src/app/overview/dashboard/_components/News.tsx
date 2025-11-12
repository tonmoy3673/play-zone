// News.tsx
"use client"
/* eslint-disable @next/next/no-img-element */
import WelcomeModal from "@/components/Modal/WelcomeModal";
import { AnimatedButton } from "@/components/ui/Button";
import Icon from "@/utils/icon";
import React, { useState } from "react";
import WelcomeIntro from "./WelcomeIntro";
import ProgramShowcase from "./ProgramShowcase";
import FirstProgram from "./FirstProgram";
import PremiumUpsell from "./PremiumUpsell";
import ProgramLiveCongrats from "./ProgramLiveCongrats";

function News() {
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState(false);
  const [currentModalStep, setCurrentModalStep] = useState(1);

  const handleOpenWelcomeModal = () => {
    setIsWelcomeModalOpen(true);
    setCurrentModalStep(1);
  };

  const handleCloseWelcomeModal = () => {
    setIsWelcomeModalOpen(false);
    setCurrentModalStep(1);
  };

  const handleNextStep = () => {
    setCurrentModalStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setCurrentModalStep(prev => prev - 1);
  };

  const renderModalContent = () => {
    switch (currentModalStep) {
      case 1:
        return (
          <WelcomeIntro
            isOpen={isWelcomeModalOpen}
            onClose={handleCloseWelcomeModal}
            onNext={handleNextStep}
          />
        );
      case 2:
        return (
          <ProgramShowcase
            isOpen={isWelcomeModalOpen}
            onClose={handleCloseWelcomeModal}
            onNext={handleNextStep}
            onPrev={handlePrevStep}
          />
        );
      case 3:
        return (
          <FirstProgram
            isOpen={isWelcomeModalOpen}
            onClose={handleCloseWelcomeModal}
            onNext={handleNextStep}
            onPrev={handlePrevStep}
          />
        );
      case 4:
        return (
          <PremiumUpsell
            isOpen={isWelcomeModalOpen}
            onClose={handleCloseWelcomeModal}
            onNext={handleNextStep}
            onPrev={handlePrevStep}
          />
        );
      case 5:
        return (
          <ProgramLiveCongrats
            isOpen={isWelcomeModalOpen}
            onClose={handleCloseWelcomeModal}
            onPrev={handlePrevStep}
          />
        );
      default:
        return (
          <WelcomeIntro
            isOpen={isWelcomeModalOpen}
            onClose={handleCloseWelcomeModal}
            onNext={handleNextStep}
          />
        );
    }
  };

  return (
    <>
      <div className="relative w-full overflow-hidden rounded-[24px] bg-white/30 border border-white">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-[20px] font-semibold leading-[1.5] text-[#141b34]">
              News
            </h2>
            <button
              type="button"
              aria-label="Next"
              className="relative inline-flex size-10 items-center justify-center rounded-full border border-white bg-white/65 cursor-pointer hover:bg-white/80 transition-colors"
            >
              <Icon name="right_arrow" width={20} height={20} />
            </button>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
            <div className="bg-white bg-[url('/image341.svg')] h-[285px] bg-cover bg-center bg-no-repeat rounded-3xl border-2 max-w-md border-blue-300 p-6 flex flex-col items-center justify-center min-h-64 transition-shadow hover:shadow-lg">
              <div className="flex h-full flex-col justify-between">
                <div className="space-y-2">
                  <div className="inline-flex size-10 items-center justify-center rounded-full bg-white/60 p-[9px]">
                    <Icon name="sunburstIcon" width={20} height={20} />
                  </div>

                  <div className="space-y-2">
                    <p className="w-full max-w-[345px] text-[18px] font-inter font-semibold leading-[1.5] text-[#141b34]">
                      Share your expertise with the community!
                    </p>
                    <p className="w-full max-w-[342px] font-inter text-[12px] font-normal leading-[1.4] text-[#141b34]/70">
                      Exciting news! You can now build your brand by posting in
                      the Community Feed. Share insights, drills, and connect with
                      athletes globally. Turn your expertise into influence and
                      income on PlayerZone
                    </p>
                  </div>
                </div>
                <div className="mt-3">
                  <AnimatedButton
                    onClick={handleOpenWelcomeModal}
                    style={{
                      borderRadius: "40px",
                      background:
                        "linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%)",
                    }}
                    className="flex items-center justify-center gap-1 text-white font-normal text-[10px] px-4 py-2.5 rounded-full hover:bg-blue-700 cursor-pointer transition-all"
                  >
                    Explore Community
                  </AnimatedButton>
                </div>
              </div>
            </div>

            <div className="relative h-[285px] bg-cover bg-[url('/bg.png')] w-full overflow-hidden rounded-[24px] bg-[#3c6bda] p-6 text-white">
              <div className="relative flex h-full flex-col">
                <div className="inline-flex size-[40.5px] items-center justify-center rounded-full bg-white/10 p-[9px]">
                  <Icon name="crown" width={22} height={22} />
                </div>

                <div className="mt-4 space-y-2">
                  <p className="text-[18px] font-semibold leading-[1.5]">
                    Unlock Premium
                  </p>
                  <p className="text-[12px] font-normal leading-[1.4]">
                    Access advanced analytics, gain priority visibility for your
                    programs, and unlock exclusive tools designed to grow your
                    coaching business on PlayerZone.
                  </p>
                </div>

                <button
                  type="button"
                  className="mt-auto inline-flex h-[35px] w-[127px] items-center justify-center rounded-full bg-white px-[7px] py-[8px] text-[10px] font-medium text-[#1556d8] hover:bg-gray-100 cursor-pointer transition-colors"
                >
                  Unlock Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WelcomeModal
        isOpen={isWelcomeModalOpen} 
        onClose={handleCloseWelcomeModal}
        position="center"
      >
        {renderModalContent()}
      </WelcomeModal>
    </>
  );
}

export default News;