import Icon from "@/utils/icon";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { SectionHeader } from "@/components/shared/SectionHeader";
const earnings = [
  {
    title: "QB Elite Vol. 3",
    revenue: "$12,400",
    sales: "520 sales",
    status: "Active",
  },
  {
    title: "Speed Foundations",
    revenue: "$4,100",
    sales: "180 sales",
    status: "Active",
  },
  {
    title: "Film Study Basics",
    revenue: "$2,240",
    sales: "130 sales",
    status: "Paused",
  },
];
const ProgramEarnings = () => {
  return (
    <Card>
      <div className="flex items-center justify-between flex-wrap gap-2 mb-5">
        <SectionHeader title="Program Earnings Breakdown" className="mb-0" />
        <div className="w-full max-w-[205px] flex-1 h-12 px-4 py-3 rounded-full bg-white/60 border-white border flex items-center gap-3">
          <Icon
            name="search"
            height={20}
            width={20}
            className="text-[#595F70]"
          />
          <input
            type="text"
            placeholder="Search Programs..."
            className="w-full  bg-transparent text-xs font-medium placeholder:text-dark/70 text-dark outline-none"
          />
        </div>
      </div>
      <div className="overflow-x-auto rounded-3xl">
        <table className="w-full text-sm">
          <thead className="bg-white border-[#E7F2F5] border-b">
            <tr className="[&_th]:whitespace-nowrap text-left text-dark/70 [&_th]:p-4 [&_th]:first:pl-6 [&_th]:text-[10px] [&_th]:font-medium">
              <th>Title</th>
              <th>Revenue</th>
              <th>Sales</th>
              <th>Status</th>
              <th className="w-10">Actions</th>
            </tr>
          </thead>
          <tbody>
            {earnings.map((earning, idx) => (
              <tr
                key={idx}
                className="text-dark font-medium text-xs border-b border-[#E7F2F5] hover:bg-white/80 bg-white/70 transition [&_td]:p-4 [&_td]:first:pl-6"
              >
                <td>{earning.title}</td> <td>{earning.revenue}</td>
                <td>{earning.sales}</td>
                <td>
                  <Badge
                    className="h-8 text-xs"
                    variant={
                      earning.status === "Active"
                        ? "success"
                        : earning.status === "Paused"
                        ? "warning"
                        : "default"
                    }
                  >
                    {earning.status}
                  </Badge>
                </td>
                <td>
                  <button className="size-8 flex items-center justify-center rounded-full bg-white text-dark">
                    <Icon name="eye" height={16} width={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};
export default ProgramEarnings;
