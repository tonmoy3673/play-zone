import Card from "@/components/ui/Card";
import { SectionHeader } from "@/components/shared/SectionHeader";

const data = [
  {
    cohort: "Jan 2025",
    size: "1,234",
    week1: "89%",
    week2: "25%",
    week4: "25%",
    week8: "25%",
    week12: "25%",
  },
  {
    cohort: "Jan 2025",
    size: "1,234",
    week1: "89%",
    week2: "25%",
    week4: "25%",
    week8: "25%",
    week12: "25%",
  },
  {
    cohort: "Jan 2025",
    size: "1,234",
    week1: "89%",
    week2: "25%",
    week4: "25%",
    week8: "25%",
    week12: "25%",
  },
  {
    cohort: "Jan 2025",
    size: "1,234",
    week1: "89%",
    week2: "25%",
    week4: "25%",
    week8: "25%",
    week12: "25%",
  },
];

const UserCohortAnalytics = () => {
  return (
    <Card className="md:col-span-2">
      <SectionHeader title="User Cohort Analytics" className="mb-5" />

      <div className="overflow-x-auto rounded-3xl ">
        <table className="w-full text-sm">
          <thead className="bg-white border-[#E7F2F5] border-b">
            <tr className="[&_th]:whitespace-nowrap text-left text-dark/70 [&_th]:p-4 [&_th]:text-[10px] [&_th]:font-medium">
              <th>Cohort</th>
              <th>Size</th>
              <th>Week 1</th>
              <th>Week 2</th>
              <th>Week 4</th>
              <th>Week 8</th>
              <th>Week 12</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr
                key={idx}
                className="border-b border-[#E7F2F5] hover:bg-white/80 bg-white/70 transition [&_td]:p-4 text-dark font-medium text-[10px]"
              >
                <td className="text-dark font-medium text-[10px]">
                  {item.cohort}
                </td>
                <td className="text-dark font-medium text-[10px]">
                  {item.size}
                </td>
                <td className="text-dark font-medium text-[10px]">
                  {item.week1}
                </td>
                <td className="text-dark font-medium text-[10px]">
                  {item.week2}
                </td>
                <td className="text-dark font-medium text-[10px]">
                  {item.week4}
                </td>
                <td className="text-dark font-medium text-[10px]">
                  {item.week8}
                </td>
                <td className="text-dark font-medium text-[10px]">
                  {item.week12}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default UserCohortAnalytics;
