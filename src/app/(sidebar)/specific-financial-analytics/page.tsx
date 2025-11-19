import TopHeader from "./_components/TopHeader";
import MatrixCards from "./_components/MatrixCards";
import RevenueTrend from "./_components/RevenueTrend";
import PaymentMethod from "./_components/PaymentMethod";
import MonthlyRevenue from "./_components/MonthlyRevenue";
import RecentTransactions from "./_components/RecentTransactions";
import MonthlyPerformance from "./_components/MonthlyPerformance";

const SpecificFinancialAnalyticsPage = () => {
  return (
    <div>
      <TopHeader />

      <div className="space-y-4">
        <MatrixCards />

        <div className="grid gap-4 md:grid-cols-[1fr_428px]">
          <RevenueTrend />
          <MonthlyRevenue />
          <MonthlyPerformance />
          <PaymentMethod />
        </div>

        <RecentTransactions />
      </div>
    </div>
  );
};

export default SpecificFinancialAnalyticsPage;
