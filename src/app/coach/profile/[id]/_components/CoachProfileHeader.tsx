import Image from "next/image";
import Icon from "@/utils/icon";
import { AnimatedButton } from "@/components/ui/Button";

const profileData = {
  name: "Johnathan Myers",
  title: "Football • Athlete",
  intro:
    "Former NFL QB helping athletes master elite mechanics and decision-making",
  location: "Honolulu, HI",
  connections: "8,247 Connections",
  backgroundImage:
    "https://i.ibb.co.com/WvNktNfW/9f447944b31f2dfc586a06da40a72805b14e4e27.png",
  avatar:
    "https://i.ibb.co.com/m7S9mMZ/e01d6d1d2b1dd7ddae8d3283e39be5e150fcb4c4.png",
};

const CoachProfileHeader = () => {
  return (
    <div className="bg-[url('https://i.ibb.co.com/WvNktNfW/9f447944b31f2dfc586a06da40a72805b14e4e27.png')]  flex items-end lg:h-[450px] bg-cover bg-no-repeat bg-center rounded-3xl overflow-hidden relative shadow-2xl p-7 mx-auto">
      <div className="bg-gradient-to-tr from-[#000] via-[#0000004d] to-[#00000000] top-0 left-0 right-0 bottom-0  absolute "></div>

      <div className="w-full relative z-10 flex justify-end flex-col gap-3">
        <div className="flex flex-col gap-4 mb-4 sm:mb-6 md:mb-8">
          <div className="relative flex flex-col justify-center w-fit items-center">
            <Image
              width={96}
              height={96}
              src={profileData.avatar || "/placeholder.svg"}
              alt={profileData.name}
              className="size-24 rounded-full border-2 mx-auto border-[#68B0EA] object-cover"
            />
            <AnimatedButton className="flex items-center justify-center gap-1.5 px-3 -translate-y-2 h-7 rounded-full text-[11px] text-white bg-primary-gradient">
              <Icon
                name="checkmark_badge"
                height={16}
                width={16}
                className="text-white"
              />
              Verified
            </AnimatedButton>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">
              {profileData.name}
            </h2>

            <p className="text-white font-medium text-sm mt-1">
              {profileData.title}
            </p>

            <p className="text-xs text-white mt-2">{profileData.intro}</p>

            <div className="flex items-center gap-1.5 mt-1.5">
              <Icon name="location_white" height={20} width={20} />
              <span className="text-xs font-medium text-white">
                {profileData.location}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <div className="backdrop-blur-[2px] px-3 py-1.5 rounded-full h-8 flex items-center gap-2 border border-[#457FF31A] bg-[linear-gradient(180deg,rgba(69,127,243,0.15)_0%,rgba(69,127,243,0.30)_100%)]">
              <Icon
                name="license_maintenance"
                height={20}
                width={20}
                className="text-[#5C8FF7]"
              />
              <span className="primary-gradient-text text-[10px] font-medium">
                NCAA D1 License
              </span>
            </div>

            <div className="backdrop-blur-[2px] px-3 py-1.5 rounded-full h-8 flex items-center gap-2 border border-[#EB9E0F1A] bg-[linear-gradient(180deg,rgba(235,158,15,0.15)_0%,rgba(235,158,15,0.30)_100%)]">
              <Icon
                name="check_check"
                height={20}
                width={20}
                className="text-[#FFB42A]"
              />
              <span className="warning-gradient-text text-[10px] font-medium">
                CPR Certified
              </span>
            </div>

            <div className="backdrop-blur-[2px] px-3 py-1.5 rounded-full h-8 flex items-center gap-2 border border-[#FF00331A] bg-[linear-gradient(180deg,rgba(255,0,51,0.15)_0%,rgba(255,0,51,0.30)_100%)]">
              <Icon
                name="checkmark_badge"
                height={20}
                width={20}
                className="text-[#F03]"
              />
              <span className="text-[#F03] text-[10px] font-medium">
                NFHS Certified
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 justify-between flex-wrap">
          <div className="flex items-center gap-4 flex-wrap">
            <div>
              <div className="flex items-center gap-1.5">
                <div className="flex items-center gap-1">
                  <Icon name="star" height={16} width={16} />
                  <Icon name="star" height={16} width={16} />
                  <Icon name="star" height={16} width={16} />
                  <Icon name="star" height={16} width={16} />
                  <Icon
                    name="star_half"
                    className="text-[#FF8C1A]"
                    height={16}
                    width={16}
                  />
                </div>
                <div className="text-2xl font-semibold text-white">
                  4.9 <span className="text-sm font-medium">(234)</span>
                </div>
              </div>
              <span className="text-[10px] font-medium text-white/70">
                Avg Rating (134 Reviews)
              </span>
            </div>

            <div className="h-[38px] w-px bg-[#212121]"></div>

            <div className="grid gap-2">
              <span className="text-2xl font-medium text-white">247</span>
              <span className="text-[10px] font-medium text-white/70">
                Athletes Trained
              </span>
            </div>

            <div className="h-[38px] w-px bg-[#212121]"></div>

            <div className="grid gap-2">
              <span className="text-2xl font-medium text-white">12</span>
              <span className="text-[10px] font-medium text-white/70">
                Programs Created
              </span>
            </div>

            <div className="h-[38px] w-px bg-[#212121]"></div>

            <div>
              <div className="flex items-center gap-2">
                <Icon
                  name="users"
                  height={24}
                  width={24}
                  className="text-white"
                />
                <span className="text-2xl font-medium text-white">8,247</span>
              </div>
              <span className="text-[10px] font-medium text-white/70">
                Connections
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <AnimatedButton className="rounded-full border border-[#1556D81A] bg-[#1556D84D] backdrop-blur-[4px] text-nowrap h-12  flex items-center  gap-2 text-sm font-medium text-white">
              <Icon name="message" height={24} width={24} />
              Message Coach
            </AnimatedButton>

            <AnimatedButton className="rounded-full border border-[#1556D81A] bg-[#1556D84D] backdrop-blur-[4px] text-nowrap h-12  flex items-center  gap-2 text-sm font-medium text-white">
              Request to Train
            </AnimatedButton>

            <AnimatedButton className="rounded-full bg-primary-gradient text-nowrap h-12  flex items-center  gap-2 text-sm font-medium text-white">
              Follow Coach
            </AnimatedButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachProfileHeader;
