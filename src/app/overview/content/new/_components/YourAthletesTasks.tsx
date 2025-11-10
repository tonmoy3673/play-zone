import React from "react";

type AthleteTask = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  creatorName: string;
  creatorAvatarSrc?: string;
  imageSrc?: string;
  progressPercent: number; // 0 - 100
};

const imgArrow =
  "https://www.figma.com/api/mcp/asset/dfa79fb6-4235-4448-b3e1-946d4db37bbb";
const imgDefaultCreator =
  "https://www.figma.com/api/mcp/asset/4e46797c-eff9-4558-98b4-81c3e5b31e90"; // rectangle avatar from figma context
const imgTaskIcon1 =
  "https://www.figma.com/api/mcp/asset/37a05253-9f5f-457e-971b-488184219d47";
const imgTaskIcon2 =
  "https://www.figma.com/api/mcp/asset/5bc67d26-b406-4ac6-a3eb-ed0bd4a26c44";

const defaultTasks: AthleteTask[] = [
  {
    id: "a1",
    title: "Art of Tackling",
    subtitle: "Elite Basketball Fundamentals",
    description:
      "This task focused on foundational techniques for disengaging blocks and pursuing the ball carrier. It included a video demonstration, a drill checklist, and a required video submission of athletes performing the drill.",
    creatorName: "Jason M.",
    creatorAvatarSrc: imgDefaultCreator,
    imageSrc: imgTaskIcon1,
    progressPercent: 70,
  },
  {
    id: "a2",
    title: "Red Zone Offense",
    subtitle: "Elite Basketball Fundamentals",
    description:
      "This task focused on foundational techniques for disengaging blocks and pursuing the ball carrier. It included a video demonstration, a drill checklist, and a required video submission of athletes performing the drill.",
    creatorName: "Jason M.",
    creatorAvatarSrc: imgDefaultCreator,
    imageSrc: imgTaskIcon2,
    progressPercent: 70,
  },
];

export default function YourAthletesTasks({
  tasks = defaultTasks,
}: {
  tasks?: AthleteTask[];
}): JSX.Element {
  return (
    <div className="w-full overflow-hidden rounded-[24px] bg-white/30 border border-white">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-[20px] font-semibold leading-[1.5] text-[#141b34]">
            Your Athlete’s Tasks
          </h2>
          <button
            type="button"
            aria-label="Next"
            className="relative inline-flex size-10 items-center justify-center rounded-full border border-white bg-white/65"
          >
            <img
              src={imgArrow}
              alt=""
              className="size-5 rotate-90 scale-y-[-1] w-[10px] h-[15px]"
            />
          </button>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="relative h-[264px] w-full overflow-hidden rounded-[24px] bg-white/60"
            >
              <div className="absolute inset-0 p-4">
                <div className="flex h-full flex-col gap-6">
                  <div className="flex w-full flex-col gap-5">
                    <div className="flex items-center gap-3">
                      <div className="relative size-[45px] shrink-0">
                        {task.imageSrc ? (
                          <img
                            src={task.imageSrc}
                            alt=""
                            className="absolute -inset-[3.33%] max-w-none"
                            height={48}
                            width={48}
                          />
                        ) : (
                          <div className="size-full rounded-[12px] bg-white/70" />
                        )}
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <p className="text-[16px] font-semibold leading-[1.5] text-[#141b34]">
                          {task.title}
                        </p>
                        <p className="text-[12px] font-normal leading-[1.4] text-[#141b34]">
                          {task.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex w-full flex-col gap-2.5">
                      <p className="w-full text-[12px] font-normal leading-[1.4] text-[#141b34]">
                        {task.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-[12px] font-normal leading-[1.4] text-[#141b34]/70">
                          Created by:
                        </p>
                        <div className="flex items-center gap-1">
                          <span className="relative inline-block size-4 shrink-0 overflow-hidden rounded-[37px]">
                            <img
                              src={task.creatorAvatarSrc ?? imgDefaultCreator}
                              alt=""
                              className="absolute inset-0 size-full max-w-none object-cover"
                            />
                          </span>
                          <p className="text-[10px] font-medium leading-[1.4] text-[#141b34]">
                            {task.creatorName}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="flex items-center justify-between">
                      <p className="text-[10px] font-medium leading-[1.4] text-[#141b34]">
                        Majority Completion
                      </p>
                      <div className="flex items-center gap-1">
                        <span
                          style={{
                            borderTopColor: "#68B0EA",
                            background:
                              "linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%)",
                            width: "12px",
                            height: "12px",
                          }}
                          className="inline-block size-3 rounded-[4px] border-t border-[#68b0ea]"
                        />
                        <p className="text-[10px] font-medium leading-[1.4] text-[#141b34]">
                          {Math.round(task.progressPercent)}% Complete
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 h-[7px] w-full rounded-[40px] bg-[#c4d4fd]">
                      <div
                        className="h-full rounded-[80px] bg-gradient-to-r from-[#68b0ea] to-[#1556d8]"
                        style={{
                          width: `${Math.max(
                            0,
                            Math.min(100, task.progressPercent)
                          )}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
