"use client";
import CreateNewButton from "../../program/_components/CreateNewButton";
import { useModalContext } from "../layout";
import StaffCards from "./_components/StaffCards";
import StaffFeedback from "./_components/StaffFeedback";
import StaffReviews from "./_components/StaffReviews";

export default function Page() {
  const { setIsModalOpen } = useModalContext();
  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Staff Review Log</h1>
          <p className="text-gray-500 mt-1">
            Showing all reviews completed by staff members
          </p>
        </div>
        <CreateNewButton onClick={() => setIsModalOpen(true)} />
      </header>
      <StaffCards />
      <StaffReviews />
      <StaffFeedback />
    </main>
  );
}
