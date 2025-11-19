"use client";

import Header from "@/components/Sidebar/DashboardHeader";
import Sidebar from "@/components/Sidebar/SideBar";
import { usePathname } from "next/navigation";
import CustomSideBar from "./member/_components/SideBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isMemberPage = pathname === "/athlete/member";

  return (
    <div
      className={`flex h-screen pl-4 lg:pl-7 bg-gradient-to-br from-[#E0EDF6]   via-[#BAD1FFa6] to-[#AFF4FAa6]`}
    >
      {isMemberPage ? <CustomSideBar /> : <Sidebar />}
      <div className="flex flex-1 flex-col overflow-x-hidden">
        <Header />
        <main className="scrollbar-thin md:scrollbar scrollbar-thumb-green-500 scrollbar-track-green-100 p-4 flex-1 overflow-y-auto ">
          <div className="max-w-screen-2xl mx-auto"> {children}</div>
        </main>
      </div>
    </div>
  );
}
