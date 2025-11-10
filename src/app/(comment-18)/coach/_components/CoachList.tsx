import React from "react";
import CoachCard from "./CoachCard";

const CoachList = () => {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
      {[...Array(4)].map((_, i) => (
        <CoachCard key={i} />
      ))}
    </div>
  );
};

export default CoachList;
