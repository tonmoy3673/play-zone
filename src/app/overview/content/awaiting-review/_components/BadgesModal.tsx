"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Badges from "./Badges";

interface BadgesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BadgesModal({ isOpen, onClose }: BadgesModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  const modalContent = (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/20" onClick={onClose} />

      {/* Modal Content */}
      <div className="relative z-10 bg-white w-full max-w-[600px] max-h-[calc(100vh-2rem)] flex flex-col rounded-[24px] shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="relative flex items-center justify-between px-6 py-4  flex-shrink-0">
          <h2 className="text-xl md:text-2xl font-semibold text-dark">
            Select Badges
          </h2>
          <button
            onClick={onClose}
            className="bg-[rgba(255,255,255,0.3)] rounded-full size-10 flex items-center justify-center hover:bg-[rgba(255,255,255,0.4)] transition-colors"
          >
            <X className="size-5 text-dark" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <Badges />
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
