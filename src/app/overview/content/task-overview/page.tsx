const specialists = [
  {
    name: "Albert Flores",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
    highlightAvatar: true,
    status: { type: "offline", text: "Last online - 10:59 PM" },
    recentProject: "Advanced Route Running",
    sessions: 20,
    accent: "ghost",
  },
  {
    name: "Kristin Watson",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
    highlightAvatar: false,
    status: { type: "online", text: "Active Now" },
    recentProject: "Advanced Route Running",
    sessions: 23,
    accent: "ghost",
  },
  {
    name: "Courtney Henry",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
    highlightAvatar: false,
    status: { type: "online", text: "Active Now" },
    recentProject: "Advanced Route Running",
    sessions: 23,
    accent: "ghost",
  },
  {
    name: "Arlene McCoy",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
    highlightAvatar: false,
    status: { type: "offline", text: "Last online - 10:59 PM" },
    recentProject: "Advanced Route Running",
    sessions: 23,
    accent: "ghost",
  },
  {
    name: "Bessie Cooper",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces",
    highlightAvatar: false,
    status: { type: "offline", text: "Last online - 10:59 PM" },
    recentProject: "Advanced Route Running",
    sessions: 23,
    accent: "ghost",
  },
  {
    name: "Annette Black",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces",
    highlightAvatar: false,
    status: { type: "offline", text: "Last online - 10:59 PM" },
    recentProject: "Advanced Route Running",
    sessions: 23,
    accent: "ghost",
  },
  {
    name: "Theresa Webb",
    avatar:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop&crop=faces",
    highlightAvatar: true,
    status: { type: "offline", text: "Last online - 10:59 PM" },
    recentProject: "Advanced Route Running",
    sessions: 23,
    accent: "ghost",
  },
  {
    name: "Marvin McKinney",
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=faces",
    highlightAvatar: false,
    status: { type: "online", text: "Active Now" },
    recentProject: "Advanced Route Running",
    sessions: 23,
    accent: "ghost",
  },
  {
    name: "Ralph Edwards",
    avatar:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=faces",
    highlightAvatar: true,
    status: { type: "offline", text: "Last online - 10:59 PM" },
    recentProject: "Advanced Route Running",
    sessions: 23,
    accent: "ghost",
  },
];

function StatusTag({ type, text }: { type: string; text: string }) {
  const styles =
    type === "online"
      ? {
          dotClass: "bg-[#38aa4b]",
          textClass: "text-[#38aa4b]",
        }
      : {
          dotClass: "bg-[#595959]",
          textClass: "text-[#141b34b3]",
        };

  return (
    <div className="flex items-center gap-2 text-xs font-medium">
      <span className={`w-2 h-2 rounded-full ${styles.dotClass}`}></span>
      <span className={styles.textClass}>{text}</span>
    </div>
  );
}

export default function Page() {
  return (
    <div className="min-h-screen p-6 flex justify-center">
      <div className="w-full max-w-6xl bg-white/30 rounded-[24px] p-6 border border-white/80">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {specialists.map(
            ({
              name,
              avatar,
              highlightAvatar,
              status,
              recentProject,
              sessions,
            }) => (
              <div
                key={name}
                className="bg-white/60 rounded-2xl p-5 flex flex-col gap-6 shadow-[0_12px_40px_rgba(17,41,88,0.08)]"
              >
                <div className="flex flex-col items-start gap-4">
                  <div
                    className={`relative flex items-center justify-center ${
                      highlightAvatar
                        ? "border-2 border-[#5c8ff7] rounded-full"
                        : ""
                    }`}
                  >
                    <img
                      src={avatar}
                      alt={name}
                      className={`w-16 h-16 rounded-full object-cover ${
                        highlightAvatar
                          ? "shadow-[0_8px_24px_rgba(69,127,243,0.25)]"
                          : ""
                      }`}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-dark text-base font-medium">{name}</h3>
                    <p className="text-xs text-[#141b34b3]">
                      Spint Specialist • Joined Jan 2025
                    </p>
                    <StatusTag type={status.type} text={status.text} />
                  </div>
                </div>

                <div className="h-px w-full bg-linear-to-r from-transparent to-transparent" />

                <div className="flex items-start justify-between text-sm font-medium text-dark">
                  <div>
                    <p className="text-xs text-[#141b34b3] mb-1">
                      Recently Worked On
                    </p>
                    <p className="text-sm font-medium text-dark">
                      {recentProject}
                    </p>
                  </div>
                  <span className="text-sm font-medium text-dark">
                    {sessions}
                  </span>
                </div>

                <button className="w-full rounded-full bg-[#dce6ff] border border-[#1d55d81a] text-[#2a6be8] text-xs font-medium py-3 transition hover:border-transparent hover:text-white hover:bg-linear-to-b hover:from-[#457ff3] hover:from-10% hover:to-[#276AEE] hover:to-63%">
                  View Details
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
