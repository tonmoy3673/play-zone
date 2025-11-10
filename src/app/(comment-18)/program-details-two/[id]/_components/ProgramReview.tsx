import Icon from "@/utils/icon";
import Image from "next/image";
import { SectionHeader } from "@/components/shared/SectionHeader";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  timeAgo: string;
  rating: number;
  text: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Coach Amanda",
    role: "College Player",
    timeAgo: "3 Weeks Ago",
    rating: 4.5,
    text: "Great improvement on your lateral movement drills. Your change of direction is much smoother now. Let's work on maintaining lower body control when transitioning between forward and backward movement.",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fit=crop&q=80&w=580",
  },
  {
    id: 2,
    name: "Coach Amanda",
    role: "College Player",
    timeAgo: "3 Weeks Ago",
    rating: 4.5,
    text: "Great improvement on your lateral movement drills. Your change of direction is much smoother now. Let's work on maintaining lower body control when transitioning between forward and backward movement.",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fit=crop&q=80&w=580",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      <Icon name="star" height={16} width={16} />
      <Icon name="star" height={16} width={16} />
      <Icon name="star" height={16} width={16} />
      <Icon name="star" height={16} width={16} />
      <Icon name="star_half" height={16} width={16} />
    </div>
  );
}

const ProgramReview = () => {
  return (
    <div className="p-5 rounded-2xl border backdrop-blur-3xl bg-[#ffffff4d] border-white">
      <SectionHeader
        title="What Athletes Are Saying"
        href="/"
        linkText="View All Reviews"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="border border-gray-200 rounded-lg p-6"
          >
            {/* Header with Avatar and Info */}
            <div className="flex items-start justify-between flex-wrap space-y-2 mb-4">
              <div className="flex items-center gap-3">
                <div className="relative size-10 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="size-full object-cover"
                  />
                </div>

                <div className="space-y-0.5">
                  <h3 className="font-semibold text-dark text-sm">
                    {testimonial.name}
                  </h3>
                  <p className="text-dark/70 text-xs">
                    {testimonial.role} • {testimonial.timeAgo}
                  </p>
                </div>
              </div>
              <StarRating rating={testimonial.rating} />
            </div>

            {/* Testimonial Text */}
            <p className="text-dark/70 text-xs">
              &quot;{testimonial.text}&quot;
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramReview;
