import Icon from "@/utils/icon";
import Select from "@/components/ui/Select";

export const filters = [
  {
    label: "All Ages",
    value: "all_ages",
    options: [
      { label: "18-24", value: "18_24" },
      { label: "25-34", value: "25_34" },
      { label: "35-44", value: "35_44" },
      { label: "45+", value: "45_plus" },
    ],
  },
  {
    label: "All Level",
    value: "all_level",
    options: [
      { label: "Junior", value: "junior" },
      { label: "Mid", value: "mid" },
      { label: "Senior", value: "senior" },
      { label: "Lead", value: "lead" },
    ],
  },
  {
    label: "All Position",
    value: "all_position",
    options: [
      { label: "Frontend", value: "frontend" },
      { label: "Backend", value: "backend" },
      { label: "Fullstack", value: "fullstack" },
      { label: "Designer", value: "designer" },
    ],
  },
  {
    label: "Last 30 Days",
    value: "last_30_days",
    options: [
      { label: "Today", value: "today" },
      { label: "Last 7 Days", value: "last_7_days" },
      { label: "Last 30 Days", value: "last_30_days" },
      { label: "Last 90 Days", value: "last_90_days" },
    ],
  },
  {
    label: "All Status",
    value: "all_status",
    options: [
      { label: "Active", value: "active" },
      { label: "Pending", value: "pending" },
      { label: "Inactive", value: "inactive" },
      { label: "Closed", value: "closed" },
    ],
  },
];

const Filter = () => {
  return (
    <div className="flex flex-wrap gap-2 mb-5 justify-between">
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
      <div className="w-full max-w-[287px] h-11 px-4 py-3 rounded-full bg-white/60 border-white border flex items-center gap-3">
        <Icon name="search" height={20} width={20} className="text-[#595F70]" />
        <input
          type="text"
          placeholder="Search athletes..."
          className="w-full  bg-transparent text-xs font-medium placeholder:text-dark/70 text-dark outline-none"
        />
      </div>
    </div>
  );
};

export default Filter;
