type ProgramCard = {
  id: string;
  title: string;
  coachName: string;
  price: string;
  image: string;
  participants: string;
  duration: string;
  rating: number;
  featured?: boolean;
};

// Images from the provided Figma node for quick parity
const imgCenter =
  "https://www.figma.com/api/mcp/asset/fe5fbd0e-c951-4d4c-a4af-e1e9e0da78a1"; // image 47
const imgLeft =
  "https://www.figma.com/api/mcp/asset/a4645bc1-3b9b-4437-bb6c-6c7032ea20c5"; // image 380
const imgRight =
  "https://www.figma.com/api/mcp/asset/741406da-b8fc-48ee-ae42-4bbd20ca9a60"; // image 401 (alt)
const imgBackgroun19 =
  "https://www.figma.com/api/mcp/asset/6c0987a2-7815-427b-85ad-70efac592f50";
const imgImage341 =
  "https://www.figma.com/api/mcp/asset/a12520e4-fd03-4f5f-9a4b-8acfd4bcb1c3";

const defaultPrograms: ProgramCard[] = [
  {
    id: "p1",
    title: "James Wilson Elite Soccer Club",
    coachName: "Coach James Wilson",
    price: "$100",
    image: imgCenter,
    participants: "3.4K+",
    duration: "6 months",
    rating: 4.0,
    featured: true,
  },
  {
    id: "p2",
    title: "MMA Long Beach",
    coachName: "Coach Rivera",
    price: "$59",
    image: imgRight,
    participants: "2.1K+",
    duration: "8 weeks",
    rating: 4.7,
  },
  {
    id: "p3",
    title: "Youth Academy – Finishing School",
    coachName: "Coach Martins",
    price: "$79",
    image: imgLeft,
    participants: "1.2K+",
    duration: "10 weeks",
    rating: 4.5,
  },
];

