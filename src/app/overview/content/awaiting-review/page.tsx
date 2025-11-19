"use client";

import CreateNewButton from "../../program/_components/CreateNewButton";
import { useModalContext } from "../layout";
import Submission from "./_components/Submission";

export default function Page() {
  const { setIsModalOpen } = useModalContext();
  return (
    <div>
      <div className="flex justify-between items-center my-5 px-5">
        <div>
          <p className="text-3xl font-semibold">Submissions Awaiting Review</p>
          <p className="text-sm text-black/70 mt-2">
            Review athlete submissions and provide feedback on their progress.
          </p>
        </div>
        <CreateNewButton onClick={() => setIsModalOpen(true)} />
      </div>
      <Submission />
    </div>
  );
}
