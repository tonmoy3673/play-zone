/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef, useEffect } from "react";
import { Bell } from "lucide-react";

import { cn } from "@/lib/utils";

export default function NotificationBell() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<any>(null);
  const [notifications, setNotifications] = useState<any[]>([]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const unreadCount = notifications?.filter((n) => !n.is_read).length;

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="flex items-center">
        <button
          onClick={() => setOpen(!open)}
          className="text-gray-300 hover:text-white"
        >
          <Bell className="h-5 w-5" />
        </button>
        {unreadCount > 0 && (
          <p className="absolute text-[10px] bg-red-500 text-white rounded-full size-4 flex items-center justify-center -right-1 -top-2">
            {unreadCount}
          </p>
        )}
      </div>
      <div
        className={`absolute max-md:-right-12 md:right-0 z-50 mt-2 origin-top-right rounded-xl border bg-white shadow-lg transition-all duration-300 ease-in-out ${
          open
            ? "scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        <div className="border-0 w-80 text-black shadow-none">
          <div className="flex items-center justify-between border-b p-2 ">
            <h2 className="text-base font-medium">Notification</h2>
          </div>
          <div className="h-[400px] divide-y overflow-auto">
            <ul
              onScroll={(e) => {
                const { scrollTop, scrollHeight, clientHeight } =
                  e.currentTarget;
                if (scrollHeight - scrollTop == clientHeight) {
                }
              }}
              className={` flex max-h-[400px] w-full flex-col overflow-y-auto rounded bg-white py-1 duration-500`}
            >
              {notifications.map((notification) => (
                <li
                  key={notification.uid}
                  className={cn(
                    "border-b border-gray-300 p-2 transition-colors hover:bg-gray-100",
                    !notification.is_read &&
                      "border-white bg-gray-200 hover:bg-gray-300"
                  )}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="grid gap-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-normal">
                          {notification?.kind.split("_").join(" ")}
                        </span>
                      </div>
                      <p className="line-clamp-2 text-xs font-light text-muted-foreground">
                        {notification.message.split("_").join(" ")}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-between border-t p-4"></div>
        </div>
      </div>
    </div>
  );
}
