"use client";
import React, { useState } from "react";
import ChatSidebar from "./_components/ChatSidebar";
import ChatDetails from "./_components/ChatDetails";
import ProfileSidebar from "./_components/ProfileSidebar";

interface SelectedUser {
  id: number;
  name: string;
  avatar: string;
  status: string;
}

const Page = () => {
  const [selectedUser, setSelectedUser] = useState<SelectedUser | null>(null);
  const [showProfileSidebar, setShowProfileSidebar] = useState(false);

  const handleUserSelect = (user: SelectedUser) => {
    setSelectedUser(user);
    setShowProfileSidebar(false); // Close profile sidebar when selecting a new user
  };

  return (
    <div>
      <div className="bg-[#FFFFFF4D] border border-white rounded-3xl min-h-screen">
        <div className="p-6">
          <div className={`${showProfileSidebar ? "grid grid-cols-4 gap-6" : "grid grid-cols-3 gap-6"}`}>
            <div className="col-span-1">
              <ChatSidebar
                selectedUserId={selectedUser?.id}
                onUserSelect={handleUserSelect}
              />
            </div>
            <div className={showProfileSidebar ? "col-span-2" : "col-span-2"}>
              <ChatDetails 
                user={selectedUser} 
                onProfileClick={() => setShowProfileSidebar(!showProfileSidebar)}
              />
            </div>
            {showProfileSidebar && (
              <div className="col-span-1 h-full">
                <ProfileSidebar />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
