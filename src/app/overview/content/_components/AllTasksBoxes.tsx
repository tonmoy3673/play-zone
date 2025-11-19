import TaskBoxCard, { type TaskBoxData } from "./TaskBoxCard";

const boxes: TaskBoxData[] = [
  {
    title: "Total Tasks",
    stat: "48",
    icon: { name: "task_01" },
    trend: { icon: "up", change: "12% increase", color: "text-green-600" },
  },
  {
    title: "Complete Tasks",
    stat: "23",
    icon: { name: "tick_double_02" },
    trend: { icon: "up", change: "3% increase", color: "text-green-600" },
  },
  {
    title: "In Progress",
    stat: "15",
    icon: { name: "loading" },
    trend: { icon: "up", change: "3% increase", color: "text-green-600" },
  },
  {
    title: "Overdue",
    stat: "4",
    icon: { name: "time_quarter" },
    trend: { icon: "down", change: "5% increase", color: "text-red-600" },
  },
];

export default function AllTasksBoxes() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8 w-full mx-auto">
      {boxes.map((box) => (
        <TaskBoxCard key={box.title} box={box} />
      ))}
    </section>
  );
}
