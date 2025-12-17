import Image from "next/image";

type BadgeConfig = {
  title: string;
  subtitle: string;
  gradient: [string, string];
  shadow: {
    y: number;
    color: string;
  };
  rocketColor: string;
};

const badges: BadgeConfig[] = [
  {
    title: "Streak Master",
    subtitle: "7+ days",
    gradient: ["#042c78", "#0050ef"],
    shadow: { y: 3, color: "#003fbc" },
    rocketColor: "#0050ef",
  },
  {
    title: "Century Club",
    subtitle: "Completed 30 sessions",
    gradient: ["#782f04", "#ef5000"],
    shadow: { y: 2.609, color: "#c54200" },
    rocketColor: "#ef5000",
  },
  {
    title: "Century Club",
    subtitle: "100 tasks completed",
    gradient: ["#78046c", "#ef00d3"],
    shadow: { y: 2.609, color: "#b0049c" },
    rocketColor: "#ef00d3",
  },
  {
    title: "Iron Discipline",
    subtitle: "7+ days",
    gradient: ["#460478", "#8f00ef"],
    shadow: { y: 2.614, color: "#7100bc" },
    rocketColor: "#8f00ef",
  },
  {
    title: "Task Crusher",
    subtitle: "Completed 30 sessions",
    gradient: ["#786704", "#efef00"],
    shadow: { y: 2.614, color: "#c5a100" },
    rocketColor: "#efef00",
  },
  {
    title: "Quiz Ace",
    subtitle: "100 tasks completed",
    gradient: ["#04786c", "#00efd3"],
    shadow: { y: 2.614, color: "#00bc9c" },
    rocketColor: "#00efd3",
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
    <div className="relative h-[72px] w-[72px]">
      <Image
        src={ROCKET_IMAGE_SRC}
        alt="Rocket badge"
        width={70}
        height={68}
        className="h-full w-full rotate-15 object-contain"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rotate-15 rounded-[32px] opacity-80 mix-blend-screen"
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
          filter: "blur(4px)",
        }}
      />
    </div>
  );
}

// Particle dots component - static positions for consistency
function Particles() {
  // Fixed particle positions for consistent rendering
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
    <div className="absolute inset-0 pointer-events-none">
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
      className="absolute -inset-6 rotate-15 opacity-80 mix-blend-screen"
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
        className="absolute left-1/2 top-4 h-[94px] w-[94px] -translate-x-1/2 rounded-full opacity-80 blur-[2px] mix-blend-screen"
        style={{
          background: `radial-gradient(circle, ${hexToRgba(
            color,
            0.55
          )} 0%, ${hexToRgba(color, 0.15)} 55%, transparent 75%)`,
        }}
      />
      <div className="absolute -left-16 -top-12 h-[170px] w-[220px] bg-white/12 blur-[70px] opacity-70" />
      <div className="absolute -right-12 top-8 h-[120px] w-[120px] bg-white/10 blur-3xl opacity-80" />
    </>
  );
}

function BadgeCard({ badge }: { badge: BadgeConfig }) {
  return (
    <div
      className="relative isolate flex h-[153px] w-full flex-col items-center justify-between overflow-hidden rounded-[16px] p-4"
      style={{
        backgroundImage: `linear-gradient(180deg, ${badge.gradient[0]}, ${badge.gradient[1]})`,
        boxShadow: `0 ${badge.shadow.y}px 0 0 ${badge.shadow.color}`,
      }}
    >
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <Glow color={badge.rocketColor} />
        <OrbitLines color={badge.rocketColor} />
        <Particles />
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div
          className="relative z-10"
          style={{
            filter: `drop-shadow(0 8px 18px ${hexToRgba(
              badge.rocketColor,
              0.35
            )})`,
          }}
        >
          <RocketIcon color={badge.rocketColor} />
        </div>
      </div>
      <div className="z-10 space-y-0.5 text-center text-white">
        <p className="font-medium text-xs leading-[1.4]">{badge.title}</p>
        <p className="font-medium text-[10px] leading-[1.4] text-white/80">
          {badge.subtitle}
        </p>
      </div>
    </div>
  );
}

export default function Badges() {
  return (
    <div className="px-5 pb-5">
      <h3 className="mb-4 text-base font-medium leading-normal text-[#141B34]">
        Earned Badges
      </h3>
      <div className="grid grid-cols-2 gap-[9px]">
        {badges.map((badge) => (
          <BadgeCard key={`${badge.title}-${badge.subtitle}`} badge={badge} />
        ))}
      </div>
    </div>
  );
}
