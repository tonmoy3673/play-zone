import ActiveTasks from "../awaiting-review/_components/ActiveTasks";
import RecentCompletions from "../awaiting-review/_components/RecentCompletions";

const imgImage341 =
  "https://www.figma.com/api/mcp/asset/f404a60f-f267-4172-bb88-c7abdd8d669c";
const imgImage48 =
  "https://www.figma.com/api/mcp/asset/68a5a488-d6e2-472c-860b-364495748d35";
const imgImage400 =
  "https://www.figma.com/api/mcp/asset/7a5c3c5c-ca96-4cfa-bbb4-af99a86e5284";
const imgImage416 =
  "https://www.figma.com/api/mcp/asset/ae2022fe-4f3e-42d7-9bc9-85af2d3ffca7";
const imgBackgroun19 =
  "https://www.figma.com/api/mcp/asset/8810e77b-177a-4b16-ac8e-4495baadfc27";
const imgRectangle2081 =
  "https://www.figma.com/api/mcp/asset/6378a9db-9ebf-4918-ac96-b534a226304d";
const imgRectangle2082 =
  "https://www.figma.com/api/mcp/asset/7ff3d649-4cfc-4aad-bbe8-9f37338c04c8";
const imgImage401 =
  "https://www.figma.com/api/mcp/asset/505e2331-a18f-4aef-881e-873f086fc52b";
const imgImage402 =
  "https://www.figma.com/api/mcp/asset/6bfad4f1-bd87-47c8-b04f-4ca97e4b9fb7";
const imgImage403 =
  "https://www.figma.com/api/mcp/asset/a5b9fa75-f84e-4452-87ed-dc60dce0416e";
const imgLine630 =
  "https://www.figma.com/api/mcp/asset/bf4480a3-0ad6-4a45-98ed-80fa46b6bbdf";
const imgLine632 =
  "https://www.figma.com/api/mcp/asset/f4a90122-5f2a-4074-a606-8195119cf649";
const imgGroup2085665473 =
  "https://www.figma.com/api/mcp/asset/c16ff0cd-57b4-4686-a6e9-9865f1283534";
const img =
  "https://www.figma.com/api/mcp/asset/606bad94-7c42-452c-a732-206104c691c3";
const imgVector6897 =
  "https://www.figma.com/api/mcp/asset/5f035fc6-d591-48ff-be30-ce8674ea4bca";
const img1 =
  "https://www.figma.com/api/mcp/asset/03247949-0f09-4a76-89b6-75438466258f";
const img2 =
  "https://www.figma.com/api/mcp/asset/3b8a4b03-ce10-4323-b67e-242abcb8774b";
const img3 =
  "https://www.figma.com/api/mcp/asset/97311c0d-d719-4093-b917-f05adfb14f12";
const imgVector6898 =
  "https://www.figma.com/api/mcp/asset/04ddfddf-56e7-4299-8273-616e3ae69b82";
const img4 =
  "https://www.figma.com/api/mcp/asset/83f46ff9-21a7-400b-85d6-a1e219014032";
const img5 =
  "https://www.figma.com/api/mcp/asset/1d81b7e7-d787-4669-a9f7-b7b4c39b716f";
const img6 =
  "https://www.figma.com/api/mcp/asset/4ff7b84b-30ea-4f6b-a5a7-9a0a2b2287d5";
const img7 =
  "https://www.figma.com/api/mcp/asset/da5a3ad8-344e-4dd6-a6f1-54524495f02d";
const img8 =
  "https://www.figma.com/api/mcp/asset/7bb60705-e0c4-4c60-84c3-05b74abd644d";
const img9 =
  "https://www.figma.com/api/mcp/asset/58236974-857c-49fa-a3f5-461db74ce1d6";
const img10 =
  "https://www.figma.com/api/mcp/asset/6649b562-37bb-4dce-bb6a-011bfcc11cac";
const img11 =
  "https://www.figma.com/api/mcp/asset/1f38fc59-d58e-4961-bd9e-8d319bbb6f46";

interface CardData {
  title: string;
  value: string;
  icon: string;
  increase: string;
  increaseColor: string;
  nodeId: string;
}

const cardData: CardData[] = [
  {
    title: "Current Tasks",
    value: "4",
    icon: img5,
    increase: "12% increase",
    increaseColor: "rgba(56, 170, 75, 1)",
    nodeId: "2308:11028",
  },
  {
    title: "Complete Tasks",
    value: "20",
    icon: img7,
    increase: "3% increase",
    increaseColor: "rgba(56, 170, 75, 1)",
    nodeId: "2308:11041",
  },
  {
    title: "Avg Score",
    value: "94%",
    icon: img8,
    increase: "3% increase",
    increaseColor: "rgba(56, 170, 75, 1)",
    nodeId: "2308:11054",
  },
  {
    title: "Day Streak",
    value: "12",
    icon: img9,
    increase: "3% increase",
    increaseColor: "rgba(56, 170, 75, 1)",
    nodeId: "2308:11067",
  },
];

