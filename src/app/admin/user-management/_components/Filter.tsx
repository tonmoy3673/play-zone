import Select from "@/components/ui/Select";
import Icon from "@/utils/icon";

export const filters = [
  {
    label: "Position",
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
    label: "All Status",
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
    <>
      {filters.map((item, idx) => (
        <Select
          key={idx}
          placeholder={item.label}
          options={item.options}
          className="h-12 bg-[#457FF326] text-dark/70 border-[#1556D81A] rounded-full"
        />
      ))}

      <div className="w-[266] h-12 px-4 py-3 rounded-full bg-white/60 border-white border flex items-center gap-3">
        <Icon name="search" height={20} width={20} className="text-[#595F70]" />
        <input
          type="text"
          placeholder="Search User..."
          className="w-full  bg-transparent text-xs font-medium placeholder:text-dark/70 text-dark outline-none"
        />
      </div>
    </>
  );
};

export default Filter;
