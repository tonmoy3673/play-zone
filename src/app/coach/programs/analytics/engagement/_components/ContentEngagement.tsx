import Card from "@/components/ui/Card";
import { SectionHeader } from "@/components/shared/SectionHeader";

const engagementData = [
  { category: "Video Lessons", value: 127 },
  { category: "Active Conversation", value: 23 },
  { category: "Respond Rate", value: 127 },
  { category: "Avg Response Rate", value: 127 },
  { category: "Most Active", value: 127 },
];

const ContentEngagement = () => {
  return (
    <Card className="bg-white/60">
      <SectionHeader title="Content Engagement" className="mb-8" />

      <div className="divide-y divide-white">
        {engagementData.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
          >
            <span className="text-sm text-dark/70 font-medium">
              {item.category}
            </span>
            <span className="text-sm font-semibold text-dark">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ContentEngagement;
