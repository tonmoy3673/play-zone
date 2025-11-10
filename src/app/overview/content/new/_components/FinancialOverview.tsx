const iconArrow =
  "https://www.figma.com/api/mcp/asset/d6e34b20-aec7-4803-b025-b383e2e70f4c";
const iconShadow =
  "https://www.figma.com/api/mcp/asset/1d4e7dae-3a06-4436-a0f6-7ad7be533025";
const iconDollar =
  "https://www.figma.com/api/mcp/asset/69d7f4db-ed65-48be-82c2-a554fb79d20c";
const iconUp =
  "https://www.figma.com/api/mcp/asset/ca46400a-06d0-4225-ac95-93f489237a40";
const iconSend =
  "https://www.figma.com/api/mcp/asset/df0e1740-187e-4d7c-b010-262d324a5079";
const iconDown =
  "https://www.figma.com/api/mcp/asset/98a0ef7a-4e04-465c-a3b6-6a86af3f55f5";
const iconReceive =
  "https://www.figma.com/api/mcp/asset/9c5a0d7a-862c-433d-ac53-2d6a83bd717d";
const axisLine =
  "https://www.figma.com/api/mcp/asset/13b1c428-9b91-4546-ad2c-f61010b4633a";
const legendEarnings =
  "https://www.figma.com/api/mcp/asset/98d82e1e-d6d3-43a7-84db-96c17784204f";
const legendWithdraws =
  "https://www.figma.com/api/mcp/asset/6b258c72-ba30-443a-adb6-0d80126d05b4";
const tooltipPointer =
  "https://www.figma.com/api/mcp/asset/7d690942-c6d0-4a02-bd04-ac4468ec2912";

const summaryCards = [
  {
    title: "Total Earnings",
    amount: "$524.34",
    change: "+0.60%",
    positive: true,
    icon: iconDollar,
  },
  {
    title: "Total Expenses",
    amount: "$574.34",
    change: "-1.60%",
    positive: false,
    icon: iconSend,
  },
  {
    title: "Total withdraws",
    amount: "$574.34",
    change: "+0.60%",
    positive: true,
    icon: iconReceive,
  },
];

const months = [
  { label: "Jan", earnings: 45, withdraws: 25 },
  { label: "Feb", earnings: 40, withdraws: 30 },
  { label: "Mar", earnings: 20, withdraws: 20 },
  { label: "Apr", earnings: 28, withdraws: 18 },
  { label: "May", earnings: 48, withdraws: 15 },
  {
    label: "Jun",
    earnings: 52,
    withdraws: 35,
    highlight: { text: "$24,678", positive: true },
  },
  { label: "Jul", earnings: 60, withdraws: 32 },
  { label: "Aug", earnings: 55, withdraws: 30 },
  { label: "Sep", earnings: 56, withdraws: 32 },
  {
    label: "Oct",
    earnings: 53,
    withdraws: 40,
    highlight: { text: "-$11,678", positive: false },
  },
  { label: "Nov", earnings: 44, withdraws: 36 },
  { label: "Dec", earnings: 32, withdraws: 28 },
];

const maxValue = Math.max(
  ...months.map((month) => Math.max(month.earnings, month.withdraws))
);

