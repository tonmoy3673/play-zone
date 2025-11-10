// Demo assets (subset for short-term hotlink demo)
const imgImage341 =
  "https://www.figma.com/api/mcp/asset/b4835eea-1364-4917-bae5-9311f7b40071";
const imgImage400 =
  "https://www.figma.com/api/mcp/asset/be6a7804-69a3-4327-bfe3-cbe7006b07c0";
const imgImage403 =
  "https://www.figma.com/api/mcp/asset/f375201c-4fd1-4cfd-803c-176121b5eec3";
const imgVector6894 =
  "https://www.figma.com/api/mcp/asset/94fb904c-a798-46be-932a-1fdf5bc24764";
const imgStarFilled =
  "https://www.figma.com/api/mcp/asset/4634fabe-6f7d-4575-92ae-c37fb10a2e13";
const imgStarEmpty =
  "https://www.figma.com/api/mcp/asset/3af73121-b30f-4d3f-a1cd-fcb26e1d3a39";
const imgBadge1 =
  "https://www.figma.com/api/mcp/asset/16d32c65-aa56-47c1-b697-d3887c523187";
const imgBadge2 =
  "https://www.figma.com/api/mcp/asset/95425ba8-e5df-4e65-be72-5ded3f675bfc";
const imgBadge3 =
  "https://www.figma.com/api/mcp/asset/694c4746-739d-4525-a7b6-6d8977e4a40a";
const imgBadge4 =
  "https://www.figma.com/api/mcp/asset/da419d61-33b7-4eeb-87c3-f06ad150cc40";
const imgFeedbackType1 =
  "https://www.figma.com/api/mcp/asset/69a27661-00ef-44b6-947b-f900dca435c6";
const imgFeedbackType2 =
  "https://www.figma.com/api/mcp/asset/71b38c3e-3bc4-438d-ba59-59a86c12c359";
const imgFeedbackType3 =
  "https://www.figma.com/api/mcp/asset/6b425ded-a6fb-4a73-a24c-3d2894488414";
const imgAssign =
  "https://www.figma.com/api/mcp/asset/2e4c66ee-0c08-43f7-9e30-0cd162665e42";
const imgSchedule =
  "https://www.figma.com/api/mcp/asset/161a813e-cee5-47df-ba23-669f26d12eca";

// Demo collection
const feedbackSubmissions = [
  {
    id: 1,
    athleteName: "Jason Martinez",
    athleteRole: "Quarterback • Senior",
    thumb: imgImage400,
    featureImg: imgImage403,
    task: "Passing Drill Submission",
    submitted: "Today, 10:45 AM",
    dueDate: "June 7, 2023",
    notes:
      "I focused on my follow-through and keeping my elbow high during the throw. Included slow-motion clips at 0:45 and 1:32 to highlight my mechanics.",
    conditioningTitle: "Conditioning Log",
    rating: 4,
    feedbackText: "Provide detailed feedback on the athlete's performance...",
    feedbackType: "Physical",
    badges: [
      {
        label: "Top Effort",
        icon: imgBadge1,
        color:
          "text-[#027a48] border-[rgba(0,226,128,0.1)] bg-gradient-to-b from-[rgba(0,226,128,0.05)] to-[rgba(0,124,70,0.12)]",
      },
      { label: "Perfect Form", icon: imgBadge2, color: "" },
      {
        label: "Improved",
        icon: imgBadge3,
        color:
          "text-[#784ef8] border-[rgba(120,78,248,0.1)] bg-gradient-to-b from-[rgba(120,78,248,0.05)] to-[rgba(120,78,248,0.12)]",
      },
      {
        label: "Creative",
        icon: imgBadge4,
        color:
          "text-[#ff0033] border-[rgba(255,0,51,0.1)] bg-gradient-to-b from-[rgba(255,0,51,0.05)] to-[rgba(255,0,51,0.12)]",
      },
    ],
  },
  // You can add more objects here for multiple cards demo
];

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <img
          key={i}
          src={i <= rating ? imgStarFilled : imgStarEmpty}
          alt={i <= rating ? "Star filled" : "Star empty"}
          className="w-4 h-4"
        />
      ))}
    </div>
  );
}

