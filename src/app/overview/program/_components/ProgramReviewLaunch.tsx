import Card from "@/components/ui/Card";
import Icon from "@/utils/icon";

type StaffMember = {
  name: string;
  role: string;
  avatarUrl?: string;
};

type SummaryItem = {
  label: string;
  value: string;
};

type ProgramStats = {
  duration: string;
  totalSessions: number | string;
  contentItem: number | string;
  averageRevenuePotential: string;
};

type ContentOverview = {
  videoLessons: string;
  liveSessions: string;
  tasksAndDrills: string;
  assessments: string;
};

export type ProgramReviewLaunchProps = {
  onEditSummary?: () => void;
  onEditThumbnail?: () => void;
  title?: string;
  subtitle?: string;
  summary?: SummaryItem[];
  description?: string;
  thumbnailUrl?: string;
  staff?: StaffMember[];
  communityFeatures?: string[];
  stats?: ProgramStats;
  contentOverview?: ContentOverview;
};

const defaultSummary: SummaryItem[] = [
  { label: "Program Title", value: "Elite Basketball Fundamentals" },
  { label: "Schedule", value: "Jan 15 - Mar 15, 2025" },
  { label: "Program Type", value: "Multi - Day Course" },
  { label: "Pricing", value: "$89/month" },
  { label: "Sport & Level", value: "Basketball - Intermediate" },
  { label: "Target Audience", value: "Ages 16-18, All Genders" },
  { label: "Capacity", value: "25 Max" },
];

const defaultStaff: StaffMember[] = [
  {
    name: "Marcus Thompson",
    role: "Head Coach",
    avatarUrl:
      "https://www.figma.com/api/mcp/asset/63871d59-9bd5-47b5-9a37-98d2434c59a0",
  },
  {
    name: "Sarah Mitchell",
    role: "Assistant Coach",
    avatarUrl:
      "https://www.figma.com/api/mcp/asset/63871d59-9bd5-47b5-9a37-98d2434c59a0",
  },
];

const defaultCommunity = [
  "Group Chat Enabled",
  "Program Feed Active",
  "Discussion Forums",
];

const defaultStats: ProgramStats = {
  duration: "8 weeks",
  totalSessions: 24,
  contentItem: 44,
  averageRevenuePotential: "$0",
};

const defaultOverview: ContentOverview = {
  videoLessons: "12 uploaded",
  liveSessions: "6 scheduled",
  tasksAndDrills: "8 created",
  assessments: "3 quizzes",
};

function glass(classes = "") {
  return [
    "relative overflow-hidden rounded-[30px]",
    "bg-white/30 backdrop-blur-xl",
    classes,
  ].join(" ");
}

function PencilIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 20h9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M16.5 3.5a2.12 2.12 0 0 1 3 3L8 18l-4 1 1-4 11.5-11.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckBadge() {
  return (
    <span className="inline-flex size-5 items-center justify-center rounded-full bg-[#4d81ff]/15 text-[#2f5ce8]">
      <svg
        width="14"
        height="14"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 8.3 6.4 11l5.6-6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function ProgramReviewLaunch({
  onEditSummary,
  onEditThumbnail,
  title = "Review & Launch Your Program",
  subtitle = "Review all settings and content before publishing. You can save as draft or publish immediately to make it available to athletes.",
  summary = defaultSummary,
  description = "Master the fundamentals of basketball with professional coaching. This comprehensive program covers shooting, dribbling, defense, and game strategy through structured practice sessions and skill assessments.",
  thumbnailUrl = "https://www.figma.com/api/mcp/asset/634deefb-4ed8-40d6-9261-999ebda8afb7",
  staff = defaultStaff,
  communityFeatures = defaultCommunity,
  stats = defaultStats,
  contentOverview = defaultOverview,
}: ProgramReviewLaunchProps) {
  return (
    <section>
      <div className="flex-col gap-6">
        <div className="max-w-[500px] space-y-1 mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-dark">
            {title}
          </h2>

          <p className="text-base text-black/60">{subtitle}</p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_396px]">
          <div className="space-y-4">
            <Card className="md:rounded-[30px] p-6 md:p-8">
              <div className="flex items-center justify-between mb-5">
                <p className="text-xl text-dark font-medium">Premium Summary</p>
                <button
                  type="button"
                  aria-label="Edit summary"
                  onClick={onEditSummary}
                  className="text-dark/70"
                >
                  <Icon name="edit" height={20} width={20} />
                </button>
              </div>

              <Card className="md:rounded-2xl bg-white/60">
                <dl className="space-y-7">
                  {summary.map((item, idx) => (
                    <div
                      key={item.label}
                      className={`flex items-center justify-between gap-2 flex-wrap text-sm`}
                    >
                      <span className="text-dark/70">{item.label}</span>
                      <span className="font-medium text-dark">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </dl>
              </Card>

              <Card className="md:rounded-2xl bg-white/60 mt-4">
                <h5 className="text-base text-dark font-medium mb-6">
                  Description
                </h5>
                <p className="text-sm text-dark/70">{description}</p>
              </Card>
            </Card>

            <Card className="md:rounded-[30px] p-6 md:p-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <p className="text-base text-dark font-medium">
                    Staff Members
                  </p>
                  <Card className="mt-4 md:rounded-2xl bg-white/60">
                    <ul className="flex flex-col gap-4">
                      {staff.map((member) => (
                        <li
                          key={member.name}
                          className="flex items-center gap-3"
                        >
                          <div className="relative size-12 overflow-hidden rounded-[52px] bg-white/60">
                            {member.avatarUrl ? (
                              <img
                                alt={member.name}
                                src={member.avatarUrl}
                                className="size-full object-cover"
                              />
                            ) : null}
                          </div>
                          <div>
                            <p className="text-[14px] font-medium leading-[1.3]">
                              {member.name}
                            </p>
                            <p className="text-[12px] leading-[1.4] text-dark/70">
                              {member.role}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>

                <div className="flex flex-col">
                  <p className="text-base text-dark font-medium">
                    Community Features
                  </p>

                  <Card className="mt-4 md:rounded-2xl bg-white/60 flex-1">
                    <ul className="flex flex-col gap-2">
                      {communityFeatures.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-4 text-sm font-medium text-dark/70"
                        >
                          <Icon name="badge" height={20} width={20} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-4">
            <Card className="md:rounded-[30px] p-6 md:p-8">
              <div className="flex items-center justify-between mb-5">
                <p className="text-xl text-dark font-medium">
                  Premium Thumbnail
                </p>
                <button
                  type="button"
                  aria-label="Edit summary"
                  onClick={onEditThumbnail}
                  className="text-dark/70"
                >
                  <Icon name="edit" height={20} width={20} />
                </button>
              </div>

              <div className="mt-4 aspect-[330/192] rounded-2xl bg-white p-2">
                <img
                  alt="Program thumbnail"
                  src={thumbnailUrl}
                  className="size-full object-cover rounded-xl"
                />
              </div>
            </Card>

            <Card className="md:rounded-[30px] p-6 md:p-8">
              <p className="text-base text-dark font-medium">Program Stats</p>

              <div className="mt-7">
                {[
                  ["Duration", stats.duration],
                  ["Total Sessions", stats.totalSessions],
                  ["Content Item", stats.contentItem],
                  ["verage Revenue Potential", stats.averageRevenuePotential],
                ].map(([k, v], idx) => (
                  <div
                    key={k as string}
                    className={`flex items-center justify-between py-3 border-b border-white last:border-b-0 first:pt-0 last:pb-0`}
                  >
                    <p className="text-[14px] leading-[1.3] text-dark/70">
                      {k}
                    </p>
                    <p className="text-[14px] font-medium leading-[1.3]">
                      {v as string}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="md:rounded-[30px] p-6 md:p-8">
              <p className="text-base text-dark font-medium">
                Content Over View
              </p>

              <div className="mt-7">
                {[
                  ["Video Lessons:", contentOverview.videoLessons],
                  ["Live Sessions:", contentOverview.liveSessions],
                  ["Tasks & Drills:", contentOverview.tasksAndDrills],
                  ["Assessments:", contentOverview.assessments],
                ].map(([k, v], idx) => (
                  <div
                    key={k as string}
                    className={`flex items-center justify-between py-3 border-b border-white last:border-b-0 first:pt-0 last:pb-0`}
                  >
                    <p className="text-[14px] leading-[1.3] text-dark/70">
                      {k}
                    </p>
                    <p className="text-[14px] font-medium leading-[1.3]">
                      {v as string}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
