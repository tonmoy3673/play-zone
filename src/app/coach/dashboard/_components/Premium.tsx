"use client";
import { AnimatedButton } from "@/components/ui/Button";
import Icon from "@/utils/icon";

// Image assets - using Figma URLs (can be replaced with local assets later)
const imgImage341 =
  "https://www.figma.com/api/mcp/asset/046eb22a-d075-4722-8f50-5c8783bb9297";
const imgEllipse7633 =
  "https://www.figma.com/api/mcp/asset/0b2ee4b4-6d5e-4de5-b692-c581088c9330";
const imgLogo =
  "https://www.figma.com/api/mcp/asset/d90c2880-e4ff-4233-b9fe-a899540e7e44";
const imgCancelCircle =
  "https://www.figma.com/api/mcp/asset/72144175-9d0c-4591-abd1-bc2bba5fb31c";
const imgGroup2087325084 =
  "https://www.figma.com/api/mcp/asset/e6fae553-7fad-4c02-ac60-6a964f84fb2b";
const imgGroup12871 =
  "https://www.figma.com/api/mcp/asset/e65136ea-d574-4f8f-9908-c09828e77c32";
const imgEllipse7617 =
  "https://www.figma.com/api/mcp/asset/2197b712-61ec-47de-9f76-a506a6619b29";
const imgCrown =
  "https://www.figma.com/api/mcp/asset/36201990-6d3f-4fcb-8b5c-323beaa41752";
const imgEllipse7620 =
  "https://www.figma.com/api/mcp/asset/e1c29bfa-a04b-4dbb-9df2-259f59e992d0";
const imgCheckCircle =
  "https://www.figma.com/api/mcp/asset/4c316a77-f8d6-400e-8b1b-e379131dc6ea";

interface PremiumProps {
  onClose?: () => void;
  onGetStarted?: () => void;
  onSkip?: () => void;
  onNeedHelp?: () => void;
}

const features = [
  "Unlimited Program Capacity",
  "Dedicated Merchandise & Custom Marketplace",
  "AI powered Virtual assistant",
  "Advanced Analytics",
  "Free Boost every 3 months",
];

