"use client";

import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import { Dispatch, SetStateAction } from "react";
import { AnimatedButton } from "@/components/ui/Button";

const CreatePromoCodeModal = ({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <form>
      <div className="p-5 grid sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2">
          <Input
            label="Code Name"
            placeholder="Enter Code Name"
            className="bg-[#F8FAFF] rounded-2xl"
          />
        </div>

        <Select
          label="Type"
          placeholder="Select Type"
          options={[
            {
              label: "Percentage",
              value: "Percentage",
            },
            {
              label: "Amount",
              value: "Amount",
            },
          ]}
          className="bg-[#F8FAFF] rounded-2xl"
        />

        <Input
          label="Discount"
          placeholder="Enter Discount"
          className="bg-[#F8FAFF] rounded-2xl"
        />

        <Input
          label="Expires Date"
          type="date"
          placeholder="9/16/2025"
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
          Save Promo code
        </AnimatedButton>
      </div>
    </form>
  );
};

export default CreatePromoCodeModal;
