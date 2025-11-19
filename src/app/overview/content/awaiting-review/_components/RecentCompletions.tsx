import React from "react";

type CompletionRow = {
  title: string;
  subtitle: string;
  coachName: string;
  coachAvatar: string;
  rating: string; // e.g. "4.6/5"
  showTick?: boolean;
};

const Star: React.FC = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M12 3l2.905 5.89 6.495.945-4.7 4.58 1.11 6.48L12 17.77 6.19 20.9l1.11-6.48-4.7-4.58 6.495-.945L12 3z"
      fill="#F79009"
    />
  </svg>
);

const TickBadge: React.FC = () => (
  <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 12l3.2 3.2L18 6.5"
        stroke="#141B34"
        strokeOpacity="0.6"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 16l3.2 3.2L18 10.5"
        stroke="#141B34"
        strokeOpacity="0.6"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const rows: CompletionRow[] = [
  {
    title: "Recovery Protocol",
    subtitle: "Completed Jan 6, 2025",
    coachName: "Coach Michael",
    coachAvatar:
      "https://www.figma.com/api/mcp/asset/8aae69e8-88c2-453d-870b-4eb8b6855d93",
    rating: "4.6/5",
    showTick: false,
  },
  {
    title: "Recovery Protocol",
    subtitle: "Completed Jan 6, 2025",
    coachName: "Coach Tomas",
    coachAvatar:
      "https://www.figma.com/api/mcp/asset/49618b52-94be-4e8d-82a2-2ab9686619b4",
    rating: "4.5/5",
    showTick: true,
  },
  {
    title: "Recovery Protocol",
    subtitle: "Completed Jan 6, 2025",
    coachName: "Coach Michael",
    coachAvatar:
      "https://www.figma.com/api/mcp/asset/80682e1b-e443-4c82-82ab-fa1887a51a1b",
    rating: "4.2/5",
    showTick: true,
  },
  {
    title: "Recovery Protocol",
    subtitle: "Completed Jan 6, 2025",
    coachName: "Coach Michael",
    coachAvatar:
      "https://www.figma.com/api/mcp/asset/80682e1b-e443-4c82-82ab-fa1887a51a1b",
    rating: "4.2/5",
    showTick: true,
  },
];

const Row: React.FC<CompletionRow> = ({
  title,
  subtitle,
  coachName,
  coachAvatar,
  rating,
  showTick,
}) => {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-3">
        {showTick ? <TickBadge /> : <div className="w-12" />}
        <div>
          <p className="text-[14px] leading-[1.3] font-medium text-dark">
            {title}
          </p>
          <p className="text-[12px] leading-[1.4] text-dark/70">{subtitle}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <img
            src={coachAvatar}
            alt=""
            className="w-8 h-8 rounded-full object-cover"
          />
          <p className="text-[10px] font-medium text-dark">{coachName}</p>
        </div>
        <div className="flex items-center gap-1">
          <Star />
          <p className="text-[10px] font-medium text-dark">{rating}</p>
        </div>
      </div>
    </div>
  );
};

const RecentCompletions: React.FC = () => {
  return (
    <div className="bg-white/30 rounded-3xl p-5">
      <h2 className="text-[18px] font-medium text-black">Recent Completions</h2>

      <div className="mt-4">
        {rows.map((row, i) => (
          <React.Fragment key={`${row.coachName}-${i}`}>
            {i === 0 ? (
              <div className="py-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[14px] leading-[1.3] font-medium text-dark">
                      {row.title}
                    </p>
                    <p className="text-[12px] leading-[1.4] text-dark/70">
                      {row.subtitle}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <img
                        src={row.coachAvatar}
                        alt=""
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <p className="text-[10px] font-medium text-dark">
                        {row.coachName}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star />
                      <p className="text-[10px] font-medium text-dark">
                        {row.rating}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Row {...row} />
            )}
            {i < rows.length - 1 && <div className="h-px w-full bg-black/5" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default RecentCompletions;
