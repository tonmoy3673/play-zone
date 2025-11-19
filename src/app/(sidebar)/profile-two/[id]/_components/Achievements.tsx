import Card from "@/components/ui/Card";
import Icon, { IconName } from "@/utils/icon";
import { SectionHeader } from "@/components/shared/SectionHeader";

const achievementsData = [
  {
    id: 1,
    icon: "check_check" as IconName,
    title: "Completed 5 Programs",
  },
  {
    id: 2,
    icon: "toffee" as IconName,
    title: "Top 3 on Leaderboard",
  },
  {
    id: 3,
    icon: "check_check" as IconName,
    title: "1-On-1s Completed: 8",
  },
  {
    id: 4,
    icon: "fire_emoji" as IconName,
    title: "10 Days Streak",
  },
];

export default function Achievements() {
  return (
    <Card>
      <SectionHeader title="Achievements" />

      <div className="space-y-2">
        {achievementsData.map((achievement) => (
          <Card
            key={achievement.id}
            className="bg-white/60 lg:rounded-2xl p-3 flex items-center gap-3 text-dark"
          >
            <div className="bg-white size-10 flex items-center justify-center rounded-xl">
              <Icon name={achievement.icon} height={20} width={20} />
            </div>
            <p className="text-sm font-medium">{achievement.title}</p>
          </Card>
        ))}
      </div>
    </Card>
  );
}
