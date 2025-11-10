"use client";

import React, { useState } from "react";

type ProgramTypeProps = {
  /** Optional controlled value: "multi-day" | "one-time" */
  value?: "multi-day" | "one-time";
  /** Change handler when a card is selected */
  onChange?: (value: "multi-day" | "one-time") => void;
  /** Click handler for Back button */
  onBack?: () => void;
  /** Click handler for Next button */
  onNext?: (value: "multi-day" | "one-time") => void;
  /** Extra classes to append to the outer container */
  className?: string;
};

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function InfoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 16h-1v-4h-1m1-4h.01"
      />
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}

function ArrowLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );
}

export default function FigmaCardGrid(props: ProgramTypeProps): JSX.Element {
  const { value, onChange, onBack, onNext, className } = props;
  const [internal, setInternal] = useState<"multi-day" | "one-time">(
    "one-time"
  );
  const selected = value ?? internal;

  function handleSelect(next: "multi-day" | "one-time") {
    if (onChange) onChange(next);
    else setInternal(next);
  }

  return (
    <section
      className={[
        "relative w-full overflow-hidden rounded-[24px] bg-[#e7f2f5]",
        "min-h-[720px]",
        className || "",
      ]
        .join(" ")
        .trim()}
      aria-label="Choose Your Program Type"
    >
      {/* Decorative background glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[8%] -translate-x-1/2">
          <div className="h-[520px] w-[820px] rounded-full bg-[radial-gradient(60%_60%_at_50%_50%,#7aa5fa40_0%,#7aa5fa00_60%)] blur-[30px]" />
        </div>
        <div className="absolute left-[-10%] top-[45%] rotate-[18deg]">
          <div className="h-[700px] w-[600px] rounded-full bg-[radial-gradient(60%_60%_at_50%_50%,#2c6ae833_0%,#2c6ae800_60%)] blur-[24px]" />
        </div>
        <div className="absolute right-[-6%] top-[58%] rotate-[18deg]">
          <div className="h-[680px] w-[620px] rounded-full bg-[radial-gradient(60%_60%_at_50%_50%,#9dc1ff33_0%,#9dc1ff00_60%)] blur-[22px]" />
        </div>
      </div>

      {/* Top bar */}
      <div className="flex items-center justify-between gap-6 border-b border-white/60 px-6 py-4 md:px-10">
        <div className="min-w-0">
          <p className="text-[14px] font-medium leading-[1.4] text-black/80">
            Welcome Back, Mark
          </p>
          <div className="mt-1 flex items-center gap-2 text-[12px]">
            <span className="text-black/40">Overview</span>
            <span className="text-black/20">/</span>
            <span className="text-black">Program Creation</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex h-10 items-center gap-2 rounded-full bg-white/30 px-3">
            <svg
              viewBox="0 0 24 24"
              className="size-5 text-black/60"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
            </svg>
            <span className="text-[14px] font-medium text-black/60">
              Search
            </span>
          </div>
          <div className="size-10 rounded-full bg-white/30 p-2" />
          <div className="size-10 rounded-full bg-white/30 p-2 relative">
            <span className="absolute right-1 top-1 inline-flex size-2.5 items-center justify-center rounded-full bg-[#ff0033]" />
          </div>
          <div className="size-10 overflow-hidden rounded-full border border-white/20 bg-white/10" />
        </div>
      </div>

      {/* Main panel */}
      <div className="mx-auto w-full max-w-[1140px] px-6 py-8 md:py-10">
        <header className="max-w-[620px]">
          <h2 className="text-[30px] font-semibold leading-[1.5] text-[#141b34]">
            Choose Your Program Type
          </h2>
          <p className="mt-2 text-[16px] leading-[1.5] text-black/60">
            Select the format that fits your coaching goals and athlete needs.
            You can always create additional programs later
          </p>
        </header>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Multi-Day Program */}
          <button
            type="button"
            onClick={() => handleSelect("multi-day")}
            className={[
              "group relative overflow-hidden rounded-[30px] bg-white/30 p-6 text-left transition",
              selected === "multi-day"
                ? "ring-2 ring-[#5c8ff7]"
                : "ring-1 ring-transparent hover:ring-[#5c8ff7]/40",
            ]
              .join(" ")
              .trim()}
            aria-pressed={selected === "multi-day"}
          >
            <div className="flex items-center justify-between">
              <div className="flex size-16 items-center justify-center rounded-[16px] bg-white/30">
                <svg
                  viewBox="0 0 24 24"
                  className="size-8 text-[#2c6ae8]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="5" width="18" height="16" rx="2" />
                  <path d="M16 3v4M8 3v4M3 10h18" />
                </svg>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border-t border-[#68b0ea] bg-white/40 px-4 py-2 text-[10px] font-medium text-black/70">
                <span className="inline-block size-2 rounded-full border-t border-[#68b0ea]" />
                Scheduled Program
              </span>
            </div>

            <h3 className="mt-6 text-[20px] font-semibold text-[#141b34]">
              Multi-Day Program
            </h3>

            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-3 text-[14px] text-[#141b34]/70">
                <span className="inline-flex size-5 items-center justify-center rounded-full bg-white/50 text-[#2c6ae8]">
                  <CheckIcon className="size-3.5" />
                </span>
                Always live with no expiration
              </li>
              <li className="flex items-center gap-3 text-[14px] text-[#141b34]/70">
                <span className="inline-flex size-5 items-center justify-center rounded-full bg-white/50 text-[#2c6ae8]">
                  <CheckIcon className="size-3.5" />
                </span>
                Athletes can join anytime
              </li>
              <li className="flex items-center gap-3 text-[14px] text-[#141b34]/70">
                <span className="inline-flex size-5 items-center justify-center rounded-full bg-white/50 text-[#2c6ae8]">
                  <CheckIcon className="size-3.5" />
                </span>
                Evergreen content delivery
              </li>
            </ul>

            <div className="mt-6 rounded-[16px] bg-white/30 p-4">
              <p className="text-[14px] text-[#141b34]/70">
                <span className="font-semibold text-[#141b34]">Best for:</span>
                <span>
                  {" "}
                  Long-term passive content and skill development. Perfect for
                  fundamental training that remains relevant over time.
                </span>
              </p>
            </div>
          </button>

          {/* One-Time Program */}
          <button
            type="button"
            onClick={() => handleSelect("one-time")}
            className={[
              "group relative overflow-hidden rounded-[30px] bg-white/30 p-6 text-left transition",
              selected === "one-time"
                ? "ring-2 ring-[#5c8ff7]"
                : "ring-1 ring-transparent hover:ring-[#5c8ff7]/40",
            ]
              .join(" ")
              .trim()}
            aria-pressed={selected === "one-time"}
          >
            <div className="flex items-center justify-between">
              <div className="flex size-16 items-center justify-center rounded-[16px] bg-white/30">
                <svg
                  viewBox="0 0 24 24"
                  className="size-8 text-[#2c6ae8]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7H7v6M7 7l10 10"
                  />
                </svg>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border-t border-[#68b0ea] bg-white/40 px-4 py-2 text-[10px] font-medium text-black/70">
                <span className="inline-block size-2 rounded-full border-t border-[#68b0ea]" />
                Always Active
              </span>
            </div>

            <h3 className="mt-6 text-[20px] font-semibold text-[#141b34]">
              One-Time Program
            </h3>

            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-3 text-[14px] text-[#141b34]/70">
                <span className="inline-flex size-5 items-center justify-center rounded-full bg-white/50 text-[#2c6ae8]">
                  <CheckIcon className="size-3.5" />
                </span>
                Always live with no expiration
              </li>
              <li className="flex items-center gap-3 text-[14px] text-[#141b34]/70">
                <span className="inline-flex size-5 items-center justify-center rounded-full bg-white/50 text-[#2c6ae8]">
                  <CheckIcon className="size-3.5" />
                </span>
                Athletes can join anytime
              </li>
              <li className="flex items-center gap-3 text-[14px] text-[#141b34]/70">
                <span className="inline-flex size-5 items-center justify-center rounded-full bg-white/50 text-[#2c6ae8]">
                  <CheckIcon className="size-3.5" />
                </span>
                Evergreen content delivery
              </li>
            </ul>

            <div className="mt-6 rounded-[16px] bg-white/30 p-4">
              <p className="text-[14px] text-[#141b34]/70">
                <span className="font-semibold text-[#141b34]">Best for:</span>
                <span>
                  {" "}
                  Long-term passive content and skill development. Perfect for
                  fundamental training that remains relevant over time.
                </span>
              </p>
            </div>
          </button>
        </div>

        {/* Helper notice */}
        <div className="mt-8 flex items-center gap-3 rounded-[16px] bg-white/25 px-4 py-3">
          <InfoIcon className="size-5 text-[#2c6ae8]" />
          <p className="text-[14px] font-medium text-[#141b34]">
            Select a program type to continue
          </p>
        </div>

        {/* Footer controls */}
        <div className="mt-8 flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 rounded-full bg-white/30 px-5 py-3 text-[16px] font-medium text-[#141b34] hover:bg-white/40"
          >
            <ArrowLeft className="size-5" />
            Back
          </button>
          <button
            type="button"
            onClick={() => onNext?.(selected)}
            className="inline-flex items-center justify-center rounded-full border border-[#1556d8]/30 bg-gradient-to-r from-[#2c6ae8] to-[#7aa5fa] px-8 py-3 text-[16px] font-medium text-white shadow-[0_8px_24px_-8px_rgba(21,86,216,0.45)]"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
