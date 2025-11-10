"use client";

import Image from "next/image";

interface ActivityItem {
  id: string;
  userName: string;
  action: string;
  description: string;
  timestamp: string;
  avatarUrl: string;
}

const activityData: ActivityItem[] = [
  {
    id: "1",
    userName: "Sam Guy",
    action: "comments on your accounsments,",
    description: "\"it's very hel....",
    timestamp: "1 min ago",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    id: "2",
    userName: "Sam Guy",
    action: "reply on your comments,",
    description: '"Vary Nice Thing"',
    timestamp: "8 hour ago",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    id: "3",
    userName: "Sam Guy",
    action: "Tag on a comments,",
    description: "@Jechika",
    timestamp: "8 hour ago",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
];

export default function RecentActivity() {
  return (
    <div className="p-5 rounded-2xl border backdrop-blur-3xl mt-7 bg-[#ffffff57] border-white">
      {/* Header */}
      <h1 className="mb-4 text-lg font-medium  text-black">Recent Activity</h1>

      {/* Activity Items */}
      <div className="space-y-0">
        {activityData.map((item, index) => (
          <div key={item.id}>
            {/* Activity Item */}
            <div className="flex gap-4 my-2 py-0">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <Image
                  width={200}
                  height={200}
                  src={item.avatarUrl || "/placeholder.svg"}
                  alt={item.userName}
                  className="size-9 rounded-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="">
                  <span className="font-semibold text-nowrap text-[#0F1419] text-sm">
                    {item.userName} {" "}
                  </span>
                  <span className="text-[#536471] font-light text-sm">
                    {item.action} {" "}
                  </span>
                  <span className="mt-1 text-[#141b34b3] text-sm font-medium">
                    {item.description}
                  </span>
                </p>

                <div className="mt-1 text-gray-400 text-xs">
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
