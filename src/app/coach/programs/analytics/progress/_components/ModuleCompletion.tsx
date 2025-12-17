import ProgressBar from "@/components/shared/ProgressBar";
import { SectionHeader } from "@/components/shared/SectionHeader";
import Card from "@/components/ui/Card";

const moduleData = [
  {
    week: "Week 1: QB Fundamentals",
    completion: 85,
    completed: "55 of 65 athletes",
  },
  {
    week: "Week 2: Film Study Basics",
    completion: 67,
    completed: "55 of 65 Athletes",
  },
  {
    week: "Week 3: Advanced Reads",
    completion: 43,
    completed: "28 of 65 athletes",
  },
  {
    week: "Week 4: Pocket Presence",
    completion: 52,
    completed: "34 of 65 athletes",
  },
  {
    week: "Week 5: Game Situations",
    completion: 38,
    completed: "25 of 65 athletes",
  },
];

const ModuleCompletion = () => {
  return (
    <Card className="lg:col-span-2">
      <SectionHeader title="Module Completion Rates" className="mb-4" />

      <div className="space-y-2">
        {moduleData.map((item, idx) => (
          <Card key={idx} className="bg-white/60 rounded-xl md:rounded-xl">
            <h4 className="text-dark font-semibold text-sm mb-3">
              {item.week}
            </h4>

            <ProgressBar
              label={item.completed}
              percentage={item.completion}
              className="flex-col-reverse"
              labelClass="text-xs text-dark"
            />
          </Card>
        ))}
      </div>
    </Card>
  );
};

export default ModuleCompletion;
