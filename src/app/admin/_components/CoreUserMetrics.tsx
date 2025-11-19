import Icon, { IconName } from "@/utils/icon";
import MatrixCard from "@/components/shared/MatrixCard";
import { SectionHeader } from "@/components/shared/SectionHeader";

const matrixData = [
  {
    label: "Total Users",
    value: `<span class="primary-gradient-text">1,247</span>`,
    subtitle: "All Time",
    icon: "users" as IconName,
  },
  {
    label: "Total Programs",
    value: "48",
    subtitle: (
      <div className="flex items-center text-xs font-medium gap-1 primary-gradient-text">
        <Icon
          name="trend_up"
          height={14}
          width={14}
          className="text-[#276AEE]"
        />
        +12% from yesterday
      </div>
    ),
    icon: "task" as IconName,
  },
  {
    label: "New Signups",
    value: `<span class="primary-gradient-text">89</span>`,
    subtitle: (
      <div className="flex items-center text-xs font-medium gap-1 primary-gradient-text">
        <Icon
          name="trend_up"
          height={14}
          width={14}
          className="text-[#276AEE]"
        />
        +23 this week
      </div>
    ),
    icon: "check_list" as IconName,
  },
  {
    label: "7-Day Retention",
    value: "73%",
    subtitle: (
      <div className="flex items-center text-xs font-medium gap-1 primary-gradient-text">
        <Icon
          name="trend_up"
          height={14}
          width={14}
          className="text-[#276AEE]"
        />
        +2% from last week
      </div>
    ),
    icon: "calendar" as IconName,
  },
  {
    label: "30-Day Retention",
    value: `<span class="bg-[linear-gradient(148deg,#FF6565_16.41%,#EC4213_59.87%)] bg-clip-text text-transparent">45%</span>`,
    subtitle: (
      <div className="flex items-center text-xs font-medium gap-1 text-[#f03]">
        <Icon name="trend_down" height={14} width={14} />
        -3% from last month
      </div>
    ),
    icon: "calendar" as IconName,
  },
];

const CoreUserMetrics = () => {
  return (
    <div>
      <SectionHeader title="Core User Metrics" className="mb-5" />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
    </div>
  );
};

export default CoreUserMetrics;