export default function FirstProgram({
  programs = defaultPrograms,
}: {
  programs?: ProgramCard[];
}): JSX.Element {
  const [center, left, right] = [
    programs[0],
    programs[1] ?? programs[0],
    programs[2] ?? programs[0],
  ];

  return (
    <div className="relative w-full overflow-clip rounded-[24px] bg-white/30">
      <div className="p-6 md:p-8">
        {/* Decorative glows from Figma */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[60px] h-[540px] w-[663px] -translate-x-1/2 rotate-[60deg] -scale-y-100 blur-md opacity-30">
            <img src={imgImage341} alt="" className="size-full object-cover" />
          </div>
          <div className="absolute left-1/2 top-[120px] h-[650px] w-[650px] -translate-x-1/2 rotate-[210deg] -scale-y-100 blur-[60px] opacity-80">
            <img src={imgBackgroun19} alt="" className="size-full" />
          </div>
        </div>

        {/* Centered carousel-style cards */}
        <div className="relative mx-auto mt-4 h-[258px] w-full max-w-[372px] md:max-w-[740px]">
          {/* Left preview card */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-[209.6px] w-[303px] -translate-x-[calc(50%+160px)] rounded-[6.279px] border-[4.874px] border-white/60 opacity-60 blur-[0.5px]">
            <CardImage image={left.image} />
            <CardOverlay program={left} compact />
          </div>
          {/* Right preview card */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-[209.6px] w-[303px] -translate-x-[calc(50%-160px)] rounded-[6.279px] border-[4.874px] border-white/60 opacity-60 blur-[0.5px]">
            <CardImage image={right.image} />
            <CardOverlay program={right} compact />
          </div>
          {/* Center featured card */}
          <div className="absolute left-1/2 top-0 h-[258px] w-[372px] -translate-x-1/2 rounded-[7.729px] border-[6px] border-white/40 bg-white/10 shadow-[0_20px_70px_rgba(0,0,0,0.08)] backdrop-blur">
            <CardImage image={center.image} />
            <CardOverlay program={center} />
          </div>
        </div>

        {/* Heading + copy */}
        <div className="mt-10 text-center">
          <h2 className="text-[30px] font-medium leading-[1.5] text-[#141b34]">
            Start Building Your Coaching Empire
          </h2>
          <p className="mx-auto mt-2 max-w-[720px] text-[14px] leading-[1.3] text-[#141b34]/70">
            Every great coach needs a platform. PlayerZone provides you with all
            the tools to manage your athletes, create powerful programs, and
            monetize your expertise—all in one place. Your journey to scale
            starts now.
          </p>
        </div>

        {/* Dots */}
        <div className="mt-5 flex items-center justify-center gap-1.5">
          <span className="h-[6px] w-4 rounded-[6px] bg-[#457ff3]/15" />
          <span className="h-[6px] w-8 rounded-[6px] border border-[#1556d8]/15" />
          <span className="h-[6px] w-4 rounded-[6px] bg-[#457ff3]/15" />
        </div>

        {/* Continue CTA */}
        <div className="mt-6 flex items-center justify-center">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-[61px] bg-[#1556d8] px-5 py-3 text-[14px] font-medium text-white"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

function CardImage({ image }: { image: string }): JSX.Element {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[inherit]">
      <img src={image} alt="" className="size-full object-cover" />
    </div>
  );
}

function CardOverlay({
  program,
  compact = false,
}: {
  program: ProgramCard;
  compact?: boolean;
}): JSX.Element {
  return (
    <div className="absolute inset-0 flex flex-col justify-between p-5">
      {/* Top row: Featured + more */}
      <div className="flex items-start justify-between">
        {program.featured ? (
          <span className="rounded-[6px] bg-[#ff7a00] px-2 py-1 text-[10px] font-semibold text-white">
            Featured
          </span>
        ) : (
          <span />
        )}
        <span className="inline-flex size-[26px] items-center justify-center rounded-full bg-white/60">
          <span className="block size-[3px] rounded-full bg-[#141b34]" />
        </span>
      </div>

      {/* Content block */}
      <div className="space-y-3">
        <div className="space-y-1">
          <p
            className={[
              "text-[#141b34] font-semibold leading-[1.5] whitespace-pre-wrap",
              compact ? "text-[13px]" : "text-[11.6px]",
            ].join(" ")}
          >
            {program.title}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-block size-4 rounded-full bg-white/60" />
              <p className="text-[12px] font-medium leading-[1.4] text-[#141b34]">
                {program.coachName}
              </p>
            </div>
            <p className="text-[12px] font-semibold text-[#141b34]">
              {program.price}
            </p>
          </div>
        </div>

        <div className="h-px w-full bg-[#141b34]/10" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="inline-block size-4 rounded-full bg-[#1556d8]/10" />
            <p className="text-[12px] font-semibold leading-[1.4] text-[#141b34]">
              {program.participants}
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="inline-block size-4 rounded-full bg-[#1556d8]/10" />
            <p className="text-[12px] font-medium leading-[1.4] text-[#141b34]">
              {program.duration}
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => {
                const filled = i < Math.round(program.rating);
                return (
                  <span
                    key={`${program.id}-star-${i}`}
                    className={[
                      "mr-0.5 inline-block size-3 rounded-[2px]",
                      filled ? "bg-[#ffb545]" : "bg-[#e5e7eb]",
                    ].join(" ")}
                  />
                );
              })}
            </div>
            <p className="text-[12px] font-medium leading-[1.3] text-[#141b34]">
              {program.rating.toFixed(1)}
            </p>
          </div>
        </div>

        {/* Subtle progress rail like in Figma */}
        <div className="h-[14px] w-full rounded-full bg-[#e6ecff]">
          <div className="h-full w-1/2 rounded-full bg-[#bcd0ff]" />
        </div>

        <button
          type="button"
          className="inline-flex h-[26px] w-full items-center justify-center rounded-[61px] border border-[#1556d8]/30 bg-[#5c8ff7]/30 px-3 text-[12px] font-medium text-white"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
