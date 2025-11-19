"use client";

import { useState } from "react";

const img =
  "https://www.figma.com/api/mcp/asset/77029a08-e2c1-4fce-8104-7d841d530c8f";
const img1 =
  "https://www.figma.com/api/mcp/asset/f9611d43-8dd7-46c1-8bde-649d9f6e5dec";
const img2 =
  "https://www.figma.com/api/mcp/asset/8eeba8d9-c46a-4be7-bf3a-7f1517a75959";
const img3 =
  "https://www.figma.com/api/mcp/asset/317a928e-d168-4b84-abc7-908e269f9dfc";
const img4 =
  "https://www.figma.com/api/mcp/asset/4f69ef75-11da-4bb4-a9c5-07b8b68737db";

type ArrowUpProps = {
  className?: string;
  style?: "Duotone";
  type?: "Rounded";
};

function ArrowUp({
  className,
  style = "Duotone",
  type = "Rounded",
}: ArrowUpProps) {
  return (
    <div
      className={className}
      data-name="Style=Duotone, Type=Rounded"
      data-node-id="614:537"
    >
      <div
        className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]"
        data-name="elements"
        data-node-id="614:547"
      >
        <div className="absolute inset-[-12.5%_-6.25%]">
          <img
            alt=""
            className="block max-w-none size-full"
            src={
              "https://images.unsplash.com/photo-1762368229295-81f2742fb8a5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default function CreateEvent() {
  const [selectedEventType, setSelectedEventType] = useState("Personal Task");
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [dueDate, setDueDate] = useState("2026-07-08");
  const [assignedStaff, setAssignedStaff] = useState("");

  return (
    <div
      className="bg-white overflow-clip relative rounded-[16px] p-5 max-w-3xl mx-auto"
      data-node-id="2375:15057"
    >
      <div
        className="flex justify-between items-center mb-4"
        data-node-id="2375:15084"
      >
        <h1 className="text-lg font-medium text-dark" data-node-id="2375:15085">
          Create Event
        </h1>
        <button
          className="overflow-clip relative shrink-0 size-[24px]"
          data-name="cancel-circle"
          data-node-id="2375:15086"
        >
          <div
            className="absolute inset-[8.33%]"
            data-name="elements"
            data-node-id="I2375:15086;1:126593"
          >
            <div className="absolute inset-[-3.75%]">
              <img
                alt="close"
                className="block max-w-none size-full"
                src={img3}
              />
            </div>
          </div>
        </button>
      </div>

      <div className="mb-4" data-node-id="2375:15078">
        <p className="text-xs text-dark mb-3" data-node-id="2375:15079">
          Which athlete would you like to message?
        </p>
        <div
          className="bg-[rgba(210,210,210,0.1)] p-4 rounded-2xl flex items-center gap-3 text-xs text-dark/70"
          data-node-id="2434:12492"
        >
          <img alt="info" className="size-[24px]" src={img2} />
          <div>
            <p>
              Events you create here are primarily for your own management. You
              can optionally assign them to a staff member.
            </p>
          </div>
        </div>
      </div>

      <h2
        className="text-base font-medium text-dark mb-4"
        data-node-id="2375:15059"
      >
        Select Event Type
      </h2>

      <div className="flex gap-4 mb-8">
        <EventTypeCard
          icon={img}
          title="Message Task"
          description="Reminder to message athlete"
          selected={selectedEventType === "Message Task"}
          onClick={() => setSelectedEventType("Message Task")}
        />
        <EventTypeCard
          icon={img1}
          title="Create Task"
          description="Reminder to message athlete"
          selected={selectedEventType === "Create Task"}
          onClick={() => setSelectedEventType("Create Task")}
        />
        <EventTypeCard
          icon={img1}
          title="Personal Task"
          description="Reminder to message athlete"
          selected={selectedEventType === "Personal Task"}
          onClick={() => setSelectedEventType("Personal Task")}
        />
      </div>

      <div className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-dark mb-3"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            className="w-full bg-[#f8faff] h-14 rounded-2xl px-5 text-sm placeholder:text-dark/70"
          />
        </div>

        <div>
          <label
            htmlFor="note"
            className="block text-sm font-medium text-dark mb-3"
          >
            Note
          </label>
          <textarea
            id="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Write your athletes details..."
            className="w-full bg-[#f8faff] h-24 rounded-2xl px-5 py-4 text-sm placeholder:text-dark/70"
          />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label
              htmlFor="due-date"
              className="block text-sm font-medium text-dark mb-3"
            >
              Due Date
            </label>
            <div className="relative">
              <input
                id="due-date"
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full bg-[#f8faff] h-14 rounded-2xl pl-12 pr-5 text-sm text-dark/70"
              />
              <img
                src={img4}
                alt="calendar"
                className="absolute left-4 top-1/2 -translate-y-1/2 size-5"
              />
            </div>
          </div>
          <div className="flex-1">
            <label
              htmlFor="assign-staff"
              className="block text-sm font-medium text-dark mb-3"
            >
              Assign task to staff
            </label>
            <div className="relative">
              <select
                id="assign-staff"
                value={assignedStaff}
                onChange={(e) => setAssignedStaff(e.target.value)}
                className="w-full bg-[#f8faff] h-14 rounded-2xl px-5 text-sm text-dark/70 appearance-none"
              >
                <option value="">User name staff</option>
                <option value="staff1">Staff 1</option>
                <option value="staff2">Staff 2</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <ArrowUp className="overflow-clip relative size-[24px] rotate-180" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-2 mt-8">
        <button
          className="bg-gradient-to-b from-[rgba(69,127,243,0.05)] to-[rgba(69,127,243,0.12)] border border-[rgba(69,127,243,0.1)] rounded-full px-4 py-3 text-sm font-medium text-transparent bg-clip-text"
          style={{
            backgroundImage: "linear-gradient(to bottom, #457FF3, #457FF3)",
          }}
        >
          Save Draft
        </button>
        <button className="bg-[#457FF3] text-white rounded-full px-4 py-3 text-sm font-medium">
          Create Event
        </button>
      </div>
    </div>
  );
}

type EventTypeCardProps = {
  icon: string;
  title: string;
  description: string;
  selected: boolean;
  onClick: () => void;
};

const EventTypeCard = ({
  icon,
  title,
  description,
  selected,
  onClick,
}: EventTypeCardProps) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer p-5 rounded-2xl flex-1 flex flex-col items-center gap-5 bg-[rgba(186,209,255,0.1)] ${
        selected ? "border-2 border-[#5c8ff7]" : ""
      }`}
    >
      <div className="bg-[rgba(255,255,255,0.3)] rounded-full size-12 flex items-center justify-center">
        <img src={icon} alt="" className="size-6" />
      </div>
      <div className="text-center">
        <p className="font-medium text-sm text-dark">{title}</p>
        <p className="text-xs text-dark/70">{description}</p>
      </div>
    </div>
  );
};
