import Image from "next/image";

export default function StreakCard() {
  const today = new Date();
  const currentDayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, etc.

  // Get the start of the current week (Monday)
  const startOfWeek = new Date(today);
  const daysSinceMonday = currentDayOfWeek === 0 ? 6 : currentDayOfWeek - 1;
  startOfWeek.setDate(today.getDate() - daysSinceMonday);

  // Generate week data
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const weekData = weekDays.map((day, index) => {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + index);

    const dayNumber = date.getDate();
    const isToday = date.toDateString() === today.toDateString();
    const isPast = date < today || isToday;

    return {
      label: day,
      dayNumber,
      isCompleted: isPast,
      isToday,
    };
  });
  return (
    <div className="w-full max-w-xl relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#ABD6FD] via-[#ABD6FD1a] to-[#E1EDFB] p-5 border-[0.5px] border-white border-l-[#ABD6FD] border-b-[#ABD6FD]">
      {/* Header Section */}
      <div className="w-full size-12 z-0 rounded-full blur-3xl absolute bottom-0 -right-12 bg-purple-300"></div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xs font-semibold text-dark-100">Active Streak</h2>
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-gradient-to-b from-[#FDB631] via-[#EC4213] to-[#EC4213] px-4 py-1.5">
            <span className="text-xs font-semibold text-white">Hot Streak</span>
          </div>
        </div>
      </div>

      {/* Week Calendar */}
      <div className="grid relative z-10 grid-cols-7 gap-4">
        {weekData.map((day, index) => (
          <div
            key={index}
            className="flex w-[50px] h-[80px] justify-between flex-col bg-[#ffffff1a] rounded-[40px] border-white border-l border-r items-center px-0 py-4 gap-2"
          >
            <span className="text-xs font-medium text-slate-700">
              {day.label}
            </span>
            {day.isCompleted ? (
              <div className="flex size-5 items-center justify-center rounded-full ">
                <Image
                  src={"/Group 2085665523.svg"}
                  alt="image"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain"
                />
              </div>
            ) : (
              <div className="flex h-6 w-6 items-center justify-center">
                <span className="text-[10px] font-semibold text-slate-700">
                  {day.dayNumber}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="text-xs font-medium text-dark mt-5">
        4 out of 7 days active this week
      </p>
    </div>
  );
}
