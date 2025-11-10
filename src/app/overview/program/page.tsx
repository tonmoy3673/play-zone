/* eslint-disable @next/next/no-img-element */

import FigmaCardGrid from "../dashboard/_components/FigmaCardGrid";
import ProgramCreationSteps from "../dashboard/_components/ProgramCreationSteps";
import ProgramDetails from "../dashboard/_components/ProgramDetails";
import ProgramSchedule from "../dashboard/_components/ProgramSchedule";
import RolePermissions from "../dashboard/_components/RolePermissions";

export default function page() {
  return (
    <div className="flex flex-row gap-4">
      {/* news card */}
      <div className="flex-1.5">
        <ProgramCreationSteps />
      </div>
      <div className="flex-6">
        <FigmaCardGrid />
        <ProgramDetails />
        <ProgramSchedule />
        <RolePermissions />
      </div>
    </div>
  );
}
