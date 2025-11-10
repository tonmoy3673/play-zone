import Icon from "@/utils/icon";

interface LiveSessionProps {
  title: string;
  description: string;
  time: string;
  isReminded?: boolean;
}

export const UpcomingLives: React.FC = () => {
  const sessions: LiveSessionProps[] = [
    {
      title: "Sprint Technique Analysis",
      description: "Live breakdown of sprint mechanics with Coach Rich",
      time: "in 3 hours",
      isReminded: true,
    },
    {
      title: "Film Review with Coach Bronson",
      description: "Live breakdown of 5v5 DL/OL review",
      time: "Tomorrow",
      isReminded: true,
    },
  ];

  return (
    <div className="bg-[#ffffff4d] max-w-sm flex-1 p-4 border border-white rounded-2xl  backdrop-blur-3xl  overflow-hidden">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-semibold text-dark">Upcoming Lives</h2>
        <button className="bg-white rounded-full p-2 hover:bg-gray-50 transition-colors border border-gray-200">
          <Icon name="right_arrow" width={20} height={20} />
        </button>
      </div>

      <div className="space-y-2">
        {sessions.map((session, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 bg-[#ffffff6b] px-4 py-2 rounded-2xl"
          >
            <div className="flex items-center justify-start">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <Icon
                  name="live_user"
                  width={22}
                  height={20}
                  className="text-red-400"
                />
              </div>
              <h3 className="font-medium text-sm text-dark">{session.title}</h3>
            </div>

            <p className="text-xs text-[#141b34cc]">{session.description}</p>

            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <Icon name="calendar" width={14} height={14} />
                <span className="text-red-400 text-[10px]">{session.time}</span>
              </div>
              <button
                style={{
                  borderRadius: "24px",
                  background:
                    "linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%)",
                }}
                className=" flex items-center justify-center gap-1 text-white text-[10px] px-3 py-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                >
                  <path
                    opacity="0.4"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.01904 0.915574C6.31578 0.72132 6.67799 0.666016 7 0.666016C7.32201 0.666016 7.68422 0.72132 7.98096 0.915574C8.31016 1.13108 8.5 1.4799 8.5 1.91602C8.5 2.31346 8.34467 2.72852 8.1084 3.0464C7.87584 3.35927 7.49434 3.66602 7 3.66602C6.50566 3.66602 6.12416 3.35927 5.8916 3.0464C5.65533 2.72852 5.5 2.31346 5.5 1.91602C5.5 1.4799 5.68984 1.13108 6.01904 0.915574Z"
                    fill="white"
                  />
                  <path
                    opacity="0.4"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.00004 12C5.36823 12 5.66671 12.2985 5.66671 12.6667C5.66671 13.403 6.26366 14 7.00004 14C7.73642 14 8.33337 13.403 8.33337 12.6667C8.33337 12.2985 8.63185 12 9.00004 12C9.36823 12 9.66671 12.2985 9.66671 12.6667C9.66671 14.1394 8.4728 15.3333 7.00004 15.3333C5.52728 15.3333 4.33337 14.1394 4.33337 12.6667C4.33337 12.2985 4.63185 12 5.00004 12Z"
                    fill="white"
                  />
                  <path
                    d="M1.9396 7.63505C2.08126 4.94363 4.30485 2.83398 7 2.83398C9.69515 2.83398 11.9187 4.94363 12.0604 7.63505C12.0665 7.75007 12.071 7.86021 12.0753 7.96632V7.96633C12.0901 8.32734 12.1029 8.64165 12.1683 8.94282C12.2465 9.30273 12.3911 9.58567 12.6852 9.80625C13.1981 10.1909 13.5 10.7946 13.5 11.4358C13.5 12.3566 12.7752 13.1673 11.8 13.1673H2.2C1.22479 13.1673 0.5 12.3566 0.5 11.4358C0.5 10.7946 0.801855 10.1909 1.31475 9.80625C1.60886 9.58567 1.7535 9.30273 1.83166 8.94282C1.89707 8.64164 1.90993 8.32733 1.9247 7.96632L1.9247 7.9663C1.92904 7.8602 1.93355 7.75007 1.9396 7.63505Z"
                    fill="white"
                  />
                </svg>{" "}
                Remind Me
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
