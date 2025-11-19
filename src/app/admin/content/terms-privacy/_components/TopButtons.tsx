import Icon from "@/utils/icon";
import { AnimatedButton } from "@/components/ui/Button";
import Select from "@/components/ui/Select";

const TopButtons = () => {
  return (
    <div className="mb-5 flex items-center gap-4 justify-between flex-wrap">
      <div className="flex items-center gap-2 flex-wrap">
        <Select
          placeholder="All Status"
          options={[
            {
              label: "Status One",
              value: "Status One",
            },
            {
              label: "Status Two",
              value: "Status Two",
            },
          ]}
          className="h-11 bg-[#457FF326] text-dark/70 border-[#1556D81A] rounded-full"
        />

        <AnimatedButton className="px-4 inline-flex items-center gap-1.5 h-11 bg-[#457FF326] text-dark/70 border-[#1556D81A] border rounded-full text-sm font-medium transition">
          <Icon
            className="text-[#595F70]"
            name="refresh"
            height={20}
            width={20}
          />
          Version History
        </AnimatedButton>
      </div>

      <div className="flex gap-2 flex-wrap">
        <AnimatedButton className="bg-[#1556D826] border border-[#1556D81A] whitespace-nowrap px-3 h-11 flex items-center rounded-full gap-2 text-sm font-medium">
          <Icon name="eye" height={20} width={20} className="text-[#5C8FF7]" />
          <span className="primary-gradient-text">Preview</span>
        </AnimatedButton>
        <AnimatedButton className="bg-primary-gradient border border-[#1556D84D] whitespace-nowrap px-3 h-11 flex items-center rounded-full gap-2 text-sm font-medium text-white">
          <Icon name="download" height={20} width={20} />
          Save Change
        </AnimatedButton>
      </div>
    </div>
  );
};

export default TopButtons;
