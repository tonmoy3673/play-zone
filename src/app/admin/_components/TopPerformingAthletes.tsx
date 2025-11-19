import Image from "next/image";
import { SectionHeader } from "@/components/shared/SectionHeader";

const athleteData = [
  {
    name: "Guy Hawkins",
    info: "42 Programs Enrolled",
    rate: "95% Comp Rate",
    status: "last online",
    earning: "$7,928.11",
    avatar:
      "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?fit=crop&q=80&w=80",
  },
  {
    name: "Dianne Russell",
    info: "42 Programs Enrolled",
    rate: "95% Comp Rate",
    status: "last online",
    earning: "$7,928.11",
    avatar:
      "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?fit=crop&q=80&w=80",
  },
  {
    name: "Leslie Alexander",
    info: "42 Programs Enrolled",
    rate: "95% Comp Rate",
    status: "last online",
    earning: "$7,928.11",
    avatar:
      "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?fit=crop&q=80&w=80",
  },
];

const TopPerformingAthletes = () => {
  return (
    <div>
      <div className="flex sm:items-center flex-col gap-2 sm:flex-row sm:justify-between mb-4">
        <SectionHeader className="mb-0" title="Top Performing Athletes" />

        <div className="sm:text-right text-xs font-medium">
          <p className="text-dark">Spent this quarter</p>
          <p className="text-dark/70">Jan - Mar 26</p>
        </div>
      </div>

      <div className="space-y-5">
        {athleteData.map((athlete, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between gap-10 flex-wrap"
          >
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full flex-shrink-0 relative overflow-hidden">
                <Image
                  src={athlete.avatar}
                  alt={athlete.name}
                  fill
                  className="object-cover size-full"
                />
              </div>
              <div className="flex-1 min-w-0 space-y-1">
                <p className="text-sm font-medium text-dark">{athlete.name}</p>
                <p className="text-xs text-dark/70 font-medium">
                  {athlete.info}
                </p>
              </div>
            </div>

            <p className="text-xs font-medium text-dark/70">{athlete.rate}</p>
            <p className="text-xs font-medium text-dark/70">{athlete.status}</p>
            <p className="text-sm font-semibold text-dark">{athlete.earning}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPerformingAthletes;
