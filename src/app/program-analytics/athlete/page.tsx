import MatrixCards from "./_components/MatrixCards";
import IndividualPerformance from "./_components/IndividualPerformance";

export default function AthletePerformancePage() {
  return (
    <div className="space-y-4">
      <MatrixCards />
      <IndividualPerformance />
    </div>
  );
}
