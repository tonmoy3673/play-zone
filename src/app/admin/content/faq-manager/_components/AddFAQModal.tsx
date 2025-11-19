"use client";

import Icon from "@/utils/icon";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";
import { Dispatch, SetStateAction } from "react";
import { AnimatedButton } from "@/components/ui/Button";

const AddFAQModal = ({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <form>
      <div className="p-5 grid gap-4">
        <Input
          label="Question"
          placeholder="Enter Question"
          className="bg-[#F8FAFF] rounded-2xl"
        />

        <div className="grid gap-3">
          <label className="font-medium text-sm">Answer</label>

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

        <div className="grid sm:grid-cols-2 gap-4">
          <Select
            label="Category"
            placeholder="Select Category"
            options={[
              {
                label: "Category 1",
                value: "Category 1",
              },
              {
                label: "Category 2",
                value: "Category 2",
              },
            ]}
            className="bg-[#F8FAFF] rounded-2xl"
          />
          <Select
            label="Section"
            placeholder="Select Section"
            options={[
              {
                label: "Account",
                value: "Account",
              },
              {
                label: "Marketing",
                value: "Marketing",
              },
            ]}
            className="bg-[#F8FAFF] rounded-2xl"
          />
        </div>

        <div className="grid gap-3">
          <label className="font-medium text-sm">
            Credentials & Certifications
          </label>
          <label className="bg-[#F8FAFF] border border-dashed border-[#276AEE] cursor-pointer p-5 rounded-2xl text-center flex flex-col items-center justify-between">
            <input type="file" name="certifications" className="peer sr-only" />

            <div className="size-12 rounded-full bg-white flex items-center justify-center">
              <Icon
                name="cloud_upload"
                height={20}
                width={20}
                className="text-dark"
              />
            </div>

            <div className="grid gap-1">
              <span className="text-xs font-medium text-dark">
                Drag and drop an Attachment
              </span>
              <span className="text-sm text-dark/70">or</span>
              <span className="text-xs font-medium primary-gradient-text">
                Browse Files
              </span>
            </div>
          </label>
        </div>

        <div className="text-sm  text-dark">
          <div className="grid gap-3">
            <label className="font-medium">Plan</label>

            <div className="flex items-center gap-6 text-sm text-dark">
              {[
                {
                  label: "Publish Now",
                  value: "Publish Now",
                },
                {
                  label: "Schedule",
                  value: "Schedule",
                },
              ].map(({ label, value }) => (
                <label
                  key={value}
                  className="flex cursor-pointer items-center gap-2"
                >
                  <input
                    type="radio"
                    name="plan"
                    value={value}
                    className="peer sr-only"
                  />
                  <div className="size-[18px] rounded-full border-2 border-[#A1A4AE] peer-checked:border-[#5C8FF7] relative after:absolute after:size-2 after:bg-primary-gradient after:rounded-full after:hidden after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 peer-checked:after:block after:transition-all transition-all"></div>
                  <span className="peer-checked:text-blue-600">{label}</span>
                </label>
              ))}
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

        <div className="flex gap-2 flex-wrap">
          <AnimatedButton
            type="button"
            className="bg-[#1556D826] border border-[#1556D81A] whitespace-nowrap px-4 py-2.5  h-[42px] flex items-center rounded-full gap-2 text-sm font-medium"
          >
            <span className="primary-gradient-text">Preview</span>
          </AnimatedButton>
          <AnimatedButton
            type="submit"
            className="bg-primary-gradient border border-[#1556D84D] whitespace-nowrap px-4 py-2.5  h-[42px] flex items-center rounded-full gap-2 text-sm font-medium text-white"
          >
            Publish
          </AnimatedButton>
        </div>
      </div>
    </form>
  );
};

export default AddFAQModal;
