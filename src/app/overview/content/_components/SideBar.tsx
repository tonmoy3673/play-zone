"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./icon";

export default function SideBar() {
  const pathname = usePathname();

  const menuItems = [
    {
      id: 1,
      iconName: "task_01" as const,
      label: "All Tasks",
      isActive: pathname === "/overview/content",
      badge: null,
      href: "/overview/content",
    },
    {
      id: 2,
      iconName: "task_edit_01" as const,
      label: "Active Tasks",
      isActive: pathname.startsWith("/overview/content/active-tasks"),
      badge: "15",
      href: "/overview/content/active-tasks",
    },
    {
      id: 3,
      iconName: "user_love_01" as const,
      label: "Task Overview",
      isActive: pathname.startsWith("/overview/content/task-overview"),
      badge: null,
      href: "/overview/content/task-overview",
    },
    {
      id: 4,
      iconName: "loading" as const,
      label: "Awaiting Review",
      isActive: pathname.startsWith("/overview/content/awaiting-review"),
      badge: "15",
      href: "/overview/content/awaiting-review",
    },
    {
      id: 5,
      iconName: "task_done_01" as const,
      label: "Completed Tasks",
      isActive: pathname.startsWith("/overview/content/completed-tasks"),
      badge: null,
      href: "/overview/content/completed-tasks",
    },
    {
      id: 6,
      iconName: "user_group" as const,
      label: "Staff Review Log",
      isActive: pathname.startsWith("/overview/content/staff-review-log"),
      badge: null,
      href: "/overview/content/staff-review-log",
    },
    {
      id: 7,
      iconName: "library" as const,
      label: "Content Library",
      isActive: pathname.startsWith("/overview/content/content-library"),
      badge: null,
      href: "/overview/content/content-library",
    },
  ];

  return (
    <aside className="bg-[rgba(255,255,255,0.6)] box-border hidden lg:flex flex-col gap-4 items-start overflow-clip px-4 py-6 rounded-[24px] shrink-0 self-start sticky top-0 w-[230px]">
      <nav className="flex flex-col gap-4 items-start shrink-0 w-full">
        {menuItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="flex gap-2 items-center shrink-0 w-full"
          >
            <div
              className={`box-border flex gap-[10px] items-center p-[10px] rounded-[12px] shrink-0 ${
                item.isActive ? "bg-primary-gradient" : ""
              }`}
            >
              <Icon
                name={item.iconName}
                height={20}
                width={20}
                className={
                  item.isActive
                    ? "text-white [&_path]:stroke-white! "
                    : "text-dark"
                }
              />
            </div>
            {item.badge ? (
              <div className="flex flex-1 items-center justify-between shrink-0">
                <div className="flex gap-8 items-center shrink-0">
                  <p className="font-medium leading-[1.3] shrink-0 text-dark text-sm text-center">
                    {item.label}
                  </p>
                </div>
                <div className="bg-transparent overflow-clip rounded-[44px] shrink-0 size-6 relative">
                  <p className="absolute font-medium leading-[1.4] left-[calc(50%+0.5px)] text-dark text-[10px] text-center top-[calc(50%-8px)] -translate-x-1/2">
                    <span
                      className={`${
                        item.isActive
                          ? "p-2 bg-primary-gradient text-white rounded-full"
                          : ""
                      }`}
                    >
                      {item.badge}
                    </span>
                  </p>
                </div>
              </div>
            ) : (
              <p className="font-medium leading-[1.3] shrink-0 text-dark text-sm">
                {item.label}
              </p>
            )}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
