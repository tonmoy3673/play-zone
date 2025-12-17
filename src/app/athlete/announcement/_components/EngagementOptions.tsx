"use client";
import VideoUpload from "@/components/Athlete/VideoUpload";
import Container from "@/components/ui/Container";
import Select from "@/components/ui/Select";
import Switch from "@/components/ui/Switch";
import DatePicker from "@/components/ui/DatePicker";
import TimePicker from "@/components/ui/TimePicker";
import Icon from "@/utils/icon";
import React, { useState } from "react";

const EngagementOptions = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [allowComments, setAllowComments] = useState(true);
  const [notifyAthletes, setNotifyAthletes] = useState(true);
  const [createAsUpcoming, setCreateAsUpcoming] = useState(true);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  return (
    <div className="">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-black mb-1">
          Engagement Options
        </h1>
        <span className="text-sm text-[#141b3499]">
          Create the core message for your announcement
        </span>
      </div>
      <Container>
        <div className="bg-[#FFFFFF4D] p-8 border border-white">
          {/* Task Category */}
          <div className="mb-8">
            <label className="block text-base font-medium text-black mb-4">
              Engagement Options
            </label>
            <div className="grid grid-cols-1 gap-2">
              <div className="bg-[#FFFFFF99] p-4 rounded-2xl mb-2">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-normal">Allow Comments</p>
                  <Switch value={allowComments} onChange={setAllowComments} />
                </div>
              </div>

              <div className="bg-[#FFFFFF99] p-4 rounded-2xl mb-2">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <p className="text-sm font-normal">
                      Notify All Assigned Athletes
                    </p>
                  </div>
                  <Switch value={notifyAthletes} onChange={setNotifyAthletes} />
                </div>
              </div>

              {/* Date and Time Pickers - Only show when creating as upcoming */}
              {createAsUpcoming && (
                <div className="bg-[#FFFFFF99] p-4 rounded-2xl">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <h3 className="text-sm font-normal mb-3">
                        Create Announcement as Upcoming
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <DatePicker
                          value={selectedDate}
                          onChange={setSelectedDate}
                          placeholder="08/07/2026"
								  className="bg-[#EEF6F8] rounded-2xl"
                        />
                        <TimePicker
                          value={selectedTime}
                          onChange={setSelectedTime}
                          placeholder="8:30 AM"
								  className="bg-[#EEF6F8] rounded-2xl"
                        />
                      </div>
                    </div>
						  <Switch value={createAsUpcoming} onChange={setCreateAsUpcoming} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default EngagementOptions;
