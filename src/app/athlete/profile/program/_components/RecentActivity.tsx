"use client";

interface ActivityItem {
  id: string;
  icon: "clipboard" | "video" | "live-session";
  title: string;
  subtitle?: string;
  timestamp: string;
  points: number;
}

const IconComponent = ({ type }: { type: ActivityItem["icon"] }) => {
  switch (type) {
    case "clipboard":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="22"
          viewBox="0 0 19 22"
          fill="none"
        >
          <path
            d="M0.75 8.75C0.75 4.97876 0.75 3.09315 1.9948 1.92157C3.23959 0.75 5.24306 0.75 9.25 0.75H10.0227C13.2839 0.75 14.9145 0.75 16.0469 1.54784C16.3714 1.77643 16.6594 2.04752 16.9023 2.35289C17.75 3.41867 17.75 4.95336 17.75 8.02273V10.5682C17.75 13.5314 17.75 15.0129 17.2811 16.1962C16.5272 18.0986 14.9329 19.5991 12.9116 20.3086C11.6544 20.75 10.0802 20.75 6.93182 20.75C5.13275 20.75 4.23322 20.75 3.51478 20.4978C2.35979 20.0924 1.44875 19.2349 1.01796 18.1479C0.75 17.4717 0.75 16.6251 0.75 14.9318V8.75Z"
            stroke="#141B34"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M17.75 10.75C17.75 12.5909 16.2576 14.0833 14.4167 14.0833C13.7509 14.0833 12.966 13.9667 12.3186 14.1401C11.7435 14.2942 11.2942 14.7435 11.1401 15.3186C10.9667 15.966 11.0833 16.7509 11.0833 17.4167C11.0833 19.2576 9.59095 20.75 7.75 20.75"
            stroke="#141B34"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.4"
            d="M5.25 5.75H12.25"
            stroke="#141B34"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.4"
            d="M5.25 9.75H8.25"
            stroke="#141B34"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "video":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="18"
          viewBox="0 0 22 18"
          fill="none"
        >
          <path
            d="M0.75 7.75C0.75 4.45017 0.75 2.80025 1.77513 1.77513C2.80025 0.75 4.45017 0.75 7.75 0.75H8.75C12.0498 0.75 13.6997 0.75 14.7249 1.77513C15.75 2.80025 15.75 4.45017 15.75 7.75V9.75C15.75 13.0498 15.75 14.6997 14.7249 15.7249C13.6997 16.75 12.0498 16.75 8.75 16.75H7.75C4.45017 16.75 2.80025 16.75 1.77513 15.7249C0.75 14.6997 0.75 13.0498 0.75 9.75V7.75Z"
            stroke="#141B34"
            strokeWidth="1.5"
          />
          <path
            opacity="0.4"
            d="M15.75 5.65585L15.8759 5.55196C17.9917 3.80623 19.0496 2.93336 19.8998 3.35482C20.75 3.77628 20.75 5.17355 20.75 7.96808V9.53192C20.75 12.3265 20.75 13.7237 19.8998 14.1452C19.0496 14.5666 17.9917 13.6938 15.8759 11.948L15.75 11.8441"
            stroke="#141B34"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle
            opacity="0.4"
            cx="10.25"
            cy="6.25"
            r="1.5"
            stroke="#141B34"
            strokeWidth="1.5"
          />
        </svg>
      );
    case "live-session":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="20"
          viewBox="0 0 22 20"
          fill="none"
        >
          <path
            d="M16.75 0.75V5.75M4.75 0.75V5.75"
            stroke="#141B34"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.25 1.75V3.25M19.25 3.25V4.75M19.25 3.25H20.75M2.25 1.75V3.25M2.25 3.25V4.75M2.25 3.25H0.75"
            stroke="#141B34"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.4"
            d="M16.75 3.25L4.75 3.25"
            stroke="#141B34"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.02653 16.75H15.4735C16.711 16.75 17.3297 16.75 17.5856 16.4474C18.1663 15.7607 17.0538 14.8531 16.6479 14.3956C16.1905 13.8802 15.8559 13.75 15.1799 13.75H6.32013C5.64408 13.75 5.30953 13.8802 4.85214 14.3956C4.44617 14.8531 3.33375 15.7607 3.91444 16.4474C4.17026 16.75 4.78902 16.75 6.02653 16.75Z"
            stroke="#141B34"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.75 5.75V13.75M13.75 5.75V13.75"
            stroke="#141B34"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.4"
            d="M14.75 16.75V18.75M6.75 16.75V18.75"
            stroke="#141B34"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    default:
      return null;
  }
};

export default function RecentActivity() {
  const activities: ActivityItem[] = [
    {
      id: "1",
      icon: "video",
      title: 'Completed "Mental Drill Practice"',
      timestamp: "2 hours ago",
      points: 2,
    },
    {
      id: "2",
      icon: "clipboard",
      title: 'Quiz: "Basketball Fundamentals" - 92%',
      timestamp: "1 day ago",
      points: 5,
    },
    {
      id: "3",
      icon: "live-session",
      title: 'Attended Live Session: "Team Strategy"',
      timestamp: "2 days ago",
      points: 3,
    },
    {
      id: "4",
      icon: "live-session",
      title: "Daily Streak Bonus",
      timestamp: "2 days ago",
      points: 1,
    },
  ];

  return (
    <div className="w-full  mx-auto bg-[#ffffff99] p-5 rounded-2xl border border-white">
      {/* Header */}
      <h2 className="text-lg font-medium text-[#000] mb-7">Recent Activity</h2>

      {/* Activity List */}
      <div className="space-y-8 divide-y divide-white">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-6">
            {/* Icon Container */}
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full border bg-[#ffffff4d] border-white">
              <IconComponent type={activity.icon} />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-dark">{activity.title}</p>
              <p className="text-xs text-[#141b34b3] mt-1">
                {activity.timestamp}
              </p>
            </div>

            {/* Points Badge */}
            <div
              style={{
                borderRadius: "61px",
                border: "1px solid rgba(183, 183, 183, 0.10)",
                background:
                  "linear-gradient(180deg, rgba(183, 183, 183, 0.12) 0%, rgba(183, 183, 183, 0.15) 100%)",
              }}
              className="flex-shrink-0 px-3 py-1 bg-gray-100 rounded text-[10px] font-medium text-[#141b34b3]"
            >
              +{activity.points} pts
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
