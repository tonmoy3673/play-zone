import MatrixCards from "./_components/MatrixCards";
import { AnimatedButton } from "@/components/ui/Button";
import TimeCompletion from "./_components/TimeCompletion";
import ModuleCompletion from "./_components/ModuleCompletion";
import RetentionAnalysis from "./_components/RetentionAnalysis";
import BehavioralInsights from "./_components/BehavioralInsights";

export default function ProgressPage() {
  return (
    <div className="space-y-4">
      <MatrixCards />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <ModuleCompletion />

        <div className="flex flex-col gap-4">
          <RetentionAnalysis />
          <TimeCompletion />
        </div>
      </div>

      <BehavioralInsights />

      <div className="flex justify-end mt-8">
        <AnimatedButton className="flex items-center gap-1.5 py-4 px-4 h-12 rounded-full text-white text-sm font-medium bg-primary-gradient">
          Adjust Program Settings
        </AnimatedButton>
      </div>
    </div>
  );
}
