"use client";

import Icon from "@/utils/icon";
import { useState } from "react";
import AddNewTicketModal from "./AddNewTicketModal";
import { AnimatedButton } from "@/components/ui/Button";
import { Dialog, DialogContent } from "@/components/ui/Dialog";

const AddNewTicket = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatedButton
        type="button"
        onClick={() => setIsOpen(true)}
        className="bg-primary-gradient border border-[#1556D84D] whitespace-nowrap px-4 py-2.5 md:px-6 md:py-4 md:h-14 flex items-center rounded-full gap-2 text-sm font-medium text-white"
      >
        <Icon name="plus" height={20} width={20} />
        Add New Ticket
      </AnimatedButton>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent title="Add New Ticket" className="sm:max-w-[737px]">
          <AddNewTicketModal setIsOpen={setIsOpen} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddNewTicket;
