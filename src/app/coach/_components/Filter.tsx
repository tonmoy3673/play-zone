import Icon from "@/utils/icon";
import Select from "@/components/ui/Select";

export const filters = [
  {
    label: "Sports",
    options: [
      { label: "18-24", value: "18_24" },
      { label: "25-34", value: "25_34" },
      { label: "35-44", value: "35_44" },
      { label: "45+", value: "45_plus" },
    ],
  },
  {
    label: "Position",
    options: [
      { label: "Junior", value: "junior" },
      { label: "Mid", value: "mid" },
      { label: "Senior", value: "senior" },
      { label: "Lead", value: "lead" },
    ],
  },
  {
    label: "Age Group",
    options: [
      { label: "Junior", value: "junior" },
      { label: "Mid", value: "mid" },
      { label: "Senior", value: "senior" },
      { label: "Lead", value: "lead" },
    ],
  },
  {
    label: "Region",
    options: [
      { label: "Junior", value: "junior" },
      { label: "Mid", value: "mid" },
      { label: "Senior", value: "senior" },
      { label: "Lead", value: "lead" },
    ],
  },
  {
    label: "Skill Level",
    options: [
      { label: "Junior", value: "junior" },
      { label: "Mid", value: "mid" },
      { label: "Senior", value: "senior" },
      { label: "Lead", value: "lead" },
    ],
  },
  {
    label: "Most Active",
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
    <div className="flex flex-wrap gap-2 mb-5 justify-between">
      <div className="flex gap-2 flex-wrap">
        <button className="h-12 px-6 flex items-center bg-primary-gradient border border-[#1556D84D] text-white rounded-full">
          All
        </button>
        {filters.map((item, idx) => (
          <Select
            key={idx}
            placeholder={item.label}
            options={item.options}
            className="h-12 px-3 bg-[#457FF326] text-dark/70 border-[#1556D81A] rounded-full"
          />
        ))}
        <button className="h-12 px-3 flex items-center gap-1.5 bg-[#457FF326] text-dark/70 border-[#1556D81A] border rounded-full">
          <Icon name="checkmark_circle" height={20} width={20} />
          Verified Only
        </button>
      </div>

      <div className="w-full max-w-[293px] flex-1 h-12 px-4 py-3 rounded-full bg-white/60 border-white border flex items-center gap-3">
        <Icon name="search" height={20} width={20} className="text-[#595F70]" />
        <input
          type="text"
          placeholder="Coach name / sports / tag"
          className="w-full  bg-transparent text-xs font-medium placeholder:text-dark/70 text-dark outline-none"
        />
      </div>
    </div>
  );
};

export default Filter;
