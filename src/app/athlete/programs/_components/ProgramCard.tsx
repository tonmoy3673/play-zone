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
          <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
            >
              <path
                opacity="0.4"
                d="M17.3116 13C17.9361 13 18.4327 12.6071 18.8787 12.0576C19.7915 10.9329 18.2927 10.034 17.7211 9.59383C17.14 9.14635 16.4911 8.89285 15.8333 8.83333M14.9999 7.16667C16.1505 7.16667 17.0833 6.23393 17.0833 5.08333C17.0833 3.93274 16.1505 3 14.9999 3"
                stroke="#141B34"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                opacity="0.4"
                d="M2.68822 13C2.0638 13 1.56714 12.6071 1.12121 12.0576C0.208326 10.9329 1.70714 10.034 2.27879 9.59383C2.8599 9.14635 3.50874 8.89285 4.16659 8.83333M4.58325 7.16667C3.43266 7.16667 2.49992 6.23393 2.49992 5.08333C2.49992 3.93274 3.43266 3 4.58325 3"
                stroke="#141B34"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M6.73642 10.592C5.88494 11.1185 3.65241 12.1936 5.01217 13.5389C5.6764 14.196 6.41619 14.666 7.34627 14.666H12.6536C13.5837 14.666 14.3234 14.196 14.9877 13.5389C16.3474 12.1936 14.1149 11.1185 13.2634 10.592C11.2667 9.35735 8.73313 9.35735 6.73642 10.592Z"
                stroke="#141B34"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.9166 4.25065C12.9166 5.86148 11.6107 7.16732 9.99992 7.16732C8.38909 7.16732 7.08325 5.86148 7.08325 4.25065C7.08325 2.63982 8.38909 1.33398 9.99992 1.33398C11.6107 1.33398 12.9166 2.63982 12.9166 4.25065Z"
                stroke="#141B34"
                strokeWidth="1.5"
              />
            </svg>
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
          <div className="flex items-center gap-2 text-sm text-gray-600">
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
