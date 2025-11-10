import { AnimatedButton } from "@/components/ui/Button";
import { Plus } from "lucide-react";
import Library from "../_components/Library";
import Performers from "../_components/Performers";
import Reviews from "../_components/Reviews";
import Tasks from "../_components/Tasks";

export default function page() {
  return (
    <div>
      <div className="flex justify-between items-center my-5 px-5">
        <div>
          <p className="text-3xl font-semibold">Submissions Awaiting Review</p>
          <p className="text-sm text-black/70 mt-2">
            Review athlete submissions and provide feedback on their progress.
          </p>
        </div>

        <AnimatedButton
          style={{
            borderRadius: "40px",
            background:
              "linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%)",
          }}
          className="flex items-center justify-center gap-2 text-white font-normal px-5 py-4 rounded-full hover:bg-blue-700 "
        >
          <span>
            <Plus />
          </span>
          Create New Task
        </AnimatedButton>
      </div>
      <SubmissionReviewGrid />
      <Tasks />
      <Performers />
      <Reviews />
      <Library />
    </div>
  );
}

// Assets (thumbnails, avatar, icons)
const imgAvatar =
  "https://www.figma.com/api/mcp/asset/6495ed8d-8eb5-492e-909b-92d78fe1d2d2";
const imgThumb1 =
  "https://www.figma.com/api/mcp/asset/713d2cb8-6a3d-4c7a-a3a4-9d2a2a2f9cc7";
const imgThumb2 =
  "https://www.figma.com/api/mcp/asset/2a7d7a9a-5f5e-4b5f-9d40-6d8cc2f6b2c1";
const imgThumb3 =
  "https://www.figma.com/api/mcp/asset/1b972a50-16d1-4d8a-ae18-3f74c2d6f0d0";
const imgThumb4 =
  "https://www.figma.com/api/mcp/asset/0c6fa0f8-0c7b-4571-8d1f-1c4a9b55f7f5";
const imgThumb5 =
  "https://www.figma.com/api/mcp/asset/1c4f9b7c-a02c-4fe6-bd4e-3ab2ed0dbe90";
const imgThumb6 =
  "https://www.figma.com/api/mcp/asset/7f6c3e7e-8c34-4a1e-8d1e-2f95918a6d2c";

// Collection array
const submissions = [
  {
    id: "a",
    thumb: imgThumb1,
    duration: "02:34",
    authorName: "Jason Martinez",
    authorRole: "Quarterback • Senior",
    tag: { label: "High Priority", variant: "danger" },
    title: "Passing Drill Submission",
    submitted: "Today, 10:45 AM",
    taskType: "Video Demonstration",
    notes: "Included slow–motion clips",
  },
  {
    id: "b",
    thumb: imgThumb2,
    duration: "02:34",
    authorName: "Jason Martinez",
    authorRole: "Quarterback • Senior",
    tag: { label: "Elite Program", variant: "purple" },
    title: "Route Running Technique",
    submitted: "Today, 10:45 AM",
    taskType: "Video Demonstration",
    notes: "Included slow–motion clips",
  },
  {
    id: "c",
    thumb: imgThumb3,
    duration: "02:34",
    authorName: "Jason Martinez",
    authorRole: "Quarterback • Senior",
    tag: { label: "New Athlete", variant: "info" },
    title: "Tactical Analysis Quiz",
    submitted: "Today, 10:45 AM",
    taskType: "Video Demonstration",
    notes: "Included slow–motion clips",
  },
  {
    id: "d",
    thumb: imgThumb4,
    duration: "02:34",
    authorName: "Jason Martinez",
    authorRole: "Quarterback • Senior",
    tag: { label: "New Athlete", variant: "info" },
    title: "Conditioning Log",
    submitted: "Today, 10:45 AM",
    taskType: "Video Demonstration",
    notes: "Included slow–motion clips",
  },
  {
    id: "e",
    thumb: imgThumb5,
    duration: "02:34",
    authorName: "Jason Martinez",
    authorRole: "Quarterback • Senior",
    tag: { label: "Elite Program", variant: "purple" },
    title: "Footwork Training Video",
    submitted: "Today, 10:45 AM",
    taskType: "Video Demonstration",
    notes: "Included slow–motion clips",
  },
  {
    id: "f",
    thumb: imgThumb6,
    duration: "02:34",
    authorName: "Jason Martinez",
    authorRole: "Quarterback • Senior",
    tag: { label: "Regular Program", variant: "success" },
    title: "Play Analysis Worksheet",
    submitted: "Today, 10:45 AM",
    taskType: "Video Demonstration",
    notes: "Included slow–motion clips",
  },
];

