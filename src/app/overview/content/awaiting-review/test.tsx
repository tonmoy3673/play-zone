// Assets from the provided Figma node (will expire after ~7 days)
const coverImage =
  "https://www.figma.com/api/mcp/asset/6471dbb9-de16-4331-b27b-e27eaf01d549"; // image 403
const avatarImage =
  "https://www.figma.com/api/mcp/asset/f35c772d-1761-4c5b-bff9-a469b5cb4adf"; // image 400

// Example collection array (replace with real data)
const submissions = [
  {
    id: "1",
    title: "Passing Drill Submission",
    athleteName: "Jason Martinez",
    athleteRole: "Quarterback • Senior",
    submittedAt: "Today, 10:45 AM",
    dueDate: "June 7, 2023",
    task: "Passing Drill Submission",
    notes:
      "I focused on my follow-through and keeping my elbow high during the throw. Included slow‑motion clips at 0:45 and 1:32 to highlight my mechanics.",
    cover: coverImage,
    avatar: avatarImage,
  },
  {
    id: "2",
    title: "Conditioning Log",
    athleteName: "Jamie Reynolds",
    athleteRole: "Wide Receiver • Junior",
    submittedAt: "Yesterday, 4:20 PM",
    dueDate: "June 10, 2023",
    task: "Conditioning Log",
    notes:
      "Worked on agility ladder and shuttle runs. Highlight clips at 0:22 and 1:05.",
    cover: coverImage,
    avatar: avatarImage,
  },
  {
    id: "3",
    title: "Route Running Technique",
    athleteName: "Chris Walker",
    athleteRole: "Quarterback • Sophomore",
    submittedAt: "Mon, 9:05 AM",
    dueDate: "June 12, 2023",
    task: "Video Demonstration",
    notes:
      "Focused on sharp breaks and acceleration out of cuts. Two camera angles included.",
    cover: coverImage,
    avatar: avatarImage,
  },
];

function PlayOverlay() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-12 h-12 rounded-full bg-white/90 shadow-md flex items-center justify-center">
        <div className="ml-0.5 w-0 h-0 border-y-[8px] border-y-transparent border-l-[12px] border-l-[#2a6be8]" />
      </div>
    </div>
  );
}

function SubmissionCard({
  cover,
  avatar,
  title,
  athleteName,
  athleteRole,
  submittedAt,
  dueDate,
  task,
  notes,
}) {
  return (
    <div className="bg-white/60 rounded-2xl p-4 shadow-[0_12px_40px_rgba(17,41,88,0.08)]">
      <div className="relative rounded-xl overflow-hidden">
        <img src={cover} alt={title} className="w-full h-40 object-cover" />
        <PlayOverlay />
      </div>

      <div className="mt-4">
        <h3 className="text-[#141B34] text-base font-medium">{title}</h3>
      </div>

      <div className="mt-3 flex items-center gap-3">
        <img src={avatar} alt={athleteName} className="w-9 h-9 rounded-full" />
        <div className="flex flex-col">
          <span className="text-[#141B34] text-sm font-medium">
            {athleteName}
          </span>
          <span className="text-[12px] text-[#141b34b3]">{athleteRole}</span>
        </div>
      </div>

      <div className="mt-4 h-px bg-[#141b34]/10" />

      <div className="mt-3 grid grid-cols-2 gap-y-2">
        <div className="text-[12px] text-[#141b34b3]">Task:</div>
        <div className="text-[12px] text-[#141B34] text-right">{task}</div>
        <div className="text-[12px] text-[#141b34b3]">Submitted:</div>
        <div className="text-[12px] text-[#141B34] text-right">
          {submittedAt}
        </div>
        <div className="text-[12px] text-[#141b34b3]">Due Date:</div>
        <div className="text-[12px] text-[#141B34] text-right">{dueDate}</div>
      </div>

      <div className="mt-4">
        <div className="text-[#141B34] text-sm font-medium">Athlete Notes:</div>
        <p className="mt-1 text-[12px] text-[#141b34b3] leading-relaxed">
          {notes}
        </p>
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

export default function page() {
  return (
    <div className="min-h-screen bg-[#e7f2f5] p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h2 className="text-[#141b34] text-xl font-semibold">
            Passing Drill Review Submission
          </h2>
          <p className="text-[12px] text-[#141b34b3]">
            Review athlete submissions and provide feedback on their progress.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {submissions.map((item) => (
            <SubmissionCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
