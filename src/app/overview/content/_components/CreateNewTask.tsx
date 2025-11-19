"use client";
import { useState, ChangeEvent } from "react";

const imgImage341 =
  "https://www.figma.com/api/mcp/asset/871213a3-91a2-428d-ba8b-dfa87aac8507";
const imgEllipse7627 =
  "https://www.figma.com/api/mcp/asset/9e225971-0384-4258-83a6-04574be498ee";
const imgEllipse7628 =
  "https://www.figma.com/api/mcp/asset/182b046d-768a-4381-b81b-e32b78ec8b02";
const imgEllipse7624 =
  "https://www.figma.com/api/mcp/asset/93211ae6-8670-40d5-a211-87881318132c";
const imgEllipse7623 =
  "https://www.figma.com/api/mcp/asset/1c8fe5fc-f123-40c1-a281-b4ac0622c21a";
const img =
  "https://www.figma.com/api/mcp/asset/0453e07b-e3f6-4637-853c-96c9d70bb95b";
const img1 =
  "https://www.figma.com/api/mcp/asset/14de187d-aabf-4f83-a63a-9529241e393d";
const img2 =
  "https://www.figma.com/api/mcp/asset/83e47cd5-feb0-42f2-b4e0-f808238a8745";
const img3 =
  "https://www.figma.com/api/mcp/asset/3fa1866d-9fe2-4fd3-ba33-34d549f46226";
const imgProperty1On =
  "https://www.figma.com/api/mcp/asset/9f050e14-c4a0-4338-b964-0247ce9c6a8e";
const imgVector =
  "https://www.figma.com/api/mcp/asset/a96d8843-76f8-4ca3-9db5-c0d24f7bbbcc";
const imgProperty1Off =
  "https://www.figma.com/api/mcp/asset/c930ad62-0212-4dd2-ad95-017f658bb2d2";

type GroupProps = {
  className?: string;
  property1?: boolean;
};

