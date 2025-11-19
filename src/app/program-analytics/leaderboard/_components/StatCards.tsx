import StatCard, { StateProp } from "./StatCard";

const stats: StateProp[] = [
  {
    title: "Top Performer",
    icon: "fire_emoji",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100",
    name: "Alex Rodriguez",
    subtitle: "3,247 Points",
    detail: "98% Completion",
  },
  {
    title: "Longest Streak",
    icon: "fire_emoji",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100",
    name: "Alex Rodriguez",
    subtitle: "🔥 28 Days",
    detail: "Daily login Streak",
  },
  {
    title: "Most Improvement",
    icon: "fire_emoji",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100",
    name: "Alex Rodriguez",
    subtitle: "+ 47% Score",
    detail: "This Month",
  },
];

const StatCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats?.map((stat, idx) => (
        <StatCard key={idx} stat={stat} />
      ))}
    </div>
  );
};

export default StatCards;
