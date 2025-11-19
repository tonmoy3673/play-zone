import Icon from "@/utils/icon";
import { AnimatedButton } from "@/components/ui/Button";

const TopHeader = () => {
  return (
    <div className="flex items-center justify-between gap-2 mb-6 flex-wrap">
      <h2 className="text-2xl font-semibold text-dark">Security & Logs</h2>

      <div className="flex gap-2 flex-wrap">
        <AnimatedButton className="bg-[#1556D826] border border-[#1556D81A] whitespace-nowrap px-4 py-2.5 md:px-6 md:py-4 md:h-14 flex items-center rounded-full gap-2 text-sm font-medium">
          <Icon
            name="refresh"
            height={20}
            width={20}
            className="text-[#276AEE]"
          />
          <span className="primary-gradient-text">Refresh</span>
        </AnimatedButton>

        <AnimatedButton className="bg-primary-gradient border border-[#1556D84D] whitespace-nowrap px-4 py-2.5 md:px-6 md:py-4 md:h-14 flex items-center rounded-full gap-2 text-sm font-medium text-white">
          <Icon name="download" height={20} width={20} />
          Export Logs
        </AnimatedButton>
      </div>
    </div>
  );
};

export default TopHeader;
