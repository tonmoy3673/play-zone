import { IconName } from "@/utils/icon";
import MatrixCard from "@/components/shared/MatrixCard";

const MatrixCards = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        {
          label: "Total Subscription",
          value: "1,847",
          icon: "credit_card" as IconName,
        },
        {
          label: "Premium Users",
          value: "567",
          icon: "crown" as IconName,
        },
        {
          label: "Trial Users",
          value: "234",
          icon: "users" as IconName,
        },
        {
          label: "Monthly Revenue",
          value: "$12,456",
          icon: "coins_dollar" as IconName,
        },
      ].map((matrix, idx) => (
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
