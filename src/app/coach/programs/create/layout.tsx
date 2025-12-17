import React, { ReactNode } from "react";

const ProgramLayout = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-[1372px] mx-auto">{children}</div>;
};

export default ProgramLayout;
