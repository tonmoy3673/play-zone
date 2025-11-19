import { IconName } from "@/utils/icon";
import MatrixCard from "@/components/shared/MatrixCard";

const matrixData = [
  {
    label: "Programs Created",
    value: "456",
    subtitle: "+16 this month",
    icon: "task" as IconName,
  },
  {
    label: "Tasks Assigned",
    value: "3,247",
    subtitle: "+28 this week",
    icon: "task" as IconName,
  },
  {
    label: "Tasks Submitted",
    value: "2,891",
    subtitle: "+22 this week",
    icon: "task" as IconName,
  },
  {
    label: "Messages Sent",
    value: "8,934",
    subtitle: "+39 this month",
    icon: "task" as IconName,
  },
];

const EngagementMatrix = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {matrixData.map((metric, idx) => (
        <MatrixCard
          key={idx}
          label={metric.label}
          value={metric.value}
          icon={metric.icon}
          subtitle={metric.subtitle}
        />
      ))}
    </div>
  );
};

export default EngagementMatrix;
