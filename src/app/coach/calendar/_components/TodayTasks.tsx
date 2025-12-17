import { AnimatedButton } from "@/components/ui/Button";
import Icon from "../../task/content/_components/icon";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function TodayTasks() {
  const today = new Date();
  const formattedDate = `${months[today.getMonth()]} ${today.getDate()}, ${today.getFullYear()}`;
  
  return (
    <div className="bg-white/60 p-4 rounded-2xl border border-white w-1/3 h-auto self-start">
      <div className="flex items-center justify-between">
        <h2 className="font-medium">{formattedDate}</h2>
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-blue-600"></span>
          <span className="text-xs text-blue-600 font-medium">Today</span>
        </div>
      </div>
      <h4 className="font-medium text-xs text-black/70 mt-8">My Tasks Today</h4>
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-xs line-through">
              Upload Passing Drill Video
            </p>
            <p className="text-[10px] text-black/70 mt-1">Due: 11:59 PM</p>
          </div>
          <div>
            <Icon name="checkmark_square_02" height={20} width={20} />
          </div>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div>
            <p className="font-medium text-xs">Upload Passing Drill Video</p>
            <p className="text-[10px] text-black/70 mt-1">Due: 11:59 PM</p>
          </div>
          <div>
            <Icon name="checkmark_square_02_void" height={20} width={20} />
          </div>
        </div>
      </div>
      <h4 className="font-medium text-xs text-black/70 mt-4">My Tasks Today</h4>
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] text-black/70 mt-1">Due: 11:59 PM</p>
          </div>
          <div>
            <Icon name="checkmark_square_02" height={20} width={20} />
          </div>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div>
            <p className="font-medium text-xs w-[151px]">
              Message Mike Jack about Membership
            </p>
            <p className="text-[10px] text-black/70 mt-1">Due: 11:59 PM</p>
          </div>
          <div>
            <Icon name="message_02" height={20} width={20} />
          </div>
        </div>
      </div>
      <AnimatedButton
        style={{
          borderRadius: "40px",
          background: "linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%)",
        }}
        className="flex items-center justify-center  text-white font-medium px-4 py-2 rounded-full hover:bg-blue-700 text-sm mt-4"
      >
        Start Task
      </AnimatedButton>
    </div>
  );
}