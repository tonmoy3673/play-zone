import Link from "next/link";
import Image from "next/image";
import Icon from "@/utils/icon";
import { AnimatedButton } from "@/components/ui/Button";

const profileData = {
  name: "Johnathan Myers",
  title: "Football • Athlete",
  location: "Honolulu, HI",
  connections: "8,247 Connections",
  backgroundImage:
    "https://i.ibb.co.com/WvNktNfW/9f447944b31f2dfc586a06da40a72805b14e4e27.png",
  avatar:
    "https://i.ibb.co.com/m7S9mMZ/e01d6d1d2b1dd7ddae8d3283e39be5e150fcb4c4.png",
};

const MainProfileCard = () => {
  return (
    <div className="bg-[url('https://i.ibb.co.com/WvNktNfW/9f447944b31f2dfc586a06da40a72805b14e4e27.png')]  flex items-end lg:h-[350px] bg-cover bg-no-repeat bg-center rounded-3xl overflow-hidden relative shadow-2xl p-7 mx-auto">
      <div className="bg-gradient-to-tr from-[#000] via-[#0000004d] to-[#00000000] top-0 left-0 right-0 bottom-0  absolute "></div>

      <div className="w-full relative z-10 flex lg:items-end flex-col lg:flex-row gap-3 lg:justify-between">
        <div className="flex flex-col gap-4 ">
          <div>
            <div className="relative flex-col justify-center w-fit items-center">
              <Image
                width={96}
                height={96}
                src={profileData.avatar || "/placeholder.svg"}
                alt={profileData.name}
                className="size-24 rounded-full border-2 mx-auto border-[#68B0EA] object-cover"
              />
              <Link href={"/athlete/profile/settings"}>
                <AnimatedButton className="flex items-center gap-1.5 px-3 -translate-y-2 h-7 rounded-full text-[11px] text-white bg-primary-gradient">
                  <Icon
                    name="edit"
                    height={14}
                    width={14}
                    className="text-white"
                  />
                  Edit Profile
                </AnimatedButton>
              </Link>
            </div>
            <div className="flex-1">
              <h2 className="text-xl  font-semibold text-white">
                {profileData.name}
              </h2>
              <p className="text-white font-medium text-sm sm:text-base mt-1">
                {profileData.title}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <Icon name="location_white" height={20} width={20} />
              <span className="text-xs font-medium text-white">
                {profileData.location}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Icon
                name="users"
                className="text-white"
                height={20}
                width={20}
              />
              <span className="text-xs font-medium text-white">
                {profileData.connections}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <AnimatedButton className="rounded-full bg-primary-gradient text-nowrap h-12  flex items-center  gap-2 text-sm font-medium text-white">
            <Icon name="message" height={24} width={24} />
            Direct Message
          </AnimatedButton>

          <AnimatedButton className="rounded-full border border-[#1556D81A] bg-[#1556D84D] backdrop-blur-[4px] text-nowrap h-12  flex items-center  gap-2 text-sm font-medium text-white">
            <Icon name="user_add" height={24} width={24} />
            Add Connection
          </AnimatedButton>

          <AnimatedButton className="rounded-full border border-[#1556D81A] bg-[#1556D84D] backdrop-blur-[4px] text-nowrap h-12  flex items-center  gap-2 text-sm font-medium text-white">
            <Icon name="workout_stretching" height={24} width={24} />
            Setup Workout
          </AnimatedButton>
        </div>
      </div>
    </div>
  );
};

export default MainProfileCard;
