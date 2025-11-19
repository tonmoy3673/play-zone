import Image from "next/image";
import Card from "@/components/ui/Card";
import Icon, { IconName } from "@/utils/icon";

export type StateProp = {
  title: string;
  icon: IconName;
  avatar: string;
  name: string;
  subtitle: string;
  detail: string;
};

const StatCard = ({ stat }: { stat: StateProp }) => {
  return (
    <Card className="bg-white/40 rounded-2xl md:rounded-2xl space-y-8">
      <div className="flex items-center gap-2">
        <h3 className="text-dark font-semibold text-sm">{stat.title}</h3>
        <Icon name={stat.icon} height={20} width={20} />
      </div>
      <div className="flex items-center gap-4 flex-wrap">
        <div className="size-16 rounded-full border-2 border-[#68B0EA] relative overflow-hidden">
          <Image
            src={stat.avatar}
            alt={stat.name}
            className="size-full object-cover"
            fill
          />
        </div>

        <div>
          <h4 className="font-medium text-dark text-base">{stat.name}</h4>
          <p className="text-xs text-dark/70 my-1">{stat.subtitle}</p>
          <p className="text-xs font-medium text-dark/70">{stat.detail}</p>
        </div>
      </div>
    </Card>
  );
};

export default StatCard;
