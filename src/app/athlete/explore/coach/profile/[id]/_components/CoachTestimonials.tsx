import Card from "@/components/ui/Card";
import { SectionHeader } from "@/components/shared/SectionHeader";
import Image from "next/image";
import Icon from "@/utils/icon";

export default function CoachTestimonials() {
  return (
    <Card>
      <SectionHeader
        title="What Athletes Are Saying"
        href="/coach/profile"
        linkText="View All Reviews"
      />

      <div className="space-y-2.5">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="bg-white/60 space-y-4 md:rounded-[21px]">
            <div className="flex items-end flex-wrap gap-3 justify-between">
              <div className="flex items-center gap-2">
                <div className="size-10 relative overflow-hidden rounded-full">
                  <Image
                    src={
                      "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?q=80&w=735"
                    }
                    alt="Profile"
                    fill
                    className="size-full object-cover"
                  />
                </div>
                <div className="space-y-0.5">
                  <p className="text-sm font-semibold text-dark">
                    Michael Thompson
                  </p>
                  <p className="text-xs text-dark/70">
                    QB • High School Senior
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <Icon height={20} width={20} name="star" />
                <Icon height={20} width={20} name="star" />
                <Icon height={20} width={20} name="star" />
                <Icon height={20} width={20} name="star" />
                <Icon
                  height={20}
                  width={20}
                  name="star_half"
                  className="text-[#FF8C1A]"
                />
              </div>
            </div>
            <p className="text-dark/70 text-xs">
              &ldquo;Coach Martinez completely transformed my game. His QB
              fundamentals program helped me earn a full scholarship to a D1
              school. The personalized feedback and attention to detail is
              incredible.&ldquo;
            </p>
          </Card>
        ))}
      </div>
    </Card>
  );
}
