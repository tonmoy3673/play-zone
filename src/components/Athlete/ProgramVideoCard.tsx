import Icon from "@/utils/icon";
import Image from "next/image";

interface VideoCardProps {
  instructorName: string;
  instructorBadge: string;
  instructorImage: string;
  title: string;
  description: string;
  thumbnail: string;
  dueDate: string;
  videoDuration?: string;
}

export function ProgramVideoCard({
  instructorName,
  instructorBadge,
  instructorImage,
  title,
  description,
  thumbnail,
  dueDate,
  videoDuration = "2:34",
}: VideoCardProps) {
  return (
    <div
      className="flex flex-col h-full items-start  gap-3 bg-white p-4 rounded-2xl"
      style={{ boxShadow: "0px 4px 15.7px 0px rgba(178, 204, 255, 0.51)" }}
    >
      {/* Video Thumbnail */}
      <div className="w-full relative overflow-hidden bg-gray-100 rounded-xl aspect-video">
        <Image
          width={1080}
          height={720}
          src={thumbnail || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon name="play_icon" width={32} height={32} />
        </div>
        {/* Duration badge */}
        <div className="absolute bottom-2 right-2 bg-[#ffffff05] border border-white rounded-lg bg-opacity-75 text-white text-xs px-2 py-1">
          {videoDuration}
        </div>
      </div>

      {/* Instructor Info */}
      <div className="flex items-center gap-3 w-full overflow-hidden">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-white shrink-0">
            <Image
              width={40}
              height={40}
              src={"/user.png"}
              alt={instructorName}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col space-y-1 leading-tight min-w-0 flex-1">
            <span
              className="text-[10px] text-dark whitespace-nowrap truncate relative group cursor-pointer"
              title={instructorName}
            >
              {instructorName}
              <span className="absolute left-0 top-full mt-1 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 whitespace-nowrap">
                {instructorName}
              </span>
            </span>
            <span
              className="text-[10px] text-[#141b34b3] whitespace-nowrap truncate relative group cursor-pointer"
              title="Quarterback • Senior"
            >
              Quarterback • Senior
              <span className="absolute left-0 top-full mt-1 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 whitespace-nowrap">
                Quarterback • Senior
              </span>
            </span>
          </div>
        </div>
        <div className="flex flex-col shrink-0">
          <span className="text-xs text-[#5C8FF7] whitespace-nowrap bg-[#5C8FF712] px-2 py-0.5 rounded-full">
            {instructorBadge}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="w-full flex flex-col gap-1 mt-2">
        <h3 className="font-medium text-dark text-base line-clamp-1">
          {title}
        </h3>
        <p className="text-xs text-[#141b34b3] line-clamp-1">{description}</p>

        {/* Due Date */}
        <div className="flex items-center gap-1  mt-1">
          <span className="text-sm text-dark">Due:</span>
          <span className="text-sm text-dark">{dueDate}</span>
        </div>
      </div>
    </div>
  );
}
