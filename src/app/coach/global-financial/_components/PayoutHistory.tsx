import Icon from "@/utils/icon";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { AnimatedButton } from "@/components/ui/Button";

const payoutHistory = [
  {
    date: "Jan 15, 2025",
    amount: "$2,750.00",
    method: "Paypal",
    status: "Completed",
    trans_id: "TXN-20250115-001",
  },
  {
    date: "Jan 15, 2025",
    amount: "$2,750.00",
    method: "Paypal",
    status: "Completed",
    trans_id: "TXN-20250115-001",
  },
  {
    date: "Jan 15, 2025",
    amount: "$2,750.00",
    method: "Paypal",
    status: "Completed",
    trans_id: "TXN-20250115-001",
  },
];

const PayoutHistory = () => {
  return (
    <Card>
      <div className="flex items-center justify-between flex-wrap gap-2 mb-5">
        <SectionHeader title="Program Earnings Breakdown" className="mb-0" />

        <AnimatedButton className="bg-primary-gradient border border-[#1556D84D] whitespace-nowrap px-4 py-3 h-12 flex items-center rounded-full gap-2 text-sm font-medium text-white">
          <Icon name="download" height={20} width={20} />
          Export History
        </AnimatedButton>
      </div>

      <div className="overflow-x-auto rounded-3xl">
        <table className="w-full text-sm">
          <thead className="bg-white border-[#E7F2F5] border-b">
            <tr className="[&_th]:whitespace-nowrap text-left text-dark/70 [&_th]:p-4 [&_th]:first:pl-6 [&_th]:text-[10px] [&_th]:font-medium">
              <th>Date</th>
              <th>Amount</th>
              <th>Method</th>
              <th>Status</th>
              <th>Transaction ID</th>
            </tr>
          </thead>
          <tbody>
            {payoutHistory.map((payment, idx) => (
              <tr
                key={idx}
                className="text-dark font-medium text-xs border-b border-[#E7F2F5] hover:bg-white/80 bg-white/70 transition [&_td]:p-4 [&_td]:first:pl-6"
              >
                <td>{payment.date}</td>
                <td>{payment.amount}</td>
                <td>
                  <div className="flex items-center gap-3.5">
                    <Icon height={13} width={10} name="paypal_emoji" />
                    {payment.method}
                  </div>
                </td>
                <td>
                  <Badge
                    className="h-8 text-xs"
                    variant={
                      payment.status === "Completed"
                        ? "success"
                        : payment.status === "Paused"
                        ? "warning"
                        : "default"
                    }
                  >
                    {payment.status}
                  </Badge>
                </td>

                <td>{payment.trans_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default PayoutHistory;
