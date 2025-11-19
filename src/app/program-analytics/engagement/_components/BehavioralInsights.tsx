import Icon, { IconName } from "@/utils/icon";
import { SectionHeader } from "@/components/shared/SectionHeader";
import Card from "@/components/ui/Card";

const behavioralInsights = [
  {
    title: "Peak Activity",
    icon: "triangle_alert" as IconName,
    value: "6-8 PM",
    subtitle: "Most active training time",
    description:
      "Athletes prefer evening sessions for content consumption and task completion.",
  },
  {
    title: "Engagement Drop",
    icon: "triangle_alert" as IconName,
    value: "Weekends",
    subtitle: "-35% activity",
    description: "Consider weekend-specific content or lighter task loads.",
  },
  {
    title: "Streak Impact",
    icon: "fire_emoji" as IconName,
    value: "+47%",
    subtitle: "Completion rate",
    description:
      "Athletes with 7+ day streaks show significantly higher completion rates.",
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
                {insight.title}
              </h4>
            </div>

            <div className="space-y-0.5">
              <h4 className="font-semibold text-dark text-lg">
                {insight.value}
              </h4>
              <p className="text-xs text-dark/70">{insight.subtitle}</p>
            </div>

            <p className="max-w-[331px] text-dark/70 text-xs">
              {insight.description}
            </p>
          </Card>
        ))}
      </div>
    </Card>
  );
};

export default BehavioralInsights;
