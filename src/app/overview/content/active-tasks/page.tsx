"use client";

import CreateNewButton from "../../program/_components/CreateNewButton";
import { useModalContext } from "../layout";
import ActiveTask from "./_components/ActiveTask";

export default function Page() {
  const { setIsModalOpen } = useModalContext();
  return (
    <div>
      <div className="flex justify-between items-center my-5 px-5">
        <p className="text-3xl font-semibold">Active Tasks in Progress</p>
        <CreateNewButton onClick={() => setIsModalOpen(true)} />
      </div>
      <div>
        <ActiveTask />
        <ActiveTask />
        <ActiveTask />
        <ActiveTask />
      </div>
    </div>
  );
}
