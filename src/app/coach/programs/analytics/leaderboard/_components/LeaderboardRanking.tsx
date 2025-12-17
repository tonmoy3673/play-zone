import Image from "next/image";
import Icon from "@/utils/icon";
import Badge from "@/components/ui/Badge";
import { AnimatedButton } from "@/components/ui/Button";
import ProgressBar from "@/components/shared/ProgressBar";
import { SectionHeader } from "@/components/shared/SectionHeader";
import Card from "@/components/ui/Card";
import Pagination from "@/components/shared/Pagination";

const topPerformers = [
  {
    rank: 1,
    name: "Alex Rodriguez",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100",
    role: "Quarterback • Senior",
    points: 3247,
    completion: 98,
    streak: 12,
    badge: ["Most Consistent", "Highest Scorer"],
  },
  {
    rank: 2,
    name: "Marcus Johnson",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100",
    role: "Running Back • Junior",
    points: 3247,
    completion: 94,
    streak: 28,
    badge: ["Fastest Response"],
  },
  {
    rank: 3,
    name: "Tyler Williams",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100",
    role: "Wide Receiver • Sophomore",
    points: 3247,
    completion: 91,
    streak: 8,
    badge: ["Livestream MVP"],
  },
  {
    rank: 4,
    name: "Sarah Mitchell",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100",
    role: "Linebacker • Junior",
    points: 3247,
    completion: 89,
    streak: 5,
  },
  {
    rank: 5,
    name: "David Chen",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100",
    role: "Safety • Senior",
    points: 3247,
    completion: 87,
    streak: 3,
  },
];

const LeaderboardRanking = () => {
  return (
    <Card className="lg:col-span-2">
      <div className="flex items-center justify-between flex-wrap mb-4">
        <SectionHeader title="Leaderboard Rankings" className="mb-0" />

        <AnimatedButton className="bg-primary-gradient h-10 text-xs font-medium text-white px-3 py-2.5 rounded-full flex items-center justify-center gap-1.5 transition-all whitespace-nowrap hover:bg-primary">
          <Icon name="award" height={20} width={20} className="text-white" />
          Give Recognition
        </AnimatedButton>
      </div>

      <div className="space-y-2">
        {topPerformers.map((performer, idx) => (
          <Card
            key={idx}
            className={`max-lg:grid max-lg:grid-cols-3 lg:flex items-center gap-x-4 gap-y-2 lg:gap-11 md:rounded-2xl transition ${
              performer.rank === 1 ||
              performer.rank === 2 ||
              performer.rank === 3
                ? "bg-white/60"
                : "bg-white/30"
            }`}
          >
            <div className="max-lg:col-span-3 flex items-center gap-2.5 flex-1">
              <div className="size-10 bg-white/50 border border-white shadow rounded-full flex items-center justify-center">
                <div
                  className={`flex items-center justify-center size-8 border-white shadow rounded-full font-bold ${
                    performer.rank == 1
                      ? "bg-[linear-gradient(90deg,#68B0EA_13.08%,#9DD0FD_48.25%,#68B0EA_86.05%)]"
                      : performer.rank == 2
                      ? "bg-[linear-gradient(95deg,#717171_-0.22%,#9E9898_10.66%,#D6D6D6_26.65%,#D6D6D6_78.95%,#9E9E9E_93%,#9A9A9A_97.24%)]"
                      : performer.rank == 3
                      ? "bg-[linear-gradient(95deg,#D6600B_2.8%,#F58C41_21.86%,#FBCFB0_38.72%,#F59047_57.67%,#FBD0B1_70.65%,#F58B40_87.39%,#F58B40_104.89%)]"
                      : "bg-white"
                  }`}
                >
                  {performer.rank}
                </div>
              </div>

              <div className="size-10 overflow-hidden relative rounded-full border-[1.5px] border-[#68B0EA]">
                <Image
                  src={performer.avatar}
                  alt={performer.name}
                  fill
                  className="object-cover size-full"
                />
              </div>

              <div className="space-y-0.5">
                <h4 className="font-semibold text-dark text-sm">
                  {performer.name}
                </h4>
                <p className="text-xs text-dark/70">{performer.role}</p>
              </div>
            </div>

            <div className="max-lg:col-span-3 flex flex-wrap gap-2 lg:w-56">
              {performer.badge &&
                performer.badge?.map((item, index) => (
                  <Badge
                    key={index}
                    variant={
                      item === "Most Consistent"
                        ? "default"
                        : item === "Highest Scorer"
                        ? "warning"
                        : item === "Fastest Response"
                        ? "secondary"
                        : "danger"
                    }
                  >
                    {item}
                  </Badge>
                ))}
            </div>

            <ProgressBar
              className="w-[106px] gap-3 shrink-0"
              percentage={performer.completion}
              label="Complete"
            />

            <div className="text-right space-y-1">
              <p className="font-medium text-dark text-sm">
                🔥 {performer.streak}
              </p>
              <p className="text-xs text-dark/70">Days</p>
            </div>

            <div className="text-right space-y-1">
              <p className="font-medium text-dark text-sm">
                {performer.points}
              </p>
              <p className="text-xs text-dark/70">Points</p>
            </div>
          </Card>
        ))}
      </div>

      <Pagination text="Showing 5 of 65 Athletes" className="mt-5" />
    </Card>
  );
};

export default LeaderboardRanking;
