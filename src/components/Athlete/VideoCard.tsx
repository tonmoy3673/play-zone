import Icon from "@/utils/icon";
import Image from "next/image";

interface VideoCardProps {
  title: string;
  thumbnail: string;
  progress: number;
  dueDate: string;
  progressColor: string;
}

export function VideoCard({
  title,
  thumbnail,
  progress,
  dueDate,
  progressColor,
}: VideoCardProps) {
  return (
    <div
      className="flex flex-col h-full items-start min-w-[250px] gap-5 bg-[#ffffff66] hover:bg-white w-auto p-3 rounded-xl"
      // arbitrary box-shadow used for exact match from Figma
      style={{ boxShadow: "0px 4px 15.7px 0px rgba(178, 204, 255, 0.51)" }}
    >
      <div className="w-full relative overflow-hidden bg-white rounded-[12px] aspect-[16/9]">
        <Image
          width={1080}
          height={720}
          src={thumbnail || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon name="play_icon" width={24} height={24} />
        </div>
      </div>

      <div className="w-full bg-transparent p-0">
        <h3 className="font-medium text-gray-900 mb-3 text-sm line-clamp-2">
          {title}
        </h3>

        {/* Custom Range Slider */}
        <div className="relative w-full h-2 mb-3">
          <div className="absolute w-full h-2 bg-[#C4D4FD] rounded-full" />
          <div
            className={`absolute h-2 rounded-full transition-all bg-gradient-to-b from-[#7180df] to-[#2c49ff]`}
            style={{ width: `${progress}%` }}
          />
          <input
            type="range"
            min={0}
            max={100}
            value={progress}
            readOnly
            className="absolute w-full h-2 opacity-0 cursor-pointer"
          />
        </div>

        <div className="flex items-center justify-between text-xs w-full">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${progressColor}`} />
            <span className="text-[#141b3499]  font-medium">
              {progress}% Complete
            </span>
          </div>
          <div className="flex  items-center gap-1 text-gray-500">
            <Icon
              name="calendar"
              width={14}
              height={14}
              className="text-dark"
            />
            <span>{dueDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
