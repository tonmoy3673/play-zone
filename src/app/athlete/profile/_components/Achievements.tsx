"use client";

export default function Achievements() {
  const achievementsData = [
    {
      id: 1,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="12"
          viewBox="0 0 18 12"
          fill="none"
        >
          <path
            d="M1.08334 7.52778L4.00001 10.5833L4.85336 9.68935M12.75 1.41667L7.69754 6.70974"
            stroke="#141B34"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.4"
            d="M5.25 7.52778L8.16667 10.5833L16.9167 1.41667"
            stroke="#141B34"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Completed 5 Programs",
      color: "text-gray-700",
    },
    {
      id: 2,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            opacity="0.4"
            d="M10 10V15"
            stroke="#141B34"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M9.99999 15C8.60529 15 7.39141 15.8434 6.76471 17.0875C6.46537 17.6817 6.8949 18.3333 7.46563 18.3333H12.5343C13.1051 18.3333 13.5346 17.6817 13.2353 17.0875C12.6086 15.8434 11.3947 15 9.99999 15Z"
            stroke="#141B34"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            opacity="0.4"
            d="M4.16666 4.16666H3.32058C2.49848 4.16666 2.08743 4.16666 1.83346 4.47543C1.5795 4.78421 1.65397 5.12997 1.80293 5.82149C2.08744 7.14237 2.70456 8.30283 3.54074 9.16666"
            stroke="#141B34"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            opacity="0.4"
            d="M15.8333 4.16666H16.6794C17.5015 4.16666 17.9126 4.16666 18.1665 4.47543C18.4205 4.78421 18.346 5.12997 18.1971 5.82149C17.9126 7.14237 17.2954 8.30283 16.4593 9.16666"
            stroke="#141B34"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M9.99999 9.99999C13.2217 9.99999 15.8333 7.40257 15.8333 4.1985C15.8333 4.11448 15.8315 4.03088 15.828 3.94773C15.7924 3.11504 15.7746 2.69869 15.2102 2.18268C14.6459 1.66666 14.0206 1.66666 12.77 1.66666H7.22995C5.97938 1.66666 5.35409 1.66666 4.78975 2.18268C4.22542 2.69869 4.20761 3.11504 4.17201 3.94773C4.16845 4.03088 4.16666 4.11448 4.16666 4.1985C4.16666 7.40257 6.77833 9.99999 9.99999 9.99999Z"
            stroke="#141B34"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Top 3 on Leaderboard",
      color: "text-yellow-600",
    },
    {
      id: 3,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="12"
          viewBox="0 0 18 12"
          fill="none"
        >
          <path
            d="M1.08334 7.52778L4.00001 10.5833L4.85336 9.68935M12.75 1.41667L7.69754 6.70974"
            stroke="#141B34"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.4"
            d="M5.25 7.52778L8.16667 10.5833L16.9167 1.41667"
            stroke="#141B34"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "1-On-1s Completed: 8",
      color: "text-gray-700",
    },
    {
      id: 4,
      icon: "🔥",
      title: "10 Days Streak",
      color: "text-orange-500",
    },
  ];

  return (
    <div className="p-5 rounded-2xl border backdrop-blur-3xl mt-5 bg-[#ffffff4d] border-white">
      <h2 className="text-lg font-medium text-[#000] mb-6">Achievements</h2>

      <div className="space-y-4">
        {achievementsData.map((achievement) => (
          <div
            key={achievement.id}
            className="bg-[#ffffff99] rounded-2xl p-4 flex items-center gap-4 "
          >
            <div className={`text-sm ${achievement.color} flex-shrink-0`}>
              {achievement.icon}
            </div>
            <p className="text-sm font-medium text-dark">{achievement.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
