import AthleteCard from "./AthleteCard";

const AthleteList = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {[...Array(4)].map((_, i) => (
        <AthleteCard key={i} />
      ))}
    </div>
  );
};

export default AthleteList;
