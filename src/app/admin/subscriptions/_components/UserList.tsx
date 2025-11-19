import Filter from "./Filter";
import Image from "next/image";
import Icon from "@/utils/icon";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Pagination from "@/components/shared/Pagination";
import EditSubscription from "./EditSubscription";

export type UserProp = {
  name: string;
  role: string;
  amount: string;
  plan: string;
  status: "Active" | "Flagged";
  image: string;
  join_date: string;
  join_time: string;
  end_date: string;
  end_time: string;
};

const userList: UserProp[] = [
  {
    name: "Mike_thompson",
    role: "Coach",
    amount: "$29.99",
    plan: "Premium",
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?fit=crop&q=80&w=735",
    join_date: "Jun 5, 2025",
    join_time: "2:45 PM",
    end_date: "Jun 5, 2025",
    end_time: "2:45 PM",
  },
  {
    name: "Mike_thompson",
    role: "Athlete",
    amount: "$29.99",
    plan: "Free",
    status: "Flagged",
    image:
      "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?fit=crop&q=80&w=735",
    join_date: "Jun 5, 2025",
    join_time: "2:45 PM",
    end_date: "Jun 5, 2025",
    end_time: "2:45 PM",
  },
  {
    name: "alex_rodriguez",
    role: "Athlete",
    amount: "$29.99",
    plan: "Trial",
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?fit=crop&q=80&w=735",
    join_date: "Jun 5, 2025",
    join_time: "2:45 PM",
    end_date: "Jun 5, 2025",
    end_time: "2:45 PM",
  },
  {
    name: "tanya.hill",
    role: "Coach",
    amount: "$29.99",
    plan: "Free",
    status: "Flagged",
    image:
      "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?fit=crop&q=80&w=735",
    join_date: "Jun 5, 2025",
    join_time: "2:45 PM",
    end_date: "Jun 5, 2025",
    end_time: "2:45 PM",
  },
  {
    name: "tanya.hill",
    role: "Athlete",
    amount: "$29.99",
    plan: "Trial",
    status: "Active",
    image:
      "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?fit=crop&q=80&w=735",
    join_date: "Jun 5, 2025",
    join_time: "2:45 PM",
    end_date: "Jun 5, 2025",
    end_time: "2:45 PM",
  },
];

const UserList = () => {
  return (
    <>
      <Card>
        <Filter />

        <div className="overflow-x-auto rounded-3xl ">
          <table className="w-full text-sm">
            <thead className="bg-white border-[#E7F2F5] border-b">
              <tr className="[&_th]:whitespace-nowrap text-left text-dark/70 [&_th]:p-4 [&_th]:first:pl-6 [&_th]:text-[10px] [&_th]:font-medium">
                <th>User</th>
                <th>Current Plan</th>
                <th>Status</th>
                <th>Join Date</th>
                <th>End Date</th>
                <th>Amount</th>
                <th className="w-28">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userList.map((user, idx) => (
                <tr
                  key={idx}
                  className="border-b border-[#E7F2F5] hover:bg-white/80 bg-white/70 transition [&_td]:p-4 [&_td]:first:pl-6"
                >
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="size-9 rounded-full relative overflow-hidden">
                        <Image
                          src={user.image}
                          fill
                          alt={user.name}
                          className="size-full object-cover"
                        />
                      </div>

                      <div className="space-y-0.5 font-medium text-[10px]">
                        <p className="text-dark">{user.name}</p>
                        <p className="text-dark/70">{user.role}</p>
                      </div>
                    </div>
                  </td>

                  <td>
                    <Badge
                      className="h-8 text-xs"
                      variant={
                        user.plan === "Free"
                          ? "success"
                          : user.plan === "Premium"
                          ? "danger"
                          : user.plan === "Trial"
                          ? "secondary"
                          : "default"
                      }
                    >
                      {user.plan}
                    </Badge>
                  </td>
                  <td>
                    <Badge
                      className="h-8 text-xs"
                      variant={
                        user.status === "Active"
                          ? "success"
                          : user.status === "Flagged"
                          ? "warning"
                          : "default"
                      }
                    >
                      {user.status}
                    </Badge>
                  </td>

                  <td className=" font-medium text-[10px]">
                    <span className="text-dark block mb-1">
                      {user.join_date}
                    </span>
                    <span className="text-dark/70">{user.join_time}</span>
                  </td>

                  <td className=" font-medium text-[10px]">
                    <span className="text-dark block mb-1">
                      {user.end_date}
                    </span>
                    <span className="text-dark/70">{user.end_time}</span>
                  </td>

                  <td className="text-dark font-medium text-[10px]">
                    {user.amount}
                  </td>

                  <td>
                    <div className="flex items-center gap-2">
                      <button className="size-8 flex items-center justify-center rounded-full bg-white text-dark">
                        <Icon name="eye" height={16} width={16} />
                      </button>
                      <button className="size-8 flex items-center justify-center rounded-full bg-white text-dark">
                        <Icon name="message" height={16} width={16} />
                      </button>

                      <EditSubscription user={user} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Pagination className="mt-5" text="Showing 5 of 230 Completed tasks" />
      </Card>
    </>
  );
};

export default UserList;
