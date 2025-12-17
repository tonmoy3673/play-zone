"use client";
import Checkbox from "@/components/ui/Checkbox";
import Container from "@/components/ui/Container";
import Select from "@/components/ui/Select";
import Switch from "@/components/ui/Switch";
import Icon from "@/utils/icon";
import React, { useState } from "react";

const Compose = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [locationEnabled, setLocationEnabled] = useState(true);
  const [location, setLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [pinToFeed, setPinToFeed] = useState(false);
  const categories = [
    {
      id: "general",
      label: "General",
      icon: (
        <>
          <Icon name="general" height={20} width={20} />
        </>
      ),
    },
    {
      id: "live-session",
      label: "Live Session",
      icon: (
        <>
          <Icon name="video" height={20} width={20} />
        </>
      ),
    },
    {
      id: "event",
      label: "Event",
      icon: (
        <>
          <Icon name="calendar" height={20} width={20} />
        </>
      ),
    },
  ];
  return (
    <div className="">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-black mb-1">Compose </h1>
        <span className="text-sm text-[#141b3499]">
          Create the core message for your announcement
        </span>
      </div>
      <Container>
        <div className="bg-[#FFFFFF4D] p-8 border border-white">
          {/* Title Task */}
          <div className="mb-5">
            <label className="block text-sm font-normal text-dark mb-3">
              Announcement Title
            </label>
            <input
              type="text"
              placeholder="Enter announcement title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-0 focus:ring-blue-500 focus:bg-white transition"
            />
          </div>

          {/* Description */}
          <div className="mb-1">
            <label className="block text-sm font-normal text-dark mb-3">
              Message / Description
            </label>
            <textarea
              placeholder="Write your announcement details..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-0 focus:ring-blue-500 focus:bg-white transition resize-none"
            />
          </div>
          <p className="text-xs text-[#141b34b3] mb-3">
            Be clear and concise about what you want your athletes to take
          </p>

          {/* Pin to top of feed */}
          <div className="mb-8">
            <div className="flex items-center justify-between p-4 bg-[#FFFFFF99] border border-white rounded-2xl">
              <div className="flex items-center gap-3">
                <div className="p-2">
                  <Icon name="pin" height={20} width={20} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-dark">
                    Pin to top of feed
                  </h3>
                </div>
              </div>
              <Checkbox
                name="coach_notify"
                onChange={(e) => console.log("Checked:", e.target.checked)}
              />
            </div>
          </div>

          {/* Task Category */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-dark mb-3">
              Announcement Type
            </label>
            <div className="grid grid-cols-3 gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-6 rounded-2xl border-2 transition-all flex flex-row justify-center h-14 items-center gap-3 ${
                    selectedCategory === category.id
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 bg-[#FFFFFF99] hover:border-gray-300"
                  }`}
                >
                  <span className="text-3xl">{category.icon}</span>
                  <span className="text-sm font-normal text-[#141b34b3] text-center">
                    {category.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Compose;
