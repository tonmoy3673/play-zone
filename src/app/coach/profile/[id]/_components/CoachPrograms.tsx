import Card from "@/components/ui/Card";
import CoachProgramCard, { CoachProgramProp } from "./CoachProgramCard";
import { SectionHeader } from "@/components/shared/SectionHeader";

const programsData: CoachProgramProp[] = [
  {
    title: "QB Fundamentals Program",
    desc: "Master the essential quarterback skills and techniques",
    banner:
      "https://images.unsplash.com/photo-1631801751858-9f4f5a2fbdb4?fit=crop&q=80&w=1032",
    rating: "4.9 (4)",
    students: "25",
  },
  {
    title: "Speed & Agility Training",
    desc: "Develop explosive speed and agility for competitive edge",
    banner:
      "https://images.unsplash.com/photo-1707126458822-cb3f2458a3b9?fit=crop&q=80&w=580",
    rating: "4.9 (234)",
    students: "18 Athletes",
  },
  {
    title: "Mental Performance",
    desc: "Master the essential quarterback skills and techniques",
    banner:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80",
    rating: "4.9 (234)",
    students: "3.4K+",
    badge: "Featured",
  },
];

export default function CoachPrograms() {
  return (
    <Card>
      <SectionHeader
        title="Programs by Coach Michael Thompson"
        className="mb-4"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {programsData.map((program, idx) => (
          <CoachProgramCard key={idx} program={program} />
        ))}
      </div>
    </Card>
  );
}
