"use client";
import Container from "@/components/ui/Container";
import Checkbox from "@/components/ui/Checkbox";
import Icon from "@/utils/icon";
import React, { useState } from "react";
import Image from "next/image";

interface Athlete {
  id: string;
  name: string;
  avatar: string;
  isAdmin?: boolean;
}

const NotifyMembers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAthletes, setSelectedAthletes] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  // Mock athlete data
  const athletes: Athlete[] = [
    {
      id: "1",
      name: "Mike Thompson",
      avatar: "/user.png",
      isAdmin: true,
    },
    {
      id: "2",
      name: "Marvin McKinney",
      avatar: "/user.png",
      isAdmin: true,
    },
    {
      id: "3",
      name: "Jenny Wilson",
      avatar: "/user.png",
    },
    {
      id: "4",
      name: "Kristin Watson",
      avatar: "/user.png",
    },
    {
      id: "5",
      name: "Ralph Edwards",
      avatar: "/user.png",
    },
    {
      id: "6",
      name: "Brooklyn Simmons",
      avatar: "/user.png",
    },
    {
      id: "7",
      name: "Eleanor Pena",
      avatar: "/user.png",
    },
    {
      id: "8",
      name: "Darlene Robertson",
      avatar: "/user.png",
    },
    {
      id: "9",
      name: "Robert Fox",
      avatar: "/user.png",
    },
    {
      id: "10",
      name: "Dianna Russell",
      avatar: "/user.png",
    },
    {
      id: "11",
      name: "Devon Lane",
      avatar: "/user.png",
    },
    {
      id: "12",
      name: "Darrell Steward",
      avatar: "/user.png",
    },
  ];

  // Filter athletes based on search term
  const filteredAthletes = athletes.filter((athlete) =>
    athlete.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle individual athlete selection
  const handleAthleteToggle = (athleteId: string) => {
    setSelectedAthletes((prev) => {
      const newSelection = prev.includes(athleteId)
        ? prev.filter((id) => id !== athleteId)
        : [...prev, athleteId];

      // Update select all state
      setSelectAll(newSelection.length === filteredAthletes.length);
      return newSelection;
    });
  };

  // Handle select all toggle
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedAthletes([]);
      setSelectAll(false);
    } else {
      setSelectedAthletes(filteredAthletes.map((athlete) => athlete.id));
      setSelectAll(true);
    }
  };

  return (
    <div className="">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-black mb-1">
          Notify Members
        </h1>
        <span className="text-sm text-[#141b3499]">
          Create the core message for your announcement
        </span>
      </div>
      <Container>
        <div className="bg-[#FFFFFF4D] p-8 border border-white">
          {/* Header */}
          <div className="mb-6">
            <label className="block text-base font-medium text-black mb-4">
              Select from Existing Athletes
            </label>

            {/* Search Input */}
            {/* Search Input */}
            <div className="relative mb-4 grid grid-cols-3 gap-4 items-center">
              <div className="col-span-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Icon
                      name="search"
                      height={20}
                      width={20}
                      className="text-gray-400"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Search athletes"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-[#E7F2F5] border border-[#E1EAED] rounded-xl text-gray-700 placeholder-gray-500 focus:outline-none transition"
                  />
                </div>
              </div>

              {/* Select All */}
              <div className="col-span-1 flex items-center justify-end gap-3">
                <Checkbox
                  checked={selectAll}
                  onChange={handleSelectAll}
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium text-gray-700">
                  Select All
                </span>
              </div>
            </div>
          </div>

          {/* Athletes List */}
          <div className="space-y-3">
            {filteredAthletes.map((athlete) => (
              <div
                key={athlete.id}
                className="flex items-center justify-between space-y-4 border-b border-white rounded-xl transition-colors"
              >
                <div className="flex items-center gap-1">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full">
                    <Image
                      src={athlete.avatar}
                      alt={athlete.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  </div>

                  {/* Name and Admin Badge */}
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-dark mb-1">
                      {athlete.name}
                    </span>
                    {athlete.isAdmin && (
                      <span className="text-xs bg-black text-white px-2 py-1 rounded-md w-fit">
                        Admin
                      </span>
                    )}
                  </div>
                </div>

                {/* Checkbox */}
                <Checkbox
                  checked={selectedAthletes.includes(athlete.id)}
                  onChange={() => handleAthleteToggle(athlete.id)}
                  className="w-5 h-5"
                />
              </div>
            ))}
          </div>

          {filteredAthletes.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <span className="text-sm">No athletes found</span>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default NotifyMembers;
