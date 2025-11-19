import { IconName } from "@/utils/icon";
import MatrixCard from "@/components/shared/MatrixCard";

const matrixData = [
  {
    label: "Total FAQ",
    value: "47",
    icon: "task" as IconName,
  },
  {
    label: "Total Views",
    value: "43,345",
    icon: "eye" as IconName,
  },
  {
    label: "Avs. Helpfulness",
    value: "93%",
    icon: "ticket" as IconName,
  },
  {
    label: "Most Viewed",
    value: "Premium Feature",
    icon: "eye" as IconName,
  },
];

const MatrixCards = () => {
  return (
    <div className="bg-white/30 rounded-2xl md:rounded-3xl p-5 border border-white/80 overflow-hidden">
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
    </div>
  );
};

export default MatrixCards;
