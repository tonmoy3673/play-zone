const imgEllipse7623 =
  "https://www.figma.com/api/mcp/asset/6495ed8d-8eb5-492e-909b-92d78fe1d2d2";
const imgImage341 =
  "https://www.figma.com/api/mcp/asset/24504356-5a06-4ade-9fc2-439b4a58bccc";
const imgRectangle2081 =
  "https://www.figma.com/api/mcp/asset/53e35d7e-7d8a-4c98-9c09-38895d91aabe";
const imgEllipse7627 =
  "https://www.figma.com/api/mcp/asset/0f67c0a4-8b9b-41ee-89ee-9dc393f52fb3";
const imgEllipse7628 =
  "https://www.figma.com/api/mcp/asset/f737538f-c6bc-4ff5-b251-4e4da5214939";
const imgEllipse7624 =
  "https://www.figma.com/api/mcp/asset/068c79f3-7e1e-409b-a2e0-788c56314c54";
const imgEllipse7625 =
  "https://www.figma.com/api/mcp/asset/afea0b8e-2ff9-44c3-b0fb-6cc99545f60e";
const imgRectangle2103 =
  "https://www.figma.com/api/mcp/asset/ec4546a1-b1de-47d8-8b89-bdb678b8e2f3";
const imgRectangle2104 =
  "https://www.figma.com/api/mcp/asset/06e8b82f-89d8-4d37-89fb-f67227c23f9f";
const imgRectangle2105 =
  "https://www.figma.com/api/mcp/asset/3a54a353-60dd-4822-9ec9-6850d51de3da";
const img =
  "https://www.figma.com/api/mcp/asset/a417f88b-8b53-4672-9a0e-61f7efb4e067";
const imgVector6893 =
  "https://www.figma.com/api/mcp/asset/6896d7a0-0a92-4102-a98a-094c13ced489";
const img1 =
  "https://www.figma.com/api/mcp/asset/4ffacbb1-8866-4af3-8807-36b5b826e81c";
const img2 =
  "https://www.figma.com/api/mcp/asset/8b56dc8d-467c-41f8-864d-dc5be9dd210a";
const img3 =
  "https://www.figma.com/api/mcp/asset/8527a502-74ff-4241-b0b0-fed6d7e1bb93";
const img4 =
  "https://www.figma.com/api/mcp/asset/ab74f77d-6252-444e-a366-e294eaa7a544";

