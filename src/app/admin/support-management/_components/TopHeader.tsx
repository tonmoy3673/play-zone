import { AnimatedButton } from "@/components/ui/Button";
import Icon from "@/utils/icon";
import React from "react";
import AddNewTicket from "./AddNewTicket";

const TopHeader = () => {
  return (
    <div className="flex items-center justify-between mb-4 flex-wrap">
      <h2 className="text-2xl font-semibold text-dark">Support Management</h2>

      <div className="flex gap-2 flex-wrap">
        <AnimatedButton className="bg-[#1556D826] border border-[#1556D81A] whitespace-nowrap px-4 py-2.5 md:px-6 md:py-4 md:h-14 flex items-center rounded-full gap-2 text-sm font-medium">
          <Icon
            name="marketing"
            height={20}
            width={20}
            className="text-[#276AEE]"
          />
          <span className="primary-gradient-text">Emergency Broadcast</span>
        </AnimatedButton>

        <AddNewTicket />
      </div>
    </div>
  );
};

export default TopHeader;
