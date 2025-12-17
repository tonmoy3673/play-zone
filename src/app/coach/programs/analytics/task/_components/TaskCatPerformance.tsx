import ProgressBar from "@/components/shared/ProgressBar";
import { SectionHeader } from "@/components/shared/SectionHeader";
import Card from "@/components/ui/Card";

const categoryPerformanceData = [
  { category: "Video Analysis", tasks: "8 Tasks", completion: 75 },
  { category: "Practical Drills", tasks: "12 Tasks", completion: 89 },
  { category: "Theory & Concepts", tasks: "4 Tasks", completion: 65 },
];

const TaskCatPerformance = () => {
  return (
    <Card>
      <SectionHeader title="Task Categories Performance" className="mb-5" />

      <div className="grid gap-4">
        {categoryPerformanceData.map((item, idx) => (
          <ProgressBar
            key={idx}
            label={item.category}
            percentage={item.completion}
            percentageText={item.tasks}
            percentageClass="primary-gradient-text text-[10px]"
          />
        ))}
      </div>
    </Card>
  );
};

export default TaskCatPerformance;
