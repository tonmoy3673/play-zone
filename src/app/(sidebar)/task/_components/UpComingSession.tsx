import { AnimatedButton } from "@/components/ui/Button";
import Icon from "@/utils/icon";
import React from "react";

const UpComingSession = () => {
  return (
    <div>
      <div className="bg-[#FFFFFF99] backdrop-blur-sm border border-white rounded-2xl p-5">
        <h3 className="text-lg font-medium text-[#141B34]">
          Your upcoming sessions - don't miss them
        </h3>

        <div className="bg-[#FFFFFF99] rounded-xl border border-white p-5 mt-3">
          <div className="flex gap-3 items-start">
            <div className="p-3 bg-[#FFFFFF99] rounded-full">
              <Icon
                name="session"
                width={24}
                height={24}
                className="text-[#141B34]"
              />
            </div>
            <div>
              <p className="text-sm text-[#141B34] font-medium pt-2">
                Film Breakdown Session
              </p>
              <span className="text-xs font-normal text-[#141B34] pt-3">
                Coach Martinez: Film breakdown from last week.
              </span>
              <div className="flex gap-2 py-3">
                <div className="flex gap-1.5">
                  <Icon
                    name="calendar"
                    width={14}
                    height={14}
                    className="text-[#141B34]"
                  />
                  <span className="text-xs text-[#141b34b3] font-normal">
                    Est 45 min
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <Icon
                    name="calendar"
                    width={14}
                    height={14}
                    className="text-[#141B34]"
                  />
                  <span className="text-xs text-[#141b34b3] font-normal">
                    Est 45 min
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <Icon
                    name="calendar"
                    width={14}
                    height={14}
                    className="text-[#141B34]"
                  />
                  <span className="text-xs text-[#141b34b3] font-normal">
                    Est 45 min
                  </span>
                </div>
              </div>
              <AnimatedButton className="flex mt-3 items-center font-normal px-3 text-sm -translate-y-2 py-2 rounded-full text-white bg-primary-gradient">
                Join Session
              </AnimatedButton>
            </div>
          </div>

          <div className="flex gap-3 items-start mb-3">
            <div className="p-3 bg-[#FFFFFF99] rounded-full">
              <Icon
                name="session"
                width={24}
                height={24}
                className="text-[#141B34]"
              />
            </div>
            <div>
              <p className="text-sm text-[#141B34] font-medium pt-2">
                Film Breakdown Session
              </p>
              <span className="text-xs font-normal text-[#141B34] pt-3">
                Coach Martinez: Film breakdown from last week.
              </span>
              <div className="flex gap-2 py-3">
                <div className="flex gap-1.5">
                  <Icon
                    name="calendar"
                    width={14}
                    height={14}
                    className="text-[#141B34]"
                  />
                  <span className="text-xs text-[#141b34b3] font-normal">
                    Est 45 min
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <Icon
                    name="calendar"
                    width={14}
                    height={14}
                    className="text-[#141B34]"
                  />
                  <span className="text-xs text-[#141b34b3] font-normal">
                    Est 45 min
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <Icon
                    name="calendar"
                    width={14}
                    height={14}
                    className="text-[#141B34]"
                  />
                  <span className="text-xs text-[#141b34b3] font-normal">
                    Est 45 min
                  </span>
                </div>
              </div>
              <AnimatedButton className="flex mt-3 items-center font-normal px-3 text-sm -translate-y-2 py-2 rounded-full text-[#276AEE] bg-[#1556d81a]">
                Set Reminder
              </AnimatedButton>
            </div>
          </div>

          <div className="flex gap-3 items-start mb-3">
            <div className="p-3 bg-[#FFFFFF99] rounded-full">
              <Icon
                name="session"
                width={24}
                height={24}
                className="text-[#141B34]"
              />
            </div>
            <div>
              <p className="text-sm text-[#141B34] font-medium pt-2">
                Film Breakdown Session
              </p>
              <span className="text-xs font-normal text-[#141B34] pt-3">
                Coach Martinez: Film breakdown from last week.
              </span>
              <div className="flex gap-2 py-3">
                <div className="flex gap-1.5">
                  <Icon
                    name="calendar"
                    width={14}
                    height={14}
                    className="text-[#141B34]"
                  />
                  <span className="text-xs text-[#141b34b3] font-normal">
                    Est 45 min
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <Icon
                    name="calendar"
                    width={14}
                    height={14}
                    className="text-[#141B34]"
                  />
                  <span className="text-xs text-[#141b34b3] font-normal">
                    Est 45 min
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <Icon
                    name="calendar"
                    width={14}
                    height={14}
                    className="text-[#141B34]"
                  />
                  <span className="text-xs text-[#141b34b3] font-normal">
                    Est 45 min
                  </span>
                </div>
              </div>
              <AnimatedButton className="flex mt-3 items-center font-normal px-3 text-sm -translate-y-2 py-2 rounded-full text-[#276AEE] bg-[#1556d81a]">
                Set Reminder
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpComingSession;
