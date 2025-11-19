import Image from "next/image";
import Card from "@/components/ui/Card";
import { SectionHeader } from "@/components/shared/SectionHeader";

interface ActivityItem {
  id: string;
  userName: string;
  description: string;
  timestamp: string;
  avatarUrl: string;
}

const activityData: ActivityItem[] = [
  {
    id: "1",
    userName: "Sam Guy",
    description: "Recently posted a video tutorial",
    timestamp: "1 min ago",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    id: "2",
    userName: "Sam Guy",
    description: "Recently Created a program",
    timestamp: "1 min ago",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    id: "3",
    userName: "Sam Guy",
    description: "Recently Created a program",
    timestamp: "1 min ago",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
];

export default function RecentActivity() {
  return (
    <Card className="bg-white/60">
      <SectionHeader title="Recent Activity" />

      <div className="space-y-0">
        {activityData.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 my-2 border-b border-[#E2F2F5] py-3 first:pt-0 last:pb-0"
          >
            <Image
              width={48}
              height={48}
              src={item.avatarUrl || "/placeholder.svg"}
              alt={item.userName}
              className="size-12 shrink-0 rounded-full object-cover"
            />

            <div className="flex-1">
              <p className="text-dark text-sm font-medium">
                {item.description}
              </p>

              <div className="mt-1 text-xs text-dark/70">{item.timestamp}</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
