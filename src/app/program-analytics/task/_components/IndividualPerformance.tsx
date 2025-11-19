import Icon from "@/utils/icon";
import ProgressBar from "@/components/shared/ProgressBar";
import { SectionHeader } from "@/components/shared/SectionHeader";
import Card from "@/components/ui/Card";

const individualPerformanceData = [
  {
    task: "QB Film Breakdown Week 2",
    desc: "Video analysis and technique review",
    status: "Complete",
    submissions: 43,
    score: "78%",
    completion: "67%",
    rotation: "Cover 2 Rotation",
  },
  {
    task: "Pocket Presence Drill",
    desc: "Situational Awareness training",
    status: "Complete",
    submissions: 80,
    score: "85%",
    completion: "92%",
    rotation: "Pressure Recognition",
  },
  {
    task: "Advanced Route Concepts",
    desc: "Complex Passings Patterns",
    status: "Complete",
    submissions: 42,
    score: "62%",
    completion: "43%",
    rotation: "Cover 2 Rotation",
  },
  {
    task: "QB Film Breakdown Week 2",
    desc: "Video analysis and technique review",
    status: "Complete",
    submissions: 26,
    score: "78%",
    completion: "67%",
    rotation: "Cover 2 Rotation",
  },
];

const IndividualPerformance = () => {
  return (
    <Card className="lg:col-span-2">
      <SectionHeader title="Individual Performance" className="mb-5" />

      <div className="space-y-2">
        {individualPerformanceData.map((item, idx) => (
          <div
            key={idx}
            className={`max-lg:grid max-lg:grid-cols-3 lg:flex items-center gap-x-4 gap-y-2 lg:gap-11 p-5 rounded-2xl bg-white/60 border border-white hover:bg-gray-100 transition`}
          >
            <div className="max-lg:col-span-3 flex items-center gap-3 flex-1">
              <div className="size-10 bg-white/50 border border-white shadow rounded-full flex items-center justify-center">
                <Icon
                  name="triangle_alert"
                  height={20}
                  width={20}
                  className="text-dark"
                />
              </div>

              <div className="space-y-0.5">
                <h4 className="font-semibold text-dark text-sm">{item.task}</h4>
                <p className="text-xs text-dark/70">{item.desc}</p>
              </div>
            </div>

            <ProgressBar
              className="max-lg:col-span-3 lg:w-[212px] gap-3 shrink-0"
              percentage={item.submissions}
              label="Complete"
              showPercentage={false}
              percentageText={`${item.submissions} submissions`}
              percentageTextClass="text-sm"
            />

            <div className="space-y-1">
              <p className="font-medium text-dark text-sm">{item.score}</p>
              <p className="text-xs text-dark/70">Ava Score</p>
            </div>

            <div className="space-y-1">
              <p className="font-medium text-dark text-sm">{item.completion}</p>
              <p className="text-xs text-dark/70">Completion</p>
            </div>

            <div className="space-y-1 w-[160px] max-sm:col-span-3">
              <p className="font-medium text-dark text-sm">{item.rotation}</p>
              <p className="text-xs text-dark/70">Most Missed</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default IndividualPerformance;
