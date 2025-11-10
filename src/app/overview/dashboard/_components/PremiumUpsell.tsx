import React from "react";

// Figma assets (temporary CDN links that may expire after ~7 days)
const imgImage341 =
  "https://www.figma.com/api/mcp/asset/8c95dd43-b63a-47f2-bf4f-0df373658e77";
const imgEllipse7633 =
  "https://www.figma.com/api/mcp/asset/bfcc4bef-2a99-465f-973e-ec1748c62f69";
const imgLogo =
  "https://www.figma.com/api/mcp/asset/1f448a4b-9da4-482c-9d05-e3d6421cabef";
const imgCancel =
  "https://www.figma.com/api/mcp/asset/4da6711d-1751-4d19-b207-2ce82cc591e1";
const imgRing =
  "https://www.figma.com/api/mcp/asset/0ecc8566-b28e-40f6-9b0e-c609ce3b7476";
const imgGroup12871 =
  "https://www.figma.com/api/mcp/asset/173fe26a-8c68-461f-8925-25131f95f322";
const imgEllipse7617 =
  "https://www.figma.com/api/mcp/asset/f986cc13-f956-41a4-ada3-699a38fb613f";
const imgCrown =
  "https://www.figma.com/api/mcp/asset/3dd759f1-8604-4991-a936-cf2a0b654350";
const imgEllipse7620 =
  "https://www.figma.com/api/mcp/asset/088c1a96-cc42-46c9-8f23-8db6f3dfaf2a";
