"use client";

import { useRouter } from "next/navigation";
import CreateNewButton from "../../../programs/create/_components/CreateNewButton";
import { useModalContext } from "../layout";
import ActiveTask, { ActiveTaskProps } from "./_components/ActiveTask";

const athleteList = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces",
];

const runningBehind = [
  {
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces",
    name: "Jason Martinez",
  },
  {
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop&crop=faces",
    name: "Michael Thompson",
  },
  {
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=faces",
    name: "David Chen",
  },
];

const tasks: ActiveTaskProps[] = [
  {
    title: "Passing Drill Submission",
    subtitle: "Video Submission • Football • QB Skills",
    iconName: "video_01",
    dueBadge: {
      text: "Due Today",
      variant: "urgent",
    },
    details:
      "Submit a 2-minute video demonstrating the three-step and five-step drop passing drills as shown in the training video.",
    dueDate: "June 7, 2023 (11:59 PM)",
    coach: {
      name: "Coach Michael Johnson",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
    },
    progress: {
      submitted: 7,
      total: 15,
      percentage: 47,
    },
    completionStatus: {
      completed: 6,
      pending: 6,
    },
    runningBehind: runningBehind,
    athleteList: athleteList,
  },
  {
    title: "Footwork Training Video",
    subtitle: "Video Submission • Football • WR Skills",
    iconName: "video_01",
    dueBadge: {
      text: "3 Days Left",
      variant: "safe",
    },
    details:
      "Submit a 2-minute video demonstrating the three-step and five-step drop passing drills as shown in the training video.",
    dueDate: "June 7, 2023 (11:59 PM)",
    coach: {
      name: "Coach Michael Johnson",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
    },
    progress: {
      submitted: 5,
      total: 8,
      percentage: 62,
    },
    completionStatus: {
      completed: 6,
      pending: 6,
    },
    runningBehind: runningBehind,
    athleteList: athleteList,
  },
  {
    title: "Tactical Analysis Quiz",
    subtitle: "Video Submission • Football • QB Skills",
    iconName: "bubble_chat_question",
    dueBadge: {
      text: "1 Week Left",
      variant: "info",
    },
    details:
      "Submit a 2-minute video demonstrating the three-step and five-step drop passing drills as shown in the training video.",
    dueDate: "June 7, 2023 (11:59 PM)",
    coach: {
      name: "Coach Michael Johnson",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
    },
    progress: {
      submitted: 12,
      total: 22,
      percentage: 55,
    },
    completionStatus: {
      completed: 6,
      pending: 6,
    },
    runningBehind: runningBehind,
    athleteList: athleteList,
  },
  {
    title: "Conditioning Log",
    subtitle: "Workout Log • Football • Team Fitness",
    iconName: "video_01",
    dueBadge: {
      text: "Weekly",
      variant: "info",
    },
    details:
      "Submit a 2-minute video demonstrating the three-step and five-step drop passing drills as shown in the training video.",
    dueDate: "June 7, 2023 (11:59 PM)",
    coach: {
      name: "Coach Michael Johnson",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
    },
    progress: {
      submitted: 7,
      total: 15,
      percentage: 47,
    },
    completionStatus: {
      completed: 6,
      pending: 6,
    },
    runningBehind: runningBehind,
    athleteList: athleteList,
  },
];

export default function Page() {
  const { setIsModalOpen } = useModalContext();
  const router = useRouter();
  return (
    <div>
      <div className="flex justify-between items-center my-5 px-5">
        <p className="text-3xl font-semibold">Active Tasks in Progress</p>
        {/* <CreateNewButton onClick={() => setIsModalOpen(true)} /> */}
        <CreateNewButton
          onClick={() => {
            router.push("/coach/task/create");
          }}
        />
      </div>
      <div>
        {tasks.map((task, index) => (
          <ActiveTask key={index} {...task} />
        ))}
      </div>
    </div>
  );
}
