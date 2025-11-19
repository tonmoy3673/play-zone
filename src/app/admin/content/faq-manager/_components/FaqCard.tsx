import Card from "@/components/ui/Card";
import Icon, { IconName } from "@/utils/icon";

export type FaqProp = {
  title: string;
  description: string;
  subject: string;
  views: string;
  comments: string;
  date: string;
};

const FaqCard = ({ faq }: { faq: FaqProp }) => {
  return (
    <Card className="bg-white/60 md:rounded-2xl">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-3">
            <span className="text-sm text-dark">{faq.subject}</span>
            <span className="text-xs text-dark/70">Update: Jan 16, 2025</span>
          </div>

          <div className="flex items-center gap-2">
            <button>
              <Icon
                name="share"
                height={20}
                width={20}
                className="text-[#5C8FF7]"
              />
            </button>
            <button>
              <Icon
                name="more_vertical"
                height={20}
                width={20}
                className="text-[#595F70] rotate-90"
              />
            </button>
          </div>
        </div>

        <div className="space-y-1 text-dark max-w-[848px]">
          <h3 className="text-base sm:text-lg md:text-xl font-medium">
            {faq.title}
          </h3>
          <p className="line-clamp-2 text-sm">{faq.description}</p>
        </div>

        <div className="flex items-center gap-5 flex-wrap">
          {[
            {
              label: `${faq.views} view`,
              icon: "heart_emoji" as IconName,
            },
            {
              label: faq.comments,
              icon: "message_2" as IconName,
            },
          ].map((item, actionIdx) => (
            <div key={actionIdx} className="flex items-center gap-1">
              <Icon
                name={item.icon}
                height={20}
                width={20}
                className="text-black"
              />
              <span className="text-dark/70 text-xs">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default FaqCard;
