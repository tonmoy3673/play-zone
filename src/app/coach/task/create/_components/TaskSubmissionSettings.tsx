"use client";
import Icon from "@/components/ui/Icon";
import Radio from "@/components/ui/Radio";
import Select from "@/components/ui/Select";
import Switch from "@/components/ui/Switch";
import QuizModal from "./QuizModal";
import React, { useRef, useState } from "react";

interface UploadedFile {
  id: number;
  name: string;
  size: string;
  type: string;
  file: File;
}
export default function TaskSubmissionSettings() {
  const [enableLocation, setEnableLocation] = useState(false);
  const [selectedReviewer, setSelectedReviewer] = useState<string | null>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [allowComments, setAllowComments] = useState(false);
  const [coachReviewRequired, setCoachReviewRequired] = useState<
    string | undefined
  >(undefined);
  const [submissionDeadline, setSubmissionDeadline] = useState<
    string | undefined
  >(undefined);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return (bytes / Math.pow(k, i)).toFixed(2) + " " + sizes[i];
  };

  const getFileType = (file: File): string => {
    if (file.type.startsWith("video/")) return "Video";
    if (file.type.startsWith("image/")) return "Image";
    if (file.type === "application/pdf") return "PDF";
    if (file.type.includes("document") || file.type.includes("word"))
      return "Document";
    return "File";
  };

  const handleFileUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const newFiles: UploadedFile[] = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileSize = formatFileSize(file.size);
      const fileType = getFileType(file);

      newFiles.push({
        id: Date.now() + i,
        name: file.name,
        size: fileSize,
        type: fileType,
        file: file,
      });
    }

    setUploadedFiles([...uploadedFiles, ...newFiles]);
  };
  const handleVideoUpload = () => {
    videoInputRef.current?.click();
  };

  const handleFileUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleVideoInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFileUpload(e.target.files);
    // Reset input to allow selecting the same file again
    if (videoInputRef.current) {
      videoInputRef.current.value = "";
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFileUpload(e.target.files);
    // Reset input to allow selecting the same file again
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Submission Settings</h1>
        <span className="text-sm text-gray-500">
          Define what athletes submit and review process
        </span>
      </div>
      <div className="flex gap-4">
        <div className="w-3/5 flex flex-col gap-4">
          <div className="bg-[#FFFFFF4D] rounded-[30px] p-8 shadow-sm">
            <div className="mb-3 border-gray-200 flex items-center justify-between">
              <h2 className="text-base text-dark mb-3">Location</h2>
              <Switch
                value={enableLocation}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEnableLocation(e.target.checked)
                }
              />
            </div>

            {/* Hidden File Inputs */}
            <input
              type="file"
              ref={videoInputRef}
              onChange={handleVideoInputChange}
              accept="video/*"
              multiple
              className="hidden"
            />
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileInputChange}
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif,image/*"
              multiple
              className="hidden"
            />

            {/* Upload Options */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {/* Upload Video */}
              <button
                onClick={handleVideoUpload}
                className="px-7 py-4 w-[230px] h-[135px] border-2 border-dashed border-[#276AEE] rounded-2xl hover:border-blue-500 transition flex flex-col items-center gap-3 bg-white cursor-pointer"
              >
                <Icon name="video-icon" />
                <div className="text-center">
                  <p className="font-medium text-black">Upload Video</p>
                  <p className="text-sm text-nowrap text-[#141b3499]">
                    Athletes submit video proof
                  </p>
                </div>
              </button>

              {/* Upload Photo */}
              <button
                onClick={handleFileUploadClick}
                className="px-7 py-4 w-[230px] h-[135px] border-2 border-dashed border-[#276AEE] rounded-2xl hover:border-blue-500 transition flex flex-col items-center gap-3 bg-white cursor-pointer"
              >
                <Icon name="file-icon" />
                <div className="text-center">
                  <p className="font-medium text-black">Photo Upload</p>
                  <p className="text-sm text-[#141b3499]">
                    Athletes submit photo proof
                  </p>
                </div>
              </button>

              {/* {upload quiz } */}
              <button
                onClick={() => setIsQuizModalOpen(true)}
                className="px-7 py-4 w-[230px] h-[135px] border-2 border-dashed border-[#276AEE] rounded-2xl hover:border-blue-500 transition flex flex-col items-center gap-3 bg-white cursor-pointer"
              >
                <Icon name="quiz-question-icon" />
                <div className="text-center">
                  <p className="font-medium text-black">Quiz/Questionnaire</p>
                  <p className="text-sm text-[#141b3499]">
                    Athletes answer questions
                  </p>
                </div>
              </button>

              {/* {upload text entry } */}
              <button
                // onClick={handleFileUploadClick}
                className="px-7 py-4 w-[230px] h-[135px] border-2 border-dashed border-[#276AEE] rounded-2xl hover:border-blue-500 transition flex flex-col items-center gap-3 bg-white cursor-pointer"
              >
                <Icon name="text-entry-icon" />
                <div className="text-center">
                  <p className="font-medium text-black">Text Entry</p>
                  <p className="text-sm text-[#141b3499]">
                    Athletes submit written response
                  </p>
                </div>
              </button>
            </div>
          </div>
          <div className="bg-[#FFFFFF4D] rounded-[30px] p-8 shadow-sm">
            <h2 className="text-base text-dark mb-3">Submission Guidelines</h2>
            <div className="flex items-center justify-between">
              <textarea
                rows={4}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                placeholder="Optional: Add specific guidelines for submissions (e.g., video length, photo angles, etc.)"
              />
            </div>
          </div>
        </div>
        <div className="w-2/5 flex flex-col gap-4">
          <div className="bg-[#FFFFFF4D] rounded-[30px] p-8 shadow-sm">
            <h2 className="text-base font-medium text-dark mb-3">
              Coach Review Required?
            </h2>
            <div className="flex flex-col gap-3">
              <Radio
                label="Await Review Before Completion"
                name="coach_review_required"
                value="await_review_before_completion"
                checked={
                  coachReviewRequired === "await_review_before_completion"
                }
                onToggle={setCoachReviewRequired}
              />
              <Radio
                label="Auto-mark as complete on submission"
                name="coach_review_required"
                value="auto_mark_as_complete_on_submission"
                checked={
                  coachReviewRequired === "auto_mark_as_complete_on_submission"
                }
                onToggle={setCoachReviewRequired}
              />
            </div>
            <div className="mt-4">
              <Select
                options={[
                  { label: "Coach", value: "coach" },
                  { label: "Admin", value: "admin" },
                ]}
                placeholder="Select reviewer"
                value={selectedReviewer || ""}
                onChange={(value) => setSelectedReviewer(value)}
                label="Assign Staff to Review"
                labelClassName="!text-base !font-medium !text-dark"
              />
            </div>
          </div>
          <div className="bg-[#FFFFFF4D] rounded-[30px] p-8 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-medium text-dark">
                {" "}
                Allow Comments?
              </h2>
              <Switch
                value={allowComments}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setAllowComments(e.target.checked)
                }
              />
            </div>
            <span className="text-sm text-dark mt-2.5">
              Auto-mark as complete on submission
            </span>
          </div>

          <div className="bg-[#FFFFFF4D] rounded-[30px] p-8 shadow-sm">
            <h2 className="text-base font-medium text-dark mb-3">
              {" "}
              Submission Deadline
            </h2>
            <div className="flex flex-col gap-3">
              <Radio
                label="Allow late submissions"
                name="allow_late_submissions"
                value="allow_late_submissions"
                checked={submissionDeadline === "allow_late_submissions"}
                onToggle={setSubmissionDeadline}
              />
              <Radio
                label="Block submissions after due date"
                name="block_submissions_after_due_date"
                value="block_submissions_after_due_date"
                checked={
                  submissionDeadline === "block_submissions_after_due_date"
                }
                onToggle={setSubmissionDeadline}
              />
              <Radio
                label="Reduce points for late submissions"
                name="reduce_points_for_late_submissions"
                value="reduce_points_for_late_submissions"
                checked={
                  submissionDeadline === "reduce_points_for_late_submissions"
                }
                onToggle={setSubmissionDeadline}
              />
            </div>
          </div>
        </div>
      </div>
      <QuizModal
        isOpen={isQuizModalOpen}
        onClose={() => setIsQuizModalOpen(false)}
        onSave={(data) => {
          console.log("Quiz data saved:", data);
          // Handle quiz data saving here
        }}
      />
    </div>
  );
}
