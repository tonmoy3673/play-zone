import React from 'react';

const reviews = [
  {
    coach: {
      name: "Bessie Cooper",
      role: "Moderator",
      avatar: "https://www.figma.com/api/mcp/asset/cb87aebb-727a-4942-b6c8-ea094da77e7c",
    },
    task: "Passing Drill Submission",
    athlete: {
      name: "Jason Martinez",
      avatar: "https://www.figma.com/api/mcp/asset/a0fd18f1-3444-4f32-bc6c-c3aacc7f0d73",
    },
    status: "In Progress",
    review: {
      text: "“Cool great wor”...",
      rating: 4,
    },
  },
  {
    coach: {
      name: "Jacob Jones",
      role: "Content Manager",
      avatar: "https://www.figma.com/api/mcp/asset/cb87aebb-727a-4942-b6c8-ea094da77e7c",
    },
    task: "Footwork Training Video",
    athlete: {
      name: "Sarah Johnson",
      avatar: "https://www.figma.com/api/mcp/asset/84cd010b-56f6-44e5-8b6f-5ff1ac4b3ed1",
    },
    status: "In Progress",
    review: {
      text: "“Cool great wor”...",
      rating: 2,
    },
  },
  {
    coach: {
      name: "Darrell Steward",
      role: "Assistant Coach",
      avatar: "https://www.figma.com/api/mcp/asset/cb87aebb-727a-4942-b6c8-ea094da77e7c",
    },
    task: "Footwork Training Video",
    athlete: {
      name: "Michael Thompson",
      avatar: "https://www.figma.com/api/mcp/asset/9a06a27d-1987-4138-9544-c4b9242404ff",
    },
    status: "In Progress",
    review: {
      text: "“Cool great wor”...",
      rating: 2,
    },
  },
  {
    coach: {
      name: "Jerome Bell",
      role: "Analyst",
      avatar: "https://www.figma.com/api/mcp/asset/cb87aebb-727a-4942-b6c8-ea094da77e7c",
    },
    task: "Footwork Training Video",
    athlete: {
      name: "Carlos Rodriguez",
      avatar: "https://www.figma.com/api/mcp/asset/52a8f8d5-6d77-41c5-afd5-b487c67640fa",
    },
    status: "Almost Done",
    review: {
      text: "“Cool great wor”...",
      rating: 2,
    },
  },
  {
    coach: {
      name: "Savannah Nguyen",
      role: "Admin",
      avatar: "https://www.figma.com/api/mcp/asset/cb87aebb-727a-4942-b6c8-ea094da77e7c",
    },
    task: "Footwork Training Video",
    athlete: {
      name: "Tyler Johnson",
      avatar: "https://www.figma.com/api/mcp/asset/ad2db93f-2118-48b1-80a7-55047d60e7d5",
    },
    status: "Done",
    review: {
      text: "“Cool great wor”...",
      rating: 2,
    },
  },
];

const StarRating = ({ rating }) => (
  <div className="flex">
    {[...Array(5)].map((_, i) => (
      <img
        key={i}
        src={
          i < rating
            ? "https://www.figma.com/api/mcp/asset/896c654f-9330-41c1-93e9-1e8592098b7c"
            : "https://www.figma.com/api/mcp/asset/fea2970b-53a0-4b04-a48c-dbffb8dec9aa"
        }
        alt="star"
        className="w-4 h-4"
      />
    ))}
  </div>
);

