import { AnimatedButton } from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";
import Container from "@/components/ui/Container";
import Icon from "@/components/ui/Icon";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Switch from "@/components/ui/Switch";
import React, { useState } from "react";

const ProgramAdvanceSettings = () => {
  const [capacity, setCapacity] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [inPerson, setInPerson] = useState(false);
  const [online, setOnline] = useState(false);
  const [hybrid, setHybrid] = useState(false);
  const [enableWhitelist, setEnableWhitelist] = useState(false);
  const [requireParentalGuardianAccount, setRequireParentalGuardianAccount] =
    useState(false);
  const [showMapAndDirectionsToMembers, setShowMapAndDirectionsToMembers] =
    useState(false);
  const [athleteCommunication, setAthleteCommunication] = useState(false);
  return (
    <div className="w-full max-w-7xl mx-auto">
      <Container className="p-6 border border-white rounded-[30px]">
        <div className="">
          {/* Header */}
          <div className="flex flex-col mb-8">
            <h1 className="text-xl font-medium text-black ">
              Program Advance Settings
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
                label="Capacity"
                placeholder="Elite Capacity"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                leftIcon={<Icon name="team-people" />}
                leftIconClassName="!top-[35%]"
              />
            </div>
            <div className="">
              <Select
                label="Age"
                options={[
                  { value: "any-age", label: "Any Age" },
                  { value: "18-25", label: "18-25" },
                  { value: "26-35", label: "26-35" },
                  { value: "36-45", label: "36-45" },
                  { value: "46-55", label: "46-55" },
                  { value: "56-65", label: "56-65" },
                  { value: "66-75", label: "66-75" },
                  { value: "76-85", label: "76-85" },
                ]}
                onChange={(e) => setAge(e)}
                value={age}
                placeholder="Select age"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
            <div>
              <label className="mb-2  flex items-center gap-1 text-sm font-medium text-dark">
                Location
                <Icon name="location-icon" />
              </label>
              <Select
                options={[
                  {
                    value: "Global (All Locations)",
                    label: "Global (All Locations)",
                  },
                  { value: "North America", label: "North America" },
                  { value: "Europe", label: "Europe" },
                  { value: "Asia", label: "Asia" },
                ]}
                onChange={(e) => setLocation(e)}
                value={location}
                placeholder="Select location"
              />
            </div>
            <div className="">
              <Select
                label="Time Zone"
                options={[
                  { value: "UTC+0", label: "UTC+0" },
                  { value: "UTC+1", label: "UTC+1" },
                  { value: "UTC+2", label: "UTC+2" },
                  { value: "UTC+3", label: "UTC+3" },
                  { value: "UTC+4", label: "UTC+4" },
                  { value: "UTC+5", label: "UTC+5" },
                  { value: "UTC+6", label: "UTC+6" },
                  { value: "UTC+7", label: "UTC+7" },
                  { value: "UTC+8", label: "UTC+8" },
                  { value: "UTC+9", label: "UTC+9" },
                  { value: "UTC+10", label: "UTC+10" },
                  { value: "UTC+11", label: "UTC+11" },
                  { value: "UTC+12", label: "UTC+12" },
                ]}
                onChange={(e) => setTimeZone(e)}
                value={timeZone}
                placeholder="Select time zone"
              />
            </div>
          </div>
          <div>
            <label className="mb-2  flex items-center gap-1 text-sm font-medium text-dark">
              Format
            </label>
            <div className="flex flex-row gap-10 bg-[#FFFFFF99] rounded-2xl p-4">
              <Checkbox
                label="In-Person"
                onChange={(e) => setInPerson(e.target.checked)}
                checked={inPerson}
              />
              <Checkbox
                label="Online"
                onChange={(e) => setOnline(e.target.checked)}
                checked={online}
              />
              <Checkbox
                label="Hybrid"
                onChange={(e) => setHybrid(e.target.checked)}
                checked={hybrid}
              />
            </div>
          </div>

          <div className="my-5 bg-[#FFFFFF99] rounded-2xl px-4 py-5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-base font-semibold text-dark">
                  Enable Whitelist
                </h2>
              </div>
              <Switch
                value={enableWhitelist}
                onChange={(e: any) => setEnableWhitelist(e.target.checked)}
              />
            </div>

            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-base font-semibold text-dark">
                  Require Parental/Guardian Account
                </h2>
              </div>
              <Switch
                value={requireParentalGuardianAccount}
                onChange={(e: any) =>
                  setRequireParentalGuardianAccount(e.target.checked)
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-base font-semibold text-dark">
                  Show Map & Directions to Members
                </h2>
              </div>
              <Switch
                value={showMapAndDirectionsToMembers}
                onChange={(e: any) =>
                  setShowMapAndDirectionsToMembers(e.target.checked)
                }
              />
            </div>
          </div>

          <div>
            <label className="mb-2  flex items-center gap-1 text-sm font-medium text-dark">
              Communication Permissions
            </label>
            <div className="flex flex-col gap-4 bg-[#FFFFFF99] rounded-2xl p-4">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="md:max-w-3xl">
                  <h2 className="text-base font-semibold text-dark mb-3 md:mb-4">
                    Athlete Communication
                  </h2>
                  <span className="text-sm font-normal text-[#141B34B2]">
                    {" "}
                    Control how your athletes interact inside this program. When
                    enabled, athletes can see and reply to announcements,
                    comments, and each other&apos;s messages. When disabled,
                    athletes will only receive your updates and tasks privately,
                    without being able to communicate with other athletes in
                    this program.
                  </span>
                </div>
                <Switch
                  value={athleteCommunication}
                  onChange={(e: any) =>
                    setAthleteCommunication(e.target.checked)
                  }
                />
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-[#CFE6FA] bg-[#EAF5FD] p-4 md:p-5">
                <Icon name="alert-circle" className="h-6 w-6" />
                <div className="flex flex-col gap-2">
                  <p className="text-base font-medium text-dark">
                    Current Status: Enabled
                  </p>
                  <p className="text-sm font-normal text-[#141B34B2]">
                    Athletes can interact with announcements and participate in
                    group discussions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="my-8">
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

export default ProgramAdvanceSettings;
