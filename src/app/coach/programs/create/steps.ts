export type StepStatus = "complete" | "current" | "pending";

export type Step = {
  id: number;
  title: string;
  status: StepStatus;
};

export const initialSteps: Step[] = [
  { id: 1, title: "Program Type", status: "current" },
  { id: 2, title: "Program Details", status: "pending" },
  { id: 3, title: "Tasks Management", status: "pending" },
  { id: 4, title: "Role Permissions", status: "pending" },
  { id: 5, title: "Premium Features", status: "pending" },
  { id: 6, title: "Review & Launch", status: "pending" },
];