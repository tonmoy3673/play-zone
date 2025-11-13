/* eslint-disable @next/next/no-img-element */

import { AnimatedButton } from "@/components/ui/Button";
import Icon from "@/utils/icon";

type ActivityItem = {
  id: string;
  title: string;
  body?: string;
  timeAgo: string;
  avatarSrc?: string;
};

const defaultItems: ActivityItem[] = [
  {
    id: "1",
    title: "Johnny Manziel completed 'Strength Training’",
    body: "Check the itinerary for optimization suggestions.",
    timeAgo: "1min ago",
    avatarSrc: "/overview/logoView.svg",
  },
  {
    id: "2",
    title: "Johnny Manziel completed 'Strength Training’",
    body: "Each workout adds momentum to his progress. Consistency is turning effort into real results.”",
    timeAgo: "1min ago",
    avatarSrc: "/overview/logoView.svg",
  },
  {
    id: "3",
    title: "Johnny Manziel completed 'Strength Training’",
    body: "Check the itinerary for optimization suggestions.",
    timeAgo: "1min ago",
    avatarSrc: "/overview/logoView.svg",
  },
  {
    id: "4",
    title: "Johnny Manziel completed 'Strength Training’",
    body: "Check the itinerary for optimization suggestions.",
    timeAgo: "1min ago",
    avatarSrc: "/overview/logoView2.svg",
  },
];

export default function RecentActivity({
  items = defaultItems,
}: {
  items?: ActivityItem[];
}) {
  return (
    <div className="w-full w-min-[416px] overflow-hidden rounded-[24px] bg-white/30 border border-white">
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h2 className="text-[20px] font-inter font-semibold leading-[1.5] text-[#141b34]">
              Recent Activity
            </h2>
            <div className="flex items-center gap-[6.75px]">
              <div>
                <Icon name="live" width={20} height={20} />
              </div>
              {/* <img src={imgEllipse4} alt="" className="h-[7.5px] w-[7.5px]" /> */}
              <span className="text-center text-[10.5px] font-bold tracking-[-0.315px] text-[#4ec470]">
                LIVE
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="inline-flex size-10 items-center justify-center rounded-full border border-white bg-white/65">
                <Icon name="iconEqualizer" width={20} height={20} />
              </div>
            </div>
            {/* <button
              style={{
                borderRadius: "40px",
                background:
                  "linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%)",
              }}
              type="button"
              className="inline-flex h-10 items-center justify-center rounded-[64px] border border-[#1556d8]/30 px-3 py-1.5 text-[10px] font-medium text-white"
            >
              View Progress
            </button> */}
            <AnimatedButton
              style={{
                borderRadius: "40px",
                background:
                  "linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%)",
              }}
              className=" flex items-center justify-center gap-1 text-white font-normal text-[10px] px-4 py-2.5 rounded-full hover:bg-blue-700 "
            >
              View Progress
            </AnimatedButton>
          </div>
        </div>

        <div className="mt-4 flex max-h-[438px] flex-col gap-[9px] pr-1">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex w-full shrink-0 gap-3 rounded-[16px] px-3 py-3"
            >
              <div className="relative inline-grid grid-cols-[max-content] grid-rows-[max-content] leading-none">
                <div className="col-[1] row-[1] size-12 rounded-[38.4px] border border-white bg-white/60" />
                <div className="col-[1] row-[1] ml-[12.32px] mt-[12.32px] flex size-6 items-center justify-center">
                  <img
                    src={item.avatarSrc ?? "/overview/logoView.svg"}
                    alt=""
                    className="size-6"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-2">
                <div className="flex items-start justify-between gap-3">
                  <p className="w-[223px] text-[14px] font-semibold leading-[1.3] text-[#141b34]">
                    {item.title}
                  </p>
                  <p className="shrink-0 text-[10px] leading-[1.5] text-[#1556d8]">
                    {item.timeAgo}
                  </p>
                </div>
                {item.body ? (
                  <p className="w-[274px] text-[12px] font-normal leading-[1.4] text-[#141b34]/70">
                    {item.body}
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
