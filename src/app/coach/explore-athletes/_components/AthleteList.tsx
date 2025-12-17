import AthleteCard, { AthleteProp } from "./AthleteCard";

const athletes: AthleteProp[] = [
  {
    id: 1,
    status: "Top 5",
    banner: "/images/player-banner.png",
    profile: {
      image: "/images/player-profile.png",
      name: "Cameron Williamson",
      sport: "Basketball",
      position: "Forward",
    },
    location: "Syracuse, NY",
    badge: "Verified",
    stats: [
      { value: "Pro", label: "Aspires" },
      { value: "D1", label: "Committed" },
      { value: "2025", label: "Class" },
    ],
  },
  {
    id: 2,
    status: "Rising",
    banner: "/images/player-banner.png",
    profile: {
      image: "/images/player-profile.png",
      name: "Cameron Williamson",
      sport: "Basketball",
      position: "Forward",
    },
    location: "Syracuse, NY",
    badge: "Professional",
    stats: [
      { value: "Pro", label: "Aspires" },
      { value: "D1", label: "Committed" },
      { value: "2025", label: "Class" },
    ],
  },
  {
    id: 3,
    status: "Top 5",
    banner: "/images/player-banner.png",
    profile: {
      image: "/images/player-profile.png",
      name: "Cameron Williamson",
      sport: "Basketball",
      position: "Forward",
    },
    location: "Syracuse, NY",
    badge: "Verified",
    stats: [
      { value: "Pro", label: "Aspires" },
      { value: "D1", label: "Committed" },
      { value: "2025", label: "Class" },
    ],
  },
  {
    id: 4,
    status: "Rising",
    banner: "/images/player-banner.png",
    profile: {
      image: "/images/player-profile.png",
      name: "Cameron Williamson",
      sport: "Basketball",
      position: "Forward",
    },
    location: "Syracuse, NY",
    badge: "Professional",
    stats: [
      { value: "Pro", label: "Aspires" },
      { value: "D1", label: "Committed" },
      { value: "2025", label: "Class" },
    ],
  },
];

const AthleteList = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {athletes.map((athlete) => (
        <AthleteCard key={athlete.id} athlete={athlete} />
      ))}
    </div>
  );
};

export default AthleteList;
