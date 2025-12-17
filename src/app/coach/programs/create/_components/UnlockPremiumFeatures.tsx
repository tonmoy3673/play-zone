import Icon, { IconName } from "@/utils/icon";
import Card from "@/components/ui/Card";
import { AnimatedButton } from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { useState } from "react";

type UnlockPremiumFeaturesProps = {
  onUpgrade?: () => void;
  onContinue?: () => void;
};

type PlanFeature = {
  label: string;
  status: "active" | "locked";
};

interface FeatureItem {
  title: string;
  description: string;
}

const currentPlanFeatures: PlanFeature[] = [
  { label: "Program Creation", status: "active" },
  { label: "Basic Content Upload", status: "active" },
  { label: "Community Features", status: "active" },
  { label: "Merchandise Sales", status: "locked" },
  { label: "Fundraising Tools", status: "locked" },
  { label: "Advanced Analytics", status: "locked" },
  { label: "Custom Branding", status: "locked" },
];

const premiumPlanFeatures = [
  "Unlimited Program Capacity",
  "Dedicated Merchandise & Custom Marketplace",
  "AI powered Virtual assistant",
  "Advanced Analytics",
  "Free Boost every 3 months",
  "Unlimited Staff Members",
  "Live streaming capabilities",
];

const unlockedPotentialFeatures: FeatureItem[] = [
  {
    title: "Unlimited Program Capacity",
    description:
      "Create and manage an infinite number of training programs – scheduled courses, ongoing modules, specialized clinics. Your growth on PlayerZone knows no bounds.",
  },
  {
    title: "Unlimited Athletes & Staff",
    description:
      "Onboard every athlete you coach and add unlimited staff members (assistant coaches, team managers) with custom permissions. Manage your entire organization seamlessly and efficiently.",
  },
  {
    title: "Integrated Live-streaming",
    description:
      "Host professional live sessions, interactive Q&As, and real-time film breakdowns directly within your programs. Engage your audience like never before, without needing external tools.",
  },
  {
    title: "Priority Visibility & Free Boosts",
    description:
      "Your programs gain priority placement in athlete searches and recommendations. Plus, receive 1 free Program Boost every 3 months to maximize your program's reach and attract new athletes.",
  },
  {
    title: "Expanded Media Uploads",
    description:
      "Upload more program media and larger video files to deliver richer, higher-quality content to your athletes, ensuring your training is always cutting-edge.",
  },
];

const profitCenterFeatures: FeatureItem[] = [
  {
    title: "Your Own Branded Marketplace",
    description:
      "Launch a fully customized digital storefront directly on PlayerZone. This is your personal hub to sell and monetize your unique offerings.",
  },
  {
    title: "Sell Exclusive Digital Products",
    description:
      "Offer advanced playbooks, high-value video series, custom workout plans, and personalized consultations. Turn your unique knowledge into direct, high-margin revenue streams.",
  },
  {
    title: "Sell Branded Merchandise",
    description:
      "Design and sell your own team gear, apparel, and branded equipment – PlayerZone handles the processing, you build your brand and profit.",
  },
  {
    title: "Host Seamless Fundraisers",
    description:
      "Easily run fundraising campaigns for team trips, equipment, or scholarships directly through your PlayerZone platform. Streamline donations and track progress with ease.",
  },
  {
    title: "Automated Payments & Payouts",
    description:
      "PlayerZone handles all secure transactions, ensuring seamless payments from athletes and quick, transparent payouts to your account.",
  },
];

const intelligentEdgeFeatures: FeatureItem[] = [
  {
    title: "Deep Insights & AI Suggestions",
    description:
      "Access advanced analytics dashboards with deep insights into athlete engagement, program effectiveness, and performance trends. Get AI-driven suggestions to optimize your training methods for better results.",
  },
  {
    title: "AI-Powered Virtual Assistant",
    description:
      "Your personal co-pilot for coaching that automates high-friction tasks like program generation, feedback drafting, personalized communication prompts, marketing insights, and revenue optimization.",
  },
  {
    title: "Priority Support",
    description:
      "Receive faster response times and dedicated support from our expert team, ensuring you're always operating at peak efficiency.",
  },
];

const moneyBackHighlights = [
  "Cancel anytime",
  "No long-term contracts",
  "Full feature access",
];

function SectionIcon({ icon }: { icon: IconName }) {
  return (
    <span className="inline-flex size-16 items-center justify-center rounded-full bg-white/60 text-[#2755d8]">
      <Icon name={icon} height={32} width={32} />
    </span>
  );
}

