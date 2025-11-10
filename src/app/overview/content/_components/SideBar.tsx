"use client";

import {
  ClipboardCheck,
  ClipboardList,
  HourglassIcon,
  LibraryBig,
  NotepadText,
  Users,
  UserStar,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname

export default function SideBar() {
  const pathname = usePathname(); // Get current path

  const menuItems = [
    {
      id: 1,
      icon: ClipboardList,
      label: "All Tasks",
      isActive: pathname === "/overview/content",
      badge: null,
      href: "/overview/content",
    },
    {
      id: 2,
      icon: NotepadText,
      label: "Active Tasks",
      isActive: pathname.startsWith("/overview/content/active-tasks"),
      badge: "15",
      href: "/overview/content/active-tasks",
    },
    {
      id: 3,
      icon: UserStar,
      label: "Task Overview",
      isActive: pathname.startsWith("/overview/content/task-overview"),
      badge: null,
      href: "/overview/content/task-overview",
    },
    {
      id: 4,
      icon: HourglassIcon,
      label: "Awaiting Review",
      isActive: pathname.startsWith("/overview/content/awaiting-review"),
      badge: "15",
      href: "/overview/content/awaiting-review",
    },
    {
      id: 5,
      icon: ClipboardCheck,
      label: "Completed Tasks",
      isActive: pathname.startsWith("/overview/content/review-submission"),
      badge: null,
      href: "/overview/content/review-submission",
    },
    {
      id: 6,
      icon: Users,
      label: "Staff Review Log",
      isActive: pathname.startsWith("/overview/content/staff-review-log"),
      badge: null,
      href: "/overview/content/staff-review-log",
    },
    {
      id: 7,
      icon: LibraryBig,
      label: "Content Library",
      isActive: pathname.startsWith("/overview/content/content-library"),
      badge: null,
      href: "/overview/content/content-library",
    },
  ];

  return (
    <aside className="w-64 flex-shrink-0 backdrop-blur-lg p-4 hidden lg:flex flex-col self-start sticky top-0 rounded-2xl">
      <nav className="flex flex-col gap-y-1">
        {menuItems.map((item) => (
          <div key={item.id}>
            <Link
              href={item.href}
              className={`flex items-center ${
                item.badge ? "justify-between" : "gap-3"
              } ${
                item.isActive
                  ? "bg-blue-100 text-blue-700 font-semibold"
                  : "text-gray-600 hover:bg-gray-100/50 font-medium"
              } rounded-lg p-3 -mx-2`}
            >
              <div className="flex items-center gap-3">
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </div>

              {item.badge && (
                <span className="text-sm font-semibold text-gray-500">
                  {item.badge}
                </span>
              )}
            </Link>
          </div>
        ))}
      </nav>
    </aside>
  );
}
