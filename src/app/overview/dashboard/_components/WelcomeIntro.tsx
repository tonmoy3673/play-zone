type WelcomeCardItem = {
  id: string;
  title: string;
  subtitle: string;
  avatars?: string[];
  extraCount?: number;
};

// Assets extracted from the provided Figma node
const imgAsset24X8 =
  "https://www.figma.com/api/mcp/asset/609675d2-0f0a-485a-a881-0cbc9841e392";
const imgImage401 =
  "https://www.figma.com/api/mcp/asset/741406da-b8fc-48ee-ae42-4bbd20ca9a60";
const imgRectangle10830 =
  "https://www.figma.com/api/mcp/asset/01cc4705-5bf2-409e-a936-4c54711d724a";

const defaultItems: WelcomeCardItem[] = [
  {
    id: "1",
    title: "Coaches who finish get 1.8× more engagement",
    subtitle: "Join 2,847 successful coaches already using CoachPro",
    avatars: [imgImage401, imgRectangle10830, imgImage401],
    extraCount: 12,
  },
];

export default function WelcomeIntro({
  items = defaultItems,
}: {
  items?: WelcomeCardItem[];
}): JSX.Element {
  return (
    <div className="relative w-full overflow-clip rounded-[24px] bg-white/30">
      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#ebf1ff] pb-4">
          <p className="text-[16px] font-medium leading-[1.5] text-[#141b34]">
            Welcome to Playerzone
          </p>
          <button
            type="button"
            aria-label="Close"
            className="inline-flex size-6 items-center justify-center rounded-full bg-white/60"
          >
            <span className="block size-2 rounded-full bg-[#141b34]" />
          </button>
        </div>

        {/* Title + Logo */}
        <div className="mt-8 flex flex-col items-center text-center">
          <div className="h-12 w-[55px]">
            <img
              src={imgAsset24X8}
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
          <h2 className="mt-3 text-[30px] font-medium leading-[1.5] text-[#141b34]">
            <span className="mr-1">Welcome to</span>
            <span className="font-semibold">PlayerZone</span>, Coach.
          </h2>
          <p className="mt-2 max-w-[700px] text-[14px] font-normal leading-[1.3] text-[#141b34]/70">
            You’re now part of an elite community of coaches and athletes. This
            is where you transform your knowledge into a professional business
            and build your legacy.
          </p>
        </div>

        {/* Cards mapped from collection */}
        <div className="mt-8 flex justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((card) => (
            <div
              key={card.id}
              className="rounded-[16px] bg-white/60 px-6 py-6 text-center"
            >
              {/* Avatars row */}
              <div className="mb-4 flex items-center justify-center">
                <div className="flex -space-x-3">
                  {(card.avatars ?? []).slice(0, 3).map((src, idx) => (
                    <div
                      key={`${card.id}-avatar-${idx}`}
                      className="relative size-12 shrink-0 rounded-full border border-[#5c8ff7] overflow-hidden"
                    >
                      <img
                        src={src}
                        alt=""
                        className="absolute inset-0 size-full object-cover"
                      />
                    </div>
                  ))}
                  {typeof card.extraCount === "number" ? (
                    <div className="inline-flex size-12 items-center justify-center rounded-full border border-[#68b0ea] bg-white/60 text-[16px] font-medium text-[#141b34]">
                      +{card.extraCount}
                    </div>
                  ) : null}
                </div>
              </div>

              <p className="text-[18px] font-medium leading-[1.4] text-[#141b34]">
                {card.title}
              </p>
              <p className="mt-1 text-[14px] font-normal leading-[1.3] text-[#141b34]/70">
                {card.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Dots + CTA */}
        <div className="mt-8 flex flex-col items-center">
          <div className="flex items-center gap-1.5">
            <span className="h-[6px] w-8 rounded-[6px] border border-[#1556d8]/15" />
            <span className="h-[6px] w-4 rounded-[6px] bg-[#457ff3]/15" />
            <span className="h-[6px] w-4 rounded-[6px] bg-[#457ff3]/15" />
          </div>
          <button
            type="button"
            className="mt-6 inline-flex items-center justify-center rounded-[61px] bg-[#1556d8] px-5 py-3 text-[14px] font-medium text-white"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
