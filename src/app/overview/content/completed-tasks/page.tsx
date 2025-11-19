"use client";
import CreateNewButton from "../../program/_components/CreateNewButton";
import { useModalContext } from "../layout";
import CompletedCards from "./_components/CompletedCards";
import RecentlyCompletedTasks from "./_components/RecentlyCompletedTasks";
import TopPerformers from "./_components/TopPerformers";

export default function Page() {
  const { setIsModalOpen } = useModalContext();
  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">All Tasks</h1>
          <p className="text-gray-500 mt-1">
            Overview of tasks that have been completed by athletes, allowing for
            easier performance tracking.
          </p>
        </div>
        <CreateNewButton onClick={() => setIsModalOpen(true)} />
      </header>
      <CompletedCards />
      <RecentlyCompletedTasks />
      <TopPerformers />
    </main>
  );
}
