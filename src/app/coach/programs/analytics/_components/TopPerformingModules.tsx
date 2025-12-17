import Icon from "@/utils/icon";
import Card from "@/components/ui/Card";
import { AnimatedButton } from "@/components/ui/Button";
import { SectionHeader } from "@/components/shared/SectionHeader";

const modules = [
  { name: "QB Fundamentals", avg: "94%" },
  { name: "Film Study Week 1", avg: "91%" },
  { name: "Pocket Presence", avg: "88%" },
];

const TopPerformingModules = () => {
  return (
    <Card>
      <SectionHeader title="Top Performing Modules" className="mb-5" />

      <div className="space-y-4">
        {modules.map((module, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <p className="text-sm text-dark/70 font-medium">{module.name}</p>

            <div className="flex items-center gap-1">
              <Icon
                name="trend_up"
                height={16}
                width={16}
                className="text-[#276AEE]"
              />
              <span className="text-sm font-medium primary-gradient-text">
                {module.avg} Avg
              </span>
            </div>
          </div>
        ))}
      </div>

      <AnimatedButton className="flex items-center gap-1.5 py-3.5 mt-6 w-full px-3 h-12 rounded-xl bg-[#457FF326] border border-[#1556D81A]">
        <span className="primary-gradient-text text-sm font-medium">
          View Details
        </span>
      </AnimatedButton>
    </Card>
  );
};

export default TopPerformingModules;
