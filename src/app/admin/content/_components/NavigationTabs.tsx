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
          icon: "help_square" as IconName,
          label: "FAQ Manager",
          href: "/admin/content/faq-manager",
        },
        {
          icon: "security_check" as IconName,
          label: "Terms &  Privacy",
          href: "/admin/content/terms-privacy",
        },
        {
          icon: "task_edit" as IconName,
          label: "Blog Post",
          href: "/admin/content/blog",
        },
        {
          icon: "marketing" as IconName,
          label: "Announcement",
          href: "/admin/content/announcement",
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
