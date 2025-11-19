"use client";
import CreateNewButton from "../../program/_components/CreateNewButton";
import { useModalContext } from "../layout";
import AssignedContent from "./_components/AssignedContent";
import Library from "./_components/Library";

import LibraryCards from "./_components/LibraryCards";

export default function Page() {
  const { setIsModalOpen } = useModalContext();
  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Tasks Library</h1>
          <p className="text-gray-500 mt-1">
            Manage and organize all your training content in one place
          </p>
        </div>
        <CreateNewButton onClick={() => setIsModalOpen(true)} />
      </header>
      <LibraryCards />
      <Library />
      <AssignedContent />
    </main>
  );
}
