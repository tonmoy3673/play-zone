import { AnimatedButton } from "@/components/ui/Button";
import Icon from "@/utils/icon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CoachCard = () => {
  return (
    <div className="w-full bg-white/60 rounded-2xl p-4 pt-6 text-center relative">
      {/* <!-- Avatar --> */}
      <div className="relative size-20 mx-auto mb-3 rounded-full overflow-hidden border-2 border-[#68B0EA] shadow-md">
        <Image
          src="https://images.unsplash.com/photo-1631659718597-1b62ad76da3a?w=200&h=200&fit=crop"
          alt="Coach"
          fill
          className="size-full object-cover"
        />
      </div>

      {/* <!-- Name + Role --> */}
      <div className="mb-3">
        <h3 className="text-base font-medium text-dark">Michael Thompson</h3>
        <p className="text-dark/70 text-xs">Football QB Coach</p>
      </div>

      {/* <!-- Description --> */}
      <div className="mb-6">
        <p className="text-dark/70 text-xs">
          Former NFL QB helping athletes master elite mechanics and
          decision-making
        </p>
      </div>

      {/* <!-- Stats --> */}
      <div className="flex items-center justify-center gap-6 mb-6 text-sm text-gray-700">
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-1.5">
            <Icon name="clock" height={20} width={20} />
            <span className="font-semibold text-dark">24hr</span>
          </div>
          <span className="text-[10px] text-dark/70 font-medium">
            Response Time
          </span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-1.5">
            <Icon name="users" height={20} width={20} />
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

      <Link href={"/coach/profile"}>
        <AnimatedButton className="bg-[#1556D8]/15 h-10 border w-full border-[#1556D8]/10 group/btn px-5 py-2.5 rounded-full flex items-center justify-center gap-2 transition-all whitespace-nowrap hover:bg-[linear-gradient(177deg,#5C8FF7_10.06%,#276AEE_62.94%)]">
          <span className="text-medium text-xs bg-[linear-gradient(177deg,#5C8FF7_10.06%,#276AEE_62.94%)] bg-clip-text text-transparent group-hover/btn:text-white group-hover/btn:bg-none">
            View Profile
          </span>
        </AnimatedButton>
      </Link>
    </div>
  );
};

export default CoachCard;
