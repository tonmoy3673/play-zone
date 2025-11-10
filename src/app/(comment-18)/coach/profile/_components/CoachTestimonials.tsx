import { SectionHeader } from "@/components/shared/SectionHeader";

export default function CoachTestimonials() {
  return (
    <div className="bg-white/60 rounded-2xl lg:rounded-3xl p-5 overflow-hidden">
      <SectionHeader
        title="What Athletes Are Saying"
        href="/coach/profile"
        linkText="View All Reviews"
      />

      {[1, 2, 3].map((i) => (
        <div key={i} className="border-b pb-3 last:border-0 last:pb-0">
          <p className="font-medium text-gray-800">Michael Thompson</p>
          <p className="text-sm text-gray-500">High School Senior</p>
          <p className="text-gray-600 mt-1 text-sm">
            “Coach transformed my game. My completion improved by 23%...”
          </p>
        </div>
      ))}
    </div>
  );
}
