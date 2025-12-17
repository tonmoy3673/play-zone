import AthleteCard, { AthleteProp } from "./AthleteCard";
import { SectionHeader } from "@/components/shared/SectionHeader";

const athletes: AthleteProp[] = [
  {
    id: 1,
    status: "Top 5",
    banner:
      "https://images.unsplash.com/photo-1485313260896-6e6edf486858?fit=crop&q=80&w=1170",
    profile: {
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880",
      name: "Jamal Wright",
      sport: "Football",
      position: "Wide Receiver",
    },
    location: "Houston, TX",
    badge: "Verified",
    stats: [
      { value: "4.7s", label: "40yd" },
      { value: "12 TDs", label: "Season" },
      { value: "HS", label: "Level" },
    ],
  },
  {
    id: 2,
    status: "Rising",
    banner:
      "https://images.unsplash.com/photo-1634051253771-c42e0e994bec?fit=crop&q=80&w=1332",
    profile: {
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880",
      name: "Jamal Wright",
      sport: "Football",
      position: "Wide Receiver",
    },
    location: "Houston, TX",
    badge: "Verified",
    stats: [
      { value: "4.7s", label: "40yd" },
      { value: "12 TDs", label: "Season" },
      { value: "HS", label: "Level" },
    ],
  },
  {
    id: 3,
    status: "Top 5",
    banner:
      "https://images.unsplash.com/photo-1485313260896-6e6edf486858?fit=crop&q=80&w=1170",
    profile: {
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880",
      name: "Jamal Wright",
      sport: "Football",
      position: "Wide Receiver",
    },
    location: "Houston, TX",
    badge: "Professional",
    stats: [
      { value: "4.7s", label: "40yd" },
      { value: "12 TDs", label: "Season" },
      { value: "Pro", label: "Level" },
    ],
  },
  {
    id: 4,
    status: "Rising",
    banner:
      "https://images.unsplash.com/photo-1634051253771-c42e0e994bec?fit=crop&q=80&w=1332",
    profile: {
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880",
      name: "Jamal Wright",
      sport: "Football",
      position: "Wide Receiver",
    },
    location: "Houston, TX",
    badge: "Verified",
    stats: [
      { value: "4.7s", label: "40yd" },
      { value: "12 TDs", label: "Season" },
      { value: "D1", label: "Level" },
    ],
  },
];

const AthletesWeek = () => {
  return (
    <div>
      <SectionHeader title="Athletes of the Week" href="/" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {athletes?.map((athlete, idx) => (
          <AthleteCard key={idx} athlete={athlete} />
        ))}
      </div>
    </div>
  );
};

export default AthletesWeek;
