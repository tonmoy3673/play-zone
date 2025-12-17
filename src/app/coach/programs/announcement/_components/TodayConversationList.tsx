"use client";

import { ArrowUpRight, Heart, MoreVertical, Share2 } from "lucide-react";
import Image from "next/image";

import { cn } from "@/lib/utils";

export interface TodayConversationItem {
  id: number | string;
  name: string;
  timestamp: string;
  message: string;
  avatarUrl: string;
  isOnline?: boolean;
  replyLabel?: string;
  likeLabel?: string;
  onReply?: () => void;
  onLike?: () => void;
  onShare?: () => void;
  onMore?: () => void;
  className?: string;
}

interface TodayConversationListProps {
  items: TodayConversationItem[];
  className?: string;
}

const defaultReplyLabel = "Reply";
const defaultLikeLabel = "Like";

const TodayConversationList = ({
  items,
  className,
}: TodayConversationListProps) => {
  if (!items.length) {
    return null;
  }

  return (
    <div className={cn("flex flex-col", className)}>
      {items.map((item, index) => {
        const replyLabel = item.replyLabel ?? defaultReplyLabel;
        const likeLabel = item.likeLabel ?? defaultLikeLabel;
        const messageLines = item.message.split("\n");

        return (
          <article
            key={item.id}
            className={cn(
              "flex items-start gap-3 pb-4",
              index === 0 ? "pt-0" : "pt-4",
              index !== items.length - 1 && "border-b border-[#EDF5F8]"
            )}
          >
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center">
              <Image
                src={item.avatarUrl}
                alt={item.name}
                width={40}
                height={40}
                className={cn(
                  "h-10 w-10 rounded-full object-cover",
                  item.className
                )}
              />
              {item.isOnline && (
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-[#12D85B]" />
              )}
            </div>

            <div className="flex w-full items-center justify-between gap-4">
              <div className="min-w-0 flex-1">
                <div className="flex flex-col text-[10px] leading-[1.4]">
                  <span className="font-medium text-dark">{item.name}</span>
                  <span className="text-[#141B34B3]">{item.timestamp}</span>
                </div>

                <div className="mt-2 max-w-xl rounded-2xl bg-white/60 px-3 py-2 text-[12px] leading-[1.4] text-dark shadow-[0px_1px_3px_rgba(20,27,52,0.05)] backdrop-blur-sm">
                  {messageLines.map((line, lineIndex) => (
                    <p key={lineIndex} className="mb-0">
                      {line}
                    </p>
                  ))}
                </div>

                <div className="mt-3 flex items-center gap-6 text-[12px] text-[#141B34B3]">
                  <button
                    type="button"
                    onClick={item.onReply}
                    className="flex items-center gap-1 transition-colors hover:text-dark"
                  >
                    <ArrowUpRight className="h-3 w-3" strokeWidth={1.75} />
                    <span>{replyLabel}</span>
                  </button>
                  <button
                    type="button"
                    onClick={item.onLike}
                    className="flex items-center gap-1 transition-colors hover:text-dark"
                  >
                    <Heart
                      className="h-4 w-4 text-[#FF3939]"
                      strokeWidth={1.5}
                      fill="#FF3939"
                    />
                    <span>{likeLabel}</span>
                  </button>
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={item.onShare}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#276AEE1A] text-[#276AEE] transition-colors hover:bg-[#276AEE0D]"
                  aria-label="Share"
                >
                  <Share2 className="h-4 w-4" strokeWidth={1.75} />
                </button>
                <button
                  type="button"
                  onClick={item.onMore}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-[#141B34B3] transition-colors hover:text-dark"
                  aria-label="More options"
                >
                  <MoreVertical className="h-5 w-5" strokeWidth={1.75} />
                </button>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default TodayConversationList;
