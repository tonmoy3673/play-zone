import Icon, { IconName } from "@/utils/icon";
import MatrixCard from "@/components/shared/MatrixCard";

const matrixData = [
  {
    label: "Total Posts",
    value: `<span class="primary-gradient-text">28</span>`,
    subtitle: (
      <div className="flex items-center text-xs font-medium gap-1 primary-gradient-text">
        <Icon
          name="trend_up"
          height={14}
          width={14}
          className="text-[#276AEE]"
        />
        +3 this month
      </div>
    ),
    icon: "task" as IconName,
  },
  {
    label: "Total Review",
    value: "45.2K",
    subtitle: (
      <div className="flex items-center text-xs font-medium gap-1 primary-gradient-text">
        <Icon
          name="trend_up"
          height={14}
          width={14}
          className="text-[#276AEE]"
        />
        +12% this week
      </div>
    ),
    icon: "eye" as IconName,
  },
  {
    label: "Engagement Rate",
    value: `<span class="primary-gradient-text">8.7%</span>`,
    subtitle: (
      <div className="flex items-center text-xs font-medium gap-1 primary-gradient-text">
        <Icon
          name="trend_up"
          height={14}
          width={14}
          className="text-[#276AEE]"
        />
        +2.1% vs last month
      </div>
    ),
    icon: "chart" as IconName,
  },
  {
    label: "Top Category",
    value: "18.5K views",
    subtitle: "Training Tips",
    icon: "dashboard_circle" as IconName,
  },
];

const MatrixCards = () => {
  return (
    <div className="md:col-span-2 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
