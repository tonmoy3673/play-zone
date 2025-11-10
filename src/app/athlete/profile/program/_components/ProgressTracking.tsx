"use client";

interface ProgressItem {
  id: string;
  label: string;
  percentage: number;
}

export default function ProgressTracking() {
  const progressItems: ProgressItem[] = [
    {
      id: "1",
      label: "Overall Program Progress",
      percentage: 55,
    },
    {
      id: "2",
      label: "Skill Development",
      percentage: 45,
    },
    {
      id: "3",
      label: "Knowledge Base",
      percentage: 82,
    },
    {
      id: "4",
      label: "Consistency",
      percentage: 30,
    },
  ];

  return (
    <div className="w-full border mt-4 border-white bg-[#ffffff99] p-5 pb-9 rounded-3xl">
      {/* Header */}
      <h2 className="text-lg font-medium text-black mb-6">Progress Tracking</h2>

      {/* Progress Items */}
      <div className="space-y-8">
        {progressItems.map((item) => (
          <div key={item.id} className="flex flex-col gap-3">
            {/* Label and Percentage */}
            <div className="flex mb-4 items-center justify-between">
              <p className="text-sm font-medium text-dark">{item.label}</p>
              <p className="text-[10px] text-dark font-medium">
                {item.percentage}% Complete
              </p>
            </div>

            {/* Progress Bar */}
            <div className="relative w-full h-2 bg-[#C4D4FD] rounded-full ">
              {/* Filled portion */}
              <div
                className="absolute h-full bg-gradient-to-r z-1 from-[#7180DF] to-[#2C49FF] rounded-full transition-all duration-300"
                style={{ width: `${item.percentage}%` }}
              />

              {/* Thumb/Slider indicator */}
              <div
                className="absolute top-1/2 -translate-y-1/2 -left- z-10 size-4 bg-transparent backdrop-blur-sm rounded-full "
                style={{ left: `calc(${item.percentage}% - 10px)` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
