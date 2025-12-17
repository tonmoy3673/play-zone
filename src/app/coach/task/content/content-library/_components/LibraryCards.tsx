import LibraryCard, { type LibraryCardData } from "./LibraryCard";

const cards: LibraryCardData[] = [
  {
    title: "Total Content Views",
    stat: "1247",
    icon: { name: "eye" },
    trend: {
      iconName: "up",
      change: "12% increase",
      context: "from last month",
    },
  },
  {
    title: "Task Completion Rate",
    stat: "87%",
    icon: { name: "tick_double_02" },
    trend: {
      iconName: "up",
      change: "3% increase",
      context: "from last month",
    },
  },
  {
    title: "Content Storage Used",
    stat: "4.2 GB",
    icon: { name: "folder_file_storage" },
    trend: {
      iconName: "up",
      change: "42% of",
      context: "10 GB limit",
    },
  },
] as const;

export default function LibraryCards() {
  return (
    <section className="mb-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card) => (
          <LibraryCard key={card.title} card={card} />
        ))}
      </div>
    </section>
  );
}
