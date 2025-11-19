"use client";

import Icon from "@/utils/icon";
import { useState } from "react";
import AddFAQModal from "./AddFAQModal";
import { AnimatedButton } from "@/components/ui/Button";
import { Dialog, DialogContent } from "@/components/ui/Dialog";

const AddFAQ = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatedButton
        type="button"
        onClick={() => setIsOpen(true)}
        className="bg-primary-gradient border border-[#1556D84D] whitespace-nowrap px-3 h-11 flex items-center rounded-full gap-2 text-sm font-medium text-white"
      >
        <Icon name="plus" height={20} width={20} />
        Add FAQ
      </AnimatedButton>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent title="Add FAQ" className="sm:max-w-[737px]">
          <AddFAQModal setIsOpen={setIsOpen} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddFAQ;
