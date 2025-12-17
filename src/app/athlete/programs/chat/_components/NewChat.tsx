import Icon from "@/utils/icon";
import React, { useState } from "react";
import { X, ChevronDown, Info } from "lucide-react";
import Image from "next/image";

interface NewChatProps {
  onClose?: () => void;
}

const NewChat: React.FC<NewChatProps> = ({ onClose }) => {
  const [chatName, setChatName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [searchParticipants, setSearchParticipants] = useState("");
  const [selectedParticipants, setSelectedParticipants] = useState<number[]>([1]);

  const participants = [
    { id: 1, name: "Alex Johnson", role: "Staff", avatar: "/avatars/alex.jpg" },
    { id: 2, name: "Alex Johnson", role: "Staff", avatar: "/avatars/alex2.jpg" },
    { id: 3, name: "Alex Johnson", role: "Staff", avatar: "/avatars/alex3.jpg" },
  ];

  const toggleParticipant = (id: number) => {
    setSelectedParticipants((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const selectAll = () => {
    setSelectedParticipants(participants.map((p) => p.id));
  };

  const clearAll = () => {
    setSelectedParticipants([]);
  };

  const handleCreateChat = () => {
    console.log({
      chatName,
      description,
      category,
      participants: selectedParticipants,
    });
    onClose?.();
  };

  return (
    <div className="max-h-[90vh] overflow-auto flex flex-col">
      {/* Header - Fixed */}
      <div className="flex items-center justify-between mb-6 shrink-0">
        <h2 className="text-base font-normal text-[#141B34]">Create New Chat</h2>
        <button
          onClick={onClose}
          className="p-1 hover:bg-gray-100 rounded-full transition"
        >
          <Icon name="close" height={20} width={20} color="#000000" />	
        </button>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto">
        {/* Chat Name */}
        <div className="mb-4">
        <label className="block text-sm font-medium text-[#141B34] mb-2">
          Chat Name
        </label>
        <input
          type="text"
          value={chatName}
          onChange={(e) => setChatName(e.target.value)}
          placeholder="Enter Chat Name"
          className="w-full px-4 py-2.5 bg-[#F8FAFF] border-none rounded-lg focus:outline-none   text-sm placeholder-gray-400"
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-[#141B34] mb-2">
          Description (Optional)
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe the purpose of this chat"
          rows={3}
          className="w-full px-4 py-2.5 bg-[#F8FAFF] border-none rounded-lg focus:outline-none   text-sm placeholder-gray-400 resize-none"
        />
      </div>

      {/* Category */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-[#141B34] mb-2">
          Category
        </label>
        <div className="relative">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2.5 bg-[#F8FAFF] border-none rounded-lg focus:outline-none   text-sm text-gray-400 appearance-none cursor-pointer"
          >
            <option value="">Select a category</option>
            <option value="general">General</option>
            <option value="announcements">Announcements</option>
            <option value="logistics">Logistics</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Info Box */}
      <div className="mb-5 bg-[#EAF5FD] border border-[#CFE6FA] rounded-2xl p-3 flex gap-2">
        <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
        <p className="text-sm font-normal text-[#141b34b3] leading-relaxed">
          Free users can add up to 5 participants per custom chat. Upgrade to
          Premium for unlimited participants.
        </p>
      </div>

      {/* Add Participants */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-[#141B34] mb-3">
          Add Participants (0/5)
        </label>
        
        {/* All Users Dropdown */}
        <div className="relative mb-3">
          <select className="w-full px-4 py-2.5 bg-[#F8FAFF] border-none rounded-lg focus:outline-none   text-sm text-gray-400 appearance-none cursor-pointer">
            <option value="">All Users</option>
            <option value="staff">Staff</option>
            <option value="athletes">Athletes</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        </div>

        {/* Search and Actions with Participants List */}
        <div className="bg-[#F8FAFF] rounded-xl p-4 mt-5">
          {/* Search and Actions */}
          <div className="relative mb-3">
            <input
              type="text"
              value={searchParticipants}
              onChange={(e) => setSearchParticipants(e.target.value)}
              placeholder="Search Participants..."
              className="w-full px-4 py-2.5 pl-10 bg-white border-none rounded-xl focus:outline-none text-sm placeholder-[#141b341a]"
            />
            <Icon
              name="search"
              height={18}
              width={18}
              color="#9CA3AF"
              className="absolute left-3 top-1/2 -translate-y-1/2"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-3">
              <button
                onClick={clearAll}
                className="text-xs text-gray-600 hover:text-gray-900 font-medium"
              >
                Clear All
              </button>
              <button
                onClick={selectAll}
                className="text-xs text-blue-600 hover:text-blue-700 font-medium"
              >
                Select All
              </button>
            </div>
          </div>

          {/* Participants List */}
          <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
            {participants.map((participant) => (
              <div
                key={participant.id}
                className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition"
                onClick={() => toggleParticipant(participant.id)}
              >
                <Image src="/user.png" alt={participant.name} width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-gray-900">
                    {participant.name}
                  </h4>
                  <span className="inline-block bg-[#e1e4eb] text-[#141B34] text-xs px-2 py-0.5 rounded-lg font-medium mt-0.5">
                    {participant.role}
                  </span>
                </div>
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={selectedParticipants.includes(participant.id)}
                    onChange={() => toggleParticipant(participant.id)}
                    className="w-5 h-5 rounded border-2 border-gray-300 text-blue-600  cursor-pointer"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>

      {/* Footer Buttons - Fixed */}
      <div className="flex items-center justify-between pt-4 border-t border-[#EBF1FF] mt-4 shrink-0 bg-white">
        <button
          onClick={onClose}
          className="px-6 py-2.5 text-[#5C8FF7] font-medium text-sm bg-[#457ff31f] rounded-full transition"
        >
          Cancel
        </button>
        <button
          onClick={handleCreateChat}
          className="px-6 py-2.5 bg-primary-gradient text-white font-medium text-sm rounded-full transition"
        >
          Create Chat
        </button>
      </div>
    </div>
  );
};

export default NewChat;