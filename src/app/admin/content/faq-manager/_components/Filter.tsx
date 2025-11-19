import Icon from "@/utils/icon";
import Select from "@/components/ui/Select";

const Filter = () => {
  return (
    <div className="flex flex-1 gap-2 flex-wrap">
      <div className="w-full max-w-[370px] h-11 px-4 py-3 rounded-full bg-white/60 border-white border flex items-center gap-3">
        <Icon name="search" height={20} width={20} className="text-[#595F70]" />
        <input
          type="text"
          placeholder="Search Frequently Asked Questions..."
          className="w-full  bg-transparent text-xs font-medium placeholder:text-dark/70 text-dark outline-none"
        />
      </div>

      <Select
        placeholder={"All Categories"}
        options={[
          {
            label: "Category",
            value: "Category",
          },
        ]}
        className="h-11 bg-[#457FF326] text-dark/70 border-[#1556D81A] rounded-full"
      />
    </div>
  );
};

export default Filter;
