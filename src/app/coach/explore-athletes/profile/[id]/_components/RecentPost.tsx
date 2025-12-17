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
  {
    id: "4",
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
      <SectionHeader title="Recent Post" className="mb-5" />

      <div>
        {activityData.map((item, index) => (
          <div
            key={index}
            className="border-b border-[#E2F2F5] flex items-center gap-3 py-3.5 first:pt-0 last:pb-0 last:border-b-0"
          >
            <div className="flex-shrink-0">
              <Image
                width={36}
                height={36}
                src={item.avatarUrl || "/placeholder.svg"}
                alt={item.userName}
                className="size-9 rounded-full object-cover"
              />
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-dark text-base line-clamp-1">
                {item.description}
              </p>

              <div className="mt-0.5 text-[10px] text-dark/70">
                {item.timestamp}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
