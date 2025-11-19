import ProgressBar from "@/components/shared/ProgressBar";
import Card from "@/components/ui/Card";

const funnelData = [
  { stage: "Signups", value: "1247", percentage: 92 },
  { stage: "Joined Program", value: "892 (71.5%)", percentage: 71 },
  { stage: "Completed First Task", value: "82% Complete", percentage: 54 },
  { stage: "Knowledge Base", value: "743 (83.3%)", percentage: 33 },
];

const ConversionFunnel = () => {
  return (
    <Card className="bg-white/60 md:rounded-2xl">
      <h4 className="text-sm font-medium text-dark mb-9">Conversion Funnel</h4>

      <div className="space-y-4 w-full">
        {funnelData.map((item, idx) => (
          <div
            key={idx}
            className="pb-4 last:pb-0 border-b border-white last:border-0"
          >
            <ProgressBar
              className="gap-2.5"
              percentage={item.percentage}
              label={item.stage}
              showPercentage={false}
              percentageText={item.value}
            />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ConversionFunnel;
