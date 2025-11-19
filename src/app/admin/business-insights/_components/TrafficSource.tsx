import Card from "@/components/ui/Card";
import ProgressBar from "@/components/shared/ProgressBar";
import { SectionHeader } from "@/components/shared/SectionHeader";

const trafficSource = [
  { category: "Instagram", completion: 42 },
  { category: "Google Search", completion: 28 },
  { category: "Direct Traffic", completion: 18 },
  { category: "Referrals", completion: 12 },
];

const TrafficSource = () => {
  return (
    <Card className="bg-white/60">
      <SectionHeader title="Traffic Source Breakdown" className="mb-5" />

      <div className="grid gap-4">
        {trafficSource.map((item, idx) => (
          <ProgressBar
            key={idx}
            label={item.category}
            percentage={item.completion}
            labelClass="text-dark text-xs"
          />
        ))}
      </div>
    </Card>
  );
};

export default TrafficSource;
