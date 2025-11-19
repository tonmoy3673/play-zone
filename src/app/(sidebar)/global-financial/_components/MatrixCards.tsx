import { IconName } from "@/utils/icon";
import MatrixCard from "@/components/shared/MatrixCard";

const matrixData = [
  {
    icon: "target_dollar" as IconName,
    value: `$22,740`,
    subtitle: "Total Earnings",
  },
  {
    icon: "analytics_up" as IconName,
    value: `$3,280`,
    subtitle: "This Month's Revenue",
  },
  {
    icon: "analytics_up" as IconName,
    value: "$12.4K",
    subtitle: "QB Elite Vol. 3",
  },
  {
    icon: "loading" as IconName,
    value: `7`,
    subtitle: "Programs Created",
  },
];

const MatrixCards = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {matrixData?.map((matrix, idx) => (
        <MatrixCard
          key={idx}
          value={matrix.value}
          icon={matrix.icon}
          subtitle={matrix.subtitle}
        />
      ))}
    </div>
  );
};

export default MatrixCards;
