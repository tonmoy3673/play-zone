import React, { useState, useRef, useEffect } from "react";
import {
  Send,
  Paperclip,
  Smile,
  MoreVertical,
  Phone,
  Video,
} from "lucide-react";
import Icon from "@/utils/icon";
import PopupModal from "@/components/Modal/PopupModal";
import ReportModal from "./ReportModal";

interface ChatDetailsProps {
  user: {
    id: number;
    name: string;
    avatar: string;
    status: string;
  } | null;
  onProfileClick?: () => void;
  onTitleClick?: () => void;
  activeTab?: string;
}

const ChatDetails: React.FC<ChatDetailsProps> = ({
  user,
  onProfileClick,
  onTitleClick,
  activeTab = "All",
}) => {
  const [message, setMessage] = useState("");
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  

  // Refs for file inputs and media
  const imageInputRef = useRef<HTMLInputElement>(null);
  const documentInputRef = useRef<HTMLInputElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);
  const cameraStreamRef = useRef<MediaStream | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      // Stop recording if component unmounts
      if (
        mediaRecorderRef.current &&
        mediaRecorderRef.current.state !== "inactive"
      ) {
        mediaRecorderRef.current.stop();
      }
      // Stop all tracks
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
      // Stop camera stream
      if (cameraStreamRef.current) {
        cameraStreamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  // Handle video stream when camera opens
  useEffect(() => {
    if (isCameraOpen && cameraStreamRef.current && videoRef.current) {
      videoRef.current.srcObject = cameraStreamRef.current;
      videoRef.current.play().catch((err) => {
        console.error("Error playing video:", err);
      });
    }
    return () => {
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    };
  }, [isCameraOpen]);

  // Camera handler
  const handleCameraClick = async () => {
    if (isCameraOpen) {
      // Close camera
      if (cameraStreamRef.current) {
        cameraStreamRef.current.getTracks().forEach((track) => track.stop());
        cameraStreamRef.current = null;
      }
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
      setIsCameraOpen(false);
    } else {
      // Open camera
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user" },
        });
        cameraStreamRef.current = stream;
        setIsCameraOpen(true);
      } catch (error) {
        console.error("Error accessing camera:", error);
        alert("Could not access camera. Please check permissions.");
      }
    }
  };

  // Capture photo from camera
  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current && cameraStreamRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;

      // Set canvas dimensions to match video
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      // Draw video frame to canvas
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(video, 0, 0);

        // Convert canvas to blob
        canvas.toBlob((blob) => {
          if (blob) {
            // Create a File object from the blob
            const file = new File([blob], `camera-photo-${Date.now()}.png`, {
              type: "image/png",
            });
            console.log("Photo captured:", file);
            // You can add file handling logic here (e.g., upload to server)

            // Close camera after capture
            cameraStreamRef.current
              ?.getTracks()
              .forEach((track) => track.stop());
            cameraStreamRef.current = null;
            setIsCameraOpen(false);
          }
        }, "image/png");
      }
    }
  };

  // Image handler
  const handleImageClick = () => {
    imageInputRef.current?.click();
  };

  // Document handler
  const handleDocumentClick = () => {
    documentInputRef.current?.click();
  };

  // File change handlers
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      // Handle image file
      console.log("Image selected:", files[0]);
      // You can add file handling logic here
    }
    // Reset input to allow selecting the same file again
    if (imageInputRef.current) {
      imageInputRef.current.value = "";
    }
  };

  const handleDocumentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      // Handle document file
      console.log("Document selected:", files[0]);
      // You can add file handling logic here
    }
    // Reset input to allow selecting the same file again
    if (documentInputRef.current) {
      documentInputRef.current.value = "";
    }
  };

  // Microphone handler
  const handleMicrophoneClick = async () => {
    if (isRecording) {
      // Stop recording
      if (
        mediaRecorderRef.current &&
        mediaRecorderRef.current.state !== "inactive"
      ) {
        mediaRecorderRef.current.stop();
      }
      // Stop all tracks
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
      }
      setIsRecording(false);
    } else {
      // Start recording
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        streamRef.current = stream;
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;
        audioChunksRef.current = [];

        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            audioChunksRef.current.push(event.data);
          }
        };

        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(audioChunksRef.current, {
            type: "audio/webm",
          });
          // Handle the recorded audio
          console.log("Audio recorded:", audioBlob);
          // You can add audio handling logic here (e.g., upload to server)

          // Stop all tracks
          if (streamRef.current) {
            streamRef.current.getTracks().forEach((track) => track.stop());
            streamRef.current = null;
          }
        };

        mediaRecorder.start();
        setIsRecording(true);
      } catch (error) {
        console.error("Error accessing microphone:", error);
        alert("Could not access microphone. Please check permissions.");
      }
    }
  };

  if (!user) {
    return (
      <div className="relative h-full rounded-3xl border border-white overflow-hidden">
        <img
          src="/chat_bg.svg"
          alt="Chat Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-gray-500 text-lg">
            Select a chat to start messaging
          </p>
        </div>
      </div>
    );
  }

  const handleSend = () => {
    if (message.trim()) {
      console.log("Sending:", message);
      setMessage("");
    }
  };

  return (
    <div className="relative h-full rounded-3xl border border-white overflow-hidden">
      {/* Background Image */}
      <img
        src="/chat_bg.svg"
        alt="Chat Background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay Content */}
      <div className="relative h-full flex flex-col">
        {/* Header */}
        <div className="bg-[#FFFFFF66] backdrop-blur-sm border border-white border-opacity-30 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {activeTab === "Communities" ? (
                // Community Header Style
                <>
                  <div className="flex flex-col">
                    <h3
                      className="font-semibold text-gray-900 cursor-pointer hover:text-blue-600 transition-colors mb-1"
                      onClick={onTitleClick}
                    >
                      {user?.name || "The Clutch Gene"}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        <img
                          src="/avatar1.svg"
                          alt="Member"
                          className="w-6 h-6 rounded-full border-2 border-white cursor-pointer hover:opacity-80 transition-opacity"
                          onClick={onProfileClick}
                        />
                        <img
                          src="/avatar2.svg"
                          alt="Member"
                          className="w-6 h-6 rounded-full border-2 border-white cursor-pointer hover:opacity-80 transition-opacity"
                          onClick={onProfileClick}
                        />
                        <img
                          src="/avatar3.svg"
                          alt="Member"
                          className="w-6 h-6 rounded-full border-2 border-white cursor-pointer hover:opacity-80 transition-opacity"
                          onClick={onProfileClick}
                        />
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <p className="text-sm text-gray-500">12 Online</p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                // Regular DM Header Style
                <>
                  <img
                    src={user?.avatar || "/avatar1.svg"}
                    alt={user?.name || "User"}
                    className="w-12 h-12 rounded-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={onProfileClick}
                  />
                  <div>
                    <h3
                      className="font-semibold text-gray-900 cursor-pointer hover:text-blue-600 transition-colors"
                      onClick={onTitleClick}
                    >
                      {user?.name || "Select a chat"}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {user?.status || ""}
                    </p>
                  </div>
                </>
              )}
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 bg-white border border-white rounded-full transition hover:bg-gray-50">
                <Icon height={18} width={18} name="video" />
              </button>
              <button className="p-2 bg-white border border-white rounded-full transition hover:bg-gray-50">
                <Icon height={16} width={16} name="audio_call" />
              </button>
              <button className="p-2 bg-white border border-white rounded-full transition hover:bg-gray-50">
                <Icon name="vertical_icon" height={16} width={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <div className="flex justify-start gap-2">
            <div className="relative w-10 h-10">
              <img
                className="w-10 h-10 rounded-full cursor-pointer hover:opacity-80 transition-opacity"
                src="/avatar2.svg"
                alt=""
                onClick={onProfileClick}
              />
              {/* Active dot perfectly aligned bottom-right */}
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
            </div>

            <div>
              <div className="bg-[#FFFFFF26] backdrop-blur-sm rounded-2xl rounded-tl-none px-4 py-3 max-w-xs shadow-sm border border-white">
                <p className="text-sm text-[#141B34] font-normal">
                  Hey coach, just finished today's training session
                </p>
              </div>
              <span className="text-xs text-[#666668] mt-2 block">
                12:03 PM
              </span>
            </div>
          </div>

          <div className="flex justify-end items-start gap-2.5">
            <div className="relative">
              <button
                onClick={() => setShowDropdown1(!showDropdown1)}
                className=""
              >
                <Icon name="vertical_icon" />
              </button>
              {showDropdown1 && (
                <div className="absolute top-full right-0 z-10 bg-white border border-white rounded-xl shadow-lg w-40">
                  <ul className="p-4 text-sm text-gray-600 font-medium">
                    <li className="flex gap-1 items-center">
                      <Icon name="forward" height={16} width={16} />
                      <a href="#" className="block w-full p-2">
                        Forward
                      </a>
                    </li>
                    <li className="flex gap-1 items-center">
                      <Icon name="block" height={16} width={16} />
                      <a href="#" className="block w-full p-2">
                        Block
                      </a>
                    </li>
                    <li className="flex gap-1 items-center">
                      <Icon name="report" height={16} width={16} />
                      <button 
                        onClick={() => {
                          setIsModalOpen(true);
                          setShowDropdown1(false);
                        }}
                        className="block w-full p-2 text-left hover:bg-gray-50 transition-colors"
                      >
                        Report
                      </button>
                    </li>
                    <li className="flex gap-1 items-center">
                      <Icon name="delete_chat" height={16} width={16} />
                      <a href="#" className="block w-full p-2">
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div>
              <div className="bg-primary-gradient rounded-2xl rounded-tr-none px-4 py-3 max-w-xs shadow-sm">
                <p className="text-sm font-normal text-white">
                  Great work! How are you feeling about tomorrow's competition?
                </p>
              </div>
              <span className="text-xs text-blue-100 mt-2 text-end block">
                12:03 PM
              </span>
            </div>
          </div>

          <div className="flex justify-start gap-2">
            <div className="relative w-10 h-10">
              <img
                className="w-10 h-10 rounded-full cursor-pointer hover:opacity-80 transition-opacity"
                src="/avatar2.svg"
                alt=""
                onClick={onProfileClick}
              />
              {/* Active dot perfectly aligned bottom-right */}
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
            </div>

            <div>
              <div className="bg-[#FFFFFF26] backdrop-blur-sm rounded-2xl rounded-tl-none px-4 py-3 max-w-xs shadow-sm border border-white">
                <p className="text-sm text-[#141B34] font-normal">
                  I'm feeling confident! The new drills really helped with my
                  footwork
                </p>
              </div>
              <span className="text-xs text-[#666668] mt-2 block">
                12:04 PM
              </span>
            </div>
          </div>

          <div className="flex justify-end items-start gap-2.5">
            <div className="relative">
              <button
                onClick={() => setShowDropdown2(!showDropdown2)}
                className=""
              >
                <Icon name="vertical_icon" />
              </button>
              {showDropdown2 && (
                <div className="absolute top-full right-0 z-10 bg-white border border-white rounded-xl shadow-lg w-40">
                  <ul className="p-4 text-sm text-gray-600 font-medium">
                    <li className="flex gap-1 items-center">
                      <Icon name="forward" height={16} width={16} />
                      <a href="#" className="block w-full p-2">
                        Forward
                      </a>
                    </li>
                    <li className="flex gap-1 items-center">
                      <Icon name="block" height={16} width={16} />
                      <a href="#" className="block w-full p-2">
                        Block
                      </a>
                    </li>
                    <li className="flex gap-1 items-center">
                      <Icon name="report" height={16} width={16} />
                      <a href="#" className="block w-full p-2">
                        Report
                      </a>
                    </li>
                    <li className="flex gap-1 items-center">
                      <Icon name="delete_chat" height={16} width={16} />
                      <a href="#" className="block w-full p-2">
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div>
              <div className="bg-primary-gradient rounded-2xl rounded-tr-none px-4 py-3 max-w-xs shadow-sm">
                <p className="text-sm text-white">
                  That's exactly what I wanted to hear. Get some rest tonight!
                </p>
              </div>
              <span className="text-xs text-[#666668]  mt-2 block text-end">
                12:05 PM
              </span>
            </div>
          </div>

          <div className="flex justify-start gap-2">
            <div className="relative w-10 h-10">
              <img
                className="w-10 h-10 rounded-full cursor-pointer hover:opacity-80 transition-opacity"
                src="/avatar2.svg"
                alt=""
                onClick={onProfileClick}
              />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
            <div>
              <div className="bg-[#FFFFFF26] backdrop-blur-sm rounded-2xl rounded-tl-none px-4 py-3 max-w-xs shadow-sm border border-white">
                <p className="text-sm text-[#141B34] font-normal">
                  Should I focus on anything specific for warm-up tomorrow?
                </p>
              </div>
              <span className="text-xs text-[#666668] mt-2 block">
                12:06 PM
              </span>
            </div>
          </div>

          <div className="flex justify-end items-start gap-2.5">
            <div className="relative">
              <button className="">
                <Icon name="vertical_icon" />
              </button>
            </div>
            <div>
              <div className="bg-primary-gradient rounded-2xl rounded-tr-none px-4 py-3 max-w-xs shadow-sm">
                <p className="text-sm text-white">
                  Yes, spend extra time on your hip mobility and sprint
                  mechanics. Also practice your starts.
                </p>
              </div>
              <span className="text-xs text-blue-100 mt-2 block text-end">
                12:07 PM
              </span>
            </div>
          </div>

          <div className="flex justify-start gap-2">
            <div className="relative w-10 h-10">
              <img
                className="w-10 h-10 rounded-full cursor-pointer hover:opacity-80 transition-opacity"
                src="/avatar2.svg"
                alt=""
                onClick={onProfileClick}
              />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
            <div>
              <div className="bg-[#FFFFFF26] backdrop-blur-sm rounded-2xl rounded-tl-none px-4 py-3 max-w-xs shadow-sm border border-white">
                <p className="text-sm text-[#141B34] font-normal">
                  Perfect! Will do. Thanks coach 🙏
                </p>
              </div>
              <span className="text-xs text-[#666668] mt-2 block">
                12:08 PM
              </span>
            </div>
          </div>
        </div>

        {/* Camera Preview Modal */}
        {isCameraOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
            <div className="relative bg-white rounded-2xl p-6 max-w-md w-full mx-4">
              <div className="relative">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  className="w-full rounded-lg"
                  style={{ maxHeight: "400px" }}
                />
                <canvas ref={canvasRef} className="hidden" />
              </div>
              <div className="flex items-center justify-center gap-4 mt-4">
                <button
                  onClick={handleCameraClick}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={capturePhoto}
                  className="w-16 h-16 bg-[#5C8FF7] hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors shadow-lg"
                >
                  <div className="w-12 h-12 bg-white rounded-full border-4 border-[#5C8FF7]"></div>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="bg-white/80 backdrop-blur-sm border-t border-white px-6 py-4">
          {/* Hidden File Inputs */}
          <input
            type="file"
            ref={imageInputRef}
            onChange={handleImageChange}
            accept="image/*"
            className="hidden"
          />
          <input
            type="file"
            ref={documentInputRef}
            onChange={handleDocumentChange}
            accept=".pdf,.doc,.docx,.txt"
            className="hidden"
          />

          <div className="flex items-center gap-3">
            {/* Camera Icon */}
            <button
              onClick={handleCameraClick}
              className={`p-2 rounded-full transition border border-white ${
                isCameraOpen
                  ? "bg-[#5C8FF7] hover:bg-blue-600 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              <Icon
                name="camera"
                height={16}
                width={16}
                color={isCameraOpen ? "white" : undefined}
              />
            </button>

            {/* Image Gallery Icon */}
            <button
              onClick={handleImageClick}
              className="p-2 hover:bg-gray-100 rounded-full transition border border-white"
            >
              <Icon name="document" height={16} width={16} />
            </button>

            {/* Document Icon */}
            <button
              onClick={handleDocumentClick}
              className="p-2 hover:bg-gray-100 rounded-full transition border border-white"
            >
              <Icon name="upload_file" height={16} width={16} />
            </button>

            <div className="flex-1 relative">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type a message..."
                className="w-full px-4 py-3 bg-[#e9f4fd] border border-white rounded-full focus:outline-none pr-12"
              />
              <button
                onClick={handleMicrophoneClick}
                className={`absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full transition ${
                  isRecording
                    ? "bg-red-500 hover:bg-red-600"
                    : "hover:bg-gray-200"
                }`}
              >
                <Icon
                  name="microphone_icon"
                  height={20}
                  width={20}
                  color={isRecording ? "white" : "#666"}
                />
              </button>
            </div>

            <button
              onClick={handleSend}
              className="p-3 bg-[#5C8FF7] hover:bg-[#4A76E2] rounded-full transition"
            >
              <Send className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      <PopupModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title=""
        widthClass="w-full md:w-[519px] h-[511px]"
      >
        <ReportModal setIsOpen={setIsModalOpen} />
      </PopupModal>
    </div>
  );
};

export default ChatDetails;
