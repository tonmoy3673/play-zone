import Image from "next/image";
import Icon from "@/utils/icon";
import { AnimatedButton } from "@/components/ui/Button";

const AthleteCard = () => {
  return (
    <div className="bg-white rounded-xl overflow-hidden relative">
      <div className="absolute left-4 top-4 z-[2]">
        <span className="inline-block px-2.5 py-[5px] text-white text-[10px] font-semibold rounded-md bg-[linear-gradient(207deg,#FFB42A_39.14%,#EB9E0F_71.52%)]">
          Top 5
        </span>
      </div>

      <div className="h-[320px] flex items-end bg-[url('/explore-athletes/banner.png')] bg-no-repeat bg-cover relative z-[1] after:absolute after:inset-0 after:bg-[linear-gradient(179deg,rgba(255,255,255,0.00)_46.71%,rgba(255,255,255,0.74)_54.75%,#FFF_61.85%,#FFF_66.3%,#FFF_99.37%)] after:z-[-1]">
        <div className="p-4 pb-0 space-y-3 w-full">
          <div className="flex items-center gap-3">
            <div className="border-2 relative border-[#68B0EA] rounded-full overflow-hidden size-[60px]">
              <Image
                src={"/explore-athletes/profile.png"}
                alt="Profile"
                className="size-full object-cover"
                fill
              />
            </div>
            <div>
              <h5 className="text-base font-medium text-black">Jamal Wright</h5>
              <div className="flex items-center gap-2 text-black/70 text-xs">
                <span>Football</span>
                <span className="size-1 rounded-full bg-black/70"></span>
                <span>Wide Receiver</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Icon name="location" width={20} height={20} />
              <span className="text-xs font-medium">Houston, TX</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Icon name="verified_badge" width={20} height={20} />
              <span className="text-xs font-medium bg-[linear-gradient(177deg,#5C8FF7_10.06%,#276AEE_62.94%)] bg-clip-text text-transparent">
                Verified
              </span>
            </div>
          </div>
          <div className="pt-3 flex items-center justify-between">
            <div className="grid gap-1 text-center px-2">
              <span className="text-sm font-semibold">4.7s</span>
              <span className="text-xs text-black/70">40yd</span>
            </div>
            <div className="grid gap-1 text-center px-2">
              <span className="text-sm font-semibold">12 TDs</span>
              <span className="text-xs text-black/70">Season</span>
            </div>
            <div className="grid gap-1 text-center px-2">
              <span className="text-sm font-semibold">HS</span>
              <span className="text-xs text-black/70">Level</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <AnimatedButton className="text-white w-full font-normal px-5 py-2.5 text-sm md:h-10 rounded-full transition-all whitespace-nowrap mt-6 md:mt-8 bg-[linear-gradient(177deg,#5C8FF7_10.06%,#276AEE_62.94%)]">
          View Profile
        </AnimatedButton>
      </div>
    </div>
  );
};

export default AthleteCard;
