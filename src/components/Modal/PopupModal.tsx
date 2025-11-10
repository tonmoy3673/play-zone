import { ReactNode, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  height?: string;
  widthClass?: string;
  zIndex?: string;
}

const PopupModal = ({
  isOpen,
  onClose,
  // title,
  children,
  // widthClass = "w-full md:w-[700px]",
  // height = "h-[80vh]",
  zIndex = "",
}: ModalProps) => {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      className={`${
        isOpen ? " visible" : " invisible"
      } w-full h-screen  fixed top-0 left-0 z-50  bg-[#595f7045] flex items-center overflow-hidden justify-center transition-all duration-300  inset-0  bg-opacity-40  ${zIndex}`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        onClick={(e) => e.target === e.currentTarget && onClose()}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        className={` ${
          isOpen ? " scale-[1] opacity-100" : " scale-[0] opacity-0"
        }  backdrop-blur-[2.5px] bg-transparent rounded-lg p-4 transition-all fixed overflow-hidden left-[50%] -translate-x-[50%]   z-50  overflow-y-auto  px-4 duration-500  w-full h-full flex items-center justify-center`}
      >
        {/* <div className="flex mb-6 px-2 pt-2 items-center justify-between"> */}
        {/* <h2 className="text-2xl font-medium text-[#131523]">{title}</h2> */}

        {/* <div className="flex items-center gap-5">
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                opacity="0.4"
                d="M13.7494 13.75L7.75 7.75M7.75064 13.75L13.75 7.75"
                stroke="#141B34"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.75 10.75C20.75 5.22715 16.2728 0.75 10.75 0.75C5.22715 0.75 0.75 5.22715 0.75 10.75C0.75 16.2728 5.22715 20.75 10.75 20.75C16.2728 20.75 20.75 16.2728 20.75 10.75Z"
                stroke="#141B34"
                strokeWidth="1.5"
              />
            </svg>
          </button>
        </div> */}
        {/* </div> */}
        <div className="overflow-y-hidden px-2 flex items-center justify-center h-screen w-[100vh]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
