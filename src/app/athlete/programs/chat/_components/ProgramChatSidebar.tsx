import PopupModal from "@/components/Modal/PopupModal";
import Icon from "@/utils/icon";
import React, { useState } from "react";
import NewChat from "./NewChat";

const ProgramChatSidebar = () => {
  const [open, setOpen] = useState(false);
  const [openSections, setOpenSections] = useState({
    general: true,
    announcements: true,
    logistics: true,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="bg-[#FFFFFF4D] p-5 border border-white rounded-3xl min-h-screen flex flex-col">
      {/* GENERAL Section */}
      <div className="mb-6">
        <div
          className="flex justify-between items-center mb-3 cursor-pointer"
          onClick={() => toggleSection("general")}
        >
          <h2 className="text-black font-semibold text-sm">GENERAL</h2>
          <Icon
            name="chevron_down"
            height={16}
            width={16}
            color="#000000"
            className={`transition-transform ${
              openSections.general ? "" : "-rotate-90"
            }`}
          />
        </div>
        {openSections.general && (
          <div className="space-y-1">
            <div className="bg-[#1556d81a] px-4 py-2.5 rounded-xl cursor-pointer flex items-center justify-between">
              <span className="text-black font-medium text-sm">Main Chat</span>
              <span className="bg-primary-gradient text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </div>
            <div className="hover:bg-[#FFFFFF33] px-4 py-2.5 rounded-lg cursor-pointer">
              <span className="text-black text-sm">Welcome</span>
            </div>
          </div>
        )}
      </div>

      {/* ANNOUNCEMENTS Section */}
      <div className="mb-6">
        <div
          className="flex justify-between items-center mb-3 cursor-pointer"
          onClick={() => toggleSection("announcements")}
        >
          <h2 className="text-[#141B34] font-medium text-sm">ANNOUNCEMENTS</h2>
          <Icon
            name="chevron_down"
            height={16}
            width={16}
            color="#000000"
            className={`transition-transform ${
              openSections.announcements ? "" : "-rotate-90"
            }`}
          />
        </div>
        {openSections.announcements && (
          <div className="space-y-1">
            <div className="hover:bg-[#FFFFFF33] px-2 py-2 rounded-lg cursor-pointer">
              <span className="text-[#141b34b3] text-xs font-medium">
                Location Announcement 6/2/2026
              </span>
            </div>
            <div className="hover:bg-[#FFFFFF33] px-2 py-2 rounded-lg cursor-pointer flex items-center justify-between">
              <span className="text-[#141b34b3] text-xs font-medium">
                Announcement 6/2/2026 @2:00PM
              </span>
              <span className="bg-primary-gradient  text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                1
              </span>
            </div>
          </div>
        )}
      </div>

      {/* LOGISTICS Section */}
      <div className="mb-auto">
        <div
          className="flex justify-between items-center mb-3 cursor-pointer"
          onClick={() => toggleSection("logistics")}
        >
          <h2 className="text-[#141B34] font-medium text-sm">LOGISTICS</h2>
          <Icon
            name="chevron_down"
            height={16}
            width={16}
            color="#000000"
            className={`transition-transform ${
              openSections.logistics ? "" : "-rotate-90"
            }`}
          />
        </div>
        {openSections.logistics && (
          <div className="space-y-1">
            <div className="hover:bg-[#FFFFFF33] px-2 py-2 rounded-lg cursor-pointer">
              <span className="text-[#141b34b3] text-xs font-medium">Scheduling</span>
            </div>
            <div className="hover:bg-[#FFFFFF33] px-2 py-2 rounded-lg cursor-pointer">
              <span className="text-[#141b34b3] text-xs font-medium">Staff Chat</span>
            </div>
          </div>
        )}
      </div>

      {/* Create Chat Button - Sticky at bottom */}
      <div className="mt-auto pt-6">
        {/* <button
          onClick={() => setOpen(true)}
          className="w-full bg-primary-gradient text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
        >
          <span className="text-xl font-light">+</span>
          <span>Create Chat</span>
        </button> */}
        <p className="text-center text-black text-xs mt-3 leading-relaxed">
          Premium users get <br />
          unlimited participants in custom chats.
        </p>
      </div>

      <PopupModal isOpen={open} onClose={() => setOpen(false)}>
        <div className="bg-white rounded-[16px] p-6 h-auto">
          <NewChat onClose={() => setOpen(false)} />
        </div>
      </PopupModal>
    </div>
  );
};

export default ProgramChatSidebar;
