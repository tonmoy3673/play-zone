import Icon from "@/utils/icon";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { SectionHeader } from "@/components/shared/SectionHeader";

const transactions: {
  description: string;
  payment_method: "Paypal" | "Master Card" | "Visa" | "Google Pay";
  amount: string;
  status: "Paid" | "Processing" | "Failed";
  date: string;
  time: string;
}[] = [
  {
    description: "A durable mechanism designed for long-term use.",
    payment_method: "Paypal",
    amount: "$29.99",
    status: "Paid",
    date: "Jun 5, 2025",
    time: "2:45 PM",
  },
  {
    description: "A durable mechanism designed for long-term use.",
    payment_method: "Master Card",
    amount: "$29.99",
    status: "Paid",
    date: "Jun 5, 2025",
    time: "2:45 PM",
  },
  {
    description: "A durable mechanism designed for long-term use.",
    payment_method: "Visa",
    amount: "$29.99",
    status: "Processing",
    date: "Jun 5, 2025",
    time: "2:45 PM",
  },
  {
    description: "A durable mechanism designed for long-term use.",
    payment_method: "Google Pay",
    amount: "$29.99",
    status: "Processing",
    date: "Jun 5, 2025",
    time: "2:45 PM",
  },
  {
    description: "A durable mechanism designed for long-term use.",
    payment_method: "Paypal",
    amount: "$29.99",
    status: "Failed",
    date: "Jun 5, 2025",
    time: "2:45 PM",
  },
];

const RecentTransactions = () => {
  return (
    <Card>
      <SectionHeader title="Recent Transactions" />

      <div className="overflow-x-auto rounded-3xl ">
        <table className="w-full text-sm">
          <thead className="bg-white border-[#E7F2F5] border-b">
            <tr className="[&_th]:whitespace-nowrap text-left text-dark/70 [&_th]:p-4 [&_th]:first:pl-6 [&_th]:text-[10px] [&_th]:font-medium">
              <th>Date</th>
              <th>Description</th>
              <th>Payment Method</th>
              <th>Amount</th>
              <th>Status</th>
              <th className="w-14 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, idx) => (
              <tr
                key={idx}
                className="border-b border-[#E7F2F5] hover:bg-white/80 bg-white/70 transition [&_td]:p-4 [&_td]:first:pl-6"
              >
                <td className="font-medium text-[10px]">
                  <span className="text-dark block mb-1">
                    {transaction.date}
                  </span>
                  <span className="text-dark/70">{transaction.time}</span>
                </td>

                <td className="font-medium text-[10px] text-dark/70">
                  {transaction.description}
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <div className="size-8 flex items-center justify-center rounded-full bg-white">
                      {transaction.payment_method === "Paypal" ? (
                        <Icon name="paypal_emoji" width={11} height={13} />
                      ) : transaction.payment_method === "Master Card" ? (
                        <Icon name="mastercard_emoji" width={11} height={11} />
                      ) : transaction.payment_method === "Visa" ? (
                        <Icon name="visa_emoji" width={21} height={6} />
                      ) : (
                        <Icon name="googlepay_emoji" width={24} height={10} />
                      )}
                    </div>
                    <span className="text-dark font-medium text-xs">
                      {transaction.payment_method}
                    </span>
                  </div>
                </td>

                <td className="text-dark font-medium text-xs">
                  {transaction.amount}
                </td>

                <td>
                  <Badge
                    className="h-8 text-xs"
                    variant={
                      transaction.status === "Paid"
                        ? "success"
                        : transaction.status === "Processing"
                        ? "warning"
                        : transaction.status === "Failed"
                        ? "danger"
                        : "dark"
                    }
                  >
                    {transaction.status}
                  </Badge>
                </td>

                <td>
                  <div className="flex items-center justify-center">
                    <button className="size-8 flex items-center justify-center rounded-full bg-white text-dark">
                      <Icon name="eye" height={16} width={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-5 flex items-center justify-center lg:justify-between flex-col lg:flex-row gap-y-2">
        <p className="text-xs font-medium text-dark/70">
          Showing 5 of 230 Completed tasks
        </p>

        <div className="flex items-center gap-2">
          <button className="size-8 rounded-lg border border-white flex items-center justify-center bg-white hover:bg-primary-gradient transition text-dark hover:text-white">
            <Icon name="chevron_left" height={20} width={20} />
          </button>

          {[1, 2, 3].map((num) => (
            <button
              key={num}
              className={`size-8 rounded-lg border text-[10px] font-medium border-white flex items-center justify-center bg-white transition text-dark hover:text-white ${
                num === 1
                  ? "bg-primary-gradient text-white"
                  : "text-dark bg-white hover:bg-primary-gradient hover:text-white"
              }`}
            >
              {num}
            </button>
          ))}
          <span className="size-8 rounded-lg border border-white flex items-center justify-center bg-white hover:bg-primary-gradient transition text-dark hover:text-white">
            <Icon name="more_vertical" height={20} width={20} />
          </span>
          <button className="size-8 rounded-lg border text-[10px] font-medium border-white flex items-center justify-center bg-white hover:bg-primary-gradient transition text-dark hover:text-white">
            15
          </button>
          <button className="size-8 rounded-lg border border-white flex items-center justify-center bg-white hover:bg-primary-gradient transition text-dark hover:text-white">
            <Icon name="chevron_right" height={20} width={20} />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default RecentTransactions;
