"use client";

import Icon from "@/utils/icon";
import { useState } from "react";
import { AnimatedButton } from "@/components/ui/Button";
import CreateAnnouncementModal from "./CreateAnnouncementModal";
import { Dialog, DialogContent } from "@/components/ui/Dialog";

const CreateAnnouncement = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatedButton
        type="button"
        onClick={() => setIsOpen(true)}
        className="bg-primary-gradient border border-[#1556D84D] whitespace-nowrap px-3 h-11 flex items-center rounded-full gap-2 text-sm font-medium text-white"
      >
        <Icon name="plus" height={20} width={20} />
        Create Announcement
      </AnimatedButton>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent
          title="Create New Announcement"
          className="sm:max-w-[737px]"
        >
          <CreateAnnouncementModal setIsOpen={setIsOpen} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CreateAnnouncement;
