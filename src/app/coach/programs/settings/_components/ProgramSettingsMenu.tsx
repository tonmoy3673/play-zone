"use client";
import Icon from "@/components/ui/Icon";
import type React from "react";

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  color?: string;

  iconActive?: React.ReactNode;
  onClick?: () => void;
}

export default function ProgramSettingsMenu({
  setIsDeleteProgramOpen,
  activeState,
  setActiveState,
}: {
  activeState: string;
  setIsDeleteProgramOpen: (isOpen: boolean) => void;
  setActiveState: (state: string) => void;
}) {
  const menuItems: MenuItem[] = [
    {
      id: "basic-info",
      label: "Basic Info",
      icon: (
        <>
          <Icon name="profile-icon" />
        </>
      ),
      iconActive: (
        <>
          <Icon name="profile-icon-active" />
        </>
      ),
    },
    {
      id: "advance-settings",
      label: "Advance Settings",
      icon: (
        <>
          <Icon name="settings-icon" />
        </>
      ),
      iconActive: (
        <>
          <Icon name="settings-icon-active" />
        </>
      ),
    },
    {
      id: "visibility-enrollment",
      label: "Visibility & Enrollment",
      icon: (
        <>
          <Icon name="eye-icon-inactive" />
        </>
      ),
      iconActive: (
        <>
          <Icon name="eye-icon-active" />
        </>
      ),
    },
  ];

  return (
    <div className="w-[250px] max-w-[260px] backdrop-blur-3xl bg-[#ffffff99] border border-white rounded-2xl  p-4">
      {/* Menu Items */}
      <nav className="space-y-2 mb-0">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              setActiveState(item.id);
              item.onClick?.();
            }}
            className={`w-full flex group items-center gap-2 px-2 py-2 rounded-lg transition-colors duration-200 `}
          >
            <div
              style={
                item?.id == activeState
                  ? {
                      borderTop: "1px solid var(--Line_Gradient, #68B0EA)",
                      background:
                        "var(--Gradient, linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%))",
                    }
                  : {}
              }
              className=" rounded-xl size-9 flex items-center justify-center"
            >
              <p className="size-5 flex items-center justify-center">
                {item?.id == activeState ? item.iconActive : item.icon}
              </p>
            </div>
            <span
              className={`text-[15px] group-hover:text-[#276AEE] font-medium ${
                item.id == activeState ? "text-[#276AEE]" : "text-dark"
              }`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </nav>

      <button
        onClick={() => {
          setIsDeleteProgramOpen(true);
        }}
        className="w-full flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-opacity-30 transition-colors duration-200 font-medium text-sm  mt-2"
      >
        <Icon name="delete-icon-red" />
        <span className="text-red-500 text-nowrap">Delete Program</span>
      </button>
    </div>
  );
}
