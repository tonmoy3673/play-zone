import Icon, { IconName } from "@/utils/icon";
import MatrixCard from "@/components/shared/MatrixCard";

const matrixData = [
  {
    label: "LTV",
    value: "$245",
    subtitle: (
      <div className="flex items-center text-xs font-medium gap-1 primary-gradient-text">
        <Icon
          name="trend_up"
          height={14}
          width={14}
          className="text-[#276AEE]"
        />
        +8%
      </div>
    ),
    icon: "target_dollar" as IconName,
  },
  {
    label: "CAC",
    value: "$68",
    subtitle: (
      <div className="flex items-center text-xs font-medium gap-1 primary-gradient-text">
        <Icon
          name="trend_up"
          height={14}
          width={14}
          className="text-[#276AEE]"
        />
        +2.1%
      </div>
    ),
    icon: "money" as IconName,
  },
  {
    label: "Churn Rate",
    value: `<span class="text-[#F03]">2.1%</span>`,
    subtitle: (
      <div className="flex items-center text-xs font-medium gap-1 text-[#F03]">
        <Icon
          name="trend_down"
          height={14}
          width={14}
          className="text-[#F03]"
        />
        -0.3%
      </div>
    ),
    icon: "chart" as IconName,
  },
  {
    label: "Monthly Growth",
    value: "+12%",
    subtitle: (
      <div className="flex items-center text-xs font-medium gap-1 primary-gradient-text">
        <Icon
          name="trend_up"
          height={14}
          width={14}
          className="text-[#276AEE]"
        />
        +3.2%
      </div>
    ),
    icon: "analytics_up" as IconName,
  },
  {
    label: "Revenue",
    value: "$127K",
    subtitle: (
      <div className="flex items-center text-xs font-medium gap-1 primary-gradient-text">
        <Icon
          name="trend_up"
          height={14}
          width={14}
          className="text-[#276AEE]"
        />
        +15.8%
      </div>
    ),
    icon: "coins_dollar" as IconName,
  },
];

const MatrixCards = () => {
  return (
    <div className="md:col-span-2 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {matrixData.map((matrix, idx) => (
        <MatrixCard
          key={idx}
          label={matrix.label}
          value={matrix.value}
          icon={matrix.icon}
          subtitle={matrix.subtitle}
        />
      ))}
    </div>
  );
};

export default MatrixCards;
