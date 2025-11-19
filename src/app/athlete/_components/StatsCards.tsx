"use client";

import Image from "next/image";
import StreakCard from "./StreakCard";

export function StatsCards() {
  return (
    <div className="flex justify-between  mb-7 gap-4">
      {/* Weekly Progress Card */}
      <div className="bg-[#ffffff4d] bg-[url('/program/Frame-2147225279.svg')] bg-contain bg-center bg-no-repeat max-w-sm flex-1 border border-l-0 border-b-0 border-white rounded-2xl  overflow-hidden">
        <div className="backdrop-blur-3xl h-full pl-5 pt-5 w-full">
          <div className="flex items-center justify-between pr-5 mb-1">
            <h3 className="text-xs font-semibold text-dark">Weekly Progress</h3>
            <button className="size-10 flex items-center justify-center bg-white rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="11"
                viewBox="0 0 16 11"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.5001 5.49935C15.5001 5.95959 15.127 6.33268 14.6667 6.33268L1.33338 6.33268C0.873142 6.33268 0.500046 5.95959 0.500046 5.49935C0.500046 5.03911 0.873142 4.66602 1.33338 4.66602L14.6667 4.66602C15.127 4.66602 15.5001 5.03911 15.5001 5.49935Z"
                  fill="#141B34"
                  fillOpacity="0.4"
                />
                <path
                  d="M13.8102 5.5C13.7324 5.37103 13.5694 5.13926 13.3912 4.93755C13.0364 4.53602 12.5475 4.07737 12.0371 3.63421C11.5308 3.19464 11.0221 2.78637 10.6384 2.48698C10.447 2.33763 10.1168 2.08814 10.0058 2.00434C9.6353 1.7314 9.55615 1.20978 9.82906 0.839216C10.102 0.468634 10.6236 0.389466 10.9942 0.662389L10.9973 0.664725C11.1176 0.755601 11.4665 1.01909 11.6638 1.17306C12.0614 1.48335 12.5943 1.91086 13.1297 2.3757C13.661 2.83695 14.2137 3.35133 14.6402 3.83398C14.8526 4.07436 15.0513 4.32649 15.2014 4.5755C15.3377 4.80163 15.5 5.13066 15.5001 5.49997C15.5 5.86928 15.3377 6.19837 15.2014 6.4245C15.0513 6.67351 14.8526 6.92564 14.6402 7.16602C14.2137 7.64867 13.661 8.16305 13.1297 8.6243C12.5943 9.08914 12.0614 9.51665 11.6638 9.82694C11.4665 9.98091 11.1179 10.2442 10.9976 10.3351L10.9942 10.3376C10.6236 10.6105 10.102 10.5314 9.82906 10.1608C9.55615 9.79022 9.6353 9.2686 10.0058 8.99566C10.1168 8.91186 10.447 8.66237 10.6384 8.51302C11.0221 8.21363 11.5308 7.80536 12.0371 7.36579C12.5475 6.92263 13.0364 6.46398 13.3912 6.06245C13.5694 5.86074 13.7324 5.62897 13.8102 5.5Z"
                  fill="#141B34"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-end">
            <div className="flex flex-col pb-5  flex-1 items-baseline gap-2">
              <p className="flex items-end gap-2">
                <span className="text-4xl font-semibold text-dark">15%</span>
                <span
                  style={{ color: "rgba(20, 27, 52, 0.70)" }}
                  className="text-2xl font-medium text-green-600"
                >
                  Better
                </span>
              </p>
              <p
                style={{ color: "rgba(20, 27, 52, 0.70)" }}
                className="text-[10px] font-medium"
              >
                than last week
              </p>
            </div>
            <Image
              src={"/Business Target 1.svg"}
              alt="image"
              width={400}
              height={400}
              className="object-contain size-32"
            />
          </div>
        </div>
      </div>
      <div className=" bg-[#ffffff4d] max-w-sm flex-1 border border-white rounded-2xl  backdrop-blur-3xl  overflow-hidden">
        <div className="backdrop-blur-3xl h-full pl-5 pt-5 w-full">
          <div className="flex items-center justify-between pr-5 mb-1">
            <h3 className="text-sm font-semibold text-dark">Current Ranking</h3>
            <button className="size-10 flex items-center justify-center bg-white rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
              >
                <path
                  d="M13.5602 0.0751592C14.0125 0.136326 14.5447 0.311517 14.9158 0.819086C15.135 1.11898 15.2181 1.45635 15.2555 1.80431C15.3009 2.22523 15.291 2.65164 15.291 3.07433C15.291 4.18946 15.2128 5.24832 14.1864 5.93426C13.8776 6.14061 13.5152 6.30959 13.2706 6.43671L10.4987 7.87775C9.97128 8.15196 9.5386 8.3769 9.16412 8.53032C8.77227 8.69086 8.40385 8.79089 7.99931 8.79089C7.59477 8.79089 7.22634 8.69086 6.83449 8.53032C6.46002 8.3769 6.02734 8.15196 5.49991 7.87775L2.72799 6.43671C1.16388 5.62358 0.707607 4.80291 0.707637 3.07438C0.707637 2.65168 0.697755 2.22525 0.743082 1.80431C0.78055 1.45635 0.863651 1.11898 1.08286 0.819085C1.45387 0.311517 1.98608 0.136326 2.43845 0.0751594C2.76093 0.0315566 3.12272 0.0398077 3.39579 0.0460354C4.48498 0.0708759 5.57653 0.0496403 6.66597 0.0496403C6.90167 0.0496403 7.01953 0.0496403 7.09275 0.122864C7.16597 0.196087 7.16597 0.313938 7.16597 0.54964V3.16602C7.16597 3.62625 7.53907 3.99935 7.99931 3.99935C8.45954 3.99935 8.83264 3.62625 8.83264 3.16602V0.549641C8.83264 0.313938 8.83264 0.196087 8.90586 0.122864C8.97909 0.0496403 9.09694 0.0496403 9.33264 0.0496403C10.4221 0.0496403 11.5136 0.0708758 12.6028 0.0460355C12.8759 0.0398078 13.2377 0.0315565 13.5602 0.0751592Z"
                  fill="#9BAAC8"
                />
                <path
                  d="M7.99994 9.20898C8.586 9.20898 8.98714 9.6485 9.20924 10.0983L9.86652 11.4237C9.88996 11.4518 9.92143 11.4725 9.95407 11.4884L11.1412 11.6873C11.6338 11.7701 12.1498 12.0305 12.3234 12.575C12.4968 13.1188 12.2271 13.6308 11.8735 13.9853L10.9509 14.9156C10.9316 14.9474 10.9169 14.9983 10.9178 15.0356L11.1819 16.1869C11.2986 16.6975 11.3011 17.3711 10.7839 17.7513C10.2641 18.1333 9.62157 17.9243 9.17243 17.6568L8.05878 16.9921C8.02506 16.9825 7.97362 16.9823 7.94018 16.9932L6.82863 17.6566C6.37832 17.926 5.73722 18.1316 5.21812 17.7497C4.70206 17.37 4.70154 16.6984 4.81903 16.1864L5.083 15.0356C5.08391 14.9983 5.06921 14.9474 5.04995 14.9156L4.12579 13.9838C3.77433 13.6294 3.50655 13.1189 3.67843 12.5762C3.85106 12.0311 4.36668 11.7701 4.85999 11.6872L6.04364 11.489C6.07701 11.4743 6.10593 11.4504 6.1305 11.4238L6.78863 10.0967C7.01253 9.64758 7.4147 9.20898 7.99994 9.20898Z"
                  fill="#45517C"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-end">
            <div className="flex flex-col pb-5  flex-1 items-baseline gap-2">
              <p className="flex items-end gap-2">
                <span className="text-4xl font-semibold text-dark">#5</span>
                <span
                  style={{ color: "rgba(20, 27, 52, 0.70)" }}
                  className="text-2xl font-medium text-green-600"
                >
                  Projected
                </span>
              </p>
              <p
                style={{ color: "rgba(20, 27, 52, 0.70)" }}
                className="text-[10px] font-medium"
              >
                on Hawaii Trench Warriors
              </p>
            </div>
            <Image
              src={"/Business Achievement 1 (1).svg"}
              alt="image"
              width={400}
              height={400}
              className="object-contain size-32"
            />
          </div>
        </div>
      </div>
      <div className=" bg-[#ffffff4d] max-w-sm flex-1 border border-white rounded-2xl  backdrop-blur-3xl  overflow-hidden">
        <div className="backdrop-blur-3xl h-full pl-5 pt-5 w-full">
          <div className="flex items-center justify-between pr-5 mb-1">
            <h3 className="text-sm font-semibold text-dark">Current Ranking</h3>
            <button className="size-10 flex items-center justify-center bg-white rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="11"
                viewBox="0 0 16 11"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.5001 5.49935C15.5001 5.95959 15.127 6.33268 14.6667 6.33268L1.33338 6.33268C0.873142 6.33268 0.500046 5.95959 0.500046 5.49935C0.500046 5.03911 0.873142 4.66602 1.33338 4.66602L14.6667 4.66602C15.127 4.66602 15.5001 5.03911 15.5001 5.49935Z"
                  fill="#141B34"
                  fillOpacity="0.4"
                />
                <path
                  d="M13.8102 5.5C13.7324 5.37103 13.5694 5.13926 13.3912 4.93755C13.0364 4.53602 12.5475 4.07737 12.0371 3.63421C11.5308 3.19464 11.0221 2.78637 10.6384 2.48698C10.447 2.33763 10.1168 2.08814 10.0058 2.00434C9.6353 1.7314 9.55615 1.20978 9.82906 0.839216C10.102 0.468634 10.6236 0.389466 10.9942 0.662389L10.9973 0.664725C11.1176 0.755601 11.4665 1.01909 11.6638 1.17306C12.0614 1.48335 12.5943 1.91086 13.1297 2.3757C13.661 2.83695 14.2137 3.35133 14.6402 3.83398C14.8526 4.07436 15.0513 4.32649 15.2014 4.5755C15.3377 4.80163 15.5 5.13066 15.5001 5.49997C15.5 5.86928 15.3377 6.19837 15.2014 6.4245C15.0513 6.67351 14.8526 6.92564 14.6402 7.16602C14.2137 7.64867 13.661 8.16305 13.1297 8.6243C12.5943 9.08914 12.0614 9.51665 11.6638 9.82694C11.4665 9.98091 11.1179 10.2442 10.9976 10.3351L10.9942 10.3376C10.6236 10.6105 10.102 10.5314 9.82906 10.1608C9.55615 9.79022 9.6353 9.2686 10.0058 8.99566C10.1168 8.91186 10.447 8.66237 10.6384 8.51302C11.0221 8.21363 11.5308 7.80536 12.0371 7.36579C12.5475 6.92263 13.0364 6.46398 13.3912 6.06245C13.5694 5.86074 13.7324 5.62897 13.8102 5.5Z"
                  fill="#141B34"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-end">
            <div className="flex flex-col pb-5  flex-1 items-baseline gap-2">
              <p className="flex items-end gap-5">
                <span className="text-4xl font-semibold text-dark">87%</span>
                <span
                  style={{ color: "rgba(20, 27, 52, 0.70)" }}
                  className="text-2xl font-medium text-green-600"
                >
                  Better
                </span>
              </p>
              <p
                style={{ color: "rgba(20, 27, 52, 0.70)" }}
                className="text-[10px] font-medium"
              >
                down <span className="text-red-500">3%</span> From The Last
                Month
              </p>
            </div>
            <Image
              src={"/Business Chart 1.svg"}
              alt="image"
              width={400}
              height={400}
              className="object-contain size-32"
            />
          </div>
        </div>
      </div>
      <StreakCard />
    </div>
  );
}
