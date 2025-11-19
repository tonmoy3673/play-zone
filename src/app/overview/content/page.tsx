"use client";

import CreateNewButton from "../program/_components/CreateNewButton";
import AllTasksBoxes from "./_components/AllTasksBoxes";
import CurrentTasks from "./_components/CurrentTasks";
import RecentlyAddedTask from "./_components/RecentlyAddedTask";
import { useModalContext } from "./layout";

const Page = () => {
  const { setIsModalOpen } = useModalContext();

  return (
    <main className="flex-1 p-5 overflow-y-auto">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-bold text-dark">All Tasks</h1>
          <p className="text-sm font-normal text-paragraph-dark">
            Overview of tasks that have been completed by athletes, allowing for
            easier performance tracking.
          </p>
        </div>
        <CreateNewButton onClick={() => setIsModalOpen(true)} />
      </header>

      <AllTasksBoxes />

      <CurrentTasks />

      <RecentlyAddedTask />
    </main>
  );
};

export default Page;
