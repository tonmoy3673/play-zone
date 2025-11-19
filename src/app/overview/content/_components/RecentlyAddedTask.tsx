import Icon from "./icon";

export default function RecentlyAddedTask() {
  const programs = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1558451507-fa1a9432efb4?w=500",
      title: "Defensive Playbook Study",
      tag: "New",
      description:
        "Fundamentals of defensive schemes and play recognition for new players.",
      created: "Today, 10:45 AM",
      assignedTo: {
        name: "Michael T.",
        avatar:
          "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100",
      },
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500",
      title: "Advanced Route Running",
      tag: "New",
      description:
        "Specialized route tree variations with defensive read progressions.",
      created: "Today, 9:30 AM",
      assignedTo: {
        name: "Sarah Jonson",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
      },
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500",
      title: "Shoulder Rehab Exercises",
      tag: "New",
      description:
        "Custom throwing mechanics to avoid re-injury while maintaining form.",
      created: "Yesterday, 4:15 PM",
      assignedTo: {
        name: "Jason M.",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
      },
    },
  ];

  return (
    <section className="bg-[rgba(255,255,255,0.3)] overflow-clip relative rounded-[24px] p-5 mt-12 border border-white/80">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-lg font-medium text-dark">Recently Added Tasks</h2>
        <button className="bg-[rgba(255,255,255,0.6)] rounded-[16px] px-5 py-4 flex items-center gap-3 hover:bg-white transition-colors">
          <Icon name={"reload"} height={22} width={20} className="text-dark" />
          <span className="text-sm font-normal text-dark">Refresh</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {programs.map((program) => (
          <div
            key={program.id}
            className="bg-[rgba(255,255,255,0.6)] rounded-[16px] overflow-hidden flex flex-col h-[346px] relative"
          >
            {/* Image Section */}
            <div className="bg-[rgba(39,106,238,0.06)] h-[140px] rounded-[11px] m-2 relative overflow-hidden">
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="px-4 pb-4 flex flex-col gap-4 grow">
              <div className="flex flex-col gap-2 relative">
                <div className="flex items-start justify-between">
                  <h3 className="text-base font-medium text-dark leading-normal flex-1">
                    {program.title}
                  </h3>
                  <span className="bg-gradient-to-b from-[rgba(69,127,243,0.05)] to-[rgba(69,127,243,0.12)] border border-[rgba(69,127,243,0.1)] text-[#437EF7] h-6 px-2 py-1.5 rounded-[61px] text-[10px] font-medium flex items-center justify-center whitespace-nowrap">
                    {program.tag}
                  </span>
                </div>
                <p className="text-xs font-normal text-paragraph-dark leading-[1.4]">
                  {program.description}
                </p>
              </div>

              {/* Divider */}
              <div className="h-px bg-[#e7f2f5]" />

              {/* Metadata */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-normal text-paragraph-dark">
                    Created:
                  </span>
                  <span className="text-[10px] font-medium text-dark">
                    {program.created}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-normal text-paragraph-dark">
                    Assigned to:
                  </span>
                  <div className="flex items-center gap-1">
                    <img
                      src={program.assignedTo.avatar}
                      alt={program.assignedTo.name}
                      className="size-4 rounded-full object-cover"
                    />
                    <span className="text-[10px] font-medium text-dark">
                      {program.assignedTo.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
