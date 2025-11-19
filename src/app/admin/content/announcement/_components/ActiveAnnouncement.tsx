import AnnounceCard, { AnnounceProp } from "./AnnounceCard";
import { SectionHeader } from "@/components/shared/SectionHeader";

const announces: AnnounceProp[] = [
  {
    title: "10 Essential Exercises for Building Core Strength",
    description:
      "Discover the most effective core exercises that will transform your training routine. From planks to Russian twists, learn proper form and progression techniques Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam fuga, consequatur quidem veritatis reiciendis soluta provident accusantium earum, quam hic sequi. Explicabo corporis ex mollitia eius? Omnis veniam recusandae et?",
    action: "System Update",
    status: "Active",
    push: "On",
    email: "On",
    target: "Free users",
    date: "Jan 16, 2025",
  },
  {
    title: "Limited Time: 30% Off Premium",
    description:
      "Maximize your workout performance with these evidence-based nutrition strategies. Leam what to eat, when to eat, and how to fuel your body for optimal results. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam fuga, consequatur quidem veritatis reiciendis soluta provident accusantium earum, quam hic sequi. Explicabo corporis ex mollitia eius? Omnis veniam recusandae et?",
    action: "Promotion",
    status: "Active",
    push: "On",
    email: "On",
    target: "Free users",
    date: "Jan 16, 2025",
  },
];

const ActiveAnnouncement = () => {
  return (
    <div>
      <SectionHeader
        className="mb-4"
        title="Active Announcement"
        titleClass="text-base"
      />

      <div className="grid gap-3">
        {announces?.map((announce, idx) => (
          <AnnounceCard key={idx} announce={announce} />
        ))}
      </div>
    </div>
  );
};

export default ActiveAnnouncement;
