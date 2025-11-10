import React from 'react';

const performers = [
  {
    rank: 1,
    name: "Michael Thompson",
    position: "Wide Receiver • Elite Program",
    avatar: "https://www.figma.com/api/mcp/asset/05506783-3642-43ac-b522-65b2d84c08c8",
    rating: "4.9/5",
    topScore: true,
    tasksCompleted: 18,
    averageScore: "95%",
    badges: ["Top Effort", "Perfect Form"],
    borderColor: "border-blue-400",
    rankBg: "from-blue-400 via-blue-300 to-blue-400",
  },
  {
    rank: 2,
    name: "Jason Martinez",
    position: "Quarterback • Injury Recovery",
    avatar: "https://www.figma.com/api/mcp/asset/26dbcc3b-fa94-44d3-aa8c-eba3ca4e694c",
    rating: "4.5/5",
    topScore: false,
    tasksCompleted: 15,
    averageScore: "89%",
    badges: ["Consistent"],
    borderColor: "border-gray-400",
    rankBg: "bg-gray-300",
  },
  {
    rank: 3,
    name: "Carlos Rodrigues",
    position: "Running Back • Advanced",
    avatar: "https://www.figma.com/api/mcp/asset/c0d78581-4757-49f0-a646-9fd15547f7e1",
    rating: "4.2/5",
    topScore: false,
    tasksCompleted: 14,
    averageScore: "87%",
    badges: ["Most Improved"],
    borderColor: "border-yellow-600",
    rankBg: "bg-yellow-600",
  },
];

const Badge = ({ text }) => (
  <div className="px-2 py-1 text-xs font-medium bg-gray-100 rounded-full text-gray-800">
    {text}
  </div>
);

const PerformerCard = ({ performer }) => (
  <div className="bg-white bg-opacity-60 rounded-2xl p-5 w-72">
    <div className="flex flex-col items-center">
      <div className={`relative mb-2`}>
        <img
          className={`w-14 h-14 rounded-full border-2 ${performer.borderColor}`}
          src={performer.avatar}
          alt={performer.name}
        />
        <div
          className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-semibold border border-white bg-gradient-to-r ${performer.rankBg}`}
        >
          {performer.rank}
        </div>
      </div>
      <div className="text-center">
        <div className="text-base font-medium text-gray-800">{performer.name}</div>
        <div className="text-xs text-gray-500">{performer.position}</div>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <span className="text-xs text-gray-800">{performer.rating}</span>
        {performer.topScore && (
          <div className="px-2 py-0.5 text-xs font-medium text-blue-800 bg-blue-100 rounded-full">
            Top Score
          </div>
        )}
      </div>
    </div>
    <hr className="my-4" />
    <div className="space-y-3">
      <div className="flex justify-between text-xs">
        <span className="text-gray-500">Tasks Completed:</span>
        <span className="font-medium text-gray-800">{performer.tasksCompleted}</span>
      </div>
      <div className="flex justify-between text-xs">
        <span className="text-gray-500">Average Score:</span>
        <span className="font-medium text-gray-800">{performer.averageScore}</span>
      </div>
      <div className="flex justify-between text-xs">
        <span className="text-gray-500">Badges Earned:</span>
        <div className="flex gap-1">
          {performer.badges.map((badge, index) => (
            <Badge key={index} text={badge} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default function Performers() {
  return (
    <div className="bg-white bg-opacity-30 rounded-3xl p-5">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-lg font-medium text-black">Top performers</h2>
        <button className="flex items-center gap-4 px-5 py-3 bg-white bg-opacity-60 rounded-2xl">
          <span className="text-sm font-normal text-gray-800">This Month</span>
          <img
            src="https://www.figma.com/api/mcp/asset/81e71d09-7e24-4287-9ab5-9c7a3b7bc8f1"
            alt="arrow"
            className="w-6 h-6 transform rotate-180"
          />
        </button>
      </div>
      <div className="flex gap-5">
        {performers.map((performer) => (
          <PerformerCard key={performer.rank} performer={performer} />
        ))}
      </div>
    </div>
  );
}
