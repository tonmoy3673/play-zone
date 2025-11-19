"use client";
import React, { useState } from "react";
import SettingsMenu from "./_components/SettingsMenu";
import PersonalInfo from "./_components/PersonalInfo";
import Security from "./_components/Security";
import Notification from "./_components/Notification";
import PrivacyPolicy from "./_components/PrivacyPolicy";
import Achievements from "./_components/Achievements";
import PopupModal from "@/components/Modal/PopupModal";
import { cn } from "@/lib/utils";
import RatingModal from "./_components/RatingModal";
import LogoutModal from "./_components/LogoutModal";

const Page = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [isOpen, setIsOpen] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  return (
    <div
      className={cn(
        "bg-[#E7F2F5]   mx-auto rounded-3xl border border-white p-8"
        // !isOpen && "backdrop-blur-3xl"
      )}
    >
      <h1 className="text-3xl text-black sticky top-5 font-semibold mb-8">
        Profile Settings
      </h1>
      <div className="flex items-start gap-8">
        <div className="sticky top-24 w-[215px]">
          <SettingsMenu
            setIsLogoutOpen={setIsLogoutOpen}
            setIsOpen={setIsOpen}
            activeState={activeTab}
            setActiveState={setActiveTab}
          />
        </div>
        <div className="flex-1">
          {activeTab == "personal" && <PersonalInfo />}
        {activeTab == "security" && <Security />}
        {activeTab == "notification" && <Notification />}
        {activeTab == "privacy" && <PrivacyPolicy />}
        {activeTab == "achievements" && <Achievements />}
        </div>
      </div>
      <PopupModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title=""
        widthClass="w-full md:w-[519px] h-[511px]"
      >
        <RatingModal setIsOpen={setIsOpen} />
      </PopupModal>
      <LogoutModal isOpen={isLogoutOpen} setIsOpen={setIsLogoutOpen} />
    </div>
  );
};

export default Page;
