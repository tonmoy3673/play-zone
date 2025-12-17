import StaffCard, { type StaffCardData } from "./StaffCard";

const cards: StaffCardData[] = [
  {
    title: "Total Reviews",
    stat: "248",
    icon: { name: "tick_double_02" },
    trend: {
      iconName: "up",
      change: "12% increase",
      context: "from last month",
    },
  },
  {
    title: "Average Rating",
    stat: "4.7",
    icon: { name: "star_void" },
    trend: {
      iconName: "up",
      change: "3% increase",
      context: "from last month",
    },
    rating: true,
  },
  {
    title: "Top Reviewer",
    icon: { name: "medal_03" },
    person: {
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
      name: "Jason Martinez",
      primary: "87 reviews",
      secondary: "this month",
    },
  },
] as const;

export default function StaffCards() {
  return (
    <section className="mb-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card) => (
          <StaffCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}
