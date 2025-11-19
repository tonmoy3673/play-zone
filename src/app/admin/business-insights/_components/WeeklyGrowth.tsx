import Icon from "@/utils/icon";
import { SectionHeader } from "@/components/shared/SectionHeader";
import Card from "@/components/ui/Card";

const weeklyGrowthData = [
  { week: "This Week", value: "+12.5%", trend: "up" },
  { week: "Last Week", value: "+8.7%", trend: "up" },
  { week: "2 Week Ago", value: "+6.3%", trend: "up" },
  { week: "3 Week Ago", value: "+4.1%", trend: "up" },
];

const WeeklyGrowth = () => {
  return (
    <Card className="bg-white/60">
      <SectionHeader title="Weekly Growth Snapshots" className="mb-5" />

      <div className="space-y-4">
        {weeklyGrowthData.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <span className="text-sm font-medium text-dark/70">
              {item.week}
            </span>
            <span className="font-medium text-sm primary-gradient-text flex items-center gap-1">
              {item.trend === "up" ? (
                <Icon
                  name="trend_up"
                  className="text-[#5C8FF7]"
                  height={20}
                  width={20}
                />
              ) : (
                <Icon
                  name="trend_up"
                  className="text-[#5C8FF7] rotate-180"
                  height={20}
                  width={20}
                />
              )}
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default WeeklyGrowth;
