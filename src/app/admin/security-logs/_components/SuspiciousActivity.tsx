import Badge from "@/components/ui/Badge";
import Icon, { IconName } from "@/utils/icon";
import { SectionHeader } from "@/components/shared/SectionHeader";
import Card from "@/components/ui/Card";

const activityData = [
  {
    title: "Multiple failed login attempts",
    desc: "IP: 192.168.1.100  •  15 attempts in 5 minutes",
    statuses: ["Block IP", "Dismiss"],
    icon: "triangle_alert" as IconName,
  },
  {
    title: "Multiple failed login attempts",
    desc: "User: mike_thompson  •  Location: Unknown (VPN suspected)",
    statuses: ["Investigate", "Dismiss"],
    icon: "triangle_alert" as IconName,
  },
  {
    title: "Rapid API requests detected",
    desc: "User: mike_thompson  •  200 requests in 1 minute",
    statuses: ["Rate Limit", "Dismiss"],
    icon: "triangle_alert" as IconName,
  },
  {
    title: "Multiple failed login attempts",
    desc: "IP: 192.168.1.100  •  15 attempts in 5 minutes",
    statuses: ["Block IP", "Dismiss"],
    icon: "triangle_alert" as IconName,
  },
];

const SuspiciousActivity = () => {
  return (
    <Card>
      <SectionHeader title="Suspicious Activity Feed" className="mb-5" />

      <div className="space-y-2">
        {activityData.map((activity, idx) => (
          <Card key={idx} className="bg-white/60 ">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="flex items-center shrink-0 justify-center  size-10 rounded-full bg-white">
                  <Icon
                    name={activity.icon}
                    height={20}
                    width={20}
                    className="text-dark"
                  />
                </div>

                <div className="space-y-0.5 grid">
                  <span className="text-sm font-semibold text-dark">
                    {activity.title}
                  </span>
                  <span className="text-xs text-dark/70">{activity.desc}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {activity.statuses?.map((status, statusIdx) => (
                  <Badge
                    key={statusIdx}
                    variant={
                      status == "Block IP"
                        ? "warning"
                        : status == "Dismiss"
                        ? "danger"
                        : status == "Investigate"
                        ? "default"
                        : status == "Rate Limit"
                        ? "secondary"
                        : "dark"
                    }
                    className="h-7 text-xs"
                  >
                    {status}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
};

export default SuspiciousActivity;
