import MatrixCards from "./_components/MatrixCards";
import TaskCompletion from "./_components/TaskCompletion";
import TaskCatPerformance from "./_components/TaskCatPerformance";
import DifficultyPerformance from "./_components/DifficultyPerformance";
import IndividualPerformance from "./_components/IndividualPerformance";

export default function TaskAnalyticsPage() {
  return (
    <div className="space-y-4">
      <MatrixCards />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <TaskCompletion />

        <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-4">
          <TaskCatPerformance />
          <DifficultyPerformance />
        </div>
      </div>

      <IndividualPerformance />
    </div>
  );
}
