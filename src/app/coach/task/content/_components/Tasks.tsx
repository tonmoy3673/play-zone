import React from "react";

const tasks = [
  {
    coach: {
      name: "Bessie Cooper",
      role: "Moderator",
      avatar:
        "https://www.figma.com/api/mcp/asset/10f4b65d-7f90-41ee-a857-726fedc2e98a",
    },
    task: "Passing Drill Submission",
    athlete: {
      name: "Jason Martinez",
      avatar:
        "https://www.figma.com/api/mcp/asset/92883988-b1bc-456d-8e28-3c143bcb2949",
    },
    status: "In Progress",
    review: {
      comment: "“Cool great wor”...",
      rating: 4,
    },
  },
  {
    coach: {
      name: "Jacob Jones",
      role: "Content Manager",
      avatar:
        "https://www.figma.com/api/mcp/asset/10f4b65d-7f90-41ee-a857-726fedc2e98a",
    },
    task: "Footwork Training Video",
    athlete: {
      name: "Sarah Johnson",
      avatar:
        "https://www.figma.com/api/mcp/asset/b00f1484-3731-40f5-9e79-1672e8408b45",
    },
    status: "In Progress",
    review: {
      comment: "“Cool great wor”...",
      rating: 1,
    },
  },
  {
    coach: {
      name: "Darrell Steward",
      role: "Assistant Coach",
      avatar:
        "https://www.figma.com/api/mcp/asset/10f4b65d-7f90-41ee-a857-726fedc2e98a",
    },
    task: "Footwork Training Video",
    athlete: {
      name: "Michael Thompson",
      avatar:
        "https://www.figma.com/api/mcp/asset/72596cc4-1a6c-4430-b3a3-22c6a532e7eb",
    },
    status: "In Progress",
    review: {
      comment: "“Cool great wor”...",
      rating: 1,
    },
  },
  {
    coach: {
      name: "Jerome Bell",
      role: "Analyst",
      avatar:
        "https://www.figma.com/api/mcp/asset/10f4b65d-7f90-41ee-a857-726fedc2e98a",
    },
    task: "Footwork Training Video",
    athlete: {
      name: "Carlos Rodriguez",
      avatar:
        "https://www.figma.com/api/mcp/asset/3b875797-f4cd-4686-84eb-0f5642694aa3",
    },
    status: "Almost Done",
    review: {
      comment: "“Cool great wor”...",
      rating: 1,
    },
  },
  {
    coach: {
      name: "Savannah Nguyen",
      role: "Admin",
      avatar:
        "https://www.figma.com/api/mcp/asset/10f4b65d-7f90-41ee-a857-726fedc2e98a",
    },
    task: "Footwork Training Video",
    athlete: {
      name: "Tyler Johnson",
      avatar:
        "https://www.figma.com/api/mcp/asset/3ef6e38b-01ac-4b2e-9986-5408937b8626",
    },
    status: "Done",
    review: {
      comment: "“Cool great wor”...",
      rating: 1,
    },
  },
];

const getStatusChip = (status: string) => {
  switch (status) {
    case "In Progress":
      return (
        <div className="bg-gradient-to-b from-[rgba(235,158,15,0.12)] to-[rgba(235,158,15,0.15)] border border-[rgba(235,158,15,0.1)] rounded-full px-2.5 py-1.5">
          <p className="text-yellow-600 text-[10px]">{status}</p>
        </div>
      );
    case "Almost Done":
      return (
        <div className="bg-gradient-to-b from-[rgba(120,78,248,0.12)] to-[rgba(120,78,248,0.2)] border border-[rgba(120,78,248,0.1)] rounded-full px-2.5 py-1.5">
          <p className="text-[#784ef8] text-[10px]">{status}</p>
        </div>
      );
    case "Done":
      return (
        <div className="bg-gradient-to-b from-[rgba(0,226,128,0.05)] to-[rgba(0,124,70,0.12)] border border-[rgba(0,226,128,0.1)] rounded-full px-3 py-1.5">
          <p className="text-green-800 text-[10px]">{status}</p>
        </div>
      );
    default:
      return null;
  }
};

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.99984 1.33325L10.0532 5.51992L14.6665 6.20659L11.3332 9.43992L12.1198 14.0266L7.99984 11.8466L3.87984 14.0266L4.6665 9.43992L1.33317 6.20659L5.9465 5.51992L7.99984 1.33325Z"
      fill={filled ? "#F79009" : "#E0E0E0"}
    />
  </svg>
);

