import Filter from "./Filter";
import Icon from "@/utils/icon";
import Image from "next/image";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Pagination from "@/components/shared/Pagination";
import ProgressBar from "@/components/shared/ProgressBar";
import { SectionHeader } from "@/components/shared/SectionHeader";

const athleteData = [
  {
    name: "Mike_thompson",
    role: "Quarterback",
    image:
      "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735",
    progressValue: 96,
    progressLabel: "96% Complete",
    score: 92,
    scoreBadge: "Excellent",
    lastLogin: "2 Days Ago",
    streak: "6 Days",
    staff: "Coach Amanda",
  },
  {
    name: "sarah.jones@email.com",
    role: "Running Back",
    image:
      "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?fit=crop&q=80&w=735",
    progressValue: 53,
    progressLabel: "53% Complete",
    score: 70,
    scoreBadge: "Need Help",
    lastLogin: "2 Days Ago",
    streak: "1 Days",
    staff: "None Assigned",
  },
  {
    name: "alex_rodriguez",
    role: "Wide Receiver",
    image:
      "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?fit=crop&q=80&w=735",
    progressValue: 100,
    progressLabel: "100% Complete",
    score: 85,
    scoreBadge: "Good",
    lastLogin: "2 Days Ago",
    streak: "4 Days",
    staff: "Coach Mike",
  },
  {
    name: "tanya.hill",
    role: "Quarterback",
    image:
      "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?fit=crop&q=80&w=735",
    progressValue: 35,
    progressLabel: "35% Complete",
    score: 81,
    scoreBadge: "Average",
    lastLogin: "2 Days Ago",
    streak: "2 Days",
    staff: "Coach Sara",
  },
  {
    name: "tanya.hill",
    role: "Running Back",
    image:
      "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?fit=crop&q=80&w=735",
    progressValue: 92,
    progressLabel: "92% Complete",
    score: 96,
    scoreBadge: "Excellent",
    lastLogin: "2 Days Ago",
    streak: "6 Days",
    staff: "None Assigned",
  },
];

const IndividualPerformance = () => {
  return (
    <Card className="bg-white/60">
      <SectionHeader title="Individual Performance" />

      <Filter />

      <div className="overflow-x-auto rounded-3xl ">
        <table className="w-full text-sm">
          <thead className="bg-white border-[#E7F2F5] border-b">
            <tr className="[&_th]:whitespace-nowrap [&_th]:text-xs text-left text-dark/70 [&_th]:px-4 [&_th]:py-4 [&_th]:first:pl-4 [&_th]:last:pl-4 [&_th]:text-[10px] [&_th]:font-medium">
              <th>Athlete</th>
              <th>Progress</th>
              <th>Score</th>
              <th>Last Login</th>
              <th>Task Streak</th>
              <th>Assigned Staff</th>
              <th className="w-[100px]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {athleteData.map((athlete, idx) => (
              <tr
                key={idx}
                className="border-b border-[#E7F2F5] hover:bg-white/80 bg-white/70 transition [&_td]:px-4 [&_td]:py-4 [&_td]:first:pl-4 [&_td]:last:pl-4"
              >
                <td>
                  <div className="flex items-center gap-3">
                    <div className="size-9 rounded-full relative overflow-hidden">
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

                <td>
                  <ProgressBar
                    isThumbIndicator={true}
                    className="flex-col-reverse w-[135px] gap-1.5"
                    percentage={athlete.progressValue}
                    percentageText={`${athlete.progressValue}% Complete`}
                    showPercentage={false}
                  />
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-dark text-[10px]">
                      {athlete.score}%
                    </p>
                    <Badge
                      variant={
                        athlete.scoreBadge === "Excellent"
                          ? "default"
                          : athlete.scoreBadge === "Good"
                          ? "secondary"
                          : athlete.scoreBadge === "Need Help"
                          ? "danger"
                          : "warning"
                      }
                    >
                      {athlete.scoreBadge}
                    </Badge>
                  </div>
                </td>
                <td className="text-dark font-medium text-[10px]">
                  {athlete.lastLogin}
                </td>
                <td>
                  <span className="flex items-center gap-1.5 text-dark text-[10px] font-medium">
                    <Icon name="fire_emoji" height={14} width={14} />{" "}
                    {athlete.streak}
                  </span>
                </td>
                <td className="text-dark font-medium text-[10px]">
                  {athlete.staff}
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

export default IndividualPerformance;
