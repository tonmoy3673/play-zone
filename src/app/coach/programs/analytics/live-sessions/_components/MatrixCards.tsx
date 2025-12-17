import MatrixCard from "@/components/shared/MatrixCard";

const MatrixCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <MatrixCard
        label="Sessions Hosted"
        value="6"
        subtitle="This Month"
        icon="check_check"
      />
      <MatrixCard
        label="Avg Attendance"
        value="38%"
        subtitle="25 of 65 Athletes"
        icon="calendar"
      />
      <MatrixCard
        label="Avg Watch Time"
        value="24 min"
        subtitle="Per Session"
        icon="dashboard_speed"
      />
      <MatrixCard
        label="Avg Rating"
        value="4.3"
        subtitle="Out of 5.0"
        icon="star_half"
      />
    </div>
  );
};

export default MatrixCards;
