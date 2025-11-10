const imgImage400 =
  "https://www.figma.com/api/mcp/asset/a0280475-b27b-4cc0-9632-7c6cdc9d4587";
const imgRectangle2104 =
  "https://www.figma.com/api/mcp/asset/680c8a4c-387b-46be-a7b2-96b35660a0be";
const imgRectangle2105 =
  "https://www.figma.com/api/mcp/asset/958ab284-5d38-4e15-a349-4e13c9534e3b";
const imgRectangle10830 =
  "https://www.figma.com/api/mcp/asset/23e6082a-2114-463c-b5fe-71f14d1061dd";

const specialists = [
  {
    name: "Albert Flores",
    avatar: imgImage400,
    highlightAvatar: true,
    status: { type: "offline", text: "Last online - 10:59 PM" },
    recentProject: "Advanced Route Running",
    sessions: 20,
    accent: "solid",
  },
  {
    name: "Kristin Watson",
    avatar: imgRectangle2104,
    highlightAvatar: false,
    status: { type: "online", text: "Active Now" },
    recentProject: "Advanced Route Running",
    sessions: 23,
    accent: "ghost",
  },
  {
    name: "Courtney Henry",
    avatar: imgRectangle2105,
    highlightAvatar: false,
    status: { type: "online", text: "Active Now" },
    recentProject: "Advanced Route Running",
    sessions: 23,
    accent: "ghost",
  },
  {
    name: "Arlene McCoy",
    avatar: imgRectangle2104,
    highlightAvatar: false,
    status: { type: "offline", text: "Last online - 10:59 PM" },
    recentProject: "Advanced Route Running",
    sessions: 23,
    accent: "ghost",
  },
  {
    name: "Bessie Cooper",
    avatar: imgRectangle2105,
    highlightAvatar: false,
    status: { type: "offline", text: "Last online - 10:59 PM" },
    recentProject: "Advanced Route Running",
    sessions: 23,
    accent: "ghost",
  },
  {
    name: "Annette Black",
    avatar: imgRectangle10830,
    highlightAvatar: false,
    status: { type: "offline", text: "Last online - 10:59 PM" },
    recentProject: "Advanced Route Running",
    sessions: 23,
    accent: "ghost",
  },
  {
    name: "Theresa Webb",
    avatar: imgImage400,
    highlightAvatar: true,
    status: { type: "offline", text: "Last online - 10:59 PM" },
    recentProject: "Advanced Route Running",
    sessions: 23,
    accent: "ghost",
  },
  {
    name: "Marvin McKinney",
    avatar: imgRectangle10830,
    highlightAvatar: false,
    status: { type: "online", text: "Active Now" },
    recentProject: "Advanced Route Running",
    sessions: 23,
    accent: "ghost",
  },
  {
    name: "Ralph Edwards",
    avatar: imgImage400,
    highlightAvatar: true,
    status: { type: "offline", text: "Last online - 10:59 PM" },
    recentProject: "Advanced Route Running",
    sessions: 23,
    accent: "ghost",
  },
];

function StatusTag({ type, text }) {
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

function ViewDetailsButton({ variant }) {
  if (variant === "solid") {
    return (
      <button className="w-full rounded-full bg-gradient-to-b from-[#457ff3] from-10% to-[#276AEE] to-63% text-white text-xs font-medium py-3 shadow-[0_10px_30px_rgba(46,107,232,0.35)] transition hover:opacity-95">
        View Details
      </button>
    );
  }

  return (
    <button className="w-full rounded-full bg-[#e8f0fe] border border-[#1d55d81a] text-[#2a6be8] text-xs font-medium py-3 transition hover:bg-[#dce6ff]">
      View Details
    </button>
  );
}

export default function page() {
  return (
    <div className="min-h-screen p-6 flex justify-center">
      <div className="w-full max-w-6xl bg-white/30 rounded-[24px] p-6">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {specialists.map(
            ({
              name,
              avatar,
              highlightAvatar,
              status,
              recentProject,
              sessions,
              accent,
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
                    <h3 className="text-[#141B34] text-base font-medium">
                      {name}
                    </h3>
                    <p className="text-xs text-[#141b34b3]">
                      Spint Specialist • Joined Jan 2025
                    </p>
                    <StatusTag type={status.type} text={status.text} />
                  </div>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent to-transparent" />

                <div className="flex items-start justify-between text-sm font-medium text-[#141B34]">
                  <div>
                    <p className="text-xs text-[#141b34b3] mb-1">
                      Recently Worked On
                    </p>
                    <p className="text-sm font-medium text-[#141B34]">
                      {recentProject}
                    </p>
                  </div>
                  <span className="text-sm font-medium text-[#141B34]">
                    {sessions}
                  </span>
                </div>

                <ViewDetailsButton variant={accent} />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
