import Icon from "@/utils/icon";
import Image from "next/image";
import Badge from "@/components/ui/Badge";
import Pagination from "@/components/shared/Pagination";
import Card from "@/components/ui/Card";

const userList = [
  {
    name: "Mike_thompson",
    role: "Coach",
    email: "mike.thompson@email.com",
    plan: "Premium",
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?fit=crop&q=80&w=735",
    join_date: "Jun 5, 2025",
    join_time: "2:45 PM",
  },
  {
    name: "sarah.jones@email.com",
    role: "Athlete",
    email: "felicia.reid@example.com",
    plan: "Free",
    status: "Flagged",
    image:
      "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?fit=crop&q=80&w=735",
    join_date: "Jun 5, 2025",
    join_time: "2:45 PM",
  },
  {
    name: "alex_rodriguez",
    role: "Athlete",
    email: "deanna.curtis@example.com",
    plan: "Trial",
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?fit=crop&q=80&w=735",
    join_date: "Jun 5, 2025",
    join_time: "2:45 PM",
  },
  {
    name: "tanya.hill",
    role: "Coach",
    email: "tanya.hill@example.com",
    plan: "Free",
    status: "Flagged",
    image:
      "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?fit=crop&q=80&w=735",
    join_date: "Jun 5, 2025",
    join_time: "2:45 PM",
  },
  {
    name: "tanya.hill",
    role: "Athlete",
    email: "jessica.hanson@example.com",
    plan: "Trial",
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?fit=crop&q=80&w=735",
    join_date: "Jun 5, 2025",
    join_time: "2:45 PM",
  },
];

const UserList = () => {
  return (
    <Card>
      <div className="overflow-x-auto rounded-3xl ">
        <table className="w-full text-sm">
          <thead className="bg-white border-[#E7F2F5] border-b">
            <tr className="[&_th]:whitespace-nowrap text-left text-dark/70 [&_th]:p-4 [&_th]:first:pl-6 [&_th]:text-[10px] [&_th]:font-medium">
              <th>Username & Role</th>
              <th>Email</th>
              <th>Plan</th>
              <th>Status</th>
              <th>Join Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((athlete, idx) => (
              <tr
                key={idx}
                className="border-b border-[#E7F2F5] hover:bg-white/80 bg-white/70 transition [&_td]:p-4 [&_td]:first:pl-6"
              >
                <td>
                  <div className="flex items-center gap-3">
                    <div className="size-9 shrink-0 rounded-full relative overflow-hidden">
                      <Image
                        src={athlete.image}
                        fill
                        alt={athlete.name}
                        className="size-full object-cover"
                      />
                    </div>

                    <div className="space-y-0.5 font-medium text-[10px]">
                      <p className="text-dark">{athlete.name}</p>
                      <p className="text-dark/70">{athlete.role}</p>
                    </div>
                  </div>
                </td>

                <td className="text-dark font-medium text-[10px]">
                  {athlete.email}
                </td>

                <td>
                  <Badge
                    className="h-8 text-xs"
                    variant={
                      athlete.plan === "Free"
                        ? "success"
                        : athlete.plan === "Premium"
                        ? "danger"
                        : athlete.plan === "Trial"
                        ? "secondary"
                        : "default"
                    }
                  >
                    {athlete.plan}
                  </Badge>
                </td>
                <td>
                  <Badge
                    className="h-8 text-xs"
                    variant={
                      athlete.status === "Active"
                        ? "success"
                        : athlete.status === "Flagged"
                        ? "warning"
                        : "default"
                    }
                  >
                    {athlete.status}
                  </Badge>
                </td>

                <td className="whitespace-nowrap font-medium text-[10px]">
                  <span className="text-dark block mb-1">
                    {athlete.join_date}
                  </span>
                  <span className="text-dark/70">{athlete.join_time}</span>
                </td>

                <td>
                  <div className="flex items-center gap-2">
                    <button className="size-8 flex items-center justify-center rounded-full bg-white text-dark">
                      <Icon name="eye" height={16} width={16} />
                    </button>
                    <button className="size-8 flex items-center justify-center rounded-full bg-white text-dark">
                      <Icon name="message" height={16} width={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination text="Showing 5 of 230 Completed tasks" className="mt-5" />
    </Card>
  );
};

export default UserList;
