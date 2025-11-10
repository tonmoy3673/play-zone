import Button from "@/components/ui/Button";
import React from "react";

const About = () => {
  return (
    <div
      style={{ borderRadius: "16px" }}
      className="p-5 rounded-2xl border backdrop-blur-3xl bg-[#ffffff4d] border-white"
    >
      <h1 className="text-lg font-medium mb-4">About Me</h1>
      <p className="text-[#141b34b3] text-sm font-normal mb-6">
        Dedicated football quarterback with 8 years of competitive experience.
        Passionate about continuous improvement and helping teammates reach
        their potential. Currently focused on enhancing speed and agility while
        maintaining leadership skills.
        <br />
        <span className="text-sm font-medium text-dark">Show more</span>
      </p>
      <h1 className="text-base font-medium text-dark">Sports & Position</h1>
      <div className="mt-4 flex items-start gap-3">
        <Button
          style={{
            borderRadius: "61px",
            background:
              "linear-gradient(180deg, rgba(69, 127, 243, 0.15) 0%, rgba(69, 127, 243, 0.30) 100%)",
            backdropFilter: " blur(2px)",
          }}
          className="text-blue-500 flex items-center flex-nowrap gap-2 px-4 py-1.5 text-[10px] font-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M16.7503 4.04323C16.6234 3.35584 16.2841 2.71353 15.7808 2.2084C15.2756 1.70534 14.633 1.36606 13.9454 1.23921C10.4481 0.656804 6.77361 1.7174 4.24893 4.23794C1.7248 6.75792 0.658557 10.4296 1.23692 13.9269C1.3638 14.6142 1.70318 15.2566 2.2064 15.7617C2.71168 16.2647 3.3542 16.604 4.0418 16.7309C7.51753 17.3949 11.2495 16.2523 13.7429 13.7329C16.2911 11.2274 17.3574 7.54141 16.7503 4.04323Z"
              stroke="url(#paint0_linear_5544_1764)"
              strokeWidth="1.5"
            />
            <path
              opacity="0.4"
              d="M2.33313 15.6667L15.6665 2.33334"
              stroke="url(#paint1_linear_5544_1764)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.49982 9L8.99982 11.5M8.99982 6.5L11.4998 9"
              stroke="url(#paint2_linear_5544_1764)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_5544_1764"
                x1="7.45379"
                y1="2.46141"
                x2="7.84523"
                y2="11.1922"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#5C8FF7" />
                <stop offset="1" stopColor="#276AEE" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_5544_1764"
                x1="7.69771"
                y1="3.49382"
                x2="8.02735"
                y2="10.846"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#5C8FF7" />
                <stop offset="1" stopColor="#276AEE" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_5544_1764"
                x1="8.51154"
                y1="6.93518"
                x2="8.63515"
                y2="9.69226"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#5C8FF7" />
                <stop offset="1" stopColor="#276AEE" />
              </linearGradient>
            </defs>
          </svg>
          QB
        </Button>
        <Button
          style={{
            borderRadius: "61px",

            background:
              "linear-gradient(180deg, rgba(235, 158, 15, 0.15) 0%, rgba(235, 158, 15, 0.30) 100%)",
            backdropFilter: " blur(2px)",
          }}
          className="text-[#FFB42A] flex items-center flex-nowrap gap-2 px-4 py-1.5 text-[10px] font-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="18"
            viewBox="0 0 10 18"
            fill="none"
          >
            <path
              opacity="0.4"
              d="M8.33334 3.58334C8.33334 4.27369 7.7737 4.83334 7.08334 4.83334C6.39299 4.83334 5.83334 4.27369 5.83334 3.58334C5.83334 2.89298 6.39299 2.33334 7.08334 2.33334C7.7737 2.33334 8.33334 2.89298 8.33334 3.58334Z"
              stroke="url(#paint0_linear_5544_4875)"
              strokeWidth="1.5"
            />
            <path
              d="M6.96683 11.5L7.75326 11.045C8.64882 10.5269 9.09659 10.2678 9.1571 9.89864C9.16655 9.84097 9.16901 9.78259 9.16443 9.72447C9.13513 9.35244 8.71033 9.06571 7.86074 8.49226L3.93823 5.84466C2.39765 4.8048 2.0432 2.90928 3.12581 1.5"
              stroke="url(#paint1_linear_5544_4875)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.93824 5.84466C1.85491 7.928 0.833344 13.6936 0.833344 16.5003M3.93824 5.84466C2.39766 4.8048 2.04321 2.90928 3.12582 1.5M3.93824 5.84466L6.14376 7.33333M6.96684 11.5L7.75327 11.045C8.64883 10.5269 9.0966 10.2678 9.15711 9.89864C9.16656 9.84097 9.16902 9.78259 9.16444 9.72447C9.13514 9.35244 8.71034 9.06571 7.86075 8.49226L6.14376 7.33333M7.50014 16.5003C6.68902 15.5539 5.8548 14.25 5.0418 13.0482C4.47221 12.2062 4.18741 11.7852 4.15376 11.3444M6.14376 7.33333C5.47479 8.19925 5.01366 9.01727 4.66884 9.74518C4.30302 10.5174 4.12011 10.9035 4.15376 11.3444M4.15376 11.3444L1.66668 10.6667"
              stroke="url(#paint2_linear_5544_4875)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_5544_4875"
                x1="6.71997"
                y1="2.9951"
                x2="6.23531"
                y2="3.96653"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFB42A" />
                <stop offset="1" stopColor="#EB9E0F" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_5544_4875"
                x1="4.86434"
                y1="4.14706"
                x2="2.53635"
                y2="7.25779"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFB42A" />
                <stop offset="1" stopColor="#EB9E0F" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_5544_4875"
                x1="3.78877"
                y1="5.47066"
                x2="0.16993"
                y2="9.50025"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFB42A" />
                <stop offset="1" stopColor="#EB9E0F" />
              </linearGradient>
            </defs>
          </svg>
          Sprinter
        </Button>
        <Button
          style={{
            borderRadius: "61px",
            background:
              "linear-gradient(180deg, rgba(255, 0, 51, 0.15) 0%, rgba(255, 0, 51, 0.30) 100%)",
            backdropFilter: " blur(2px)",
          }}
          className="text-[#F03] flex items-center flex-nowrap gap-2 px-4 py-1.5 text-[10px] font-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              opacity="0.4"
              d="M11.4397 2.87015L12.9062 5.82739C13.1062 6.23906 13.6395 6.63392 14.0894 6.70953L16.7474 7.15479C18.4473 7.44044 18.8472 8.68383 17.6224 9.91041L15.5559 11.9939C15.206 12.3468 15.0143 13.0273 15.1226 13.5146L15.7142 16.0937C16.1808 18.1353 15.106 18.925 13.3145 17.858L10.8231 16.371C10.3732 16.1021 9.63157 16.1021 9.17329 16.371L6.6819 17.858C4.89876 18.925 3.81554 18.1269 4.28216 16.0937L4.87376 13.5146C4.98208 13.0273 4.79044 12.3468 4.44048 11.9939L2.37404 9.91041C1.1575 8.68383 1.54913 7.44044 3.24894 7.15479L5.90698 6.70953C6.3486 6.63392 6.88187 6.23906 7.08185 5.82739L8.54836 2.87015C9.34827 1.2655 10.6481 1.2655 11.4397 2.87015Z"
              stroke="#FF0033"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 1.66667C9.47516 1.66521 8.94904 2.06637 8.54836 2.87015L7.08185 5.82739C6.88187 6.23906 6.3486 6.63392 5.90698 6.70953L3.24894 7.15479C1.54913 7.44044 1.1575 8.68383 2.37404 9.91041L4.44048 11.9939C4.79044 12.3468 4.98208 13.0273 4.87376 13.5146L4.28216 16.0937C3.81554 18.1269 4.89876 18.925 6.68189 17.858L9.17329 16.371C9.40209 16.2368 9.70151 16.1696 10 16.1694"
              stroke="#FF0033"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Captain
        </Button>
      </div>
    </div>
  );
};

export default About;
