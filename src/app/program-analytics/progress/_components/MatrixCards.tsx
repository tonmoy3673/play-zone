import MatrixCard from "@/components/shared/MatrixCard";

const MatrixCards = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      <MatrixCard
        label="Signed Up"
        value="65"
        icon="check_list"
        progress={100}
      />
      <MatrixCard
        label="Started Program"
        value="58"
        icon="task"
        progress={89}
      />
      <MatrixCard
        label="Reached Midpoint"
        value="49"
        icon="check_check"
        progress={65}
      />
      <MatrixCard
        label="Completed Tasks"
        value="42"
        icon="check_check"
        progress={58}
      />
      <MatrixCard
        label="Left Review"
        value="38"
        icon="star_half"
        progress={75}
      />
    </div>
  );
};

export default MatrixCards;
