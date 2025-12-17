import Icon, { IconName } from "@/utils/icon";
import { AnimatedButton } from "@/components/ui/Button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import Card from "@/components/ui/Card";

const behavioralInsights = [
  {
    label: "Critical Issue",
    icon: "triangle_alert" as IconName,
    title: "Week 3 Drop-off",
    description:
      "43% completion rate indicates content difficulty or engagement issues",
    action: "Review Content",
  },
  {
    label: "Attention Needed",
    icon: "triangle_alert" as IconName,
    title: "Pacing Issues",
    description:
      "Athletes taking 4.2 days avg vs 5.0 target - consider adjusting schedule",
    action: "Adjust Timeline",
  },
  {
    label: "Success",
    icon: "check_check" as IconName,
    title: "Strong Start",
    description: "Week 1 shows 85% completion - replicate this success pattern",
    action: "Duplicate Strategy",
  },
];

const BehavioralInsights = () => {
  return (
    <Card>
      <SectionHeader title="Behavioral Insights" className="mb-5" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {behavioralInsights.map((insight, idx) => (
          <Card key={idx} className="bg-white/60 space-y-5">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full flex items-center justify-center bg-white shadow">
                <Icon name={insight.icon} height={20} width={20} />
              </div>
              <h4 className="font-semibold text-dark text-sm">
                {insight.label}
              </h4>
            </div>

            <div className="space-y-0.5">
              <h4 className="font-semibold text-dark text-lg">
                {insight.title}
              </h4>
              <p className="text-xs text-dark/70 max-w-[331px]">
                {insight.description}
              </p>
            </div>

            <AnimatedButton className="flex items-center gap-1.5 py-3.5 px-4 h-12 rounded-xl bg-[#457FF326] border border-[#1556D81A]">
              <span className="primary-gradient-text text-sm font-medium">
                {insight.action}
              </span>
            </AnimatedButton>
          </Card>
        ))}
      </div>
    </Card>
  );
};

export default BehavioralInsights;
