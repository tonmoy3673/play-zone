import MatrixCard from "@/components/shared/MatrixCard";

const MatrixCards = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <MatrixCard
        label="Avg Daily Logins"
        value="38"
        subtitle="Athlete"
        icon="check_check"
      />
      <MatrixCard
        label="Session Length"
        value="24 Min"
        subtitle="Median Time"
        icon="calendar"
      />
      <MatrixCard
        label="Chat Usage"
        value="67%"
        subtitle="Athlete Active"
        icon="dashboard_speed"
      />
      <MatrixCard
        label="Livestream Rate"
        value="38%"
        subtitle="Avg Attendance"
        icon="star_half"
      />
    </div>
  );
};

export default MatrixCards;
