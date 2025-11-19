import Icon from "@/utils/icon";
import { AnimatedButton } from "@/components/ui/Button";
import AddPost from "./AddPost";

const TopButtons = () => {
  return (
    <div className="flex gap-2 flex-wrap">
      <AnimatedButton className="bg-[#1556D826] border border-[#1556D81A] whitespace-nowrap px-3 h-11 flex items-center rounded-full gap-2 text-sm font-medium">
        <Icon
          name="calendar"
          height={20}
          width={20}
          className="text-[#276AEE]"
        />
        <span className="primary-gradient-text">Schedule Post</span>
      </AnimatedButton>

      <AddPost />
    </div>
  );
};

export default TopButtons;
