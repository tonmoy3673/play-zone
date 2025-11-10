import React from "react";

type ProgramLiveCongratsProps = {
  onClose?: () => void;
  onGoToDashboard?: () => void;
  className?: string;
};

// Remote assets exported from Figma (expire after ~7 days)
const imgGlowA =
  "https://www.figma.com/api/mcp/asset/314ab5ae-8bdc-4f77-977c-857b5ba94c1f";
const imgGlowB =
  "https://www.figma.com/api/mcp/asset/11d74467-997f-42e3-928a-cb208e23f2c2";
const imgMedallion =
  "https://www.figma.com/api/mcp/asset/f6007c19-dbc7-4ca8-9729-bcfddcb8cfb6";
const imgStar1 =
  "https://www.figma.com/api/mcp/asset/0bc5bff1-5a65-4777-9c30-7b7d9dcf4551";
const imgStar2 =
  "https://www.figma.com/api/mcp/asset/8c3f101a-9962-4939-80a3-c26c19b096d2";

export default function ProgramLiveCongrats(
  props: ProgramLiveCongratsProps
): JSX.Element {
  const { onClose, onGoToDashboard, className } = props;

  return (
    <section
      className={[
        "relative w-full overflow-hidden rounded-[16px] bg-white",
        // Give it a comfortable height while staying responsive
        "min-h-[520px] md:min-h-[560px]",
        className || "",
      ]
        .join(" ")
        .trim()}
      aria-label="Program Live Congratulations"
    >
      {/* Decorative background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={
          {
            "--tw": 1,
          } as React.CSSProperties
        }
      >
        <div className="absolute left-1/2 top-[18%] -translate-x-1/2 rotate-[210deg] -scale-y-100">
          <img
            src={imgGlowA}
            alt=""
            className="h-[600px] w-[590px] blur-[60px] opacity-30"
          />
        </div>
        <div className="absolute left-[8%] top-[60%] rotate-[240deg] -scale-y-100">
          <img
            src={imgGlowB}
            alt=""
            className="h-[620px] w-[760px] blur-md opacity-60"
          />
        </div>
        <div className="absolute -bottom-[280px] left-[75%] rotate-[60deg] -scale-y-100">
          <img
            src={imgGlowB}
            alt=""
            className="h-[340px] w-[420px] blur-md opacity-30"
          />
        </div>
      </div>

      {/* Top border row */}
      <div className="absolute left-0 right-0 top-0 flex items-center justify-between border-b border-[#ebf1ff] p-5">
        <p className="text-[16px] font-medium leading-[1.5] text-[#141b34]">
          Congratulations
        </p>
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="inline-flex size-6 items-center justify-center rounded-full transition hover:bg-black/5"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="size-4 text-[#141b34]"
            aria-hidden="true"
          >
            <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      {/* Center content */}
      <div className="mx-auto flex w-full max-w-[990px] flex-col items-center gap-12 px-6 pt-28 pb-12 md:pt-32">
        {/* Medallion + sparkles */}
        <div className="relative">
          <img
            src={imgMedallion}
            alt=""
            className="h-[69px] w-[77px] object-contain"
          />

          <img
            src={imgStar1}
            alt=""
            className="pointer-events-none absolute -right-10 -top-6 h-[183px] w-[183px]"
          />
          <img
            src={imgStar2}
            alt=""
            className="pointer-events-none absolute -right-7 -top-3 h-[165px] w-[165px]"
          />
        </div>

        {/* Heading */}
        <div className="max-w-[623px] text-center">
          <h1 className="text-[30px] leading-[1.5] text-[#141b34]">
            <span className="bg-gradient-to-r from-[#2c6ae8] to-[#7aa5fa] bg-clip-text font-semibold text-transparent">
              Congratulations!
            </span>
            <span>{`  your first program `}</span>
            <br />
            <span>is live on </span>
            <span className="font-semibold">PLAYERZONE.</span>
            <span>{` 🎉`}</span>
          </h1>

          <p className="mt-3 text-[14px] font-normal leading-[1.3] text-[#141b34]/70">
            Now it’s time to grow: check your notifications for athlete
            activity, share your invite link to start bringing athletes in, and
            explore tools like announcements, tasks, and chat to engage your
            team.
          </p>
          <p className="mt-4 text-[14px] leading-[1.3] text-[#141b34]/50">
            Welcome, You’re officially part of the PLAYERZONE coaching network.
          </p>
        </div>

        {/* CTA */}
        <div>
          <button
            type="button"
            onClick={onGoToDashboard}
            className="inline-flex items-center justify-center rounded-full border border-[#1556d8]/30 bg-gradient-to-r from-[#2c6ae8] to-[#7aa5fa] px-6 py-3 text-[14px] font-medium text-white shadow-[0_8px_24px_-8px_rgba(21,86,216,0.45)]"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </section>
  );
}


