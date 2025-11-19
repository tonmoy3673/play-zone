import Icon from "@/utils/icon";
import MatrixCard from "@/components/shared/MatrixCard";

const MatrixCards = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <MatrixCard
        label="Top Performers"
        value="12"
        subtitle={
          <div className="flex items-center text-xs font-medium gap-1 primary-gradient-text">
            <Icon
              name="trend_up"
              height={14}
              width={14}
              className="text-[#5C8FF7]"
            />
            +90% Completion
          </div>
        }
        icon="check_check"
      />
      <MatrixCard
        label="At Risk Athletes"
        value={`<span class="text-[#f03]">8</span>`}
        subtitle="Needs Attention"
        icon="calendar"
      />
      <MatrixCard
        label="Average Score"
        value="84%"
        subtitle="All athletes"
        icon="dashboard_speed"
      />
      <MatrixCard
        label="Active Streaks"
        value={`<span class="primary-gradient-text">23</span>`}
        subtitle="Athletes with 3+ days"
        icon="star_half"
      />
    </div>
  );
};

export default MatrixCards;