function AccordionItem({ features }: { features: FeatureItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {features.map((item, index) => (
        <div key={index}>
          {/* Header */}
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between transition-all"
          >
            <div
              className={`flex items-center gap-2 ${
                activeIndex === index ? "text-dark" : "text-dark/70"
              }`}
            >
              <Icon name="badge" height={20} width={20} />
              <span className="text-sm font-medium ">{item.title}</span>
            </div>

            <Icon
              name="chevron_down"
              height={22}
              width={22}
              className={cn(
                "text-dark/70 transition-transform duration-300",
                activeIndex === index && "text-dark rotate-180"
              )}
            />
          </button>

          {/* Body */}
          <div
            className={cn(
              "transition-all duration-300 pl-7 overflow-hidden",
              activeIndex === index ? "max-h-auto" : "max-h-0"
            )}
          >
            <p className="text-xs text-dark/70 mt-2">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function UnlockPremiumFeatures({
  onUpgrade,
  onContinue,
}: UnlockPremiumFeaturesProps) {
  return (
    <section>
      <div className="flex w-full flex-col gap-8 md:gap-10">
        <div className="max-w-[500px] space-y-1">
          <h2 className="text-2xl md:text-3xl font-semibold text-dark">
            Unlock Premium Features
          </h2>

          <p className="text-base text-black/60">
            Take your program to the next level with advanced features that help
            you monetize better and again deeper insight into athlete
            performance.
          </p>
        </div>

        <div className="space-y-4">
          <div className="grid gap-4 lg:grid-cols-2">
            <Card className="md:rounded-[30px] p-6 md:p-8">
              <div>
                <div className="flex items-start justify-between">
                  <p className="text-lg font-medium text-dark">
                    Your Current Plan
                  </p>

                  <div className="relative size-14 rounded-full bg-white/60 flex items-center justify-center">
                    <Icon name="notebook" width={32} height={32} />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <p className="text-2xl lg:text-[36px] font-semibold text-dark">
                    $0
                  </p>
                  <p className="text-sm text-dark/80">/ per month</p>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-dark">Current Plan</p>
                  <Badge className="h-8 text-xs font-medium">Basic</Badge>
                </div>
              </div>

              <hr className="h-px border-[#DAE5E8] my-6" />

              <ul className="flex flex-col">
                {currentPlanFeatures.map((feature, index) => (
                  <li
                    key={feature.label}
                    className={`flex items-center justify-between py-2 last:pb-0 first:pt-0 border-b border-white/60 last:border-b-0`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="size-4 rounded-full bg-white/60 border border-white flex items-center justify-center">
                        <div
                          className={`size-2 rounded-full ${
                            feature.status !== "locked"
                              ? "bg-dark"
                              : "bg-[#CED6E1]"
                          }`}
                        ></div>
                      </div>

                      <span
                        className={`text-sm font-medium  ${
                          feature.status === "locked"
                            ? "text-dark/50"
                            : "text-dark"
                        }`}
                      >
                        {feature.label}
                      </span>
                    </div>

                    <div className="size-8 flex items-center justify-center rounded-full bg-white/60 border border-white">
                      <Icon
                        name={
                          feature.status === "active"
                            ? "checkmark_circle"
                            : "square_lock"
                        }
                        width={20}
                        height={20}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="md:rounded-[30px] p-6 md:p-8 relative">
              <div className="absolute inset-0 -z-10 rounded-[30px] bg-gradient-to-br from-[#2755d8] via-[#3d6df0] to-[#1b3fb3]" />
              <div className="absolute left-1/2 top-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8fb8ff]/40 blur-[120px]" />

              <div>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <p className="text-lg font-medium text-white">
                      Premium Plan
                    </p>
                    <span className="h-6 text-[10px] flex items-center rounded-full px-3 text-dark font-medium bg-white">
                      Pro Coach
                    </span>
                  </div>

                  <div className="relative size-14 rounded-full bg-white/5 border border-white/10 backdrop-blur-xs flex items-center justify-center">
                    <Icon
                      name="crown"
                      width={32}
                      height={32}
                      className="text-white"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <p className="text-2xl lg:text-[36px] font-semibold text-white">
                    $29
                  </p>
                  <p className="text-sm text-white/80">/ per month</p>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-white">
                    Billed monthly • Cancel anytime
                  </p>
                  <span className="h-8 text-xs flex items-center rounded-full px-4 text-white font-medium bg-white/15 border border-white/70">
                    Pro Coach
                  </span>
                </div>
              </div>

              <div className="h-px bg-primary-gradient opacity-20 my-6" />

              <ul className="flex flex-col">
                {premiumPlanFeatures.map((label) => (
                  <li
                    key={label}
                    className={`flex items-center justify-between py-2 last:pb-0 first:pt-0 border-b border-[#FFFFFF1F] last:border-b-0`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="size-4 rounded-full bg-white/20 border border-white/60 flex items-center justify-center">
                        <div className={`size-2 rounded-full bg-white`}></div>
                      </div>

                      <span className={`text-sm font-medium  text-white`}>
                        {label}
                      </span>
                    </div>

                    <div className="size-8 flex items-center justify-center rounded-full bg-white/5 border border-white/10 backdrop-blur-xs">
                      <Icon
                        name="checkmark_circle_white"
                        height={20}
                        width={20}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <Card className="md:rounded-[30px] p-6 md:p-8">
            <h2 className="text-lg font-medium text-dark mb-6 md:mb-8">
              What You’ll Unlock with Premium
            </h2>

            <div className="grid gap-4 lg:grid-cols-2">
              <Card className="space-y-4 md:rounded-[30px] p-6 md:p-8">
                <SectionIcon icon="unlock_emoji" />
                <h4 className="text-base font-medium text-dark">
                  Unlocked Potential
                </h4>
                <hr className="border-[#DAE5E8]" />
                <AccordionItem features={unlockedPotentialFeatures} />
              </Card>

              <Card className="space-y-4 md:rounded-[30px] p-6 md:p-8">
                <SectionIcon icon="store_emoji" />
                <h4 className="text-base font-medium text-dark">
                  Unlocked Potential
                </h4>
                <hr className="border-[#DAE5E8]" />
                <AccordionItem features={profitCenterFeatures} />
              </Card>

              <Card className="space-y-4 lg:col-span-2 md:rounded-[30px] p-6 md:p-8">
                <SectionIcon icon="setting_emoji" />
                <h4 className="text-base font-medium text-dark">
                  Unlocked Potential
                </h4>
                <hr className="border-[#DAE5E8]" />
                <AccordionItem features={intelligentEdgeFeatures} />
              </Card>
            </div>
          </Card>

          <Card className="md:rounded-[30px] p-6 md:p-8 space-y-8 md:space-y-10">
            <div className="grid lg:grid-cols-2 gap-4">
              <Card className="relative md:rounded-[30px] bg-white/60 p-6 md:p-8">
                <div className="bg-[url('/card-bottom-blur-image.svg')] blur-sm absolute left-0 bottom-0 bg-no-repeat bg-left-bottom h-[540px] w-[663px] z-[-1]" />

                <div className="size-16 rounded-full flex items-center justify-center bg-white mb-6 md:mb-8">
                  <Icon
                    name="gift_emoji"
                    height={32}
                    width={32}
                    className="text-[#276AEE]"
                  />
                </div>

                <div className="flex flex-col gap-2 mb-10 md:mb-14">
                  <h3 className="text-2xl lg:text-[30px] font-semibold text-dark">
                    Limited Time Offer
                  </h3>
                  <p className="text-sm text-dark/70">
                    Get your first month of Premium for just{" "}
                    <span className="primary-gradient-text font-medium">
                      $9
                    </span>{" "}
                    (normally $29).
                  </p>
                </div>

                <div className="inline-flex items-center gap-3 rounded-xl bg-white/30 px-4 h-10 border border-white/80 py-2">
                  <Icon
                    name="clock"
                    height={24}
                    width={24}
                    className="text-dark"
                  />
                  <span className="text-sm font-medium text-dark">
                    Offer expires in 2 days
                  </span>
                </div>
              </Card>

              <Card className="md:rounded-[30px] bg-white/60 p-6 md:p-8">
                <div className="size-16 rounded-full flex items-center justify-center bg-white mb-6 md:mb-8">
                  <Icon name="payment_success" height={32} width={32} />
                </div>

                <div className="flex flex-col gap-2 ">
                  <h3 className="text-base font-medium text-dark">
                    30-Day Money-Back Guarantee
                  </h3>
                  <p className="text-sm text-dark/70 max-w-[402px]">
                    Try Premium risk-free. If you&apos;re not completely
                    satisfied within 30 days, we&apos;ll refund your money. No
                    questions asked.
                  </p>
                </div>

                <hr className="my-4 border-[#DAE5E8]" />

                <ul className="flex flex-col gap-2">
                  {moneyBackHighlights.map((item) => (
                    <li key={item} className="flex items-center gap-4">
                      <Icon
                        name="badge"
                        height={20}
                        width={20}
                        className="text-dark/70"
                      />
                      <p className="text-sm text-dark/70">{item}</p>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-6">
              <AnimatedButton
                type="button"
                onClick={onContinue}
                className="h-14 inline-flex items-center gap-2 rounded-full bg-[#578CF626] px-6 py-3 text-sm font-medium  transition hover:bg-[#578cf6]/25 "
              >
                <Icon
                  name="sent"
                  height={24}
                  width={24}
                  className="text-[#276AEE]"
                />
                <span className="text-sm font-medium primary-gradient-text">
                  Continue Without Premium
                </span>
              </AnimatedButton>

              <AnimatedButton
                type="button"
                onClick={onUpgrade}
                className="h-14 inline-flex items-center gap-2 rounded-full border border-[#1556d8]/30 bg-[#1556d8] px-6 py-3 text-sm font-medium text-white shadow-[0_16px_36px_rgba(21,86,216,0.35)] transition hover:bg-[#0f49bd] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9ab8ff]"
              >
                <Icon
                  name="crown"
                  height={20}
                  width={20}
                  className="text-white"
                />
                Upgrade to Premium
              </AnimatedButton>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