const imgCheckCircle =
  "https://www.figma.com/api/mcp/asset/bd3d18f8-adfe-48df-b404-c38d14234a69";

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
  onClose,
  onGetStarted,
  onNeedHelp,
  onSkip,
  features = defaultFeatures,
}: {
  onClose?: () => void;
  onGetStarted?: () => void;
  onNeedHelp?: () => void;
  onSkip?: () => void;
  features?: Feature[];
}): JSX.Element {
  return (
    <div className="relative w-full overflow-clip rounded-[16px] bg-white">
      {/* Decorative blurred background image from Figma */}
      <div className="pointer-events-none absolute -bottom-[1050px] left-[calc(50%+700px)] -translate-x-1/2">
        <div className="rotate-[60deg] -scale-y-100">
          <div className="relative h-[540px] w-[663px] blur-md opacity-30">
            <img
              alt=""
              src={imgImage341}
              className="absolute left-[-21%] top-[-2.5%] h-[106%] w-[121%] max-w-none"
            />
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="flex w-full items-center justify-between border-b border-[#ebf1ff] p-5">
        <p className="text-[16px] font-medium leading-[1.5] text-[#141b34]">
          Creating tasks
        </p>
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="relative inline-flex size-6 items-center justify-center overflow-clip rounded-full"
        >
          <img alt="" src={imgCancel} className="block size-full" />
        </button>
      </div>

      {/* Top completion banner */}
      <div className="relative mx-8 mt-6 h-[104px] overflow-clip rounded-[24px] border border-[#5c8ff7]">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[831px] w-[1021px] -translate-x-[calc(50%+45px)] -translate-y-[calc(50%+68px)] rotate-[310.615deg] blur-md">
          <img alt="" src={imgImage341} className="size-full" />
        </div>
        <div className="absolute inset-0" />
        <div className="relative z-[1] flex h-full items-center justify-between px-8">
          <p className="text-[18px] font-medium leading-[1.4] text-white">
            You’ve finished!
          </p>
          <div className="relative h-16 w-16">
            <img alt="" src={imgRing} className="absolute inset-0 size-full" />
            <img
              alt=""
              src={imgEllipse7633}
              className="absolute left-1/2 top-1/2 size-12 -translate-x-1/2 -translate-y-1/2"
              width={48}
              height={48}
            />
            <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[14px] font-medium text-[#141b34]">
              100%
            </p>
          </div>
        </div>
      </div>

      {/* Title and subtitle */}
      <div className="mx-8 mt-10 flex flex-col items-center text-center">
        <h2 className="w-full max-w-[510px] text-center text-[24px] font-medium leading-[1.5] text-[#141b34]">
          <span>Unlock </span>
          <span className="bg-gradient-to-r from-[#4d81ff] to-[#9ab8ff] bg-clip-text text-transparent">
            Premium
          </span>
          <span> to elevate your program</span>
        </h2>
        <p className="mt-2 max-w-[680px] text-[14px] font-medium leading-[1.3] text-[#000]/60">
          Upgrade to{" "}
          <span className="bg-gradient-to-r from-[#4d81ff] to-[#9ab8ff] bg-clip-text text-transparent">
            Premium
          </span>{" "}
          to maximize your earnings
          <br />
          - advanced tools, faster payouts, and more exposure for your programs.
        </p>
      </div>

      {/* Body: plan card + features */}
      <div className="mx-auto mt-8 grid w-full max-w-[930px] grid-cols-1 gap-6 px-8 md:grid-cols-[1fr]">
        <div className="relative h-[190px] w-full overflow-clip rounded-[30px]">
          {/* Logo glow */}
          <div className="pointer-events-none absolute left-[46px] -top-[271px] rotate-[300deg]">
            <div className="relative size-[565px] blur-[36px] shadow-[0px_9.101px_124.61px_0px_rgba(255,255,255,0.2)]">
              <div className="absolute inset-[-5.72%_-2.83%_5.72%_2.83%] rounded-[273px] shadow-[0px_10.922px_87.374px_0px_rgba(121,165,250,0.5)]">
                <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[273px]">
                  <img
                    alt=""
                    src={imgLogo}
                    className="absolute left-[-36%] top-[-36%] size-[174%] max-w-none"
                  />
                </div>
              </div>
              <div className="absolute inset-[30%]">
                <img alt="" src={imgGroup12871} className="block size-full" />
              </div>
            </div>
          </div>

          {/* Content */}
          <p className="absolute left-8 top-8 text-[20px] font-medium leading-[1.5] text-white">
            Premium Plan
          </p>

          <div className="absolute left-8 top-[86px]">
            <div className="flex items-center gap-2 text-white">
              <p className="text-[36px] font-semibold leading-[1.5]">$29</p>
              <p className="text-[14px] font-normal leading-[1.3]">/ per month</p>
            </div>
            <p className="text-[14px] font-medium leading-[1.3] text-white">
              Billed monthly &nbsp;&nbsp;&nbsp; Cancel anytime
            </p>
            <img
              alt=""
              src={imgEllipse7617}
              className="absolute left-[100px] top-[62px] size-1"
            />
          </div>

          <div className="absolute right-4 top-8 size-14 overflow-clip rounded-full">
            <div className="absolute left-1/2 top-1/2 size-8 -translate-x-1/2 -translate-y-1/2">
              <img alt="" src={imgCrown} className="block size-full" />
            </div>
          </div>

          <div className="absolute left-1/2 top-[35px] -translate-x-1/2">
            <div className="h-6 w-[98px] rounded-[12px] bg-white text-center">
              <span className="inline-block translate-y-[6px] text-[10px] font-medium text-[#141b34]">
                Recommended
              </span>
            </div>
          </div>

          {/* Subtle label on the right */}
          <div className="absolute right-6 top-[126px] h-8 w-[92px] rounded-[44px] bg-white/15">
            <div className="flex h-full items-center justify-center text-[12px] font-medium text-white">
              Pro Coach
            </div>
          </div>

          {/* Background: gradient-ish overlay */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#2755d8] via-[#3d6df0] to-[#1b3fb3]" />
        </div>

        {/* Features list */}
        <div className="w-full">
          <ul className="divide-y divide-[#f2f7ff]">
            {features.map((f) => (
              <li
                key={f.id}
                className="flex items-center justify-between py-2.5"
              >
                <div className="flex items-center gap-2">
                  <span className="relative inline-flex size-4 items-center justify-center rounded-full">
                    <img
                      alt=""
                      src={imgEllipse7620}
                      className="absolute size-2"
                    />
                  </span>
                  <p className="text-[14px] font-medium leading-[1.3] text-[#141b34]">
                    {f.label}
                  </p>
                </div>
                <span className="inline-flex size-8 items-center justify-center rounded-full">
                  <img alt="" src={imgCheckCircle} className="size-5" />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 flex w-full items-center justify-between border-t border-[#ebf1ff] p-5">
        <button
          type="button"
          onClick={onNeedHelp}
          className="rounded-[61px] px-4 py-3 text-[14px] font-medium leading-[1.3] text-transparent bg-gradient-to-r from-[#4d81ff] to-[#9ab8ff] bg-clip-text"
        >
          Need Help
        </button>
        <div className="h-[42px] w-[110px]" aria-hidden="true" />
        <div className="flex items-center gap-5">
          <button
            type="button"
            onClick={onSkip}
            className="text-[14px] font-medium leading-[1.3] text-transparent bg-gradient-to-r from-[#4d81ff] to-[#9ab8ff] bg-clip-text"
          >
            Skip for now
          </button>
          <button
            type="button"
            onClick={onGetStarted}
            className="rounded-[61px] border border-[#1556d8]/30 px-4 py-3 text-[14px] font-medium text-white bg-[#1556d8]"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}


