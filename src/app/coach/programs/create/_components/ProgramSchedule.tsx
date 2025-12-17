import Icon from "@/utils/icon";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Switch from "@/components/ui/Switch";
import { AnimatedButton } from "@/components/ui/Button";

const ProgramSchedule = () => {
  return (
    <section>
      <div className="space-y-6 md:space-y-8">
        <div className="max-w-[500px] space-y-1">
          <h2 className="text-2xl md:text-3xl font-semibold text-dark">
            Configure Schedule & Pricing
          </h2>

          <p className="text-base text-black/60">
            Set your program timeline, session frequency, and pricing structure
            to maximize engagement and revenue.
          </p>
        </div>

        <Card className="md:p-6 bg-white/25 grid md:grid-cols-2 gap-4">
          <Input
            label="Start Date"
            className="bg-white/60"
            placeholder={"12/04/2025"}
            rightIcon="calender"
            rightIconClassName="text-dark/70"
          />
          <Input
            label="End Date"
            className="bg-white/60"
            placeholder={"12/04/2025"}
            rightIcon="calender"
            rightIconClassName="text-dark/70"
          />
        </Card>

        <div className="space-y-4">
          <Card className="md:p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <PricingCard
                title="Monthly Subscription"
                price="$99"
                period="/ per month"
                features={["Recurring Revenue", "Lower Barrier to entry"]}
              />
              <PricingCard
                title="One - Time Payment"
                price="$297"
                features={["Full upfront payment", "Higher commitment"]}
                recommended
              />
              <PricingCard
                title="Free Program"
                price="$0"
                period="+ Donations"
                features={["build audience first", "Optional donation"]}
              />
            </div>

            <Card className="bg-white/25 md:rounded-2xl flex justify-between items-center">
              <div>
                <p className="font-semibold text-dark text-sm">
                  Revenue Projection
                </p>
                <p className="text-xs text-dark/80 mt-2">
                  Based on 25 athletes at $297 - one time
                </p>
              </div>

              <div className="text-right">
                <p className="font-semibold text-dark text-sm">$7,425</p>
                <p className="text-xs text-dark/80 mt-2">Total Potential</p>
              </div>
            </Card>
          </Card>

          <Card className="md:p-6 grid lg:grid-cols-2 gap-4">
            <div>
              <h3 className="text-base font-medium text-dark mb-3">
                Additional Option
              </h3>

              <Card className="md:p-6 bg-whit/60 border-white/60 md:rounded-[30px]">
                <ToggleOption
                  value={false}
                  title="Free Trial Period"
                  description="7-day trial before payment"
                />

                <hr className="my-3 border-[#D8E5E8]" />

                <ToggleOption
                  value={true}
                  title="Enable Wishlist"
                  description="When max capacity is reached"
                />
              </Card>
            </div>

            <div className="space-y-5">
              <div className="flex justify-between items-center mb-3 flex-wrap gap-2">
                <label className="block text-base font-medium text-dark">
                  Maximum Capacity
                </label>
                <div className="flex items-center gap-1 text-[10px] font-medium text-dark/70">
                  <Icon name="starIcon" width={12} height={12} />
                  <span>Upgrade to premium for unlimited capacity!</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-x-4 gap-y-5">
                <div className="md:col-span-2">
                  <Input placeholder={"42"} leftIcon="users" />
                </div>

                <Input leftIcon="discount" label="Early Bid Discount" />
                <Input
                  placeholder={"08/07/2026"}
                  leftIcon="calender"
                  label="Date"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({
  title,
  price,
  period,
  features,
  recommended,
}: {
  title: string;
  price: string;
  period?: string;
  features: string[];
  recommended?: boolean;
}) => (
  <Card
    className={`md:p-6 relative overflow-visible backdrop-blur-[16px] bg-[linear-gradient(165deg,rgba(92,143,247,0.10)_0%,rgba(92,143,247,0.02)_50%,rgba(92,143,247,0.06)_100%)]`}
  >
    <div className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden z-[-1]">
      {recommended && (
        <div className="bg-[url('/card-bottom-blur-image.svg')] absolute left-0 bottom-0 bg-no-repeat bg-left-bottom h-[540px] w-[663px] " />
      )}
    </div>

    {recommended && (
      <AnimatedButton className="absolute -top-0 -translate-y-1/2 h-6 left-1/2 -translate-x-1/2 bg-primary-gradient text-white border border-[rgba(21,86,216,0.30)] text-[10px] font-medium px-2.5 py-1.5 rounded-full">
        Recommended
      </AnimatedButton>
    )}

    <h2 className="text-xl font-medium text-dark mb-4">{title}</h2>

    <div className="flex items-center">
      <p
        className={`text-3xl font-semibold px-9 py-2 bg-white rounded-xl ${
          recommended ? "text-[#276AEE]" : "text-dark"
        }`}
      >
        {price}
      </p>
      {period && <p className="text-sm text-dark/80 ml-2.5">{period}</p>}
    </div>

    <div className="my-4 h-px bg-primary-gradient opacity-20" />

    <ul className="space-y-3">
      {features.map((feature) => (
        <li
          key={feature}
          className="flex items-center gap-1.5 text-xs text-dark/80"
        >
          <Icon name="tick" width={13} height={13} />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </Card>
);

const ToggleOption = ({
  title,
  description,
  value,
}: {
  title: string;
  description: string;
  value: boolean;
}) => (
  <div className="flex justify-between items-center">
    <div className="space-y-0.5">
      <p className="font-medium text-dark">{title}</p>
      <p className="text-xs text-dark/70">{description}</p>
    </div>

    <Switch value={value} />
  </div>
);

export default ProgramSchedule;
