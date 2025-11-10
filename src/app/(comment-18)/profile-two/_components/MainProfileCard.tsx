import Link from "next/link";
import Image from "next/image";
import { AnimatedButton } from "@/components/ui/Button";
import Icon from "@/utils/icon";

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
    <div className="bg-[url('https://i.ibb.co.com/WvNktNfW/9f447944b31f2dfc586a06da40a72805b14e4e27.png')] flex items-end lg:h-[355px] bg-cover bg-no-repeat bg-center rounded-3xl overflow-hidden relative shadow-2xl p-7 mx-auto">
      <div className="bg-gradient-to-tr from-black via-black/30 to-transparent inset-0 absolute"></div>

      <div className="w-full relative z-10 flex items-end justify-between">
        {/* Avatar and Basic Info */}
        <div className="flex flex-col gap-4 ">
          <div>
            <div className="relative">
              <Image
                width={100}
                height={100}
                src={profileData.avatar || "/placeholder.svg"}
                alt={profileData.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-[#68B0EA] object-cover"
              />
              <Link href={"/athlete/profile/settings"}>
                <AnimatedButton className="flex items-center gap-1.5 px-3 -translate-y-4 rounded-full border border-[#68B0EA] text-[10px] font-medium text-white bg-[linear-gradient(177deg,#5C8FF7_10.06%,#276AEE_62.94%)]">
                  <Icon name="edit" height={16} width={16} />
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

          {/* Location and Connections */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6  text-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <Icon name="location_white" height={20} width={20} />
              <span className="text-xs font-medium text-white">
                {profileData.location}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="users_white" height={20} width={20} />
              <span className="text-xs font-medium text-white">
                {profileData.connections}
              </span>
            </div>
          </div>
        </div>
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <AnimatedButton
            style={{
              borderRadius: "66px",
              background:
                " var(--Gradient, linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%))",
            }}
            className=" text-nowrap h-12  flex items-center  gap-2 text-sm font-medium text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M13.1706 19.8905C17.3536 19.6125 20.6856 16.2332 20.9598 11.9909C21.0134 11.1607 21.0134 10.3009 20.9598 9.47072C20.6856 5.22838 17.3536 1.84913 13.1706 1.57107C11.7435 1.47621 10.2536 1.47641 8.8294 1.57107C4.64639 1.84913 1.31441 5.22838 1.04024 9.47072C0.986587 10.3009 0.986587 11.1607 1.04024 11.9909C1.1401 13.536 1.82343 14.9666 2.62791 16.1746C3.09501 17.0203 2.78674 18.0758 2.30021 18.9978C1.94941 19.6626 1.77401 19.995 1.91484 20.2351C2.05568 20.4752 2.37026 20.4829 2.99943 20.4982C4.24367 20.5285 5.08268 20.1757 5.74868 19.6846C6.1264 19.4061 6.31527 19.2668 6.44544 19.2508C6.5756 19.2348 6.83177 19.3403 7.34401 19.5513C7.8044 19.7409 8.33896 19.8579 8.8294 19.8905C10.2536 19.9852 11.7435 19.9854 13.1706 19.8905Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                opacity="0.4"
                d="M10.9953 11H11.0043M14.9908 11H14.9998M6.99982 11H7.00879"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Direct Message
          </AnimatedButton>
          <AnimatedButton
            style={{
              borderRadius: "66px",
              border: "1px solid rgba(21, 86, 216, 0.10)",
              background: "rgba(21, 86, 216, 0.30)",
              backdropFilter: "blur(4px)",
            }}
            className=" text-nowrap h-12  flex items-center  gap-2 text-sm font-medium text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M11.5 21H5.59087C4.04549 21 2.81631 20.248 1.71266 19.1966C-0.546635 17.0441 3.1628 15.324 4.57757 14.4816C6.67837 13.2307 9.13683 12.7719 11.5 13.1052C12.3575 13.2261 13.1926 13.4514 14 13.7809"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.5 5.5C15.5 7.98528 13.4853 10 11 10C8.51472 10 6.5 7.98528 6.5 5.5C6.5 3.01472 8.51472 1 11 1C13.4853 1 15.5 3.01472 15.5 5.5Z"
                stroke="white"
                strokeWidth="1.5"
              />
              <path
                opacity="0.4"
                d="M17.5 21L17.5 14M14 17.5H21"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            Add Connection
          </AnimatedButton>
          <AnimatedButton
            style={{
              borderRadius: "66px",
              border: "1px solid rgba(21, 86, 216, 0.10)",
              background: "rgba(21, 86, 216, 0.30)",
              backdropFilter: "blur(4px)",
            }}
            className=" text-nowrap h-12  flex items-center  gap-2 text-sm font-medium text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="20"
              viewBox="0 0 12 20"
              fill="none"
            >
              <path
                opacity="0.4"
                d="M10 3.5C10 4.32843 9.32843 5 8.5 5C7.67157 5 7 4.32843 7 3.5C7 2.67157 7.67157 2 8.5 2C9.32843 2 10 2.67157 10 3.5Z"
                stroke="white"
                strokeWidth="1.5"
              />
              <path
                d="M8.36019 13L9.30392 12.454C10.3786 11.8323 10.9159 11.5214 10.9885 11.0784C10.9999 11.0092 11.0028 10.9391 10.9973 10.8694C10.9622 10.4229 10.4524 10.0789 9.43289 9.39071L4.72588 6.21359C2.87718 4.96577 2.45184 2.69114 3.75097 1"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.72588 6.21359C2.22588 8.71359 1 15.6324 1 19.0003M4.72588 6.21359C2.87718 4.96577 2.45184 2.69114 3.75097 1M4.72588 6.21359L7.3725 8M8.36019 13L9.30392 12.454C10.3786 11.8323 10.9159 11.5214 10.9885 11.0784C10.9999 11.0092 11.0028 10.9391 10.9973 10.8694C10.9622 10.4229 10.4524 10.0789 9.43289 9.39071L7.3725 8M9.00016 19.0003C8.02681 17.8647 7.02574 16.3 6.05015 14.8578C5.36664 13.8474 5.02488 13.3422 4.9845 12.8132M7.3725 8C6.56973 9.0391 6.01638 10.0207 5.6026 10.8942C5.16362 11.8209 4.94412 12.2843 4.9845 12.8132M4.9845 12.8132L2 12"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Setup Workout
          </AnimatedButton>
        </div>
      </div>
    </div>
  );
};

export default MainProfileCard;
