import Card from "@/components/ui/Card";
import { AnimatedButton } from "@/components/ui/Button";
import { SectionHeader } from "@/components/shared/SectionHeader";

const stats = [
  { label: "Average per Module", value: "4.2 Days" },
  { label: "Fastest Completion", value: "1.8 Days" },
  { label: "Slowest Completion", value: "12.5 Days" },
  { label: "Target Time", value: "5.0 Days" },
  { label: "On-Time Rate", value: "68%" },
];

const TimeCompletion = () => {
  return (
    <Card className="bg-white/60 flex-1">
      <SectionHeader title="Time to Completion" className="mb-5" />

      <div className="space-y-4">
        {stats.map((item) => (
          <div key={item.label} className="flex items-center justify-between">
            <span className="text-dark/70 font-medium text-sm">
              {item.label}
            </span>
            <span className="text-dark text-sm font-medium">{item.value}</span>
          </div>
        ))}
      </div>

      <AnimatedButton className="flex items-center gap-1.5 py-3.5 mt-5 w-full px-3 h-12 rounded-xl text-white text-sm font-medium bg-primary-gradient">
        View Timeline
      </AnimatedButton>
    </Card>
  );
};

export default TimeCompletion;
