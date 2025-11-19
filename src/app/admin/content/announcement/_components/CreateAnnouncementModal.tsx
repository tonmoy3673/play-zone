"use client";

import Icon from "@/utils/icon";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import { Dispatch, SetStateAction } from "react";
import { AnimatedButton } from "@/components/ui/Button";
import Switch from "@/components/ui/Switch";
import Textarea from "@/components/ui/Textarea";

const CreateAnnouncementModal = ({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <form>
      <div className="p-5 grid gap-4">
        <div className="grid gap-3">
          <label className="font-medium text-sm">Channel</label>

          <div className="grid grid-cols-3 text-center gap-4 text-sm text-dark">
            {[
              {
                label: "System Update",
                value: "System Update",
              },
              {
                label: "Promotion",
                value: "Promotion",
              },
              {
                label: "Maintenance",
                value: "Maintenance",
              },
            ].map(({ label, value }) => (
              <label
                key={value}
                className="flex cursor-pointer items-center gap-2"
              >
                <input
                  type="radio"
                  name="channel"
                  value={value}
                  className="peer sr-only"
                />
                <div className="h-14 w-full rounded-2xl relative text-center border border-[#F8FAFF] text-dark bg-[#F8FAFF] flex items-center justify-center transition-all px-5 peer-checked:bg-primary-gradient peer-checked:border-[#1556D84D] peer-checked:text-white">
                  {label}
                </div>
              </label>
            ))}
          </div>
        </div>

        <Input
          label="Announcement Title"
          placeholder="Title Here"
          className="bg-[#F8FAFF] rounded-2xl"
        />

        <div className="grid gap-3">
          <label className="font-medium text-sm">Description</label>

          <div className="bg-[#F8FAFF] rounded-2xl">
            <div className="flex items-center gap-3 p-5 border-b border-[#F3F3F3]">
              <div className="flex items-center gap-2.5">
                <Icon
                  name="text_bold"
                  height={16}
                  width={16}
                  className="text-[#595F70] hover:text-[#276AEE]"
                />
                <Icon
                  name="text_italic"
                  height={16}
                  width={16}
                  className="text-[#595F70] hover:text-[#276AEE]"
                />
                <Icon
                  name="text_underline"
                  height={16}
                  width={16}
                  className="text-[#595F70] hover:text-[#276AEE]"
                />
              </div>

              <div className="h-3.5 w-px bg-[#D5D5D5]" />

              <div className="flex items-center gap-2.5">
                <Icon
                  name="left_to_right_list_bullet"
                  height={16}
                  width={16}
                  className="text-[#595F70] hover:text-[#276AEE]"
                />
                <Icon
                  name="left_to_right_list_number"
                  height={16}
                  width={16}
                  className="text-[#595F70] hover:text-[#276AEE]"
                />
              </div>

              <div className="h-3.5 w-px bg-[#D5D5D5]" />

              <div className="flex items-center gap-2.5">
                <Icon
                  name="link"
                  height={16}
                  width={16}
                  className="text-[#595F70] hover:text-[#276AEE]"
                />
                <Icon
                  name="eye"
                  height={16}
                  width={16}
                  className="text-[#595F70] hover:text-[#276AEE]"
                />
                <Icon
                  name="kid"
                  height={16}
                  width={16}
                  className="text-[#595F70] hover:text-[#276AEE]"
                />
              </div>
            </div>

            <Textarea
              className="bg-transparent min-h-24 rounded-none border-none"
              placeholder="Write the details of your announcement..."
            />
          </div>
        </div>

        <div className="grid gap-3">
          <label className="font-medium text-sm">Upload Videos</label>
          <label className="bg-[#F8FAFF] border border-dashed border-[#276AEE] cursor-pointer p-5 rounded-2xl text-center flex flex-col items-center justify-between">
            <input type="file" name="certifications" className="peer sr-only" />

            <div className="size-12 rounded-full bg-white flex items-center justify-center">
              <Icon name="video" height={20} width={20} className="text-dark" />
            </div>

            <div className="grid gap-1">
              <span className="text-xs font-medium text-dark">
                Choose a video drag & drop it here
              </span>
              <span className="text-[10px] text-dark/70">
                MP3, MP4, Up to 50 MB.
              </span>
              <span className="text-sm text-dark/70">or</span>
              <span className="text-xs font-medium primary-gradient-text">
                Browse Files
              </span>
            </div>
          </label>
        </div>

        <Select
          label="Target Audience"
          placeholder="Select Audience"
          options={[
            {
              label: "All Users",
              value: "All Users",
            },
          ]}
          className="bg-[#F8FAFF] rounded-2xl"
        />

        <div className="grid gap-3">
          <label className="font-medium text-sm">Plan</label>

          <div className="bg-[#F8FAFF] rounded-2xl p-5 grid gap-3 text-sm font-medium text-dark">
            <div className="flex items-center justify-between">
              <span>Push Notification</span>
              <Switch value={true} />
            </div>
            <div className="flex items-center justify-between">
              <span>Email Notification</span>
              <Switch value={false} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 p-5 border-t border-[#EBF1FF]">
        <AnimatedButton
          type="button"
          onClick={() => setIsOpen(false)}
          className="bg-[#1556D826] border border-[#1556D81A] whitespace-nowrap px-4 py-2.5  h-[42px] flex items-center rounded-full gap-2 text-sm font-medium"
        >
          <span className="primary-gradient-text">Cancel</span>
        </AnimatedButton>

        <AnimatedButton
          type="submit"
          className="bg-primary-gradient border border-[#1556D84D] whitespace-nowrap px-4 py-2.5  h-[42px] flex items-center rounded-full gap-2 text-sm font-medium text-white"
        >
          Publish
        </AnimatedButton>
      </div>
    </form>
  );
};

export default CreateAnnouncementModal;
