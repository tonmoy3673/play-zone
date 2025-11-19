import Icon from "../../_components/icon";

const performers = [
  {
    rank: 1,
    name: "Michael Thompson",
    position: "Wide Receiver",
    program: "Elite Program",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
    rating: "4.9/5",
    tasksCompleted: 18,
    averageScore: "95%",
    badges: ["Top Effort", "Perfect Form"],
    topScore: true,
    borderColor: "border-[#68b0ea]",
  },
  {
    rank: 2,
    name: "Jason Martinez",
    position: "Quarterback",
    program: "Injury Recovery",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
    rating: "4.5/5",
    tasksCompleted: 15,
    averageScore: "89%",
    badges: ["Consistent"],
    topScore: false,
    borderColor: "border-[#717171]",
  },
  {
    rank: 3,
    name: "Carlos Rodrigues",
    position: "Running Back",
    program: "Advanced",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces",
    rating: "4.2/5",
    tasksCompleted: 14,
    averageScore: "87%",
    badges: ["Most Improved"],
    topScore: false,
    borderColor: "border-[#d6600b]",
  },
];

const getBadgeChip = (badge: string) => {
  switch (badge) {
    case "Top Effort":
      return (
        <div className="bg-gradient-to-b from-[rgba(255,0,51,0.12)] to-[rgba(255,0,51,0.15)] border border-[rgba(255,0,51,0.1)] rounded-full px-2 py-1">
          <p className="text-[#ff0033] text-[10px]">{badge}</p>
        </div>
      );
    case "Perfect Form":
      return (
        <div className="bg-gradient-to-b from-[rgba(69,127,243,0.12)] to-[rgba(69,127,243,0.15)] border border-[rgba(69,127,243,0.1)] rounded-full px-2 py-1">
          <p className="text-blue-600 text-[10px]">{badge}</p>
        </div>
      );
    case "Consistent":
      return (
        <div className="bg-gradient-to-b from-[rgba(69,127,243,0.12)] to-[rgba(69,127,243,0.15)] border border-[rgba(69,127,243,0.1)] rounded-full px-2 py-1">
          <p className="text-blue-600 text-[10px]">{badge}</p>
        </div>
      );
    case "Most Improved":
      return (
        <div className="bg-gradient-to-b from-[rgba(255,0,51,0.12)] to-[rgba(255,0,51,0.15)] border border-[rgba(255,0,51,0.1)] rounded-full px-2 py-1">
          <p className="text-[#ff0033] text-[10px]">{badge}</p>
        </div>
      );
    default:
      return null;
  }
};

const TopPerformers = () => {
  return (
    <div className="bg-white/30 rounded-3xl p-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-black">Top performers</h2>
        <button className="bg-white/60 rounded-xl p-3 flex items-center gap-4">
          <span className="text-sm">This Month</span>
          <Icon name="arrow_up_01" height={20} width={20} />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {performers.map((performer, index) => (
          <div
            key={index}
            className="bg-white/60 rounded-2xl p-5 flex flex-col items-center"
          >
            <div className="relative mb-8">
              <img
                src={performer.avatar}
                alt={performer.name}
                className={`w-14 h-14 rounded-full border-2 ${performer.borderColor}`}
              />
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#68b0ea] to-[#9dd0fd] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center border border-white">
                {performer.rank}
              </div>
            </div>
            <h3 className="font-medium text-center">{performer.name}</h3>
            <p className="text-xs text-gray-500 text-center mb-2">
              {performer.position} • {performer.program}
            </p>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="star_filled" height={16} width={16} />
              <span className="text-xs">{performer.rating}</span>
              {performer.topScore && (
                <div className="bg-gradient-to-b from-[rgba(69,127,243,0.12)] to-[rgba(69,127,243,0.15)] border border-[rgba(69,127,243,0.1)] rounded-full px-2 py-1">
                  <p className="text-blue-600 text-[10px]">Top Score</p>
                </div>
              )}
            </div>
            <hr className="w-full border-gray-200 mb-4" />
            <div className="w-full space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Tasks Completed:</span>
                <span className="font-medium">{performer.tasksCompleted}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Average Score:</span>
                <span className="font-medium">{performer.averageScore}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Badges Earned:</span>
                <div className="flex gap-1">
                  {performer.badges.map((badge, i) => (
                    <div key={i}>{getBadgeChip(badge)}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPerformers;
