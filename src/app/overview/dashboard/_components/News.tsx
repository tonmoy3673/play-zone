/* eslint-disable @next/next/no-img-element */
import Icon from "@/utils/icon";
import React from "react";

function News() {
  return (
    <div className="relative w-full overflow-hidden rounded-[24px] bg-white/30 border border-white">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-[20px] font-semibold leading-[1.5] text-[#141b34]">
            News
          </h2>
          <button
            type="button"
            aria-label="Next"
            className="relative inline-flex size-10 items-center justify-center rounded-full border border-white bg-white/65"
          >
            <Icon name="right_arrow" width={20} height={20} />
          </button>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
          {/* Left card */}

          <div className="bg-white bg-[url('/image341.svg')] h-[285px] bg-cover bg-center bg-no-repeat rounded-3xl border-2 max-w-md border-blue-300 p-6 flex flex-col items-center justify-center min-h-64  transition-shadow">
            <div className="flex h-full flex-col justify-between">
              <div className="space-y-4">
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
                <button
                  type="button"
                  style={{
                    borderRadius: "40px",
                    background:
                      "linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%)",
                  }}
                  className="inline-flex h-[34px] w-[142px] items-center justify-center rounded-full border border-[#1556d8]/30 px-3 py-1.5 text-[10px] font-medium text-white"
                >
                  Explore Community
                </button>
              </div>
            </div>
          </div>

          {/* Right card */}
          <div className="relative h-[285px] bg-cover bg-[url('/bg.png')] w-full overflow-hidden rounded-[24px] bg-[#3c6bda] p-6 text-white">
            {/* Decorative logo glow */}

            <div className="relative flex h-full flex-col">
              <div className="inline-flex size-[40.5px] items-center justify-center rounded-full bg-white/10 p-[9px]">
                <Icon name="crown" width={22} height={22} />
              </div>

              <div className="mt-4 space-y-2">
                <p className="text-[18px] font-semibold leading-[1.5]">
                  Unlock Premium
                </p>
                <p className=" text-[12px] font-normal leading-[1.4]">
                  Access advanced analytics, gain priority visibility for your
                  programs, and unlock exclusive tools designed to grow your
                  coaching business on PlayerZone.
                </p>
              </div>

              <button
                type="button"
                className="mt-auto inline-flex h-[35px] w-[127px] items-center justify-center rounded-full bg-white px-[7px] py-[8px] text-[10px] font-medium text-[#1556d8]"
              >
                Unlock Now
              </button>
              {/* 
              <img
                src={imgImage188}
                alt=""
                className="pointer-events-none absolute -right-[50px] -bottom-[70px] h-[177px] w-[177px] mix-blend-color-burn"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
