"use client";

import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";
import { Dispatch, SetStateAction } from "react";
import { AnimatedButton } from "@/components/ui/Button";

const AddUserModal = ({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <form>
      <div className="p-5 grid sm:grid-cols-2 gap-4">
        <Input
          label="Full Name"
          placeholder="Enter Full Name"
          className="bg-[#F8FAFF] rounded-2xl"
        />
        <Select
          label="Role"
          placeholder="Select Role"
          options={[
            {
              label: "Coach",
              value: "Coach",
            },
            {
              label: "Player",
              value: "Player",
            },
          ]}
          className="bg-[#F8FAFF] rounded-2xl"
        />

        <div className="sm:col-span-2">
          <Input
            label="Email"
            placeholder="Enter Email"
            className="bg-[#F8FAFF] rounded-2xl"
          />
        </div>

        <Input
          label="Join Date"
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

        <div className="sm:col-span-2">
          <Textarea
            label="Note"
            placeholder="Write your Coach details..."
            className="bg-[#F8FAFF] rounded-2xl"
          />
        </div>

        <div className="sm:col-span-2 text-sm  text-dark">
          <div className="grid gap-3">
            <label className="font-medium">Plan</label>

            <div className="flex items-center gap-8 text-sm text-dark">
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="radio"
                  name="plan"
                  value="free"
                  className="peer sr-only"
                />
                <div className="size-[18px] rounded-full border-2 border-[#A1A4AE] peer-checked:border-[#5C8FF7] relative after:absolute after:size-2 after:bg-primary-gradient after:rounded-full after:hidden after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 peer-checked:after:block after:transition-all transition-all"></div>
                <span className="peer-checked:text-blue-600">Free</span>
              </label>

              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="radio"
                  name="plan"
                  value="premium"
                  className="peer sr-only"
                />
                <div className="size-[18px] rounded-full border-2 border-[#A1A4AE] peer-checked:border-[#5C8FF7] relative after:absolute after:size-2 after:bg-primary-gradient after:rounded-full after:hidden after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 peer-checked:after:block after:transition-all transition-all"></div>
                <span className="peer-checked:text-blue-600">Premium</span>
              </label>

              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="radio"
                  name="plan"
                  value="trial"
                  className="peer sr-only"
                />
                <div className="size-[18px] rounded-full border-2 border-[#A1A4AE] peer-checked:border-[#5C8FF7] relative after:absolute after:size-2 after:bg-primary-gradient after:rounded-full after:hidden after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 peer-checked:after:block after:transition-all transition-all"></div>
                <span className="peer-checked:text-blue-600">Trial</span>
              </label>
            </div>
          </div>
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

        <div className="flex gap-2 flex-wrap">
          <AnimatedButton
            type="button"
            className="bg-[#1556D826] border border-[#1556D81A] whitespace-nowrap px-4 py-2.5  h-[42px] flex items-center rounded-full gap-2 text-sm font-medium"
          >
            <span className="primary-gradient-text">Save Invite</span>
          </AnimatedButton>
          <AnimatedButton
            type="submit"
            className="bg-primary-gradient border border-[#1556D84D] whitespace-nowrap px-4 py-2.5  h-[42px] flex items-center rounded-full gap-2 text-sm font-medium text-white"
          >
            Save User
          </AnimatedButton>
        </div>
      </div>
    </form>
  );
};

export default AddUserModal;
