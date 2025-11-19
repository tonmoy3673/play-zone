import Icon from "@/utils/icon";
import Select from "@/components/ui/Select";

export const filters = [
  {
    label: "All Status",
    options: [
      { label: "18-24", value: "18_24" },
      { label: "25-34", value: "25_34" },
      { label: "35-44", value: "35_44" },
      { label: "45+", value: "45_plus" },
    ],
  },
  {
    label: "All Users",
    options: [
      { label: "Junior", value: "junior" },
      { label: "Mid", value: "mid" },
      { label: "Senior", value: "senior" },
      { label: "Lead", value: "lead" },
    ],
  },
  {
    label: "All Categories",
    options: [
      { label: "Junior", value: "junior" },
      { label: "Mid", value: "mid" },
      { label: "Senior", value: "senior" },
      { label: "Lead", value: "lead" },
    ],
  },
  {
    label: "All Agents",
    options: [
      { label: "Junior", value: "junior" },
      { label: "Mid", value: "mid" },
      { label: "Senior", value: "senior" },
      { label: "Lead", value: "lead" },
    ],
  },
];

const Filter = () => {
  return (
    <div className="flex flex-wrap gap-2 justify-between">
      <div className="flex gap-2 flex-wrap">
        {filters.map((item, idx) => (
          <Select
            key={idx}
            placeholder={item.label}
            options={item.options}
            className="h-11 bg-[#457FF326] text-dark/70 border-[#1556D81A] rounded-full"
          />
        ))}
      </div>

      <div className="w-full max-w-[370px] flex-1 h-11 px-4 py-3 rounded-full bg-white/60 border-white border flex items-center gap-3">
        <Icon name="search" height={20} width={20} className="text-[#595F70]" />
        <input
          type="text"
          placeholder="Search ticket..."
          className="w-full  bg-transparent text-xs font-medium placeholder:text-dark/70 text-dark outline-none"
        />
      </div>
    </div>
  );
};

export default Filter;