const athleteList = [
  imgEllipse7627,
  imgEllipse7628,
  imgEllipse7624,
  imgEllipse7625,
];
const runningBehind = [
  { img: imgRectangle2103, name: "Jason Martinez" },
  { img: imgRectangle2104, name: "Michael Thompson" },
  { img: imgRectangle2105, name: "David Chen" },
];
export default function ActiveTask() {
  return (
    <div className="flex justify-center my-5">
      <div className="bg-[rgba(255,255,255,0.3)] rounded-3xl p-6 flex flex-col max-w-full min-h-[420px] relative overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-start mb-6 w-full">
          <div className="flex gap-3 items-center">
            <div className="bg-[rgba(255,255,255,0.3)] rounded-xl w-12 h-12 flex items-center justify-center">
              <img src={img2} alt="video" className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[#141B34] text-lg font-medium leading-6 font-sans">
                Passing Drill Submission
              </div>
              <div className="text-xs text-[#141b34b3] leading-4">
                Video Submission • Football • QB Skills
              </div>
            </div>
            <div className="bg-[#ff65651a] text-[#ff0033] rounded-full px-3 py-1 text-xs font-medium ml-4 flex items-center h-6">
              Due Today
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-[rgba(255,255,255,0.3)] rounded-full w-12 h-12 flex items-center justify-center">
              <img src={img3} alt="bell" className="w-6 h-6" />
            </div>
            <div className="bg-[rgba(255,255,255,0.3)] rounded-full w-12 h-12 flex items-center justify-center">
              <img src={img4} alt="more" className="w-6 h-6" />
            </div>
          </div>
        </div>
        {/* Lower panels */}
        <div className="flex gap-6 w-full">
          {/* Task Details */}
          <div className="bg-[rgba(255,255,255,0.6)] rounded-2xl p-5 flex-1 min-w-[290px] max-w-[340px] flex flex-col">
            <div className="text-[#141B34] text-sm font-medium font-sans mb-3">
              Task Details
            </div>
            <div className="text-xs text-[#141b34b3] leading-[1.5] mb-6">
              Submit a 2-minute video demonstrating the three-step and five-step
              drop passing drills as shown in the training video.
            </div>
            <div className="font-medium text-sm text-[#141B34] mb-1">
              Due Date
            </div>
            <div className="flex items-center gap-1 mb-4">
              <img src={img} alt="calendar" className="w-4 h-4" />
              <span className="text-xs text-[#141b34b3]">
                June 7, 2023 (11:59 PM)
              </span>
            </div>
            <div className="font-medium text-sm text-[#141B34] mb-1">
              Created By
            </div>
            <div className="flex items-center gap-2 mt-1">
              <img
                src={imgEllipse7623}
                alt="Coach Michael Johnson"
                className="w-6 h-6 rounded-full"
              />
              <span className="text-xs font-medium text-[#141B34]">
                Coach Michael Johnson
              </span>
            </div>
          </div>
          {/* Progress */}
          <div className="bg-[rgba(255,255,255,0.6)] rounded-2xl p-5 flex-1 min-w-[280px] max-w-[340px] flex flex-col">
            <div className="text-[#141B34] text-sm font-medium mb-3">
              Progress
            </div>
            <div className="flex justify-between text-[10px] font-medium mb-2 text-[#141B34]">
              <span>7 of 15 Athletes Submitted</span>
              <span>47%</span>
            </div>
            <div className="bg-[#c4d4fd] rounded-full h-2 mb-4 overflow-hidden">
              <div
                className="bg-[#456ff3] h-2 rounded-full w-[47%]"
                style={{ width: "47%" }}
              ></div>
            </div>
            <div className="text-sm font-semibold text-[#141B34] mb-2">
              Assigned Athletes
            </div>
            <div className="flex items-center mb-4 justify-between">
              {athleteList.map((imgSrc, idx) => (
                <img
                  key={idx}
                  src={imgSrc}
                  className="w-6 h-6 rounded-full border-2 border-white -mr-1"
                  alt={`athlete-${idx}`}
                />
              ))}
              <span className="bg-white/30 text-[10px] font-medium relative z-10 ml-1 w-6 h-6 flex items-center justify-center rounded-full border border-gray-200">
                +11
              </span>
              <button className="rounded-lg bg-[#e8f0fe] text-[10px] px-4 py-2 font-medium text-[#456ff3] cursor-pointer">
                View all athletes
              </button>
            </div>

            <div className="text-sm font-medium text-[#141B34] mb-2">
              Completion Status
            </div>
            <div className="flex gap-2 items-center">
              <span className="bg-gradient-to-b from-[rgba(0,226,128,0.05)] to-[rgba(0,124,70,0.12)] border border-[rgba(0,226,128,0.1)] rounded-[61px] flex items-center px-4 py-3 gap-3 text-[#027a48] text-[14px] font-medium">
                Completed{" "}
                <span className="ml-1 bg-[#027a48] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                  6
                </span>
              </span>
              <span className="bg-gradient-to-b from-[rgba(255,0,51,0.05)] to-[rgba(255,0,51,0.12)] border border-[rgba(255,0,51,0.1)] rounded-[61px] flex items-center px-4 py-3 gap-3 text-[#ff0033] text-[14px] font-medium">
                Pending{" "}
                <span className="ml-1 bg-[#ff0033] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                  6
                </span>
              </span>
            </div>
          </div>
          {/* Running Behind */}
          <div className="bg-[rgba(255,255,255,0.6)] rounded-2xl p-5 flex-1 min-w-[280px] max-w-[340px] flex flex-col">
            <div className="text-[#141B34] text-sm font-medium mb-3">
              Running Behind
            </div>
            <div className="flex flex-col gap-4 mb-4">
              {runningBehind.map(({ img, name }, idx) => (
                <div className="flex items-center gap-3" key={idx}>
                  <img
                    src={img}
                    className="w-10 h-10 rounded-full object-cover"
                    alt={name}
                  />
                  <span className="font-semibold text-[10px] text-[#141B34]">
                    {name}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex gap-2 mt-auto">
              <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#e8f0fe] text-[#456ff3] border border-[#1556d81a] text-sm font-medium">
                <img src={img1} className="w-5 h-5" alt="remind" />
                Send Reminder
              </button>
              <button className="flex items-center justify-center gap-2 text-white font-normal px-6 py-3 rounded-full bg-gradient-to-b from-[#5C8FF7] from-10% to-[#276AEE] to-63% hover:bg-blue-700">
                See all
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
