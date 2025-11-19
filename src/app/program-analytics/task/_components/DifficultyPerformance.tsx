import ProgressBar from "@/components/shared/ProgressBar";
import { SectionHeader } from "@/components/shared/SectionHeader";
import Card from "@/components/ui/Card";

const difficultyPerformanceData = [
  { level: "Beginner", completion: 94 },
  { level: "Intermediate", completion: 94 },
  { level: "Advanced", completion: 94 },
];

const DifficultyPerformance = () => {
  return (
    <Card>
      <SectionHeader title="Task Categories Performance" className="mb-5" />

      <div className="grid gap-4">
        {difficultyPerformanceData.map((item, idx) => (
          <ProgressBar
            key={idx}
            label={item.level}
            percentage={item.completion}
            percentageText="Completion Rate"
            percentageClass="primary-gradient-text text-[10px]"
          />
        ))}
      </div>
    </Card>
  );
};

export default DifficultyPerformance;
