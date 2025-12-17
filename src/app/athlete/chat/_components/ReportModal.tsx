"use client";

import Button from "@/components/ui/Button";
import Icon from "@/utils/icon";
import { useState } from "react";

interface ReportModalProps {
  setIsOpen: (isOpen: boolean) => void;
}

const ReportModal: React.FC<ReportModalProps> = ({ setIsOpen }) => {
  const [selectedReason, setSelectedReason] = useState<string>("Spam");
  const [reportNote, setReportNote] = useState<string>("");

  const reportReasons = [
    "Spam",
    "Harassment", 
    "Inappropriate Content",
    "Misinformation",
    "Other"
  ];

  const handleSubmitReport = () => {
    console.log("Report submitted:", { reason: selectedReason, note: reportNote });
    // Handle report submission logic here
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50">
      <div className="w-full bg-white rounded-[20px] overflow-hidden max-w-[480px] relative mx-4">
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors z-10"
          aria-label="Close modal"
        >
          <Icon name="close" height={20} width={20} />
        </button>

		  

        <div className="p-6">
          {/* User Avatar */}
          <div className="flex justify-center mt-4 mb-4">
            <img
              src="/avatar1.svg"
              alt="User Avatar"
              className="w-16 h-16 rounded-full"
            />
          </div>

          {/* Heading */}
          <h2 className="text-[18px] font-normal text-center text-[#141B34] mb-2">
            Report Message
          </h2>

          {/* Description */}
          <p className="text-center text-[#141b34b3] text-sm mb-6">
            Select a reason to report this message.
            <br />
            Our moderation team will review the conversation.
          </p>

          {/* Report Reasons */}
          <div className="space-y-4 mb-6">
            {reportReasons.map((reason) => (
              <label
                key={reason}
                className="flex items-center cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedReason === reason}
                  onChange={() => setSelectedReason(reason)}
                  className="w-5 h-5 text-blue-500 rounded border-2 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-3 text-[#141B34] font-normal text-sm">
                  {reason}
                </span>
              </label>
            ))}
          </div>

          {/* Report Note */}
          <div className="mb-6">
            <label className="block text-[#141B34] font-medium text-sm mb-2">
              Report Note
            </label>
            <textarea
              value={reportNote}
              onChange={(e) => setReportNote(e.target.value)}
              placeholder="Add a comment (Optional)"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              rows={3}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => setIsOpen(false)}
              className="flex-1 py-3 px-4 border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <Button
              onClick={handleSubmitReport}
              style={{
                background:
                  "var(--Gradient, linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%))",
              }}
              className="flex-1 py-3 px-4 rounded-full text-white font-medium transition-colors"
            >
              Submit Report
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;