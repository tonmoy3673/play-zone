"use client";
import React from "react";

// Assets
const imgAsset24X8 = "https://www.figma.com/api/mcp/asset/609675d2-0f0a-485a-a881-0cbc9841e392";
const imgImage401 = "https://www.figma.com/api/mcp/asset/741406da-b8fc-48ee-ae42-4bbd20ca9a60";
const imgRectangle10830 = "https://www.figma.com/api/mcp/asset/01cc4705-5bf2-409e-a936-4c54711d724a";

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WelcomeModal({ 
  isOpen, 
  onClose 
}: WelcomeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="relative w-[90vw] max-w-[800px] max-h-[90vh] bg-white/95 !backdrop-blur-lg rounded-[24px] border border-white/30 shadow-2xl overflow-y-auto">
      <div className="p-6">
        {/* Header with Close Button */}
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

        {/* Main Content */}
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="h-12 w-[55px] mb-4">
            <img
              src={imgAsset24X8}
              alt="PlayerZone Logo"
              className="h-full w-full object-contain"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-[24px] font-medium leading-[1.3] text-[#141b34] mb-3">
            Welcome to <span className="font-semibold">PlayerZone</span>, Coach.
          </h1>

          {/* Description */}
          <p className="text-[14px] font-normal leading-[1.5] text-[#141b34]/80 mb-6 max-w-[400px]">
            You're now part of an elite community of coaches and athletes. This is where you transform your knowledge into a professional business and build your legacy.
          </p>

          {/* Stats Card */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-[16px] p-4 border border-blue-100/50 w-full max-w-[320px] mb-4">
            <div className="flex items-center justify-center mb-3">
              <div className="flex -space-x-2">
                <div className="relative size-10 shrink-0 rounded-full border-2 border-white overflow-hidden shadow-sm">
                  <img
                    src={imgImage401}
                    alt="Coach"
                    className="absolute inset-0 size-full object-cover"
                  />
                </div>
                <div className="relative size-10 shrink-0 rounded-full border-2 border-white overflow-hidden shadow-sm">
                  <img
                    src={imgRectangle10830}
                    alt="Coach"
                    className="absolute inset-0 size-full object-cover"
                  />
                </div>
                <div className="relative size-10 shrink-0 rounded-full border-2 border-white overflow-hidden shadow-sm">
                  <img
                    src={imgImage401}
                    alt="Coach"
                    className="absolute inset-0 size-full object-cover"
                  />
                </div>
                <div className="inline-flex size-10 items-center justify-center rounded-full border-2 border-white bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-[12px] font-medium shadow-sm">
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

          {/* Progress Dots */}
          <div className="flex items-center gap-2 mt-4 mb-4">
            <span className="h-2 w-6 rounded-full bg-blue-500"></span>
            <span className="h-2 w-2 rounded-full bg-gray-300"></span>
            <span className="h-2 w-2 rounded-full bg-gray-300"></span>
          </div>

          {/* CTA Button */}
          <button
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-[12px] bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3 text-[14px] font-semibold text-white hover:from-blue-600 hover:to-indigo-700 cursor-pointer transition-all shadow-lg hover:shadow-xl min-w-[160px]"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}