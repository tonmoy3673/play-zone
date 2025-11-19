"use client";

import Icon from "@/app/overview/content/_components/icon";
import Select, { SelectOption } from "@/components/ui/Select";
import { useEffect, useRef, useState } from "react";

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type EventType = "message-task" | "create-task" | "personal-task";

export default function CalendarModal({ isOpen, onClose }: CalendarModalProps) {
  const [eventType, setEventType] = useState<EventType>("personal-task");
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [dueDate, setDueDate] = useState("2026-08-07");
  const [selectedStaff, setSelectedStaff] = useState<string>("");
  const [isStaffSelectOpen, setIsStaffSelectOpen] = useState(false);
  const staffSelectRef = useRef<HTMLDivElement>(null);
  const dateInputRef = useRef<HTMLInputElement>(null);

  // Format date for display (MM/DD/YYYY)
  const formatDateDisplay = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  // Staff options
  const staffOptions: SelectOption[] = [
    { value: "staff1", label: "User name staff" },
    { value: "staff2", label: "John Doe" },
    { value: "staff3", label: "Jane Smith" },
  ];

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

  // Close staff select when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        staffSelectRef.current &&
        !staffSelectRef.current.contains(event.target as Node)
      ) {
        setIsStaffSelectOpen(false);
      }
    };

    if (isStaffSelectOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isStaffSelectOpen]);

  if (!isOpen) return null;

  const handleSaveDraft = () => {
    // Handle save draft logic
    console.log("Save draft", {
      eventType,
      title,
      note,
      dueDate,
      selectedStaff,
    });
  };

  const handleCreateEvent = () => {
    // Handle create event logic
    console.log("Create event", {
      eventType,
      title,
      note,
      dueDate,
      selectedStaff,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative z-10 bg-white rounded-[16px] w-full max-w-[737px] max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-gray-100">
          <h2 className="text-base font-medium text-dark leading-normal">
            Create Event
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Icon name="cancel_circle" width={24} height={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-5">
          {/* Athlete Message Question */}
          <div className="space-y-3">
            <p className="text-xs font-normal text-dark leading-[1.4]">
              Which athlete would you like to message?
            </p>

            {/* Info Banner */}
            <div className="bg-[rgba(210,210,210,0.1)] rounded-[16px] p-4 flex items-center gap-3">
              <Icon
                name="alert_circle"
                width={24}
                height={24}
                className="w-6 h-6 text-dark shrink-0 mt-0.5"
              />
              <p className="text-xs font-normal text-paragraph-dark leading-[1.4] pr-24">
                Events you create here are primarily for your own management.
                You can optionally assign them to a staff member.
              </p>
            </div>
          </div>

          {/* Event Type Selection */}
          <div className="space-y-5">
            <p className="text-base font-medium text-dark leading-normal">
              Select Event Type
            </p>

            <div className="flex gap-5">
              {/* Message Task */}
              <button
                onClick={() => setEventType("message-task")}
                className={`flex-1 bg-[rgba(186,209,255,0.1)] rounded-[16px] p-5 flex flex-col items-center gap-5 transition-all ${
                  eventType === "message-task"
                    ? "border-2 border-[#5c8ff7]"
                    : "border-2 border-transparent"
                }`}
              >
                <div className="bg-[rgba(255,255,255,0.3)] rounded-[66px] w-12 h-12 flex items-center justify-center">
                  <Icon name="message_03" width={24} height={24} />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-sm font-medium text-dark leading-[1.3]">
                    Message Task
                  </p>
                  <p className="text-xs font-normal text-paragraph-dark leading-[1.4] text-center">
                    Reminder to message athlete
                  </p>
                </div>
              </button>

              {/* Create Task */}
              <button
                onClick={() => setEventType("create-task")}
                className={`flex-1 bg-[rgba(186,209,255,0.1)] rounded-[16px] p-5 flex flex-col items-center gap-5 transition-all ${
                  eventType === "create-task"
                    ? "border-2 border-[#5c8ff7]"
                    : "border-2 border-transparent"
                }`}
              >
                <div className="bg-[rgba(255,255,255,0.3)] rounded-[66px] w-12 h-12 flex items-center justify-center">
                  <Icon name="task_edit_01" width={24} height={24} />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-sm font-medium text-dark leading-[1.3]">
                    Create Task
                  </p>
                  <p className="text-xs font-normal text-paragraph-dark leading-[1.4] text-center">
                    Reminder to message athlete
                  </p>
                </div>
              </button>

              {/* Personal Task */}
              <button
                onClick={() => setEventType("personal-task")}
                className={`flex-1 bg-[rgba(186,209,255,0.1)] rounded-[16px] p-5 flex flex-col items-center gap-5 transition-all ${
                  eventType === "personal-task"
                    ? "border-2 border-[#5c8ff7]"
                    : "border-2 border-transparent"
                }`}
              >
                <div className="bg-[rgba(255,255,255,0.3)] rounded-[66px] w-12 h-12 flex items-center justify-center">
                  <Icon name="task_edit_01" width={24} height={24} />
                </div>
                <div className="flex flex-col items-center gap-2">
                  <p className="text-sm font-medium text-dark leading-[1.3]">
                    Personal Task
                  </p>
                  <p className="text-xs font-normal text-paragraph-dark leading-[1.4] text-center">
                    Reminder to message athlete
                  </p>
                </div>
              </button>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-5">
            {/* Title */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-dark leading-[1.3]">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter title"
                className="w-full h-14 bg-[#f8faff] rounded-[16px] px-5 text-sm text-dark placeholder:text-paragraph-dark focus:outline-none focus:ring-2 focus:ring-[#5c8ff7]/20 border border-transparent focus:border-[#5c8ff7] transition-all"
              />
            </div>

            {/* Note */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-dark leading-[1.3]">
                Note
              </label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Write your athletes details..."
                rows={4}
                className="w-full bg-[#f8faff] rounded-[16px] px-5 py-4 text-sm text-dark placeholder:text-paragraph-dark focus:outline-none focus:ring-2 focus:ring-[#5c8ff7]/20 border border-transparent focus:border-[#5c8ff7] transition-all resize-none"
              />
            </div>

            {/* Due Date and Assign Staff */}
            <div className="flex gap-5">
              {/* Due Date */}
              <div className="flex-1 space-y-3">
                <label className="text-sm font-medium text-dark leading-[1.3]">
                  Due Date
                </label>
                <div className="relative">
                  <input
                    ref={dateInputRef}
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="w-full h-14 bg-[#f8faff] rounded-[16px] pl-[18px] pr-[18px] text-sm text-transparent focus:outline-none focus:ring-2 focus:ring-[#5c8ff7]/20 border border-transparent focus:border-[#5c8ff7] transition-all cursor-pointer [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-datetime-edit]:hidden [&::-webkit-datetime-edit-fields-wrapper]:hidden [&::-webkit-datetime-edit-text]:hidden"
                    style={{ colorScheme: "light" }}
                  />
                  <div
                    className="absolute inset-0 flex items-center gap-3 pl-[18px] cursor-pointer"
                    onClick={() => {
                      if (dateInputRef.current) {
                        // Try modern showPicker API first
                        if (
                          typeof dateInputRef.current.showPicker === "function"
                        ) {
                          dateInputRef.current.showPicker();
                        } else {
                          // Fallback: focus and click the input
                          dateInputRef.current.focus();
                          dateInputRef.current.click();
                        }
                      }
                    }}
                  >
                    <Icon name="calendar_03" width={20} height={20} />
                    <span className="text-sm font-normal text-paragraph-dark leading-[1.3]">
                      {formatDateDisplay(dueDate)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Assign Staff */}
              <div className="flex-1 space-y-3" ref={staffSelectRef}>
                <label className="text-sm font-medium text-dark leading-[1.3]">
                  Assign task to staff
                </label>
                <Select
                  placeholder="User name staff"
                  options={staffOptions}
                  value={selectedStaff}
                  onChange={(value) => setSelectedStaff(value)}
                  className="h-14 bg-[#f8faff]"
                />
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-2 pt-5">
            <button
              onClick={handleSaveDraft}
              className="px-4 py-3 rounded-[61px] border border-[rgba(69,127,243,0.1)] bg-gradient-to-b from-[rgba(69,127,243,0.05)] to-[rgba(69,127,243,0.12)] text-sm font-medium text-dark hover:opacity-90 transition-opacity"
            >
              Save Draft
            </button>
            <button
              onClick={handleCreateEvent}
              className="px-4 py-3 rounded-[61px] border border-[rgba(21,86,216,0.3)] bg-gradient-to-b from-[#5C8FF7] to-[#276AEE] text-sm font-medium text-white hover:opacity-90 transition-opacity"
            >
              Create Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
