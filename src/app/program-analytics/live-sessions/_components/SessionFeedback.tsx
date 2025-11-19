import Card from "@/components/ui/Card";
import Icon, { IconName } from "@/utils/icon";
import { SectionHeader } from "@/components/shared/SectionHeader";

const feedbackCategories = [
  {
    icon: "heart_emoji" as IconName,
    title: "Positive Feedback",
    items: [
      '"Great live breakdown of defensive reads"',
      '"Love the interactive Q&A format"',
      '"Coach explains concepts clearly"',
    ],
  },
  {
    icon: "triangle_alert" as IconName,
    title: "Areas for Improvement",
    items: [
      '"Too much content crammed into sessions"',
      '"Audio quality could be better"',
      '"Need more time for questions"',
    ],
  },
  {
    icon: "fire_emoji" as IconName,
    title: "Most Requested Topics",
    items: [
      "Advanced Route Concepts - 12 requests",
      "Game Film Analysis - 8 requests",
      "Mental Game Training - 6 requests",
    ],
  },
];

const SessionFeedback = () => {
  return (
    <Card>
      <SectionHeader title="Session Feedback Summary" className="mb-5" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {feedbackCategories.map((feedback, idx) => (
          <Card key={idx} className="bg-white/60 space-y-5">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full flex items-center justify-center bg-white shadow">
                <Icon name={feedback.icon} height={20} width={20} />
              </div>
              <h4 className="font-semibold text-dark text-sm">
                {feedback.title}
              </h4>
            </div>

            <ul className="space-y-4">
              {feedback.items?.map((item, i) => (
                <li key={i} className="text-sm text-dark/70">
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Card>
  );
};

export default SessionFeedback;
