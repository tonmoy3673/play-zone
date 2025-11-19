import Card from "@/components/ui/Card";
import Icon, { IconName } from "@/utils/icon";

export type AnnounceProp = {
  title: string;
  description: string;
  action: "System Update" | "Promotion" | "Maintenance";
  status: "Active" | "Scheduled";
  push: "On" | "Off";
  email: "On" | "Off";
  target: string;
  date: string;
};

const AnnounceCard = ({ announce }: { announce: AnnounceProp }) => {
  return (
    <Card className="bg-white/60 md:rounded-2xl">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="text-sm font-medium">
            <span
              className={
                announce.action == "System Update"
                  ? "text-[#F03]"
                  : announce.action == "Promotion"
                  ? "#784EF8"
                  : announce.action == "Maintenance"
                  ? "warning-gradient-text"
                  : "text-dark/70"
              }
            >
              System Update
            </span>
            <span
              className={
                announce.status == "Active"
                  ? "success-gradient-text"
                  : "text-dark/80"
              }
            >
              {" "}
              • Active
            </span>
            <span className="text-dark/70"> • Created: Jan 16, 2025</span>
          </div>

          <div className="flex items-center gap-4">
            <button>
              <Icon
                name="task_edit"
                height={20}
                width={20}
                className="text-[#595F70]"
              />
            </button>
            <button>
              <Icon
                name="eye"
                height={20}
                width={20}
                className="text-[#595F70]"
              />
            </button>
            <button>
              <Icon
                name="delete"
                height={20}
                width={20}
                className="text-[#595F70]"
              />
            </button>
          </div>
        </div>

        <div className="space-y-1 text-dark max-w-[848px]">
          <h3 className="text-base sm:text-lg md:text-xl font-medium">
            {announce.title}
          </h3>
          <p className="line-clamp-2 text-sm">{announce.description}</p>
        </div>

        <div className="flex items-center gap-y-2 gap-x-5 flex-wrap">
          {[
            {
              label: `Push: ${announce.push}`,
              icon: "eye" as IconName,
            },
            {
              label: `Email: ${announce.email}`,
              icon: "mail_open" as IconName,
            },
            {
              label: `Target: ${announce.target}`,
              icon: "users" as IconName,
            },
          ].map((item, actionIdx) => (
            <div key={actionIdx} className="flex items-center gap-1">
              <Icon
                name={item.icon}
                height={20}
                width={20}
                className="text-[#595F70]"
              />
              <span className="text-dark/70 text-xs">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default AnnounceCard;
