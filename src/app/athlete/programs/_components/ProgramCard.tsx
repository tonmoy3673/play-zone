import Icon from "@/components/ui/Icon";
import Image from "next/image";

interface Program {
  id: string;
  title: string;
  coach: string;
  coachImage: string;
  athletes: number;
  image: string;
  status: "LIVE" | "ONGOING" | "UPCOMING" | "COMPLETE";
  progress?: number;
  date?: string;
}

interface ProgramCardProps {
  program: Program;
}

export default function ProgramCard({ program }: ProgramCardProps) {
  const statusColors = {
    LIVE: "bg-red-500",
    ONGOING: "bg-blue-600",
    UPCOMING: "bg-orange-500",
    COMPLETE: "bg-blue-600",
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(179deg, rgba(255, 255, 255, 0.00) 23.3%, rgba(255, 255, 255, 0.74) 41.73%, #FFF 57.98%, #FFF 66.3%, #FFF 99.37%)",
      }}
      className=" rounded-2xl max-w-md overflow-hidden "
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
        <div
          className={`absolute top-4 left-4 ${
            statusColors[program.status]
          } text-white px-3 py-1 rounded-lg text-xs font-medium`}
        >
          {program.status}
        </div>
        <div className="bg-gradient-to-t from-[#fff] via-[#ffffffbd] to-[#ffffff00] h-32 -translate-y-32"></div>
      </div>

      {/* Content */}
      <div className="p-6 pb-12">
        <h3 className="text-base font-semibold text-dark mb-2">
          {program.title}
        </h3>
        <div className="flex items-center justify-between mb-5">
          {/* Coach Info */}
          <div className="flex items-center gap-3 mb-4">
            <Image
              width={200}
              height={200}
              src={program.coachImage || "/placeholder.svg"}
              alt={program.coach}
              className="w-[22px] h-[22px] rounded-full object-cover"
            />
            <span className="text-sm text-[#141b34b3]">{program.coach}</span>
          </div>

          {/* Athletes Count */}
          <div className="flex items-center gap-2 mb-4 text-sm text-[#141b3499]">
           
            <Icon name="team-people" />
            <span>{program.athletes}K Athletes</span>
          </div>
        </div>
        {/* Progress Bar */}
        {program.progress !== undefined && (
          <div className="w-full bg-[#C4D4FD] rounded-full h-3">
            <div
              className="bg-blue-600 h-3 rounded-full transition-all"
              style={{
                width: `${program.progress}%`,
                borderRadius: "80px",
                background: "linear-gradient(90deg, #7180DF 0%, #2C49FF 100%)",
              }}
            />
            <div className="flex justify-between items-center mt-2">
              <span className="text-xs font-medium text-dark">Progress</span>
              <p className="text-xs flex items-center gap-1 font-medium text-dark">
                <span
                  className="block size-3"
                  style={{
                    borderRadius: "4px",
                    borderTop: "1px solid #68B0EA",
                    background:
                      "linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%)",
                  }}
                ></span>
                {program.progress}% Complete
              </p>
            </div>
          </div>
        )}

        {/* Date/Time */}
        {program.date && (
          <div className="flex items-center gap-2 text-sm text-[#141b3499]">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{program.date}</span>
          </div>
        )}
      </div>
    </div>
  );
}
