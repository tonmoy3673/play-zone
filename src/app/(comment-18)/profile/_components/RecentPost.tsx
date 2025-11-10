"use client";

import Image from "next/image";

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
    <div className="p-5 rounded-2xl border backdrop-blur-3xl mt-7 bg-[#ffffff57] border-white">
      {/* Header */}
      <h1 className="mb-4 text-lg font-medium  text-black">Recent Post</h1>

      {/* Activity Items */}
      <div className="space-y-0">
        {activityData.map((item, index) => (
          <div key={item.id}>
            {/* Activity Item */}
            <div className="flex gap-4 my-2 py-0">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <Image
                  width={36}
                  height={36}
                  src={item.avatarUrl || "/placeholder.svg"}
                  alt={item.userName}
                  className="size-9 rounded-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-black text-base">{item.description}</p>

                <div className="mt-0.5 text-[10px] text-black/60">
                  {item.timestamp}
                </div>
              </div>
            </div>

            {/* Divider - not on last item */}
            {index < activityData.length - 1 && (
              <div
                className="h-px"
                style={{
                  backgroundColor: "#E2F2F5",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
