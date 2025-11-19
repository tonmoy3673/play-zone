import { SectionHeader } from "@/components/shared/SectionHeader";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Icon from "@/utils/icon";
import Image from "next/image";

type Status =
  | "Urgent"
  | "Bug Report"
  | "In Progress"
  | "Refund"
  | "New"
  | "Abuse Report"
  | "Technical";

const tickets: {
  statuses: Status[];
  title: string;
  description: string;
  user: {
    name: string;
    avatar: string;
  };
  plan: string;
  time: string;
}[] = [
  {
    statuses: ["Urgent", "Bug Report"],
    title: "App crashes when uploading workout videos",
    description: "Unable to upload videos larger than 50 MB. App Force Closes",
    user: {
      name: "Mike_Thompson",
      avatar:
        "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?it=crop&q=80&w=735",
    },
    plan: "Premium",
    time: "15m ago",
  },
  {
    statuses: ["In Progress", "Refund"],
    title: "Request refund for premium subscription",
    description: "Not satisfied with the features, requesting full refund",
    user: {
      name: "Mike_Thompson",
      avatar:
        "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?it=crop&q=80&w=735",
    },
    plan: "Premium",
    time: "30m ago",
  },
  {
    statuses: ["New", "Technical"],
    title: "Cannot access workout library",
    description: "getting error 404 when trying to browser workouts",
    user: {
      name: "Mike_Thompson",
      avatar:
        "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?it=crop&q=80&w=735",
    },
    plan: "Premium",
    time: "3h ago",
  },
  {
    statuses: ["New", "Abuse Report"],
    title: "Inappropriate content in community chat",
    description: "user posting offensive messages in group chat",
    user: {
      name: "Mike_Thompson",
      avatar:
        "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?it=crop&q=80&w=735",
    },
    plan: "Premium",
    time: "15m ago",
  },
  {
    statuses: ["In Progress", "Refund"],
    title: "App crashes when uploading workout videos",
    description: "Unable to upload videos larger than 50 MB. App Force Closes",
    user: {
      name: "Mike_Thompson",
      avatar:
        "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?it=crop&q=80&w=735",
    },
    plan: "Premium",
    time: "15m ago",
  },
];

const badgeVariants: Record<
  Status,
  "danger" | "secondary" | "warning" | "success" | "default" | "default"
> = {
  Urgent: "danger",
  "Bug Report": "secondary",
  "In Progress": "warning",
  Refund: "success",
  New: "default",
  "Abuse Report": "danger",
  Technical: "secondary",
};

const SupportTickets = () => {
  return (
    <Card>
      <SectionHeader title="Support Tickets" />

      <div className="space-y-2">
        {tickets?.map((ticket, idx) => (
          <Card key={idx} className="hover:bg-white/60 transition duration-300">
            <div className="flex items-center gap-2">
              {ticket.statuses.map((status) => (
                <Badge key={status} variant={badgeVariants[status]}>
                  {status}
                </Badge>
              ))}
            </div>

            <div className="space-y-1 mt-2.5 mb-4">
              <h4 className="text-lg font-medium text-dark">{ticket.title}</h4>
              <p className="text-xs text-dark/70 font-medium">
                {ticket.description}
              </p>
            </div>

            <div className="flex items-center gap-2 flex-wrap text-xs font-medium">
              <div className="flex items-center gap-2">
                <div className="rounded-full overflow-hidden relative size-6">
                  <Image
                    src={ticket.user.avatar}
                    alt={ticket.user.name}
                    className="size-full object-cover"
                    fill
                  />
                </div>
                <span className="text-xs font-medium text-dark">
                  {ticket.user.name} •
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <Icon
                  name="crown"
                  height={20}
                  width={20}
                  className="text-[#5C8FF7]"
                />
                <span className=" text-dark/70 primary-gradient-text">
                  Premium
                </span>
              </div>

              <span className="text-dark/70">• {ticket.time}</span>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
};

export default SupportTickets;
