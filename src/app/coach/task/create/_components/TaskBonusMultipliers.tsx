"use client";

import Input from "@/components/ui/Input";
import Switch from "@/components/ui/Switch";
import { ArrowUp, Plus, X } from "lucide-react";
import { ChangeEvent, FormEvent, useMemo, useState } from "react";

type TaskBonusMultiplier = {
  id: string;
  title: string;
  description: string;
  multiplier: string;
  active: boolean;
};

const INITIAL_MULTIPLIERS: TaskBonusMultiplier[] = [
  {
    id: "early-completion",
    title: "Early Completion Bonus",
    description: "Complete 24 hours before due date",
    multiplier: "+50% points",
    active: false,
  },
  {
    id: "perfect-score",
    title: "Perfect Score Bonus",
    description: "For quiz tasks with 100% accuracy",
    multiplier: "+25% points",
    active: true,
  },
  {
    id: "first-attempt",
    title: "First Attempt Bonus",
    description: "Complete task correctly on first try",
    multiplier: "+20% points",
    active: true,
  },
  {
    id: "streak",
    title: "Streak Bonus",
    description: "Complete 5 tasks in a row without missing",
    multiplier: "+100% points",
    active: false,
  },
  {
    id: "weekend-warrior",
    title: "Weekend Warrior",
    description: "Complete task on Saturday or Sunday",
    multiplier: "+15% points",
    active: false,
  },
  {
    id: "team-player",
    title: "Team Player Bonus",
    description: "Help teammate complete their task",
    multiplier: "+30% points",
    active: false,
  },
];

