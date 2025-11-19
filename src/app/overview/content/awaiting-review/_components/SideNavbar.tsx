import React from 'react';

const icons = [
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    ),
    label: 'Dashboard',
    active: false,
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z"
        />
      </svg>
    ),
    label: 'Announcements',
    active: false,
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    ),
    label: 'Content & Tasks',
    active: false,
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.282-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.282.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    label: 'Athletes & Members',
    active: true,
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z"
        />
      </svg>
    ),
    label: 'Messages',
    active: false,
    count: 20,
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    label: 'Calendar',
    active: false,
  },
];

const otherIcons = [
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    label: 'Analytics',
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l-3-1m-3 1l-3 9"
        />
      </svg>
    ),
    label: 'Financials',
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V7a2 2 0 012-2h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H17z"
        />
      </svg>
    ),
    label: 'Leaderboard',
  },
];

const adminIcons = [
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m1-4h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z"
        />
      </svg>
    ),
    label: 'Support',
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2"
        />
      </svg>
    ),
    label: 'Staff',
  },
  {
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    label: 'Settings',
  },
];

const SideNavbar = () => {
  return (
    <div className="bg-white/5 rounded-2xl p-6 w-full max-w-xs">
      <div className="flex items-center gap-2 mb-4">
        <button className="bg-white/60 p-1 rounded-full">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <span className="font-medium text-lg">Back Main Dashboard</span>
      </div>
      <div className="bg-white/60 rounded-2xl p-2 mb-4">
        <div className="bg-blue-600 rounded-xl p-2 flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <img
              src="https://www.figma.com/api/mcp/asset/c26946cd-e5d6-4216-b0d1-e9ec065b11cc"
              alt="Rising Stars"
              className="w-9 h-9 rounded-lg"
            />
            <span className="text-sm">Rising Stars: QB Community</span>
          </div>
          <button className="bg-white/10 p-1 rounded-full">
            <svg
              className="h-5 w-5 transform rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        </div>
        <div className="mt-2 space-y-2">
          <div className="flex items-center gap-2">
            <img
              src="https://www.figma.com/api/mcp/asset/b5bbf42f-3aaa-441a-ba02-6db80d5f0ec0"
              alt="Speed & Agility Training"
              className="w-8 h-8 rounded-lg"
            />
            <span className="text-sm">Speed & Agility Training</span>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="https://www.figma.com/api/mcp/asset/3ce07003-fb8d-4474-a3dd-e1d0bf71a010"
              alt="Mental Performance"
              className="w-8 h-8 rounded-lg"
            />
            <span className="text-sm">Mental Performance</span>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="https://www.figma.com/api/mcp/asset/0de9e6e1-b9a9-4b0d-a214-56c94286a343"
              alt="Speed & Agility Training"
              className="w-8 h-8 rounded-lg"
            />
            <span className="text-sm">Speed & Agility Training</span>
          </div>
        </div>
      </div>
      <nav>
        <ul>
          {icons.map((item, index) => (
            <li
              key={index}
              className={`flex items-center justify-between p-2 rounded-lg mb-2 ${
                item.active ? 'bg-blue-100 text-blue-600' : ''
              }`}
            >
              <div className="flex items-center gap-2">
                <div
                  className={`p-2 rounded-lg ${
                    item.active ? 'bg-blue-200' : ''
                  }`}
                >
                  {item.icon}
                </div>
                <span>{item.label}</span>
              </div>
              {item.count && (
                <span className="bg-blue-500 text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {item.count}
                </span>
              )}
            </li>
          ))}
        </ul>
        <hr className="my-4" />
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-500">Others</span>
          <button className="p-1 rounded-full bg-gray-200">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        </div>
        <ul>
          {otherIcons.map((item, index) => (
            <li key={index} className="flex items-center gap-2 p-2 rounded-lg mb-2">
              <div className="p-2 rounded-lg">{item.icon}</div>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
        <hr className="my-4" />
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-500">Admin & Settings</span>
          <button className="p-1 rounded-full bg-gray-200">
            <svg
              className="h-5 w-5 transform rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        </div>
        <ul>
          {adminIcons.map((item, index) => (
            <li key={index} className="flex items-center gap-2 p-2 rounded-lg mb-2">
              <div className="p-2 rounded-lg">{item.icon}</div>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideNavbar;
