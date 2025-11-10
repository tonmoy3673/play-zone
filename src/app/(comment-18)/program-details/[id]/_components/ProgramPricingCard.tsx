import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedButton } from "@/components/ui/Button";
import Icon from "@/utils/icon";
import React from "react";

const ProgramPricingCard = () => {
  return (
    <div className="rounded-2xl border backdrop-blur-3xl bg-[#ffffff4d] border-white">
      <div className="p-5 pb-0 border-b border-white">
        <SectionHeader title="Program Details" className="mb-2.5" />
      </div>

      <div className="p-5">
        <div>
          <p className="text-sm text-dark/70">Regular Price</p>
          <p className="text-2xl font-semibold text-black">$129</p>
        </div>

        {/* Features */}
        <ul className="mt-6 space-y-3 text-sm text-dark">
          {[
            "Full access to all 24 video lessons",
            "4 live coaching sessions",
            "Downloadable drill worksheets",
            "Completion certificate",
            "Lifetime access to content",
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className="size-4 flex items-center justify-center">
                <span className="size-2 bg-dark rounded-full"></span>
              </div>
              <span className="text-sm font-medium">{item}</span>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="mt-8 space-y-2">
          <AnimatedButton className="text-medium text-sm h-14 border w-full px-5 py-3.5 rounded-full flex items-center justify-center gap-2 transition-all whitespace-nowrap text-white bg-[linear-gradient(177deg,#5C8FF7_10.06%,#276AEE_62.94%)]">
            Enroll Now
          </AnimatedButton>

          <AnimatedButton className="bg-[#1556D8]/15 h-14 border w-full border-[#1556D8]/10 group/btn px-5 py-3.5 rounded-full flex items-center justify-center gap-2 transition-all whitespace-nowrap hover:bg-[linear-gradient(177deg,#5C8FF7_10.06%,#276AEE_62.94%)]">
            <span className="text-medium text-sm bg-[linear-gradient(177deg,#5C8FF7_10.06%,#276AEE_62.94%)] bg-clip-text text-transparent group-hover/btn:text-white group-hover/btn:bg-none">
              Try Free Preview{" "}
            </span>
          </AnimatedButton>
        </div>

        <p className="mt-3 text-center text-sm text-dark/70">
          30-days money-back guarantee
        </p>

        {/* Payment Icons */}
        <div className="mt-5 flex justify-center gap-3">
          <Icon name="visa_img" width={52} height={30} />
          <Icon name="mastercard_img" width={52} height={30} />
          <Icon name="googlepay_img" width={52} height={30} />
          <Icon name="paypal_img" width={52} height={30} />
        </div>
      </div>
    </div>
  );
};

export default ProgramPricingCard;
