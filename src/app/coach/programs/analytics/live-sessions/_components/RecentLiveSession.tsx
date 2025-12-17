import { SectionHeader } from "@/components/shared/SectionHeader";
import Badge from "@/components/ui/Badge";
import { AnimatedButton } from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Icon, { IconName } from "@/utils/icon";

const recentSessions = [
  {
    title: "QB Film Breakdown - Week 2",
    icon: "american_football" as IconName,
    date: "Jan 15, 2025 • 7:00 PM",
    rating: 4.6,
    status: "Completed",
    attendees: 32,
  },
  {
    title: "Pocket Presence Training",
    icon: "workout_sport" as IconName,
    date: "Jan 15, 2025 • 7:00 PM",
    rating: 3,
    status: "Completed",
    attendees: 0,
  },
  {
    title: "Red Zone Strategies",
    icon: "american_football" as IconName,
    date: "Jan 15, 2025 • 7:00 PM",
    rating: 3,
    status: "Upcoming",
    attendees: 0,
  },
];

const RecentLiveSession = () => {
  return (
    <Card>
      <SectionHeader title="Recent Live Sessions" />

      <div className="space-y-2">
        {recentSessions.map((session, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl  border border-white bg-white/60"
          >
            <div className="flex items-start gap-3">
              <div className="flex items-center justify-center size-10 rounded-full shadow">
                <Icon
                  name={session.icon}
                  height={20}
                  width={20}
                  className="text-dark"
                />
              </div>

              <div className="space-y-4 flex-1">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="space-y-1.5">
                    <h4 className="font-semibold text-dark text-sm">
                      {session.title}
                    </h4>
                    <p className="text-xs text-dark/70">{session.date}</p>
                  </div>

                  <div className="flex items-center flex-col justify-center gap-2">
                    {
                      <Badge
                        variant={
                          session?.status === "Completed"
                            ? "default"
                            : "secondary"
                        }
                      >
                        {session.status}
                      </Badge>
                    }
                    <span className="text-dark font-medium text-xs">
                      {session.attendees} Attendees
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="star" height={20} width={20} />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-dark">
                    {session.rating}
                  </span>
                </div>

                {session.status === "Upcoming" && (
                  <AnimatedButton className="flex items-center gap-1.5 px-3 py-2 h-8 rounded-lg text-white text-xs font-medium bg-primary-gradient">
                    Schedule Session
                  </AnimatedButton>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default RecentLiveSession;
