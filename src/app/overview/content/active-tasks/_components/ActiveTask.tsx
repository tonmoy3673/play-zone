import Icon from "../../_components/icon";

const athleteList = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces",
];

const runningBehind = [
  {
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces",
    name: "Jason Martinez",
  },
  {
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop&crop=faces",
    name: "Michael Thompson",
  },
  {
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=faces",
    name: "David Chen",
  },
];
export default function ActiveTask() {
  return (
    <div className="bg-[rgba(255,255,255,0.3)] overflow-clip relative rounded-[24px] w-full max-w-[1440px] mx-auto my-2 border border-white/80">
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-0 ">
        <div className="flex gap-2 items-end">
          <div className="flex gap-[14px] items-center">
            <div className="bg-[rgba(255,255,255,0.3)] overflow-clip relative rounded-[12px] size-12 flex items-center justify-center">
              <Icon name="video_01" height={24} width={24} />
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="text-base font-medium text-dark leading-normal">
                Passing Drill Submission
              </p>
              <p className="text-xs font-normal text-paragraph-dark leading-normal">
                Video Submission • Football • QB Skills
              </p>
            </div>
          </div>
          <div className="bg-[rgba(255,101,101,0.15)] flex gap-2 h-6 items-center justify-center px-3 py-2 rounded-[100px]">
            <p className="text-[10px] font-medium text-[#ff0033] leading-normal">
              Due Today
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="bg-[rgba(255,255,255,0.3)] overflow-clip relative rounded-[50px] size-12 flex items-center justify-center">
            <Icon name="bell" height={24} width={24} />
          </div>
          <div className="bg-[rgba(255,255,255,0.3)] overflow-clip relative rounded-[50px] size-12 flex items-center justify-center">
            <Icon name="three_dots_vertical" height={24} width={24} />
          </div>
        </div>
      </div>
      {/* Lower panels */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-5 pb-5 pt-5 ">
        {/* Task Details */}
        <div className="bg-[rgba(255,255,255,0.6)] h-[289px] overflow-clip rounded-[16px] p-5 w-full  flex flex-col shrink-0">
          <div className="flex flex-col gap-9">
            <div className="flex flex-col gap-3">
              <p className="text-sm font-medium text-dark leading-normal">
                Task Details
              </p>
              <p className="text-xs font-normal text-paragraph-dark leading-normal">
                Submit a 2-minute video demonstrating the three-step and
                five-step drop passing drills as shown in the training video.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium text-dark leading-normal">
                  Due Date
                </p>
                <div className="flex gap-1.5 items-center">
                  <Icon name="calendar_03" height={16} width={16} />
                  <p className="text-xs font-normal text-paragraph-dark leading-normal">
                    June 7, 2023 (11:59 PM)
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium text-dark leading-normal">
                  Created By
                </p>
                <div className="flex gap-2 items-center">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
                    alt="Coach Michael Johnson"
                    className="size-6 rounded-full"
                  />
                  <p className="text-[10px] font-medium text-dark leading-normal">
                    Coach Michael Johnson
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Progress */}
        <div className="bg-[rgba(255,255,255,0.6)] h-[289px] overflow-clip rounded-[16px] p-5 w-full  flex flex-col relative shrink-0">
          <div className="flex flex-col gap-[18px]">
            <div className="flex flex-col gap-4">
              <p className="text-sm font-medium text-dark leading-normal">
                Progress
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-medium text-dark leading-normal">
                    7 of 15 Athletes Submitted
                  </p>
                  <p className="text-[10px] font-medium text-dark leading-normal">
                    47%
                  </p>
                </div>
                <div className="bg-[#c4d4fd] h-2.5 rounded-[40px] overflow-hidden">
                  <div
                    className="h-full rounded-[80px] bg-gradient-to-r from-[#437EF7] to-[#5B9BF8]"
                    style={{
                      width: "47%",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-10 items-end justify-end">
              <div className="flex flex-col gap-3 flex-1">
                <p className="text-sm font-medium text-dark leading-normal whitespace-nowrap">
                  Assigned Athletes
                </p>
                <div className="flex items-center -space-x-1.5">
                  {athleteList.map((imgSrc, idx) => (
                    <img
                      key={idx}
                      src={imgSrc}
                      className="size-6 rounded-full"
                      alt={`athlete-${idx}`}
                    />
                  ))}
                  <div className="bg-[rgba(255,255,255,0.3)] rounded-[24px] size-6 flex items-center justify-center">
                    <p className="text-[10px] font-medium text-dark leading-normal">
                      +11
                    </p>
                  </div>
                </div>
              </div>
              <button className="bg-[rgba(69,127,243,0.15)] flex gap-2.5 items-center justify-center px-3 py-2 rounded-lg">
                <p className="text-[10px] font-medium text-[#437EF7] leading-normal">
                  View all athletes
                </p>
              </button>
            </div>
            <div className="h-px bg-[rgba(0,0,0,0.1)] w-full" />
            <div className="flex flex-col gap-3">
              <p className="text-sm font-medium text-dark leading-normal">
                Completion Status
              </p>
              <div className="flex gap-2 items-center">
                <div className="bg-gradient-to-b from-[rgba(0,226,128,0.05)] to-[rgba(0,124,70,0.12)] border border-[rgba(0,226,128,0.1)] rounded-[61px] flex gap-3 items-center justify-center pl-4 pr-3 py-3">
                  <p className="text-sm font-medium text-[#027a48] leading-normal">
                    Completed
                  </p>
                  <div className="bg-[#027a48] rounded-[44px] size-5 flex items-center justify-center">
                    <p className="text-[10px] font-medium text-white leading-normal">
                      6
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-b from-[rgba(255,0,51,0.05)] to-[rgba(255,0,51,0.12)] border border-[rgba(255,0,51,0.1)] rounded-[61px] flex gap-3 items-center justify-center pl-4 pr-3 py-3">
                  <p className="text-sm font-medium text-[#ff0033] leading-normal">
                    Pending
                  </p>
                  <div className="bg-[#ff0033] rounded-[44px] size-5 flex items-center justify-center">
                    <p className="text-[10px] font-medium text-white leading-normal">
                      6
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Running Behind */}
        <div className="bg-[rgba(255,255,255,0.6)] h-[289px] overflow-clip rounded-[16px] p-5 w-full  flex flex-col shrink-0">
          <div className="flex flex-col gap-5">
            <p className="text-sm font-medium text-dark leading-normal">
              Running Behind
            </p>
            <div className="flex flex-col gap-4">
              {runningBehind.map(({ img, name }, idx) => (
                <div className="flex gap-3 items-center" key={idx}>
                  <img
                    src={img}
                    className="size-10 rounded-[37px] object-cover"
                    alt={name}
                  />
                  <p className="text-[10px] font-semibold text-dark leading-normal">
                    {name}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex gap-2 items-center mt-auto">
              <button className="bg-[rgba(69,127,243,0.15)] border border-[rgba(21,86,216,0.1)] flex-1 h-10 rounded-[50px] flex gap-1.5 items-center justify-center px-2.5 py-2">
                <Icon name="bell" height={20} width={20} />
                <p className="text-[10px] font-medium text-[#437EF7] leading-normal">
                  Send Reminder
                </p>
              </button>
              <button className="border border-[rgba(21,86,216,0.3)] h-10 rounded-[50px] w-[100px] flex items-center justify-center px-3 py-2 bg-primary-gradient">
                <p className="text-[10px] font-medium text-white leading-normal">
                  See all
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
