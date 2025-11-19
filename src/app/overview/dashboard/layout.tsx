import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-[1280px] w-full mx-auto">{children}</div>;
};

export default DashboardLayout;
