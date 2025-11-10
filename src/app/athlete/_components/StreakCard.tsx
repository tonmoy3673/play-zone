export default function StreakCard() {
  const today = new Date();
  const currentDayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, etc.

  // Get the start of the current week (Monday)
  const startOfWeek = new Date(today);
  const daysSinceMonday = currentDayOfWeek === 0 ? 6 : currentDayOfWeek - 1;
  startOfWeek.setDate(today.getDate() - daysSinceMonday);

  // Generate week data
  const weekDays = ["M", "T", "W", "T", "F", "S", "S"];
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
    <div className="w-full max-w-sm relative overflow-hidden rounded-3xl bg-gradient-to-tr from-[#ABD6FD] via-[#ABD6FD1a] to-[#E1EDFB] p-5 border-[0.5px] border-white border-l-[#ABD6FD] border-b-[#ABD6FD]">
      {/* Header Section */}
      <div className="w-full size-7 z-0 rounded-full blur-3xl absolute bottom-0 -right-12 bg-purple-300"></div>
      <div className="mb-0 flex items-center justify-between">
        <h2 className="text-xs font-semibold text-dark-100">Active Streak</h2>
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-gradient-to-b from-[#FDB631] via-[#EC4213] to-[#EC4213] px-4 py-1.5 shadow-md">
            <span className="text-xs font-semibold text-white">Hot Streak</span>
          </div>
          <div className="text-2xl bg-[#ffffff4d] rounded-full border border-white p-1">
            🔥
          </div>
        </div>
      </div>

      {/* Days Counter */}
      <div className="mb-0">
        <h1 className="text-2xl font-bold text-slate-900">12 Days</h1>
      </div>

      {/* Milestone Text */}
      <div className="mb-4 relative z-10">
        <p className="text-[10px] text-slate-700">Next milestone: 15 days</p>
      </div>

      {/* Week Calendar */}
      <div className="grid relative z-10 grid-cols-7 gap-4">
        {weekData.map((day, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <span className="text-xs font-medium text-slate-700">
              {day.label}
            </span>
            {day.isCompleted ? (
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500">
                <svg
                  className="h-6 w-6 p-1 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
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
    </div>
  );
}
