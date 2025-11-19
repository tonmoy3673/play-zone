import Icon from "@/utils/icon";
import { AnimatedButton } from "@/components/ui/Button";

const TopHeader = () => {
  return (
    <div className="flex items-center justify-between mb-6 flex-wrap">
      <h2 className="text-2xl font-semibold text-dark">Content Control</h2>

      <AnimatedButton className="bg-primary-gradient border border-[#1556D84D] whitespace-nowrap px-4 py-2.5 md:px-6 md:py-4 md:h-14 flex items-center rounded-full gap-2 text-sm font-medium text-white">
        <Icon name="plus" height={20} width={20} />
        New Content
      </AnimatedButton>
    </div>
  );
};

export default TopHeader;
