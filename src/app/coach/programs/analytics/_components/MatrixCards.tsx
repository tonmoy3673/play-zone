import Icon, { IconName } from "@/utils/icon";
import MatrixCard from "@/components/shared/MatrixCard";

const MatrixCards = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {[
        {
          label: "Program Completion",
          value: "76%",
          subtitle: (
            <div className="flex items-center text-xs font-medium gap-1 primary-gradient-text">
              <Icon
                name="trend_up"
                height={14}
                width={14}
                className="text-[#276AEE]"
              />
              +8% this week
            </div>
          ),
          icon: "check_check" as IconName,
        },
        {
          label: "Weekly Active",
          value: `<span class="primary-gradient-text">48</span><span class="text-dark/30"> / </span><span>65</span>`,
          subtitle: "Athletes",
          icon: "calendar" as IconName,
        },
        {
          label: "Avg Task Score",
          value: "89%",
          subtitle: "Above target",
          icon: "dashboard_speed" as IconName,
        },
        {
          label: "Completion Rate",
          value: `<span class="primary-gradient-text">82%</span>`,
          subtitle: "All Tasks",
          icon: "star_half" as IconName,
        },
        {
          label: "Revenue",
          value: "12",
          subtitle: "Need Attention",
          icon: "coins_dollar" as IconName,
        },
      ].map((metric, idx) => (
        <MatrixCard
          key={idx}
          label={metric.label}
          value={metric.value}
          icon={metric.icon}
          subtitle={metric.subtitle}
        />
      ))}
    </div>
  );
};

export default MatrixCards;
