"use client";

import PopupModal from "@/components/Modal/PopupModal";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function LogoutModal({
  setIsOpen,
  isOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  return (
    <PopupModal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title=""
      // widthClass="w-full md:w-[519px] h-[355px]"
    >
      <div className="w-full  bg-white rounded-[30px] overflow-hidden max-w-[520px] h-[355px] relative">
        {/* Close button */}
        {/* <Image
          src={"/image 341.svg"}
          alt="image"
          width={700}
          height={400}
          className="absolute bottom-0 z-0 left-0"
        /> */}
        <div className="relative flex flex-col justify-between w-full p-7 h-full z-10">
          <div
            onClick={() => setIsOpen(false)}
            className="mx-auto flex items-center justify-center bg-[#ffbdbd4d] size-16 rounded-full  mt-12 mb-8 transition-colors"
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="27"
              viewBox="0 0 24 27"
              fill="none"
            >
              <path
                opacity="0.4"
                d="M8.36659 1.56213L9.25 1.25034V25.2503L8.36659 24.9385C4.92823 23.725 3.20905 23.1182 2.22952 21.7338C1.25 20.3493 1.25 18.5262 1.25 14.88V11.6207C1.25 7.97446 1.25 6.15135 2.22952 4.76689C3.20905 3.38244 4.92823 2.77567 8.36659 1.56213Z"
                fill="url(#paint0_linear_5191_3344)"
              />
              <path
                d="M9.25 1.25034L8.36659 1.56213C4.92823 2.77567 3.20905 3.38244 2.22952 4.76689C1.25 6.15135 1.25 7.97446 1.25 11.6207V14.88C1.25 18.5262 1.25 20.3493 2.22952 21.7338C3.20905 23.1182 4.92823 23.725 8.36659 24.9385L9.25 25.2503"
                stroke="url(#paint1_linear_5191_3344)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M22.5833 13.2503L9.25 13.2503M22.5833 13.2503C22.5833 12.3167 19.9243 10.5724 19.25 9.91701M22.5833 13.2503C22.5833 14.184 19.9243 15.9283 19.25 16.5837"
                stroke="url(#paint2_linear_5191_3344)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_5191_3344"
                  x1="3.38954"
                  y1="3.65034"
                  x2="10.4361"
                  y2="7.43766"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF6565" />
                  <stop offset="1" stopColor="#EC4213" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_5191_3344"
                  x1="3.38954"
                  y1="3.65034"
                  x2="10.4361"
                  y2="7.43766"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF6565" />
                  <stop offset="1" stopColor="#EC4213" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_5191_3344"
                  x1="12.8159"
                  y1="10.5837"
                  x2="14.1438"
                  y2="14.8658"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF6565" />
                  <stop offset="1" stopColor="#EC4213" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-medium text-center text-dark mb-6">
            Logout
          </h1>

          {/* Description text */}
          <p className="text-center text-[#141b34b3] text-base mb-8 max-w-2xl mx-auto">
            Are you sure you want to Logout?
          </p>

          {/* Button container */}
          <div className="flex gap-6 mt-7">
            {/* May be later button */}
            <Button
              onClick={() => setIsOpen(false)}
              className="flex-1 py-3 px-7 rounded-full bg-[#457ff326] text-[#276AEE] font-medium text-base hover:brightness-100 hover:bg-blue-200 transition-colors border border-[#1556d81a]"
            >
              Cancel
            </Button>

            {/* Submit button */}
            <Button
              // onClick={handleSubmit}
              className="flex-1 py-3 px-7 rounded-full bg-blue-600 text-white font-medium text-base hover:bg-blue-700 transition-colors"
            >
              Yes, Logout
            </Button>
          </div>
        </div>
      </div>
    </PopupModal>
  );
}
