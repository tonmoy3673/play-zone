import UserList from "./_components/UserList";
import TopHeader from "./_components/TopHeader";
import PromoCode from "./_components/PromoCode";
import MatrixCards from "./_components/MatrixCards";

const UserManagementPage = () => {
  return (
    <div className="space-y-4">
      <TopHeader />
      <MatrixCards />
      <UserList />
      <PromoCode />
    </div>
  );
};

export default UserManagementPage;
