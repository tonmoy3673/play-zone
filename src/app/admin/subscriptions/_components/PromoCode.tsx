import Icon from "@/utils/icon";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { AnimatedButton } from "@/components/ui/Button";
import Pagination from "@/components/shared/Pagination";
import { SectionHeader } from "@/components/shared/SectionHeader";

const promoCodes = [
  {
    code: "WELCOME25",
    type: "Percentage",
    discount: "25%",
    usage: "45/100",
    expires: "Jun 28, 2025",
    status: "Active",
  },
  {
    code: "SAVE10",
    type: "Percentage",
    discount: "25%",
    usage: "45/100",
    expires: "Jun 28, 2025",
    status: "Active",
  },
  {
    code: "WELCOME25",
    type: "Percentage",
    discount: "25%",
    usage: "45/100",
    expires: "Jun 28, 2025",
    status: "Active",
  },
  {
    code: "WELCOME25",
    type: "Percentage",
    discount: "25%",
    usage: "45/100",
    expires: "Jun 28, 2025",
    status: "Flagged",
  },
];

const PromoCode = () => {
  return (
    <Card>
      <div className="flex items-center justify-between flex-wrap gap-2 mb-5">
        <SectionHeader title="Promo Code Manager" className="mb-0" />
        <AnimatedButton className="bg-primary-gradient border border-[#1556D84D] whitespace-nowrap px-4 py-3 h-12 flex items-center rounded-full gap-2 text-sm font-medium text-white">
          <Icon name="plus" height={20} width={20} />
          Add New Code
        </AnimatedButton>
      </div>

      <div className="overflow-x-auto rounded-3xl">
        <table className="w-full text-sm">
          <thead className="bg-white border-[#E7F2F5] border-b">
            <tr className="[&_th]:whitespace-nowrap text-left text-dark/70 [&_th]:p-4 [&_th]:first:pl-6 [&_th]:text-[10px] [&_th]:font-medium">
              <th>Code</th>
              <th>Type</th>
              <th>Discount</th>
              <th>Usage</th>
              <th>Expires</th>
              <th>Status</th>
              <th className="w-28">Actions</th>
            </tr>
          </thead>
          <tbody>
            {promoCodes.map((user, idx) => (
              <tr
                key={idx}
                className="border-b border-[#E7F2F5] hover:bg-white/80 bg-white/70 transition [&_td]:p-4 [&_td]:first:pl-6"
              >
                <td className="text-dark font-medium text-[10px]">
                  {user.code}
                </td>
                <td className="text-dark font-medium text-[10px]">
                  {user.type}
                </td>
                <td className="text-dark font-medium text-[10px]">
                  {user.discount}
                </td>
                <td className="text-dark font-medium text-[10px]">
                  {user.usage}
                </td>
                <td className="text-dark font-medium text-[10px]">
                  {user.expires}
                </td>
                <td>
                  <Badge
                    className="h-8 text-xs"
                    variant={
                      user.status === "Active"
                        ? "success"
                        : user.status === "Flagged"
                        ? "warning"
                        : "default"
                    }
                  >
                    {user.status}
                  </Badge>
                </td>

                <td>
                  <div className="flex items-center gap-2">
                    <button className="size-8 flex items-center justify-center rounded-full bg-white text-dark">
                      <Icon name="eye" height={16} width={16} />
                    </button>
                    <button className="size-8 flex items-center justify-center rounded-full bg-white text-dark">
                      <Icon name="message" height={16} width={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination text="Showing 5 of 230 Completed tasks" className="mt-5" />
    </Card>
  );
};

export default PromoCode;