export default function Premium({
  onClose,
  onGetStarted,
  onSkip,
  onNeedHelp,
}: PremiumProps) {
  return (
    <div className="bg-white overflow-clip relative rounded-[16px] w-full  mx-auto">
      {/* Background decorative image */}
      <div className="absolute bottom-[-1057px] left-[calc(50%+711px)] -translate-x-1/2 w-[663px] h-[540px] opacity-30 pointer-events-none">
        <div className="rotate-[60deg] scale-y-[-1] blur-md">
          <img
            alt=""
            src={imgImage341}
            className="w-[120.73%] h-[106.24%] -left-[21.02%] -top-[2.39%] absolute max-w-none"
          />
        </div>
      </div>

      {/* Header */}
      <div className="border-b border-[#ebf1ff] px-5 py-5 flex items-center justify-between">
        <p className="font-medium text-[16px] leading-normal text-dark">
          Creating tasks
        </p>
        <button
          onClick={onClose}
          className="size-6 overflow-clip relative cursor-pointer"
          aria-label="Close"
        >
          <div className="absolute inset-[8.33%]">
            <img
              alt=""
              src={imgCancelCircle}
              className="block max-w-none size-full"
            />
          </div>
        </button>
      </div>

      {/* Completion Banner */}
      <div className="mx-8 mt-5 h-[104px] rounded-[24px] border border-[#5c8ff7] relative overflow-hidden">
        {/* Background gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #0ea5e9 0%, #38bdf8 50%, #7dd3fc 100%)",
          }}
        />

        {/* Background decorative image */}
        <div className="absolute left-[calc(50%-45px)] top-[calc(50%+68px)] -translate-x-1/2 -translate-y-1/2 w-[1020px] h-[831px] rotate-[310.615deg] blur-md pointer-events-none opacity-30">
          <img
            alt=""
            src={imgImage341}
            className="w-[120.73%] h-[106.24%] -left-[21.02%] -top-[2.39%] absolute max-w-none"
          />
        </div>

        {/* Banner content */}
        <div className="relative z-10 h-full flex items-center justify-between px-8">
          <p className="font-medium text-[18px] leading-[1.4] text-white whitespace-pre-wrap">
            You&apos;ve finished!
          </p>
          <div className="relative inline-grid grid-cols-[max-content] grid-rows-[max-content] justify-items-start leading-0">
            <p className="col-1 row-1 font-medium text-[14px] leading-[1.3] text-dark ml-[15px] mt-[23px]">
              100%
            </p>
            <div className="col-1 row-1 relative inline-grid grid-cols-[max-content] grid-rows-[max-content] justify-items-start ml-0 mt-0">
              <div className="col-1 row-1 size-16">
                <img
                  alt=""
                  src={imgGroup2087325084}
                  className="block max-w-none size-full"
                />
              </div>
              <div className="col-1 row-1 size-12 ml-2 mt-2">
                <img
                  alt=""
                  src={imgEllipse7633}
                  className="block max-w-none size-full"
                  height="48"
                  width="48"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Title Section */}
      <div className="px-8 mt-[100px] flex flex-col items-center gap-[5px]">
        <div className="flex flex-col gap-5 items-start w-full max-w-[402px]">
          <div className="flex items-center justify-between w-full">
            <p className="font-medium text-[24px] leading-normal text-dark text-center w-full whitespace-pre-wrap">
              <span>Unlock </span>
              <span className="bg-gradient-to-r from-[#4d81ff] to-[#557edf] bg-clip-text text-transparent">
                Premium
              </span>
              <span> to elevate your program</span>
            </p>
          </div>
        </div>
        <p className="font-medium text-[14px] leading-[1.3] text-paragraph text-center whitespace-pre-wrap min-w-full">
          <span>Upgrade to </span>
          <span className="bg-gradient-to-r from-[#4d81ff] to-[#557edf] bg-clip-text text-transparent">
            Premium
          </span>
          <span>
            {` to maximize your earnings`}
            <br aria-hidden="true" />
            {` - advanced tools, faster payouts, and more exposure for your programs.`}
          </span>
        </p>
      </div>

      {/* Premium Plan Card */}
      <div className="mx-8 mt-[50px] mb-6">
        <div className="h-[190px] rounded-[30px] relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute left-[46px] -top-[271px] w-[565px] h-[565px] rotate-[300deg] blur-[35.93px] shadow-[0px_9.101px_124.61px_0px_rgba(255,255,255,0.2)]">
            <div className="absolute inset-[-5.72%_-2.83%_5.72%_2.83%] rounded-[273px] shadow-[0px_10.922px_87.374px_0px_rgba(121,165,250,0.5)]">
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[273px]">
                <img
                  alt=""
                  src={imgLogo}
                  className="absolute left-[-36.44%] max-w-none size-[173.7%] top-[-36.04%]"
                />
              </div>
            </div>
            <div className="absolute inset-[30%]">
              <img
                alt=""
                src={imgGroup12871}
                className="block max-w-none size-full"
              />
            </div>
          </div>

          {/* Card gradient background */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #2563eb 0%, #60a5fa 50%, #93c5fd 100%)",
            }}
          />

          {/* Card content */}
          <div className="relative z-10 h-full flex flex-col justify-between p-8">
            <div className="flex items-start justify-between">
              <p className="font-medium text-[20px] leading-normal text-white">
                Premium Plan
              </p>

              {/* Crown icon */}
              <div className="relative size-14 overflow-clip">
                <div className="inline-flex size-[40.5px] items-center justify-center rounded-full bg-white/10 p-[9px]">
                  <Icon name="crown" width={24} height={27} />
                </div>
              </div>
            </div>

            {/* Recommended badge */}
            <div className="absolute left-1/2 top-[35px] -translate-x-1/2 bg-white h-6 rounded-[12px] px-2 flex items-center justify-center">
              <p className="font-medium text-[10px] leading-normal text-dark text-center whitespace-pre-wrap">
                Recommended
              </p>
            </div>

            {/* Price section */}
            <div className="flex flex-col items-start gap-0">
              <div className="flex items-center gap-2 text-white">
                <p className="font-semibold text-[36px] leading-normal">$29</p>
                <p className="font-normal text-[14px] leading-[1.3]">
                  / per month
                </p>
              </div>
              <p className="font-medium text-[14px] leading-[1.3] text-white mt-1">
                Billed monthly • Cancel anytime
              </p>
              <div className="absolute left-[100px] size-1 top-[62px]">
                <img
                  alt=""
                  src={imgEllipse7617}
                  className="block max-w-none size-full"
                />
              </div>
            </div>

            {/* Pro Coach badge */}
            <div className="absolute right-4 bottom-[32px] h-8 w-[92px] rounded-[44px] bg-white/15 flex items-center justify-center">
              <p className="font-medium text-[12px] leading-[1.3] text-white">
                Pro Coach
              </p>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="mt-6 flex flex-col gap-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex items-center justify-between pb-2 ${
                index < features.length - 1 ? "border-b border-[#f2f7ff]" : ""
              }`}
            >
              <div className="flex items-center gap-2">
                <div className="size-4 overflow-clip relative">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-2">
                    <img
                      alt=""
                      src={imgEllipse7620}
                      className="block max-w-none size-full"
                    />
                  </div>
                </div>
                <p className="font-medium text-[14px] leading-[1.3] text-dark">
                  {feature}
                </p>
              </div>
              <div className="size-8 overflow-clip relative">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-5">
                  <div className="absolute inset-[8.33%]">
                    <img
                      alt=""
                      src={imgCheckCircle}
                      className="block max-w-none size-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[#ebf1ff] px-5 py-5 flex items-center justify-between">
        <button
          onClick={onNeedHelp}
          className="rounded-[61px] px-4 py-3 font-medium text-[14px] leading-[1.3] bg-gradient-to-r from-[#4d81ff] to-[#6790f0] bg-clip-text text-transparent cursor-pointer"
        >
          Need Help
        </button>
        <div className="flex items-center gap-5">
          <button
            onClick={onSkip}
            className="font-medium text-[14px] leading-[1.3] bg-gradient-to-r from-[#4d81ff] to-[#6790f0] bg-clip-text text-transparent cursor-pointer"
          >
            Skip for now
          </button>
          <AnimatedButton
            onClick={onGetStarted}
            style={{
              borderRadius: "61px",
              background:
                "linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%)",
            }}
            className="flex items-center justify-center gap-3 text-white font-medium text-[14px] px-4 py-3 rounded-[61px]"
          >
            Get Started
          </AnimatedButton>
        </div>
      </div>
    </div>
  );
}
