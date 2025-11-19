"use client";

import { AnimatedButton } from "@/components/ui/Button";
import Icon from "../../content/_components/icon";

interface CreateNewButtonProps {
  onClick?: () => void;
}

export default function CreateNewButton({ onClick }: CreateNewButtonProps) {
  return (
    <AnimatedButton
      onClick={onClick}
      style={{
        borderRadius: "40px",
        background: "linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%)",
      }}
      className="flex items-center justify-center gap-2 text-white font-normal px-5 py-4 rounded-full hover:bg-blue-700"
    >
      <span>
        <Icon name="plus_sign" height={16} width={16} />
      </span>
      Create New Task
    </AnimatedButton>
  );
}
