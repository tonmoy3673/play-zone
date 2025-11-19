import Icon, { type IconName } from "../../_components/icon";

export type LibraryCardTrend = {
  iconName: IconName;
  change: string;
  context: string;
  iconClass?: string;
};

export type LibraryCardData = {
  title: string;
  stat?: string;
  icon: { name: IconName; wrapperClass?: string; iconClass?: string };
  trend?: LibraryCardTrend;
};

type LibraryCardProps = {
  card: LibraryCardData;
};

export default function LibraryCard({ card }: LibraryCardProps) {
  return (
    <div className="bg-[rgba(255,255,255,0.3)] overflow-clip relative rounded-[24px] p-5 border border-white/80">
      <div className="flex flex-col gap-8 items-start">
        <div className="flex items-center justify-between w-full">
          <h3 className="text-xs font-semibold text-dark-100 leading-[16px]">
            {card.title}
          </h3>
          <div className="relative">
            <div className="bg-[rgba(255,255,255,0.65)] border border-white rounded-full size-10 flex items-center justify-center">
              <div
                className={`size-5 overflow-clip relative ${
                  card.icon.wrapperClass ?? ""
                }`}
              >
                <Icon
                  name={card.icon.name}
                  height={20}
                  width={20}
                  className={card.icon.iconClass ?? ""}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1 items-start w-full">
          <p className="text-[30px] font-semibold text-dark-100 leading-normal">
            {card.stat}
          </p>
          {card.trend ? (
            <div className="flex gap-1 items-center">
              <Icon
                name={card.trend.iconName}
                height={14}
                width={14}
                className={card.trend.iconClass ?? "text-[#38aa4b]"}
              />
              <p className="text-xs font-medium text-paragraph-dark leading-[20px]">
                <span className={card.trend.iconClass ?? "text-[#38aa4b]"}>
                  {card.trend.change}
                </span>
                <span> {card.trend.context}</span>
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
