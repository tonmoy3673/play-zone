import Icon, { type IconName } from "./icon";

export type TaskBoxTrend = {
  icon: IconName;
  change: string;
  color: string;
};

export type TaskBoxData = {
  title: string;
  stat: string;
  icon: { name: IconName };
  trend: TaskBoxTrend;
};

type TaskBoxCardProps = {
  box: TaskBoxData;
};

export default function TaskBoxCard({ box }: TaskBoxCardProps) {
  return (
    <div className="bg-[rgba(255,255,255,0.3)] overflow-clip relative rounded-[24px] p-5 border border-white">
      <div className="flex flex-col gap-8 items-start">
        <div className="flex items-center justify-between w-full">
          <span className="text-xs font-semibold text-dark-100">
            {box.title}
          </span>
          <div className="relative size-10">
            <div className="absolute inset-0 bg-white border border-white rounded-full" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Icon
                name={box.icon.name}
                height={20}
                width={20}
                className="text-dark-100"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-start w-full">
          <p className="text-[30px] font-semibold leading-normal text-dark-100">
            {box.stat}
          </p>
          <div className="flex gap-1 items-center">
            <Icon
              name={box.trend.icon}
              height={14}
              width={14}
              className={box.trend.color}
            />
            <span className={`text-xs font-medium ${box.trend.color}`}>
              {box.trend.change}
            </span>
            <span className="text-xs font-medium text-paragraph-dark">
              from last month
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
