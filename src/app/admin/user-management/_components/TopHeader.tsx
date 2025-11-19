import React from "react";
import Filter from "./Filter";
import AddUser from "./AddUser";

const TopHeader = () => {
  return (
    <div className="flex items-center justify-between gap-3 mb-6 flex-wrap">
      <h2 className="text-2xl font-semibold text-dark">User Management</h2>

      <div className="flex gap-2 flex-wrap items-center">
        <Filter />
        <AddUser />
      </div>
    </div>
  );
};

export default TopHeader;
