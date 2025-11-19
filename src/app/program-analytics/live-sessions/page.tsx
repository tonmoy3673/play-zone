import MatrixCards from "./_components/MatrixCards";
import { AnimatedButton } from "@/components/ui/Button";
import SessionFeedback from "./_components/SessionFeedback";
import SessionAttendance from "./_components/SessionAttendance";
import RecentLiveSession from "./_components/RecentLiveSession";
import SessionManagement from "./_components/SessionManagement";

export default function LiveSessionsPage() {
  return (
    <div className="space-y-4">
      <MatrixCards />

      <div className="grid lg:grid-cols-[1fr_534px] gap-4">
        <SessionAttendance />
        <RecentLiveSession />
      </div>

      <SessionFeedback />

      <SessionManagement />

      <div className="flex justify-end">
        <AnimatedButton className="font-medium text-sm h-[50px] px-6 py-4 rounded-full flex items-center justify-center gap-1.5 transition-all whitespace-nowrap text-white bg-primary-gradient">
          Delete
        </AnimatedButton>
      </div>
    </div>
  );
}
