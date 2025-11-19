import { IconName } from "@/utils/icon";
import MatrixCard from "@/components/shared/MatrixCard";

const MatrixCards = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        {
          label: "Blocked IPs",
          value: "43",
          icon: "unavailable" as IconName,
        },
        {
          label: "2FA Enabled",
          value: "366",
          icon: "eye" as IconName,
        },
        {
          label: "Suspicious Activity",
          value: "12",
          icon: "help_circle" as IconName,
        },
        {
          label: "Failed Logins",
          value: "123",
          icon: "triangle_alert" as IconName,
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
