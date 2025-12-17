import CommunityFeed from "./_components/CommunityFeed";
import FinancialOverview from "./_components/FinancialOverview";
import RecentActivity from "./_components/recent";
import TodaysTask from "./_components/TodaysTask";
import YourAthletesTasks from "./_components/YourAthletesTasks";
const imgImage341 =
  "https://www.figma.com/api/mcp/asset/86eb9ce2-d6e7-4f4a-9571-5a8c5948f828";
const imgLogo =
  "https://www.figma.com/api/mcp/asset/a9088042-6dd8-4ab6-90d6-79315ea515e3";
const imgImage188 =
  "https://www.figma.com/api/mcp/asset/dd005ebb-53e3-4c06-b28d-0d3b3b839935";
const imgArrow =
  "https://www.figma.com/api/mcp/asset/dfa79fb6-4235-4448-b3e1-946d4db37bbb";
const imgGlobal =
  "https://www.figma.com/api/mcp/asset/1df550bc-d855-40d7-acfa-b58212748254";
const imgGroup12871 =
  "https://www.figma.com/api/mcp/asset/b2251fe0-f7fe-4bf6-ae47-d55c0875cb57";
const imgCrown =
  "https://www.figma.com/api/mcp/asset/39b8fd48-f212-4d2d-8b9c-0c2aa8178715";

export default function Page() {
  return (
    <div>
      {/* news card */}
      <div className="relative w-full overflow-hidden rounded-[24px] bg-white/30">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-[20px] font-semibold leading-[1.5] text-dark">
              News
            </h2>
            <button
              type="button"
              aria-label="Next"
              className="relative inline-flex size-10 items-center justify-center rounded-full border border-white bg-white/65"
            >
              <img
                src={imgArrow}
                alt=""
                className="pointer-events-none size-5 -rotate-90"
              />
            </button>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
            {/* Left card */}
            <div className="relative h-[285px] w-full overflow-hidden rounded-[24px] bg-white/60 p-6">
              <div className="pointer-events-none absolute -top-5 left-1/2 -z-10 -translate-x-1/2 -scale-y-100 rotate-60">
                <img
                  src={imgImage341}
                  alt=""
                  className="h-[352px] w-[433px] blur-md opacity-50"
                />
              </div>

              <div className="flex h-full flex-col justify-between">
                <div className="space-y-4">
                  <div className="inline-flex size-10 items-center justify-center rounded-full bg-white/60 p-[9px]">
                    <img src={imgGlobal} alt="" className="h-[22px] w-[22px]" />
                  </div>

                  <div className="space-y-2">
                    <p className="w-full max-w-[345px] text-[18px] font-semibold leading-[1.5] text-dark">
                      Share your expertise with the community!
                    </p>
                    <p className="w-full max-w-[342px] text-[12px] font-normal leading-[1.4] text-dark/70">
                      Exciting news! You can now build your brand by posting in
                      the Community Feed. Share insights, drills, and connect
                      with athletes globally. Turn your expertise into influence
                      and income on PlayerZone
                    </p>
                  </div>
                </div>

                <div>
                  <button
                    type="button"
                    className="inline-flex h-[34px] w-[142px] items-center justify-center rounded-full border border-[#1556d8]/30 px-3 py-1.5 text-[10px] font-medium text-white"
                  >
                    Explore Community
                  </button>
                </div>
              </div>
            </div>

            {/* Right card */}
            <div className="relative h-[285px] w-full overflow-hidden rounded-[24px] bg-[#3c6bda] p-6 text-white">
              {/* Decorative logo glow */}
              <div className="pointer-events-none absolute -top-[211px] left-5 -z-10 rotate-[210deg]">
                <div className="relative size-[471px] blur-[16px]">
                  <div className="absolute inset-0 rounded-[273px] shadow-[0_11px_87px_0_rgba(121,165,250,0.5)]">
                    <img
                      src={imgLogo}
                      alt=""
                      className="absolute left-[-36%] top-[-36%] size-[173.7%] max-w-none rounded-[273px]"
                    />
                  </div>
                  <div className="absolute inset-[30%]">
                    <img
                      src={imgGroup12871}
                      alt=""
                      className="block size-full max-w-none"
                    />
                  </div>
                </div>
              </div>

              <div className="relative flex h-full flex-col">
                <div className="inline-flex size-[40.5px] items-center justify-center rounded-full bg-white/10 p-[9px]">
                  <img src={imgCrown} alt="" className="h-[22px] w-[22px]" />
                </div>

                <div className="mt-4 space-y-2">
                  <p className="text-[18px] font-semibold leading-[1.5]">
                    Unlock Premium
                  </p>
                  <p className="w-[333px] text-[12px] font-normal leading-[1.4]">
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

                <img
                  src={imgImage188}
                  alt=""
                  className="pointer-events-none absolute right-[0px] top-[130px] h-[177px] w-[177px] mix-blend-color-burn"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* recent activity */}
      <FinancialOverview />
      <RecentActivity />
      <TodaysTask />
      <YourAthletesTasks />
      <CommunityFeed />
    </div>
  );
}
