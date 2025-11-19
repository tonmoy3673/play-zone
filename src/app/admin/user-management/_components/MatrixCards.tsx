import { IconName } from "@/utils/icon";
import MatrixCard from "@/components/shared/MatrixCard";

const MatrixCards = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        {
          label: "Total Users",
          value: "2,845",
          icon: "users" as IconName,
        },
        {
          label: "Active Today",
          value: "1,234",
          icon: "user_check" as IconName,
        },
        {
          label: "Flagged Users",
          value: "23",
          icon: "flag" as IconName,
        },
        {
          label: "Premium Users",
          value: "587",
          icon: "crown" as IconName,
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
