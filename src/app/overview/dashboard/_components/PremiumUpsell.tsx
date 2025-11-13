"use client";
import { AnimatedButton } from "@/components/ui/Button";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

type Feature = {
  id: string;
  label: string;
};

const defaultFeatures: Feature[] = [
  { id: "f1", label: "Unlimited Program Capacity" },
  { id: "f2", label: "Dedicated Merchandise & Custom Marketplace" },
  { id: "f3", label: "AI powered Virtual assistant" },
  { id: "f4", label: "Advanced Analytics" },
  { id: "f5", label: "Free Boost every 3 months" },
];

export default function PremiumUpsell({
  isOpen,
  onClose,
  onNext,
  onPrev,
  features = defaultFeatures,
}: ModalProps & { features?: Feature[] }) {
  if (!isOpen) return null;

  const handleGetStarted = () => {
    if (onNext) onNext();
    else console.log("Get Started clicked");
  };

  const handleSkip = () => {
    if (onPrev) onPrev();
    else onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-white/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-[90vw] max-w-[700px] h-[85vh] bg-white/80 backdrop-blur-lg rounded-[24px] border border-white/30 shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-4 flex-shrink-0">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[14px] font-medium text-[#141b34]">
              Creating tasks
            </p>
            <button
              onClick={onClose}
              className="inline-flex size-6 items-center justify-center rounded-full bg-white/80 hover:bg-white cursor-pointer transition-colors border border-gray-200"
            >
              <span className="text-[14px] font-bold text-[#141b34]">×</span>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 pt-0">
            <div
              className="relative mx-4 mt-4 h-[80px] overflow-clip rounded-[20px] border border-[#5c8ff7]"
              style={{
                background:
                  "linear-gradient(135deg, #0ea5e9 0%, #38bdf8 50%, #7dd3fc 100%)",
              }}
            >
              <div className="relative z-[1] flex h-full items-center justify-between px-6">
                <p className="text-[16px] font-medium text-white">
                  You've finished!
                </p>
                <div className="relative h-12 w-12">
                  <img
                    alt=""
                    src={"/overview/imgRing.svg"}
                    className="absolute inset-0 size-full"
                  />
                  <img
                    alt=""
                    src={"/overview/imgEllipse7633.png"}
                    className="absolute left-1/2 top-1/2 size-9 -translate-x-1/2 -translate-y-1/2"
                  />
                  <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[12px] font-medium text-[#141b34]">
                    100%
                  </p>
                </div>
              </div>
            </div>

            {/* Title */}
            <div className="mx-4 mt-6 flex flex-col items-center text-center">
              <h2 className="w-full max-w-[400px] text-center text-[20px] font-medium text-[#141b34]">
                <span>Unlock </span>
                <span className="bg-gradient-to-r from-[#4d81ff] to-[#557edf] bg-clip-text text-transparent">
                  Premium
                </span>
                <span> to elevate your program</span>
              </h2>
              <p className="mt-1 max-w-[500px] text-[12px] font-medium text-[#000]/60">
                Upgrade to{" "}
                <span className="bg-gradient-to-r from-[#4d81ff] to-[#557edf] bg-clip-text text-transparent">
                  Premium
                </span>{" "}
                to maximize your earnings – advanced tools, faster payouts, and
                more exposure.
              </p>
            </div>

            {/* ✅ Premium Plan with Gradient */}
            <div className="mx-auto mt-6 grid w-full max-w-[500px] grid-cols-1 gap-4 px-4">
              <div
                className="relative h-[160px] w-full overflow-clip rounded-[24px]"
                style={{
                  background:
                    "linear-gradient(135deg, #2563eb 0%, #60a5fa 50%, #93c5fd 100%)",
                }}
              >
                <p className="absolute left-6 top-6 text-[18px] font-medium text-white">
                  Premium Plan
                </p>

                <div className="absolute left-6 top-[70px]">
                  <div className="flex items-center gap-2 text-white">
                    <p className="text-[28px] font-semibold">$29</p>
                    <p className="text-[12px] font-normal">/ per month</p>
                  </div>
                  <p className="text-[12px] font-medium text-white/90">
                    Billed monthly - Cancel anytime
                  </p>
                </div>

                <div className="absolute right-4 top-[100px] h-6 w-[80px] rounded-[36px] bg-white/15 flex items-center justify-center text-[11px] font-medium text-white">
                  Pro Coach
                </div>
              </div>

              {/* Features */}
              <ul className="divide-y divide-white/20">
                {features.map((f) => (
                  <li
                    key={f.id}
                    className="flex items-center justify-between py-2"
                  >
                    <p className="text-[12px] font-medium text-[#141b34]">
                      {f.label}
                    </p>
                    <img
                      alt=""
                      src={"/overview/imgCheckCircle.svg"}
                      className="size-4"
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-1 mt-6 mb-2 justify-center">
              <span className="h-1.5 w-1.5 rounded-full bg-gray-300"></span>
              <span className="h-1.5 w-1.5 rounded-full bg-gray-300"></span>
              <span className="h-1.5 w-1.5 rounded-full bg-gray-300"></span>
              <span className="h-1.5 w-8 rounded-full bg-blue-500"></span>
              <span className="h-1.5 w-1.5 rounded-full bg-gray-300"></span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex-shrink-0 border-t bg-white border-[#ebf1ff] p-4">
          <div className="flex w-full items-center justify-between">
            <button className="rounded-[50px] px-3 py-2 text-[12px] font-medium bg-gradient-to-r from-[#4d81ff] to-[#6790f0] bg-clip-text text-transparent">
              Need Help
            </button>
            <div className="flex items-center gap-4">
              <button
                onClick={handleSkip}
                className="text-[12px] font-medium bg-gradient-to-r from-[#4d81ff] to-[#6790f0] bg-clip-text text-transparent"
              >
                Skip for now
              </button>
              <AnimatedButton
                onClick={handleGetStarted}
                style={{
                  borderRadius: "30px",
                  background:
                    "linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%)",
                }}
                className="flex items-center justify-center gap-1 text-white font-normal text-[10px] px-4 py-2 rounded-full hover:scale-105 transition-all"
              >
                Get Started
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
