// WelcomeModal.tsx
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
    <div className={`fixed h-full inset-0 z-50 flex ${positionClasses[position]}`}>
      <div 
        className=" absolute inset-0 backdrop-blur-xs"
        onClick={onClose}
      />
      
      <div className={`relative z-10 ${className}`}>
        {children}
      </div>
    </div>
  );
}