import { AnimatedButton } from "@/components/ui/Button";
import Icon from "@/utils/icon";
import React from "react";
import { ConversationList } from "./ConversationList";

interface ChatSidebarProps {
  selectedUserId?: number;
  onUserSelect: (user: {
    id: number;
    name: string;
    avatar: string;
    status: string;
  }) => void;
}

const ChatSidebar: React.FC<ChatSidebarProps> = ({
  selectedUserId,
  onUserSelect,
}) => {
  const conversations: {
    id: number;
    name: string;
    message: string;
    timestamp: string;
    avatar: string;
    status: "unread" | "read";
  }[] = [
    {
      id: 1,
      name: "QB Masterclass",
      message: "Team practice was intense today",
      timestamp: "1m",
      avatar: "/avatar3.svg",
      status: "unread",
    },
    {
      id: 2,
      name: "THE MINDSET",
      message: "Great work! How are you feeling a...",
      timestamp: "19m",
      avatar: "/avatar1.svg",
      status: "unread",
    },
    {
      id: 3,
      name: "Nesian Legacy",
      message: "Thanks for the feedback on...",
      timestamp: "19m",
      avatar: "/avatar3.svg",
      status: "read",
    },
    {
      id: 4,
      name: "The NYC Cyclist Club",
      message: "Team practice was intense today",
      timestamp: "19m",
      avatar: "/avatar2.svg",
      status: "unread",
    },
    {
      id: 5,
      name: "Apex Mastery",
      message: "Looking forward to the game...",
      timestamp: "19m",
      avatar: "/avatar3.svg",
      status: "read",
    },
    {
      id: 6,
      name: "Malibu Beach Volleyball",
      message: "Got it, will adjust my form",
      timestamp: "19m",
      avatar: "/avatar1.svg",
      status: "unread",
    },
    {
      id: 7,
      name: "The Arc",
      message: "See you at practice tomorrow",
      timestamp: "19m",
      avatar: "/avatar2.svg",
      status: "unread",
    },
    {
      id: 8,
      name: "Trench Warfare DL/OL",
      message: "Got it, will adjust my form",
      timestamp: "19m",
      avatar: "/avatar3.svg",
      status: "read",
    },
    {
      id: 9,
      name: "The Clutch Gene",
      message: "Got it, will adjust my form",
      timestamp: "19m",
      avatar: "/avatar1.svg",
      status: "unread",
    },
  ];
  return (
    <div>
      <div className="bg-[#FFFFFF99] p-5 border border-white rounded-3xl min-h-screen">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-black font-medium text-[20px]">Chat</h1>
          <Icon name="chat_sidebar" height={16} width={16} color="#000000" />
        </div>
        {/* search bar */}
        <div className="mb-5 relative">
          <Icon
            name="search"
            height={16}
            width={16}
            color="#000000"
            className="absolute left-3 top-1/2 transform -translate-y-1/2"
          />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 p-2 rounded-full text-[#00000099] bg-white border-[#2c49ff17] border-opacity-10 focus:outline-none "
          />
        </div>

        {/* buttons */}
        <div className="grid grid-cols-3 gap-3">
          <button className="bg-primary-gradient text-white py-2 px-2 rounded-lg text-xs font-medium whitespace-nowrap overflow-hidden">
            All
          </button>
          <button className="bg-gray-200 text-[#141b34b3] border border-transparent py-2 px-2 rounded-lg text-xs whitespace-nowrap overflow-hidden">
            Communities
          </button>
          <button className="bg-gray-200 text-[#141b34b3] border border-transparent py-2 px-2 rounded-lg text-xs whitespace-nowrap overflow-hidden">
            DMs
          </button>
        </div>

        <div className="mt-4">
          <ConversationList
            conversations={conversations}
            selectedUserId={selectedUserId}
            onUserSelect={onUserSelect}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatSidebar;
