import React from "react";
import Icon from "@/utils/icon";

const ModalHeader = ({
  title,
  onClose,
}: {
  title: string;
  onClose?: () => void;
}) => {
  return (
    <div className="flex items-center justify-between p-5 border-b border-[#EBF1FF]">
      <p className="text-base font-medium text-dark">{title}</p>
      <button onClick={onClose} type="button" aria-label="Close">
        <Icon
          className="text-dark"
          name="cancel_circle"
          height={24}
          width={24}
        />
      </button>
    </div>
  );
};

export default ModalHeader;
