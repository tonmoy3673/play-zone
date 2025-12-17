"use client";
import React, { useState } from "react";
import ChatSidebar from "./_components/ChatSidebar";
import ChatDetails from "./_components/ChatDetails";
import ProfileSidebar from "./_components/ProfileSidebar";
import CommunityDetails from "./_components/CommunityDetails";

interface SelectedUser {
  id: number;
  name: string;
  avatar: string;
  status: string;
}

const Page = () => {
  const [selectedUser, setSelectedUser] = useState<SelectedUser | null>(null);
  const [showProfileSidebar, setShowProfileSidebar] = useState(false);
  const [showCommunityDetails, setShowCommunityDetails] = useState(false);
  const [activeTab, setActiveTab] = useState("All");

  const handleUserSelect = (user: SelectedUser) => {
    setSelectedUser(user);
    setShowProfileSidebar(false); // Close profile sidebar when selecting a new user
    setShowCommunityDetails(false); // Close community details when selecting a new user
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setShowCommunityDetails(false); // Close community details when changing tabs
    setShowProfileSidebar(false); // Close profile sidebar when changing tabs
  };

  const handleProfileClick = () => {
    setShowProfileSidebar(!showProfileSidebar);
    setShowCommunityDetails(false); // Close community details when opening profile
  };

  const handleTitleClick = () => {
    if (activeTab === "Communities") {
      setShowCommunityDetails(!showCommunityDetails);
      setShowProfileSidebar(false); // Close profile sidebar when opening community details
    }
  };

  return (
    <div>
      <div className="bg-[#FFFFFF4D] border border-white rounded-3xl min-h-screen">
        <div className="p-6">
          <div className={`${
            showProfileSidebar || showCommunityDetails 
              ? "grid grid-cols-4 gap-4" 
              : "grid grid-cols-3 gap-4"
          }`}>
            <div className="col-span-1">
              <ChatSidebar
                selectedUserId={selectedUser?.id}
                onUserSelect={handleUserSelect}
                activeTab={activeTab}
                onTabChange={handleTabChange}
              />
            </div>
            <div className={showProfileSidebar || showCommunityDetails ? "col-span-2" : "col-span-2"}>
              <ChatDetails 
                user={selectedUser} 
                onProfileClick={handleProfileClick}
                onTitleClick={handleTitleClick}
                activeTab={activeTab}
              />
            </div>
            {(showProfileSidebar || showCommunityDetails) && (
              <div className="col-span-1 h-full">
                {showCommunityDetails ? (
                  <CommunityDetails />
                ) : (
                  <ProfileSidebar />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
