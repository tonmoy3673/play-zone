"use client";

import { Clock } from "lucide-react";
import { AnimatedButton } from "@/components/ui/Button";
import Icon from "@/utils/icon";

interface AnnouncementButton {
  label: string;
  variant: "primary" | "secondary";
}

interface AnnouncementData {
  id: number;
  author: string;
  handle?: string;
  badge: string;
  date: string;
  time: string;
  title: string;
  description: string;
  image?: string; // Optional image
  buttons: AnnouncementButton[];
  isVideo?: boolean; // Optional video flag
  likes?: number; // Optional likes count
  replies?: number; // Optional replies count
}

interface AnnouncementCardProps {
  data: AnnouncementData;
  onClick?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  isLike?: () => void;
  isComment?: () => void;
  className?: string;
}

const AnnouncementCard = ({
  data,
  onClick,
  onEdit,
  onDelete,
  className = "",
}: AnnouncementCardProps) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white p-4 rounded-2xl cursor-pointer hover:shadow-md transition-shadow ${className}`}
    >
      {/* Author Info */}
      <div className="flex items-start gap-3 mb-3">
        <img
          src="/user.png"
          alt={data.author}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-dark">{data.author}</span>
            <span className="text-sm text-[#141b3499]">{data.badge}</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Clock width={12} height={12} />
            <span>
              {data.date} at {data.time}
            </span>
          </div>
        </div>
      </div>

      {/* Image Section - Only show if image exists */}
      {data.image && (
        <div className="mb-4 rounded-xl overflow-hidden flex items-center justify-center relative">
          <img
            src={data.image}
            alt={data.title}
            className="w-full object-cover"
          />
          {data.isVideo && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Icon name="play_icon" width={32} height={32} />
            </div>
          )}
        </div>
      )}

      {/* Title and Description */}
      <p className="text-sm text-dark">{data.title}</p>
      <div className="my-1">
        <h3 className="">
          <span className="text-[#5C8FF7]">
            {data.description.replace(" Live video session", "")}
          </span>
          <span className="text-dark"> Live video session</span>
        </h3>
      </div>

      <hr className="my-4 border-t border-[#EFF3F4]" />

      {/* Action Section */}
      <div className="flex justify-between items-center mt-6">
        <div className="flex gap-2">
          {data.buttons.map((btn: AnnouncementButton, idx: number) => (
            <AnimatedButton
              key={idx}
              style={{
                borderRadius: "50px",
                border: "1px solid rgba(21, 86, 216, 0.10)",
                background: "rgba(69, 127, 243, 0.15)",
              }}
              className="font-normal text-[#276AEE] px-5 text-sm py-3 leading-4 rounded-full flex items-center gap-2 transition-all whitespace-nowrap"
            >
              {btn.label}
            </AnimatedButton>
          ))}
        </div>

        {/* Right side: Edit/Delete OR Engagement Metrics */}
        {onEdit || onDelete ? (
          <div className="flex items-center gap-4">
            {onEdit && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onEdit();
                }}
              >
                <Icon name="edit" height={20} width={20} />
              </button>
            )}
            {onDelete && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete();
                }}
              >
                <Icon name="delete" height={20} width={20} />
              </button>
            )}
          </div>
        ) : (
          (data.likes !== undefined || data.replies !== undefined) && (
            <div className="flex items-center gap-4 text-sm text-gray-500">
              {data.likes !== undefined && (
                <div className="flex items-center gap-1">
                  <Icon name="heart" width={16} height={14} />
                  <span>{data.likes}</span>
                </div>
              )}
              {data.replies !== undefined && (
                <div className="flex items-center gap-1">
                  <Icon name="replie" width={16} height={14} />
                  <span>{data.replies}</span>
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default AnnouncementCard;
