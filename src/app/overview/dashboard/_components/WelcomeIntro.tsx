// WelcomeIntro.tsx
"use client";
import { AnimatedButton } from "@/components/ui/Button";
import React from "react";

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNext?: () => void;
}

export default function WelcomeIntro({
  isOpen,
  onClose,
  onNext,
}: WelcomeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="relative bg-white/30 bg-[url('/overview/modalBG.png')] w-[90vw] max-w-[800px] max-h-[90vh] backdrop-blur-lg rounded-[24px] border border-white/30 shadow-2xl overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <p className="text-[16px] font-medium leading-[1.5] text-[#141b34]">
            Welcome to PlayerZone
          </p>
          <button
            onClick={onClose}
            type="button"
            aria-label="Close"
            className="inline-flex size-8 items-center justify-center rounded-full bg-white/80 hover:bg-white cursor-pointer transition-colors border border-gray-200"
          >
            <span className="text-[16px] font-bold text-[#141b34]">×</span>
          </button>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="h-12 w-[55px] mb-4">
            <img
              src={"/overview/modalIcon.png"}
              alt="PlayerZone Logo"
              className="h-full w-full object-contain"
            />
          </div>

          <h1 className="text-[24px] font-medium leading-[1.3] text-[#141b34] mb-3">
            Welcome to <span className="font-semibold">PlayerZone</span>, Coach.
          </h1>

          <p className="text-[14px] font-normal leading-[1.5] text-[#141b34]/80 mb-6 max-w-[400px]">
            You're now part of an elite community of coaches and athletes. This
            is where you transform your knowledge into a professional business
            and build your legacy.
          </p>

          <div className="bg-white/60 rounded-[16px] p-4 border border-blue-100/50 w-full max-w-[320px] mb-4">
            <div className="flex items-center justify-center mb-3">
              <div className="flex -space-x-2">
                <div className="relative size-10 shrink-0 rounded-full border-2 border-white overflow-hidden shadow-sm">
                  <img
                    src={"/overview/player1.png"}
                    alt="Coach"
                    className="absolute inset-0 size-full object-cover"
                  />
                </div>
                <div className="relative size-10 shrink-0 rounded-full border-2 border-white overflow-hidden shadow-sm">
                  <img
                    src={"/overview/player2.jpg"}
                    alt="Coach"
                    className="absolute inset-0 size-full object-cover"
                  />
                </div>
                <div className="relative size-10 shrink-0 rounded-full border-2 border-white overflow-hidden shadow-sm">
                  <img
                    src={"/overview/player3.png"}
                    alt="Coach"
                    className="absolute inset-0 size-full object-cover"
                  />
                </div>
                <div
                  style={{
                    background:
                      "linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    borderRadius: "50px",
                    border: "1px solid #68B0EA",
                    backgroundColor: "rgba(255, 255, 255, 0.60)",
                  }}
                  className="inline-flex size-10 items-center justify-center text-center text-[12px] font-medium shadow-sm"
                >
                  +12
                </div>
              </div>
            </div>

            <h3 className="text-[16px] font-semibold leading-[1.4] text-[#141b34] mb-2">
              Coaches who finish get 1.8× more engagement
            </h3>
            <p className="text-[12px] font-normal leading-[1.4] text-[#141b34]/70">
              Join 2,847 successful coaches already using CoachPro
            </p>
          </div>

          <div className="flex items-center gap-2 mt-4 mb-4">
            <span className="h-2 w-6 rounded-full bg-blue-500"></span>
            <span className="h-2 w-2 rounded-full bg-gray-300"></span>
            <span className="h-2 w-2 rounded-full bg-gray-300"></span>
            <span className="h-2 w-2 rounded-full bg-gray-300"></span>
            <span className="h-2 w-2 rounded-full bg-gray-300"></span>
          </div>

          <AnimatedButton
            onClick={onNext}
            style={{
              borderRadius: "40px",
              background:
                "linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%)",
            }}
            className="flex items-center justify-center gap-1 text-white font-normal text-[10px] px-4 py-2.5 rounded-full hover:bg-blue-700 cursor-pointer transition-all"
          >
            Continue
          </AnimatedButton>
        </div>
      </div>
    </div>
  );
}
