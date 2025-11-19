import React from "react";
const imgImage341 =
  "https://www.figma.com/api/mcp/asset/408e17b3-dddd-4ece-8ba4-df2ab28234c8";
const imgRectangle2103 =
  "https://www.figma.com/api/mcp/asset/91bbe9b8-3354-422d-bf57-c1c7e2908fd2";
const videoIcon =
  "https://www.figma.com/api/mcp/asset/f1793005-57a6-4709-b352-7f7152b90b4e";
const messageIcon =
  "https://www.figma.com/api/mcp/asset/7835607e-7b30-4737-90ce-829a571eabaf";
const moreIcon =
  "https://www.figma.com/api/mcp/asset/e9a2bc19-90bc-45a6-83ce-c9c3c92ba1fe";
const calendarIcon =
  "https://www.figma.com/api/mcp/asset/1c8b871f-b3a0-4a45-97c5-38df8bea02a4";

interface AthleteCardProps {
  name: string;
  joined: string;
  lastOnline: string;
  isNew: boolean;
  avatar: string;
}

const AthleteCard: React.FC<AthleteCardProps> = ({
  name,
  joined,
  lastOnline,
  isNew,
  avatar,
}) => {
  return (
    <div className="bg-white/60 overflow-hidden relative rounded-2xl shadow-lg w-[340px] h-[192px]">
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.866025447845459)+(var(--transform-inner-height)*0.4999999701976776)))] items-center justify-center left-[-46px] top-[22px] w-[calc(1px*((var(--transform-inner-height)*0.866025447845459)+(var(--transform-inner-width)*0.4999999701976776)))]">
        <div className="flex-none rotate-[60deg] scale-y-[-100%]">
          <div className="blur-[5px] filter h-[193.229px] relative w-[237.307px]">
            <div className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none">
              <img
                alt=""
                className="absolute h-[106.24%] left-[-21.02%] max-w-none top-[-2.39%] w-[120.73%]"
                src={imgImage341}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute border border-[#68b0ea] border-solid left-[44px] top-[20px] rounded-full size-[48px] translate-x-[-50%]">
        <img
          alt={name}
          className="rounded-full size-full object-cover"
          src={avatar}
        />
      </div>
      <div className="absolute flex gap-1 items-center right-5 top-5">
        <button className="bg-white rounded-full size-10 flex items-center justify-center">
          <img alt="Video" src={videoIcon} className="size-5" />
        </button>
        <button className="bg-white rounded-full size-10 flex items-center justify-center">
          <img alt="Message" src={messageIcon} className="size-5" />
        </button>
        <button className="bg-white rounded-full size-10 flex items-center justify-center">
          <img alt="More" src={moreIcon} className="size-6" />
        </button>
      </div>
      <div className="absolute flex flex-col gap-1.5 items-start left-5 top-24 w-auto">
        <p className="font-medium text-base text-dark">{name}</p>
        <div className="flex gap-1 items-center">
          <img alt="Calendar" src={calendarIcon} className="size-4" />
          <p className="text-xs text-gray-600">Joined {joined} ago</p>
        </div>
      </div>
      {isNew && (
        <div className="absolute bg-gradient-to-b from-blue-100 to-blue-200 border border-blue-200 rounded-full px-3 py-1 right-5 top-24">
          <p className="text-xs text-blue-800 font-medium">NEW</p>
        </div>
      )}
      <div className="absolute flex gap-2 items-center bottom-4 left-5">
        <div className="border-t border-[#68b0ea] rounded-full size-2" />
        <p className="text-xs text-dark">{lastOnline}</p>
      </div>
    </div>
  );
};

const athletes = [
  {
    name: "Marvin McKinney",
    joined: "2 months",
    lastOnline: "Last online - 10:59 PM",
    isNew: true,
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "John Doe",
    joined: "1 month",
    lastOnline: "Last online - 9:30 AM",
    isNew: false,
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Jane Smith",
    joined: "3 weeks",
    lastOnline: "Last online - 11:00 PM",
    isNew: true,
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "Peter Jones",
    joined: "1 year",
    lastOnline: "Last online - 8:00 AM",
    isNew: false,
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Mary Jane",
    joined: "5 months",
    lastOnline: "Last online - 2:00 PM",
    isNew: false,
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    name: "Chris Lee",
    joined: "2 weeks",
    lastOnline: "Last online - 6:00 PM",
    isNew: true,
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const AthletesGrid: React.FC = () => {
  return (
    <div className="p-8 bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Athletes & Members
      </h1>
      <div className="flex items-center justify-between mb-6">
        <div className="flex space-x-2">
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md">
            All
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md">
            Athletes
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md">
            Staff
          </button>
        </div>
        <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          <span>Add Staff Member</span>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {athletes.map((athlete, index) => (
          <AthleteCard
            key={index}
            name={athlete.name}
            joined={athlete.joined}
            lastOnline={athlete.lastOnline}
            isNew={athlete.isNew}
            avatar={athlete.avatar}
          />
        ))}
      </div>
    </div>
  );
};

export default AthletesGrid;
