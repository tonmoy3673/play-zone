"use client";

import type { SelectOption } from "@/components/ui/Select";
import { Calendar, ChevronDown, Clock, Search, Upload, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface CreateTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreateTaskModal({
  isOpen,
  onClose,
}: CreateTaskModalProps) {
  const [completionCriteria, setCompletionCriteria] = useState("review");
  const [taskType, setTaskType] = useState("video-submission");
  const [isTaskTypeOpen, setIsTaskTypeOpen] = useState(false);
  const [date, setDate] = useState("2025-09-16");
  const [time, setTime] = useState("11:00");
  const [files, setFiles] = useState<File[]>([]);
  const dateInputRef = useRef<HTMLInputElement>(null);
  const timeInputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Format date for display (M/D/YYYY)
  const formatDateDisplay = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  // Format time for display (H:MM AM/PM)
  const formatTimeDisplay = (timeString: string) => {
    const [hours, minutes] = timeString.split(":");
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? "PM" : "AM";
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const taskTypeOptions: SelectOption[] = [
    { value: "video-submission", label: "Video Submission" },
    { value: "document", label: "Document" },
    { value: "quiz", label: "Quiz" },
    { value: "assignment", label: "Assignment" },
  ];

  const selectedTaskType = taskTypeOptions.find(
    (opt) => opt.value === taskType
  );
  const taskTypeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Close task type dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        taskTypeRef.current &&
        !taskTypeRef.current.contains(event.target as Node)
      ) {
        setIsTaskTypeOpen(false);
      }
    };

    if (isTaskTypeOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isTaskTypeOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop with blur */}
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative z-10 bg-white rounded-[16px] w-full max-w-[737px] max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#ebf1ff]">
          <h2 className="text-base font-medium text-dark">Create New Task</h2>
          <button
            onClick={onClose}
            className="size-6 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="size-4 text-dark" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5">
          <div className="flex flex-col gap-4">
            {/* Task Title */}
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium text-dark">
                Task Title
              </label>
              <input
                type="text"
                placeholder="Enter task title"
                className="bg-[#f8faff] h-14 px-5 py-4 rounded-[16px] text-sm text-paragraph-dark placeholder:text-paragraph-dark focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Task Type */}
            <div className="flex flex-col gap-3 relative" ref={taskTypeRef}>
              <label className="text-sm font-medium text-dark">
                Task Type / Category
              </label>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsTaskTypeOpen(!isTaskTypeOpen)}
                  className="bg-[#f8faff] h-14 w-full px-5 py-4 rounded-[16px] flex items-center justify-between text-sm font-medium text-dark hover:bg-[#f0f4ff] transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <span>{selectedTaskType?.label || "Select task type"}</span>
                  <ChevronDown
                    className={`size-6 text-dark transition-transform ${
                      isTaskTypeOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isTaskTypeOpen && (
                  <div className="absolute z-50 w-full mt-2 bg-white rounded-[16px] border border-gray-200 shadow-lg overflow-hidden">
                    {taskTypeOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => {
                          setTaskType(option.value);
                          setIsTaskTypeOpen(false);
                        }}
                        className={`w-full px-5 py-3 text-left text-sm font-medium hover:bg-[#f8faff] transition-colors ${
                          taskType === option.value
                            ? "bg-[#f8faff] text-dark"
                            : "text-dark"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Assign To */}
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3">
                <label className="text-sm font-medium text-dark">
                  Assign To
                </label>
                <div className="bg-[#f8faff] h-14 px-5 py-4 rounded-[16px] flex items-center gap-2">
                  <Search className="size-6 text-dark" />
                  <input
                    type="text"
                    placeholder="Search athletes or Select"
                    className="flex-1 bg-transparent text-sm font-medium text-dark placeholder:text-dark focus:outline-none"
                  />
                </div>
              </div>
              {/* Selected Athletes */}
              <div className="flex items-center -space-x-1">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="size-8 rounded-full border-2 border-white overflow-hidden bg-gray-200"
                  >
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500" />
                  </div>
                ))}
                <div className="bg-[#f8faff] border border-[#f3f3f3] rounded-[24px] size-8 flex items-center justify-center">
                  <span className="text-xs font-medium text-dark">+11</span>
                </div>
              </div>
            </div>

            {/* Date and Time */}
            <div className="flex items-center justify-between gap-5">
              <div className="flex flex-col gap-3 flex-1">
                <label className="text-sm font-medium text-dark">Date</label>
                <div className="relative">
                  <input
                    ref={dateInputRef}
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="bg-[#f8faff] h-14 w-full px-5 py-4 pr-12 rounded-[16px] text-sm font-medium text-transparent hover:bg-[#f0f4ff] transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-datetime-edit]:hidden [&::-webkit-datetime-edit-fields-wrapper]:hidden [&::-webkit-datetime-edit-text]:hidden"
                    style={{
                      colorScheme: "light",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-between px-5 pointer-events-none">
                    <span className="text-sm font-medium text-dark">
                      {formatDateDisplay(date)}
                    </span>
                    <Calendar className="size-6 text-dark" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 flex-1">
                <label className="text-sm font-medium text-dark">Time</label>
                <div className="relative">
                  <input
                    ref={timeInputRef}
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="bg-[#f8faff] h-14 w-full px-5 py-4 pr-12 rounded-[16px] text-sm font-medium text-transparent hover:bg-[#f0f4ff] transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full"
                    style={{
                      colorScheme: "light",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-between px-5 pointer-events-none">
                    <span className="text-sm font-medium text-dark">
                      {formatTimeDisplay(time)}
                    </span>
                    <Clock className="size-6 text-dark" />
                  </div>
                </div>
              </div>
            </div>

            {/* Task Details */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-dark">
                Task Details
              </label>
              <textarea
                placeholder="Write Clear instructions for the athletes..."
                className="bg-[#f8faff] min-h-[108px] px-4 py-4 rounded-[16px] text-sm text-paragraph-dark placeholder:text-paragraph-dark focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              />
            </div>

            {/* Attachments */}
            <div className="flex flex-col gap-3">
              <label className="text-sm font-medium text-dark">
                Attachments
              </label>
              <div
                className="bg-[#f8faff] border-2 border-dashed border-[#276aee] h-[171px] rounded-[16px] flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-[#f0f4ff] transition-colors relative"
                onDragOver={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onDrop={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  const droppedFiles = Array.from(e.dataTransfer.files);
                  setFiles((prev) => [...prev, ...droppedFiles]);
                }}
                onClick={() => fileInputRef.current?.click()}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="audio/mpeg,audio/mp3,video/mp4,video/mpeg"
                  onChange={(e) => {
                    const selectedFiles = Array.from(e.target.files || []);
                    setFiles((prev) => [...prev, ...selectedFiles]);
                  }}
                  className="hidden"
                />
                <div className="bg-[rgba(255,255,255,0.3)] rounded-full size-12 flex items-center justify-center">
                  <Upload className="size-6 text-dark" />
                </div>
                <div className="flex flex-col gap-1 items-center text-center">
                  <p className="text-xs font-medium text-dark">
                    drag & drop files here
                  </p>
                  <p className="text-[10px] text-paragraph-dark">
                    MP3, MP4, Up to 50 MB.
                  </p>
                  <p className="text-sm text-paragraph-dark">or</p>
                  <button
                    type="button"
                    className="text-xs font-medium text-[#437EF7] hover:underline"
                    onClick={(e) => {
                      e.stopPropagation();
                      fileInputRef.current?.click();
                    }}
                  >
                    Browse Files
                  </button>
                </div>
                {files.length > 0 && (
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-xs text-paragraph-dark">
                      {files.length} file{files.length > 1 ? "s" : ""} selected
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Completion Criteria */}
            <div className="flex flex-col gap-4">
              <label className="text-sm font-medium text-dark">
                Completion Criteria
              </label>
              <div className="flex gap-7 items-center flex-wrap">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="completionCriteria"
                    value="review"
                    checked={completionCriteria === "review"}
                    onChange={(e) => setCompletionCriteria(e.target.value)}
                    className="size-[18px] text-[#437EF7] border-2 border-[#437EF7] focus:ring-2 focus:ring-blue-400"
                  />
                  <span className="text-sm font-normal text-dark">
                    Requires Coach Review
                  </span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="completionCriteria"
                    value="late"
                    checked={completionCriteria === "late"}
                    onChange={(e) => setCompletionCriteria(e.target.value)}
                    className="size-[18px] text-[#437EF7] border-2 border-gray-300 focus:ring-2 focus:ring-blue-400"
                  />
                  <span className="text-sm font-normal text-paragraph-dark">
                    Allow late Submissions
                  </span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="completionCriteria"
                    value="auto"
                    checked={completionCriteria === "auto"}
                    onChange={(e) => setCompletionCriteria(e.target.value)}
                    className="size-[18px] text-[#437EF7] border-2 border-gray-300 focus:ring-2 focus:ring-blue-400"
                  />
                  <span className="text-sm font-normal text-paragraph-dark">
                    Auto-Complete After Due Date
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-5 border-t border-[#ebf1ff]">
          <button
            onClick={onClose}
            className="bg-gradient-to-b from-[rgba(69,127,243,0.05)] to-[rgba(69,127,243,0.12)] border border-[rgba(69,127,243,0.1)] text-[#437EF7] px-4 py-3 rounded-[61px] text-sm font-medium hover:opacity-80 transition-opacity"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="border border-[rgba(21,86,216,0.3)] bg-primary-gradient text-white px-4 py-3 rounded-[61px] text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Save Task
          </button>
        </div>
      </div>
    </div>
  );
}
