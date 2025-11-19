import Icon, { type IconName } from "../../_components/icon";

export type StaffCardTrend = {
  iconName: IconName;
  change: string;
  context: string;
  iconClass?: string;
};

export type StaffCardPerson = {
  avatar: string;
  name: string;
  primary: string;
  secondary: string;
};

export type StaffCardData = {
  title: string;
  stat?: string;
  icon: { name: IconName; wrapperClass?: string; iconClass?: string };
  trend?: StaffCardTrend;
  person?: StaffCardPerson;
  rating?: boolean;
};

type StaffCardProps = {
  card: StaffCardData;
};

export default function StaffCard({ card }: StaffCardProps) {
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

        {card.person ? (
          <div className="flex flex-col gap-1 items-start w-full">
            <div className="flex gap-3 items-center">
              <img
                src={card.person.avatar}
                alt={card.person.name}
                className="size-9 rounded-full object-cover"
              />
              <p className="text-base font-medium text-dark-100 leading-[1.5]">
                {card.person.name}
              </p>
            </div>
            <p className="text-xs font-medium text-paragraph-dark leading-[20px]">
              <span className="text-dark-100">{card.person.primary}</span>
              <span> {card.person.secondary}</span>
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-1 items-start w-full">
            <div className="flex items-center gap-2">
              <p className="text-[30px] font-semibold text-dark-100 leading-[1.5]">
                {card.stat}
              </p>
              {card.rating && (
                <span>
                  <Icon
                    name="star_filled"
                    height={24}
                    width={24}
                    className="text-[#38aa4b]"
                  />
                </span>
              )}
            </div>
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
        )}
      </div>
    </div>
  );
}
