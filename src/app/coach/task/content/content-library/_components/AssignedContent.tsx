import Icon from "../../_components/icon";

// Assigned content data type
interface AssignedContentItem {
  id: string;
  content: string;
  type: "Video" | "Pdf";
  task: string;
  dateAssigned: string;
  timeAssigned: string;
  assignedTo: {
    avatars: string[];
    additionalCount: number;
  };
}

// Sample data based on the Figma design
const assignedContentData: AssignedContentItem[] = [
  {
    id: "1",
    content: "QB Fundamentals Masterclass",
    type: "Video",
    task: "Passing Drill Submission",
    dateAssigned: "Jun 5, 2025",
    timeAssigned: "2:45 PM",
    assignedTo: {
      avatars: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
      ],
      additionalCount: 12,
    },
  },
  {
    id: "2",
    content: "Offensive Playbook 2023",
    type: "Pdf",
    task: "Tactical Analysis Quiz",
    dateAssigned: "Jun 4, 2025",
    timeAssigned: "2:45 PM",
    assignedTo: {
      avatars: [
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces",
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces",
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=faces",
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop&crop=faces",
      ],
      additionalCount: 11,
    },
  },
  {
    id: "3",
    content: "Footwork Drills Collection",
    type: "Video",
    task: "Footwork Training Video",
    dateAssigned: "Jun 3, 2025",
    timeAssigned: "2:45 PM",
    assignedTo: {
      avatars: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
      ],
      additionalCount: 7,
    },
  },
];

// Get content type badge styling
const getContentTypeBadgeStyle = (type: AssignedContentItem["type"]) => {
  if (type === "Video") {
    return "bg-gradient-to-b from-[rgba(0,226,128,0.05)] to-[rgba(0,124,70,0.12)] border border-[rgba(0,226,128,0.1)] text-[#027a48]";
  }
  // PDF styling
  return "bg-gradient-to-b from-[rgba(69,127,243,0.05)] to-[rgba(69,127,243,0.12)] border border-[rgba(69,127,243,0.1)] text-[#437EF7]";
};

export default function AssignedContent() {
  return (
    <section className="mt-8 w-full">
      <div className="bg-[rgba(255,255,255,0.3)] overflow-clip relative rounded-[24px] p-5">
        <h2 className="text-lg font-medium text-dark leading-[1.4] mb-5">
          Recently Assigned Content
        </h2>

        {/* Table Container */}
        <div className="bg-[rgba(255,255,255,0.73)] rounded-[20px] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-white border-b border-[#e7f2f5]">
                  <th className="px-6 py-4 text-left">
                    <p className="text-[10px] font-medium text-paragraph-dark leading-[1.4]">
                      Content
                    </p>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <p className="text-[10px] font-medium text-paragraph-dark leading-[1.4]">
                      Type
                    </p>
                  </th>
                  <th className="px-4 py-4 text-left">
                    <p className="text-[10px] font-medium text-paragraph-dark leading-[1.4]">
                      Task
                    </p>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <p className="text-[10px] font-medium text-paragraph-dark leading-[1.4]">
                      Date Assigned
                    </p>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <p className="text-[10px] font-medium text-paragraph-dark leading-[1.4]">
                      Assigned To
                    </p>
                  </th>
                  <th className="px-6 py-4 text-left">
                    <p className="text-[10px] font-medium text-paragraph-dark leading-[1.4]">
                      Actions
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {assignedContentData.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-[#e7f2f5] h-[72px]"
                  >
                    {/* Content Column */}
                    <td className="px-6 py-4">
                      <p className="text-[10px] font-medium text-dark leading-[1.4] max-w-[163px]">
                        {item.content}
                      </p>
                    </td>

                    {/* Type Column */}
                    <td className="px-6 py-4">
                      <div
                        className={`inline-flex items-center justify-center px-3 py-[10px] rounded-[61px] h-8 ${getContentTypeBadgeStyle(
                          item.type
                        )}`}
                      >
                        <p className="text-xs font-medium leading-5 text-right">
                          {item.type}
                        </p>
                      </div>
                    </td>

                    {/* Task Column */}
                    <td className="px-4 py-4">
                      <p className="text-[10px] font-medium text-dark leading-[1.4]">
                        {item.task}
                      </p>
                    </td>

                    {/* Date Assigned Column */}
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1">
                        <p className="text-[10px] font-medium text-dark leading-[1.4]">
                          {item.dateAssigned}
                        </p>
                        <p className="text-[10px] font-medium text-paragraph-dark leading-[1.4]">
                          {item.timeAssigned}
                        </p>
                      </div>
                    </td>

                    {/* Assigned To Column */}
                    <td className="px-6 py-4">
                      <div className="flex items-center -space-x-1.5">
                        {item.assignedTo.avatars.map((avatar, index) => (
                          <img
                            key={index}
                            src={avatar}
                            alt={`Avatar ${index + 1}`}
                            className="size-6 rounded-full border-2 border-white object-cover"
                          />
                        ))}
                        {item.assignedTo.additionalCount > 0 && (
                          <div className="bg-[rgba(255,255,255,0.3)] rounded-full size-6 flex items-center justify-center border-2 border-white">
                            <p className="text-[10px] font-medium text-dark leading-[1.4]">
                              +{item.assignedTo.additionalCount}
                            </p>
                          </div>
                        )}
                      </div>
                    </td>

                    {/* Actions Column */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          className="bg-white rounded-full size-8 flex items-center justify-center hover:bg-gray-50 transition-colors"
                          aria-label="View"
                        >
                          <Icon
                            name="eye"
                            height={16}
                            width={16}
                            className="text-dark"
                          />
                        </button>
                        <button
                          className="bg-white rounded-full size-8 flex items-center justify-center hover:bg-gray-50 transition-colors"
                          aria-label="Message"
                        >
                          <Icon
                            name="message_02"
                            height={16}
                            width={16}
                            className="text-dark"
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
