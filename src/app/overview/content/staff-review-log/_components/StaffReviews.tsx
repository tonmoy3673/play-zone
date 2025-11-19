"use client";

import { useState } from "react";
import Icon from "../../_components/icon";

// Badge configuration based on Figma design
const getBadgeStyles = (status: string) => {
  switch (status) {
    case "In Progress":
      return {
        gradient:
          "bg-gradient-to-b from-[rgba(235,158,15,0.12)] to-[rgba(235,158,15,0.15)]",
        border: "border border-[rgba(235,158,15,0.1)]",
        textClass: "", // Handled separately with gradient text
      };
    case "Almost Done":
      return {
        gradient:
          "bg-gradient-to-b from-[rgba(120,78,248,0.12)] to-[rgba(120,78,248,0.2)]",
        border: "border border-[rgba(120,78,248,0.1)]",
        textClass: "text-[#784ef8]",
      };
    case "Done":
      return {
        gradient:
          "bg-gradient-to-b from-[rgba(0,226,128,0.05)] to-[rgba(0,124,70,0.12)]",
        border: "border border-[rgba(0,226,128,0.1)]",
        textClass: "text-[#027a48]",
      };
    case "Not Started":
      return {
        gradient:
          "bg-gradient-to-b from-[rgba(183,183,183,0.12)] to-[rgba(183,183,183,0.15)]",
        border: "border border-[rgba(183,183,183,0.1)]",
        textClass: "text-[rgba(20,27,52,0.7)]",
      };
    default:
      return {
        gradient:
          "bg-gradient-to-b from-[rgba(183,183,183,0.12)] to-[rgba(183,183,183,0.15)]",
        border: "border border-[rgba(183,183,183,0.1)]",
        textClass: "text-[rgba(20,27,52,0.7)]",
      };
  }
};

// Sample data matching the Figma design
const staffReviews = [
  {
    id: 1,
    coach: {
      name: "Bessie Cooper",
      role: "Moderator",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces",
    },
    task: "Passing Drill Submission",
    athlete: {
      name: "Jason Martinez",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
    },
    status: "In Progress",
    review: "Cool great wor",
    rating: 4,
  },
  {
    id: 2,
    coach: {
      name: "Bessie Cooper",
      role: "Moderator",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces",
    },
    task: "Footwork Training Video",
    athlete: {
      name: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
    },
    status: "Almost Done",
    review: "Cool great wor",
    rating: 4,
  },
  {
    id: 3,
    coach: {
      name: "Bessie Cooper",
      role: "Moderator",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces",
    },
    task: "Passing Drill Submission",
    athlete: {
      name: "Michael Thompson",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
    },
    status: "Done",
    review: "Cool great wor",
    rating: 4,
  },
  {
    id: 4,
    coach: {
      name: "Bessie Cooper",
      role: "Moderator",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces",
    },
    task: "Footwork Training Video",
    athlete: {
      name: "Carlos Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces",
    },
    status: "Not Started",
    review: "Cool great wor",
    rating: 4,
  },
  {
    id: 5,
    coach: {
      name: "Bessie Cooper",
      role: "Moderator",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces",
    },
    task: "Passing Drill Submission",
    athlete: {
      name: "Tyler Johnson",
      avatar:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=faces",
    },
    status: "In Progress",
    review: "Cool great wor",
    rating: 4,
  },
];

