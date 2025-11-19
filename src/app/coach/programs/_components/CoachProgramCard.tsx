import { AnimatedButton } from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Image from "next/image";

interface Program {
  id: string;
  title: string;
  description: string;
  athletes: number;
  image: string;
  rating: number;
  timeLine: number;
}

interface CoachProgramCardProps {
  program: Program;
}

export default function CoachProgramCard({ program }: CoachProgramCardProps) {
  return (
    <div
      style={{
        background:
          "linear-gradient(179deg, rgba(255, 255, 255, 0.00) 23.3%, rgba(255, 255, 255, 0.74) 41.73%, #FFF 57.98%, #FFF 66.3%, #FFF 99.37%)",
      }}
      className=" rounded-2xl max-w-lg overflow-hidden "
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden ">
        <Image
          width={700}
          height={1200}
          src={program.image || "/placeholder.svg"}
          alt={program.title}
          className="w-full h-full object-cover"
        />
        {/* Status Badge */}

        <div className="bg-gradient-to-t from-[#fff] via-[#ffffffbd] to-[#ffffff00] h-32 -translate-y-32"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-base font-semibold text-dark mb-2">
          {program.title}
        </h3>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm text-[#141b34b3]">
            {program.description}
          </span>
        </div>
        <div className="flex items-center justify-between mb-5">
          {/* Athletes */}
          <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-dark">
            <Icon name="team-people" />
            <span>{program.athletes} Athletes</span>
          </div>
          {/* Rating */}
          <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-dark">
            <Icon name="star" />
            <span>{program.rating}</span>
          </div>

          {/* Time Line */}
          <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-dark">
            <Icon name="time" />
            <span>{program.timeLine} Weeks</span>
          </div>
        </div>

        {/* Button */}
        <AnimatedButton
          style={{
            borderRadius: "100px",
            background:
              "var(--Gradient, linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%))",
          }}
          className=" text-white font-normal px-4 text-sm py-2.5 rounded-full flex items-center gap-2 transition-all whitespace-nowrap w-full h-[40px]"
        >
          <Icon name="eye-icon" />
          View Program
        </AnimatedButton>
      </div>
    </div>
  );
}
