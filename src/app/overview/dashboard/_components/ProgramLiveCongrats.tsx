import { AnimatedButton } from "@/components/ui/Button";
import React from "react";
import ModalHeader from "./ModalHeader";

type ProgramLiveCongratsProps = {
  onClose?: () => void;
  onGoToDashboard?: () => void;
  className?: string;
};

export default function ProgramLiveCongrats(props: ProgramLiveCongratsProps) {
  const { onClose, onGoToDashboard, className } = props;

  return (
    <section
      className={[
        "relative overflow-hidden rounded-[16px] w-[90vw] max-w-[850px] bg-white/80",
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
      ></div>

      <ModalHeader title="Congratulations" onClose={onClose} />

      {/* Center content */}
      <div className="mx-auto flex w-full max-w-[990px] flex-col items-center gap-12 px-6 pt-28 pb-12 md:pt-32">
        {/* Medallion + sparkles */}
        <div className="border-3 p-5 rounded-full border-white/50 bg-white">
          <img
            src={"/overview/logoIcon.png"}
            alt=""
            className="h-[69px] w-[77px] object-contain"
          />
        </div>

        {/* Heading */}
        <div className="max-w-[623px] text-center">
          <h1 className="text-[30px] leading-[1.5] text-dark">
            <span className="bg-gradient-to-r from-[#2c6ae8] to-[#7aa5fa] bg-clip-text font-semibold text-transparent">
              Congratulations!
            </span>
            <span>{`  your first program `}</span>
            <br />
            <span>is live on </span>
            <span className="font-semibold">PLAYERZONE.</span>
            <span>{` 🎉`}</span>
          </h1>

          <p className="mt-3 text-[14px] font-normal leading-[1.3] text-dark/70">
            Now it’s time to grow: check your notifications for athlete
            activity, share your invite link to start bringing athletes in, and
            explore tools like announcements, tasks, and chat to engage your
            team.
          </p>
          <p className="mt-4 text-[14px] leading-[1.3] text-dark/50">
            Welcome, You’re officially part of the PLAYERZONE coaching network.
          </p>
        </div>

        {/* CTA */}
        <div>
          <AnimatedButton
            onClick={onGoToDashboard}
            style={{
              borderRadius: "30px",
              background:
                "linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%)",
            }}
            className="flex items-center justify-center gap-1 text-white font-normal text-[10px] px-4 py-2 rounded-full hover:scale-105 transition-all"
          >
            Go to Dashboard
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}