function Group({ className, property1 = false }: GroupProps) {
  if (property1) {
    return (
      <div
        className={className}
        data-name="Property 1=On"
        data-node-id="3032:19552"
      >
        <div className="absolute inset-[-4.17%]">
          <img
            alt=""
            className="block max-w-none size-full"
            src={imgProperty1On}
          />
        </div>
        <div
          className="absolute inset-[27.78%]"
          data-name="Vector"
          data-node-id="3032:19554"
        >
          <div className="absolute inset-[-9.38%]">
            <img
              alt=""
              className="block max-w-none size-full"
              src={imgVector}
            />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      className={className}
      data-name="Property 1=Off"
      data-node-id="3032:19547"
    >
      <img
        alt=""
        className="block max-w-none size-full"
        src={imgProperty1Off}
      />
    </div>
  );
}

interface FormData {
  taskTitle: string;
  taskType: string;
  assignTo: string;
  date: string;
  time: string;
  taskDetails: string;
  attachments: File[];
  requiresCoachReview: boolean;
  allowLateSubmissions: boolean;
  autoComplete: boolean;
}

const CreateNewTask = () => {
  const [formData, setFormData] = useState<FormData>({
    taskTitle: "",
    taskType: "Video Submission",
    assignTo: "",
    date: "2025-09-16",
    time: "11:00",
    taskDetails: "",
    attachments: [],
    requiresCoachReview: true,
    allowLateSubmissions: false,
    autoComplete: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    const name = target.name;
    const value =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : target.value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFormData((prevData) => ({
        ...prevData,
        attachments: [...prevData.attachments, ...newFiles],
      }));
    }
  };

  return (
    <div className="bg-white overflow-hidden relative rounded-lg shadow-lg w-full max-w-3xl font-sans">
      <div className="absolute -bottom-1/2 -right-1/3">
        <div className="blur-md filter h-[540px] w-[663px] opacity-30">
          <img alt="" className="h-full w-full" src={imgImage341} />
        </div>
      </div>

      <div className="border-b p-5 flex justify-between items-center">
        <p className="font-medium text-lg">Create New Task</p>
        <div className="cursor-pointer">
          <img alt="close" className="h-6 w-6" src={img} />
        </div>
      </div>

      <div className="p-5 space-y-4">
        <div>
          <p className="font-medium text-sm mb-2">Task Title</p>
          <div className="bg-gray-100 rounded-lg p-4">
            <input
              type="text"
              name="taskTitle"
              value={formData.taskTitle}
              onChange={handleChange}
              placeholder="Enter task title"
              className="bg-transparent w-full text-sm outline-none"
            />
          </div>
        </div>

        <div>
          <p className="font-medium text-sm mb-2">Task Type / Category</p>
          <div className="bg-gray-100 rounded-lg p-4 flex justify-between items-center">
            <select
              name="taskType"
              value={formData.taskType}
              onChange={handleChange}
              className="bg-transparent w-full text-sm font-medium outline-none appearance-none"
            >
              <option>Video Submission</option>
              <option>Drill</option>
              <option>Workout</option>
            </select>
            <img
              alt="arrow"
              className="h-6 w-6 transform rotate-90"
              src={img1}
            />
          </div>
        </div>

        <div>
          <p className="font-medium text-sm mb-2">Assign To</p>
          <div className="bg-gray-100 rounded-lg p-4 flex items-center space-x-2">
            <img alt="search" className="h-6 w-6" src={img2} />
            <input
              type="text"
              name="assignTo"
              value={formData.assignTo}
              onChange={handleChange}
              placeholder="Search athletes or Select"
              className="bg-transparent w-full text-sm font-medium outline-none"
            />
          </div>
          <div className="flex items-center mt-2 -space-x-2">
            <img
              alt="avatar"
              className="h-8 w-8 rounded-full border-2 border-white"
              src={imgEllipse7627}
            />
            <img
              alt="avatar"
              className="h-8 w-8 rounded-full border-2 border-white"
              src={imgEllipse7628}
            />
            <img
              alt="avatar"
              className="h-8 w-8 rounded-full border-2 border-white"
              src={imgEllipse7624}
            />
            <img
              alt="avatar"
              className="h-8 w-8 rounded-full border-2 border-white"
              src={imgEllipse7623}
            />
            <div className="h-8 w-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center">
              <p className="text-xs font-medium text-blue-600">+11</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-medium text-sm mb-2">Date</p>
            <div className="bg-gray-100 rounded-lg p-4">
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="bg-transparent w-full text-sm font-medium outline-none"
              />
            </div>
          </div>
          <div>
            <p className="font-medium text-sm mb-2">Time</p>
            <div className="bg-gray-100 rounded-lg p-4">
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="bg-transparent w-full text-sm font-medium outline-none"
              />
            </div>
          </div>
        </div>

        <div>
          <p className="font-medium text-sm mb-2">Task Details</p>
          <div className="bg-gray-100 rounded-lg p-4 h-28">
            <textarea
              name="taskDetails"
              value={formData.taskDetails}
              onChange={handleChange}
              placeholder="Write Clear instructions for the athletes..."
              className="bg-transparent w-full h-full text-sm text-gray-500 outline-none resize-none"
            />
          </div>
        </div>

        <div>
          <p className="font-medium text-sm mb-2">Attachments</p>
          <div className="bg-gray-100 border-dashed border-2 border-blue-400 rounded-lg p-4 text-center">
            <div className="flex flex-col items-center justify-center">
              <div className="bg-white rounded-full h-12 w-12 flex items-center justify-center mb-2">
                <img alt="upload" className="h-6 w-6" src={img3} />
              </div>
              <p className="text-xs font-medium">drag & drop files here</p>
              <p className="text-xs text-gray-500">MP3, MP4, Up to 50 MB.</p>
              <p className="text-sm text-gray-500 my-1">or</p>
              <input
                type="file"
                multiple
                className="hidden"
                id="file-upload"
                onChange={handleFileChange}
              />
              <label
                htmlFor="file-upload"
                className="text-xs font-medium text-blue-600 cursor-pointer"
              >
                Browse Files
              </label>
            </div>
          </div>
        </div>

        <div>
          <p className="font-medium text-sm mb-2">Completion Criteria</p>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="requiresCoachReview"
                checked={formData.requiresCoachReview}
                onChange={handleChange}
                className="hidden"
                id="coach-review"
              />
              <label htmlFor="coach-review" className="cursor-pointer">
                <Group
                  property1={formData.requiresCoachReview}
                  className="relative h-5 w-5"
                />
              </label>
              <p className="text-sm">Requires Coach Review</p>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="allowLateSubmissions"
                checked={formData.allowLateSubmissions}
                onChange={handleChange}
                className="hidden"
                id="late-submissions"
              />
              <label htmlFor="late-submissions" className="cursor-pointer">
                <Group
                  property1={formData.allowLateSubmissions}
                  className="relative h-5 w-5"
                />
              </label>
              <p className="text-sm text-gray-500">Allow late Submissions</p>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="autoComplete"
                checked={formData.autoComplete}
                onChange={handleChange}
                className="hidden"
                id="auto-complete"
              />
              <label htmlFor="auto-complete" className="cursor-pointer">
                <Group
                  property1={formData.autoComplete}
                  className="relative h-5 w-5"
                />
              </label>
              <p className="text-sm text-gray-500">
                Auto-Complete After Due Date
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t p-5 flex justify-between items-center">
        <button className="bg-gradient-to-b from-blue-50 to-blue-100 border border-blue-200 rounded-full px-4 py-2 text-sm font-medium text-blue-600">
          Cancel
        </button>
        <button className="bg-blue-600 text-white rounded-full px-4 py-2 text-sm font-medium">
          Save Task
        </button>
      </div>
    </div>
  );
};

export default CreateNewTask;
