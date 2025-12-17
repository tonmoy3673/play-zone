import MatrixCard from "@/components/shared/MatrixCard";

const MatrixCards = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <MatrixCard
        label="Total Tasks"
        value="24"
        subtitle="Across all Modules"
        icon="check_check"
      />
      <MatrixCard
        label="Avg Completion"
        value="82%"
        subtitle="+5% this Week"
        icon="calender"
      />
      <MatrixCard
        label="Average Score"
        value="89%"
        subtitle="Above Target"
        icon="dashboard_speed"
      />
      <MatrixCard
        label="High Risk Tasks"
        value="3"
        subtitle="Need attention"
        icon="star_half"
      />
    </div>
  );
};

export default MatrixCards;
