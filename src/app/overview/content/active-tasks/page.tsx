import { AnimatedButton } from "@/components/ui/Button";
import { Plus } from "lucide-react";
import ActiveTask from "../_components/ActiveTask";

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

export default function page() {
  return (
    <div>
      <div className="flex justify-between items-center my-5 px-5">
        <p className="text-3xl font-semibold">Active Tasks in Progress</p>
        <AnimatedButton
          style={{
            borderRadius: "40px",
            background:
              "linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%)",
          }}
          className="flex items-center justify-center gap-2 text-white font-normal px-5 py-4 rounded-full hover:bg-blue-700 "
        >
          <span>
            <Plus />
          </span>
          Create New Task
        </AnimatedButton>
      </div>
      <div>
        <ActiveTask />
        <ActiveTask />
        <ActiveTask />
        <ActiveTask />
      </div>
    </div>
  );
}
