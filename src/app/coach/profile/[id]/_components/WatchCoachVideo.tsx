"use client";

import Icon from "@/utils/icon";
import RelatedClips from "./RelatedClips";
import { AnimatedButton } from "@/components/ui/Button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/Dialog";

const WatchCoachVideo = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <AnimatedButton className="text-nowrap h-14 px-6 flex items-center justify-center gap-2 text-sm font-medium rounded-full text-white bg-primary-gradient">
          <Icon name="video" height={24} width={24} />
          Watch Coach Introduction Video
        </AnimatedButton>
      </DialogTrigger>
      <DialogContent
        title="Coach Introduction Video"
        className="sm:max-w-[892px]"
      >
        <div className="p-5">
          <div
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1622659097972-68f1d8c1829f?q=80&w=1171&auto=format&fit=crop')`,
            }}
            className="aspect-video lg:aspect-[852/476] mb-8 rounded-2xl overflow-hidden relative object-cover z-[1] after:absolute after:inset-x-0 after:h-[40%] after:bottom-0 after:bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_13.38%,rgba(0,0,0,0.90)_77.39%)] after:z-[-1]"
          >
            <div className="absolute inset-x-0 bottom-0 p-6 space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-semibold text-white">02:42</span>
                <div className="flex-1 h-1.5 bg-white/30 [backdrop-filter:blur(2px)] rounded-lg overflow-hidden">
                  <div className="h-full rounded-lg bg-[#007AFF] w-[20%]"></div>
                </div>
                <span className="text-xs font-medium text-white">08:23</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <Icon
                    name="play_circle"
                    height={24}
                    width={24}
                    className="text-white"
                  />
                  <Icon
                    name="go_backward_10sec"
                    height={24}
                    width={24}
                    className="text-white"
                  />
                  <Icon
                    name="go_forward_10sec"
                    height={24}
                    width={24}
                    className="text-white"
                  />
                  <Icon
                    name="volume"
                    height={24}
                    width={24}
                    className="text-white"
                  />
                </div>
                <div className="flex items-center gap-5">
                  <Icon
                    name="settings"
                    height={24}
                    width={24}
                    className="text-white"
                  />
                  <Icon
                    name="maximize"
                    height={24}
                    width={24}
                    className="text-white"
                  />
                  <Icon
                    name="full_screen"
                    height={24}
                    width={24}
                    className="text-white"
                  />
                </div>
              </div>
            </div>
          </div>

          <RelatedClips />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WatchCoachVideo;
