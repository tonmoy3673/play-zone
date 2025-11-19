import { IconName } from "@/utils/icon";
import MatrixCard from "@/components/shared/MatrixCard";

const matrixData = [
  {
    label: "Total Sent",
    value: "156",
    icon: "sent" as IconName,
  },
  {
    label: "Open Rate",
    value: "87%",
    icon: "chart" as IconName,
  },
  {
    label: "Click Rate",
    value: "34%",
    icon: "cursor_magic_selection" as IconName,
  },
  {
    label: "Active Now",
    value: "2",
    icon: "eye" as IconName,
  },
];

const MatrixCards = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
