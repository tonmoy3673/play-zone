"use client";

import Image from "next/image";

interface StatCard {
  label: string;
  value: string;
  sublabel: string;
  icon?: string;
}

interface Badge {
  title: string;
  description: string;
  bgImage: string;
}

export default function LeftProfile() {
  const stats: StatCard[] = [
    { label: "Current Rank", value: "#12", sublabel: "" },
    { label: "Total Points", value: "95 pts", sublabel: "" },
    { label: "Current Streak", value: "2 Days", sublabel: "", icon: "🔥" },
    { label: "Ongoing Program", value: "0%", sublabel: "" },
  ];

  const badges: Badge[] = [
    {
      title: "Streak Master",
      description: "7+ days",
      bgImage: "/achievements/Frame-2147239569.svg",
    },
    {
      title: "Century Club",
      description: "Completed 30 sessions",
      bgImage: "/achievements/Frame-2147239568.svg",
    },
    {
      title: "Century Club",
      description: "100 tasks completed",
      bgImage: "/achievements/Frame-2147239571.svg",
    },
    {
      title: "Iron Discipline",
      description: "7+ days",
      bgImage: "/achievements/Frame-2147239567.svg",
    },
    {
      title: "Task Crusher",
      description: "Completed 30 sessions",
      bgImage: "/achievements/Frame-2147239569.svg",
    },
    {
      title: "Quiz Ace",
      description: "100 tasks completed",
      bgImage: "/achievements/Frame-2147239569.svg",
    },
  ];

  return (
    <div className="max-w-sm bg-[#ffffff4d] rounded-3xl overflow-hidden">
      {/* Header with background image */}
      <div className="relative h-[170px] bg-cover bg-center bg-no-repeat ">
        <Image
          src={"https://i.ibb.co.com/NdBmTyNh/image.png"}
          alt="image"
          width={700}
          height={400}
          className="h-[163px] object-cover object-top"
        />
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(238, 246, 248, 0.00) 18.34%, rgba(238, 246, 248, 0.00) 39.57%, rgba(238, 246, 248, 0.83) 65.12%, #EEF6F8 89.57%)",
          }}
          className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-[#EEF6F8] via-[#eef6f8d4] to-transparent"
        />
        <div
          style={{
            background: "linear-gradient(180deg, #FFF 0%, #F69956 100%)",
          }}
          className="size-24 absolute -bottom-7 left-5 flex items-center justify-center p-[2px]  rounded-full  overflow-hidden "
        >
          <Image
            width={200}
            height={200}
            src="https://i.ibb.co.com/ZpXjWHb3/image.png"
            alt="Jason Martinez"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </div>

      {/* Main content */}
      <div className="mt-10 border-r border-l border-white px-5">
        <div className="">
          <h1 className="text-xl font-medium text-dark mb-2">Jason Martinez</h1>
          <p className="text-xs text-dark">
            <span className="">Sprint Specialist</span>
            <span className="mx-2">•</span>
            <span>Joined: Jan 2025</span>
          </p>
        </div>

        <hr className="border-gray-200 my-5" />

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5">
              <div className="flex items-baseline gap-1">
                {stat.icon && <span className="text-2xl">{stat.icon}</span>}
                <div className="text-2xl font-semibold text-dark">
                  {stat.value}
                </div>
              </div>
              <div className="text-[#141b34b3] mt-2 text-xs font-medium">
                {stat.sublabel || stat.label}
              </div>
              {stat.sublabel && (
                <div className="text-gray-500 text-sm mt-2">{stat.label}</div>
              )}
            </div>
          ))}
        </div>

        {/* Earned Badges section */}
        <div className="mb-7">
          <h2 className="text-base font-medium text-dark mb-4">
            Earned Badges
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {badges.map((badge, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl p-5 text-white flex items-end justify-center overflow-hidden  transition-transform hover:scale-[1.01]  size-[153px] `}
              >
                <Image
                  src={badge.bgImage}
                  alt="image"
                  width={400}
                  className="absolute top-0 left-0 right-0 bottom-0"
                  height={700}
                />
                {/* Content */}
                <div className="relative text-center">
                  <h3 className="text-xs font-medium mb-1">{badge.title}</h3>
                  <p className="text-white text-[10px]">{badge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
