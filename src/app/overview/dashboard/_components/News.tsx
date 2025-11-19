"use client";
/* eslint-disable @next/next/no-img-element */
import Icon from "@/utils/icon";
import React, { useState } from "react";
import Card from "@/components/ui/Card";
import WelcomeIntro from "./WelcomeIntro";
import FirstProgram from "./FirstProgram";
import PremiumUpsell from "./PremiumUpsell";
import ProgramShowcase from "./ProgramShowcase";
import { AnimatedButton } from "@/components/ui/Button";
import ProgramLiveCongrats from "./ProgramLiveCongrats";
import WelcomeModal from "@/components/Modal/WelcomeModal";

function News() {
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState(true);
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
    setCurrentModalStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setCurrentModalStep((prev) => prev - 1);
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
        return <ProgramLiveCongrats onClose={handleCloseWelcomeModal} />;
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
      <Card className="space-y-5 p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-[20px] font-semibold leading-[1.5] text-dark">
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

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="md:p-6">
            <div className="bg-[url('/card-bottom-blur-image.svg')] absolute left-0 bottom-0 bg-no-repeat bg-left-bottom h-[540px] w-[663px] z-[-1]" />
            <div className="space-y-4">
              <div className="inline-flex size-10 items-center justify-center rounded-full bg-white/60">
                <Icon name="sunburstIcon" width={20} height={20} />
              </div>

              <div className="space-y-2">
                <p className="min-h-14 w-full text-lg font-semibold text-dark">
                  Share your expertise with the community!
                </p>
                <p className="min-h-[68px] text-xs line-clamp-4 text-dark/70">
                  Exciting news! You can now build your brand by posting in the
                  Community Feed. Share insights, drills, and connect with
                  athletes globally. Turn your expertise into influence and
                  income on PlayerZone
                </p>
              </div>

              <div>
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
          </Card>

          <Card className="md:p-6 border-2 bg-cover bg-[url('/bg.png')] bg-[#3c6bda]text-white">
            <div className="space-y-4">
              <div className="inline-flex size-10 items-center justify-center rounded-full bg-white/5 border border-white/10">
                <Icon
                  name="crown"
                  width={22}
                  height={22}
                  className="text-white"
                />
              </div>

              <div className="space-y-2">
                <p className="min-h-14 w-full text-lg font-semibold text-white">
                  Unlock Premium
                </p>
                <p className="min-h-[68px] text-xs line-clamp-4 text-white">
                  Access advanced analytics, gain priority visibility for your
                  programs, and unlock exclusive tools designed to grow your
                  coaching business on PlayerZone.
                </p>
              </div>

              <div>
                <button
                  type="button"
                  className="mt-auto inline-flex h-[35px] w-[127px] items-center justify-center rounded-full bg-white px-[7px] py-[8px] text-[10px] font-medium text-[#1556d8] hover:bg-gray-100 cursor-pointer transition-colors"
                >
                  Unlock Now
                </button>
              </div>
            </div>
          </Card>
        </div>
      </Card>

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
