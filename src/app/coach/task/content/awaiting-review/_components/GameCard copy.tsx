interface Athlete {
  avatar: string;
  name: string;
  isNew: boolean;
  joinDate: string;
  lastOnline: string;
}

const athletesData: Athlete[] = [
  {
    avatar:
      "https://www.figma.com/api/mcp/asset/1cade437-90ec-4ce2-9607-3cc5d0283df2",
    name: "Mike_thompson",
    isNew: true,
    joinDate: "Joined 2 month ago",
    lastOnline: "10:59 PM",
  },
  {
    avatar:
      "https://www.figma.com/api/mcp/asset/a27a9f30-906d-4001-adf6-77cbe7464498",
    name: "Kristin Watson",
    isNew: false,
    joinDate: "Joined 2 month ago",
    lastOnline: "11:30 PM",
  },
  {
    avatar:
      "https://www.figma.com/api/mcp/asset/1cade437-90ec-4ce2-9607-3cc5d0283df2",
    name: "Mike_thompson",
    isNew: true,
    joinDate: "Joined 2 month ago",
    lastOnline: "11:59 PM",
  },
  {
    avatar:
      "https://www.figma.com/api/mcp/asset/c12866fc-6a76-472e-b771-154b4a281cf1",
    name: "Arlene McCoy",
    isNew: false,
    joinDate: "Joined 2 month ago",
    lastOnline: "12:20 PM",
  },
  {
    avatar:
      "https://www.figma.com/api/mcp/asset/1cade437-90ec-4ce2-9607-3cc5d0283df2",
    name: "Mike_thompson",
    isNew: true,
    joinDate: "Joined 2 month ago",
    lastOnline: "10:59 PM",
  },
  {
    avatar:
      "https://www.figma.com/api/mcp/asset/c12866fc-6a76-472e-b771-154b4a281cf1",
    name: "Darlene Robertson",
    isNew: false,
    joinDate: "Joined 2 month ago",
    lastOnline: "10:59 PM",
  },
];

const videoIcon =
  "https://www.figma.com/api/mcp/asset/8c61e1c5-9c94-4b49-9424-257c5b59a3a9";
const messageIcon =
  "https://www.figma.com/api/mcp/asset/c1dab8f7-2c41-4db7-87fc-c285f4db8544";
const moreIcon =
  "https://www.figma.com/api/mcp/asset/34ba38a3-d534-428f-8728-810a9ff0bb39";

const GameCard = () => {
  return (
    <div className="bg-white/70 rounded-2xl overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-white">
            <th className="p-4 text-left text-xs font-medium text-gray-500 w-1/3">
              Athlete
            </th>
            <th className="p-4 text-left text-xs font-medium text-gray-500">
              Join Date
            </th>
            <th className="p-4 text-left text-xs font-medium text-gray-500">
              Last Online
            </th>
            <th className="p-4 text-left text-xs font-medium text-gray-500">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {athletesData.map((athlete, index) => (
            <tr key={index} className="border-b border-gray-200">
              <td className="p-4">
                <div className="flex items-center gap-2">
                  <img
                    src={athlete.avatar}
                    alt={athlete.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium text-sm text-gray-800">
                      {athlete.name}
                    </p>
                    {athlete.isNew && (
                      <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                        NEW
                      </span>
                    )}
                  </div>
                </div>
              </td>
              <td className="p-4 text-sm text-gray-800">{athlete.joinDate}</td>
              <td className="p-4 text-sm text-gray-800">
                {athlete.lastOnline}
              </td>
              <td className="p-4">
                <div className="flex items-center gap-2">
                  <button className="bg-white rounded-full p-2 hover:bg-gray-100">
                    <img src={videoIcon} alt="Video" className="w-5 h-5" />
                  </button>
                  <button className="bg-white rounded-full p-2 hover:bg-gray-100">
                    <img src={messageIcon} alt="Message" className="w-4 h-4" />
                  </button>
                  <button className="bg-white rounded-full p-2 hover:bg-gray-100">
                    <img src={moreIcon} alt="More" className="w-6 h-6" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GameCard;
