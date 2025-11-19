import Link from "next/link";
import Image from "next/image";
import Icon from "@/utils/icon";
import { cn } from "@/lib/utils";
import { AnimatedButton } from "@/components/ui/Button";

export type AthleteProp = {
  id: number;
  status: "Top 5" | "Rising";
  banner: string;
  profile: {
    image: string;
    name: string;
    sport: string;
    position: string;
  };
  location: string;
  badge: "Verified" | "Professional";
  stats: {
    value: string;
    label: string;
  }[];
};

const AthleteCard = ({ athlete }: { athlete: AthleteProp }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden relative">
      <div className="absolute left-4 top-4 z-[2]">
        <span
          className={cn(
            "inline-block px-2.5 py-[5px] text-white text-[10px] font-semibold rounded-md",
            athlete.status === "Top 5"
              ? "bg-[linear-gradient(207deg,#FFB42A_39.14%,#EB9E0F_71.52%)]"
              : "bg-[#784EF8]"
          )}
        >
          {athlete.status}
        </span>
      </div>

      <div
        style={{
          backgroundImage: `url(${athlete.banner})`,
        }}
        className="h-72 sm:h-[320px] flex items-end bg-no-repeat bg-cover relative z-[1] after:absolute after:inset-0 after:bg-[linear-gradient(179deg,rgba(255,255,255,0.00)_46.71%,rgba(255,255,255,0.74)_54.75%,#FFF_61.85%,#FFF_66.3%,#FFF_99.37%)] after:z-[-1]"
      >
        <div className="p-4 pb-0 space-y-3 w-full">
          <div className="flex items-center gap-3">
            <div className="border-2 relative border-[#68B0EA] rounded-full overflow-hidden size-[60px]">
              <Image
                src={athlete.profile.image}
                alt={athlete.profile.name}
                className="size-full object-cover"
                fill
              />
            </div>
            <div>
              <h5 className="text-base font-medium text-black">
                {athlete.profile.name}
              </h5>
              <div className="flex items-center gap-2 text-black/70 text-xs">
                <span>{athlete.profile.sport}</span>
                <span className="size-1 rounded-full bg-black/70"></span>
                <span>{athlete.profile.position}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Icon name="location" width={20} height={20} />
              <span className="text-xs font-medium">{athlete.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Icon
                name={
                  athlete.badge === "Verified"
                    ? "verified_badge"
                    : "verified_badge_2"
                }
                width={20}
                height={20}
              />
              <span
                className={cn(
                  "text-xs font-medium",
                  athlete.badge == "Verified"
                    ? "primary-gradient-text"
                    : "bg-clip-text text-transparent bg-[linear-gradient(148deg,#FDB631_16.41%,#EC4213_59.87%)]"
                )}
              >
                {athlete.badge}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between border-t pt-3 border-t-[#EEF6FF]">
            {athlete.stats?.map((stat, statIdx) => (
              <div key={statIdx} className="grid gap-1 text-center px-2">
                <span
                  className={`text-sm font-semibold ${
                    stat.value == "Pro"
                      ? "warning-gradient-text"
                      : stat.value == "D1"
                      ? "primary-gradient-text"
                      : "text-dark"
                  }`}
                >
                  {stat.value}
                </span>
                <span className="text-xs text-black/70">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4">
        <Link href={`/profile/${athlete.id}`}>
          <AnimatedButton className="group/btn w-full font-medium px-5 py-2.5 text-sm h-10 rounded-full transition-all whitespace-nowrap hover:bg-primary-gradient border border-[#1556D81A] bg-[#1556D826] hover:border-transparent">
            <span className="primary-gradient-text group-hover/btn:!text-white group-hover/btn:!bg-none">
              View Profile
            </span>
          </AnimatedButton>
        </Link>
      </div>
    </div>
  );
};

export default AthleteCard;
