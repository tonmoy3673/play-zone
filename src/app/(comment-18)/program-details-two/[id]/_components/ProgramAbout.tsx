import { SectionHeader } from "@/components/shared/SectionHeader";
import Icon, { IconName } from "@/utils/icon";

const programStats = [
  { label: "Duration", icon: "calendar_2" as IconName, value: "8 Weeks" },
  { label: "Sessions", icon: "clock_2" as IconName, value: "16 Live" },
  { label: "Videos", icon: "video" as IconName, value: "24+" },
  { label: "Language", icon: "language_skill" as IconName, value: "English" },
];

const learnPoints = [
  "Perfect your shooting technique with both feet",
  "Master the art of one-on-one finishing",
  "Develop your volleying and half-volleying skills",
  "Improve your heading accuracy and power",
  "Learn finishing from different angles and positions",
  "Understand the psychology of clinical finishing",
  "Develop your volleying and half-volleying skills",
  "Receive personalized feedback on your technique",
];

const ProgramAbout = () => {
  return (
    <div className="p-5 rounded-2xl border backdrop-blur-3xl bg-[#ffffff4d] border-white">
      <SectionHeader title="What You'll Learn" className="mb-4" />
      <p className="text-dark text-sm">
        Elevate your basketball game with this comprehensive program focused on
        developing basketball IQ, court vision, and strategic decision-making.
        Learn from NBA-experienced coach James Wilson through live sessions and
        detailed video breakdowns.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 mt-[22px] mb-8">
        {programStats.map(({ label, value, icon }) => (
          <div
            key={label}
            className="px-5 py-4 bg-white space-y-1.5 rounded-lg"
          >
            <div className="flex items-center justify-between">
              <span className="text-dark/70 text-xs font-medium">{label}</span>
              <Icon name={icon} height={20} width={20} />
            </div>
            <h5 className="text-dark text-2xl font-semibold">{value}</h5>
          </div>
        ))}
      </div>

      <SectionHeader title="What You'll Learn" />

      <ul className="grid md:grid-cols-2 gap-x-12 gap-y-5">
        {learnPoints.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <Icon
              name="check_check_blue"
              height={20}
              width={20}
              className="shrink-0"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgramAbout;
