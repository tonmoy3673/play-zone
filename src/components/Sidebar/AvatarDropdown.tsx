/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef, useEffect } from "react";
import { Bell, HelpCircle, LogOut, User } from "lucide-react";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function AvatarDropdown() {
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
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200 hover:border-blue-500 transition-colors"
      >
        <Image
          src="https://images.unsplash.com/photo-1724064710352-3cbcee4bc3a8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
          alt="User profile"
          width={40}
          height={40}
          className="w-full h-full object-cover"
        />
      </button>

      <div
        className={`absolute max-md:-right-12 md:right-0 z-50 mt-2 origin-top-right rounded-xl bg-white shadow-lg transition-all duration-300 ease-in-out ${
          open
            ? "scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        <div className="w-56 py-3 ">
          <div className="font-lexend px-4 py-2 pb-4 font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">Nazirul</p>
              <p className="text-xs leading-none text-muted-foreground">
                nazirul@email.com
              </p>
            </div>
          </div>
          <div className="h-[1px] bg-gray-100" />

          <Link
            onClick={() => {
              setTimeout(() => {
                setOpen(false);
              }, 200);
            }}
            href="/athlete/profile"
            className="w-full"
          >
            <div className="cursor-pointer flex w-full items-center gap-2 px-4 hover:bg-gray-100 py-2">
              <User className="mr-2 h-4 w-4" />
              <span className="font-lexend text-sm font-normal">Profile</span>
            </div>
          </Link>

          <div className="h-[1px] bg-gray-100" />

          <div className="cursor-pointer  hover:bg-gray-100 px-4 py-2">
            <Link
              onClick={() => {
                setTimeout(() => {
                  setOpen(false);
                }, 200);
              }}
              href="/dashboard/support"
              className="flex w-full items-center gap-2 font-lexend"
            >
              <HelpCircle className="mr-2 h-4 w-4" />
              <span className="font-lexend text-sm font-normal">Support</span>
            </Link>
          </div>

          <div className="h-[1px] bg-gray-100" />

          <div
            onClick={() => {}}
            className="cursor-pointer px-4 flex items-center gap-1 hover:bg-gray-100 py-2 text-red-600 focus:text-red-600"
          >
            <LogOut className="mr-2 h-5 w-5" />
            <span className="font-lexend text-sm font-normal">Log out</span>
          </div>
        </div>
      </div>
    </div>
  );
}
