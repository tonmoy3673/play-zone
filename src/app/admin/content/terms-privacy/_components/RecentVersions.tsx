import Card from "@/components/ui/Card";
import { SectionHeader } from "@/components/shared/SectionHeader";

const data = [
  {
    version: "V2.1",
    date: "Jan 11, 2025",
    status: "Current",
  },
  {
    version: "V1.2",
    date: "Jan 11, 2025",
    status: "Restore",
  },
  {
    version: "V1.1",
    date: "Jan 11, 2025",
    status: "Restore",
  },
];

const RecentVersions = () => {
  return (
    <Card className="md:rounded-2xl">
      <SectionHeader
        title="Recent Versions"
        titleClass="text-base"
        className="mb-4"
      />

      <ul className="pt-4 border-t border-[#EFF3F4] space-y-4">
        {data.map((item, idx) => (
          <li key={idx} className="flex items-center justify-between flex-wrap">
            <div>
              <span className="text-sm font-medium text-dark">
                {item.version}
              </span>
              <span className="text-xs text-dark/70">{item.date}</span>
            </div>
            <strong className="text-xs text-dark/70">{item.status}</strong>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default RecentVersions;
