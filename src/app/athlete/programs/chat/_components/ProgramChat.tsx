import Icon from "@/utils/icon";
import React, { useState, useRef, useEffect } from "react";
import { Smile, Send } from "lucide-react";
import Image from "next/image";

interface ProgramChatProps {
  onToggleParticipants: () => void;
}

const ProgramChat = ({ onToggleParticipants }: ProgramChatProps) => {
  const [message, setMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [isCameraOpen, setIsCameraOpen] = useState(false);

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

  const messages = [
    {
      id: 1,
      user: "Mike Thompson",
      avatar: "/avatars/mike.jpg",
      role: "Admin",
      message: "Welcome everyone to the new program chat system! 🎉",
      timestamp: "Today at 2:30 PM",
      reactions: { thumbsUp: 3, fire: 1 },
      isPinned: false,
    },
    {
      id: 2,
      user: "Jacob Jones",
      avatar: "/avatars/jacob.jpg",
      role: "Staff",
      message: "This looks amazing! Great work on the new interface.",
      timestamp: "Today at 2:30 PM",
      reactions: { thumbsUp: 3, star: 1 },
      isPinned: false,
    },
    {
      id: 3,
      user: "Esther Howard",
      avatar: "/avatars/esther.jpg",
      role: null,
      message: "This looks amazing! Great work on the new interface.",
      timestamp: "Today at 2:30 PM",
      reactions: { thumbsUp: 3, smile: 1 },
      isPinned: false,
    },
  ];

  const handleSend = () => {
    if (message.trim()) {
      console.log("Sending:", message);
      setMessage("");
    }
  };

  return (
    <div className="relative h-full rounded-3xl border border-white overflow-hidden min-h-screen">
      {/* Background Image */}
      <img
        src="/program_chat.png"
        alt="Chat Background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay Content */}
      <div className="relative h-full flex flex-col">
        {/* Header */}
        <div className="bg-[#FFFFFF66] backdrop-blur-sm border border-white border-opacity-30 p-6">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-black font-semibold text-2xl mb-1">
                Welcome
              </h1>
              <p className="text-gray-600 text-sm">
                Welcome new members and general introduction...
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative bg-[#FFFFFF4D] rounded-full border border-white p-2">
                <Icon name="message" height={24} width={24} color="#000000" />
                <span className="absolute -top-1 -right-1 bg-[#1556D8] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  1
                </span>
              </div>
              <div className="cursor-pointer bg-[#FFFFFF4D] rounded-full border border-white p-2" onClick={onToggleParticipants}>
                <Icon name="users" height={24} width={24} color="#000000" />
              </div>
				  <div className="bg-[#FFFFFF4D] rounded-full border border-white p-2">
              <Icon name="settings" height={24} width={24} color="#000000" />
				  </div>
					
            </div>
          </div>
        </div>

        {/* Pinned Message */}
        <div className="mx-6 mt-6 bg-[#457ff314] backdrop-blur-sm rounded-xl p-4 border border-[#457ff326]">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 text-[#1556D8] text-sm font-medium">
              <Icon name="pin" height={16} width={16} color="#1556D8" />
              <span>1 pinned message</span>
            </div>
            <button className="text-[#1556D8] text-sm font-medium hover:underline">
              Hide
            </button>
          </div>
          <div className="flex items-start gap-3">
            <div className="font-semibold text-black text-sm">Alex Johnson</div>
            <div className="text-gray-600 text-sm">Dec 25, 2024 at 9:00 AM</div>
          </div>
          <p className="text-black text-sm mt-1">
            Welcome everyone to the new program chat system! 🎉
          </p>
        </div>

        {/* Messages */}
        <div className="flex-1 p-6 space-y-4 overflow-y-auto">
          {messages.map((msg) => (
            <div key={msg.id} className="flex items-start gap-3">
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold shrink-0 relative">
                <Image src="/user.png" height={40} width={40} className="w-10 h-10 rounded-full object-cover" alt={msg.user} />
                {msg.id === 1 && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>

              {/* Message Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-black font-semibold text-sm">
                    {msg.user}
                  </span>
                  {msg.role && (
                    <span className="bg-black text-white text-xs px-2 py-0.5 rounded-lg font-medium">
                      {msg.role}
                    </span>
                  )}
                </div>
                <div className="bg-[#FFFFFF26] backdrop-blur-sm rounded-2xl rounded-tl-none px-4 py-3 inline-block max-w-full border border-white shadow-sm">
                  <p className="text-[#141B34] text-sm font-normal">
                    {msg.message}
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-gray-500 text-xs">{msg.timestamp}</span>
                  {msg.id === 1 && (
                    <Icon name="pin" height={14} width={14} color="#1556D8" />
                  )}
                  {/* <div className="flex items-center gap-2">
                    <span className="text-xs">👍 {msg.reactions.thumbsUp}</span>
                    {msg.reactions.fire && <span className="text-xs">🔥</span>}
                    {msg.reactions.star && <span className="text-xs">⭐</span>}
                    {msg.reactions.smile && <span className="text-xs">👍</span>}
                  </div> */}
                </div>
              </div>

              {/* Message Actions */}
              {/* <div className="flex items-center gap-2">
                <button className="hover:bg-white/50 rounded-full p-1 transition">
                  <Icon name="heart" height={18} width={18} color="#9CA3AF" />
                </button>
                <button className="hover:bg-white/50 rounded-full p-1 transition">
                  <Icon name="replie" height={18} width={18} color="#9CA3AF" />
                </button>
                <button className="hover:bg-white/50 rounded-full p-1 transition">
                  <Icon
                    name="more_vertical"
                    height={18}
                    width={18}
                    color="#9CA3AF"
                  />
                </button>
              </div> */}
            </div>
          ))}
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
                  className="w-16 h-16 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors shadow-lg"
                >
                  <div className="w-12 h-12 bg-white rounded-full border-4 border-blue-500"></div>
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
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
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
                placeholder="Message # Welcome"
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
              className="p-3 bg-blue-500 hover:bg-blue-600 rounded-full transition"
            >
              <Send className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramChat;
