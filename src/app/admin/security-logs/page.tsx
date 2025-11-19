import TopHeader from "./_components/TopHeader";
import MatrixCards from "./_components/MatrixCards";
import IPBanManagement from "./_components/IPBanManagement";
import StatusEnforcement from "./_components/StatusEnforcement";
import UserActivityHistory from "./_components/UserActivityHistory";
import SuspiciousActivity from "./_components/SuspiciousActivity";

const UserManagementPage = () => {
  return (
    <div className="space-y-4">
      <TopHeader />
      <MatrixCards />
      <IPBanManagement />
      <StatusEnforcement />
      <SuspiciousActivity />
      <UserActivityHistory />
    </div>
  );
};

export default UserManagementPage;
