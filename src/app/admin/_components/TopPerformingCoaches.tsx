import { SectionHeader } from "@/components/shared/SectionHeader";
import Select from "@/components/ui/Select";
import Image from "next/image";

const coachData = [
  {
    name: "Guy Hawkins",
    info: "42,239 Athletes Enrolled",
    amount: "$378,142.02",
    avatar:
      "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?fit=crop&q=80&w=80",
  },
  {
    name: "Albert Flores",
    info: "10,239 Athletes Enrolled",
    amount: "$378,142.02",
    avatar:
      "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?fit=crop&q=80&w=80",
  },
  {
    name: "Albert Flores",
    info: "10,239 Athletes Enrolled",
    amount: "$378,142.02",
    avatar:
      "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?fit=crop&q=80&w=80",
  },
];

const TopPerformingCoaches = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-5 flex-wrap">
        <SectionHeader title="Top Performing Coaches" className="mb-0" />

        <Select
          className="h-10 px-4 border-white"
          placeholder="Select a sport"
          options={[
            {
              label: "Jan 26 - Mar 26",
              value: "Jan 26 - Mar 26",
            },
          ]}
        />
      </div>

      <div className="space-y-5">
        {coachData.map((coach, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between gap-3 flex-wrap"
          >
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full flex-shrink-0 relative overflow-hidden">
                <Image
                  src={coach.avatar}
                  alt={coach.name}
                  fill
                  className="object-cover size-full"
                />
              </div>
              <div className="flex-1 min-w-0 space-y-1">
                <p className="text-sm font-medium text-dark">{coach.name}</p>
                <p className="text-xs text-dark/70 font-medium">{coach.info}</p>
              </div>
            </div>

            <p className="text-sm font-semibold text-dark">{coach.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPerformingCoaches;
