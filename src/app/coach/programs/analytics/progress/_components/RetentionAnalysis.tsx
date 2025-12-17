import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedButton } from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Icon from "@/utils/icon";

const retentionData = [
  { week: "Week 1 Retention", value: 89, trend: "up" },
  { week: "Week 2 Retention", value: 76, trend: "down" },
  { week: "Week 3 Retention", value: 57, trend: "down" },
  { week: "Week 4 Retention", value: 68, trend: "up" },
  { week: "Week 4 Retention", value: 72, trend: "up" },
];

const RetentionAnalysis = () => {
  return (
    <Card className="bg-white/60">
      <SectionHeader title="Retention Analysis" className="mb-5" />

      <div className="space-y-4">
        {retentionData.map((item, idx) => (
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

      <AnimatedButton className="flex items-center gap-1.5 py-3.5 mt-5 w-full px-3 h-12 rounded-xl bg-[#457FF326] border border-[#1556D81A]">
        <span className="primary-gradient-text text-sm font-medium">
          Analyze Patterns
        </span>
      </AnimatedButton>
    </Card>
  );
};

export default RetentionAnalysis;
