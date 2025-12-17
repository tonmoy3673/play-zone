"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Badge from "../ui/Badge";

const navigationItems = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        className="w-5 h-5"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
      >
        <path
          d="M1 17C1 15.4596 1 14.6893 1.34673 14.1235C1.54074 13.8069 1.80693 13.5407 2.12353 13.3467C2.68934 13 3.45956 13 5 13C6.54044 13 7.31066 13 7.87647 13.3467C8.19307 13.5407 8.45926 13.8069 8.65327 14.1235C9 14.6893 9 15.4596 9 17C9 18.5404 9 19.3107 8.65327 19.8765C8.45926 20.1931 8.19307 20.4593 7.87647 20.6533C7.31066 21 6.54044 21 5 21C3.45956 21 2.68934 21 2.12353 20.6533C1.80693 20.4593 1.54074 20.1931 1.34673 19.8765C1 19.3107 1 18.5404 1 17Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M13 17C13 15.4596 13 14.6893 13.3467 14.1235C13.5407 13.8069 13.8069 13.5407 14.1235 13.3467C14.6893 13 15.4596 13 17 13C18.5404 13 19.3107 13 19.8765 13.3467C20.1931 13.5407 20.4593 13.8069 20.6533 14.1235C21 14.6893 21 15.4596 21 17C21 18.5404 21 19.3107 20.6533 19.8765C20.4593 20.1931 20.1931 20.4593 19.8765 20.6533C19.3107 21 18.5404 21 17 21C15.4596 21 14.6893 21 14.1235 20.6533C13.8069 20.4593 13.5407 20.1931 13.3467 19.8765C13 19.3107 13 18.5404 13 17Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M1 5C1 3.45956 1 2.68934 1.34673 2.12353C1.54074 1.80693 1.80693 1.54074 2.12353 1.34673C2.68934 1 3.45956 1 5 1C6.54044 1 7.31066 1 7.87647 1.34673C8.19307 1.54074 8.45926 1.80693 8.65327 2.12353C9 2.68934 9 3.45956 9 5C9 6.54044 9 7.31066 8.65327 7.87647C8.45926 8.19307 8.19307 8.45926 7.87647 8.65327C7.31066 9 6.54044 9 5 9C3.45956 9 2.68934 9 2.12353 8.65327C1.80693 8.45926 1.54074 8.19307 1.34673 7.87647C1 7.31066 1 6.54044 1 5Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          opacity="0.4"
          d="M13 5C13 3.45956 13 2.68934 13.3467 2.12353C13.5407 1.80693 13.8069 1.54074 14.1235 1.34673C14.6893 1 15.4596 1 17 1C18.5404 1 19.3107 1 19.8765 1.34673C20.1931 1.54074 20.4593 1.80693 20.6533 2.12353C21 2.68934 21 3.45956 21 5C21 6.54044 21 7.31066 20.6533 7.87647C20.4593 8.19307 20.1931 8.45926 19.8765 8.65327C19.3107 9 18.5404 9 17 9C15.4596 9 14.6893 9 14.1235 8.65327C13.8069 8.45926 13.5407 8.19307 13.3467 7.87647C13 7.31066 13 6.54044 13 5Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    label: "Dashboard",
    href: "/athlete/dashboard",
    active: true,
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Programs",
    href: "/athlete/programs",
    active: false,
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Calendar",
    active: false,
    href: "/athlete/calendar",
  },

  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Announcements",
    active: false,
    href: "/athlete/announcement",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
      >
        <path
          d="M13.75 0.75L14.2887 3.14157C14.7457 5.17015 16.3298 6.75431 18.3584 7.21127L20.75 7.75L18.3584 8.28873C16.3298 8.74569 14.7457 10.3298 14.2887 12.3584L13.75 14.75L13.2113 12.3584C12.7543 10.3298 11.1702 8.74569 9.14158 8.28873L6.75 7.75L9.14158 7.21127C11.1701 6.75431 12.7543 5.17015 13.2113 3.14158L13.75 0.75Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M5.75 10.75L6.13481 12.4583C6.46121 13.9072 7.59275 15.0388 9.04173 15.3652L10.75 15.75L9.04173 16.1348C7.59275 16.4612 6.46121 17.5927 6.13481 19.0417L5.75 20.75L5.36519 19.0417C5.03879 17.5927 3.90725 16.4612 2.45827 16.1348L0.75 15.75L2.45827 15.3652C3.90725 15.0388 5.03879 13.9073 5.36519 12.4583L5.75 10.75Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    href: "/athlete/explore/coach",
    label: "Coach",
    active: false,
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Messages",
    active: false,
    count: 2,
    href: "/athlete/chat",
  },
  {
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Overview/Dashboard",
    href: "/overview",
    active: false,
  },
];

export default function AthleteSidebar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const path = usePathname();

  useEffect(() => {
    if (path) {
      if (path?.startsWith("/athlete/programs")) {
        setActiveIndex(1);
      } else if (path?.startsWith("/overview")) {
        setActiveIndex(6);
      }
      // else if (path?.startsWith("/dashboard/expenses")) {
      //   setExpandedMenus(["expenses"]);
      // }
    }
  }, [path]);

  console.log(activeIndex);

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
      <div
        className={`flex flex-col  w-[72px] bg-[#ffffff1a] border border-white rounded-3xl mt-9  backdrop-blur-3xl items-center gap-4 py-4`}
      >
        {navigationItems.map((item, index) => (
          <Link href={item.href || "/"} key={index}>
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative w-11 h-11 flex items-center justify-center rounded-xl transition-all ${
                activeIndex === index
                  ? "bg-[#4169E1] text-white "
                  : "text-[#141b3499] hover:bg-white/80"
              }`}
              title={item.label}
            >
              <span
                className={`${activeIndex === index ? "brightness-200 " : ""}`}
              >
                {item.icon}
              </span>
              {item.count && (
                <Badge
                  variant="danger"
                  className="absolute -right-2 -top-2 h-5 w-5 justify-center rounded-full"
                >
                  {item.count}
                </Badge>
              )}
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
}
