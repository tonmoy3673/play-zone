import Card from "@/components/ui/Card";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedButton } from "@/components/ui/Button";

const PayoutSummary = () => {
  return (
    <Card className="bg-white/60 p-0">
      <div className="p-5 border-b border-[#C8DEFB]">
        <SectionHeader className="mb-0" title="Payout Summary" />
      </div>

      <div className="p-2">
        <div className="space-y-1.6">
          <div className="rounded-xl p-3 hover:bg-white/60 flex items-center justify-between flex-row transition duration-300">
            <div>
              <h5 className="text-base font-medium text-dark">
                Current Balance
              </h5>
              <p className="text-xs font-medium text-dark/70">
                Available for Payout
              </p>
            </div>

            <div>
              <span className="text-base font-medium text-dark">$4,120.50</span>
            </div>
          </div>

          <div className="rounded-xl p-3 hover:bg-white/60 flex items-center justify-between flex-row transition duration-300">
            <div>
              <h5 className="text-base font-medium text-dark">Last Payout</h5>
              <p className="text-xs font-medium text-dark/70">June 2, 2025</p>
            </div>

            <div>
              <span className="text-base font-medium primary-gradient-text">
                $750
              </span>
            </div>
          </div>

          <div className="rounded-xl p-3 hover:bg-white/60 flex items-center justify-between flex-row transition duration-300">
            <div>
              <h5 className="text-base font-medium text-dark">
                Platform Fee Thing
              </h5>
              <p className="text-xs font-medium text-dark/70">
                Deducted from gross earning
              </p>
            </div>

            <div className="grid text-right">
              <span className="text-base font-medium bg-[linear-gradient(148deg,#FF6565_16.41%,#EC4213_59.87%)] bg-clip-text text-transparent">
                15%
              </span>
              <span className="text-xs font-medium text-dark/70">-$727.00</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 mt-6 lg:mt-8 gap-3 px-3">
          <AnimatedButton className="bg-[#1556D826] border border-[#1556D81A] whitespace-nowrap px-4 h-10 flex items-center justify-center rounded-full gap-2 text-sm font-medium">
            <span className="primary-gradient-text">View History</span>
          </AnimatedButton>
          <AnimatedButton className="bg-primary-gradient border border-[#1556D84D] whitespace-nowrap px-4 h-10 flex items-center justify-center rounded-full gap-2 text-sm font-medium text-white">
            Request Manual Payout
          </AnimatedButton>
        </div>
      </div>
    </Card>
  );
};

export default PayoutSummary;
