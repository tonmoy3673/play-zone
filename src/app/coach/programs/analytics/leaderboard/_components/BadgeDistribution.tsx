import Icon from "@/utils/icon";
import Card from "@/components/ui/Card";
import { SectionHeader } from "@/components/shared/SectionHeader";

const badgeDistribution = [
  { name: "Most Consistent", count: 12 },
  { name: "Highest Scorer", count: 8 },
  { name: "Fastest Response", count: 15 },
  { name: "Livestream MVP", count: 6 },
];

const BadgeDistribution = () => {
  return (
    <Card className="bg-white/60">
      <SectionHeader title="Badge Distribution" className="mb-5" />

      <div className="space-y-3">
        {badgeDistribution.map((badge, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between flex-wrap gap-y-2"
          >
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full border border-white bg-white/60 flex items-center justify-center">
                <Icon name="triangle_alert" height={20} width={20} />
              </div>
              <span className="font-medium text-dark text-sm">
                {badge.name}
              </span>
            </div>
            <span className="text-xs font-medium primary-gradient-text">
              {badge.count} Athletes
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default BadgeDistribution;
