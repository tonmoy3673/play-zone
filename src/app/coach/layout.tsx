"use client";
import Header from "@/components/Sidebar/DashboardHeader";
import Sidebar from "@/components/Sidebar/SideBar";
import { Geist_Mono, Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import CustomSideBar from "./programs/member/_components/SideBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isMemberPage = [
    "/coach/programs/member",
    "/coach/programs/analytics",
    "/coach/calendar",
    "/coach/programs/announcement",
    "/coach/programs/details",
    "/coach/task/content",
    "/coach/programs/chat",
    "/coach/programs/specific-financial-analytics",
    "/coach/programs/support",
    "/coach/programs/settings",
    "/coach/task/create",
  ].some((path) => pathname.startsWith(path));

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <div
          className={`flex h-screen pl-4 lg:pl-7 bg-gradient-to-br from-[#E0EDF6]   via-[#BAD1FFa6] to-[#AFF4FAa6]`}
        >
          {isMemberPage ? <CustomSideBar /> : <Sidebar />}
          {/* <Sidebar /> */}
          <div className="flex flex-1 flex-col overflow-x-hidden">
            <Header />
            <main className="scrollbar-thin md:scrollbar scrollbar-thumb-green-500 scrollbar-track-green-100 p-4 flex-1 overflow-y-auto ">
              <div className="max-w-screen-2xl mx-auto"> {children}</div>
            </main>
          </div>
        </div>
        {/* <div className={`flex overflow-hidden h-screen`}>
          <Sidebar />
          <div className="flex flex-1 flex-col overflow-x-hidden">
            <Header />
            <main className="scrollbar-thin md:scrollbar scrollbar-thumb-green-500 scrollbar-track-green-100 p-4 flex-1 overflow-y-auto lg:pl-32  max-md:px-4 max-lg:px-7 lg:pr-7 pb-7 min-h-screen backdrop-blur-3xl bg-gradient-to-br from-[#E0EDF6]   via-[#BAD1FFa6] to-[#AFF4FAa6]">
            
              {children}
            
            </main>
          </div>
        </div> */}
      </body>
    </html>
  );
}
