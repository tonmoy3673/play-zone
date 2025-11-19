import Icon from "./icon";

export default function CurrentTasks() {
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
    <section className="bg-white/30 overflow-clip relative rounded-[24px] p-5 mb-8 border border-white/80">
      <div className="flex justify-between items-start mb-5">
        <h2 className="text-lg font-medium text-dark">Current Tasks</h2>
        <div className="bg-white rounded-[16px] px-5 py-4 flex items-center gap-3 w-[273px]">
          <span className="size-6 flex items-center justify-center">
            <Icon
              name={"search_01"}
              height={24}
              width={24}
              className="text-paragraph-dark"
            />
          </span>
          <input
            type="text"
            placeholder="Search completed tasks.."
            className="flex-1 text-sm text-paragraph-dark placeholder:text-paragraph-dark focus:outline-none bg-transparent"
          />
        </div>
      </div>

      <div className="bg-[rgba(255,255,255,0.73)] rounded-[20px] overflow-hidden">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="bg-white border-b border-[#e7f2f5] px-6 py-4 text-left">
                <span className="text-[10px] font-medium text-paragraph-dark">
                  Task & Athlete
                </span>
              </th>
              <th className="bg-white border-b border-[#e7f2f5] px-6 py-4 text-left">
                <span className="text-[10px] font-medium text-paragraph-dark">
                  Type
                </span>
              </th>
              <th className="bg-white border-b border-[#e7f2f5] px-6 py-4 text-left">
                <span className="text-[10px] font-medium text-paragraph-dark">
                  Due Date
                </span>
              </th>
              <th className="bg-white border-b border-[#e7f2f5] px-6 py-4 text-left">
                <span className="text-[10px] font-medium text-paragraph-dark">
                  Progress
                </span>
              </th>
              <th className="bg-white border-b border-[#e7f2f5] px-6 py-4 text-left">
                <span className="text-[10px] font-medium text-paragraph-dark">
                  Status
                </span>
              </th>
              <th className="bg-white border-b border-[#e7f2f5] px-6 py-4 text-left">
                <span className="text-[10px] font-medium text-paragraph-dark">
                  Actions
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => {
              const getTypeBadgeClass = (type: string) => {
                switch (type) {
                  case "Video":
                    return "bg-gradient-to-b from-[rgba(0,226,128,0.05)] to-[rgba(0,124,70,0.12)] border border-[rgba(0,226,128,0.1)] text-[#027a48]";
                  case "Quiz":
                    return "bg-gradient-to-b from-[rgba(120,78,248,0.05)] to-[rgba(117,76,246,0.12)] border border-[rgba(120,78,248,0.1)] text-[#784ef8]";
                  case "Rehab":
                    return "bg-gradient-to-b from-[rgba(255,0,51,0.05)] to-[rgba(255,0,51,0.12)] border border-[rgba(255,0,51,0.1)] text-[#ff0033]";
                  case "Study":
                    return "bg-gradient-to-b from-[rgba(69,127,243,0.05)] to-[rgba(69,127,243,0.12)] border border-[rgba(69,127,243,0.1)] text-[#437EF7]";
                  case "Training Plan":
                    return "bg-gradient-to-b from-[rgba(0,226,128,0.05)] to-[rgba(0,124,70,0.12)] border border-[rgba(0,226,128,0.1)] text-[#027a48]";
                  default:
                    return "";
                }
              };

              const getStatusBadgeClass = (status: string) => {
                switch (status) {
                  case "In Progress":
                    return "bg-gradient-to-b from-[rgba(235,158,15,0.12)] to-[rgba(235,158,15,0.15)] border border-[rgba(235,158,15,0.1)] text-[#EB9E0F]";
                  case "Almost Done":
                    return "bg-gradient-to-b from-[rgba(120,78,248,0.12)] to-[rgba(120,78,248,0.2)] border border-[rgba(120,78,248,0.1)] text-[#784ef8]";
                  case "Done":
                    return "bg-gradient-to-b from-[rgba(0,226,128,0.05)] to-[rgba(0,124,70,0.12)] border border-[rgba(0,226,128,0.1)] text-[#027a48]";
                  case "Not Started":
                    return "bg-gray-100 text-gray-500 border border-gray-200";
                  default:
                    return "";
                }
              };

              return (
                <tr key={index} className="border-b border-[#e7f2f5]">
                  {/* Task & Athlete */}
                  <td className="px-6 py-4 h-[72px]">
                    <div className="flex items-center gap-2">
                      <img
                        src={task.img}
                        alt={task.athlete}
                        className="size-9 rounded-full object-cover"
                      />
                      <div className="flex flex-col gap-0.5">
                        <p className="text-[10px] font-medium text-dark">
                          {task.name}
                        </p>
                        <p className="text-xs font-normal text-paragraph-dark">
                          {task.athlete}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Type */}
                  <td className="px-6 py-4 h-[72px]">
                    <span
                      className={`inline-flex items-center justify-center h-6 px-3 rounded-[61px] text-xs font-medium border ${getTypeBadgeClass(
                        task.type
                      )}`}
                    >
                      {task.type}
                    </span>
                  </td>

                  {/* Due Date */}
                  <td className="px-6 py-4 h-[72px]">
                    <div className="flex flex-col gap-1">
                      <p className="text-[10px] font-medium text-dark">
                        {task.date}
                      </p>
                      <p className="text-[10px] font-medium text-paragraph-dark">
                        {task.time}
                      </p>
                    </div>
                  </td>

                  {/* Progress */}
                  <td className="px-6 py-4 h-[72px]">
                    <div className="flex flex-col gap-1 w-[135px]">
                      <div className="relative">
                        <div className="bg-[#c4d4fd] h-2 rounded-[40px] w-full relative">
                          <div
                            className="bg-[linear-gradient(90deg,#7180DF_0%,#2C49FF_100%)] h-2 rounded-[80px]"
                            style={{ width: `${task.progress}%` }}
                          />
                          {task.progress > 0 && (
                            <img
                              src="/content/progress-circle.png"
                              alt="Progress indicator"
                              className="absolute top-1/2 -translate-y-1/2 size-3.5 object-contain"
                              style={{
                                left: `calc(${task.progress}% - 7px)`,
                              }}
                            />
                          )}
                        </div>
                      </div>
                      <p className="text-[10px] font-medium text-dark">
                        {task.progress}% Complete
                      </p>
                    </div>
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4 h-[72px]">
                    <span
                      className={`inline-flex items-center justify-center h-6 px-3 rounded-[61px] text-[10px] font-medium border ${getStatusBadgeClass(
                        task.status
                      )}`}
                    >
                      {task.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4 h-[72px]">
                    <div className="flex items-center gap-2">
                      <button className="bg-white rounded-[42px] size-8 flex items-center justify-center hover:bg-gray-50 transition">
                        <Icon
                          name={"eye"}
                          height={16}
                          width={16}
                          className="text-dark"
                        />
                      </button>
                      <button className="bg-white rounded-[42px] size-8 flex items-center justify-center hover:bg-gray-50 transition">
                        <Icon
                          name={"message_02"}
                          height={16}
                          width={16}
                          className="text-dark"
                        />
                      </button>
                      <button className="bg-white rounded-[42px] size-8 flex items-center justify-center hover:bg-gray-50 transition">
                        <Icon
                          name="three_dots_vertical"
                          height={16}
                          width={16}
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mt-6">
        <span className="text-xs font-normal text-paragraph-dark mb-3 sm:mb-0">
          Showing <span className="text-dark">8</span> of 230 Completed tasks
        </span>
        <nav className="flex items-center gap-1">
          <button className="bg-[rgba(255,255,255,0.6)] rounded-lg size-8 flex items-center justify-center hover:bg-white transition">
            <Icon
              name={"arrow_left_01"}
              height={20}
              width={20}
              className="text-dark"
            />
          </button>
          <button className="bg-primary-gradient rounded-lg size-8 flex items-center justify-center">
            <span className="text-[10px] font-medium text-white leading-[1.4]">
              1
            </span>
          </button>
          <button className="bg-[rgba(255,255,255,0.6)] rounded-lg size-8 flex items-center justify-center hover:bg-white transition">
            <span className="text-[10px] font-medium text-dark leading-[1.4]">
              2
            </span>
          </button>
          <button className="bg-[rgba(255,255,255,0.6)] rounded-lg size-8 flex items-center justify-center hover:bg-white transition">
            <span className="text-[10px] font-medium text-dark leading-[1.4]">
              3
            </span>
          </button>
          <button className="bg-[rgba(255,255,255,0.6)] rounded-lg size-8 flex items-center justify-center hover:bg-white transition">
            <span className="text-[10px] font-medium text-dark leading-[1.4]">
              <Icon
                name="three_dots_vertical"
                height={20}
                width={20}
                className="text-dark"
              />
            </span>
          </button>

          <button className="bg-[rgba(255,255,255,0.6)] rounded-lg size-8 flex items-center justify-center hover:bg-white transition">
            <span className="text-[10px] font-medium text-dark leading-[1.4]">
              15
            </span>
          </button>
          <button className="bg-[rgba(255,255,255,0.6)] rounded-lg size-8 flex items-center justify-center hover:bg-white transition">
            <span className="text-[10px] font-medium text-dark leading-[1.4]">
              <Icon
                name={"arrow_right_01"}
                height={20}
                width={20}
                className="text-dark"
              />
            </span>
          </button>
        </nav>
      </div>
    </section>
  );
}
