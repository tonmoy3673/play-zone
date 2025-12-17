"use client";
import Container from "@/components/ui/Container";
import Checkbox from "@/components/ui/Checkbox";
import Icon from "@/utils/icon";
import React, { useState } from "react";
import Image from "next/image";
import { AnimatedButton } from "@/components/ui/Button";

interface Athlete {
  id: string;
  name: string;
  avatar: string;
  isAdmin?: boolean;
}

const Publish = () => {
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
          Review & Publish
        </h1>
        <span className="text-sm text-[#141b3499]">
          Create the core message for your announcement
        </span>
      </div>
      <Container>
        <div className="bg-[#FFFFFF4D] p-8 border border-white">
          {/* Header */}
          <div className="mb-6">
            <label className="block text-base font-normal text-black mb-4">
              Team Strategy Session - Join Now !
            </label>

            {/* Search Input */}
            <div className="bg-[#FFFFFF4D] p-6 border border-white rounded-xl mb-6">
              <div className="bg-white rounded-xl h-[150px] flex items-center justify-center">
                <p className="text-sm font-normal text-dark">Content Preview</p>
              </div>

              <div className="flex gap-3 items-center mt-6 mb-6">
                <Image
                  src="/user.png"
                  alt="User Avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-dark">
                    Posted by - Coach Michael
                  </span>
                  <span className="text-xs text-[#141b34b3]">Just Now</span>
                </div>
              </div>
              <p className="text-xs font-normal text-[#141b34b3] w-1/2">
                All team members are required to join our strategy session. We
                will be discussing upcoming tournament preparation and new
                tactical approaches.
              </p>

              <div className="flex justify-between items-center mt-6">
                <div className="flex gap-4">
                  <div className="flex gap-1 items-center">
                    <Icon name="view" height={16} width={16} />
                    <span className="text-xs font-medium text-dark">
                      Views: 120
                    </span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <Icon name="wishlist" height={16} width={16} />
                    <span className="text-xs font-medium text-dark">
                      24 Likes
                    </span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <Icon name="comment" height={16} width={16} />
                    <span className="text-xs font-medium text-dark">
                      45 Comments
                    </span>
                  </div>
                </div>
                <AnimatedButton
                  style={{
                    borderRadius: "100px",
                    background:
                      "var(--Gradient, linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%))",
                  }}
                  className=" text-white font-normal px-5 text-sm py-2.5 rounded-full flex items-center gap-2 transition-all whitespace-nowrap"
                >
                  <Icon name="video" height={16} width={16} />
                  Join Live
                </AnimatedButton>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Publish;
