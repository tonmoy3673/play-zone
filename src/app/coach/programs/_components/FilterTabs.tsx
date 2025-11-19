"use client";

interface FilterTab {
  label: string;
  count?: number;
}

interface FilterTabsProps {
  filters: FilterTab[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function FilterTabs({
  filters,
  activeFilter,
  onFilterChange,
}: FilterTabsProps) {
  return (
    <div className="flex gap-2 justify-center flex-wrap">
      {filters.map((filter) => (
        <button
          key={filter.label}
          onClick={() => onFilterChange(filter.label)}
          className={`px-4 py-2  rounded-3xl font-medium text-sm transition-all flex items-center gap-4 ${
            activeFilter === filter.label
              ? "from-[#5C8FF7] bg-gradient-to-b to-[#276AEE] text-white "
              : "bg-[#457ff326] hover:bg-blue-200 text-[#141b34b3]"
          }`}
        >
          {filter.label}
          {filter?.count && (
            <span
              className={`size-[24px] flex items-center justify-center rounded-full text-[10px] font-medium ${
                activeFilter === filter.label
                  ? "bg-white text-[#276AEE]"
                  : "text-dark border border-white"
              }`}
            >
              {filter.count}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
