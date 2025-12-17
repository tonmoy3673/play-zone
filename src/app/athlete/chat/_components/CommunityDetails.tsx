import Icon from "@/utils/icon";
import React, { useState } from "react";

interface Member {
  id: number;
  name: string;
  isOnline: boolean;
  role?: "Owner" | "Admin";
  avatar: string;
  lastSeen?: string;
}

interface CommunityDetailsProps {
  members?: Member[];
}

const CommunityDetails = ({ members = [] }: CommunityDetailsProps) => {
  const [showMembers, setShowMembers] = useState(true);

  const toggleMembers = () => {
    setShowMembers(!showMembers);
  };

  // Default members data if none provided
  const defaultMembers: Member[] = [
    {
      id: 1,
      name: "Marvin McKinney",
      isOnline: true,
      role: "Owner",
      avatar: "/avatar1.svg"
    },
    {
      id: 2,
      name: "Mike Thompson",
      isOnline: true,
      role: "Admin",
      avatar: "/avatar1.svg"
    },
    {
      id: 3,
      name: "Kyle Rodgers",
      isOnline: true,
      avatar: "/avatar1.svg"
    },
    {
      id: 4,
      name: "Michael Clarcen",
      isOnline: false,
      lastSeen: "2 min ago",
      avatar: "/avatar1.svg"
    },
    {
      id: 5,
      name: "Carlos Woods",
      isOnline: false,
      lastSeen: "2 min ago",
      avatar: "/avatar1.svg"
    },
    {
      id: 6,
      name: "Frank Clarcen",
      isOnline: false,
      lastSeen: "3 min ago",
      avatar: "/avatar1.svg"
    },
    {
      id: 7,
      name: "Trevor Brooks",
      isOnline: false,
      lastSeen: "3 min ago",
      avatar: "/avatar1.svg"
    },
	 {
      id: 7,
      name: "Trevor Brooks",
      isOnline: false,
      lastSeen: "3 min ago",
      avatar: "/avatar1.svg"
    },
	 {
      id: 7,
      name: "Trevor Brooks",
      isOnline: false,
      lastSeen: "3 min ago",
      avatar: "/avatar1.svg"
    },
  ];

  const displayMembers = members.length > 0 ? members : defaultMembers;

  return (
    <div>
      <div className="bg-[#FFFFFF99] p-6 border border-white rounded-3xl h-full">
        <h1 className="text-base font-medium">Community Details</h1>
        <div className="mt-7">
          <div className="flex flex-col items-center justify-center mb-5">
            <img
              src="/avatar1.svg"
              alt="User Avatar"
              width={56}
              height={56}
              className="rounded-full object-cover"
            />
            <p className="mt-3 text-center text-[18px] font-medium text-black">
              The Clutch Gene
            </p>
          </div>

			 <div className="grid grid-cols-3 gap-5 mb-7">
				<div className="flex flex-col items-center">
					<Icon name="video" height={16} width={16} />
					<p className="text-xs text-[#141B34] font-normal mt-2">Videos</p>
				</div>
				<div className="flex flex-col items-center">
					<Icon name="image" height={16} width={16} />
					<p className="text-xs text-[#141B34] font-normal mt-2">Photos</p>
				</div>
				<div className="flex flex-col items-center">
					<Icon name="file" height={16} width={16} />
					<p className="text-xs text-[#141B34] font-normal mt-2">Document</p>
				</div>
			 </div>

			 <div className="flex justify-between items-center mb-4">
				<h3 className="text-base font-medium text-[#141B34]">Member</h3>
				<button onClick={toggleMembers} className="p-1 hover:bg-gray-100 rounded transition-colors">
					<Icon name={showMembers ? "chevron_down" : "chevron_up"} height={16} width={16} />
				</button>
			 </div>

			 {/* Members List */}
			 {showMembers && (
				<div className="space-y-6">
					{displayMembers.map((member) => (
						<div key={member.id} className="flex items-center justify-between">
						<div className="flex items-center space-x-3">
							<div className="relative">
								<img
									src={member.avatar}
									alt={member.name}
									width={40}
									height={40}
									className="rounded-full object-cover"
								/>
								{member.isOnline && (
									<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
								)}
							</div>
							<div>
								<p className="text-sm font-medium text-[#141B34]">{member.name}</p>
								<p className={`${member.isOnline ? "text-[#5C8FF7]" : "text-[#141b34b3]"} text-xs`}>
									{member.isOnline ? "online" : member.lastSeen}
								</p>
							</div>
						</div>
						{member.role && (
							<span className={`px-2 py-1 rounded text-xs font-medium text-white ${
								member.role === "Owner" 
									? "bg-black" 
									: member.role === "Admin" 
									? "bg-black" 
									: ""
							}`}>
								{member.role}
							</span>
						)}
						</div>
					))}
				</div>
			 )}

			 {/* Go to Full Program Hub Button */}
			 <div className="mt-6">
				<button className="w-full bg-primary-gradient text-white font-normal py-3 px-4 rounded-xl transition-colors">
					Go to Full Program Hub
				</button>
			 </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityDetails;
