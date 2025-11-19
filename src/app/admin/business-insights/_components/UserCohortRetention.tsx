import Card from "@/components/ui/Card";
import ProgressBar from "@/components/shared/ProgressBar";
import { SectionHeader } from "@/components/shared/SectionHeader";

const data = [
  { category: "Day 1 Retention", completion: 89 },
  { category: "Day 7 Retention", completion: 67 },
  { category: "Day 30 Retention", completion: 45 },
  { category: "Day 90 Retention", completion: 32 },
];

const UserCohortRetention = () => {
  return (
    <Card className="bg-white/60">
      <SectionHeader title="User Cohort Retention" className="mb-5" />

      <div className="grid gap-4">
        {data.map((item, idx) => (
          <ProgressBar
            key={idx}
            label={item.category}
            percentage={item.completion}
            labelClass="text-dark text-xs"
          />
        ))}
      </div>
    </Card>
  );
};

export default UserCohortRetention;
