"use client";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  position?: "center" | "bottom";
}

export default function WelcomeModal({ 
  isOpen, 
  onClose, 
  children, 
  className = "",
  position = "center"
}: ModalProps) {
  if (!isOpen) return null;

  const positionClasses = {
    center: "items-center justify-center",
    bottom: "items-end justify-center"
  };

  return (
    <div className={`fixed inset-0 z-50 flex ${positionClasses[position]}`}>
      {/* Backdrop - Fixed */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content - Fixed positioning */}
      <div className={`relative z-10 ${className}`}>
        {children}
      </div>
    </div>
  );
}