export default function FinancialOverview() {
  return (
    <div className="min-h-screen bg-[#e9f3ff] p-6 flex justify-center">
      <div className="w-full max-w-[1100px] bg-white/30 rounded-[24px] p-6 flex flex-col gap-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-[#141b34] text-xl font-semibold">
            My Financials
          </h2>
          <button className="relative w-10 h-10">
            <span className="absolute inset-0 rounded-full bg-white/60 border border-white/70"></span>
            <img
              src={iconArrow}
              alt="go"
              className="absolute inset-2 rotate-90"
            />
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {summaryCards.map(({ title, amount, change, positive, icon }) => (
            <div
              key={title}
              className="relative bg-white/35 rounded-[24px] px-6 py-5 flex items-center gap-4"
            >
              <div className="relative w-14 h-14">
                <img
                  src={iconShadow}
                  alt="shadow"
                  className="absolute inset-0 w-full h-full"
                />
                <div className="absolute inset-[16px] flex items-center justify-center bg-transparent">
                  <img src={icon} alt={title} className="w-6 h-6" />
                </div>
              </div>
              <div className="flex flex-col text-sm text-[#141b34b3]">
                <span className="font-medium">{title}</span>
                <span className="text-[#141b34] text-2xl font-bold font-['DM Sans',sans-serif]">
                  {amount}
                </span>
              </div>
              <div className="ml-auto flex items-center gap-1 text-xs font-medium">
                <span
                  className={positive ? "text-[#38aa4b]" : "text-[#ff0033]"}
                >
                  {change}
                </span>
                <img
                  src={positive ? iconUp : iconDown}
                  alt={positive ? "increase" : "decrease"}
                  className="w-3.5 h-3.5"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Chart Section */}
        <div className="bg-white/40 rounded-[24px] p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[#141b34] text-lg font-semibold">
              Earning Calculation
            </h3>
            <div className="flex items-center gap-5 text-xs text-[#141b34]">
              <div className="flex items-center gap-2">
                <img
                  src={legendEarnings}
                  alt="legend earnings"
                  className="w-2 h-2"
                />
                <span>Earnings</span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={legendWithdraws}
                  alt="legend withdraws"
                  className="w-2 h-2"
                />
                <span>withdraws</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium">
              <button className="px-3 py-1 rounded-full bg-white/60 text-[#141b34]">
                Week
              </button>
              <button className="px-3 py-1 rounded-full bg-white/60 text-[#141b34]">
                Month
              </button>
              <button className="px-4 py-2 rounded-full bg-gradient-to-r from-[#4d8ffb] to-[#2a6be8] text-white">
                Yearly
              </button>
            </div>
          </div>

          <div className="relative">
            {/* Axis lines */}
            <div className="absolute inset-x-0 top-0 bottom-12 flex flex-col justify-between pointer-events-none">
              {Array.from({ length: 7 }).map((_, idx) => (
                <img
                  key={idx}
                  src={axisLine}
                  alt="axis line"
                  className="w-full h-px opacity-60"
                />
              ))}
            </div>

            <div className="grid grid-cols-12 gap-3 relative h-[280px]">
              {months.map((month, index) => {
                const earningsHeight = (month.earnings / maxValue) * 100;
                const withdrawHeight = (month.withdraws / maxValue) * 100;

                return (
                  <div
                    key={month.label}
                    className="flex flex-col justify-end items-center relative"
                  >
                    <div className="flex flex-col justify-end items-center gap-1 w-full h-full">
                      <div className="w-full flex flex-col justify-end gap-1">
                        <div
                          className="rounded-[6px] bg-gradient-to-t from-[#0f52ff] to-[#91b4ff] transition-all"
                          style={{ height: `${earningsHeight}%` }}
                        ></div>
                        <div
                          className="rounded-[6px] bg-gradient-to-t from-[#94b6ff] to-[#d9e4ff]"
                          style={{ height: `${withdrawHeight}%` }}
                        ></div>
                      </div>
                    </div>
                    <span className="mt-3 text-[12px] text-[#141b34b3]">
                      {month.label}
                    </span>

                    {month.highlight && (
                      <div
                        className={`absolute -top-14 z-10 px-3 py-1 rounded-lg shadow-xl bg-white text-xs font-medium whitespace-nowrap ${
                          month.highlight.positive
                            ? "text-[#141b34]"
                            : "text-[#ff0033]"
                        }`}
                        style={{ left: "50%", transform: "translateX(-50%)" }}
                      >
                        {month.highlight.text}
                        <img
                          src={tooltipPointer}
                          alt="pointer"
                          className="absolute left-1/2 -bottom-2 w-3 h-3 -translate-x-1/2"
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col justify-between absolute left-0 top-0 bottom-12 -translate-x-12 text-xs text-[#141b34b3]">
              {[
                "$55K",
                "$30K",
                "$25K",
                "$20K",
                "$15K",
                "$10K",
                "$5K",
                "$0",
              ].map((label) => (
                <span key={label}>{label}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
