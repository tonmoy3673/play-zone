import Link from "next/link";
import Image from "next/image";
import Icon from "@/utils/icon";
import Card from "@/components/ui/Card";
import { AnimatedButton } from "@/components/ui/Button";

const CoachCard = () => {
  return (
    <Card className="bg-white/60 p-4 pt-6 text-center lg:rounded-2xl after:absolute after:size-14 after:bg-gradient-to-tr after:blur-xl after:from-blue-400 after:to-transparent after:bottom-0 after:left-0 after:z-[-1]">
      <div className="relative size-20 mx-auto mb-3 rounded-full overflow-hidden border-2 border-[#68B0EA] shadow-md">
        <Image
          src="https://images.unsplash.com/photo-1631659718597-1b62ad76da3a?w=200&h=200&fit=crop"
          alt="Coach"
          fill
          className="size-full object-cover"
        />
      </div>

      <div className="mb-3">
        <h3 className="text-base font-medium text-dark">Michael Thompson</h3>
        <p className="text-dark/70 text-xs">Football QB Coach</p>
      </div>

      <div>
        <p className="text-dark/70 text-xs">
          Former NFL QB helping athletes master elite mechanics and
          decision-making
        </p>
      </div>

      <hr className="my-3 h-px border-white" />

      <div className="flex items-center justify-center gap-6 mb-5 text-sm">
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-1.5">
            <Icon name="clock" height={20} width={20} className="text-dark" />
            <span className="font-semibold text-dark">24hr</span>
          </div>
          <span className="text-[10px] text-dark/70 font-medium">
            Response Time
          </span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-1.5">
            <Icon name="users" className="text-dark" height={20} width={20} />
            <span className="font-semibold text-dark">3.4K+</span>
          </div>
          <span className="text-[10px] text-dark/70 font-medium">
            Enrolled Athletes
          </span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-1.5">
            <Icon name="star" height={20} width={20} />
            <span className="font-semibold text-dark">4.9</span>
          </div>
          <span className="text-[10px] text-dark/70 font-medium">Rating</span>
        </div>
      </div>

      <Link href={"/coach/profile/1"}>
        <AnimatedButton className="bg-[#1556D826] h-10 border w-full border-[#1556D81A] group/btn px-5 py-2.5 rounded-full flex items-center justify-center gap-2 transition-all whitespace-nowrap hover:bg-primary-gradient">
          <span className="font-medium text-xs primary-gradient-text group-hover/btn:!text-white group-hover/btn:!bg-none">
            View Profile
          </span>
        </AnimatedButton>
      </Link>
    </Card>
  );
};

export default CoachCard;
