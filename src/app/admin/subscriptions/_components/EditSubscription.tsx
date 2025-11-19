"use client";

import Icon from "@/utils/icon";
import { useState } from "react";
import { UserProp } from "./UserList";
import EditSubscriptionForm from "./EditSubscriptionForm";
import { Dialog, DialogContent } from "@/components/ui/Dialog";

const EditSubscription = ({ user }: { user: UserProp }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="size-8 flex items-center justify-center rounded-full bg-white text-dark"
      >
        <Icon name="edit" height={16} width={16} />
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent title="Edit Subscription" className="sm:max-w-[737px]">
          <EditSubscriptionForm user={user} setIsOpen={setIsOpen} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditSubscription;
