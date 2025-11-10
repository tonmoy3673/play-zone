"use client";

import Button, { AnimatedButton } from "@/components/ui/Button";
import Image from "next/image";
import GalleryHighlights from "./_components/GalleryHighlights";
import About from "./_components/About";
import Achievements from "./_components/Achievements";
import CurrentPrograms from "./_components/CurrentPrograms";
import RecentActivity from "./_components/RecentActivity";
import Link from "next/link";

// Demo data
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

export default function Home() {
  return (
    <div className="bg-[#ffffff4d] backdrop-blur-3xl mx-auto rounded-3xl border border-white p-8">
      {/* Header with back button */}
      <div className="flex items-center gap-3 mb-6">
        <Button className="text-gray-700 bg-[#ffffff4d] p-0 backdrop-blur-3xl rounded-full size-10 border border-white flex items-center justify-center hover:brightness-110">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.37114e-08 6C6.78525e-08 6.55228 0.447715 7 1 7L17 7C17.5523 7 18 6.55229 18 6C18 5.44772 17.5523 5 17 5L1 5C0.447715 5 7.91749e-08 5.44772 4.37114e-08 6Z"
              fill="#141B34"
              fill-opacity="0.4"
            />
            <path
              d="M2.02786 6C2.12116 5.84523 2.31675 5.56711 2.53062 5.32506C2.95637 4.84323 3.5431 4.29284 4.1556 3.76105C4.76313 3.23357 5.3736 2.74365 5.83397 2.38437C6.06363 2.20515 6.45995 1.90576 6.59308 1.80521C7.03772 1.47768 7.13269 0.851733 6.8052 0.40706C6.47769 -0.0376388 5.85169 -0.132641 5.40699 0.194867L5.40328 0.19767C5.2589 0.306722 4.84028 0.62291 4.60352 0.80767C4.1264 1.18002 3.48686 1.69303 2.84439 2.25084C2.20689 2.80434 1.54362 3.4216 1.03187 4.00078C0.776998 4.28923 0.538562 4.59179 0.358424 4.8906C0.194843 5.16195 1.65859e-05 5.55679 2.62267e-07 5.99996C1.66246e-05 6.44313 0.194843 6.83805 0.358425 7.1094C0.538562 7.40821 0.776998 7.71077 1.03187 7.99922C1.54362 8.5784 2.20689 9.19566 2.84439 9.74916C3.48686 10.307 4.1264 10.82 4.60352 11.1923C4.84028 11.3771 5.25863 11.6931 5.40301 11.8021L5.407 11.8051C5.85169 12.1326 6.47769 12.0376 6.8052 11.5929C7.13269 11.1483 7.03772 10.5223 6.59308 10.1948C6.45995 10.0942 6.06363 9.79485 5.83397 9.61563C5.3736 9.25635 4.76313 8.76643 4.1556 8.23895C3.5431 7.70716 2.95637 7.15677 2.53062 6.67494C2.31675 6.43289 2.12116 6.15477 2.02786 6Z"
              fill="#141B34"
            />
          </svg>
        </Button>
        <h1 className="text-3xl font-semibold text-dark ml-3">Profile</h1>
      </div>

      {/* Main Profile Card */}
      <div className="bg-[url('https://i.ibb.co.com/WvNktNfW/9f447944b31f2dfc586a06da40a72805b14e4e27.png')]   flex items-end h-[450px] bg-cover bg-no-repeat bg-center rounded-3xl overflow-hidden relative shadow-2xl p-7 mx-auto">
        <div className="bg-gradient-to-tr from-[#000] via-[#0000004d] to-[#00000000] top-0 left-0 right-0 bottom-0  absolute "></div>
        <div className=" w-full relative z-10 flex items-end justify-between  ">
          {/* Avatar and Basic Info */}
          <div className="flex flex-col gap-4 ">
            <div>
              <div className="relative">
                <Image
                  style={{
                    borderRadius: "48px",
                    border: "2px solid var(--Line_Gradient, #68B0EA)",
                    background:
                      "url(<path-to-image>) lightgray 50% / cover no-repeat",
                  }}
                  width={100}
                  height={100}
                  src={profileData.avatar || "/placeholder.svg"}
                  alt={profileData.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-gray-900 object-cover"
                />
                <Link href={"/athlete/profile/settings"}>
                  <AnimatedButton
                    style={{
                      borderRadius: "40.926px",
                      borderTop: "0.93px solid var(--Line_Gradient, #68B0EA)",
                      background:
                        "var(--Gradient, linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%))",
                    }}
                    className="flex items-center gap-1.5 px-3 -translate-y-4 text-[11px] text-white "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M9.38251 2.59031C9.8793 2.05206 10.1277 1.78294 10.3916 1.62596C11.0285 1.24718 11.8128 1.2354 12.4603 1.59489C12.7286 1.74388 12.9847 2.00542 13.4967 2.52852C14.0088 3.05161 14.2648 3.31316 14.4107 3.58729C14.7626 4.24876 14.7511 5.04987 14.3803 5.70048C14.2266 5.97012 13.9631 6.22386 13.4362 6.73135L7.16713 12.7695C6.16862 13.7313 5.66937 14.2121 5.04541 14.4558C4.42145 14.6995 3.73551 14.6816 2.36362 14.6457L2.17696 14.6409C1.75931 14.6299 1.55049 14.6245 1.4291 14.4867C1.30771 14.3489 1.32428 14.1362 1.35743 13.7108L1.37542 13.4798C1.46871 12.2824 1.51536 11.6837 1.74918 11.1455C1.983 10.6073 2.38633 10.1703 3.19299 9.29634L9.38251 2.59031Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.66663 2.66666L13.3333 7.33332"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <path
                        opacity="0.4"
                        d="M9.33337 14.6667L14.6667 14.6667"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Edit Profile
                  </AnimatedButton>
                </Link>
              </div>
              <div className="flex-1 ">
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="20"
                  viewBox="0 0 14 20"
                  fill="none"
                >
                  <path
                    d="M9.08329 7.50001C9.08329 8.6506 8.15055 9.58334 6.99996 9.58334C5.84937 9.58334 4.91663 8.6506 4.91663 7.50001C4.91663 6.34941 5.84937 5.41667 6.99996 5.41667C8.15055 5.41667 9.08329 6.34941 9.08329 7.50001Z"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M8.04779 14.578C7.76673 14.8487 7.39105 15 7.00009 15C6.60912 15 6.23345 14.8487 5.95238 14.578C3.37854 12.084 -0.0707158 9.29795 1.61138 5.25311C2.52088 3.06611 4.70408 1.66667 7.00009 1.66667C9.29609 1.66667 11.4793 3.06611 12.3888 5.25311C14.0688 9.29285 10.628 12.0926 8.04779 14.578Z"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path
                    opacity="0.4"
                    d="M12 16.6667C12 17.5871 9.76142 18.3333 7 18.3333C4.23858 18.3333 2 17.5871 2 16.6667"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-xs font-medium text-white">
                  {profileData.location}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                >
                  <path
                    opacity="0.4"
                    d="M17.3116 13C17.936 13 18.4327 12.6071 18.8786 12.0576C19.7915 10.9329 18.2927 10.034 17.721 9.59383C17.1399 9.14635 16.4911 8.89285 15.8332 8.83333M14.9999 7.16667C16.1505 7.16667 17.0832 6.23393 17.0832 5.08333C17.0832 3.93274 16.1505 3 14.9999 3"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    opacity="0.4"
                    d="M2.68822 13C2.0638 13 1.56714 12.6071 1.12121 12.0576C0.208326 10.9329 1.70714 10.034 2.27879 9.59383C2.8599 9.14635 3.50874 8.89285 4.16659 8.83333M4.58325 7.16667C3.43266 7.16667 2.49992 6.23393 2.49992 5.08333C2.49992 3.93274 3.43266 3 4.58325 3"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M6.73642 10.5927C5.88494 11.1192 3.65241 12.1942 5.01217 13.5395C5.6764 14.1967 6.41619 14.6667 7.34627 14.6667H12.6536C13.5837 14.6667 14.3234 14.1967 14.9877 13.5395C16.3474 12.1942 14.1149 11.1192 13.2634 10.5927C11.2667 9.35801 8.73313 9.35801 6.73642 10.5927Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.9166 4.25C12.9166 5.86083 11.6107 7.16666 9.99992 7.16666C8.38909 7.16666 7.08325 5.86083 7.08325 4.25C7.08325 2.63916 8.38909 1.33333 9.99992 1.33333C11.6107 1.33333 12.9166 2.63916 12.9166 4.25Z"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                </svg>
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

      <div className="flex items-start gap-7 mt-7">
        <div className="flex-1">
          <GalleryHighlights />
          <CurrentPrograms />
        </div>
        <div className="max-w-[400px] w-full">
          <About />
          <Achievements />
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}
