import Icon, { IconName } from "../../_components/icon";

export interface ActiveTaskProps {
  title: string;
  subtitle: string;
  iconName: IconName;
  dueBadge: {
    text: string;
    variant: "urgent" | "safe" | "info" | "warning";
  };
  details: string;
  dueDate: string;
  coach: {
    name: string;
    image: string;
  };
  progress: {
    submitted: number;
    total: number;
    percentage: number;
  };
  completionStatus: {
    completed: number;
    pending: number;
  };
  runningBehind: Array<{
    name: string;
    img: string;
  }>;
  athleteList: string[];
}

const getBadgeStyles = (variant: ActiveTaskProps["dueBadge"]["variant"]) => {
  switch (variant) {
    case "urgent": // Red
      return {
        bg: "bg-[rgba(255,101,101,0.15)]",
        text: "text-[#ff0033]",
      };
    case "safe": // Green
      return {
        bg: "bg-[rgba(183,247,178,0.5)]",
        text: "text-[#027a48]",
      };
    case "info": // Blue
      return {
        bg: "bg-[rgba(69,127,243,0.15)]",
        text: "text-[#437EF7]",
      };
    case "warning": // Yellow/Orange
      return {
        bg: "bg-[rgba(255,193,7,0.15)]",
        text: "text-[#B78103]",
      };
    default:
      return {
        bg: "bg-gray-100",
        text: "text-gray-600",
      };
  }
};

export default function ActiveTask({
  title,
  subtitle,
  iconName,
  dueBadge,
  details,
  dueDate,
  coach,
  progress,
  completionStatus,
  runningBehind,
  athleteList,
}: ActiveTaskProps) {
  const badgeStyles = getBadgeStyles(dueBadge.variant);

  return (
    <div className="bg-white/30 overflow-clip relative rounded-[24px] w-full max-w-[1440px] mx-auto my-2 border border-white">
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-0 ">
        <div className="flex gap-2 items-end">
          <div className="flex gap-[14px] items-center">
            <div className="bg-white/30 overflow-clip relative rounded-[12px] size-12 flex items-center justify-center">
              <Icon name={iconName} height={24} width={24} />
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="text-base font-medium text-dark leading-normal">
                {title}
              </p>
              <p className="text-xs font-normal text-paragraph-dark leading-normal">
                {subtitle}
              </p>
            </div>
          </div>
          <div
            className={`${badgeStyles.bg} flex gap-2 h-6 items-center justify-center px-3 py-2 rounded-[100px]`}
          >
            <p
              className={`text-[10px] font-medium ${badgeStyles.text} leading-normal`}
            >
              {dueBadge.text}
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 px-5 pb-5 pt-5 ">
        {/* Task Details */}
        <div className="bg-[rgba(255,255,255,0.6)] h-[289px] overflow-clip rounded-[16px] p-5 w-full  flex flex-col shrink-0">
          <div className="flex flex-col gap-9">
            <div className="flex flex-col gap-3">
              <p className="text-[14px] font-medium text-dark-100 leading-[1.3]">
                Task Details
              </p>
              <p className="text-[12px] font-normal text-paragraph-dark leading-[1.4] whitespace-pre-wrap">
                {details}
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <p className="text-[14px] font-medium text-dark-100 leading-[1.3]">
                  Due Date
                </p>
                <div className="flex gap-1.5 items-center">
                  <Icon name="calendar_03" height={16} width={16} />
                  <p className="text-[12px] font-normal text-paragraph-dark leading-[1.4]">
                    {dueDate}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[14px] font-medium text-dark-100 leading-[1.3]">
                  Created By
                </p>
                <div className="flex gap-2 items-center">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    className="size-6 rounded-full"
                  />
                  <p className="text-[10px] font-medium text-dark-100 leading-[1.4]">
                    {coach.name}
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
                    {progress.submitted} of {progress.total} Athletes Submitted
                  </p>
                  <p className="text-[10px] font-medium text-dark leading-normal">
                    {progress.percentage}%
                  </p>
                </div>
                <div className="bg-[#c4d4fd] h-2.5 rounded-[40px] overflow-hidden">
                  <div
                    className="h-full rounded-[80px]"
                    style={{
                      width: `${progress.percentage}%`,
                      background:
                        "linear-gradient(90deg, #7180DF 0%, #2C49FF 100%)",
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
                <div className="flex items-center -space-x-1.5 box-border content-stretch pl-0 pr-[6px] py-0 relative shrink-0">
                  {athleteList.map((imgSrc, idx) => (
                    <img
                      key={idx}
                      src={imgSrc}
                      className="size-6 rounded-full"
                      alt={`athlete-${idx}`}
                    />
                  ))}
                  <div className="bg-[rgba(255,255,255,0.3)] overflow-clip relative rounded-[24px] shrink-0 size-[24px] flex items-center justify-center ml-1">
                    <p className="text-[10px] font-medium leading-[1.4] text-transparent bg-clip-text bg-[linear-gradient(177deg,#5C8FF7_10.06%,#276AEE_62.94%)]">
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
                <div className="bg-linear-to-b from-[rgba(0,226,128,0.05)] to-[rgba(0,124,70,0.12)] border border-[rgba(0,226,128,0.1)] rounded-[61px] flex gap-3 items-center justify-center pl-4 pr-3 py-3">
                  <p className="text-sm font-medium text-[#027a48] leading-normal">
                    Completed
                  </p>
                  <div className="bg-[#027a48] rounded-[44px] size-5 flex items-center justify-center">
                    <p className="text-[10px] font-medium text-white leading-normal">
                      {completionStatus.completed}
                    </p>
                  </div>
                </div>
                <div className="bg-linear-to-b from-[rgba(255,0,51,0.05)] to-[rgba(255,0,51,0.12)] border border-[rgba(255,0,51,0.1)] rounded-[61px] flex gap-3 items-center justify-center pl-4 pr-3 py-3">
                  <p className="text-sm font-medium text-[#ff0033] leading-normal">
                    Pending
                  </p>
                  <div className="bg-[#ff0033] rounded-[44px] size-5 flex items-center justify-center">
                    <p className="text-[10px] font-medium text-white leading-normal">
                      {completionStatus.pending}
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
                <Icon
                  name="bell"
                  height={20}
                  width={20}
                  className="[&_path]:stroke-[#437EF7]"
                />
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
