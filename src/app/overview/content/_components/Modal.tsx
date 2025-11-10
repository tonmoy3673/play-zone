const badges = [
  {
    icon: "https://www.figma.com/api/mcp/asset/b01132db-2a7c-40db-84ce-040a3f9ef57c",
    label: "Top Effort",
    selected: true,
  },
  {
    icon: "https://www.figma.com/api/mcp/asset/e272b54d-2ead-4dae-8ef0-1ebda01227be",
    label: "Perfect Form",
  },
  {
    icon: "https://www.figma.com/api/mcp/asset/f506797e-36ef-4da2-a18c-15d4e866d254",
    label: "Creative",
  },
  {
    icon: "https://www.figma.com/api/mcp/asset/7971f27b-082c-4f33-9e43-75b93e7cfc0c",
    label: "Quick Learner",
  },
  {
    icon: "https://www.figma.com/api/mcp/asset/7971f27b-082c-4f33-9e43-75b93e7cfc0c",
    label: "Consistent Progress",
  },
  {
    icon: "https://www.figma.com/api/mcp/asset/7971f27b-082c-4f33-9e43-75b93e7cfc0c",
    label: "Needs Improvement",
  },
  {
    icon: "https://www.figma.com/api/mcp/asset/7971f27b-082c-4f33-9e43-75b93e7cfc0c",
    label: "Retry Recommended",
  },
  {
    icon: "https://www.figma.com/api/mcp/asset/7971f27b-082c-4f33-9e43-75b93e7cfc0c",
    label: "Focus Needed",
  },
  {
    icon: "https://www.figma.com/api/mcp/asset/7971f27b-082c-4f33-9e43-75b93e7cfc0c",
    label: "Missed Deadline",
  },
];

const BadgeCard = ({ icon, label, selected }) => (
  <div
    className={`box-border flex flex-col gap-5 items-center p-5 rounded-xl w-36 h-32 ${
      selected
        ? "bg-blue-50 border-2 border-blue-600"
        : "bg-blue-50 border border-gray-100"
    }`}
  >
    <img alt="" className="w-6 h-6" src={icon} />
    <p className="font-medium text-sm text-center text-gray-800">{label}</p>
  </div>
);

export default function Badges() {
  return (
    <div className="bg-white rounded-2xl p-5">
      <h1 className="text-base font-medium text-gray-800 mb-5">Badge</h1>
      <div className="flex flex-col gap-5">
        <div className="bg-gray-100 rounded-2xl px-4 py-3.5 w-full max-w-md">
          <div className="flex items-center gap-3">
            <img
              alt=""
              className="w-5 h-5"
              src="https://www.figma.com/api/mcp/asset/ef77f4a9-d0d7-488f-b555-5b60e9785293"
            />
            <p className="text-xs font-normal text-gray-800">Badge</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {badges.map((badge, index) => (
            <BadgeCard key={index} {...badge} />
          ))}
        </div>
      </div>
      <div className="flex gap-2 mt-10">
        <button className="flex-1 py-3 px-4 rounded-full bg-gradient-to-b from-blue-50 to-blue-100 border border-blue-200 text-sm font-medium text-blue-600">
          Save Draft
        </button>
        <button className="flex-1 py-3 px-4 rounded-full border border-blue-300 text-sm font-medium text-white bg-blue-600">
          Complete Review
        </button>
      </div>
    </div>
  );
}
