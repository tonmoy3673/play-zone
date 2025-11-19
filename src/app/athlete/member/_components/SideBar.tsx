"use client";

import Icon from "@/app/overview/content/_components/icon";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Program Card Component
function ProgramCard() {
  return (
    <div className="bg-[rgba(255,255,255,0.66)] h-[184px] overflow-hidden relative rounded-[19px] shrink-0 w-[214px]">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.866025447845459)+(var(--transform-inner-height)*0.4999999701976776)))] items-center justify-center left-[-272px] top-[-229px] w-[calc(1px*((var(--transform-inner-height)*0.866025447845459)+(var(--transform-inner-width)*0.4999999701976776)))] pointer-events-none">
        <div className="flex-none rotate-60 -scale-y-100">
          <div className="blur-md filter h-[583.623px] relative w-[716.754px]">
            <div className="absolute inset-0 opacity-80 overflow-hidden pointer-events-none">
              <Image
                src={
                  "https://www.figma.com/api/mcp/asset/6bae7617-19a5-4b66-8aad-2985c370926a"
                }
                alt="bg"
                width={716}
                height={583}
                className="absolute h-[106.24%] left-[-21.02%] max-w-none top-[-2.39%] w-[120.73%]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[8px] top-[8px] w-[198px]">
        <div className="bg-[#1a5bd9] box-border content-stretch flex gap-[2px] items-center pl-[4px] pr-[8px] py-[4px] relative rounded-[12px] shrink-0 w-full">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[162px]">
              <div className="border border-[rgba(255,255,255,0.3)] border-solid relative rounded-[10px] shrink-0 size-[36px]">
                <div className="absolute inset-0 pointer-events-none rounded-[10px]">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
                    alt=""
                    width={36}
                    height={36}
                    className="absolute max-w-none object-cover rounded-[10px] size-full"
                  />
                </div>
              </div>
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-[11px] text-white w-[98px] whitespace-pre-wrap">
                Rising Stars: QB Community
              </p>
            </div>
            <div className="">
              <button className="bg-[rgba(255,255,255,0.08)] p-1 rounded-full">
                <Icon name="arrow_up_01" height={16} width={16} />
              </button>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
            <div className="border border-[rgba(255,255,255,0.3)] border-solid relative rounded-[8px] shrink-0 size-[32px]">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
                alt=""
                width={32}
                height={32}
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full"
              />
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-dark text-[11px] w-[126px] whitespace-pre-wrap">
              Speed & Agility Training
            </p>
          </div>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
            <div className="border border-[rgba(255,255,255,0.3)] border-solid relative rounded-[8px] shrink-0 size-[32px]">
              <Image
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces"
                alt=""
                width={32}
                height={32}
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full"
              />
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-dark text-[11px] w-[113px] whitespace-pre-wrap">
              Mental Performance
            </p>
          </div>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
            <div className="border border-[rgba(255,255,255,0.3)] border-solid relative rounded-[8px] shrink-0 size-[32px]">
              <Image
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces"
                alt=""
                width={32}
                height={32}
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full"
              />
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.4] not-italic relative shrink-0 text-dark text-[11px] w-[127px] whitespace-pre-wrap">
              Speed & Agility Training
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SideBar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/athlete/member") {
      return pathname === path || pathname.startsWith(path);
    }
    return pathname === path || pathname.startsWith(path);
  };

  return (
    <aside className="relative z-10 hidden md:flex h-full flex-col items-start overflow-x-hidden bg-[rgba(255,255,255,0.05)] text-sm font-normal transition-all duration-300 ease-in-out">
      <div className="bg-[rgba(255,255,255,0.05)] box-border flex flex-col gap-[10px] items-start overflow-y-auto overflow-x-hidden px-[16px] py-[24px] rounded-[16px] h-full w-[246px]">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          {/* Back Button */}
          <Link
            href="/athlete"
            className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full"
          >
            <div className="bg-[rgba(255,255,255,0.6)] box-border content-stretch flex gap-[10px] items-center justify-center p-[4px] relative rounded-[40px] shrink-0">
              <div className="flex items-center justify-center relative shrink-0">
                <div className="p-1">
                  <Icon name="arrow_up_02" height={20} width={20} />
                </div>
              </div>
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-normal not-italic relative shrink-0 text-dark text-[16px]">
              Back Main Dashboard
            </p>
          </Link>

          {/* Program Card */}
          <ProgramCard />

          {/* Navigation Items */}
          <Link
            href="/athlete"
            className={cn(
              "content-stretch flex gap-[8px] items-center relative shrink-0 w-full",
              isActive("/athlete") && "opacity-100"
            )}
          >
            <div className="box-border content-stretch flex gap-[6px] items-center justify-center p-[4px] relative rounded-[6px] shrink-0 size-[40px]">
              <Icon name="dashboard_square_01" height={20} width={20} />
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-normal not-italic relative shrink-0 text-dark text-[16px]">
              Dashboard
            </p>
          </Link>

          <Link
            href="/athlete/announcements"
            className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
          >
            <div className="box-border content-stretch flex gap-[6px] items-center justify-center p-[4px] relative rounded-[6px] shrink-0 size-[40px]">
              <Icon name="marketing" height={20} width={20} />
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-normal not-italic relative shrink-0 text-dark text-[16px]">
              Announcements
            </p>
          </Link>

          <Link
            href="/overview/content"
            className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[165px]"
          >
            <div className="box-border content-stretch flex gap-[6px] items-center justify-center p-[4px] relative rounded-[6px] shrink-0 size-[40px]">
              <Icon name="right_to_left_list_dash" height={20} width={20} />
            </div>
            <div className="content-stretch flex flex-[1_0_0] gap-[24px] items-center min-h-px min-w-px relative shrink-0">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-normal not-italic relative shrink-0 text-dark text-[16px]">
                Content & Tasks
              </p>
            </div>
          </Link>

          <Link
            href="/athlete/member"
            className={cn(
              "content-stretch flex gap-[8px] items-center relative shrink-0 w-full",
              isActive("/athlete/member") && "opacity-100 "
            )}
          >
            <div className="border-[#68b0ea] border-b-0 border-l-0 border-r-0 border-solid border-t box-border content-stretch flex gap-[10px] items-center p-[10px] relative rounded-[12px] shrink-0 bg-primary-gradient">
              <Icon
                name="user_group"
                height={20}
                width={20}
                className={
                  isActive("/athlete/member")
                    ? "text-white [&_path]:stroke-white!"
                    : "text-dark"
                }
              />
            </div>
            <p
              className={cn(
                "font-['Inter:Medium',sans-serif] font-medium leading-normal not-italic relative shrink-0 text-[16px]",
                isActive("/athlete/member")
                  ? "bg-clip-text text-transparent bg-primary-gradient"
                  : "text-dark"
              )}
            >
              Athletes & Members
            </p>
          </Link>

          <Link
            href="/athlete/chat"
            className="content-stretch flex items-center justify-between relative shrink-0 w-[214px]"
          >
            <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
              <div className="box-border content-stretch flex gap-[10px] items-center p-[10px] relative shrink-0">
                <Icon name="message_02" height={20} width={20} />
              </div>
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-normal not-italic relative shrink-0 text-dark text-[16px]">
                Messages
              </p>
            </div>
            <div className="border-[#68b0ea] border-b-0 border-l-0 border-r-0 border-solid border-t box-border content-stretch flex flex-col gap-[10px] h-[20px] items-center justify-center px-[2px] py-[10px] relative rounded-[29px] shrink-0 w-[34px] bg-[#68b0ea]">
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[1.3] not-italic relative shrink-0 text-[12px] text-center text-white w-full whitespace-pre-wrap">
                20
              </p>
            </div>
          </Link>

          <Link
            href="/athlete/calendar"
            className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
          >
            <div className="box-border content-stretch flex gap-[10px] items-center p-[10px] relative shrink-0">
              <Icon name="calendar_03" height={20} width={20} />
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-normal not-italic relative shrink-0 text-dark text-[16px]">
              Calendar
            </p>
          </Link>

          {/* Divider */}
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px] border-t border-[rgba(20,27,52,0.1)]"></div>
          </div>

          {/* Others Section */}
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-normal not-italic relative shrink-0 text-[16px] text-paragraph-dark">
              Others
            </p>
            <div className="bg-[rgba(255,255,255,0.2)] overflow-clip relative rounded-[15px] shrink-0 size-[20px]">
              <button className="p-1">
                <Icon
                  name="arrow_up_01"
                  height={10}
                  width={10}
                  className="text-dark-700 [&_path]:stroke-black!"
                />
              </button>
            </div>
          </div>

          <Link
            href="/athlete/analytics"
            className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
          >
            <div className="box-border content-stretch flex gap-[10px] items-center p-[10px] relative shrink-0">
              <Icon name="analytics_up" height={20} width={20} />
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-normal not-italic relative shrink-0 text-dark text-[16px]">
              Analytics
            </p>
          </Link>

          <Link
            href="/athlete/financials"
            className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
          >
            <div className="box-border content-stretch flex gap-[10px] items-center p-[10px] relative shrink-0">
              <Icon name="money_bag_02" height={20} width={20} />
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-normal not-italic relative shrink-0 text-dark text-[16px]">
              Financials
            </p>
          </Link>

          <Link
            href="/athlete/leaderboard"
            className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
          >
            <div className="box-border content-stretch flex gap-[10px] items-center p-[10px] relative shrink-0">
              <Icon name="ranking" height={20} width={20} />
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-normal not-italic relative shrink-0 text-dark text-[16px]">
              Leaderboard
            </p>
          </Link>

          {/* Divider */}
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px] border-t border-[rgba(20,27,52,0.1)]"></div>
          </div>

          {/* Admin & Settings Section */}
          <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-normal not-italic relative shrink-0 text-[16px] text-paragraph-dark">
              Admin & Settings
            </p>
            <div className="bg-[rgba(255,255,255,0.2)] overflow-clip relative rounded-[15px] shrink-0 size-[20px]">
              <div className="absolute flex items-center justify-center left-[2px] size-[16px] top-[2px]">
                <div className="flex-none rotate-180 -scale-y-100">
                  <Icon
                    name="arrow_up_01"
                    height={10}
                    width={10}
                    className="text-dark-700 [&_path]:stroke-black!"
                  />
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/athlete/support"
            className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
          >
            <div className="box-border content-stretch flex gap-[10px] items-center p-[10px] relative shrink-0">
              <Icon name="customer_support" height={20} width={20} />
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-normal not-italic relative shrink-0 text-dark text-[16px]">
              Support
            </p>
          </Link>

          <Link
            href="/athlete/staff"
            className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
          >
            <div className="box-border content-stretch flex gap-[10px] items-center p-[10px] relative shrink-0">
              <Icon name="user_group" height={20} width={20} />
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-normal not-italic relative shrink-0 text-dark text-[16px]">
              Staff
            </p>
          </Link>

          <Link
            href="/athlete/profile/settings"
            className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full"
          >
            <div className="box-border content-stretch flex gap-[10px] items-center p-[10px] relative shrink-0">
              <Icon name="settings_01" height={20} width={20} />
            </div>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-normal not-italic relative shrink-0 text-dark text-[16px]">
              Settings
            </p>
          </Link>
        </div>
      </div>
    </aside>
  );
}
