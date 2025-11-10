import {
  CheckCheck,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Clock,
  Eye,
  Hourglass,
  MessageSquare,
  MoreHorizontal,
  Search,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
const Page = () => {
  const programs = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1558451507-fa1a9432efb4?w=500",
      title: "Shoulder Rehab Exercises",
      tag: "New",
      tagColor: "bg-blue-100 text-blue-700",
      description:
        "Custom throwing mechanics to avoid re-injury while maintaining form.",
      created: "Yesterday, 4:15 PM",
      assignedTo: {
        name: "Jason M.",
        avatar:
          "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100",
      },
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500",
      title: "Knee Strengthening Program",
      tag: "Updated",
      tagColor: "bg-green-100 text-green-700",
      description:
        "Comprehensive exercises to build knee stability and prevent future injuries.",
      created: "Today, 9:30 AM",
      assignedTo: {
        name: "Sarah K.",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
      },
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500",
      title: "Core Stability Training",
      tag: "Popular",
      tagColor: "bg-purple-100 text-purple-700",
      description:
        "Build core strength to improve overall athletic performance and prevent back pain.",
      created: "2 days ago, 2:45 PM",
      assignedTo: {
        name: "Mike R.",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
      },
    },
  ];
  const tasks = [
    {
      name: "Passing Drill Submission",
      athlete: "Jason Martinez",
      type: "Video",
      typeColor: "bg-green-100 text-green-600",
      outline: "bg-green-100",
      date: "Jun 5, 2025",
      time: "2:45 PM",
      progress: 60,
      status: "In Progress",
      statusColor: "bg-yellow-100 text-yellow-600",
      img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=100",
    },
    {
      name: "Footwork Training Video",
      athlete: "Robert Fox",
      type: "Quiz",
      typeColor: "bg-purple-100 text-purple-600",
      date: "Jun 4, 2025",
      time: "2:45 PM",
      progress: 50,
      status: "In Progress",
      statusColor: "bg-yellow-100 text-yellow-600",
      img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100",
    },
    {
      name: "Tactical Analysis Quiz",
      athlete: "Bessie Cooper",
      type: "Rehab",
      typeColor: "bg-red-100 text-red-600",
      date: "Jun 3, 2025",
      time: "2:45 PM",
      progress: 40,
      status: "In Progress",
      statusColor: "bg-yellow-100 text-yellow-600",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100",
    },
    {
      name: "Conditioning Log",
      athlete: "Darlene Robertson",
      type: "Study",
      typeColor: "bg-blue-100 text-blue-600",
      date: "Jun 2, 2025",
      time: "2:45 PM",
      progress: 96,
      status: "Almost Done",
      statusColor: "bg-purple-100 text-purple-600",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100",
    },
    {
      name: "Shoulder Rehab Exercises",
      athlete: "Ronald Richards",
      type: "Training Plan",
      typeColor: "bg-emerald-100 text-emerald-600",
      date: "Jun 1, 2025",
      time: "2:45 PM",
      progress: 100,
      status: "Done",
      statusColor: "bg-green-100 text-green-600",
      img: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=100",
    },
    {
      name: "Advanced Route Running",
      athlete: "Savannah Nguyen",
      type: "Video",
      typeColor: "bg-green-100 text-green-600",
      date: "Jun 1, 2025",
      time: "2:45 PM",
      progress: 0,
      status: "Not Started",
      statusColor: "bg-gray-100 text-gray-500",
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100",
    },
    {
      name: "Defensive Playbook Study",
      athlete: "Wade Warren",
      type: "Video",
      typeColor: "bg-green-100 text-green-600",
      date: "Jun 1, 2025",
      time: "2:45 PM",
      progress: 0,
      status: "Not Started",
      statusColor: "bg-gray-100 text-gray-500",
      img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100",
    },
  ];

  return (
    <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">All Tasks</h1>
          <p className="text-gray-500 mt-1">
            Overview of tasks that have been completed by athletes, allowing for
            easier performance tracking.
          </p>
        </div>
        <button className="bg-[#437EF7] hover:bg-blue-600 text-white font-semibold py-2.5 px-5 rounded-xl flex items-center gap-2 mt-4 sm:mt-0 transition-colors">
          {/* ------------------ */}
          <span>Create New Task</span>
        </button>
      </header>

      <section className="flex justify-center gap-5 mb-8 w-full mx-auto">
        {/* Total Tasks */}
        <div className="backdrop-blur-2xl p-5 rounded-2xl shadow-sm">
          <div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm font-medium">
                Total Tasks
              </span>
              <div className="rounded-full">
                <span className="bg-white h-10 w-10 rounded-full flex items-center justify-center">
                  <ClipboardList className="text-gray-600 h-5 w-5" />
                </span>
              </div>
            </div>
            <p className="text-4xl font-semibold mt-16 mb-3 text-slate-900">
              48
            </p>
            <div className="flex gap-1 items-center text-sm text-green-600 font-medium">
              <TrendingUp className="h-3 w-3" />
              <span>12% increase</span>
              <span className="text-gray-400 font-normal">from last month</span>
            </div>
          </div>
        </div>

        {/* Complete Tasks */}
        <div className="backdrop-blur-2xl p-5 rounded-2xl shadow-sm">
          <div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm font-medium">
                Complete Tasks
              </span>
              <div className="rounded-full">
                <span className="bg-white h-10 w-10 rounded-full flex items-center justify-center">
                  <CheckCheck className="text-gray-600 h-5 w-5" />
                </span>
              </div>
            </div>
            <p className="text-4xl font-semibold mt-16 mb-3 text-slate-900">
              23
            </p>
            <div className="flex gap-1 items-center text-sm text-green-600 font-medium">
              <TrendingUp className="h-3 w-3" />
              <span>3% increase</span>
              <span className="text-gray-400 font-normal">from last month</span>
            </div>
          </div>
        </div>

        {/* In Progress */}
        <div className="backdrop-blur-2xl p-5 rounded-2xl shadow-sm">
          <div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm font-medium">
                In Progress
              </span>
              <div className="rounded-full">
                <span className="bg-white h-10 w-10 rounded-full flex items-center justify-center">
                  <Hourglass className="text-gray-600 h-5 w-5" />
                </span>
              </div>
            </div>
            <p className="text-4xl font-semibold mt-16 mb-3 text-slate-900">
              15
            </p>
            <div className="flex gap-1 items-center text-sm text-green-600 font-medium">
              <TrendingUp className="h-3 w-3" />
              <span>3% increase</span>
              <span className="text-gray-400 font-normal">from last month</span>
            </div>
          </div>
        </div>

        {/* Overdue */}
        <div className="backdrop-blur-2xl p-5 rounded-2xl shadow-sm">
          <div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm font-medium">Overdue</span>
              <div className="rounded-full">
                <span className="bg-white h-10 w-10 rounded-full flex items-center justify-center">
                  <Clock className="text-gray-600 h-5 w-5" />
                </span>
              </div>
            </div>
            <p className="text-4xl font-semibold mt-16 mb-3 text-slate-900">
              4
            </p>
            <div className="flex gap-1 items-center text-sm text-red-600 font-medium">
              <TrendingDown className="h-3 w-3" />
              <span>5% increase</span>
              <span className="text-gray-400 font-normal">from last month</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/60 backdrop-blur-sm rounded-2xl  p-6">
        <div className="bg-white/90 backdrop-blur-2xl flex justify-between items-center mb-4 p-2">
          <h2 className="text-xl font-semibold text-gray-900">Current Tasks</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search completed tasks.."
              className="w-full sm:w-64 bg-white/50  rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden p-4">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-gray-500 text-left">
                <th className="py-3 px-4 font-medium">Task & Athlete</th>
                <th className="py-3 px-4 font-medium">Type</th>
                <th className="py-3 px-4 font-medium">Due Date</th>
                <th className="py-3 px-4 font-medium">Progress</th>
                <th className="py-3 px-4 font-medium">Status</th>
                <th className="py-3 px-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={index} className=" hover:bg-gray-50 transition">
                  {/* Task & Athlete */}
                  <td className="py-4 px-4 flex items-center gap-3">
                    <img
                      src={task.img}
                      alt={task.athlete}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">{task.name}</p>
                      <p className="text-gray-500">{task.athlete}</p>
                    </div>
                  </td>

                  {/* Type */}
                  <td className="py-4 px-4">
                    <span
                      className={`px-3 py-1.5 rounded-full text-xs font-medium ${task.typeColor}`}
                    >
                      {task.type}
                    </span>
                  </td>

                  {/* Due Date */}
                  <td className="py-4 px-4">
                    <p className="font-medium text-gray-700">{task.date}</p>
                    <p className="text-xs text-gray-400">{task.time}</p>
                  </td>

                  {/* Progress */}
                  <td className="py-4 px-4 w-56">
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${task.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-gray-600 text-xs font-medium w-16">
                        {task.progress}% Complete
                      </span>
                    </div>
                  </td>

                  {/* Status */}
                  <td className="py-4 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${task.statusColor}`}
                    >
                      {task.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="py-4 px-4">
                    <div className="flex gap-3 text-gray-500">
                      <Eye className="w-4 h-4 cursor-pointer hover:text-gray-700" />
                      <MessageSquare className="w-4 h-4 cursor-pointer hover:text-gray-700" />
                      <MoreHorizontal className="w-4 h-4 cursor-pointer hover:text-gray-700" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 pt-4 ">
          <span className="text-sm text-gray-600 mb-3 sm:mb-0">
            Showing 8 of 230 Completed tasks
          </span>
          <nav className="flex items-center gap-1">
            <button className="p-2 rounded-md hover:bg-gray-100">
              <ChevronLeft />
            </button>
            <button className="px-4 py-2 rounded-md text-sm font-medium bg-[#437EF7] text-white">
              1
            </button>
            <button className="px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 text-gray-600">
              2
            </button>
            <button className="px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 text-gray-600">
              3
            </button>
            <span className="text-gray-500">...</span>
            <button className="px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 text-gray-600">
              15
            </button>
            <button className="p-2 rounded-md hover:bg-gray-100">
              <ChevronRight />
            </button>
          </nav>
        </div>
      </section>

      <section className="mt-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Recently Added Tasks
          </h2>
          <button className="flex items-center gap-2 text-sm text-gray-600 font-medium  rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors">
            <i data-lucide="refresh-cw" className="w-4 h-4"></i>
            <span>Refresh</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden flex flex-col"
            >
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800 text-lg">
                    {program.title}
                  </h3>
                  <span
                    className={`${program.tagColor} text-xs font-semibold px-2.5 py-1 rounded-full`}
                  >
                    {program.tag}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-4 flex-grow">
                  {program.description}
                </p>
                <div className="pt-4 mt-auto flex justify-between items-center text-sm">
                  <div>
                    <p className="text-xs text-gray-400">Created:</p>
                    <p className="font-medium text-gray-700">
                      {program.created}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Assigned to:</p>
                    <div className="flex items-center gap-2">
                      <img
                        src={program.assignedTo.avatar}
                        alt={program.assignedTo.name}
                        className="w-6 h-6 object-cover rounded-full"
                      />
                      <span className="font-medium text-gray-700">
                        {program.assignedTo.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Page;
