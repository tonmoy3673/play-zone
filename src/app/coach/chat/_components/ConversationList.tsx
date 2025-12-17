import React from "react";
import Icon from "@/utils/icon";

interface Conversation {
  id: number;
  name: string;
  message: string;
  timestamp: string;
  avatar: string;
  status: "read" | "unread";
}

interface ConversationListProps {
  conversations: Conversation[];
  selectedUserId?: number;
  onUserSelect: (user: { id: number; name: string; avatar: string; status: string }) => void;
}

export function ConversationList({ conversations, selectedUserId, onUserSelect }: ConversationListProps) {
  return (
    <div className="backdrop-blur rounded-3xl overflow-visible">
      <div className="space-y-5">
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            onClick={() => onUserSelect({
              id: conversation.id,
              name: conversation.name,
              avatar: conversation.avatar,
              status: conversation.status === 'read' ? 'Online' : 'Active now'
            })}
            className={`flex items-center gap-4 p-3 rounded-xl transition-colors cursor-pointer group hover:bg-white/50 ${
              selectedUserId === conversation.id ? 'bg-white/70 shadow-sm' : ''
            }`}
          >
            {/* Avatar */}
            <div className="shrink-0">
              <img
                src={conversation.avatar || "/placeholder.svg"}
                alt={conversation.name}
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3
                className={`text-sm font-medium text-[#141B34] ${
                  conversation.status === "unread" ? "font-bold" : ""
                }`}
              >
                {conversation.name}
              </h3>
              <p className="text-xs text-[#141B34] truncate">
                {conversation.message}
              </p>
            </div>

            <div className="flex flex-col space-y-1">
              {/* Timestamp */}
              <div className=" text-xs text-gray-500 min-w-fit">
                {conversation.timestamp}
              </div>

              {/* Status Icon */}
              <div className="flex justify-center items-center p-1">
                {conversation.status === "read" ? (
                  <Icon name="msg_read" height={16} width={16} color="#10B981" />
                ) : (
                  <div className="min-w-5 min-h-5 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-xs text-white font-medium leading-none">1</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
