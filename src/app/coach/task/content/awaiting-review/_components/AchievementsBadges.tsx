type Stat = {
  id: string;
  value: string;
  label: string;
};

type Badge = {
  id: string;
  title: string;
  subtitle: string;
  gradientFrom: string;
  gradientTo: string;
  shadowColor: string;
};

// Extracted assets from the Figma node (valid for ~7 days)
const imgCover =
  "https://www.figma.com/api/mcp/asset/fddee8b1-4b13-43a2-9cdf-381f20332d2b"; // image 48
const imgAvatar =
  "https://www.figma.com/api/mcp/asset/f6845621-e1ed-42e3-9370-a91f84ef97b0"; // image 400
const imgBanana =
  "https://www.figma.com/api/mcp/asset/744d9f57-28cf-4b84-9c1a-6167d19f87ab"; // nano-banana

const defaultStats: Stat[] = [
  { id: "rank", value: "#12", label: "Current Rank" },
  { id: "points", value: "95 pts", label: "Total Points" },
  { id: "streak", value: "🔥 2 Days", label: "Current Streak" },
  { id: "program", value: "0%", label: "Ongoing Program" },
];

const defaultBadges: Badge[] = [
  {
    id: "streak-master",
    title: "Streak Master",
    subtitle: "7+ days",
    gradientFrom: "#042c78",
    gradientTo: "#0050ef",
    shadowColor: "#003fbc",
  },
  {
    id: "century-club",
    title: "Century Club",
    subtitle: "Completed 30 sessions",
    gradientFrom: "#782f04",
    gradientTo: "#ef5000",
    shadowColor: "#c54200",
  },
  {
    id: "century-tasks",
    title: "Century Club",
    subtitle: "100 tasks completed",
    gradientFrom: "#78046c",
    gradientTo: "#ef00d3",
    shadowColor: "#b0049c",
  },
  {
    id: "iron-discipline",
    title: "Iron Discipline",
    subtitle: "7+ days",
    gradientFrom: "#460478",
    gradientTo: "#8f00ef",
    shadowColor: "#7100bc",
  },
  {
    id: "task-crusher",
    title: "Task Crusher",
    subtitle: "Completed 30 sessions",
    gradientFrom: "#786704",
    gradientTo: "#efef00",
    shadowColor: "#c5a100",
  },
  {
    id: "quiz-ace",
    title: "Quiz Ace",
    subtitle: "100 tasks completed",
    gradientFrom: "#2d7804",
    gradientTo: "#00ef9f",
    shadowColor: "#24b004",
  },
];

export default function AchievementsBadges({
  name = "Jason Martinez",
  joined = "Joined: Jan 2025",
  lastOnline = "Last online: 30 min ago",
  stats = defaultStats,
  badges = defaultBadges,
}: {
  name?: string;
  joined?: string;
  lastOnline?: string;
  stats?: Stat[];
  badges?: Badge[];
}): React.ReactElement {
  return (
    <div className="relative w-96 overflow-clip rounded-[24px] bg-white/30">
      {/* Top cover */}
      <div className="relative h-[149px] w-full">
        <img
          src={imgCover}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Darken overlay to improve text contrast if needed */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/10" />
      </div>

      <div className="p-5">
        {/* Profile */}
        <div className="flex flex-col gap-3">
          <div className="w-24">
            <div className="relative aspect-square rounded-full border-2 border-white overflow-hidden">
              <img
                src={imgAvatar}
                alt=""
                className="absolute inset-0 size-full object-cover"
              />
            </div>
          </div>
          <div className="max-w-[252px]">
            <p className="text-[20px] font-medium leading-[1.5] text-dark">
              {name}
            </p>
            <div className="mt-1 flex items-center justify-between text-[12px] leading-[1.4] text-dark">
              <span>{joined}</span>
              <span>{lastOnline}</span>
            </div>
          </div>
        </div>

        {/* CTA divider section */}
        <div className="mt-6">
          <button
            type="button"
            className="w-full rounded-[12px] px-5 py-[11px] text-[16px] font-medium text-white"
            style={{ background: "linear-gradient(90deg, #1556d8, #457ff3)" }}
          >
            Add Program Position
          </button>
          <div className="mt-5 h-px w-full bg-dark/10" />
        </div>

        {/* Quick Stats (2x2) */}
        <div className="mt-6 grid grid-cols-2 gap-[9px]">
          {stats.slice(0, 4).map((s) => (
            <div key={s.id} className="rounded-[16px] bg-white p-5">
              <p className="text-[24px] font-semibold leading-[1.5] text-dark">
                {s.value}
              </p>
              <p className="text-[12px] font-medium leading-[1.4] text-dark/70">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Earned Badges */}
        <div className="mt-6">
          <p className="text-[16px] font-medium leading-[1.5] text-dark">
            Earned Badges
          </p>
          <div className="mt-4 grid grid-cols-2 gap-[9px]">
            {badges.map((b) => (
              <BadgeCard key={b.id} badge={b} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function BadgeCard({ badge }: { badge: Badge }): React.ReactElement {
  const { gradientFrom, gradientTo, shadowColor, title, subtitle } = badge;
  return (
    <div
      className="relative size-[153px] overflow-clip rounded-[14px]"
      style={{
        background: `linear-gradient(180deg, ${gradientFrom}, ${gradientTo})`,
        boxShadow: `0px 3px 0px 0px ${shadowColor}`,
      }}
    >
      {/* Glow ellipse */}
      <div className="absolute left-1/2 top-[8px] h-[86px] w-[86px] -translate-x-1/2 rounded-full bg-white/10 blur-[2px]" />

      {/* Banana/art */}
      <div className="absolute left-1/2 top-[18px] h-[68px] w-[70px] -translate-x-1/2">
        <img src={imgBanana} alt="" className="size-full object-contain" />
      </div>

      {/* Title/subtitle */}
      <div className="absolute left-1/2 top-[101px] w-[120px] -translate-x-1/2 text-center text-white">
        <p className="text-[12px] font-medium leading-[1.4]">{title}</p>
        <p className="mt-[2px] text-[10px] leading-[1.4] opacity-80">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
