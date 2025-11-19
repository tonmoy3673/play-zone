import Checkbox from "@/components/ui/Checkbox";
import { SectionHeader } from "@/components/shared/SectionHeader";
import Card from "@/components/ui/Card";

const Publishing = () => {
  return (
    <Card className="bg-white/60 md:rounded-2xl">
      <SectionHeader
        title="Publishing"
        titleClass="text-base"
        className="mb-4"
      />

      <ul className="pt-4 border-t border-[#EFF3F4] space-y-4">
        <li className="flex items-center justify-between flex-wrap">
          <span className="text-sm text-dark font-medium">Auto-publish</span>
          <Checkbox />
        </li>
        <li className="flex items-center justify-between flex-wrap">
          <span className="text-sm text-dark font-medium">Notify users</span>
          <Checkbox />
        </li>
        <li className="flex items-center justify-between flex-wrap">
          <span className="text-sm text-dark font-medium">
            Email notification
          </span>
          <Checkbox />
        </li>
      </ul>
    </Card>
  );
};

export default Publishing;
