"use client";

import { useState } from "react";
import Icon from "../../_components/icon";

// Sample data matching the Figma design
const completedTasks = [
  {
    id: 1,
    taskName: "Passing Drill Submission",
    athlete: {
      name: "Jason Martinez",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
    },
    type: "Video",
    typeColor:
      "bg-gradient-to-b from-[rgba(0,226,128,0.05)] to-[rgba(0,226,128,0.12)] border border-[rgba(0,226,128,0.1)] text-[#027a48]",
    completionDate: "Jun 5, 2025",
    completionTime: "2:45 PM",
    reviewer: {
      name: "Coach Michael",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces",
    },
    rating: 4.5,
    topScore: false,
  },
  {
    id: 2,
    taskName: "Passing Drill Submission",
    athlete: {
      name: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
    },
    type: "Quiz",
    typeColor:
      "bg-gradient-to-b from-[rgba(120,78,248,0.05)] to-[rgba(120,78,248,0.12)] border border-[rgba(120,78,248,0.1)] text-[#784ef8]",
    completionDate: "Jun 4, 2025",
    completionTime: "2:45 PM",
    reviewer: {
      name: "Coach Amanda",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
    },
    rating: 4.9,
    topScore: true,
  },
  {
    id: 3,
    taskName: "Passing Drill Submission",
    athlete: {
      name: "Michael Thompson",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
    },
    type: "Report",
    typeColor:
      "bg-gradient-to-b from-[rgba(255,0,51,0.05)] to-[rgba(255,0,51,0.12)] border border-[rgba(255,0,51,0.1)] text-[#ff0033]",
    completionDate: "Jun 3, 2025",
    completionTime: "2:45 PM",
    reviewer: {
      name: "Coach Michael",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces",
    },
    rating: 4.7,
    topScore: false,
  },
  {
    id: 4,
    taskName: "Passing Drill Submission",
    athlete: {
      name: "Carlos Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces",
    },
    type: "Video",
    typeColor:
      "bg-gradient-to-b from-[rgba(0,226,128,0.05)] to-[rgba(0,226,128,0.12)] border border-[rgba(0,226,128,0.1)] text-[#027a48]",
    completionDate: "Jun 2, 2025",
    completionTime: "2:45 PM",
    reviewer: {
      name: "Coach Amanda",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
    },
    rating: 3.5,
    topScore: false,
  },
  {
    id: 5,
    taskName: "Passing Drill Submission",
    athlete: {
      name: "Tyler Johnson",
      avatar:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=faces",
    },
    type: "Video",
    typeColor:
      "bg-gradient-to-b from-[rgba(0,226,128,0.05)] to-[rgba(0,226,128,0.12)] border border-[rgba(0,226,128,0.1)] text-[#027a48]",
    completionDate: "Jun 1, 2025",
    completionTime: "2:45 PM",
    reviewer: {
      name: "Coach Michael",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces",
    },
    rating: 4.5,
    topScore: false,
  },
];

export default function RecentlyCompletedTasks() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 15;
  const totalTasks = 230;

  return (
    <div className="bg-rgba(255, 255, 255, 0.30) backdrop-blur-3xl rounded-3xl p-5 border border-white/80 my-5">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-lg font-medium text-dark">
          Recently Completed Tasks
        </h2>
        <div className="flex items-center gap-2">
          <button className="bg-white/60 hover:bg-white/80 rounded-full p-2.5 transition-colors">
            <Icon name="filter_horizontal" height={24} width={24} />
          </button>
          <button className="bg-white/60 hover:bg-white/80 rounded-xl px-4 py-2.5 flex items-center gap-2 transition-colors">
            <span className="text-sm font-medium text-dark">Newest First</span>
            <Icon name="arrow_up_01" height={24} width={24} />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-3xl">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-4 px-6 text-xs font-medium text-gray-500">
                Task Name
              </th>
              <th className="text-left py-4 px-6 text-xs font-medium text-gray-500">
                Athlete
              </th>
              <th className="text-left py-4 px-6 text-xs font-medium text-gray-500">
                Type
              </th>
              <th className="text-left py-4 px-6 text-xs font-medium text-gray-500">
                Completion Date
              </th>
              <th className="text-left py-4 px-6 text-xs font-medium text-gray-500">
                Reviewer & Rating
              </th>
              <th className="text-left py-4 px-6 text-xs font-medium text-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {completedTasks.map((task) => (
              <tr
                key={task.id}
                className="border-b border-gray-200 last:border-b-0 hover:bg-white/20 transition-colors"
              >
                {/* Task Name */}
                <td className="py-4 px-6">
                  <p className="text-sm font-medium text-dark-100">
                    {task.taskName}
                  </p>
                </td>

                {/* Athlete */}
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <img
                      src={task.athlete.avatar}
                      alt={task.athlete.name}
                      className="w-9 h-9 rounded-full object-cover"
                    />
                    <span className="text-sm font-medium text-dark">
                      {task.athlete.name}
                    </span>
                  </div>
                </td>

                {/* Type */}
                <td className="py-4 px-6">
                  <span
                    className={`inline-flex items-center justify-center h-6 px-3 rounded-full text-xs font-medium border ${task.typeColor}`}
                  >
                    {task.type}
                  </span>
                </td>

                {/* Completion Date */}
                <td className="py-4 px-6">
                  <div className="flex flex-col gap-0.5">
                    <p className="text-sm font-medium text-dark">
                      {task.completionDate}
                    </p>
                    <p className="text-xs font-normal text-paragraph-dark">
                      {task.completionTime}
                    </p>
                  </div>
                </td>

                {/* Reviewer & Rating */}
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <img
                      src={task.reviewer.avatar}
                      alt={task.reviewer.name}
                      className="w-9 h-9 rounded-full object-cover"
                    />
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-medium text-dark">
                        {task.reviewer.name}
                      </p>
                      <div className="flex items-center gap-1">
                        <Icon name="star_filled" height={16} width={16} />
                        <span className="text-xs font-medium text-dark">
                          {task.rating}/5
                        </span>
                        {task.topScore && (
                          <span className="bg-gradient-to-b from-[rgba(69,127,243,0.12)] to-[rgba(69,127,243,0.15)] border border-[rgba(69,127,243,0.1)] text-[#437EF7] rounded-full px-2 py-0.5 text-[10px] font-medium ml-1">
                            Top Score
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </td>

                {/* Actions */}
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 transition-colors">
                      <Icon name="eye" height={16} width={16} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 transition-colors">
                      <Icon name="message_02" height={16} width={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <div className="flex justify-between items-center mt-5 pt-4 border-t border-gray-200">
        <p className="text-sm font-normal text-paragraph-dark">
          Showing {completedTasks.length} of {totalTasks} Completed tasks.
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/60 hover:bg-white/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Icon name="arrow_left_01" height={20} width={20} />
          </button>
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                currentPage === page
                  ? "bg-[#437EF7] text-white"
                  : "bg-white/60 hover:bg-white/80 text-dark"
              }`}
            >
              {page}
            </button>
          ))}
          <span className="px-2 text-sm text-gray-400">
            <Icon name="more_horizontal" height={20} width={20} />
          </span>
          <button
            onClick={() => setCurrentPage(totalPages)}
            className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
              currentPage === totalPages
                ? "bg-[#437EF7] text-white"
                : "bg-white/60 hover:bg-white/80 text-dark"
            }`}
          >
            {totalPages}
          </button>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(totalPages, prev + 1))
            }
            disabled={currentPage === totalPages}
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/60 hover:bg-white/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Icon name="arrow_right_01" height={20} width={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
