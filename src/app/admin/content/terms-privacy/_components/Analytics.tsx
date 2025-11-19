import Card from "@/components/ui/Card";
import { SectionHeader } from "@/components/shared/SectionHeader";

const data = {
  "Views (30d)": "1,234",
  Downloads: 89,
  "Acceptance Rate": "98.5%",
};

const Analytics = () => {
  return (
    <Card className="md:rounded-2xl">
      <SectionHeader
        title="Analytics"
        titleClass="text-base"
        className="mb-4"
      />

      <ul className="pt-4 border-t border-[#EFF3F4] space-y-4">
        {Object.entries(data).map(([key, value]) => (
          <li key={key} className="flex items-center justify-between flex-wrap">
            <span className="text-xs text-dark/70">{key}</span>
            <strong className={`font-medium text-sm text-dark`}>{value}</strong>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Analytics;
