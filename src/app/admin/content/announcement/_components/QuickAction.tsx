import Icon, { IconName } from "@/utils/icon";
import { SectionHeader } from "@/components/shared/SectionHeader";
import Card from "@/components/ui/Card";

const data = [
  {
    title: "Send Instant Alert",
    description: "Send immediate notification to all users",
    icon: "sent" as IconName,
  },
  {
    title: "Promotion Campaign",
    description: "Create targeted promotional announcement",
    icon: "gift" as IconName,
  },
  {
    title: "Maintenance Notice",
    description: "Schedule maintenance announcement",
    icon: "configuration" as IconName,
  },
];

const QuickAction = () => {
  return (
    <Card>
      <SectionHeader
        className="mb-4"
        title="Quick Action"
        titleClass="text-base"
      />

      <div className="grid gap-5 md:grid-cols-3">
        {data?.map((item, idx) => (
          <Card key={idx} className="bg-white/60 space-y-5">
            <div className="size-10 flex items-center justify-center bg-white text-dark rounded-full">
              <Icon name={item.icon} height={20} width={20} />
            </div>

            <div className="text-sm space-y-0.5">
              <h4 className="font-medium text-dark">{item.title}</h4>
              <p className="text-dark/70">{item.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
};

export default QuickAction;
