/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import VideoUpload from "@/components/Athlete/VideoUpload";
import Button, { AnimatedButton } from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Switch from "@/components/ui/Switch";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

interface Achievement {
  id: string;
  title: string;
}

export default function PersonalInfo() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("Global (All Locations)");
  const [language, setLanguage] = useState("English");
  const [age, setAge] = useState("25");
  const [primarySport, setPrimarySport] = useState("Swimming");
  const [primaryPosition, setPrimaryPosition] = useState("Swimming");
  const [achievements, setAchievements] = useState<Achievement[]>([
    { id: "1", title: "Running Point Guard Award" },
    { id: "2", title: "Running Point Guard Award" },
  ]);
  const [allowWorkout, setAllowWorkout] = useState(true);
  const [showPrograms, setShowPrograms] = useState(true);
  const [showConnections, setShowConnections] = useState(true);
  const [addConnection, setAddConnection] = useState("Everyone");
  const [directMessage, setDirectMessage] = useState("Connections Only");

  const removeAchievement = (id: string) => {
    setAchievements(achievements.filter((a) => a.id !== id));
  };

  return (
    <Container>
      <div
        style={{
          borderRadius: "30px",
          background: "rgba(255, 255, 255, 0.30)",
        }}
        className="w-full backdrop-blur-3xl p-8 py-12 border border-white"
      >
        <div className="w-full  max-w-screen-xl mx-auto">
          <VideoUpload />
          {/* Header */}
          <h1 className="text-xl font-medium text-black py-8">Personal info</h1>

          {/* Avatar Section */}
          <div className="mb-7">
            <h2 className="text-sm font-medium text-dark mb-3">Avatar</h2>
            <div className="flex items-center gap-5">
              <div className="size-[150px] rounded-full bg-gray-300 flex-shrink-0 overflow-hidden">
                <Image
                  src="https://i.ibb.co.com/NnypBcgL/image.png"
                  width={200}
                  height={200}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Button className="text-[#276AEE] text-sm bg-white rounded-4xl px-7 py-2 font-medium">
                    Upload New Image
                  </Button>
                  <AnimatedButton
                    style={{
                      borderRadius: "62px",
                      border:
                        "1px solid var(--P-button-Stoke, rgba(21, 86, 216, 0.30))",
                      background:
                        "var(--Gradient, linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%))",
                    }}
                    className="text-sm flex items-center justify-center gap-2 text-white font-medium"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M8.95801 0C9.42561 1.00331e-07 9.8066 0.19641 10.1533 0.460938C10.478 0.708677 10.8359 1.06727 11.2549 1.48633L11.2852 1.51562C11.7139 1.94428 12.0879 2.11328 12.665 2.11328C12.7371 2.11327 12.8285 2.11034 12.9316 2.10742C13.1938 2.1 13.5329 2.09025 13.8291 2.11523C14.2637 2.15193 14.8085 2.269 15.2236 2.68066C15.642 3.09555 15.762 3.6427 15.7998 4.08008C15.8256 4.37902 15.816 4.72125 15.8086 4.98535C15.8057 5.08798 15.8027 5.17887 15.8027 5.25098C15.8027 5.62667 15.8446 5.83721 15.917 6.00293C15.9913 6.173 16.1226 6.35307 16.4004 6.63086L16.4297 6.66113C16.8487 7.08015 17.2073 7.438 17.4551 7.7627C17.7196 8.10941 17.916 8.49039 17.916 8.95801C17.916 9.4256 17.7196 9.8066 17.4551 10.1533C17.2073 10.4781 16.8489 10.8367 16.4297 11.2559L16.4004 11.2852C16.1226 11.5629 15.9913 11.743 15.917 11.9131C15.8446 12.0788 15.8027 12.2894 15.8027 12.665C15.8027 12.7372 15.8057 12.8289 15.8086 12.9316C15.816 13.1957 15.8256 13.5371 15.7998 13.8359C15.762 14.2733 15.642 14.8205 15.2236 15.2354C14.8085 15.647 14.2637 15.7641 13.8291 15.8008C13.5329 15.8258 13.1938 15.816 12.9316 15.8086C12.8285 15.8057 12.7371 15.8027 12.665 15.8027C12.2974 15.8027 12.0904 15.8401 11.9277 15.9072C11.7652 15.9743 11.5909 16.0937 11.3291 16.3555C11.2732 16.4114 11.2002 16.491 11.1152 16.582C10.9236 16.7874 10.6741 17.0544 10.4414 17.2578C10.0883 17.5665 9.58169 17.916 8.95801 17.916C8.33433 17.916 7.82776 17.5665 7.47461 17.2578C7.2419 17.0544 6.99241 16.7874 6.80078 16.582C6.71582 16.491 6.64282 16.4114 6.58691 16.3555C6.32511 16.0937 6.15079 15.9743 5.98828 15.9072C5.82562 15.8401 5.61865 15.8027 5.25098 15.8027C5.1789 15.8027 5.08752 15.8057 4.98438 15.8086C4.72217 15.816 4.38309 15.8258 4.08691 15.8008C3.6523 15.7641 3.10755 15.647 2.69238 15.2354C2.274 14.8205 2.15404 14.2733 2.11621 13.8359C2.0904 13.5371 2.09999 13.1957 2.10742 12.9316C2.11032 12.8288 2.11327 12.7373 2.11328 12.665C2.11328 12.2894 2.07141 12.0788 1.99902 11.9131C1.92468 11.743 1.79339 11.5629 1.51562 11.2852L1.48633 11.2559C1.06713 10.8367 0.708741 10.4781 0.460938 10.1533C0.19641 9.8066 1.24778e-05 9.4256 0 8.95801C6.50642e-06 8.49041 0.196415 8.10941 0.460938 7.7627C0.708676 7.438 1.06727 7.08015 1.48633 6.66113L1.51562 6.63086C1.94437 6.20205 2.11328 5.8279 2.11328 5.25098C2.11327 5.1789 2.11034 5.08752 2.10742 4.98438C2.1 4.72217 2.09025 4.3831 2.11523 4.08691C2.15193 3.6523 2.26901 3.10755 2.68066 2.69238C3.09555 2.27401 3.64269 2.15404 4.08008 2.11621C4.37887 2.0904 4.72033 2.09999 4.98438 2.10742C5.08723 2.11032 5.17873 2.11327 5.25098 2.11328C5.82789 2.11328 6.20206 1.94435 6.63086 1.51562L6.66113 1.48633C7.08015 1.06727 7.43799 0.708677 7.7627 0.460938C8.10942 0.19641 8.4904 0 8.95801 0ZM11.9941 6.23633C11.6418 5.94039 11.1163 5.98656 10.8203 6.33887L7.87207 9.84766L7.0127 9.08008C6.66938 8.77391 6.14235 8.80428 5.83594 9.14746C5.52986 9.49076 5.56021 10.0168 5.90332 10.3232L7.40332 11.6631C7.5714 11.813 7.7929 11.8882 8.01758 11.8721C8.24234 11.8559 8.45075 11.7497 8.5957 11.5771L12.0957 7.41113C12.3917 7.05873 12.3465 6.53235 11.9941 6.23633Z"
                        fill="white"
                      />
                    </svg>
                    Get verified
                  </AnimatedButton>
                </div>
                <p className="text-sm font-normal text-[#141b34b3] ">
                  At least 800x800 px recommended.
                  <br />
                  JPG or PNG and GIF is allowed
                </p>
              </div>
            </div>
          </div>

          {/* Name Fields */}

          <div className="grid grid-cols-2 gap-6">
            <div className="max-w-xl">
              <Input
                type="text"
                label="First name"
                placeholder="Enter first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="max-w-xl">
              <Input
                type="text"
                label="Last name"
                placeholder="Enter last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          {/* Bio Section */}
          <div className="my-5">
            <label className="mb-2 block text-sm font-medium text-dark">
              Bio
            </label>
            <textarea
              placeholder="Add your bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className={cn(
                "w-full rounded-xl bg-[#ffffff80] min-h-24 max-h-40 py-4 px-4  text-sm text-gray-900 placeholder:text-placeholder focus:outline-none  border border-white",
                "focus:border-[#5C8FF7]"
              )}
              rows={4}
            />
          </div>

          {/* Location, Language, Age */}
          <div className="mb-5 ">
            <div className="grid grid-cols-3 gap-6">
              <div>
                <label className="mb-2  flex items-center gap-1 text-sm font-medium text-dark">
                  Location
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="14"
                    viewBox="0 0 13 14"
                    fill="none"
                  >
                    <path
                      d="M8.47498 6.22501C8.47498 7.46765 7.46762 8.47501 6.22498 8.47501C4.98233 8.47501 3.97498 7.46765 3.97498 6.22501C3.97498 4.98237 4.98233 3.97501 6.22498 3.97501C7.46762 3.97501 8.47498 4.98237 8.47498 6.22501Z"
                      stroke="#141B34"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M6.22498 0.600006C9.26907 0.600006 11.85 3.17103 11.85 6.29018C11.85 9.45901 9.22705 11.6828 6.80435 13.1949C6.62779 13.2966 6.42813 13.35 6.22498 13.35C6.02182 13.35 5.82216 13.2966 5.6456 13.1949C3.22741 11.668 0.599976 9.46996 0.599976 6.29018C0.599976 3.17103 3.18088 0.600006 6.22498 0.600006Z"
                      stroke="#141B34"
                      strokeWidth="1.2"
                    />
                  </svg>
                </label>
                <Select
                  className="py-3.5 text-sm rounded-lg"
                  options={[
                    {
                      value: "Global (All Locations)",
                      label: "Global (All Locations)",
                    },
                    { value: "North America", label: "North America" },
                    { value: "Europe", label: "Europe" },
                    { value: "Asia", label: "Asia" },
                  ]}
                  onChange={setLocation}
                  value={location}
                  placeholder="Select location"
                />
              </div>
              <div>
                <label className="mb-2  flex items-center gap-1 text-sm font-medium text-dark">
                  Language
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                  >
                    <path
                      opacity="0.4"
                      d="M0.599976 8.10002C0.599976 8.88895 0.735323 9.64627 0.984063 10.35M8.86022 5.85001H15.2261M7.34998 10.35H0.984063M15.2261 5.85001C14.2995 3.22832 11.7992 1.35001 8.86022 1.35001C10.0609 1.35001 11.0419 4.17151 11.1068 7.72501M15.2261 5.85001C15.4352 6.44151 15.5642 7.07086 15.6 7.72501M0.984063 10.35C1.9107 12.9717 4.41098 14.85 7.34998 14.85C6.19184 14.85 5.23807 12.225 5.11371 8.85002"
                      stroke="#141B34"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M0.599976 3.07301C0.599976 2.24923 0.599976 1.83735 0.740514 1.51792C0.889552 1.17918 1.14644 0.906916 1.46605 0.748957C1.76743 0.600006 2.15606 0.600006 2.93331 0.600006H3.59998C5.01419 0.600006 5.7213 0.600006 6.16064 1.06564C6.59998 1.53128 6.59998 2.28072 6.59998 3.77958V5.47389C6.59998 6.1277 6.59998 6.4546 6.40192 6.56694C6.20387 6.67928 5.94723 6.49795 5.43395 6.13528L5.35575 6.08003C4.98062 5.81497 4.79306 5.68244 4.58049 5.61423C4.36792 5.54602 4.14249 5.54602 3.69165 5.54602H2.93331C2.15606 5.54602 1.76743 5.54602 1.46605 5.39706C1.14644 5.23911 0.889552 4.96685 0.740514 4.6281C0.599976 4.30867 0.599976 3.89679 0.599976 3.07301Z"
                      stroke="#141B34"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M15.6 12.073C15.6 11.2492 15.6 10.8373 15.4594 10.5179C15.3104 10.1792 15.0535 9.90692 14.7339 9.74896C14.4325 9.60001 14.0439 9.60001 13.2666 9.60001H12.6C11.1858 9.60001 10.4787 9.60001 10.0393 10.0656C9.59998 10.5313 9.59998 11.2807 9.59998 12.7796V14.4739C9.59998 15.1277 9.59998 15.4546 9.79803 15.5669C9.99608 15.6793 10.2527 15.4979 10.766 15.1353L10.8442 15.08C11.2193 14.815 11.4069 14.6824 11.6195 14.6142C11.832 14.546 12.0575 14.546 12.5083 14.546H13.2666C14.0439 14.546 14.4325 14.546 14.7339 14.3971C15.0535 14.2391 15.3104 13.9668 15.4594 13.6281C15.6 13.3087 15.6 12.8968 15.6 12.073Z"
                      stroke="#141B34"
                      strokeWidth="1.2"
                    />
                  </svg>
                </label>
                <Select
                  className="py-3.5 text-sm rounded-lg"
                  options={[
                    { value: "English", label: "English" },
                    { value: "Spanish", label: "Spanish" },
                    { value: "French", label: "French" },
                    { value: "German", label: "German" },
                  ]}
                  onChange={setLanguage}
                  value={language}
                  placeholder="Select language"
                />
              </div>
              <div>
                <label className="mb-2  flex items-center gap-1 text-sm font-medium text-dark">
                  Age
                </label>
                <Input
                  className="py-3.5 text-sm rounded-lg"
                  onChange={(e) => setAge(e.target.value)}
                  value={age}
                  type="number"
                  placeholder="Enter Age"
                />
              </div>
            </div>
          </div>

          {/* Primary Sport and Position */}
          <div className="mb-5">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <Select
                  label="Primary Sports"
                  className="py-3.5 text-sm rounded-lg"
                  options={[
                    {
                      value: "baseball",
                      label: "Baseball",
                      icon: (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <circle cx="12" cy="12" r="10" strokeWidth="2" />
                          <path
                            d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"
                            strokeWidth="2"
                          />
                          <path
                            d="M8 8c2-2 6-2 8 0M8 16c2 2 6 2 8 0"
                            strokeWidth="2"
                          />
                        </svg>
                      ),
                    },
                    {
                      value: "swimming",
                      label: "Swimming",
                      icon: (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            d="M2 15c1.67-1.33 3.33-1.33 5 0 1.67 1.33 3.33 1.33 5 0 1.67-1.33 3.33-1.33 5 0 1.67 1.33 3.33 1.33 5 0M2 19c1.67-1.33 3.33-1.33 5 0 1.67 1.33 3.33 1.33 5 0 1.67-1.33 3.33-1.33 5 0 1.67 1.33 3.33 1.33 5 0"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <circle cx="7" cy="8" r="2" strokeWidth="2" />
                          <path
                            d="M14 6l3 3-3 3"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ),
                    },
                    {
                      value: "basketball",
                      label: "Basketball",
                      icon: (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <circle cx="12" cy="12" r="10" strokeWidth="2" />
                          <path d="M12 2v20M2 12h20" strokeWidth="2" />
                          <path
                            d="M12 2c-3 3-3 7 0 10s3 7 0 10M12 2c3 3 3 7 0 10s-3 7 0 10"
                            strokeWidth="2"
                          />
                        </svg>
                      ),
                    },
                    {
                      value: "football",
                      label: "Football",
                      icon: (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <ellipse
                            cx="12"
                            cy="12"
                            rx="10"
                            ry="7"
                            strokeWidth="2"
                          />
                          <path
                            d="M12 5v14M7 9l10 6M7 15l10-6"
                            strokeWidth="2"
                          />
                        </svg>
                      ),
                    },
                  ]}
                  onChange={setPrimarySport}
                  value={primarySport}
                  placeholder="Select primary sport"
                />
              </div>
              <div>
                <Select
                  label="Primary Position"
                  className="py-3.5 text-sm rounded-lg"
                  options={[
                    { value: "forward", label: "Forward" },
                    { value: "midfielder", label: "Midfielder" },
                    { value: "defender", label: "Defender" },
                    { value: "goalkeeper", label: "Goalkeeper" },
                  ]}
                  onChange={setPrimaryPosition}
                  value={primaryPosition}
                  placeholder="Select primary sport"
                />
              </div>
            </div>
          </div>

          {/* Credentials & Certifications */}
          <div className="mb-5 ">
            <h2 className="text-sm font-medium text-dark mb-3">
              Credentials & Certifications
            </h2>
            <div className=" border bg-[#ffffff80] backdrop-blur-3xl border-white rounded-2xl p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="22"
                  viewBox="0 0 19 22"
                  fill="none"
                >
                  <path
                    d="M0.75 8.75C0.75 4.97876 0.75 3.09315 1.9948 1.92157C3.23959 0.75 5.24306 0.75 9.25 0.75H10.0227C13.2839 0.75 14.9145 0.75 16.0469 1.54784C16.3714 1.77643 16.6594 2.04752 16.9023 2.35289C17.75 3.41867 17.75 4.95336 17.75 8.02273V10.5682C17.75 13.5314 17.75 15.0129 17.2811 16.1962C16.5272 18.0986 14.9329 19.5991 12.9116 20.3086C11.6544 20.75 10.0802 20.75 6.93182 20.75C5.13275 20.75 4.23322 20.75 3.51478 20.4978C2.35979 20.0924 1.44875 19.2349 1.01796 18.1479C0.75 17.4717 0.75 16.6251 0.75 14.9318V8.75Z"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.75 10.75C17.75 12.5909 16.2576 14.0833 14.4167 14.0833C13.7509 14.0833 12.966 13.9667 12.3186 14.1401C11.7435 14.2942 11.2942 14.7435 11.1401 15.3186C10.9667 15.966 11.0833 16.7509 11.0833 17.4167C11.0833 19.2576 9.59095 20.75 7.75 20.75"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    opacity="0.4"
                    d="M5.25 5.75H12.25"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    opacity="0.4"
                    d="M5.25 9.75H8.25"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div>
                  <p className="text-sm font-medium text-dark">
                    Upload Your File here
                  </p>
                  <p className="text-xs text-[#141b34b3]">
                    File or PDF must be less than 20 MB
                  </p>
                </div>
              </div>
              <Button className="bg-[#457ff326] text-[#276AEE] px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors">
                Browse Files
              </Button>
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-medium text-dark">Achievements</h2>
              <a
                href="#"
                className="text-blue-500 text-sm font-medium hover:underline"
              >
                Add Another
              </a>
            </div>
            <div className="space-y-3">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="flex items-center justify-between backdrop-blur-3xl border border-white bg-[#ffffff80] p-4 py-5 rounded-2xl"
                >
                  <span className="text-sm text-dark">{achievement.title}</span>
                  <button
                    onClick={() => removeAchievement(achievement.id)}
                    className="text-gray-400 hover:text-[#141b3499] transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-5">
            <h2 className="text-sm font-medium text-dark mb-5">
              Privacy Settings
            </h2>

            {/* Toggle Options */}
            <div className="space-y-2 bg-[#ffffff99] backdrop-blur-3xl border border-white rounded-2xl p-5 mb-8">
              <div className="flex items-center border-b border-b-[#D8E5E8] py-2.5 justify-between">
                <span className="text-sm font-medium text-dark">
                  Allow Others to Setup Workout with Me
                </span>
                <Switch
                  value={allowWorkout}
                  onChange={(e: any) => setAllowWorkout(e.target.checked)}
                />
              </div>
              <div className="flex items-center border-b border-b-[#D8E5E8] py-2.5 justify-between">
                <span className="text-sm font-medium text-dark">
                  Show my Current Programs
                </span>
                <Switch
                  value={showPrograms}
                  onChange={(e: any) => setShowPrograms(e.target.checked)}
                />
              </div>
              <div className="flex items-center  py-2.5 justify-between">
                <span className="text-sm font-medium text-dark">
                  Show my Connections
                </span>
                <Switch
                  value={showConnections}
                  onChange={(e: any) => setShowConnections(e.target.checked)}
                />
              </div>
            </div>

            {/* Dropdown Options */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <Select
                  label="Who can add me as connection"
                  className="py-3.5 text-sm rounded-lg"
                  options={[
                    { value: "everyone", label: "Everyone" },
                    { value: "connections", label: "Connections" },
                    { value: "no one", label: "No One" },
                  ]}
                  onChange={setAddConnection}
                  value={addConnection}
                  placeholder="Who can add me as connection"
                />
              </div>
              <div>
                <Select
                  label="Who can direct message me"
                  className="py-3.5 text-sm rounded-lg"
                  options={[
                    { value: "everyone", label: "Everyone" },
                    { value: "connections", label: "Connections" },
                    { value: "no one", label: "No One" },
                  ]}
                  onChange={setDirectMessage}
                  value={directMessage}
                  placeholder="Who can direct message me"
                />
              </div>
            </div>

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
      </div>
    </Container>
  );
}
