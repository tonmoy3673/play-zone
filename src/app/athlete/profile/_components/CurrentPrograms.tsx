"use client";
import Image from "next/image";

export default function CurrentPrograms() {
  const programsData = [
    {
      id: "1",
      title: "QB Fundamentals Program",
      coach: "Coach Martinez",
      coachImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      image:
        "https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=627",
      progress: 75,
    },
    {
      id: "2",
      title: "QB Fundamentals Program",
      coach: "Coach Martinez",
      coachImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=300&fit=crop",
      progress: 75,
    },
    {
      id: "3",
      title: "QB Fundamentals Program",
      coach: "Coach Martinez",
      coachImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      image:
        "https://images.unsplash.com/photo-1723965156429-547472562d98?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      progress: 75,
    },
  ];

  return (
    <div className="w-full mt-5 bg-[#ffffff4d] backdrop-blur-3xl border border-white p-5 rounded-3xl">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-lg font-medium text-[#000]">Current Programs</h1>
          <button className="text-sm font-medium text-[#276AEE]">
            View All
          </button>
        </div>

        {/* Programs Grid */}
        <div
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          className="flex items-start  gap-4 overflow-x-auto"
        >
          {programsData.map((program, idx) => (
            <ProgramCard key={idx} program={program} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface Program {
  id: string;
  title: string;
  coach: string;
  coachImage: string;
  image: string;
  progress: number;
}

interface ProgramCardProps {
  program: Program;
}

function ProgramCard({ program }: ProgramCardProps) {
  return (
    <div
      style={{
        background:
          "linear-gradient(179deg, rgba(255, 255, 255, 0.00) 23.3%, rgba(255, 255, 255, 0.74) 41.73%, #FFF 57.98%, #FFF 66.3%, #FFF 99.37%)",
      }}
      className="min-w-[290px] relative max-h-[290px] rounded-2xl max-w-sm overflow-hidden "
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden ">
        <Image
          width={700}
          height={1200}
          src={program.image || "/placeholder.svg"}
          alt={program.title}
          className="w-full h-full object-cover"
        />

        <div className="bg-gradient-to-t from-[#fff] via-[#ffffffbd] to-[#ffffff00] h-32 -translate-y-32"></div>
      </div>
      <div className="absolute  bottom-20">
        {/* Content */}
        <h3 className="text-base px-5 font-semibold text-dark mb-2">
          {program.title}
        </h3>
        <div className="flex px-5 items-center justify-between mb-1">
          {/* Coach Info */}
          <div className="flex items-center gap-3 mb-1">
            <Image
              width={200}
              height={200}
              src={program.coachImage || "/placeholder.svg"}
              alt={program.coach}
              className="w-[22px] h-[22px] rounded-full object-cover"
            />
            <span className="text-sm text-[#141b34b3]">{program.coach}</span>
          </div>
        </div>
      </div>
      <div className="px-5 py-12">
        {/* Progress Bar */}
        {program.progress !== undefined && (
          <div className="w-full bg-[#C4D4FD] rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full transition-all"
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
      </div>
    </div>
  );
}
