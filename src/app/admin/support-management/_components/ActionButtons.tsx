import Card from "@/components/ui/Card";
import Icon from "@/utils/icon";
import React from "react";

const ActionButtons = () => {
  return (
    <div className="grid grid-cols-2 gap-2.5 text-sm font-medium text-dark">
      <Card className="flex items-center gap-3 bg-white/60 md:rounded-2xl px-4 py-[18px]">
        <Icon name="link_backward" height={20} width={20} />
        <span>Respond</span>
      </Card>
      <Card className="flex items-center gap-3 bg-white/60 md:rounded-2xl px-4 py-[18px]">
        <Icon name="user_add" height={20} width={20} />
        <span>Assign</span>
      </Card>
      <Card className="flex items-center gap-3 bg-white/60 md:rounded-2xl px-4 py-[18px]">
        <Icon name="analytics_up" height={20} width={20} />
        <span>Escalate</span>
      </Card>
      <Card className="flex items-center gap-3 bg-white/60 md:rounded-2xl px-4 py-[18px]">
        <Icon name="check_check" height={20} width={20} />
        <span>Resolve</span>
      </Card>
    </div>
  );
};

export default ActionButtons;