export default function StaffReviews() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 15;
  const totalTasks = 230;

  return (
    <div className="bg-rgba(255, 255, 255, 0.30) backdrop-blur-3xl rounded-3xl p-5 border border-white my-5">
      {/* Header with Filters */}
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center gap-2">
          <button className="bg-white/60 hover:bg-white/80 rounded-xl px-4 py-5 flex items-center gap-2 transition-colors">
            <span className="text-sm font-medium text-dark">All Staff</span>
            <Icon name="arrow_up_01" height={24} width={24} />
          </button>
          <button className="bg-white/60 hover:bg-white/80 rounded-xl px-4 py-5 flex items-center gap-2 transition-colors">
            <span className="text-sm font-medium text-dark">
              All Task Types
            </span>
            <Icon name="arrow_up_01" height={24} width={24} />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-white/60 hover:bg-white/80 rounded-full px-4 py-5 transition-colors">
            <Icon name="filter_horizontal" height={24} width={24} />
          </button>
          <button className="bg-white/60 hover:bg-white/80 rounded-full px-4 py-5 transition-colors">
            <Icon name="download_04" height={24} width={24} />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-3xl">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-4 px-6 text-xs font-medium text-gray-500">
                Coach
              </th>
              <th className="text-left py-4 px-6 text-xs font-medium text-gray-500">
                Task
              </th>
              <th className="text-left py-4 px-6 text-xs font-medium text-gray-500">
                Athlete
              </th>
              <th className="text-left py-4 px-6 text-xs font-medium text-gray-500">
                Status
              </th>
              <th className="text-left py-4 px-6 text-xs font-medium text-gray-500">
                Review
              </th>
              <th className="text-left py-4 px-6 text-xs font-medium text-gray-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {staffReviews.map((review) => (
              <tr
                key={review.id}
                className="border-b border-gray-200 last:border-b-0 hover:bg-white/20 transition-colors"
              >
                {/* Coach */}
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <img
                      src={review.coach.avatar}
                      alt={review.coach.name}
                      className="w-9 h-9 rounded-full object-cover"
                    />
                    <div className="flex flex-col gap-0.5">
                      <p className="text-sm font-medium text-dark">
                        {review.coach.name}
                      </p>
                      <p className="text-xs font-normal text-paragraph-dark">
                        {review.coach.role}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Task */}
                <td className="py-4 px-4">
                  <p className="text-sm font-medium text-dark">{review.task}</p>
                </td>

                {/* Athlete */}
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <img
                      src={review.athlete.avatar}
                      alt={review.athlete.name}
                      className="w-9 h-9 rounded-full object-cover"
                    />
                    <span className="text-sm font-medium text-dark">
                      {review.athlete.name}
                    </span>
                  </div>
                </td>

                {/* Status */}
                <td className="py-4 px-4">
                  {(() => {
                    const badgeStyles = getBadgeStyles(review.status);
                    const isGradientText = review.status === "In Progress";
                    return (
                      <span
                        className={`inline-flex items-center justify-center h-6 px-[10px] py-[6px] rounded-[61px] text-[10px] font-medium ${badgeStyles.gradient} ${badgeStyles.border}`}
                      >
                        {isGradientText ? (
                          <span
                            className="bg-clip-text text-transparent bg-gradient-to-b from-[rgba(235,158,15,1)] to-[rgba(235,158,15,0.8)]"
                            style={{
                              WebkitTextFillColor: "transparent",
                            }}
                          >
                            {review.status}
                          </span>
                        ) : (
                          <span className={badgeStyles.textClass}>
                            {review.status}
                          </span>
                        )}
                      </span>
                    );
                  })()}
                </td>

                {/* Review */}
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-normal text-dark">
                      {review.review}
                    </p>
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Icon
                          key={star}
                          name={
                            star <= review.rating
                              ? "star_filled"
                              : "star_void_gold"
                          }
                          height={16}
                          width={16}
                          className="stroke-[#FF8C1A]"
                        />
                      ))}
                    </div>
                  </div>
                </td>

                {/* Actions */}
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 transition-colors">
                      <Icon
                        name="eye"
                        height={16}
                        width={16}
                        className="text-[#595F70]"
                      />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 transition-colors">
                      <Icon
                        name="message_02"
                        height={16}
                        width={16}
                        className="text-[#595F70]"
                      />
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
          Showing {staffReviews.length} of {totalTasks} Completed tasks.
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
