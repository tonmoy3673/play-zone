"use client";
import VideoUpload from "@/components/Athlete/VideoUpload";
import { AnimatedButton } from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import Icon from "@/utils/icon";
import { useState } from "react";

const Page = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="overflow-y-auto bg-[#E7F2F5] rounded-3xl mt-3">
      <Container className="p-6 mx-auto">
        <div className="flex gap-4 items-center mb-8">
          <button
            onClick={() => setStep(step > 1 ? step - 1 : 1)}
            className="bg-[#FFFFFF4D] rounded-full p-3 shadow-sm hover:shadow-md transition-shadow"
          >
            <Icon name="back" width={20} height={20} />
          </button>
          <div>
            <h1 className="text-2xl font-medium text-dark">
              QB Fundamentals Program
            </h1>
            <p className="text-sm text-[#141b3499] mt-1">
              Advanced footwork analysis • Due May 15, 2025
            </p>
          </div>
        </div>

        {step === 1 && (
          <div>
            <div className="grid lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-[#FFFFFF4D] rounded-2xl border border-white shadow-sm p-6">
                  <div className="flex gap-3 items-center mb-6">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                      alt="User"
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-base font-semibold text-dark">
                        Coach Johnson
                      </p>
                      <p className="text-sm text-gray-500">
                        Assigned this task
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h2 className="text-lg font-normal text-dark mb-3">
                        Task Instructions
                      </h2>
                      <p className="text-sm text-[#141b34b3] mb-4">
                        Record 3 repetitions of the QB footwork drill from a
                        sideline view. Focus on:
                      </p>
                      <ul className="space-y-2 ml-4">
                        <li className="text-sm text-[#141b34b3] flex items-start">
                          <span className="w-1.5 h-1.5 bg-[#141b34b3] rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                          Proper foot placement and spacing
                        </li>
                        <li className="text-sm text-[#141b34b3] flex items-start">
                          <span className="w-1.5 h-1.5 bg-[#141b34b3] rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                          Smooth transition between steps
                        </li>
                        <li className="text-sm text-[#141b34b3] flex items-start">
                          <span className="w-1.5 h-1.5 bg-[#141b34b3] rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                          Maintain balance throughout the movement
                        </li>
                        <li className="text-sm text-[#141b34b3] flex items-start">
                          <span className="w-1.5 h-1.5 bg-[#141b34b3] rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                          Quick release at the end of each rep
                        </li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-2xl p-4 flex gap-3">
                      <div className="mt-0.5">
                        <Icon name="tips" width={22} height={22} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-dark mb-1">
                          Recording Tips:
                        </p>
                        <p className="text-sm text-[#141b34b3]">
                          Ensure the camera captures your full body and the
                          ground. Record in landscape mode for best results.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-normal text-dark mb-3">
                    My Notes
                  </h2>
                  <textarea
                    rows={4}
                    placeholder="Write your notes here..."
                    className={cn(
                      "w-full py-4 rounded-2xl bg-[#fff] h-40 px-6 text-sm text-dark placeholder:text-placeholder focus:outline-none  border border-white",
                      "focus:border-[#5C8FF7]"
                    )}
                  />
                </div>

                <p className="text-sm text-[#141b34b3]">
                  Option to: Add context about your performance, any challenges,
                  or recovery status
                </p>

                <div className="bg-[#FFFFFF99] p-4 rounded-2xl">
                  <h2 className="text-lg font-normal text-dark mb-4">
                    Task Requirements
                  </h2>
                  <div className="grid grid-cols-4 gap-3">
                    <div className="flex items-center gap-2 text-xs text-dark">
                      <Icon name="video" width={16} height={16} />
                      <span>Video submission required</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-dark">
                      <Icon name="clock" width={16} height={16} />

                      <span>Sideline view angle</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-dark">
                      <Icon name="clock" width={16} height={16} />

                      <span>3-5 minutes duration</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-dark">
                      <Icon name="refresh" width={16} height={16} />

                      <span>3 repetitions minimum</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-[#FFFFFF4D] rounded-2xl shadow-sm p-6 border border-white">
                  <h2 className="text-lg font-normal text-dark mb-4">
                    Task Details
                  </h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[#141b3499]">Status:</span>
                      <span className="text-sm text-gray-500">
                        Not Submitted
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[#141b3499]">
                        Priority:
                      </span>
                      <span className="text-sm font-medium text-red-500">
                        High
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[#141b3499]">
                        Category:
                      </span>
                      <span className="text-sm text-dark">
                        Skill Development
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-[#141b3499]">Points:</span>
                      <span className="text-sm text-dark">10</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#FFFFFF4D] border border-white rounded-2xl shadow-sm p-6">
                  <h2 className="text-lg font-normal text-dark mb-4">
                    Related Resources
                  </h2>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#ffffff99] rounded-full flex items-center justify-center">
                          <Icon name="video" width={20} height={20} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-dark">
                            Technique Video
                          </p>
                          <p className="text-xs text-gray-500">
                            QB Footwork Basics
                          </p>
                        </div>
                      </div>
                      <span className="text-xs text-blue-600">from app</span>
                    </div>

                    <div className="flex items-center justify-between py-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#ffffff99] rounded-full flex items-center justify-center">
                          <Icon name="pdf" width={20} height={20} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-dark">
                            Training Guide
                          </p>
                          <p className="text-xs text-gray-500">
                            Footwork Drills PDF
                          </p>
                        </div>
                      </div>
                      <span className="text-xs text-blue-600">from app</span>
                    </div>

                    <div className="flex items-center justify-between py-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#ffffff99] rounded-full flex items-center justify-center">
                          <Icon
                            name="video"
                            width={20}
                            height={20}
                            className="text-dark"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-dark">
                            Technique Video
                          </p>
                          <p className="text-xs text-gray-500">
                            QB Footwork Basics
                          </p>
                        </div>
                      </div>
                      <span className="text-xs text-blue-600">from app</span>
                    </div>

                    <div className="flex items-center justify-between py-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#ffffff99] rounded-full flex items-center justify-center">
                          <Icon name="pdf" width={20} height={20} />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-dark">
                            Training Guide
                          </p>
                          <p className="text-xs text-gray-500">
                            Footwork Drills PDF
                          </p>
                        </div>
                      </div>
                      <span className="text-xs text-blue-600">4 hours ago</span>
                    </div>

                    <div className="flex items-center justify-between py-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#ffffff99] rounded-full flex items-center justify-center">
                          <Icon
                            name="video"
                            width={20}
                            height={20}
                            className="text-dark"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-dark">
                            Football Training
                          </p>
                          <p className="text-xs text-gray-500">
                            QB Footwork Basics
                          </p>
                        </div>
                      </div>
                      <span className="text-xs text-blue-600">1 day ago</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <AnimatedButton
                onClick={() => setStep(2)}
                style={{
                  borderRadius: "100px",
                  background:
                    "var(--Gradient, linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%))",
                }}
                className=" text-white font-semibold px-5 text-sm py-3 leading-4 rounded-full flex items-center gap-2 transition-all whitespace-nowrap"
              >
                Next
              </AnimatedButton>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
              <div className="space-y-4 col-span-2">
                <VideoUpload />
                <div className="bg-[#FFFFFF99] rounded-2xl shadow-sm p-4 border border-white">
                  <div className="flex justify-between items-start">
                    <div className="flex gap-3">
                      <div className="flex items-center justify-center border border-white rounded-full p-1 h-10 w-10">
                        <Icon name="video" width={24} height={24} />
                      </div>
                      <div>
                        <h2 className="text-sm font-semibold text-dark mb-2">
                          Record Directly
                        </h2>
                        <p className="text-xs text-[#141b34b3] mb-4">
                          Use your device camera to record the drill
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <AnimatedButton
                        style={{
                          borderRadius: "100px",
                          background:
                            "var(--Gradient, linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%))",
                        }}
                        className=" text-white font-semibold px-5 text-sm py-3 leading-4 rounded-full flex items-center gap-2 transition-all whitespace-nowrap"
                      >
                        Start Recording
                      </AnimatedButton>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <div className="bg-[#FFFFFF4D] rounded-3xl shadow-sm p-4 border border-white">
                  <h2 className="text-lg font-normal text-dark mb-4">
                    Submission Notes
                  </h2>
                  <div className="space-y-4">
                    <textarea
                      rows={4}
                      placeholder="Write your notes here..."
                      className={cn(
                        "w-full py-4 rounded-xl bg-[#FFFFFF] h-40 px-6 mt-4 text-sm text-dark placeholder:text-placeholder focus:outline-none  border border-white",
                        "focus:border-[#5C8FF7]"
                      )}
                    />
                  </div>
                </div>

                <div className="py-4">
                  <div className="bg-[#FFFFFF99] rounded-3xl shadow-sm p-6 border border-white">
                    <h2 className="text-lg font-normal text-dark mb-4">
                      Submission Options
                    </h2>

                    <hr className="border-white mb-4" />
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-dark">
                        Notify Coach Immediately
                      </span>
                      <Checkbox
                        name="coach_notify"
                        onChange={(e) =>
                          console.log("Checked:", e.target.checked)
                        }
                      />
                    </div>
                    <div className="flex justify-between items-center py-5">
                      <span className="text-sm text-[#141b3499]">
                        Upload Video File
                      </span>
                      <Checkbox
                        name="video_upload"
                        onChange={(e) =>
                          console.log("Checked:", e.target.checked)
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-5">
              <AnimatedButton
                style={{
                  borderRadius: "100px",
                  background:
                    "var(--Gradient, linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%))",
                }}
                className=" text-white font-semibold px-5 text-sm py-3 leading-4 rounded-full flex items-center gap-2 transition-all whitespace-nowrap"
              >
                Save as Draft
              </AnimatedButton>

              <AnimatedButton
                style={{
                  borderRadius: "100px",
                  background:
                    "var(--Gradient, linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%))",
                }}
                className=" text-white font-semibold px-5 text-sm py-3 leading-4 rounded-full flex items-center gap-2 transition-all whitespace-nowrap"
              >
                Upload & Continue
              </AnimatedButton>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Page;
