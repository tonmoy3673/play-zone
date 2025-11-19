import Card from "@/components/ui/Card";
import { AnimatedButton } from "@/components/ui/Button";
import { SectionHeader } from "@/components/shared/SectionHeader";

const athletes = [
  { name: "Marcus Thompson", missed: 5 },
  { name: "Sarah Mitchell", missed: 4 },
  { name: "David Chen", missed: 3 },
];

const AthletesMissingTasks = () => {
  return (
    <Card>
      <SectionHeader title="Athletes Missing 3+ Tasks" className="mb-5" />

      <div className="space-y-4">
        {athletes.map((athlete, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between text-sm font-medium"
          >
            <p className="text-dark/70">{athlete.name}</p>

            <span className="text-[#F03]">{athlete.missed} missed</span>
          </div>
        ))}
      </div>

      <AnimatedButton className="flex items-center gap-1.5 py-3.5 mt-6 w-full px-3 h-12 rounded-xl bg-[#457FF326] border border-[#1556D81A]">
        <span className="primary-gradient-text text-sm font-medium">
          Send Reminders
        </span>
      </AnimatedButton>
    </Card>
  );
};

export default AthletesMissingTasks;
