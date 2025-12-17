import MatrixCards from "./_components/MatrixCards";
import PayoutSummary from "./_components/PayoutSummary";
import ProgramRevenue from "./_components/ProgramRevenue";
import EarningOverTime from "./_components/EarningOverTime";
import ProgramEarnings from "./_components/ProgramEarnings";
import PayoutHistory from "./_components/PayoutHistory";
import EarningBySource from "./_components/EarningBySource";

const GlobalFinancialPage = () => {
  return (
    <div className="space-y-4">
      <MatrixCards />

      <div className="grid lg:grid-cols-[1fr_428px] gap-4">
        <ProgramRevenue />
        <PayoutSummary />
        <EarningOverTime />
        <EarningBySource />
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <ProgramEarnings />
        <PayoutHistory />
      </div>
    </div>
  );
};

export default GlobalFinancialPage;