const Tasks = () => {
  return (
    <div className="bg-white/30 rounded-3xl p-5">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <button className="bg-white rounded-xl p-3 flex items-center gap-4">
            <span className="text-sm text-gray-600">All Staff</span>
            <img
              src="https://www.figma.com/api/mcp/asset/5cecef4e-ce2a-4be7-af93-b4e157fb1519"
              alt="arrow up"
              className="w-6 h-6"
            />
          </button>
          <button className="bg-white rounded-xl p-3 flex items-center gap-4">
            <span className="text-sm text-gray-600">All Task Types</span>
            <img
              src="https://www.figma.com/api/mcp/asset/5cecef4e-ce2a-4be7-af93-b4e157fb1519"
              alt="arrow up"
              className="w-6 h-6"
            />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-white rounded-xl p-3">
            <img
              src="https://www.figma.com/api/mcp/asset/3eaff097-bad3-430d-b88e-cefbd4eea68f"
              alt="filter"
              className="w-6 h-6"
            />
          </button>
          <button className="bg-white rounded-xl p-3">
            <img
              src="https://www.figma.com/api/mcp/asset/f44cec94-6fda-4837-a695-94c5ba88fbb2"
              alt="download"
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>
      <div className="bg-white/70 rounded-2xl">
        <table className="w-full">
          <thead className="border-b border-gray-200">
            <tr>
              <th className="p-4 text-left text-xs font-medium text-gray-500">
                Coach
              </th>
              <th className="p-4 text-left text-xs font-medium text-gray-500">
                Task
              </th>
              <th className="p-4 text-left text-xs font-medium text-gray-500">
                Athlete
              </th>
              <th className="p-4 text-left text-xs font-medium text-gray-500">
                Status
              </th>
              <th className="p-4 text-left text-xs font-medium text-gray-500">
                Review
              </th>
              <th className="p-4 text-left text-xs font-medium text-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 last:border-b-0"
              >
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <img
                      src={task.coach.avatar}
                      alt={task.coach.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <p className="text-xs font-semibold">{task.coach.name}</p>
                      <p className="text-[10px] text-gray-500">
                        {task.coach.role}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-4 text-xs font-medium">{task.task}</td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <img
                      src={task.athlete.avatar}
                      alt={task.athlete.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-xs">{task.athlete.name}</span>
                  </div>
                </td>
                <td className="p-4">{getStatusChip(task.status)}</td>
                <td className="p-4">
                  <div>
                    <p className="text-xs font-medium">{task.review.comment}</p>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} filled={i < task.review.rating} />
                      ))}
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <button className="bg-white rounded-full p-2">
                      <img
                        src="https://www.figma.com/api/mcp/asset/0ece6e9d-c227-49ac-bdfd-e336ae54c0e5"
                        alt="view"
                        className="w-4 h-4"
                      />
                    </button>
                    <button className="bg-white rounded-full p-2">
                      <img
                        src="https://www.figma.com/api/mcp/asset/0f1422f7-7ad5-4244-a90f-638695fb6bf2"
                        alt="comment"
                        className="w-4 h-4"
                      />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <p className="text-xs text-gray-600">
          Showing 5 of 230 Completed tasks
        </p>
        <div className="flex items-center gap-1">
          <button className="bg-white/60 rounded-md p-2">
            <img
              src="https://www.figma.com/api/mcp/asset/2a6be364-f400-40dc-bbeb-460be98efdba"
              alt="prev"
              className="w-5 h-5"
            />
          </button>
          <button className="bg-[#784ef8] text-white rounded-md px-3 py-2 text-xs">
            1
          </button>
          <button className="bg-white/60 rounded-md px-3 py-2 text-xs">
            2
          </button>
          <button className="bg-white/60 rounded-md px-3 py-2 text-xs">
            3
          </button>
          <button className="bg-white/60 rounded-md p-2">
            <img
              src="https://www.figma.com/api/mcp/asset/4833942c-8135-459b-8122-441c4552cb49"
              alt="more"
              className="w-5 h-5"
            />
          </button>
          <button className="bg-white/60 rounded-md px-3 py-2 text-xs">
            15
          </button>
          <button className="bg-white/60 rounded-md p-2">
            <img
              src="https://www.figma.com/api/mcp/asset/54c02200-7452-4430-bb4c-d30455337bfd"
              alt="next"
              className="w-5 h-5"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
