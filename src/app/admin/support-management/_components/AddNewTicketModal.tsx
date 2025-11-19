"use client";

import Icon from "@/utils/icon";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";
import { Dispatch, SetStateAction } from "react";
import { AnimatedButton } from "@/components/ui/Button";

const AddNewTicketModal = ({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <form>
      <div className="p-5 grid sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2">
          <Input
            label="Requester"
            placeholder="Enter Requester"
            className="bg-[#F8FAFF] rounded-2xl"
          />
        </div>

        <Select
          label="Subject"
          placeholder="Select Subject"
          options={[
            {
              label: "Bug Report",
              value: "Bug Report",
            },
            {
              label: "Bug Report 2",
              value: "Bug Report 2",
            },
          ]}
          className="bg-[#F8FAFF] rounded-2xl"
        />

        <div className="grid gap-3">
          <label className="font-medium text-sm">Formate</label>

          <div className="flex items-center gap-1.5 text-sm text-dark">
            {[
              {
                label: "Low",
                value: "Low",
              },
              {
                label: "Normal",
                value: "Normal",
              },
              {
                label: "High",
                value: "High",
              },
              {
                label: "Urgent",
                value: "Urgent",
              },
            ].map(({ label, value }) => (
              <label
                key={value}
                className="flex cursor-pointer items-center gap-2"
              >
                <input
                  type="radio"
                  name="formate"
                  value={value}
                  className="peer sr-only"
                />
                <div className="h-14 rounded-2xl relative border border-[#F8FAFF] text-dark bg-[#F8FAFF] flex items-center transition-all px-5 peer-checked:bg-primary-gradient peer-checked:border-[#1556D84D] peer-checked:text-white">
                  {label}
                </div>
              </label>
            ))}
          </div>
        </div>

        <Input
          label="Due Date"
          placeholder="9/16/2025"
          type="date"
          className="bg-[#F8FAFF] rounded-2xl"
        />

        <Select
          label="SLA Target"
          placeholder="Select SLA Target"
          options={[
            {
              label: "Assign to",
              value: "Assign to",
            },
            {
              label: "Assign from",
              value: "Assign from",
            },
          ]}
          className="bg-[#F8FAFF] rounded-2xl"
        />

        <div className="grid gap-3 sm:col-span-2">
          <label className="font-medium text-sm">Channel</label>

          <div className="grid grid-cols-4 text-center gap-4 text-sm text-dark">
            {[
              {
                label: "Web",
                value: "Web",
              },
              {
                label: "Email",
                value: "Email",
              },
              {
                label: "In-App",
                value: "In-App",
              },
              {
                label: "Phone",
                value: "Phone",
              },
            ].map(({ label, value }) => (
              <label
                key={value}
                className="flex cursor-pointer items-center gap-2"
              >
                <input
                  type="radio"
                  name="channel"
                  value={value}
                  className="peer sr-only"
                />
                <div className="h-14 w-full rounded-2xl relative text-center border border-[#F8FAFF] text-dark bg-[#F8FAFF] flex items-center justify-center transition-all px-5 peer-checked:bg-primary-gradient peer-checked:border-[#1556D84D] peer-checked:text-white">
                  {label}
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="sm:col-span-2">
          <Textarea
            label="Description"
            placeholder="Provide details about this ticket..."
            className="bg-[#F8FAFF] rounded-2xl"
          />
        </div>

        <div className="sm:col-span-2 grid gap-3">
          <label className="font-medium text-sm">
            Credentials & Certifications
          </label>
          <label className="bg-[#F8FAFF] cursor-pointer p-4 rounded-2xl flex items-center justify-between gap-3 flex-wrap">
            <input type="file" name="certifications" className="peer sr-only" />

            <div className="flex items-center gap-3">
              <div className="size-12 rounded-full bg-white flex items-center justify-center">
                <Icon
                  name="file"
                  height={20}
                  width={20}
                  className="text-dark"
                />
              </div>
              <div className="grid gap-1">
                <span className="text-sm font-medium text-dark">
                  Upload Your File here
                </span>
                <span className="text-xs text-dark/70">
                  File or PDF must be less than 30 MB
                </span>
              </div>
            </div>

            <span className="text-sm font-medium primary-gradient-text">
              Browse Files
            </span>
          </label>
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
          Create Ticket
        </AnimatedButton>
      </div>
    </form>
  );
};

export default AddNewTicketModal;
