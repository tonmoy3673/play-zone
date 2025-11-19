import Icon from "@/utils/icon";
import Card from "@/components/ui/Card";
import MatrixCard from "@/components/shared/MatrixCard";
import { AnimatedButton } from "@/components/ui/Button";
import { SectionHeader } from "@/components/shared/SectionHeader";

const SessionManagement = () => {
  return (
    <Card>
      <div className="mb-5 flex items-center justify-between flex-wrap gap-2">
        <SectionHeader title="Session Management" className="mb-0" />

        <div className="flex gap-1 flex-wrap">
          <AnimatedButton className="bg-[#1556D8]/15 h-10 border border-[#1556D8]/10 p-3 rounded-full flex items-center justify-center gap-1.5 transition-all whitespace-nowrap">
            <Icon
              name="plus"
              height={20}
              width={20}
              className="text-[#5C8FF7]"
            />
            <span className="primary-gradient-text text-xs font-medium">
              Schedule New Session
            </span>
          </AnimatedButton>

          <AnimatedButton className="font-medium text-xs h-10 border p-3 rounded-full flex items-center justify-center gap-1.5 transition-all whitespace-nowrap text-white bg-primary-gradient">
            <Icon name="calendar" height={20} width={20} />
            View Calendar
          </AnimatedButton>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <MatrixCard
          label="Total Session"
          value="24"
          subtitle="This Year"
          icon="check_check"
        />
        <MatrixCard
          label="Sessions Completion"
          value="89%"
          subtitle="Rate"
          icon="star_half"
        />
        <MatrixCard
          label="Duration"
          value="42 min"
          subtitle="Avg Session Length"
          icon="clock"
        />
      </div>
    </Card>
  );
};

export default SessionManagement;
