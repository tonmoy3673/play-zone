import React from 'react';

const tasks = [
  {
    taskName: "Passing Drill Submission",
    athlete: {
      name: "Jason Martinez",
      avatar: "https://www.figma.com/api/mcp/asset/66e5b870-1313-4311-b29e-31433b1376f7",
    },
    type: "Video",
    completionDate: "Jun 5, 2025",
    completionTime: "2:45 PM",
    reviewer: {
      name: "Coach Michael",
      avatar: "https://www.figma.com/api/mcp/asset/912d3f0e-0fa4-486b-ab4e-32e773e41ccb",
    },
    rating: "4.5/5",
    topScore: false,
  },
  {
    taskName: "Passing Drill Submission",
    athlete: {
      name: "Sarah Johnson",
      avatar: "https://www.figma.com/api/mcp/asset/ee83c81b-7ac9-47b1-a601-bee51cdcefaa",
    },
    type: "Quiz",
    completionDate: "Jun 4, 2025",
    completionTime: "2:45 PM",
    reviewer: {
      name: "Coach Amanda",
      avatar: "https://www.figma.com/api/mcp/asset/e38cef94-777a-4d8e-b561-1f1500957ae7",
    },
    rating: "4.9/5",
    topScore: true,
  },
  {
    taskName: "Passing Drill Submission",
    athlete: {
      name: "Michael Thompson",
      avatar: "https://www.figma.com/api/mcp/asset/d4b0a7aa-ab8d-438f-b37d-9bbb3d0b6274",
    },
    type: "Report",
    completionDate: "Jun 3, 2025",
    completionTime: "2:45 PM",
    reviewer: {
      name: "Coach Michael",
      avatar: "https://www.figma.com/api/mcp/asset/5da43e7f-2eb2-4c98-b7c2-574736c9b67a",
    },
    rating: "4.7/5",
    topScore: false,
  },
  {
    taskName: "Passing Drill Submission",
    athlete: {
      name: "Carlos Rodriguez",
      avatar: "https://www.figma.com/api/mcp/asset/14fe07ad-d936-4324-9562-7b0fdebf735c",
    },
    type: "Video",
    completionDate: "Jun 2, 2025",
    completionTime: "2:45 PM",
    reviewer: {
      name: "Coach Amanda",
      avatar: "https://www.figma.com/api/mcp/asset/ee83c81b-7ac9-47b1-a601-bee51cdcefaa",
    },
    rating: "3.5/5",
    topScore: false,
  },
  {
    taskName: "Passing Drill Submission",
    athlete: {
      name: "Tyler Johnson",
      avatar: "https://www.figma.com/api/mcp/asset/6a23ec7a-49de-46df-9ef3-cb5e71611b65",
    },
    type: "Video",
    completionDate: "Jun 1, 2025",
    completionTime: "2:45 PM",
    reviewer: {
      name: "Coach Michael",
      avatar: "https://www.figma.com/api/mcp/asset/d4b0a7aa-ab8d-438f-b37d-9bbb3d0b6274",
    },
    rating: "4.5/5",
    topScore: false,
  },
];

