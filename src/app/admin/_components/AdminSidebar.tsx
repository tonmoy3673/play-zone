"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Card from "@/components/ui/Card";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Icon, { IconName } from "@/utils/icon";

const navigationItems = [
  {
    icon: "dashboard_square" as IconName,
    label: "Dashboard",
    href: "/admin",
  },
  {
    icon: "mortarboard" as IconName,
    label: "User Management",
    href: "/admin/user-management",
  },
  {
    icon: "discover_square" as IconName,
    label: "Subscriptions",
    href: "/admin/subscriptions",
  },
  {
    icon: "users" as IconName,
    label: "Business Insights",
    href: "/admin/business-insights",
  },
  {
    icon: "customer_support" as IconName,
    label: "Support",
    href: "/admin/support-management",
  },
  {
    icon: "menu" as IconName,
    label: "Content",
    href: "/admin/content/faq-manager",
  },
  {
    icon: "users" as IconName,
    label: "Security",
    href: "/admin/security-logs",
  },
  // {
  //   icon: "marketing" as IconName,
  //   label: "Programs",
  //   href: "/admin",
  // },
  // {
  //   icon: "analytics_up" as IconName,
  //   label: "Analytics",
  //   href: "/admin",
  // },
];

export default function AdminSidebar() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const path = usePathname();

  useEffect(() => {
    if (!path) return;

    // Content section (handles nested routes)
    if (path.startsWith("/admin/content")) {
      setActiveMenu("Content");
      return;
    }

    // Exact match for items that share /admin
    const exactMatch = navigationItems.find((item) => item.href === path);

    if (exactMatch) {
      setActiveMenu(exactMatch.label);
      return;
    }

    // Fallback for nested routes except content
    const partialMatch = navigationItems.find(
      (item) => item.href !== "/admin" && path.startsWith(item.href)
    );

    if (partialMatch) {
      setActiveMenu(partialMatch.label);
      return;
    }

    // Default (dashboard)
    setActiveMenu("Dashboard");
  }, [path]);

  return (
    <aside
      className={cn(
        "relative z-10 hidden h-full flex-col items-center  overflow-x-hidden bg-accent_primary text-sm font-normal text-white md:flex",
        "transition-all duration-300 pt-5 ease-in-out"
      )}
    >
      <div className="size-7 lg:size-10 rounded-lg flex items-center justify-center">
        <Image
          src={"/logo-png.png"}
          alt="logo"
          width={40}
          height={40}
          className="w-full h-full object-contain"
        />
      </div>

      <Card
        className={`flex flex-col max-lg:items-center w-[72px] lg:w-[246px] md:rounded-2xl mt-9 backdrop-blur-3xl gap-4 px-4 py-6`}
      >
        {navigationItems?.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="flex items-center justify-center lg:justify-start lg:gap-2"
          >
            <div
              className={cn(
                "size-10 flex items-center justify-center rounded-[14px]",
                activeMenu === item.label
                  ? "bg-primary-gradient"
                  : "bg-transparent"
              )}
            >
              <Icon
                name={item.icon}
                height={20}
                width={20}
                className={
                  activeMenu === item.label ? "text-white" : "text-dark"
                }
              />
            </div>
            <span
              className={cn(
                "text-base font-medium hidden lg:block",
                activeMenu === item.label
                  ? "primary-gradient-text"
                  : "text-dark"
              )}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </Card>
    </aside>
  );
}
