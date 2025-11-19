import Card from "@/components/ui/Card";
import { SectionHeader } from "@/components/shared/SectionHeader";

const data = {
  Status: "Published",
  Version: 2.2,
  "Last Update": "Jun 7, 2025",
  "Uploaded by": "Admin",
};

const DocumentStatus = () => {
  return (
    <Card className="md:rounded-2xl">
      <SectionHeader
        title="Document Status"
        titleClass="text-base"
        className="mb-4"
      />

      <ul className="pt-4 border-t border-[#EFF3F4] space-y-4">
        {Object.entries(data).map(([key, value]) => (
          <li key={key} className="flex items-center justify-between flex-wrap">
            <span className="text-xs text-dark/70">{key}</span>
            <strong
              className={`font-medium text-sm ${
                key === "Status" && value === "Published"
                  ? "success-gradient-text"
                  : "text-dark"
              }`}
            >
              {value}
            </strong>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default DocumentStatus;