function FeedbackSubmissionCard({
  athleteName,
  athleteRole,
  thumb,
  featureImg,
  task,
  submitted,
  dueDate,
  notes,
  conditioningTitle,
  rating,
  feedbackText,
  feedbackType,
  badges,
}) {
  return (
    <div className="w-full flex bg-white/60 rounded-2xl shadow-[0_12px_40px_rgba(17,41,88,0.08)] overflow-hidden mb-8">
      {/* Submission Details */}
      <div className="w-[50%] bg-white/60 px-8 py-8 flex flex-col relative min-w-[300px] border-r border-[#e7f2f5]">
        <div className="rounded-xl overflow-hidden aspect-video mb-6 relative bg-[rgba(39,106,238,0.06)]">
          <img
            src={featureImg}
            alt="Submission video"
            className="object-cover w-full h-full"
          />
          <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 rounded-full shadow p-3 flex items-center justify-center">
            <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
              <circle cx="10" cy="10" r="10" fill="#276AEE" />
              <polygon points="8,7 14,10 8,13" fill="#fff" />
            </svg>
          </button>
        </div>
        <div className="mb-5">
          <div className="text-[#141B34] text-lg font-medium mb-1">
            Submission Details
          </div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src={thumb}
              alt={athleteName}
              className="w-9 h-9 rounded-full object-cover mr-2"
            />
            <div>
              <div className="font-medium text-[#141B34] text-base">
                {athleteName}
              </div>
              <div className="text-xs text-[#141b34b3]">{athleteRole}</div>
            </div>
          </div>
          <div className="text-[13px] text-[#141B34] font-medium mb-1">
            {conditioningTitle}
          </div>
          <div className="grid grid-cols-2 gap-y-2 mb-4 text-[12px]">
            <div className="text-[#141b34b3]">Task:</div>
            <div className="text-[#141B34] text-right">{task}</div>
            <div className="text-[#141b34b3]">Submitted:</div>
            <div className="text-[#141B34] text-right">{submitted}</div>
            <div className="text-[#141b34b3]">Due Date:</div>
            <div className="text-[#141B34] text-right">{dueDate}</div>
          </div>
          <div>
            <div className="text-[#141B34] font-medium mb-1">
              Athlete Notes:
            </div>
            <div className="text-xs text-[#141b34b3]">{notes}</div>
          </div>
        </div>
      </div>
      {/* Feedback/Review Panel */}
      <div className="w-[50%] px-8 py-8 flex flex-col justify-between bg-white/60">
        <div>
          <div className="text-[#141B34] text-lg font-medium mb-2">
            Provide Feedback
          </div>
          <div className="mb-4">
            <div className="text-[13px] font-medium text-[#141B34] mb-1">
              Rating
            </div>
            <StarRating rating={rating} />
          </div>
          <div className="mb-4">
            <div className="text-[13px] font-medium text-[#141B34] mb-1">
              Provide Feedback
            </div>
            <div className="rounded-xl bg-white px-4 py-3 text-xs text-[#141b34b3] min-h-[70px] flex items-center">
              {feedbackText}
            </div>
          </div>
          <div className="mb-4">
            <div className="text-[13px] font-medium text-[#141B34] mb-1">
              Feedback Type
            </div>
            <div className="flex gap-3">
              <div className="bg-white rounded-xl flex flex-col items-center px-5 py-3 text-xs font-medium text-[#141B34]">
                <img src={imgFeedbackType1} className="w-5 h-5 mb-1" alt="" />
                Physical
              </div>
              <div className="bg-white rounded-xl flex flex-col items-center px-5 py-3 text-xs font-medium text-[#141B34]">
                <img src={imgFeedbackType2} className="w-5 h-5 mb-1" alt="" />
                Technical
              </div>
              <div className="bg-white rounded-xl flex flex-col items-center px-5 py-3 text-xs font-medium text-[#141B34]">
                <img src={imgFeedbackType3} className="w-5 h-5 mb-1" alt="" />
                Mental
              </div>
            </div>
          </div>
          <div>
            <div className="text-[13px] font-medium text-[#141B34] mb-1">
              Award Badges{" "}
              <span className="text-[rgba(20,27,52,0.6)] font-normal">
                (Optional)
              </span>
            </div>
            <div className="flex gap-2 flex-wrap mb-4 mt-2">
              {badges.map((badge) => (
                <div
                  key={badge.label}
                  className={`flex gap-1 items-center px-4 py-2 rounded-full border text-[11px] font-medium ${
                    badge.color || ""
                  }`}
                >
                  <img src={badge.icon} className="w-5 h-5" alt={badge.label} />
                  {badge.label}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-8">
          <button className="flex-1 rounded-full bg-gradient-to-r from-[#4d8ffb] to-[#2a6be8] text-white py-3 text-base font-medium shadow-[0_10px_30px_rgba(46,107,232,0.35)]">
            Complete Review
          </button>
          <button className="flex-1 rounded-full bg-white/80 border text-[#276AEE] border-[#276aee40] py-3 text-base font-medium">
            Save Draft
          </button>
        </div>
      </div>
    </div>
  );
}

export default function page() {
  return (
    <div className="min-h-screen bg-[#e7f2f5] p-8">
      {feedbackSubmissions.map((item) => (
        <FeedbackSubmissionCard key={item.id} {...item} />
      ))}
    </div>
  );
}
