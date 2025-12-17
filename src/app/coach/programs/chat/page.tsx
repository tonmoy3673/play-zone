"use client";
import React, { useState } from "react";
import ProgramChatSidebar from "./_components/ProgramChatSidebar";
import ProgramChat from "./_components/ProgramChat";
import ParticipantSidebar from "./_components/ParticipantSidebar";

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

  const toggleProfileSidebar = () => {
    setShowProfileSidebar(!showProfileSidebar);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-[#E8F2F7] via-[#E8EFFC] to-[#F0E8FC] p-6">
      <div className={`grid ${showProfileSidebar ? "grid-cols-[300px_1fr_340px]" : "grid-cols-[300px_1fr]"} gap-6 max-w-[1800px] mx-auto`}>
        <div>
          <ProgramChatSidebar />
        </div>
        <div>
          <ProgramChat onToggleParticipants={toggleProfileSidebar} />
        </div>
        {showProfileSidebar && (
          <div>
            <ParticipantSidebar />
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