function Chip({ label, variant }) {
  const variants = {
    danger: "bg-[#ff65651a] text-[#ff0033] border border-[rgba(255,0,51,0.15)]",
    purple:
      "bg-[rgba(140,100,255,0.12)] text-[#6b4eff] border border-[rgba(140,100,255,0.2)]",
    info: "bg-[rgba(69,127,243,0.15)] text-[#2a6be8] border border-[rgba(21,86,216,0.15)]",
    success:
      "bg-[rgba(0,226,128,0.1)] text-[#027a48] border border-[rgba(0,226,128,0.2)]",
  };
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${variants[variant]}`}
    >
      {label}
    </span>
  );
}

function PlayOverlay({ duration }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-12 h-12 rounded-full bg-white/90 shadow-md flex items-center justify-center">
        <div className="ml-0.5 w-0 h-0 border-y-[8px] border-y-transparent border-l-[12px] border-l-[#2a6be8]" />
      </div>
      <span className="absolute right-3 bottom-3 text-[10px] font-semibold text-white bg-black/40 rounded-md px-2 py-0.5">
        {duration}
      </span>
    </div>
  );
}

function SubmissionCard({
  thumb,
  duration,
  authorName,
  authorRole,
  tag,
  title,
  submitted,
  taskType,
  notes,
}) {
  return (
    <div className="bg-white/60 rounded-2xl p-4 shadow-[0_12px_40px_rgba(17,41,88,0.08)]">
      <div className="relative rounded-xl overflow-hidden">
        <img src={thumb} alt={title} className="w-full h-40 object-cover" />
        <PlayOverlay duration={duration} />
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-3">
          <img
            src={imgAvatar}
            alt={authorName}
            className="w-8 h-8 rounded-full"
          />
          <div className="flex flex-col">
            <span className="text-[#141B34] text-sm font-medium">
              {authorName}
            </span>
            <span className="text-[12px] text-[#141b34b3]">{authorRole}</span>
          </div>
        </div>
        <Chip label={tag.label} variant={tag.variant} />
      </div>

      <div className="mt-4">
        <h3 className="text-[#141B34] text-base font-medium">{title}</h3>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-y-2">
        <div className="text-[12px] text-[#141b34b3]">Submitted:</div>
        <div className="text-[12px] text-[#141B34] text-right">{submitted}</div>
        <div className="text-[12px] text-[#141b34b3]">Task Type:</div>
        <div className="text-[12px] text-[#141B34] text-right">{taskType}</div>
        <div className="text-[12px] text-[#141b34b3]">Notes:</div>
        <div className="text-[12px] text-[#141B34] text-right">{notes}</div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <button className="px-4 py-2 rounded-full bg-[#e8f0fe] text-[#2a6be8] border border-[#1556d81a] text-sm font-medium">
          Quick View
        </button>
        <button className="px-5 py-2 rounded-full bg-gradient-to-r from-[#4d8ffb] to-[#2a6be8] text-white text-sm font-medium shadow-[0_10px_30px_rgba(46,107,232,0.35)]">
          Review Now
        </button>
      </div>
    </div>
  );
}

function SubmissionReviewGrid() {
  return (
    <div className="min-h-screen bg-[#e9f3ff] p-6">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {submissions.map((item) => (
          <SubmissionCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
