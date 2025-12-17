import React, { useState } from "react";
import {
  Send,
  Paperclip,
  Smile,
  MoreVertical,
  Phone,
  Video,
} from "lucide-react";
import Icon from "@/utils/icon";

interface ChatDetailsProps {
  user: {
    id: number;
    name: string;
    avatar: string;
    status: string;
  } | null;
  onProfileClick?: () => void;
}

const ChatDetails: React.FC<ChatDetailsProps> = ({ user, onProfileClick }) => {
  const [message, setMessage] = useState("");
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);

  if (!user) {
    return (
      <div className="relative h-full rounded-3xl border border-white overflow-hidden">
        <img
          src="/chat_bg.svg"
          alt="Chat Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-500 text-lg">
            Select a chat to start messaging
          </p>
        </div>
      </div>
    );
  }

  const handleSend = () => {
    if (message.trim()) {
      console.log("Sending:", message);
      setMessage("");
    }
  };

  return (
    <div className="relative h-full rounded-3xl border border-white overflow-hidden">
      {/* Background Image */}
      <img
        src="/chat_bg.svg"
        alt="Chat Background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay Content */}
      <div className="relative h-full flex flex-col">
        {/* Header */}
        <div className="bg-[#FFFFFF66] backdrop-blur-sm border border-white border-opacity-30 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-gray-900">{user.name}</h3>
                <p className="text-sm text-gray-500">{user.status}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 bg-white border border-white rounded-full transition">
                <Icon height={18} width={18} name="video" />
              </button>
              <button className="p-2 bg-white border border-white rounded-full transition">
                <Icon height={16} width={16} name="audio_call" />
              </button>
              <button className="p-2 bg-white border border-white rounded-full transition">
                <Icon name="vertical_icon" height={16} width={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <div className="flex justify-start gap-2">
            <div className="relative w-10 h-10">
              <img
                className="w-10 h-10 rounded-full cursor-pointer hover:opacity-80 transition-opacity"
                src="/avatar2.svg"
                alt=""
                onClick={onProfileClick}
              />
              {/* Active dot perfectly aligned bottom-right */}
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
            </div>

            <div>
              <div className="bg-[#FFFFFF26] backdrop-blur-sm rounded-2xl rounded-tl-none px-4 py-3 max-w-xs shadow-sm border border-white">
                <p className="text-sm text-[#141B34] font-normal">
                  Hey coach, just finished today's training session
                </p>
              </div>
              <span className="text-xs text-[#666668] mt-2 block">
                12:03 PM
              </span>
            </div>
          </div>

          <div className="flex justify-end items-start gap-2.5">
            <div className="relative">
              <button
                onClick={() => setShowDropdown1(!showDropdown1)}
                className=""
              >
                <Icon name="vertical_icon" />
              </button>
              {showDropdown1 && (
                <div className="absolute top-full right-0 z-10 bg-white border border-white rounded-xl shadow-lg w-40">
                  <ul className="p-4 text-sm text-gray-600 font-medium">
                    <li className="flex gap-1 items-center">
                      <Icon name="forward" height={16} width={16} />
                      <a href="#" className="block w-full p-2">
                        Forward
                      </a>
                    </li>
                    <li className="flex gap-1 items-center">
                      <Icon name="block" height={16} width={16} />
                      <a href="#" className="block w-full p-2">
                        Block
                      </a>
                    </li>
                    <li className="flex gap-1 items-center">
                      <Icon name="report" height={16} width={16} />
                      <a href="#" className="block w-full p-2">
                        Report
                      </a>
                    </li>
                    <li className="flex gap-1 items-center">
                      <Icon name="delete_chat" height={16} width={16} />
                      <a href="#" className="block w-full p-2">
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div>
              <div className="bg-primary-gradient rounded-2xl rounded-tr-none px-4 py-3 max-w-xs shadow-sm">
                <p className="text-sm font-normal text-white">
                  Great work! How are you feeling about tomorrow's competition?
                </p>
              </div>
              <span className="text-xs text-blue-100 mt-2 text-end block">
                12:03 PM
              </span>
            </div>
          </div>

          <div className="flex justify-start gap-2">
            <div className="relative w-10 h-10">
              <img
                className="w-10 h-10 rounded-full cursor-pointer hover:opacity-80 transition-opacity"
                src="/avatar2.svg"
                alt=""
                onClick={onProfileClick}
              />
              {/* Active dot perfectly aligned bottom-right */}
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
            </div>

            <div>
              <div className="bg-[#FFFFFF26] backdrop-blur-sm rounded-2xl rounded-tl-none px-4 py-3 max-w-xs shadow-sm border border-white">
                <p className="text-sm text-[#141B34] font-normal">
                  I'm feeling confident! The new drills really helped with my footwork
                </p>
              </div>
              <span className="text-xs text-[#666668] mt-2 block">
                12:04 PM
              </span>
            </div>
          </div>

          <div className="flex justify-end items-start gap-2.5">
            <div className="relative">
              <button
                onClick={() => setShowDropdown2(!showDropdown2)}
                className=""
              >
                <Icon name="vertical_icon" />
              </button>
              {showDropdown2 && (
                <div className="absolute top-full right-0 z-10 bg-white border border-white rounded-xl shadow-lg w-40">
                  <ul className="p-4 text-sm text-gray-600 font-medium">
                    <li className="flex gap-1 items-center">
                      <Icon name="forward" height={16} width={16} />
                      <a href="#" className="block w-full p-2">
                        Forward
                      </a>
                    </li>
                    <li className="flex gap-1 items-center">
                      <Icon name="block" height={16} width={16} />
                      <a href="#" className="block w-full p-2">
                        Block
                      </a>
                    </li>
                    <li className="flex gap-1 items-center">
                      <Icon name="report" height={16} width={16} />
                      <a href="#" className="block w-full p-2">
                        Report
                      </a>
                    </li>
                    <li className="flex gap-1 items-center">
                      <Icon name="delete_chat" height={16} width={16} />
                      <a href="#" className="block w-full p-2">
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div>
              <div className="bg-primary-gradient rounded-2xl rounded-tr-none px-4 py-3 max-w-xs shadow-sm">
                <p className="text-sm text-white">
                  That's exactly what I wanted to hear. Get some rest tonight!
                </p>
              </div>
              <span className="text-xs text-[#666668] mt-2 block text-end">12:05 PM</span>
            </div>
          </div>

          <div className="flex justify-start gap-2">
            <div className="relative w-10 h-10">
              <img
                className="w-10 h-10 rounded-full cursor-pointer hover:opacity-80 transition-opacity"
                src="/avatar2.svg"
                alt=""
                onClick={onProfileClick}
              />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
            <div>
              <div className="bg-[#FFFFFF26] backdrop-blur-sm rounded-2xl rounded-tl-none px-4 py-3 max-w-xs shadow-sm border border-white">
                <p className="text-sm text-[#141B34] font-normal">
                  Should I focus on anything specific for warm-up tomorrow?
                </p>
              </div>
              <span className="text-xs text-[#666668] mt-2 block">
                12:06 PM
              </span>
            </div>
          </div>

          <div className="flex justify-end items-start gap-2.5">
            <div className="relative">
              <button className="">
                <Icon name="vertical_icon" />
              </button>
            </div>
            <div>
              <div className="bg-primary-gradient rounded-2xl rounded-tr-none px-4 py-3 max-w-xs shadow-sm">
                <p className="text-sm text-white">
                  Yes, spend extra time on your hip mobility and sprint mechanics. Also practice your starts.
                </p>
              </div>
              <span className="text-xs text-blue-100 mt-2 block text-end">12:07 PM</span>
            </div>
          </div>

          <div className="flex justify-start gap-2">
            <div className="relative w-10 h-10">
              <img
                className="w-10 h-10 rounded-full cursor-pointer hover:opacity-80 transition-opacity"
                src="/avatar2.svg"
                alt=""
                onClick={onProfileClick}
              />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
            <div>
              <div className="bg-[#FFFFFF26] backdrop-blur-sm rounded-2xl rounded-tl-none px-4 py-3 max-w-xs shadow-sm border border-white">
                <p className="text-sm text-[#141B34] font-normal">
                  Perfect! Will do. Thanks coach 🙏
                </p>
              </div>
              <span className="text-xs text-[#666668] mt-2 block">
                12:08 PM
              </span>
            </div>
          </div>


        </div>

        {/* Input Area */}
        <div className="bg-white/80 backdrop-blur-sm border-t border-white px-6 py-4">
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-gray-100 rounded-full transition border border-white">
              <Icon name="camera" height={16} width={16} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition border border-white">
              <Icon name="document" height={16} width={16} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition border border-white">
              <Icon name="upload_file" height={16} width={16} />
            </button>
            <div className="flex-1 relative">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type a message..."
                className="w-full px-4 py-3 bg-[#e9f4fd] border border-white rounded-full focus:outline-none pr-12"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-200 rounded-full transition">
                <Smile className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <button
              onClick={handleSend}
              className="p-3 bg-blue-500 hover:bg-blue-600 rounded-full transition"
            >
              <Send className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDetails;
