// ProgramCard.jsx
import Link from "next/link";
import Image from "next/image";
import Icon from "@/utils/icon";
import { AnimatedButton } from "@/components/ui/Button";

export type ProgramProp = {
  title: string;
  coach: string;
  coachImage: string;
  banner: string;
  price: number;
  rating: number;
  students: string;
  badge: "New" | "Beginner" | "Featured" | "Live";
};

const ProgramCard = ({
  program,
  isOptions = true,
}: {
  program: ProgramProp;
  isOptions?: boolean;
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden relative">
      <div className="absolute inset-x-0 px-4 top-4 z-[2] flex items-start justify-between">
        <span
          className={`inline-block px-2.5 py-[5px] text-white text-[10px] font-semibold rounded-md ${
            program.badge === "Featured"
              ? "bg-[linear-gradient(148deg,#FDB631_16.41%,#EC4213_59.87%)]"
              : program.badge === "New"
              ? "bg-[linear-gradient(207deg,#FFB42A_39.14%,#EB9E0F_71.52%)]"
              : program.badge === "Beginner"
              ? "bg-[linear-gradient(177deg,#19A855_10.06%,#0B9545_62.94%)]"
              : program.badge === "Live"
              ? "bg-[#FF0033]"
              : ""
          }`}
        >
          {program.badge === "Featured"
            ? "Featured"
            : program.badge === "New"
            ? "New"
            : program.badge === "Beginner"
            ? "Beginner"
            : program.badge === "Live"
            ? "Live"
            : ""}
        </span>

        {isOptions && (
          <div className="flex items-center justify-center size-10 rounded-full bg-white/20 relative z-[1] backdrop-blur-xs after:absolute after:inset-0 after:border-l after:border-r after:border-white/50 after:rotate-45 after:rounded-full after:z-[-1]">
            <Icon name="dot_white" height={20} width={20} />
          </div>
        )}
      </div>

      <div
        className="h-[164px] flex items-end bg-no-repeat bg-cover relative z-[1] after:absolute after:inset-0 after:bg-gradient-to-t after:from-white/90 after:to-20% after:to-transparent after:z-[-1]"
        style={{ backgroundImage: `url(${program.banner})` }}
      ></div>

      <div className="px-4 w-full">
        <h3 className="text-dark text-lg line-clamp-1 font-semibold mb-2">
          {program.title}
        </h3>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-1.5">
            <div className="relative rounded-full overflow-hidden size-6">
              <Image
                src={program.coachImage}
                alt={program.coach}
                className="size-full object-cover"
                fill
              />
            </div>
            <h5 className="text-xs font-medium text-dark">{program.coach}</h5>
          </div>

          <span className="text-dark font-base font-semibold">
            ${program.price}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Icon name="users" width={16} height={16} />
            <span className="text-xs font-medium text-dark">
              {program.students}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              <Icon name="star" height={16} width={16} />
              <Icon name="star" height={16} width={16} />
              <Icon name="star" height={16} width={16} />
              <Icon name="star" height={16} width={16} />
              <Icon name="star_half" height={16} width={16} />
            </div>
            <span className="text-sm font-medium text-dark">
              {program.rating}
            </span>
          </div>
        </div>
      </div>

      <Link href={"/coach/profile"} className="block p-4">
        <AnimatedButton className="bg-[#1556D8]/15 h-10 border w-full border-[#1556D8]/10 group/btn px-5 py-2.5 rounded-full flex items-center justify-center gap-2 transition-all whitespace-nowrap hover:bg-[linear-gradient(177deg,#5C8FF7_10.06%,#276AEE_62.94%)]">
          <span className="text-medium text-xs bg-[linear-gradient(177deg,#5C8FF7_10.06%,#276AEE_62.94%)] bg-clip-text text-transparent group-hover/btn:text-white group-hover/btn:bg-none">
            View Details
          </span>
        </AnimatedButton>
      </Link>
    </div>
  );
};

export default ProgramCard;
