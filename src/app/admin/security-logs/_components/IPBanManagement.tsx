import { SectionHeader } from "@/components/shared/SectionHeader";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import IPBlockForm from "./IPBlockForm";

const promoCodes = [
  {
    ip_address: "192.168.1.100",
    reason: "Brute Force Attack",
    blocked_date: "Jan 16, 2025",
    status: "Unlock",
  },
  {
    ip_address: "203.45.67.89",
    reason: "Suspicious Activity",
    blocked_date: "Jan 16, 2025",
    status: "Unlock",
  },
  {
    ip_address: "10.255.255.255",
    reason: "Percentage",
    blocked_date: "Jan 16, 2025",
    status: "Unlock",
  },
  {
    ip_address: "10.255.255.255",
    reason: "Percentage",
    blocked_date: "Jan 16, 2025",
    status: "Unlock",
  },
];

const IPBanManagement = () => {
  return (
    <Card>
      <SectionHeader title="IP Ban Management" />

      <IPBlockForm />

      <div className="overflow-x-auto rounded-3xl ">
        <table className="w-full text-sm">
          <thead className="bg-white border-[#E7F2F5] border-b">
            <tr className="[&_th]:whitespace-nowrap text-left text-dark/70 [&_th]:p-4 [&_th]:first:pl-6 [&_th]:text-[10px] [&_th]:font-medium">
              <th>IP Address</th>
              <th>Reason</th>
              <th>Blocked Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {promoCodes.map((user, idx) => (
              <tr
                key={idx}
                className="text-dark font-medium text-[10px] border-b border-[#E7F2F5] hover:bg-white/80 bg-white/70 transition [&_td]:p-4 [&_td]:first:pl-6"
              >
                <td>{user.ip_address}</td>
                <td>{user.reason}</td>
                <td>{user.blocked_date}</td>
                <td>
                  <Badge
                    className="h-7 text-xs"
                    variant={user.status === "Unlock" ? "dark" : "default"}
                  >
                    {user.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default IPBanManagement;
