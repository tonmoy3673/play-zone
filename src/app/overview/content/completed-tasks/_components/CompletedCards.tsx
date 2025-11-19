import CompletedCard, { type CompletedCardData } from "./CompletedCard";

const cards: CompletedCardData[] = [
  {
    title: "Total Completed Tasks",
    stat: "247",
    icon: { name: "tick_double_02" },
    trend: {
      iconName: "up",
      iconClass: "text-[#38aa4b]",
      change: "12% increase",
      context: "from last month",
    },
  },
  {
    title: "Average Score",
    stat: "87%",
    icon: { name: "dashboard_speed_01" },
    trend: {
      iconName: "up",
      iconClass: "text-[#38aa4b]",
      change: "3% increase",
      context: "from last month",
    },
  },
  {
    title: "Top Performers",
    icon: { name: "medal_03", wrapperClass: "scale-y-[-1]" },
    person: {
      avatar:
        "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=100",
      name: "Jason Martinez",
      primary: "18 tasks completed",
      secondary: "this month",
    },
  },
  {
    title: "Completion Rate",
    stat: "92%",
    icon: { name: "star" },
    trend: {
      iconName: "up",
      iconClass: "text-[#38aa4b]",
      change: "5% increase",
      context: "from last month",
    },
  },
] as const;

export default function CompletedCards() {
  return (
    <section className="mb-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card) => (
          <CompletedCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}
