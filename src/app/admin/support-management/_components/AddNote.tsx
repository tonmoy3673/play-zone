import { SectionHeader } from "@/components/shared/SectionHeader";
import React from "react";

const AddNote = () => {
  return (
    <div>
      <SectionHeader className="mb-3" title="Add note" titleClass="text-sm" />

      <textarea
        className="rounded-2xl placeholder:text-dark/70 bg-white/60 border border-white block w-full outline-none px-5 py-4 text-sm text-dark min-h-[100px]"
        placeholder="Add internal note..."
      ></textarea>
    </div>
  );
};

export default AddNote;
