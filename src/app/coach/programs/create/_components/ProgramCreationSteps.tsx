import Icon from "@/utils/icon";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

type StepStatus = "complete" | "current" | "pending";

type Step = {
  id: number;
  title: string;
  status: StepStatus;
};

const defaultSteps: Step[] = [
  { id: 1, title: "Program Type", status: "complete" },
  { id: 2, title: "Program Details", status: "complete" },
  { id: 3, title: "Tasks Management", status: "current" },
  { id: 4, title: "Role Permissions", status: "pending" },
  { id: 5, title: "Premium Features", status: "pending" },
  { id: 6, title: "Review & Launch", status: "pending" },
];

export default function ProgramCreationSteps({
  steps = defaultSteps,
}: {
  steps?: Step[];
}) {
  return (
    <Card className="bg-[#E7F2F5] p-6 md:p-8 lg:px-8 lg:py-11">
      <div className="relative flex w-full flex-col gap-12">
        {steps.map((step, index) => (
          <StepItem
            key={step.id}
            step={step}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>
    </Card>
  );
}

function StepItem({ step, isLast }: { step: Step; isLast: boolean }) {
  return (
    <div className="relative flex items-center gap-3 z-[1]">
      {!isLast && (
        <div
          aria-hidden
          className={`pointer-events-none absolute left-[18px] z-[-1] top-[42px] h-[54px] w-0.5 ${
            step.status === "complete"
              ? "bg-[#2f6df0]"
              : step.status === "current"
              ? "bg-gradient-to-b from-[#2f6df0] via-[#2f6df0]/20  to-white"
              : "bg-white"
          }`}
        />
      )}

      {step.status === "complete" && (
        <div className="size-10 border border-white flex items-center justify-center rounded-full bg-white/50">
          <div className="flex size-8 items-center justify-center rounded-full bg-white/80 border border-white">
            <Icon name="checkmark_circle" height={24} width={24} />
          </div>
        </div>
      )}

      {step.status === "current" && (
        <div className="size-10 flex items-center justify-center rounded-full border-2 border-white bg-primary-gradient">
          <p className="text-base font-medium leading-none text-white">
            {step.id}
          </p>
        </div>
      )}

      {step.status === "pending" && (
        <div className="size-10 border border-white flex items-center justify-center rounded-full bg-white/50">
          <div className="flex size-8 items-center justify-center rounded-full bg-white/80 border border-white text-dark/70 text-base font-medium">
            {step.id}
          </div>
        </div>
      )}

      <div className="flex-col gap-2">
        <p
          className={[
            "text-sm font-medium ",
            step.status === "current" ? "text-[#2f6df0]" : "text-dark/70",
          ].join(" ")}
        >
          {step.title}
        </p>

        {step.status === "complete" && (
          <Badge variant="success">Complete</Badge>
        )}
        {step.status === "current" && (
          <Badge variant="default">In Progress</Badge>
        )}
        {step.status === "pending" && (
          <Badge variant="dark" className="!bg-white/50 !bg-none border-white">
            Pending
          </Badge>
        )}
      </div>
    </div>
  );
}

function CheckCircle24() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="12" fill="#2F6DF0" />
      <path
        d="M17.3333 8.5L10.1667 15.6667L6.66666 12.1667"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
