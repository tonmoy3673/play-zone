"use client";

import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar/SideBar";
import Header from "@/components/Sidebar/DashboardHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const path = usePathname();

  return (
    <div
      className={`flex h-screen pl-4 lg:pl-7 bg-gradient-to-br from-[#E0EDF6]  via-[#BAD1FFa6] to-[#AFF4FAa6]`}
    >
      {path !== "/overview/program" && <Sidebar />}
      <div className="flex flex-1 flex-col overflow-x-hidden">
        <Header />
        <main className="scrollbar-thin md:scrollbar scrollbar-thumb-green-500 scrollbar-track-green-100 p-4 flex-1 overflow-y-auto ">
          {children}
        </main>
      </div>
    </div>
  );
}
