"use client";

import Icon from "@/utils/icon";
import { useState } from "react";
import ExportReportModal from "./ExportReportModal";
import { AnimatedButton } from "@/components/ui/Button";
import { Dialog, DialogContent } from "@/components/ui/Dialog";

const ExportReport = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatedButton
        type="button"
        onClick={() => setIsOpen(true)}
        className="bg-primary-gradient border border-[#1556D84D] whitespace-nowrap px-4 py-2.5 md:px-6 md:py-4 md:h-14 flex items-center rounded-full gap-2 text-sm font-medium text-white"
      >
        <Icon name="download" height={20} width={20} />
        Export Report
      </AnimatedButton>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent title="Export Report" className="sm:max-w-[737px]">
          <ExportReportModal setIsOpen={setIsOpen} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ExportReport;
