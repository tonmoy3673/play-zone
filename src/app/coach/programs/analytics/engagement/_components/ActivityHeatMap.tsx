import { SectionHeader } from "@/components/shared/SectionHeader";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Select from "@/components/ui/Select";

const ActivityHeatMap = () => {
  return (
    <Card>
      <div className="flex items-center justify-between mb-5 gap-2 flex-wrap">
        <SectionHeader title="Activity Heat map" className="mb-0" />

        <div className="flex items-center gap-12">
          <div className="flex items-center gap-5 text-xs font-medium text-dark/70">
            <div className="flex items-center gap-1.5">
              <span className="size-2 bg-primary-gradient rounded-full border border-[#1556D84D] "></span>
              <span>More</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="size-2 bg-[#5C8FF74D] rounded-full border border-[#5C8FF71A]"></span>
              <span>Less</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-medium text-dark">
              Peak Hours:
            </span>
            <Badge>6-8 PM</Badge>
          </div>
        </div>

        <Select
          placeholder="Week"
          options={[
            {
              label: "Week 01",
              value: "Week 01",
            },
            {
              label: "Week 02",
              value: "Week 02",
            },
          ]}
          className="h-12 bg-white/60 border border-white rounded-2xl"
        />
      </div>

      <div className="space-y-2">
        {[6, 8, 10, 12].map((hour) => (
          <div key={hour} className="flex items-center gap-4">
            <span className="text-dark/70 font-medium w-12 text-xs">
              {hour} AM
            </span>
            <div className="flex gap-2 flex-1">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className="flex-1 h-12 bg-white/30 border border-white/80 rounded-lg"
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-6 text-xs text-dark/70 font-medium">
        <span>Sun</span>
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
      </div>
    </Card>
  );
};

export default ActivityHeatMap;