const TaskBonusMultipliers = () => {
  const [multipliers, setMultipliers] =
    useState<TaskBonusMultiplier[]>(INITIAL_MULTIPLIERS);
  const [isAddingMultiplier, setIsAddingMultiplier] = useState(false);
  const [newMultiplierTitle, setNewMultiplierTitle] = useState("");
  const [newMultiplierDescription, setNewMultiplierDescription] = useState("");
  const [newMultiplierPoints, setNewMultiplierPoints] = useState("");

  const toggleMultiplier = (id: string, checked: boolean) => {
    setMultipliers((prev) =>
      prev.map((multiplier) =>
        multiplier.id === id
          ? {
              ...multiplier,
              active: checked,
            }
          : multiplier
      )
    );
  };

  const resetForm = () => {
    setIsAddingMultiplier(false);
    setNewMultiplierTitle("");
    setNewMultiplierDescription("");
    setNewMultiplierPoints("");
  };

  const isSaveDisabled = useMemo(() => {
    return (
      newMultiplierTitle.trim().length === 0 ||
      newMultiplierDescription.trim().length === 0 ||
      newMultiplierPoints.trim().length === 0
    );
  }, [newMultiplierDescription, newMultiplierPoints, newMultiplierTitle]);

  const handleAddMultiplier = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSaveDisabled) return;

    const rawValue = newMultiplierPoints.trim();
    const numericValue = rawValue.replace(/[^0-9.]+/g, "");
    const formattedMultiplier = `+${numericValue}% points`;

    setMultipliers((prev) => [
      ...prev,
      {
        id: `${newMultiplierTitle
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")}-${Date.now()}`,
        title: newMultiplierTitle.trim(),
        description: newMultiplierDescription.trim(),
        multiplier: formattedMultiplier,
        active: false,
      },
    ]);

    resetForm();
  };

  return (
    <section
      className="rounded-[30px] bg-[#FFFFFF4D] p-8 shadow-sm"
      // style={{
      //     background:
      //         "radial-gradient(140% 140% at 0% 0%, rgba(224, 239, 255, 0.7) 0%, rgba(255, 255, 255, 0.3) 45%)",
      // }}
    >
      <header className="mb-8">
        <h2 className="text-[14px] font-medium leading-[1.3] text-dark">
          Bonus Multipliers
        </h2>
        <p className="mt-1 text-[12px] font-normal leading-[1.4] text-paragraph-dark">
          Set conditions for earning bonus points
        </p>
      </header>

      <div className="rounded-[30px] bg-[rgba(255,255,255,0.6)] p-8">
        <div className="flex flex-col gap-6">
          {multipliers.map((multiplier, index) => (
            <div key={multiplier.id} className="flex flex-col gap-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="max-w-[320px]">
                  <p className="text-[14px] font-medium leading-[1.3] text-dark">
                    {multiplier.title}
                  </p>
                  <p className="mt-1 text-[12px] font-normal leading-[1.4] text-paragraph-dark">
                    {multiplier.description}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-6 md:w-auto">
                  <p className="whitespace-nowrap text-[14px] font-medium leading-[1.3] text-dark">
                    {multiplier.multiplier}
                  </p>
                  <Switch
                    name={multiplier.id}
                    value={multiplier.active}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      toggleMultiplier(multiplier.id, event.target.checked)
                    }
                  />
                </div>
              </div>

              {index < multipliers.length - 1 && (
                <div className="h-px w-full bg-[rgba(20,27,52,0.08)]" />
              )}
            </div>
          ))}
        </div>

        {isAddingMultiplier ? (
          <form
            onSubmit={handleAddMultiplier}
            className="mt-8 flex flex-col gap-6 rounded-[16px] bg-[rgba(255,255,255,0.6)] p-6"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(92,143,247,0.12)] text-[#2B5AF8]">
                  <ArrowUp className="h-5 w-5 rotate-180" strokeWidth={1.8} />
                </span>
                <p
                  className="text-[14px] font-medium leading-[1.3]"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, #5C8FF7 0%, #276AEE 100%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  Add Custom Multiplier
                </p>
              </div>

              <button
                type="button"
                onClick={resetForm}
                className="flex items-center gap-2 rounded-full bg-white/60 px-3 py-2 text-[12px] font-medium leading-[1.3] text-dark shadow-sm hover:bg-white"
              >
                <X className="h-4 w-4" />
                Cancel
              </button>
            </div>

            <div className="flex flex-col gap-4 md:flex-row">
              <Input
                label="Bonus title"
                placeholder="e.g. Morning Hustle Bonus"
                value={newMultiplierTitle}
                onChange={(event) => setNewMultiplierTitle(event.target.value)}
              />
              <Input
                label="Points"
                placeholder="e.g. 10"
                value={newMultiplierPoints}
                onChange={(event) => setNewMultiplierPoints(event.target.value)}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-dark">
                Description
              </label>
              <textarea
                rows={3}
                placeholder="Describe when athletes should earn this bonus"
                value={newMultiplierDescription}
                onChange={(event) =>
                  setNewMultiplierDescription(event.target.value)
                }
                className="w-full rounded-xl border border-white bg-[rgba(255,255,255,0.75)] px-5 py-3 text-sm text-gray-900 placeholder:text-placeholder focus:border-[#5C8FF7] focus:outline-none"
              />
            </div>

            <div className="flex flex-col-reverse gap-3 md:flex-row md:justify-end">
              <button
                type="button"
                onClick={resetForm}
                className="rounded-[999px] border border-transparent bg-white/70 px-6 py-3 text-[14px] font-medium leading-[1.3] text-dark shadow-sm transition-opacity hover:opacity-90"
              >
                Discard
              </button>
              <button
                type="submit"
                disabled={isSaveDisabled}
                className="flex items-center gap-2 rounded-[999px] border border-[rgba(21,86,216,0.1)] bg-[rgba(69,127,243,0.15)] px-6 py-3 text-[14px] font-medium leading-[1.3] text-[#276AEE] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Plus className="h-5 w-5" />
                Save Bonus
              </button>
            </div>
          </form>
        ) : (
          <div className="mt-8 flex flex-col gap-4 rounded-[16px] bg-[rgba(255,255,255,0.6)] p-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(92,143,247,0.12)] text-[#2B5AF8]">
                <ArrowUp className="h-5 w-5 rotate-180" strokeWidth={1.8} />
              </span>
              <p
                className="text-[14px] font-medium leading-[1.3]"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, #5C8FF7 0%, #276AEE 100%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Add Custom Multiplier
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsAddingMultiplier(true)}
              className="flex items-center gap-2 self-start rounded-[999px] border border-[rgba(21,86,216,0.1)] bg-[rgba(69,127,243,0.15)] px-6 py-3 text-[14px] font-medium leading-[1.3] text-[#276AEE] transition-opacity hover:opacity-90 md:self-auto"
            >
              <Plus className="h-5 w-5" />
              Add Bonus
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TaskBonusMultipliers;
