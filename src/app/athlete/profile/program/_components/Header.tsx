"use client";

import React from "react";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button onClick={() => router.back()} className="bg-[#ffffff4d] rounded-full p-0 flex items-center justify-center border border-white size-10">
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
                fillOpacity="0.4"
              />
              <path
                d="M2.02786 6C2.12116 5.84523 2.31675 5.56711 2.53062 5.32506C2.95637 4.84323 3.5431 4.29284 4.1556 3.76105C4.76313 3.23357 5.3736 2.74365 5.83397 2.38437C6.06363 2.20515 6.45995 1.90576 6.59308 1.80521C7.03772 1.47768 7.13269 0.851733 6.8052 0.40706C6.47769 -0.0376388 5.85169 -0.132641 5.40699 0.194867L5.40328 0.19767C5.2589 0.306722 4.84028 0.62291 4.60352 0.80767C4.1264 1.18002 3.48686 1.69303 2.84439 2.25084C2.20689 2.80434 1.54362 3.4216 1.03187 4.00078C0.776998 4.28923 0.538562 4.59179 0.358424 4.8906C0.194843 5.16195 1.65859e-05 5.55679 2.62267e-07 5.99996C1.66246e-05 6.44313 0.194843 6.83805 0.358425 7.1094C0.538562 7.40821 0.776998 7.71077 1.03187 7.99922C1.54362 8.5784 2.20689 9.19566 2.84439 9.74916C3.48686 10.307 4.1264 10.82 4.60352 11.1923C4.84028 11.3771 5.25863 11.6931 5.40301 11.8021L5.407 11.8051C5.85169 12.1326 6.47769 12.0376 6.8052 11.5929C7.13269 11.1483 7.03772 10.5223 6.59308 10.1948C6.45995 10.0942 6.06363 9.79485 5.83397 9.61563C5.3736 9.25635 4.76313 8.76643 4.1556 8.23895C3.5431 7.70716 2.95637 7.15677 2.53062 6.67494C2.31675 6.43289 2.12116 6.15477 2.02786 6Z"
                fill="#141B34"
              />
            </svg>
          </Button>
          <h2 className="text-dark text-3xl capitalize font-semibold">
            Athlete Program Profile
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <Button
            style={{
              borderRadius: "46px",
              border: "1px solid rgba(21, 86, 216, 0.10)",
              background: "rgba(69, 127, 243, 0.15)",
            }}
            className="text-sm flex items-center text-nowrap gap-2 py-3 px-5 font-medium text-[#276AEE]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="none"
            >
              <path
                opacity="0.4"
                d="M7.25 12.75H14.25M7.25 7.75H10.75"
                stroke="url(#paint0_linear_5225_21826)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.9206 19.1405C17.1036 18.8625 20.4356 15.4832 20.7098 11.2409C20.7634 10.4107 20.7634 9.55093 20.7098 8.72072C20.4356 4.47838 17.1036 1.09913 12.9206 0.821075C11.4935 0.726212 10.0036 0.726405 8.5794 0.821075C4.39639 1.09913 1.06441 4.47838 0.79024 8.72072C0.736587 9.55093 0.736587 10.4107 0.79024 11.2409C0.890095 12.786 1.57343 14.2166 2.37791 15.4246C2.84501 16.2703 2.53674 17.3258 2.05021 18.2478C1.69941 18.9126 1.52401 19.245 1.66484 19.4851C1.80568 19.7252 2.12026 19.7329 2.74943 19.7482C3.99367 19.7785 4.83268 19.4257 5.49868 18.9346C5.8764 18.6561 6.06527 18.5168 6.19544 18.5008C6.3256 18.4848 6.58177 18.5903 7.09401 18.8013C7.5544 18.9909 8.08896 19.1079 8.5794 19.1405C10.0036 19.2352 11.4935 19.2354 12.9206 19.1405Z"
                stroke="url(#paint1_linear_5225_21826)"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_5225_21826"
                  x1="10.0664"
                  y1="12.3148"
                  x2="10.1548"
                  y2="9.55502"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5C8FF7" />
                  <stop offset="1" stopColor="#276AEE" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_5225_21826"
                  x1="8.79687"
                  y1="2.40369"
                  x2="9.24321"
                  y2="12.8827"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5C8FF7" />
                  <stop offset="1" stopColor="#276AEE" />
                </linearGradient>
              </defs>
            </svg>
            Send Message
          </Button>
          <Button
            style={{
              borderRadius: "46px",
              border: "1px solid rgba(21, 86, 216, 0.10)",
              background: "rgba(69, 127, 243, 0.15)",
            }}
            className="text-sm flex items-center text-nowrap gap-2 py-3 px-5 font-medium text-[#276AEE]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                opacity="0.4"
                d="M10.75 10.75V16.75"
                stroke="url(#paint0_linear_5225_24988)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M10.75 16.75C9.07636 16.75 7.61971 17.762 6.86766 19.255C6.50846 19.968 7.02389 20.75 7.70877 20.75H13.7912C14.4761 20.75 14.9915 19.968 14.6323 19.255C13.8803 17.762 12.4236 16.75 10.75 16.75Z"
                stroke="url(#paint1_linear_5225_24988)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                opacity="0.4"
                d="M3.75 3.75H2.73471C1.74819 3.75 1.25493 3.75 0.950168 4.12053C0.64541 4.49106 0.734781 4.90597 0.913523 5.7358C1.25494 7.32086 1.99548 8.7134 2.9989 9.75"
                stroke="url(#paint2_linear_5225_24988)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                opacity="0.4"
                d="M17.75 3.75H18.7653C19.7518 3.75 20.2451 3.75 20.5498 4.12053C20.8546 4.49106 20.7652 4.90597 20.5865 5.7358C20.2451 7.32086 19.5045 8.7134 18.5011 9.75"
                stroke="url(#paint3_linear_5225_24988)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M10.75 10.75C14.616 10.75 17.75 7.6331 17.75 3.78821C17.75 3.68739 17.7478 3.58707 17.7436 3.48729C17.7008 2.48806 17.6795 1.98845 17.0023 1.36922C16.3251 0.75 15.5747 0.75 14.074 0.75H7.42596C5.92526 0.75 5.17492 0.75 4.49772 1.36922C3.82051 1.98844 3.79915 2.48806 3.75642 3.48729C3.75215 3.58707 3.75 3.68739 3.75 3.78821C3.75 7.6331 6.88401 10.75 10.75 10.75Z"
                stroke="url(#paint4_linear_5225_24988)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_5225_24988"
                  x1="11.1523"
                  y1="11.2722"
                  x2="11.984"
                  y2="14.3637"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5C8FF7" />
                  <stop offset="1" stopColor="#276AEE" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_5225_24988"
                  x1="9.96875"
                  y1="17.0981"
                  x2="10.0183"
                  y2="19.3071"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5C8FF7" />
                  <stop offset="1" stopColor="#276AEE" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_5225_24988"
                  x1="1.95703"
                  y1="4.27222"
                  x2="2.25193"
                  y2="7.56092"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5C8FF7" />
                  <stop offset="1" stopColor="#276AEE" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_5225_24988"
                  x1="18.957"
                  y1="4.27222"
                  x2="19.2519"
                  y2="7.56092"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5C8FF7" />
                  <stop offset="1" stopColor="#276AEE" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_5225_24988"
                  x1="9.38281"
                  y1="1.62036"
                  x2="9.55958"
                  y2="7.13995"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5C8FF7" />
                  <stop offset="1" stopColor="#276AEE" />
                </linearGradient>
              </defs>
            </svg>
            View Leaderboard
          </Button>
          <Button
            style={{
              borderRadius: "46px",
              border:
                "1px solid var(--P-button-Stoke, rgba(21, 86, 216, 0.30))",
              background:
                "var(--Gradient, linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%))",
            }}
            className="text-sm text-white flex items-center gap-2 py-3 px-5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <circle
                cx="10.75"
                cy="10.75"
                r="10"
                stroke="white"
                strokeWidth="1.5"
              />
              <path
                opacity="0.4"
                d="M6.25 15.75C8.5817 13.3078 12.8932 13.1928 15.25 15.75M13.2451 8.25C13.2451 9.63071 12.1242 10.75 10.7415 10.75C9.35885 10.75 8.23797 9.63071 8.23797 8.25C8.23797 6.86929 9.35885 5.75 10.7415 5.75C12.1242 5.75 13.2451 6.86929 13.2451 8.25Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            View Main Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
