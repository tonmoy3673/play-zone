import { SectionHeader } from "@/components/shared/SectionHeader";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Icon, { IconName } from "@/utils/icon";
import React from "react";

const activityData = [
  {
    title: "User reported for inappropriate Content",
    name: "Sarah-jones",
    time: "5 minutes Ago",
    status: "Review",
    icon: "triangle_alert" as IconName,
  },
  {
    title: "New premium subscription activated",
    name: "Sarah-jones",
    time: "5 minutes Ago",
    status: "Review",
    icon: "crown" as IconName,
  },
  {
    title: "User account suspended for policy violation",
    name: "Sarah-jones",
    time: "5 minutes Ago",
    status: "Review",
    icon: "policy" as IconName,
  },
  {
    title: "User reported for inappropriate Content",
    name: "Sarah-jones",
    time: "5 minutes Ago",
    status: "Review",
    icon: "task" as IconName,
  },
];

const RecentActivity = () => {
  return (
    <Card>
      <SectionHeader title="Recent Activity" className="mb-5" />

      <div className="space-y-2">
        {activityData.map((metric, idx) => (
          <Card key={idx} className="bg-white/60">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center shrink-0 size-10 rounded-full bg-white">
                  <Icon
                    name={metric.icon}
                    height={20}
                    width={20}
                    className="text-dark"
                  />
                </div>

                <div className="space-y-0.5 grid">
                  <span className="text-sm font-semibold text-dark">
                    {metric.title}
                  </span>
                  <span className="text-xs text-dark/70">
                    {metric.name} • {metric.time}
                  </span>
                </div>
              </div>

              <Badge variant="warning" className="h-8 text-xs">
                {metric.status}
              </Badge>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
};

export default RecentActivity;
