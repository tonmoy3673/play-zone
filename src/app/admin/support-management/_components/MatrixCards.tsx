import { IconName } from "@/utils/icon";
import MatrixCard from "@/components/shared/MatrixCard";

const matrixData = [
  {
    label: "Open Ticket",
    value: "47",
    icon: "ticket" as IconName,
  },
  {
    label: "In Progress",
    value: "23",
    icon: "loading" as IconName,
  },
  {
    label: "Avg Response",
    value: "2.4h",
    icon: "clock" as IconName,
  },
  {
    label: "Resolved Today",
    value: "18",
    icon: "check_check" as IconName,
  },
  {
    label: "Urgent",
    value: "5",
    icon: "timer" as IconName,
  },
];

const MatrixCards = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {matrixData.map((matrix, idx) => (
        <MatrixCard
          key={idx}
          label={matrix.label}
          value={matrix.value}
          icon={matrix.icon}
        />
      ))}
    </div>
  );
};

export default MatrixCards;
