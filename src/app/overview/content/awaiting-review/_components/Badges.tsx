"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import Icon, { IconName } from "../../_components/icon";

type BadgeLevel = "Minor" | "Major";

type BadgeItem = {
  id: string;
  title: string;
  iconName: IconName;
  highlight?: boolean;
};

type MajorBadgeItem = {
  id: string;
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
  shadowColor: string;
};

const MINOR_BADGES: BadgeItem[] = [
  {
    id: "top-effort",
    title: "Top Effort",
    iconName: "analytics_up",
    highlight: true,
  },
  { id: "perfect-form", title: "Perfect Form", iconName: "tick_double_01" },
  { id: "creative", title: "Creative", iconName: "analytics_up" },
  { id: "quick-learner", title: "Quick Learner", iconName: "analytics_up" },
  {
    id: "consistent-progress",
    title: "Consistent Progress",
    iconName: "analytics_up",
  },
  {
    id: "needs-improvement",
    title: "Needs Improvement",
    iconName: "analytics_up",
  },
  {
    id: "retry-recommended",
    title: "Retry Recommended",
    iconName: "analytics_up",
  },
  { id: "focus-needed", title: "Focus Needed", iconName: "analytics_up" },
  { id: "missed-deadline", title: "Missed Deadline", iconName: "analytics_up" },
];

const MAJOR_BADGES: MajorBadgeItem[] = [
  {
    id: "streak-master",
    title: "Streak Master",
    description: "7+ days",
    gradientFrom: "#042c78",
    gradientTo: "#0050ef",
    shadowColor: "#003fbc",
  },
  {
    id: "marathoner",
    title: "Marathoner",
    description: "Completed 30 sessions",
    gradientFrom: "#782f04",
    gradientTo: "#ef5000",
    shadowColor: "#c54200",
  },
  {
    id: "century-club",
    title: "Century Club",
    description: "100 tasks completed",
    gradientFrom: "#78046c",
    gradientTo: "#ef00d3",
    shadowColor: "#b0049c",
  },
  {
    id: "iron-discipline",
    title: "Iron Discipline",
    description: "7+ days",
    gradientFrom: "#460478",
    gradientTo: "#8f00ef",
    shadowColor: "#7100bc",
  },
  {
    id: "task-crusher",
    title: "Task Crusher",
    description: "Completed 30 sessions",
    gradientFrom: "#786704",
    gradientTo: "#efef00",
    shadowColor: "#c5a100",
  },
  {
    id: "quiz-ace",
    title: "Quiz Ace",
    description: "100 tasks completed",
    gradientFrom: "#2d7804",
    gradientTo: "#00ef9f",
    shadowColor: "#24b004",
  },
];

const ROCKET_IMAGE_SRC = "/content/rocket.png";

type RgbColor = {
  r: number;
  g: number;
  b: number;
};

function hexToRgb(hex: string): RgbColor {
  const sanitized = hex.replace("#", "");
  const value = parseInt(sanitized, 16);

  return {
    r: (value >> 16) & 255,
    g: (value >> 8) & 255,
    b: value & 255,
  };
}

