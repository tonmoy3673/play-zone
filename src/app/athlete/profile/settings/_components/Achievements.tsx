"use client";

import Image from "next/image";

export default function Achievements() {
  const achievementsData = [
    {
      id: 1,
      image: "/achievements/Frame-2147239567.svg",
    },
    {
      id: 2,
      image: "/achievements/Frame-2147239568.svg",
    },
    {
      id: 3,
      image: "/achievements/Frame-2147239569.svg",
    },
    {
      id: 4,
      image: "/achievements/Frame 2147239570.svg",
    },
    {
      id: 5,
      image: "/achievements/Frame-2147239571.svg",
    },
    {
      id: 6,
      image: "/achievements/Frame-21472395688.svg",
    },
  ];

  return (
    <div
      style={{ borderRadius: "30px", background: "rgba(255, 255, 255, 0.30)" }}
      className="w-full space-y-5 backdrop-blur-3xl p-8 border border-white"
    >
      <div className="flex items-center justify-between w-full">
        <h3 className="text-xl font-medium text-[#000]">Achievements</h3>
      </div>
      <div className="bg-white p-5 rounded-3xl">
        <h5 className="text-base font-medium text-dark mb-4">Earned badges</h5>
        <div className="flex items-center gap-4 flex-wrap w-full">
          {achievementsData.map((achievement) => (
            <Image
              key={achievement.id}
              src={achievement?.image}
              alt="image"
              width={400}
              height={400}
              className={`size-[153px]`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
