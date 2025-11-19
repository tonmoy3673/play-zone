import Icon from "@/utils/icon";
import Card from "@/components/ui/Card";
import { AnimatedButton } from "@/components/ui/Button";
import { SectionHeader } from "@/components/shared/SectionHeader";

const ProgramPricingCard = () => {
  return (
    <Card className="p-0">
      <div className="bg-[url('/price-card-bg.svg')] absolute right-0 top-0 bg-no-repeat bg-right-top h-[333px] w-[409px] z-[-1]" />

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
          <AnimatedButton className="font-medium text-sm h-12 border w-full px-5 rounded-full flex items-center justify-center gap-2 transition-all whitespace-nowrap text-white bg-primary-gradient">
            Enroll Now
          </AnimatedButton>

          <AnimatedButton className="bg-[#1556D8]/15 h-12 border w-full border-[#1556D8]/10 group/btn px-5 rounded-full flex items-center justify-center gap-2 transition-all whitespace-nowrap hover:bg-primary">
            <span className="font-medium text-sm primary-gradient-text group-hover/btn:text-white group-hover/btn:bg-none">
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
    </Card>
  );
};

export default ProgramPricingCard;
