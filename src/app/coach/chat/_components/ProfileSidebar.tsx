import React, { useState } from "react";
import Image from "next/image";
import Icon from "@/utils/icon";

const ProfileSidebar = () => {
  const [activeTab, setActiveTab] = useState("photos");

  const photos = [
    "/img1.svg",
    "/img2.svg",
    "/img1.svg",
    "/img2.svg",
    "/img1.svg",
    "/img2.svg",
  ];

  const videos = [
    "/img2.svg",
    "/img1.svg",
    "/img1.svg",
    "/img2.svg",
    "/img1.svg",
    "/img2.svg",
  ];

  const documents = [
    "/img2.svg",
    "/img1.svg",
    "/img1.svg",
    "/img2.svg",
    "/img1.svg",
    "/img2.svg",
  ];

  return (
    <div className="bg-[#FFFFFF99] p-6 border border-white rounded-3xl h-full">
      <h1 className="text-base font-medium">Profile</h1>
      <div className="mt-7">
        <div className="flex items-center justify-center mb-5">
          <img
            src="/avatar1.svg"
            alt="User Avatar"
            width={56}
            height={56}
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex items-center flex-col justify-center">
          <p className="mt-3 text-center text-[18px] font-medium text-black">
            Kevin Robertson
          </p>
          <div className="flex gap-1 text-center items-center justify-center mt-2">
            <Icon name="location" height={12} width={12} color="#000000" />
            <p className="text-xs text-[#59616C] font-normal">
              Los Angeles, CA
            </p>
          </div>

          <div className="mt-4 mb-5">
            <span className="text-[#59616C] font-normal text-xs text-center flex items-center justify-center w-[234px]">
              WR | San Diego High | 6'1" 185 | All-League '24 | Speed & hands.
            </span>
          </div>

          <button className="bg-primary-gradient text-white py-2 px-4 rounded-full text-sm font-medium">
            View More
          </button>
        </div>
      </div>

      <div className="">
        <div className="pt-20">
          <div className="grid grid-cols-3 px-10 gap-8 border-b border-[#DBE7FF] pb-3">
            <button
              onClick={() => setActiveTab("videos")}
              className={`transition-colors relative pb-2 ${
                activeTab === "videos" ? "text-[#5C8FF7]" : "text-gray-400"
              }`}
            >
              <Icon name="chat_video" width={20} height={20} />
              {activeTab === "videos" && (
                <div className="absolute -bottom-3 border-2 w-8 h-0.5 bg-[#5C8FF7] rounded-full" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("photos")}
              className={`transition-colors relative pb-2 ${
                activeTab === "photos" ? "text-[#5C8FF7]" : "text-gray-400"
              }`}
            >
              <Icon name="chat_photos" width={20} height={20} />
              {activeTab === "photos" && (
                <div className="absolute -bottom-3 border-2 w-8 h-0.5 bg-[#5C8FF7] rounded-full" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("documents")}
              className={`transition-colors relative pb-2 ${
                activeTab === "documents" ? "text-[#5C8FF7]" : "text-gray-400"
              }`}
            >
              <Icon name="chat_document" width={20} height={20} />
              {activeTab === "documents" && (
                <div className="absolute -bottom-3 border-2 w-8 h-0.5 bg-[#5C8FF7] rounded-full" />
              )}
            </button>
          </div>
        </div>

        <div className="mt-6">
          {activeTab === "photos" && (
            <>
              <h2 className="text-base font-medium mb-4">Photos</h2>
              <div className="grid grid-cols-2 gap-3">
                {photos.map((photo, index) => (
                  <div key={index} className="rounded-lg overflow-hidden">
                    <img
                      src={photo || "/placeholder.svg"}
                      alt={`Photo ${index + 1}`}
                      className="object-contain w-full hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === "videos" && (
            <>
              <h2 className="text-base font-medium mb-4">Videos</h2>
              <div className="grid grid-cols-2 gap-3">
                {videos.map((video, index) => (
                  <div key={index} className="rounded-lg overflow-hidden">
                    <img
                      src={video || "/placeholder.svg"}
                      alt={`Video ${index + 1}`}
                      className="object-contain w-full hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === "documents" && (
            <>
              <h2 className="text-base font-medium mb-4">Documents</h2>
              <div className="grid grid-cols-2 gap-2">
                {documents.map((doc, index) => (
                  <div key={index} className="rounded-lg overflow-hidden">
                    <img
                      src={doc || "/placeholder.svg"}
                      alt={`Document ${index + 1}`}
                      className="object-contain w-full hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
