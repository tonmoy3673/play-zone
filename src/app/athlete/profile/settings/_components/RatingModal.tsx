"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";
import { useState } from "react";

export default function RatingModal({
  setIsOpen,
}: {
  setIsOpen: (isOpen: boolean) => void;
}) {
  const rating = 4;
  const [note, setNote] = useState<string>("");

  const handleSubmit = () => {
    console.log("Rating submitted:", { rating, note });
    // Handle submit logic here
  };

  const handleMayBeLater = () => {
    console.log("May be later clicked");
    // Handle may be later logic here
    setIsOpen(false);
  };

  return (
    <div className="w-full  bg-white rounded-[30px] overflow-hidden max-w-[520px] h-[511px] relative">
      {/* Close button */}
      <Image
        src={"/image 341.svg"}
        alt="image"
        width={700}
        height={400}
        className="absolute bottom-0 z-0 left-0"
      />
      <div className="relative w-full p-5 h-full z-10">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5  flex items-center justify-center hover:bg-slate-50 transition-colors"
          aria-label="Close modal"
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
              d="M13.7494 13.75L7.75 7.75M7.75064 13.75L13.75 7.75"
              stroke="#141B34"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.75 10.75C20.75 5.22715 16.2728 0.75 10.75 0.75C5.22715 0.75 0.75 5.22715 0.75 10.75C0.75 16.2728 5.22715 20.75 10.75 20.75C16.2728 20.75 20.75 16.2728 20.75 10.75Z"
              stroke="#141B34"
              strokeWidth="1.5"
            />
          </svg>
        </button>

        {/* Star rating display */}
        <div className="flex justify-center gap-2 mt-7 mb-12">
          {[1, 2, 3, 4, 5].map((star) => (
            <div key={star} className="relative">
              {star <= rating ? (
                // Filled star
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none"
                >
                  <path
                    d="M14.3307 0C15.7298 0 16.8318 1.05671 17.5353 2.48255L19.8847 7.22021C19.9559 7.36684 20.1248 7.57331 20.3787 7.76219C20.6323 7.95086 20.8807 8.05495 21.0441 8.08241L25.2969 8.79483C26.8331 9.05298 28.1207 9.80599 28.5387 11.1172C28.9564 12.4273 28.3444 13.7888 27.2397 14.8955L27.2387 14.8966L23.9348 18.2278C23.8038 18.3598 23.6571 18.6086 23.5651 18.9326C23.4738 19.2544 23.4656 19.5476 23.5071 19.737L23.5077 19.7396L24.4529 23.8605C24.8449 25.5757 24.715 27.2764 23.5054 28.1656C22.2916 29.0578 20.6328 28.6623 19.126 27.7648L15.1393 25.3854C14.9719 25.2853 14.6844 25.2043 14.3374 25.2043C13.9929 25.2043 13.6994 25.2843 13.5211 25.388L13.5185 25.3895L9.53978 27.7643C8.03467 28.6649 6.37799 29.0534 5.16408 28.1603C3.95526 27.271 3.81879 25.5734 4.21208 23.8596L5.15714 19.7396L5.15771 19.737C5.19915 19.5476 5.19104 19.2544 5.09967 18.9326C5.00767 18.6086 4.86099 18.3598 4.73004 18.2278L1.42374 14.8942C0.326133 13.7875 -0.283787 12.4272 0.130534 11.119C0.546063 9.80699 1.83118 9.05307 3.36838 8.79475L7.6177 8.08292L7.61905 8.08269C7.77483 8.05567 8.01954 7.95274 8.27257 7.76358C8.52608 7.57406 8.69539 7.36714 8.76676 7.22021L8.77036 7.21289L11.1168 2.4813L11.1177 2.47943C11.8279 1.05477 12.9333 0 14.3307 0Z"
                    fill="#FF8C1A"
                  />
                </svg>
              ) : (
                // Empty star
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                >
                  <path
                    opacity="0.4"
                    d="M17.7267 4.01151L20.0731 8.7431C20.3931 9.40176 21.2463 10.0335 21.9662 10.1545L26.2191 10.8669C28.9388 11.324 29.5787 13.3134 27.6189 15.2759L24.3126 18.6096C23.7527 19.1741 23.4461 20.2629 23.6194 21.0426L24.5659 25.1693C25.3125 28.4357 23.5927 29.6992 20.7264 27.9921L16.7401 25.6129C16.0202 25.1827 14.8337 25.1827 14.1004 25.6129L10.1142 27.9921C7.26118 29.6992 5.52804 28.4222 6.27462 25.1693L7.22119 21.0426C7.3945 20.2629 7.08787 19.1741 6.52793 18.6096L3.22163 15.2759C1.27518 13.3134 1.90178 11.324 4.62147 10.8669L8.87434 10.1545C9.58093 10.0335 10.4342 9.40176 10.7541 8.7431L13.1005 4.01151C14.3804 1.44408 16.4602 1.44408 17.7267 4.01151Z"
                    stroke="#FF8C1A"
                    strokeWidth="4.17188"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.4232 2.08594C14.5834 2.08361 13.7416 2.72547 13.1005 4.01151L10.7541 8.7431C10.4342 9.40176 9.58093 10.0335 8.87434 10.1545L4.62147 10.8669C1.90178 11.324 1.27518 13.3134 3.22163 15.2759L6.52793 18.6096C7.08787 19.1741 7.3945 20.2629 7.22119 21.0426L6.27462 25.1693C5.52804 28.4222 7.26118 29.6992 10.1142 27.9921L14.1004 25.6129C14.4665 25.3981 14.9456 25.2906 15.4232 25.2902"
                    stroke="#FF8C1A"
                    strokeWidth="4.17188"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-medium text-center text-slate-900 mb-6">
          Rate Our Playzone
        </h1>

        {/* Description text */}
        <p className="text-center text-[#141b34b3] text-base mb-8 max-w-2xl mx-auto">
          If you enjoy using this Playzone, would you mind taking a moment to
          rate it? Thanks for your support
        </p>

        {/* Note label */}
        <label className="block text-dark font-medium text-sm mb-4">Note</label>

        {/* Text input area */}
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write your athletes details..."
          className="w-full h-24 p-2 bg-blue-50 text-slate-700 text-sm placeholder-slate-500 rounded-xl border border-blue-100 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:bg-white transition-colors resize-none"
        />

        {/* Button container */}
        <div className="flex gap-6 mt-7">
          {/* May be later button */}
          <Button
            onClick={handleMayBeLater}
            className="flex-1 py-3 px-7 rounded-full bg-[#457ff326] text-[#276AEE] font-medium text-base hover:brightness-100 hover:bg-blue-200 transition-colors border border-[#1556d81a]"
          >
            May be later
          </Button>

          {/* Submit button */}
          <Button
            onClick={handleSubmit}
            className="flex-1 py-3 px-7 rounded-full bg-blue-600 text-white font-medium text-base hover:bg-blue-700 transition-colors"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
