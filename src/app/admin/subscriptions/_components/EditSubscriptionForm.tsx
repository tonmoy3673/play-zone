"use client";

import Image from "next/image";
import { UserProp } from "./UserList";
import Badge from "@/components/ui/Badge";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Switch from "@/components/ui/Switch";
import { Dispatch, SetStateAction } from "react";
import { AnimatedButton } from "@/components/ui/Button";

const EditSubscriptionForm = ({
  user,
  setIsOpen,
}: {
  user: UserProp;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <form>
      <div className="p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="https://images.unsplash.com/photo-1631659718597-1b62ad76da3a?w=200&h=200&fit=crop"
              alt={user.name}
              height={48}
              width={48}
              className="size-12 rounded-full object-cover"
            />
            <div className="font-medium grid space-x-0.5">
              <span className="text-sm text-dark">{user.name}</span>
              <span className="text-xs text-dark/70">{user.role}</span>
            </div>
          </div>

          <Badge variant="secondary" className="text-xs h-8">
            ID: #TIK 284597
          </Badge>
        </div>

        <Select
          label="Current Plan"
          placeholder="Select Role"
          options={[
            {
              label: "Premium",
              value: "Premium",
            },
            {
              label: "Trail",
              value: "Trail",
            },
          ]}
          className="bg-[#F8FAFF] rounded-2xl"
        />

        <div className="grid sm:grid-cols-2 gap-4">
          <Input
            label="Start Date"
            placeholder="9/16/2025"
            className="bg-[#F8FAFF] rounded-2xl"
          />
          <Input
            label="End Date"
            placeholder="9/16/2025"
            className="bg-[#F8FAFF] rounded-2xl"
          />
        </div>

        <Input
          label="Amount"
          placeholder="Enter Amount"
          className="bg-[#F8FAFF] rounded-2xl"
        />

        <div className="bg-[#F8FAFF] rounded-2xl p-5 grid gap-5 text-sm font-medium text-dark">
          <div className="flex items-center justify-between">
            <span>Send Update Email</span>
            <Switch value={true} />
          </div>
          <div className="flex items-center justify-between">
            <span>Refund Last Invoice</span>
            <Switch value={false} />
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
            className="bg-[linear-gradient(180deg,rgba(255,0,51,0.05)_0%,rgba(255,0,51,0.12)_100%)] text-[#F03] border border-[#FF00331A] whitespace-nowrap px-4 py-2.5  h-[42px] flex items-center rounded-full gap-2 text-sm font-medium"
          >
            Delete Subscription
          </AnimatedButton>
          <AnimatedButton
            type="submit"
            className="bg-primary-gradient border border-[#1556D84D] whitespace-nowrap px-4 py-2.5  h-[42px] flex items-center rounded-full gap-2 text-sm font-medium text-white"
          >
            Save Changes
          </AnimatedButton>
        </div>
      </div>
    </form>
  );
};

export default EditSubscriptionForm;
