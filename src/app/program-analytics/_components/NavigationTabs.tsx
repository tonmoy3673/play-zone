"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon, { IconName } from "@/utils/icon";
import { AnimatedButton } from "@/components/ui/Button";

const NavigationTabs = () => {
  const pathname = usePathname();

  return (
    <div className="flex gap-3 mb-4 overflow-x-auto p-2.5 bg-white/30 rounded-2xl border-white border">
      {[
        {
          icon: "property_view" as IconName,
          label: "Overview",
          href: "/program-analytics",
        },
        {
          icon: "dashboard_speed" as IconName,
          label: "Athlete Performance",
          href: "/program-analytics/athlete",
        },
        {
          icon: "task_edit" as IconName,
          label: "Task Analytics",
          href: "/program-analytics/task",
        },
        {
          icon: "users" as IconName,
          label: "Engagement",
          href: "/program-analytics/engagement",
        },
        {
          icon: "video" as IconName,
          label: "Live Sessions",
          href: "/program-analytics/live-sessions",
        },
        {
          icon: "analytics_up" as IconName,
          label: "Progress",
          href: "/program-analytics/progress",
        },
        {
          icon: "medal" as IconName,
          label: "Leaderboard",
          href: "/program-analytics/leaderboard",
        },
      ].map((tab, idx) => (
        <Link href={tab.href} key={idx}>
          <AnimatedButton
            className={` whitespace-nowrap p-3 h-11 flex items-center rounded-xl gap-2 text-sm font-medium  ${
              pathname === tab.href
                ? "bg-primary-gradient border border-[#1556D84D] "
                : "bg-[#457FF326] border border-[#1556D826]"
            }`}
          >
            <Icon
              name={tab.icon}
              height={20}
              width={20}
              className={
                pathname === tab.href ? "text-white" : "text-[#5C8FF7]"
              }
            />
            <span
              className={
                pathname === tab.href ? "text-white" : "primary-gradient-text"
              }
            >
              {tab.label}
            </span>
          </AnimatedButton>
        </Link>
      ))}
    </div>
  );
};

export default NavigationTabs;
