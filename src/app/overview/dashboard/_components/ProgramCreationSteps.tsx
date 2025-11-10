type StepStatus = "complete" | "current" | "pending";

type Step = {
  id: number;
  title: string;
  status: StepStatus;
};

const defaultSteps: Step[] = [
  { id: 1, title: "Program Type", status: "complete" },
  { id: 2, title: "Program Details", status: "complete" },
  { id: 3, title: "Tasks Management", status: "complete" },
  { id: 4, title: "Role Permissions", status: "current" },
  { id: 5, title: "Premium Features", status: "pending" },
  { id: 6, title: "Review & Launch", status: "pending" },
];

export default function ProgramCreationSteps({
  steps = defaultSteps,
  className = "",
}: {
  steps?: Step[];
  className?: string;
}) {
  return (
    <div
      className={["relative rounded-[21px] bg-[#e7f2f5]", className].join(" ")}
    >
      <div className="relative px-8 py-10">
        {/* Vertical rail behind bullets */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-[44px] top-10 bottom-10 w-px bg-gradient-to-b from-[#2f6df0] via-[#7aa2ff] to-transparent"
        />

        <div className="relative flex w-[206px] flex-col gap-12">
          {steps.map((step, index) => (
            <StepItem
              key={step.id}
              step={step}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function StepItem({ step }: { step: Step; isLast: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
        {step.status === "complete" && (
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/50">
            <span className="absolute inset-0 flex items-center justify-center">
              <CheckCircle24 />
            </span>
          </div>
        )}

        {step.status === "current" && (
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/90 bg-[#2f6df0]">
            <p className="text-[16px] font-medium leading-none text-white">
              {step.id}
            </p>
          </div>
        )}

        {step.status === "pending" && (
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/50">
            <p className="text-[16px] font-medium leading-none text-[#141b34]/70">
              {step.id}
            </p>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <p
          className={[
            "text-[14px] font-medium leading-[1.3]",
            step.status === "pending"
              ? "text-[#141b34]/70"
              : "text-[#141b34]/70",
          ].join(" ")}
        >
          {step.title}
        </p>

        {step.status === "complete" && (
          <span className="inline-flex h-6 items-center rounded-full bg-[#b7f7b2]/50 px-3 text-[10px] font-medium text-[#141b34]/70">
            Complete
          </span>
        )}
        {step.status === "current" && (
          <span className="inline-flex items-center rounded-[14px] border border-[rgba(39,106,238,0.09)] bg-[#e2ecff] px-3 py-1 text-[10px] font-medium text-[#2f6df0]">
            In Progress
          </span>
        )}
        {step.status === "pending" && (
          <span className="inline-flex h-6 items-center rounded-full bg-white/50 px-3 text-[10px] font-medium text-[#141b34]/50">
            Pending
          </span>
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
      className="text-[#2f6df0]"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" />
      <path
        d="M8 12.5l2.2 2.2L16 9.9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
