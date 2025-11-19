"use client";
import Container from "@/components/ui/Container";
import { AnimatedButton } from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import { useRef, useState } from "react";
import Icon from "@/components/ui/Icon";

const skillLevelOptions = [
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
];

const BasicInformation = () => {
  const [programName, setProgramName] = useState("");
  const [subSport, setSubSport] = useState("");
  const [skillLevel, setSkillLevel] = useState("");
  const [primarySport, setPrimarySport] = useState("Swimming");
  const [programDescription, setProgramDescription] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUploadClick = () => {
    fileInputRef.current?.click();
  };
  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <Container className="p-6 border border-white rounded-[30px]">
        <div className="">
          {/* Header */}
          <div className="flex flex-col mb-8">
            <h1 className="text-xl font-medium text-black ">
              Program Basic Information
            </h1>
            <span className="text-sm font-normal text-[#141B34B2]">
              Basic details that appear on the explore page
            </span>
          </div>

          {/* Fields */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
            <div className="">
              <Input
                type="text"
                label="Program Name"
                placeholder="Elite QB Training Program"
                value={programName}
                onChange={(e) => setProgramName(e.target.value)}
              />
            </div>
            <div className="">
              <Select
                label="Sport"
                placeholder="Select sport"
                options={[
                  {
                    value: "baseball",
                    label: "Baseball",
                  },
                  {
                    value: "basketball",
                    label: "Basketball",
                  },
                  {
                    value: "football",
                    label: "Football",
                  },
                  {
                    value: "swimming",
                    label: "Swimming",
                  },
                ]}
                onChange={setPrimarySport}
                value={primarySport}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
            <div className="">
              <Input
                type="text"
                label="Sub-Sport"
                placeholder="Select sub-sport"
                value={subSport}
                onChange={(e) => setSubSport(e.target.value)}
              />
            </div>
            <div className="">
              <Select
                label="Skill Level"
                placeholder="Select skill level"
                options={skillLevelOptions}
                onChange={setSkillLevel}
                value={skillLevel}
              />
            </div>
          </div>

          {/* images section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
            <div className="flex flex-col gap-2">
              <label className="mb-2  flex items-center gap-1 text-sm font-medium text-dark">
                Program Cover Image
              </label>
              <button
                onClick={handleFileUploadClick}
                className="py-10 px-[100px] border border-dashed border-[#276AEE] rounded-2xl hover:border-blue-500 transition flex flex-col items-center gap-3 bg-white cursor-pointer"
              >
                <Icon name="cloud-icon" />
                <div className="text-center">
                  <p className=" text-sm font-medium text-black">
                    Upload Logo{" "}
                  </p>
                </div>
              </button>
            </div>

            {/* Upload File */}
            <div className="flex flex-col gap-2">
              <label className="mb-2  flex items-center gap-1 text-sm font-medium text-dark">
                Program Logo
              </label>
              <button
                onClick={handleFileUploadClick}
                className="py-10 px-[100px] border border-dashed border-[#276AEE] rounded-2xl hover:border-blue-500 transition flex flex-col items-center gap-3 bg-white cursor-pointer"
              >
                <Icon name="cloud-icon" />
                <div className="text-center">
                  <p className=" text-sm font-medium text-black">
                    Upload cover image
                  </p>
                </div>
              </button>
            </div>
          </div>

          {/* text area section */}
          <div className="mb-8">
            <div className="flex flex-col gap-2 mb-4">
              <label className="mb-2  flex items-center gap-1 text-sm font-medium text-dark">
                Program Description
              </label>
              <textarea
                placeholder="Our comprehensive quarterback training program is designed for athletes looking to elevate their game to the next level. We focus on fundamental mechanics, reading defenses, pocket presence, and leadership skills essential for successful quarterbacks."
                rows={6}
                value={programDescription}
                onChange={(e) => setProgramDescription(e.target.value)}
                className="w-full rounded-xl bg-white
                                 min-h-24 max-h-40 py-4 px-4  text-sm text-gray-900 placeholder:text-placeholder focus:outline-none  border border-white resize-none focus:border-[#5C8FF7]"
              />
            </div>

            <div className="flex flex-col gap-2 mb-4">
              <label className="mb-2  flex items-center gap-1 text-sm font-medium text-dark">
                Welcome Message
              </label>
              <textarea
                placeholder="Welcome to our elite QB training program! We're excited to have you join us."
                rows={6}
                value={welcomeMessage}
                onChange={(e) => setWelcomeMessage(e.target.value)}
                className="w-full rounded-xl bg-white
                                 min-h-24 max-h-40 py-4 px-4  text-sm text-gray-900 placeholder:text-placeholder focus:outline-none  border border-white resize-none focus:border-[#5C8FF7]"
              />
            </div>
          </div>

          <div className="mb-8">
            {/* Save Changes Button */}
            <div className="flex justify-end">
              <AnimatedButton
                style={{
                  borderRadius: "100px",
                  background:
                    "var(--Gradient, linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%))",
                }}
                className=" text-white px-5 py-2.5  text-sm font-medium"
              >
                Save Changes
              </AnimatedButton>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BasicInformation;
