import UserList from "./_components/UserList";
import TopHeader from "./_components/TopHeader";
import MatrixCards from "./_components/MatrixCards";
import RecentActivity from "./_components/RecentActivity";

const UserManagementPage = () => {
  return (
    <div className="space-y-4">
      <TopHeader />
      <MatrixCards />
      <UserList />
      <RecentActivity />
    </div>
  );
};

export default UserManagementPage;