function hexToRgba(hex: string, alpha = 1) {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function RocketIcon({ color }: { color: string }) {
  return (
    <div className="relative h-[92px] w-[92px]">
      <Image
        src={ROCKET_IMAGE_SRC}
        alt="Rocket badge"
        width={92}
        height={92}
        className="h-full w-full rotate-15 object-contain"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rotate-15 rounded-[40px] opacity-80 mix-blend-screen"
        style={{
          background: `linear-gradient(145deg, ${hexToRgba(
            color,
            0.9
          )} 0%, ${hexToRgba(color, 0.45)} 55%, rgba(255,255,255,0.4) 100%)`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rotate-15 opacity-70"
        style={{
          background: `radial-gradient(circle at 45% 35%, ${hexToRgba(
            color,
            0.65
          )} 0%, transparent 55%)`,
          mixBlendMode: "screen",
          filter: "blur(5px)",
        }}
      />
    </div>
  );
}

function Particles() {
  const particles = [
    { x: 18, y: 18, size: 2.6, opacity: 0.4 },
    { x: 82, y: 15, size: 1.6, opacity: 0.5 },
    { x: 25, y: 44, size: 2.8, opacity: 0.35 },
    { x: 74, y: 36, size: 1.8, opacity: 0.45 },
    { x: 12, y: 62, size: 2.2, opacity: 0.35 },
    { x: 88, y: 57, size: 1.5, opacity: 0.4 },
    { x: 46, y: 26, size: 2.1, opacity: 0.35 },
    { x: 58, y: 70, size: 1.8, opacity: 0.45 },
    { x: 32, y: 76, size: 2.3, opacity: 0.35 },
    { x: 68, y: 82, size: 1.5, opacity: 0.35 },
    { x: 52, y: 18, size: 1.9, opacity: 0.4 },
    { x: 22, y: 51, size: 1.7, opacity: 0.45 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0">
      {particles.map((particle, index) => (
        <div
          key={index}
          className="absolute rounded-full bg-white mix-blend-screen"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            filter: "blur(0.25px)",
          }}
        />
      ))}
    </div>
  );
}

function OrbitLines({ color }: { color: string }) {
  const primary = hexToRgba(color, 0.35);
  const secondary = hexToRgba(color, 0.2);
  const accent = hexToRgba("#ffffff", 0.6);

  return (
    <svg
      viewBox="0 0 160 160"
      className="pointer-events-none absolute -inset-6 rotate-15 opacity-80 mix-blend-screen"
      aria-hidden
    >
      <path
        d="M6 60C46 18 114 18 154 60"
        stroke={primary}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M6 100C46 142 114 142 154 100"
        stroke={secondary}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <line
        x1="22"
        y1="72"
        x2="36"
        y2="66"
        stroke={accent}
        strokeOpacity="0.35"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <line
        x1="124"
        y1="92"
        x2="138"
        y2="86"
        stroke={accent}
        strokeOpacity="0.25"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="132" cy="32" r="2.4" fill={accent} />
      <circle cx="44" cy="116" r="1.6" fill={accent} opacity="0.4" />
    </svg>
  );
}

function Glow({ color }: { color: string }) {
  return (
    <>
      <div
        className="absolute left-1/2 top-6 h-[120px] w-[120px] -translate-x-1/2 rounded-full opacity-70 blur-[3px] mix-blend-screen"
        style={{
          background: `radial-gradient(circle, ${hexToRgba(
            color,
            0.55
          )} 0%, ${hexToRgba(color, 0.15)} 55%, transparent 75%)`,
        }}
      />
      <div className="absolute -left-20 -top-16 h-[220px] w-[260px] bg-white/12 blur-[80px] opacity-70" />
      <div className="absolute -right-16 top-10 h-[180px] w-[160px] bg-white/10 blur-3xl opacity-80" />
    </>
  );
}

function classNames(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

function BadgeCard({ badge }: { badge: BadgeItem }) {
  return (
    <div
      className={classNames(
        "flex flex-col items-center gap-5 p-5 rounded-[12px] text-center",
        "bg-[rgba(186,209,255,0.1)]",
        badge.highlight
          ? "border-2 border-[#5c8ff7]"
          : "border border-[#f5f6f8]"
      )}
    >
      <div className="relative w-6 h-6 overflow-hidden shrink-0">
        <Icon name={badge.iconName} height={24} width={24} />
      </div>
      <p className="text-[14px] font-medium leading-[1.3] text-dark-100 text-center">
        {badge.title}
      </p>
    </div>
  );
}

function MajorBadgeCard({ badge }: { badge: MajorBadgeItem }) {
  const accentColor = badge.gradientTo || badge.gradientFrom;

  return (
    <div
      className="relative isolate flex h-[192px] w-full flex-col items-center justify-between overflow-hidden rounded-[16px] p-6"
      style={{
        backgroundImage: `linear-gradient(180deg, ${badge.gradientFrom}, ${badge.gradientTo})`,
        boxShadow: `0px 3px 0px 0px ${badge.shadowColor}`,
      }}
    >
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <Glow color={accentColor} />
        <OrbitLines color={accentColor} />
        <Particles />
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div
          className="relative z-10"
          style={{
            filter: `drop-shadow(0 10px 20px ${hexToRgba(accentColor, 0.35)})`,
          }}
        >
          <RocketIcon color={accentColor} />
        </div>
      </div>
      <div className="z-10 space-y-1 text-center text-white">
        <p className="text-[14px] font-medium leading-[1.4] text-white">
          {badge.title}
        </p>
        <p className="text-[12px] font-medium leading-[1.4] text-white/70">
          {badge.description}
        </p>
      </div>
    </div>
  );
}

export default function Badges() {
  const [level, setLevel] = useState<BadgeLevel>("Minor");
  const [query, setQuery] = useState("");

  const minorBadges = useMemo<BadgeItem[]>(() => {
    if (!query.trim()) return MINOR_BADGES;
    const q = query.trim().toLowerCase();
    return MINOR_BADGES.filter((b) => b.title.toLowerCase().includes(q));
  }, [query]);

  const majorBadges = useMemo<MajorBadgeItem[]>(() => {
    if (!query.trim()) return MAJOR_BADGES;
    const q = query.trim().toLowerCase();
    return MAJOR_BADGES.filter(
      (b) =>
        b.title.toLowerCase().includes(q) ||
        b.description.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="bg-white rounded-2xl p-5 relative">
      {/* Header with info banner */}
      <div className="flex items-start justify-between mb-4">
        <p className="text-[16px] font-medium leading-normal text-dark-100">
          Badge
        </p>
        {level === "Major" && (
          <div className="bg-[rgba(210,210,210,0.1)] rounded-[7px] px-3  flex items-center gap-3 max-w-[446px]">
            <Icon name="alert_circle" height={16} width={16} />
            <p className="text-[8px] font-normal leading-[1.4] text-paragraph-dark">
              Major badges are designed to mark significant milestones and
              achievements. They should be awarded gradually and with intention,
              not for every task.
            </p>
          </div>
        )}
      </div>

      {/* Search and level selector */}
      <div className="mt-4 flex flex-col gap-5">
        {/* Search */}
        <label className="bg-[rgba(210,210,210,0.1)] h-12 rounded-2xl px-4 py-[14px] flex items-center gap-3">
          <Icon name="search_01" height={20} width={20} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Badge"
            className="bg-transparent outline-none text-[12px] leading-[1.4] text-dark-100 w-full placeholder:text-dark-100/60"
          />
        </label>

        {/* Segmented control */}
        <div className="bg-[#f6fdff] border border-[#edf2f3] h-12 rounded-2xl flex items-center px-1">
          <button
            type="button"
            onClick={() => setLevel("Minor")}
            className={classNames(
              "h-10 w-1/2 rounded-xl flex items-center justify-center transition-colors",
              level === "Minor"
                ? "border border-[rgba(21,86,216,0.3)] text-white bg-primary-gradient"
                : "text-dark-100"
            )}
          >
            <span className="text-[14px] font-medium leading-[1.3]">Minor</span>
          </button>
          <button
            type="button"
            onClick={() => setLevel("Major")}
            className={classNames(
              "h-10 w-1/2 rounded-xl flex items-center justify-center transition-colors",
              level === "Major"
                ? "border border-[rgba(21,86,216,0.3)] text-white bg-primary-gradient"
                : "text-dark-100"
            )}
          >
            <span className="text-[14px] font-medium leading-[1.3]">Major</span>
          </button>
        </div>
      </div>

      {/* Grid of badges */}
      {level === "Minor" ? (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {minorBadges.map((badge) => (
            <BadgeCard key={badge.id} badge={badge} />
          ))}
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {majorBadges.map((badge) => (
            <MajorBadgeCard key={badge.id} badge={badge} />
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="mt-6 flex gap-2">
        <button
          type="button"
          className="flex-1 bg-linear-to-b from-[rgba(69,127,243,0.05)] to-[rgba(69,127,243,0.12)] border border-[rgba(69,127,243,0.1)] text-[#437EF7] hover:opacity-80 rounded-[61px] px-4 py-3 text-sm font-medium leading-[1.3] transition-opacity"
        >
          Save Draft
        </button>
        <button
          type="button"
          className="flex-1 border border-[rgba(21,86,216,0.3)] bg-primary-gradient text-white hover:opacity-90 rounded-[61px] px-4 py-3 text-sm font-medium leading-[1.3] transition-opacity"
        >
          Complete Review
        </button>
      </div>
    </div>
  );
}
