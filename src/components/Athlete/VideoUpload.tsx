"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Download, Share2, Maximize2, File } from "lucide-react";
import Icon from "@/utils/icon";

interface VideoUploadProps {
  onVideoUpload?: (file: File, videoUrl: string) => void;
}

export default function VideoUpload({ onVideoUpload }: VideoUploadProps) {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [duration, setDuration] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [volume, setVolume] = useState<number>(1);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
  };

  const formatDuration = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, "0")}:${secs
        .toString()
        .padStart(2, "0")}`;
    }
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  };

  const handleFileSelect = (file: File) => {
    if (!file.type.startsWith("video/")) {
      alert("Please select a valid video file");
      return;
    }

    if (file.size > 500 * 1024 * 1024) {
      alert("File size must be less than 500MB");
      return;
    }

    setVideoFile(file);
    const url = URL.createObjectURL(file);
    setVideoUrl(url);
    onVideoUpload?.(file, url);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleDownload = () => {
    if (videoFile) {
      const a = document.createElement("a");
      a.href = videoUrl;
      a.download = videoFile.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: videoFile?.name || "Video",
        text: "Check out this video",
      });
    } else {
      alert("Share functionality not supported on this browser");
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

	// Upload state
	if (!videoFile) {
		return (
			<div className="w-full mx-auto bg-white rounded-3xl">
				<div
					onDragOver={handleDragOver}
					onDrop={handleDrop}
					className="border border-dashed border-[#276AEE] rounded-3xl p-12 text-center cursor-pointer transition-all"
				>
					<div className="flex flex-col items-center gap-4">
						<svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
							<path fillRule="evenodd" clipRule="evenodd" d="M11.7559 19.5C11.7559 20.0523 11.3081 20.5 10.7559 20.5C10.2036 20.5 9.75586 20.0523 9.75586 19.5L9.75586 15L9.1616 15C8.98596 15.0001 8.77031 15.0003 8.59387 14.9782L8.59053 14.9778C8.46408 14.962 7.88804 14.8902 7.61368 14.3246C7.33872 13.7577 7.64065 13.2576 7.70597 13.1494L7.70841 13.1454C7.80062 12.9924 7.93477 12.8215 8.04511 12.6809L8.06885 12.6507C8.36348 12.2748 8.74545 11.7906 9.12588 11.3996C9.31571 11.2045 9.53297 11.0033 9.76388 10.8444C9.96914 10.7032 10.3193 10.5 10.75 10.5C11.1807 10.5 11.5309 10.7032 11.7361 10.8444C11.967 11.0033 12.1843 11.2045 12.3741 11.3996C12.7546 11.7906 13.1365 12.2748 13.4312 12.6507L13.4549 12.6809C13.5652 12.8215 13.6994 12.9923 13.7916 13.1454L13.794 13.1494C13.8593 13.2576 14.1613 13.7578 13.8863 14.3246C13.612 14.8902 13.0359 14.962 12.9095 14.9778L12.9061 14.9782C12.7297 15.0003 12.514 15.0001 12.3384 15L11.7559 15L11.7559 19.5Z" fill="#141B34" />
							<path opacity="0.4" d="M0 10.75C0 8.10826 1.78106 5.8832 4.20825 5.20919C4.40424 5.15476 4.50224 5.12755 4.55872 5.0697C4.6152 5.01184 4.63991 4.91384 4.68931 4.71783C5.37272 2.00653 7.82671 0 10.75 0C13.9649 0 16.6128 2.42731 16.9612 5.54924C16.9885 5.79459 17.0022 5.9173 17.0647 5.98828C17.1272 6.05927 17.2489 6.0888 17.4923 6.14786C19.7922 6.70589 21.5 8.77851 21.5 11.25C21.5 14.1495 19.1495 16.5 16.25 16.5H15.1506C14.692 16.5 14.4626 16.5 14.4326 16.4619C14.4179 16.4433 14.4141 16.4339 14.4117 16.4103C14.4067 16.3621 14.6019 16.1723 14.9925 15.7927C15.9826 14.8304 16.005 13.2476 15.0427 12.2575C14.3942 11.4482 13.7815 10.5922 12.9879 9.91626C12.3586 9.38025 11.5926 9 10.75 9C9.90738 9 9.14143 9.38025 8.51209 9.91626C7.71846 10.5922 7.10575 11.4482 6.4573 12.2575C5.49496 13.2476 5.51745 14.8304 6.50753 15.7927C6.89807 16.1723 7.09334 16.3621 7.08832 16.4103C7.08587 16.4339 7.08206 16.4433 7.06739 16.4619C7.03737 16.5 6.80801 16.5 6.34942 16.5H5.75C2.57436 16.5 0 13.9256 0 10.75Z" fill="#141B34" />
						</svg>

            <div>
              <h3 className="text-xl font-semibold text-black mb-2">
                Upload Video File
              </h3>
              <p className="text-[#141b34b3] mb-4 text-sm">
                Drag and drop your video here, or click to browse
              </p>
              <p className="text-sm text-[#141b34b3] mb-6">or</p>
              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-6 py-2 text-[#276AEE] rounded-lg font-medium transition-colors"
              >
                Browse Files
              </button>
            </div>

            <p className="text-xs text-[#141b34b3] mt-4">
              Supported formats: MP4, MOV, AVI (Max 500MB)
            </p>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="video/*"
            onChange={handleFileInputChange}
            className="hidden"
          />
        </div>
      </div>
    );
  }

  // Preview state
  return (
    <div className="w-full mx-auto">
      <div className="bg-[##FFFFFF99] rounded-2xl border-white border p-4 overflow-hidden">
        {/* Video Container */}
        <div className="relative aspect-video">
          <video
            ref={videoRef}
            src={videoUrl}
            onLoadedMetadata={handleLoadedMetadata}
            controls
            className="w-full h-full rounded-xl object-cover"
          />
        </div>

        {/* Video Info and Actions */}
        <div className="mt-4 ">
          <div className="flex items-center justify-between">
            {/* Left: Duration and File Size */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-[#141b34b3]">
                <Icon
                  name="clock"
                  width={16}
                  height={16}
                  className="text-dark"
                />
                <span className="text-sm font-medium">
                  {formatDuration(duration)}
                </span>
              </div>

              <div className="flex items-center gap-2 text-[#141b34b3]">
                <File className="w-4 h-4" />
                <span className="text-sm font-medium">
                  {formatFileSize(videoFile.size)}
                </span>
              </div>
            </div>

						{/* Right: Action Buttons */}
						<div className="flex items-center gap-3">
							<button
								onClick={handleFullscreen}
								className="p-2 rounded-lg transition-colors text-[#141b34b3] "
								title="Fullscreen"
							>
								{/* <Maximize2 className="w-5 h-5" /> */}
								<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
									<path d="M6.66667 2.5H4.16667C3.72464 2.5 3.30072 2.67559 2.98816 2.98816C2.67559 3.30072 2.5 3.72464 2.5 4.16667V6.66667M17.5 6.66667V4.16667C17.5 3.72464 17.3244 3.30072 17.0118 2.98816C16.6993 2.67559 16.2754 2.5 15.8333 2.5H13.3333M13.3333 17.5H15.8333C16.2754 17.5 16.6993 17.3244 17.0118 17.0118C17.3244 16.6993 17.5 16.2754 17.5 15.8333V13.3333M2.5 13.3333V15.8333C2.5 16.2754 2.67559 16.6993 2.98816 17.0118C3.30072 17.3244 3.72464 17.5 4.16667 17.5H6.66667" stroke="#141B34" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</button>

              <button
                onClick={handleDownload}
                className="p-2 rounded-lg transition-colors text-[#141b34b3] "
                title="Download"
              >
                <Download className="w-5 h-5" />
              </button>

              <button
                onClick={handleShare}
                className="p-2 rounded-lg transition-colors text-[#141b34b3] "
                title="Share"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* File Name */}
          {/* <div className="mt-4 pt-4 border-t border-gray-800">
            <p className="text-sm text-[#141b34b3]">
              <span className="font-medium text-[#141b34b3]">{videoFile.name}</span>
            </p>
          </div> */}
        </div>
      </div>

      {/* Upload Another Button */}
      <div className="mt-6 text-center">
        <button
          onClick={() => {
            setVideoFile(null);
            setVideoUrl("");
            setDuration(0);
            if (fileInputRef.current) {
              fileInputRef.current.value = "";
            }
          }}
          className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
        >
          Upload Another Video
        </button>
      </div>
    </div>
  );
}
