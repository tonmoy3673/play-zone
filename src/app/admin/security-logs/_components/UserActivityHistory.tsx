import Badge from "@/components/ui/Badge";
import { SectionHeader } from "@/components/shared/SectionHeader";
import Image from "next/image";
import Icon from "@/utils/icon";

const activities = [
  {
    user: {
      avatar:
        "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?fit=crop&q=80&w=735",
      name: "mike_thompson",
    },
    action: "Login",
    ip_address: "192.168.1.50",
    timestamp: "Jan 16, 2025 14:30",
  },
  {
    user: {
      avatar:
        "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?fit=crop&q=80&w=735",
      name: "sarah_jones",
    },
    action: "Password Change",
    ip_address: "192.168.1.50",
    timestamp: "Jan 16, 2025 14:30",
  },
  {
    user: {
      avatar:
        "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?fit=crop&q=80&w=735",
      name: "alex_rodriguez",
    },
    action: "Profile Update",
    ip_address: "192.168.1.50",
    timestamp: "Jan 16, 2025 14:30",
  },
  {
    user: {
      avatar:
        "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?fit=crop&q=80&w=735",
      name: "mike_thompson",
    },
    action: "Percentage",
    ip_address: "192.168.1.50",
    timestamp: "Jan 16, 2025 14:30",
  },
];

const UserActivityHistory = () => {
  return (
    <div className="bg-white/30 rounded-2xl md:rounded-3xl p-5 border border-white/80 overflow-hidden">
      <div className="mb-5 flex items-center justify-between gap-3 flex-wrap">
        <SectionHeader title="User Activity History" className="mb-0" />

        <div className="w-full md:w-[370px] h-11 px-4 py-3 rounded-full bg-white/60 border-white border flex items-center gap-3">
          <Icon
            name="search"
            height={20}
            width={20}
            className="text-[#595F70]"
          />
          <input
            type="text"
            placeholder="Search Announcement..."
            className="w-full  bg-transparent text-xs font-medium placeholder:text-dark/70 text-dark outline-none"
          />
        </div>
      </div>

      <div className="overflow-x-auto rounded-3xl ">
        <table className="w-full text-sm">
          <thead className="bg-white border-[#E7F2F5] border-b">
            <tr className="[&_th]:whitespace-nowrap text-left text-dark/70 [&_th]:p-4 [&_th]:first:pl-6 [&_th]:text-[10px] [&_th]:font-medium">
              <th>User</th>
              <th>Action</th>
              <th>IP Address</th>
              <th>Timestamp</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, idx) => (
              <tr
                key={idx}
                className="border-b text-dark font-medium text-xs border-[#E7F2F5] hover:bg-white/80 bg-white/70 transition [&_td]:p-4 [&_td]:first:pl-6"
              >
                <td>
                  <div className="flex items-center gap-2 ">
                    <Image
                      src={activity.user.avatar}
                      alt={activity.user.name}
                      height={32}
                      width={32}
                      className="size-8 shrink-0 object-cover rounded-full"
                    />
                    <span className="text-[10px]">{activity.user.name}</span>
                  </div>
                </td>
                <td>{activity.action}</td>
                <td>{activity.ip_address}</td>
                <td className="whitespace-nowrap">{activity.timestamp}</td>
                <td>
                  <Badge className="h-7 text-xs" variant={"default"}>
                    View
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserActivityHistory;
