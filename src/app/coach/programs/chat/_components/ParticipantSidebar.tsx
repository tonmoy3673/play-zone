import Icon from "@/utils/icon";
import Image from "next/image";
import React from "react";

const ParticipantSidebar = () => {
  const onlineParticipants = [
    { id: 1, name: "Mike Thompson", role: "Admin", avatar: "/avatars/mike.jpg", online: true },
    { id: 2, name: "Albert Flores", role: "Staff", avatar: "/avatars/albert.jpg", online: true },
    { id: 3, name: "Kathryn Murphy", role: null, avatar: "/avatars/kathryn.jpg", online: true },
    { id: 4, name: "Jacob Jones", role: "Staff", avatar: "/avatars/jacob.jpg", online: true },
  ];

  const offlineParticipants = [
    { id: 5, name: "Esther Howard", role: null, avatar: "/avatars/esther.jpg", online: false },
    { id: 6, name: "Courtney Henry", role: "Staff", avatar: "/avatars/courtney.jpg", online: false },
  ];

  const ParticipantCard = ({ participant }: { participant: any }) => (
    <div className="flex items-center gap-3 py-2 hover:bg-[#FFFFFF33] rounded-lg cursor-pointer transition-colors">
      <div className="relative">
        <Image src="/user.png" alt={participant.name} width={40} height={40} className="rounded-full" />
        {participant.online && (
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
        )}
		  {participant.online === false && (
			 <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#595F70] rounded-full border-2 border-white"></div>
		  )}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h3 className="text-black font-medium text-sm">{participant.name}</h3>
          {participant.id === 1 && <span className="text-sm">🔥</span>}
        </div>
        {participant.role && (
          <span className="bg-black text-white text-xs px-2 py-0.5 rounded font-medium inline-block mt-0.5">
            {participant.role}
          </span>
        )}
      </div>
    </div>
  );

  return (
    <div className="bg-[#FFFFFF99] border border-white rounded-3xl min-h-screen p-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-[#141B34] font-medium text-sm">Participants</h1>
        <button className="hover:bg-white/50 rounded-full p-1">
          <Icon name="user_add" height={20} width={20} color="#000000" />
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="bg-white rounded-full py-2 flex items-center gap-2">
          <Icon name="search" height={18} width={18} />
          <input
            type="text"
            placeholder="Search Participants..."
            className="flex-1 outline-none text-sm bg-transparent h-6 text-gray-700 placeholder-[#595F70]"
          />
        </div>
      </div>

      {/* About Section */}
      <div className="mb-6">
        <h2 className="text-[#141B34] font-medium text-lg mb-2">About</h2>
        <p className="text-[#141b34b3] text-sm leading-relaxed">
          Welcome new members and general introductions
        </p>
      </div>

      {/* Online Participants */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <h2 className="text-[#141b34b3] font-medium text-sm uppercase">
            ONLINE — {onlineParticipants.length}
          </h2>
        </div>
        <div className="space-y-1">
          {onlineParticipants.map((participant) => (
            <ParticipantCard key={participant.id} participant={participant} />
          ))}
        </div>
      </div>

      {/* Offline Participants */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 bg-[#595F70] rounded-full"></div>
          <h2 className="text-gray-600 font-semibold text-sm uppercase">
            OFFLINE — {offlineParticipants.length}
          </h2>
        </div>
        <div className="space-y-1">
          {offlineParticipants.map((participant) => (
            <ParticipantCard key={participant.id} participant={participant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParticipantSidebar;
