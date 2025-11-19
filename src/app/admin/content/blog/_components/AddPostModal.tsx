"use client";

import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";
import { Dispatch, SetStateAction } from "react";
import { AnimatedButton } from "@/components/ui/Button";

const AddPostModal = ({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <form>
      <div className="p-5 grid gap-4">
        <Input
          label="Title"
          placeholder="Post Title"
          className="bg-[#F8FAFF] rounded-2xl"
        />

        <Textarea
          label="Description"
          placeholder="Write the details of your Post..."
          className="bg-[#F8FAFF] rounded-2xl"
        />

        <Select
          label="Coach"
          placeholder="Select Coach"
          options={[
            {
              label: "@samgay",
              value: "@samgay",
            },
            {
              label: "@johndoe",
              value: "@johndoe",
            },
          ]}
          className="bg-[#F8FAFF] rounded-2xl"
        />

        <div className="grid sm:grid-cols-2 gap-4">
          <Input
            label="Created Date"
            placeholder="Jun 28, 2025"
            className="bg-[#F8FAFF] rounded-2xl"
          />

          <Select
            label="Status"
            placeholder="Select Status"
            options={[
              {
                label: "Active",
                value: "Active",
              },
              {
                label: "Inactive",
                value: "Inactive",
              },
            ]}
            className="bg-[#F8FAFF] rounded-2xl"
          />
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 p-5 border-t border-[#EBF1FF]">
        <AnimatedButton
          type="button"
          onClick={() => setIsOpen(false)}
          className="bg-[#1556D826] border border-[#1556D81A] whitespace-nowrap px-4 py-2.5  h-[42px] flex items-center rounded-full gap-2 text-sm font-medium"
        >
          <span className="primary-gradient-text">Cancel</span>
        </AnimatedButton>

        <AnimatedButton
          type="submit"
          className="bg-primary-gradient border border-[#1556D84D] whitespace-nowrap px-4 py-2.5  h-[42px] flex items-center rounded-full gap-2 text-sm font-medium text-white"
        >
          Save Post
        </AnimatedButton>
      </div>
    </form>
  );
};

export default AddPostModal;
