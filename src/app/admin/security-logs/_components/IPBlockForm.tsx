import { AnimatedButton } from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Icon from "@/utils/icon";
import React from "react";

const IPBlockForm = () => {
  return (
    <div className="mb-4">
      <form className="flex items-start md:items-end flex-col md:flex-row gap-3 md:gap-5">
        <div className="grid sm:grid-cols-2 gap-3 md:gap-5 flex-1 w-full">
          <Input
            label="Add IP to Blocklist"
            placeholder="123.2356.345"
            className="rounded-2xl bg-white"
          />
          <Input
            label="Reason"
            placeholder="Select Role"
            className="rounded-2xl bg-white"
          />
        </div>

        <AnimatedButton className="bg-[#1556D826] border border-[#1556D81A] whitespace-nowrap px-6 py-4 h-14 flex items-center rounded-2xl gap-2 text-sm font-medium">
          <Icon
            name="unavailable"
            height={20}
            width={20}
            className="text-[#276AEE]"
          />
          <span className="primary-gradient-text">Block</span>
        </AnimatedButton>
      </form>
    </div>
  );
};

export default IPBlockForm;
