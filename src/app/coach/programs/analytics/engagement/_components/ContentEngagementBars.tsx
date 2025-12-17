import ProgressBar from "@/components/shared/ProgressBar";
import { SectionHeader } from "@/components/shared/SectionHeader";
import Icon from "@/utils/icon";

const contentData = [
  { name: "Video Lessons", value: 75 },
  { name: "Reading Materials", value: 45 },
  { name: "Interactive Drills", value: 63 },
  { name: "Discussion Forums", value: 92 },
];

const ContentEngagementBars = () => {
  return (
    <div className="bg-white/60 rounded-2xl md:rounded-3xl p-5 border border-white/80 overflow-hidden">
      <SectionHeader title="Content Engagement" className="mb-9" />

      <div className="space-y-4">
        {contentData.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between flex-wrap gap-2 pb-3 last:pb-0 border-b border-white last:border-b-0"
          >
            <div className="flex items-center gap-3 text-dark">
              <div className="size-10 flex items-center justify-center rounded-full shadow bg-white">
                <Icon name="triangle_alert" height={20} width={20} />
              </div>
              <span className="font-semibold text-sm">{item.name}</span>
            </div>

            <ProgressBar
              key={idx}
              className="w-[212px]"
              label="Complete"
              percentage={item.value}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentEngagementBars;
