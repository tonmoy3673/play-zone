import Icon from "@/utils/icon";
import { SectionHeader } from "@/components/shared/SectionHeader";
import Card from "@/components/ui/Card";

const CoachCentricMatrix = () => {
  return (
    <div>
      <SectionHeader title="Coach-Centric Metrics" className="mb-5" />

      <div className="space-y-2">
        {[
          {
            label: "Active Coaches",
            value: "234",
            change: "+8% Growth",
            time: "Last 30 Days",
          },
          {
            label: "Avg 6 Programs per Coach",
            value: "2.4",
            change: "+8% Growth",
            time: "Last 30 Days",
          },
        ].map((metric, idx) => (
          <Card
            key={idx}
            className="bg-white/60 flex items-center justify-between gap-3"
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center  size-10 rounded-full bg-white">
                <Icon
                  name="task"
                  height={20}
                  width={20}
                  className="text-dark"
                />
              </div>

              <div className="space-y-0.5 grid">
                <span className="text-sm font-semibold text-dark">
                  {metric.label}
                </span>
                <span className="text-xs text-dark/70">{metric.time}</span>
              </div>
            </div>

            <div className="text-end">
              <span className="text-sm font-semibold text-dark">
                {metric.value}
              </span>
              <div className="flex items-center justify-end gap-1">
                <Icon
                  name="trend_up"
                  className="text-[#276AEE]"
                  height={14}
                  width={14}
                />
                <span className="text-xs font-medium primary-gradient-text">
                  {metric.change}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CoachCentricMatrix;
