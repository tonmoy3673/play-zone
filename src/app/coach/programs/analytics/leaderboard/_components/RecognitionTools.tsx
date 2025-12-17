import Card from "@/components/ui/Card";
import Icon, { IconName } from "@/utils/icon";
import { AnimatedButton } from "@/components/ui/Button";
import { SectionHeader } from "@/components/shared/SectionHeader";

const recognitionTools = [
  { icon: "property_view" as IconName, label: "Message Top Performers" },
  { icon: "dashboard_speed" as IconName, label: "Give Bonus Points" },
  { icon: "task_edit" as IconName, label: "Feature on Community Feed" },
  { icon: "users" as IconName, label: "Create Custom Badge" },
];

const RecognitionTools = () => {
  return (
    <Card className="bg-white/60">
      <SectionHeader title="Recognition Tools" className="mb-5" />

      <div className="space-y-2.5">
        {recognitionTools.map((tool, idx) => (
          <AnimatedButton
            key={idx}
            className="w-full flex items-center justify-center gap-1.5 p-3 bg-[#457FF326] border border-[#1556D826] rounded-xl transition font-medium text-sm"
          >
            <Icon
              name={tool.icon}
              className="text-[#5C8FF7]"
              height={20}
              width={20}
            />
            <span className="primary-gradient-text text-sm font-medium">
              {tool.label}
            </span>
          </AnimatedButton>
        ))}
      </div>
    </Card>
  );
};

export default RecognitionTools;
