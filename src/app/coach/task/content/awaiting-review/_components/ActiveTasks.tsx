import React from "react";

type TaskStatus = "In Progress" | "Not Started";

type ActiveTask = {
  title: string;
  subtitle: string;
  status: TaskStatus;
  progressPercent: number; // 0 - 100
  icon: React.ReactNode;
};

const StatusChip: React.FC<{ status: TaskStatus }> = ({ status }) => {
  if (status === "In Progress") {
    return (
      <div className="bg-[rgba(69,127,243,0.15)] border border-[rgba(21,86,216,0.1)] rounded-full h-6 px-3 flex items-center">
        <span className="text-[10px] text-[#1561d8] font-medium leading-[17px]">
          In Progress
        </span>
      </div>
    );
  }

  return (
    <div className="bg-[rgba(183,183,183,0.15)] border border-[rgba(183,183,183,0.1)] rounded-full h-6 px-3 flex items-center">
      <span className="text-[10px] text-dark/70 font-medium leading-[17px]">
        Not Started
      </span>
    </div>
  );
};

const ProgressBar: React.FC<{ value: number }> = ({ value }) => {
  return (
    <div className="w-full h-2 rounded-full bg-[#c4d4fd] relative overflow-hidden">
      <div
        className="h-2 rounded-full bg-gradient-to-r from-[#4a62ff] to-[#7aa2ff]"
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  );
};

// Minimal inline icons to match the vibe of the design
const VideoIcon = () => (
  <div className="w-12 h-12 rounded-full bg-white/60 flex items-center justify-center">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect
        x="3.5"
        y="6.5"
        width="12"
        height="11"
        rx="2"
        stroke="#141B34"
        strokeOpacity="0.7"
      />
      <path d="M16 10l4-2v8l-4-2v-4z" fill="#141B34" fillOpacity="0.7" />
    </svg>
  </div>
);

const FileIcon = () => (
  <div className="w-12 h-12 rounded-full bg-white/60 flex items-center justify-center">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M7 4h6l4 4v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
        stroke="#141B34"
        strokeOpacity="0.7"
        strokeWidth="1.2"
      />
      <path
        d="M13 4v4h4"
        stroke="#141B34"
        strokeOpacity="0.7"
        strokeWidth="1.2"
      />
    </svg>
  </div>
);

const DumbbellIcon = () => (
  <div className="w-12 h-12 rounded-full bg-white/60 flex items-center justify-center">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 8v8M19 8v8"
        stroke="#141B34"
        strokeOpacity="0.7"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <rect
        x="6.5"
        y="7"
        width="3"
        height="10"
        rx="1"
        fill="#141B34"
        fillOpacity="0.7"
      />
      <rect
        x="14.5"
        y="7"
        width="3"
        height="10"
        rx="1"
        fill="#141B34"
        fillOpacity="0.7"
      />
      <rect
        x="9.5"
        y="10.25"
        width="5"
        height="3.5"
        rx="1.75"
        fill="#141B34"
        fillOpacity="0.7"
      />
    </svg>
  </div>
);

const Divider = () => <div className="h-px w-full bg-black/5" />;

const ActiveTasks: React.FC = () => {
  const tasks: ActiveTask[] = [
    {
      title: "Sprint Form Analysis",
      subtitle: "Video review and technique feedback",
      status: "In Progress",
      progressPercent: 60,
      icon: <VideoIcon />,
    },
    {
      title: "Nutrition Quiz",
      subtitle: "Weekly nutrition knowledge assessment",
      status: "Not Started",
      progressPercent: 0,
      icon: <FileIcon />,
    },
    {
      title: "Training Plan Review",
      subtitle: "Weekly training plan completion",
      status: "In Progress",
      progressPercent: 85,
      icon: <DumbbellIcon />,
    },
  ];

  return (
    <div className="bg-white/30 rounded-3xl p-5">
      <div className="flex items-center gap-3">
        <h2 className="text-[18px] font-medium text-black">Active Tasks</h2>
        <div className="ml-1">
          <div className="h-6 px-3 rounded-full flex items-center justify-center bg-[rgba(69,127,243,0.15)] border border-[rgba(21,86,216,0.1)]">
            <span className="text-[10px] text-[#1561d8] font-medium leading-[1.4]">
              04 Tas
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-6">
        {tasks.map((task, idx) => (
          <div key={task.title}>
            <div className="flex items-center gap-3">
              {task.icon}
              <div className="flex-1 flex items-center justify-between">
                <div>
                  <p className="text-[14px] text-dark font-medium leading-[1.3]">
                    {task.title}
                  </p>
                  <p className="text-[12px] text-dark/70 leading-[1.4]">
                    {task.subtitle}
                  </p>
                </div>
                <StatusChip status={task.status} />
              </div>
            </div>

            <div className="pl-15 mt-2">
              <div className="mt-1">
                <ProgressBar value={task.progressPercent} />
              </div>
              <p className="mt-1 text-[10px] text-dark font-medium">
                {task.progressPercent}% Complete
              </p>
            </div>

            {idx < tasks.length - 1 && (
              <div className="my-4">
                <Divider />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveTasks;
