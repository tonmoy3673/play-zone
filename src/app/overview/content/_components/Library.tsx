const libraryItems = [
  {
    image:
      "https://www.figma.com/api/mcp/asset/c0f0a6d2-0558-4d40-8bdc-a13622da57ac",
    time: "02:34",
    type: "Video",
    typeIcon: "play",
    tag: "NEW",
    title: "Speed & Agility Training",
    description:
      "Comprehensive speed development program with cone drills and sprint",
    tasks: 0,
    size: "320 MB",
    added: "Jun 2, 2023",
  },
  {
    image:
      "https://www.figma.com/api/mcp/asset/c585c8f3-092e-4940-8176-239ea5926578",
    time: "02:34",
    type: "Pdf",
    typeIcon: "pdf",
    tag: null,
    title: "Offensive Playbook 2023",
    description:
      "Complete offensive strategy guide with formations, routes, and",
    tasks: 4,
    size: "18 MB",
    added: "May 28, 2023",
  },
  {
    image:
      "https://www.figma.com/api/mcp/asset/ee1d5ee6-c9ce-492e-b5fe-63228ad429d3",
    time: "02:34",
    type: "Pdf",
    typeIcon: "pdf",
    tag: null,
    title: "Conditioning Program Guide",
    description: "8-week progressive conditioning plan with daily workouts and",
    tasks: 1,
    size: "2.5 MB",
    added: "Jun 3, 2023",
  },
  {
    image:
      "https://www.figma.com/api/mcp/asset/c0f0a6d2-0558-4d40-8bdc-a13622da57ac",
    time: "02:34",
    type: "Video",
    typeIcon: "play",
    tag: "FEATURED",
    title: "QB Fundamentals Masterclass",
    description:
      "Complete guide to quarterback mechanics, footwork, and decision",
    tasks: 2,
    size: "235 MB",
    added: "Jun 2, 2023",
  },
  {
    image:
      "https://www.figma.com/api/mcp/asset/c585c8f3-092e-4940-8176-239ea5926578",
    time: "02:34",
    type: "Pdf",
    typeIcon: "pdf",
    tag: null,
    title: "Offensive Playbook 2023",
    description:
      "Complete offensive strategy guide with formations, routes, and",
    tasks: 4,
    size: "18 MB",
    added: "May 28, 2023",
  },
  {
    image:
      "https://www.figma.com/api/mcp/asset/ee1d5ee6-c9ce-492e-b5fe-63228ad429d3",
    time: "02:34",
    type: "Image",
    typeIcon: "pdf",
    tag: null,
    title: "Play Diagram Collection",
    description:
      "25 illustrated play diagrams with position assignments and routes.",
    tasks: 4,
    size: "45 MB",
    added: "May 20, 2023",
  },
  {
    image:
      "https://www.figma.com/api/mcp/asset/c0f0a6d2-0558-4d40-8bdc-a13622da57ac",
    time: "02:34",
    type: "Video",
    typeIcon: "play",
    tag: "FEATURED",
    title: "QB Fundamentals Masterclass",
    description:
      "Complete guide to quarterback mechanics, footwork, and decision",
    tasks: 2,
    size: "235 MB",
    added: "Jun 2, 2023",
  },
  {
    image:
      "https://www.figma.com/api/mcp/asset/c585c8f3-092e-4940-8176-239ea5926578",
    time: "02:34",
    type: "Pdf",
    typeIcon: "pdf",
    tag: null,
    title: "Offensive Playbook 2023",
    description:
      "Complete offensive strategy guide with formations, routes, and",
    tasks: 4,
    size: "18 MB",
    added: "May 28, 2023",
  },
  {
    image:
      "https://www.figma.com/api/mcp/asset/ee1d5ee6-c9ce-492e-b5fe-63228ad429d3",
    time: "02:34",
    type: "Pdf",
    typeIcon: "pdf",
    tag: null,
    title: "Conditioning Program",
    description:
      "Recorded team meeting covering defensive adjustments and game",
    tasks: 3,
    size: "1.2 GB",
    added: "Jun 2, 2023",
  },
];

const LibraryCard = ({ item }) => (
  <div className="bg-white bg-opacity-60 rounded-2xl w-72">
    <div className="relative">
      <img
        src={item.image}
        alt={item.title}
        className="rounded-t-2xl h-36 w-full object-cover"
      />
      <div className="absolute top-2 left-2">
        {item.tag && (
          <span
            className={`px-2 py-1 text-xs font-medium text-white rounded-md ${
              item.tag === "FEATURED" ? "bg-green-600" : "bg-red-600"
            }`}
          >
            {item.tag}
          </span>
        )}
      </div>
      <div className="absolute bottom-2 right-2 px-2 py-1 text-xs font-medium text-white bg-black bg-opacity-30 rounded-md">
        {item.time}
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <button className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
          <img
            src={
              item.typeIcon === "play"
                ? "https://www.figma.com/api/mcp/asset/9c38283b-3124-47cb-8a46-27d3ebcd9bfa"
                : "https://www.figma.com/api/mcp/asset/efeb7efd-e388-4352-a252-446426e7c30e"
            }
            alt="icon"
            className="w-6 h-6"
          />
        </button>
      </div>
    </div>
    <div className="p-4">
      <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
        <span>Added {item.added}</span>
        <span
          className={`px-2.5 py-2 text-xs font-medium rounded-full ${
            item.type === "Video"
              ? "bg-green-100 text-green-800"
              : item.type === "Pdf"
              ? "bg-blue-100 text-blue-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {item.type}
        </span>
      </div>
      <hr className="mb-3" />
      <h3 className="text-base font-medium text-gray-800">{item.title}</h3>
      <p className="text-xs text-gray-500 mb-4">{item.description}</p>
      <div className="flex justify-between text-xs font-medium text-gray-800 mb-4">
        <span>Linked to {item.tasks} tasks</span>
        <span>{item.size}</span>
      </div>
      <div className="flex gap-2">
        <button className="py-3 px-4 rounded-full bg-blue-50 border border-blue-200 text-sm font-medium text-blue-600">
          Preview
        </button>
        <button className="py-3 px-4 rounded-full border border-blue-700 text-sm font-medium text-white bg-blue-600">
          Assign to Task
        </button>
      </div>
    </div>
  </div>
);

export default function Library() {
  return (
    <div className="bg-white bg-opacity-30 rounded-3xl p-5">
      <div className="grid grid-cols-3 gap-4">
        {libraryItems.map((item, index) => (
          <LibraryCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
