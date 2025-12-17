"use client";
import VideoUpload from "@/components/Athlete/VideoUpload";
import Container from "@/components/ui/Container";
import Select from "@/components/ui/Select";
import Switch from "@/components/ui/Switch";
import Icon from "@/utils/icon";
import React, { useState } from "react";
import PopupModal from "@/components/Modal/PopupModal";

const AttachContent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [locationEnabled, setLocationEnabled] = useState(true);
  const [location, setLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categories = [
    {
      id: "physical",
      label: "Link a Video",
      icon: (
        <>
          <Icon name="video" height={20} width={20} />
        </>
      ),
      isModalOpen: true,
    },
    {
      id: "technical",
      label: "Add a Location",
      icon: (
        <>
          <Icon name="location" height={20} width={20} />
        </>
      ),
    },
    {
      id: "mental",
      label: "Link a Task",
      icon: (
        <>
          <Icon name="note" height={20} width={20} />
        </>
      ),
    },
    {
      id: "quiz",
      label: "Upload Media",
      icon: (
        <>
          <Icon name="video" height={20} width={20} />
        </>
      ),
    },
  ];
  const schedule_time = [
    { id: "1", label: "Publish Now", value: "publish_now" },
    { id: "2", label: "Schedule for later", value: "schedule" },
  ];
  const [selectedSchedule, setSelectedSchedule] = useState<string | null>(null);

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-black mb-1">
          Attach Content{" "}
        </h1>
        <span className="text-sm text-[#141b3499]">
          Create the core message for your announcement
        </span>
      </div>
      <Container>
        <div className="bg-[#FFFFFF4D] p-8 border border-white">
          {/* Task Category */}
          <div className="mb-8">
            <label className="block text-base font-medium text-black mb-4">
              Attach Content
            </label>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setOpenModal(category.id === "physical");
                  }}
                  className={`p-6 rounded-xl border-2 transition-all flex flex-col justify-center items-center gap-2 ${
                    selectedCategory === category.id
                      ? "border-blue-500 bg-blue-50"
                      : "border-white bg-[#FFFFFF99]"
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

          <div className="mb-8">
            <label className="block text-sm font-medium text-dark mb-3">
              Announcement Type
            </label>
            <div className="grid grid-cols-2 gap-2">
              {schedule_time.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedSchedule(category.id)}
                  className={`p-6 rounded-2xl border-2 transition-all flex flex-row justify-center h-14 items-center gap-3 ${
                    selectedSchedule === category.id
                      ? "border-blue-500 bg-blue-50"
                      : "border-white bg-[#FFFFFF99]"
                  }`}
                >
                  <span className="text-sm font-normal text-[#141b34b3] text-center">
                    {category.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Title Task */}
          <div className="mb-5">
            <label className="block text-sm font-normal text-dark mb-3">
              CTA Button Type
            </label>
            <input
              type="text"
              placeholder="Enter button type"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-0 focus:ring-blue-500 focus:bg-white transition"
            />
          </div>
        </div>
      </Container>
      <PopupModal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <div className="bg-white rounded-[30px] p-6 h-auto">
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm font-normal text-dark">Upload Videos</p>
            <button onClick={() => setOpenModal(false)}>
              <Icon name="close" height={20} width={20} />
            </button>
          </div>

          <VideoUpload />
        </div>
      </PopupModal>
    </div>
  );
};

export default AttachContent;
