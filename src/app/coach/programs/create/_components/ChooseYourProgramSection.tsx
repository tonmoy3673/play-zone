"use client";

import Card from "@/components/ui/Card";
import Icon, { IconName } from "@/utils/icon";
import React, { useState } from "react";

type ProgramTypeProps = {
  value?: "multi-day" | "one-time";
  onChange?: (value: "multi-day" | "one-time") => void;
};

const programs: {
  type: "multi-day" | "one-time";
  icon: IconName;
  title: string;
  tag: string;
  features: string[];
  bestFor: string;
}[] = [
  {
    type: "multi-day",
    icon: "calendar" as IconName,
    title: "Multi-Day Program",
    tag: "Scheduled Program",
    features: [
      "Always live with no expiration",
      "Athletes can join anytime",
      "Evergreen content delivery",
    ],
    bestFor:
      "Long-term passive content and skill development. Perfect for fundamental training that remains relevant over time.",
  },
  {
    type: "one-time",
    icon: "running" as IconName,
    title: "One-Time Program",
    tag: "Always Active",
    features: [
      "Always live with no expiration",
      "Athletes can join anytime",
      "Evergreen content delivery",
    ],
    bestFor:
      "Long-term passive content and skill development. Perfect for fundamental training that remains relevant over time.",
  },
];

export default function ChooseYourProgramSection(props: ProgramTypeProps) {
  const { value, onChange } = props;
  const [internal, setInternal] = useState<"multi-day" | "one-time">(
    "one-time"
  );
  const selected = value ?? internal;

  function handleSelect(next: "multi-day" | "one-time") {
    if (onChange) onChange(next);
    else setInternal(next);
  }

  return (
    <section>
      <div className="max-w-[500px] space-y-1 mb-8 md:mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-dark">
          Choose Your Program Type
        </h2>

        <p className="text-base text-black/60">
          Select the format that fits your coaching goals and athlete needs. You
          can always create additional programs later
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {programs.map((program) => {
          const isActive = selected === program.type;

          return (
            <button
              key={program.type}
              type="button"
              onClick={() => handleSelect(program.type)}
              aria-pressed={isActive}
            >
              <Card
                className={`relative md:rounded-[30px] md:p-6 transition after:absolute after:inset-0 after:rounded-2xl after:md:rounded-[30px] after:border-2 after:border-[#5c8ff7] after:invisible after:opacity-0 after:transition-all ${
                  isActive && "after:visible after:opacity-100"
                }`}
              >
                <div className="bg-[url('/card-bottom-blur-image.svg')] absolute left-0 bottom-0 bg-no-repeat bg-left-bottom h-[540px] w-[663px] z-[-1]" />

                {/* Top Section */}
                <div className="flex items-start justify-between">
                  <div className="relative size-16 rounded-full flex items-center justify-center transition-transform border border-white backdrop-blur-xs">
                    <Icon
                      name={program.icon}
                      width={32}
                      height={32}
                      className="text-dark"
                    />
                  </div>

                  <span className="flex items-center justify-center gap-1.5 rounded-full border-t border-[#68B0EA] bg-white/40 px-4 py-2">
                    <span className="size-2 rounded-full border-t border-[#68B0EA] bg-primary-gradient shadow-[0_2px_4px_0_rgba(39,106,238,0.60)]" />
                    <span className="text-[10px] font-medium primary-gradient-text">
                      {program.tag}
                    </span>
                  </span>
                </div>

                <div className="flex flex-row items-center gap-3 mt-8 md:mt-10 lg:mt-[52px]">
                  <h3 className="text-xl font-semibold text-dark">
                    {program.title}
                  </h3>
                  <Icon
                    name="info"
                    width={14}
                    height={14}
                    className="text-dark"
                  />
                </div>

                {/* Features */}
                <ul className="mt-4 space-y-2 text-dark/70">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <Icon name="verified" width={16} height={16} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Card className="mt-6 md:rounded-2xl text-left">
                  <p className="text-sm text-dark/70">
                    <strong className="font-semibold text-dark">
                      Best for:
                    </strong>
                    {program.bestFor}
                  </p>
                </Card>
              </Card>
            </button>
          );
        })}
      </div>

      {/* Helper notice */}
      <Card className="mt-4 flex items-center gap-3 md:rounded-2xl bg-white/25 p-4">
        <Icon name="info" width={24} height={24} className="text-dark" />
        <p className="text-sm font-medium text-dark">
          Select a program type to continue
        </p>
      </Card>
    </section>
  );
}