const TaskRow = ({ task }) => (
  <tr className="border-b border-gray-200">
    <td className="px-6 py-4 text-xs font-medium text-gray-800">{task.taskName}</td>
    <td className="px-6 py-4">
      <div className="flex items-center gap-2">
        <img className="w-8 h-8 rounded-full" src={task.athlete.avatar} alt={task.athlete.name} />
        <span className="text-xs font-medium text-gray-800">{task.athlete.name}</span>
      </div>
    </td>
    <td className="px-6 py-4">
      <span
        className={`px-3 py-1.5 text-xs font-medium rounded-full ${
          task.type === "Video"
            ? "bg-green-100 text-green-800"
            : task.type === "Quiz"
            ? "bg-purple-100 text-purple-800"
            : "bg-red-100 text-red-800"
        }`}
      >
        {task.type}
      </span>
    </td>
    <td className="px-6 py-4 text-xs font-medium text-gray-800">
      <div>{task.completionDate}</div>
      <div className="text-gray-500">{task.completionTime}</div>
    </td>
    <td className="px-6 py-4">
      <div className="flex items-center gap-2">
        <img className="w-8 h-8 rounded-full" src={task.reviewer.avatar} alt={task.reviewer.name} />
        <div>
          <div className="text-xs font-medium text-gray-800">{task.reviewer.name}</div>
          <div className="flex items-center gap-1">
            <span className="text-xs text-gray-800">{task.rating}</span>
            {task.topScore && (
              <span className="px-2 py-0.5 text-xs font-medium text-blue-800 bg-blue-100 rounded-full">
                Top Score
              </span>
            )}
          </div>
        </div>
      </div>
    </td>
    <td className="px-6 py-4">
      <div className="flex items-center gap-2">
        <button className="p-2 bg-white rounded-full">
          <img src="https://www.figma.com/api/mcp/asset/20480d16-847a-4c99-904d-a986bba16c6e" alt="view" className="w-4 h-4" />
        </button>
        <button className="p-2 bg-white rounded-full">
          <img src="https://www.figma.com/api/mcp/asset/8298d7ec-5db7-49d5-855b-48a3c020681b" alt="comment" className="w-4 h-4" />
        </button>
      </div>
    </td>
  </tr>
);

export default function Tasks() {
  return (
    <div className="bg-white bg-opacity-30 rounded-3xl p-5">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-lg font-medium text-black">Recently Completed Tasks</h2>
        <div className="flex items-center gap-2">
          <button className="p-3 bg-white bg-opacity-60 rounded-xl">
            <img src="https://www.figma.com/api/mcp/asset/078065fc-d954-4972-b795-bc15bf2d3f05" alt="filter" className="w-6 h-6" />
          </button>
          <button className="flex items-center gap-4 px-5 py-3 bg-white bg-opacity-60 rounded-2xl">
            <span className="text-sm font-normal text-gray-800">Newest First</span>
            <img src="https://www.figma.com/api/mcp/asset/cefc58a5-ed33-4b96-894b-5e8a3078f1f1" alt="arrow" className="w-6 h-6 transform rotate-180" />
          </button>
        </div>
      </div>
      <div className="bg-white bg-opacity-70 rounded-2xl overflow-hidden">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task Name</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Athlete</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Completion Date</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reviewer & Rating</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <TaskRow key={index} task={task} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-5">
        <p className="text-xs font-normal text-gray-600">Showing 5 of 230 Completed tasks</p>
        <div className="flex items-center gap-1">
          <button className="p-2 bg-white bg-opacity-60 rounded-lg">
            <img src="https://www.figma.com/api/mcp/asset/35f0c1ab-44ab-4b26-8942-bb5149737bd9" alt="prev" className="w-5 h-5" />
          </button>
          <button className="px-3 py-2 text-xs font-medium text-white bg-blue-600 rounded-lg">1</button>
          <button className="px-3 py-2 text-xs font-medium text-gray-800 bg-white bg-opacity-60 rounded-lg">2</button>
          <button className="px-3 py-2 text-xs font-medium text-gray-800 bg-white bg-opacity-60 rounded-lg">3</button>
          <button className="p-2 bg-white bg-opacity-60 rounded-lg">
            <img src="https://www.figma.com/api/mcp/asset/2d50e74a-0479-4f80-ae6f-2c61a32ef1b6" alt="more" className="w-5 h-5" />
          </button>
          <button className="px-3 py-2 text-xs font-medium text-gray-800 bg-white bg-opacity-60 rounded-lg">15</button>
          <button className="p-2 bg-white bg-opacity-60 rounded-lg">
            <img src="https://www.figma.com/api/mcp/asset/e1521500-75b1-4af5-8632-7bb59e07381d" alt="next" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
