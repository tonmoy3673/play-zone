import Profile from "./_components/Profile";
import Card from "@/components/ui/Card";
import Filter from "./_components/Filter";
import AddNote from "./_components/AddNote";
import TopHeader from "./_components/TopHeader";
import TicketInfo from "./_components/TicketInfo";
import MatrixCards from "./_components/MatrixCards";
import QuickReplay from "./_components/QuickReplay";
import ActionButtons from "./_components/ActionButtons";
import SupportTickets from "./_components/SupportTickets";
import { SectionHeader } from "@/components/shared/SectionHeader";

const SupportManagementPage = () => {
  return (
    <div>
      <TopHeader />

      <div className="space-y-6">
        <MatrixCards />
        <Filter />

        <div className="grid gap-4 lg:grid-cols-[1fr_370px] items-start">
          <SupportTickets />

          <Card>
            <SectionHeader title="Ticket #1247" className="mb-4" />

            <Profile />

            <div className="space-y-5">
              <TicketInfo />
              <ActionButtons />
              <QuickReplay />
              <AddNote />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SupportManagementPage;
