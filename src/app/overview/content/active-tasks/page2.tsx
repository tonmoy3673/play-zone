import { AnimatedButton } from "@/components/ui/Button";
import {
  AlertCircle,
  Bell,
  Calendar,
  MoreHorizontal,
  Plus,
  Video,
} from "lucide-react";

export default function page() {
  const athletes = [
    "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=100",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100",
  ];

  const runningBehind = [
    {
      name: "Jason Martinez",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100",
    },
    {
      name: "Michael Thompson",
      img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=100",
    },
    {
      name: "David Chen",
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center my-5 px-5">
        <p className="text-3xl font-semibold">Active Tasks in Progress</p>
        <AnimatedButton
          style={{
            borderRadius: "40px",
            background:
              "linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%)",
          }}
          className="flex items-center justify-center gap-2 text-white font-normal px-5 py-4 rounded-full hover:bg-blue-700 "
        >
          <span>
            <Plus />
          </span>
          Create New Task
        </AnimatedButton>
      </div>
      <div className="w-full max-w-6xl mx-auto  backdrop-blur-xl rounded-2xl shadow-md p-6 flex flex-col gap-6">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <Video className="w-5 h-5 text-gray-700" />
              Passing Drill Submission
            </h2>
            <p className="text-sm text-gray-600">
              Video Submission • Football • QB Skills
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-red-100 text-red-600 text-sm font-medium px-3 py-1 rounded-full">
              Due Today
            </span>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Bell className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <MoreHorizontal className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Task Details */}
          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-gray-100 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-3">Task Details</h3>
            <p className="text-sm text-gray-600 mb-4">
              Submit a 2-minute video demonstrating the three-step and five-step
              drop passing drills as shown in the training video.
            </p>
            <div className="text-sm text-gray-700 mb-2 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span>
                <strong>Due Date:</strong> June 7, 2023 (11:59 PM)
              </span>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <img
                src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1"
                alt="Coach"
                className="w-8 h-8 rounded-full object-cover"
              />
              <p className="text-sm text-gray-700">
                <strong>Coach Michael Johnson</strong>
              </p>
            </div>
          </div>

          {/* Progress */}
          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-gray-100 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-3">Progress</h3>
            <p className="text-sm text-gray-600 mb-2">
              7 of 15 Athletes Submitted
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: "47%" }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mb-4">47%</p>

            <div className="flex -space-x-3 mb-3">
              {athletes.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt="athlete"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
              ))}
              <span className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-700 text-xs font-medium rounded-full border-2 border-white">
                +11
              </span>
            </div>
            <button className="text-sm font-medium text-blue-600 hover:underline mb-4">
              View all athletes
            </button>

            <div className="flex gap-2">
              <span className="bg-green-50 text-green-800 px-5 py-3 rounded-full text-sm font-medium">
                Completed{" "}
                <span className="bg-green-700 py-1 px-2 text-xs rounded-full text-white">
                  6
                </span>
              </span>
              <span className="bg-red-50 text-red-700 px-5 py-3 rounded-full text-sm font-medium">
                Pending{" "}
                <span className="bg-red-700 py-1 px-2 text-xs rounded-full text-white">
                  6
                </span>
              </span>
            </div>
          </div>

          {/* Running Behind */}
          <div className="bg-white/60 backdrop-blur-md rounded-2xl p-5 border border-gray-100 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-3">Running Behind</h3>
            <ul className="flex flex-col gap-3 mb-5">
              {runningBehind.map((athlete, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <img
                    src={athlete.img}
                    alt={athlete.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-sm text-gray-700">{athlete.name}</span>
                </li>
              ))}
            </ul>
            <div className="flex gap-3">
              <button className="flex items-center justify-center gap-2 text-sm font-medium bg-blue-50 text-blue-700 px-3 py-2 rounded-lg hover:bg-blue-100">
                <AlertCircle className="w-4 h-4" /> Send Reminder
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg">
                See all
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