const UserTasks = () => {
  return (
    <div
      className="bg-[#e7f2f5] overflow-clip relative rounded-[24px] size-full p-8"
      data-node-id="2308:10852"
    >
      {/* Header */}
      <div
        className="flex items-center justify-between mb-8"
        data-node-id="2308:11076"
      >
        <div
          className="bg-[rgba(255,255,255,0.3)] overflow-clip relative rounded-full size-14 flex items-center justify-center"
          data-node-id="2308:11077"
        >
          <button className="transform rotate-180">
            <img src={img10} alt="Back" className="size-6" />
          </button>
        </div>
        <div
          className="flex items-center justify-between w-full ml-4"
          data-node-id="2308:11080"
        >
          <div>
            <h1
              className="text-3xl font-semibold text-dark"
              data-node-id="2308:11082"
            >
              Sarah Chen - Task Overview
            </h1>
            <p className="text-xs text-dark/70" data-node-id="2308:11083">
              Personalized task dashboard and completion tracking
            </p>
          </div>
          <button
            className="border border-[rgba(21,86,216,0.3)] rounded-full px-6 py-4 flex items-center gap-2 text-white text-sm font-medium"
            data-node-id="2308:11084"
          >
            <img src={img11} alt="Add task" className="size-6" />
            Assign New Task
          </button>
        </div>
      </div>

      {/* User Profile Section */}
      <div
        className="bg-[rgba(255,255,255,0.3)] rounded-3xl p-8 mb-8 relative h-[310px] overflow-hidden"
        data-node-id="2308:10854"
        style={{
          backgroundImage: `url(${imgImage48})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
          data-node-id="2308:10857"
        />
        <div className="relative z-10 flex items-start justify-between">
          <div className="flex flex-col gap-3">
            <div className="relative">
              <img
                src={imgImage400}
                alt="Jason Martinez"
                className="w-14 h-14 rounded-full border-2 border-white"
              />
              <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                <div className="bg-black/50 border-[0.93px] border-white rounded-full px-2 py-1 flex items-center gap-1">
                  <img
                    src={imgImage416}
                    alt="Elite Athlete"
                    className="size-4"
                  />
                  <span className="text-white text-[10px] font-medium">
                    Elite Athlete
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-medium text-white">Jason Martinez</h2>
              <p className="text-xs text-white/80">
                Sprint Specialist • Joined: Jan 2025
              </p>
            </div>
            <div className="flex gap-6 text-white mt-16">
              <div className="text-center">
                <p className="text-2xl font-semibold">23</p>
                <p className="text-[10px] text-white/70">Total Tasks</p>
              </div>
              <img src={imgLine630} alt="divider" className="h-9 self-center" />
              <div className="text-center">
                <p className="text-2xl font-semibold">4</p>
                <p className="text-[10px] text-white/70">Active Tasks</p>
              </div>
              <img src={imgLine632} alt="divider" className="h-9 self-center" />
              <div className="text-center">
                <p className="text-2xl font-semibold">20</p>
                <p className="text-[10px] text-white/70">Completed</p>
              </div>
              <img src={imgLine632} alt="divider" className="h-9 self-center" />
              <div className="text-center">
                <p className="text-2xl font-semibold">3</p>
                <p className="text-[10px] text-white/70">In Progress</p>
              </div>
              <img src={imgLine632} alt="divider" className="h-9 self-center" />
              <div className="text-center">
                <p className="text-2xl font-semibold">0</p>
                <p className="text-[10px] text-white/70">Overdue</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-6">
            <button className="border border-[rgba(21,86,216,0.3)] rounded-full px-4 py-3 text-white text-xs">
              View program profile
            </button>
            <div
              className="bg-[rgba(255,255,255,0.08)] border border-[#e7f2f5] rounded-2xl p-3 w-[154px] h-[135px] relative overflow-hidden"
              style={{
                backgroundImage: `url(${imgBackgroun19})`,
                backgroundSize: "cover",
              }}
            >
              <p className="text-xs text-dark">Overall Progress</p>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <img
                  src={imgGroup2085665473}
                  className="w-[100px] h-[100px]"
                  alt="Progress chart"
                />
                <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-base font-medium text-dark">
                  64%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        data-node-id="2308:11027"
      >
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-[rgba(255,255,255,0.3)] rounded-3xl p-5"
            data-node-id={card.nodeId}
          >
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xs font-semibold text-dark">{card.title}</h3>
              <div className="bg-white/60 rounded-full size-10 flex items-center justify-center">
                <img src={card.icon} alt={card.title} className="size-5" />
              </div>
            </div>
            <div>
              <p className="text-3xl font-semibold text-dark">{card.value}</p>
              <div className="flex items-center gap-1 text-xs text-dark/70">
                <img src={img6} alt="increase" className="size-3.5" />
                <span style={{ color: card.increaseColor }}>
                  {card.increase}
                </span>
                <span> from last month</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Task Lists */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Active Tasks */}

        <ActiveTasks />

        {/* Recent Completions */}
        <RecentCompletions />
      </div>
    </div>
  );
};

export default UserTasks;
