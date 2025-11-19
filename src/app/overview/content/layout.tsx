"use client";

import { createContext, useContext, useState } from "react";
import CreateTaskModal from "./_components/CreateTaskModal";
import SideBar from "./_components/SideBar";

const ModalContext = createContext<{
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
}>({
  isModalOpen: false,
  setIsModalOpen: () => {},
});

export const useModalContext = () => useContext(ModalContext);

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      <div className="h-screen bg-gradient-to-br from-[#E0EDF6] via-[#BAD1FFa6] to-[#AFF4FAa6]">
        <div
          className={`lg:flex min-h-screen bg-white/50 rounded-2xl backdrop-blur-lg shadow-lg overflow-hidden p-5 gap-5 transition-all ${
            isModalOpen ? "blur-sm" : ""
          }`}
        >
          <SideBar />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
        {/* Modal rendered outside blurred container */}
        <CreateTaskModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </ModalContext.Provider>
  );
}
