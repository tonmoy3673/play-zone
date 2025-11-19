"use client";

import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import { Dispatch, SetStateAction } from "react";
import Checkbox from "@/components/ui/Checkbox";
import { AnimatedButton } from "@/components/ui/Button";

const ExportReportModal = ({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <form>
      <div className="p-5 grid sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2">
          <Input
            label="Report Scope"
            placeholder="Enter Report Scope"
            className="bg-[#F8FAFF] rounded-2xl"
          />
        </div>

        <Select
          label="Date Range"
          placeholder="Select Date"
          options={[
            {
              label: "Last 30 Days",
              value: "Last 30 Days",
            },
            {
              label: "Last 60 Days",
              value: "Last 60 Days",
            },
          ]}
          className="bg-[#F8FAFF] rounded-2xl"
        />

        <div className="grid gap-3">
          <label className="font-medium text-sm">Formate</label>

          <div className="flex items-center gap-1.5 text-sm text-dark">
            {[
              {
                label: "PDF",
                value: "PDF",
              },
              {
                label: "PNG",
                value: "PNG",
              },
              {
                label: "CSV",
                value: "CSV",
              },
              {
                label: "XL",
                value: "XL",
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
          label="Expires Date"
          placeholder="9/16/2025"
          type="date"
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

        <div className="grid gap-3 sm:col-span-2">
          <label className="font-medium text-sm">Date Granularity</label>

          <div className="grid grid-cols-3 text-center gap-4 text-sm text-dark">
            {[
              {
                label: "Daily",
                value: "Daily",
              },
              {
                label: "Weekly",
                value: "Weekly",
              },
              {
                label: "Monthly",
                value: "Monthly",
              },
            ].map(({ label, value }) => (
              <label
                key={value}
                className="flex cursor-pointer items-center gap-2"
              >
                <input
                  type="radio"
                  name="granularity"
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

        <div className="grid gap-3 sm:col-span-2">
          <label className="font-medium text-sm">Include Section</label>

          <div className="space-y-1">
            {[
              { label: "Monthly Growth", value: "Monthly Growth" },
              { label: "Churn Rate", value: "Churn Rate" },
              { label: "Revenue", value: "Revenue" },
              { label: "Revenue Trend", value: "Revenue Trend" },
              { label: "Snapshot", value: "Snapshot" },
            ].map(({ label, value }) => (
              <div
                key={value}
                className="flex items-center justify-between flex-wrap bg-[#F8FAFF] rounded-lg p-3"
              >
                <span className="text-sm text-dark">{label}</span>
                <Checkbox name="section" value={value} />
              </div>
            ))}
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

        <AnimatedButton
          type="submit"
          className="bg-primary-gradient border border-[#1556D84D] whitespace-nowrap px-4 py-2.5  h-[42px] flex items-center rounded-full gap-2 text-sm font-medium text-white"
        >
          Export
        </AnimatedButton>
      </div>
    </form>
  );
};

export default ExportReportModal;