const ReviewRow = ({ review }) => (
  <tr className="border-b border-gray-200">
    <td className="px-4 py-2">
      <div className="flex items-center gap-2">
        <img className="w-8 h-8 rounded-full" src={review.coach.avatar} alt={review.coach.name} />
        <div>
          <div className="text-xs font-semibold text-gray-800">{review.coach.name}</div>
          <div className="text-xs text-gray-500">{review.coach.role}</div>
        </div>
      </div>
    </td>
    <td className="px-4 py-2 text-xs font-medium text-gray-800">{review.task}</td>
    <td className="px-4 py-2">
      <div className="flex items-center gap-2">
        <img className="w-8 h-8 rounded-full" src={review.athlete.avatar} alt={review.athlete.name} />
        <span className="text-xs text-gray-800">{review.athlete.name}</span>
      </div>
    </td>
    <td className="px-4 py-2">
      <span
        className={`px-2.5 py-1.5 text-xs font-medium rounded-full ${
          review.status === "In Progress"
            ? "bg-yellow-100 text-yellow-800"
            : review.status === "Almost Done"
            ? "bg-purple-100 text-purple-800"
            : review.status === "Done"
            ? "bg-green-100 text-green-800"
            : "bg-gray-100 text-gray-800"
        }`}
      >
        {review.status}
      </span>
    </td>
    <td className="px-4 py-2">
      <div>
        <div className="text-xs font-medium text-gray-800">{review.review.text}</div>
        <StarRating rating={review.review.rating} />
      </div>
    </td>
    <td className="px-4 py-2">
      <div className="flex items-center gap-2">
        <button className="p-2 bg-white rounded-full">
          <img src="https://www.figma.com/api/mcp/asset/68f6ab0d-c63b-40d4-b962-6eef04303372" alt="view" className="w-4 h-4" />
        </button>
        <button className="p-2 bg-white rounded-full">
          <img src="https://www.figma.com/api/mcp/asset/ca1edfc8-1850-49e4-b88a-a37072c857cc" alt="comment" className="w-4 h-4" />
        </button>
      </div>
    </td>
  </tr>
);

export default function Reviews() {
  return (
    <div className="bg-white bg-opacity-30 rounded-3xl p-5">
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-4 px-5 py-3 bg-white rounded-2xl">
            <span className="text-sm font-medium text-gray-600">All Staff</span>
            <img src="https://www.figma.com/api/mcp/asset/0dec001c-7fc3-46d3-ab72-b44f756e1260" alt="arrow" className="w-6 h-6 transform rotate-180" />
          </button>
          <button className="flex items-center gap-4 px-5 py-3 bg-white rounded-2xl">
            <span className="text-sm font-medium text-gray-600">All Task Types</span>
            <img src="https://www.figma.com/api/mcp/asset/0dec001c-7fc3-46d3-ab72-b44f756e1260" alt="arrow" className="w-6 h-6 transform rotate-180" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-3 bg-white rounded-xl">
            <img src="https://www.figma.com/api/mcp/asset/0f8017a1-6fac-4e3a-946e-30066309e47a" alt="filter" className="w-6 h-6" />
          </button>
          <button className="p-3 bg-white rounded-xl">
            <img src="https://www.figma.com/api/mcp/asset/bc5861cf-5fb7-4ed0-8a18-875f695563a4" alt="download" className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="bg-white bg-opacity-70 rounded-2xl overflow-hidden">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Coach</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Athlete</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Review</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review, index) => (
              <ReviewRow key={index} review={review} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-5">
        <p className="text-xs font-normal text-gray-600">Showing 5 of 230 Completed tasks</p>
        <div className="flex items-center gap-1">
          <button className="p-2 bg-white bg-opacity-60 rounded-lg">
            <img src="https://www.figma.com/api/mcp/asset/3f2c97bd-577d-4a5d-a491-e1a1d49cc5be" alt="prev" className="w-5 h-5" />
          </button>
          <button className="px-3 py-2 text-xs font-medium text-white bg-blue-600 rounded-lg">1</button>
          <button className="px-3 py-2 text-xs font-medium text-gray-800 bg-white bg-opacity-60 rounded-lg">2</button>
          <button className="px-3 py-2 text-xs font-medium text-gray-800 bg-white bg-opacity-60 rounded-lg">3</button>
          <button className="p-2 bg-white bg-opacity-60 rounded-lg">
            <img src="https://www.figma.com/api/mcp/asset/18c9d0c6-f362-4d4e-93e5-06a788a5d0b6" alt="more" className="w-5 h-5" />
          </button>
          <button className="px-3 py-2 text-xs font-medium text-gray-800 bg-white bg-opacity-60 rounded-lg">15</button>
          <button className="p-2 bg-white bg-opacity-60 rounded-lg">
            <img src="https://www.figma.com/api/mcp/asset/d82c7f4b-b1d9-4855-832d-0afed9a4d227" alt="next" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
