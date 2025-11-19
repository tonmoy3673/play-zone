"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Icon from "@/utils/icon";

type Role = "coach" | "athlete";

export default function RoleSelection() {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const router = useRouter();
  const handleNext = () => {
    if (selectedRole) {
      console.log("Selected role:", selectedRole);
      // Handle navigation to next step
      router.push("/?action=setup");
    }
  };

  return (
    <div className="flex bg-[#ffffff4D] border border-white max-w-2xl w-full text-sm px-12 rounded-xl py-12 mx-auto">
      <div className="w-full max-w-3xl">
        {/* Back Button */}
        <button
          type="button"
          className="mb-8 flex items-center justify-center w-10 h-10 rounded-full bg-white/50 backdrop-blur-sm border border-white hover:bg-white/70 transition-all"
        >
          <Icon name="back" width={18} height={12} />
        </button>

        {/* Logo */}
        <div className="mb-4 flex justify-center">
          <Image
            src={"/logo-png.png"}
            alt="logo"
            width={200}
            height={200}
            className="w-16 h-auto"
          />
        </div>

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-3xl font-semibold text-center text-dark">
            Choose your role
          </h1>
          <p className="text-sm text-paragraph">
            Select how {"you'll"} use CoachPro
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          {/* Coach Card */}
          <div
            className={`${
              selectedRole == "coach" &&
              "bg-gradient-to-r from-[#2871FF] via-[#8DB3FF] rounded-2xl to-[#C1D6FF]"
            }  p-[2px]`}
          >
            <button
              type="button"
              onClick={() => setSelectedRole("coach")}
              className={`flex flex-col items-start justify-center border border-transparent p-8 rounded-2xl   ${
                selectedRole === "coach"
                  ? "bg-[#D2E3FF] "
                  : "bg-[#ffffff4D] border-white border hover:bg-white/50"
              }`}
            >
              <div
                className={`mb-6 flex items-center bg-[#ffffff4D] border border-white rounded-full justify-center w-12 h-12`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="26"
                  viewBox="0 0 30 26"
                  fill="none"
                >
                  <path
                    d="M16.3327 17C13.2771 25 4.72157 17 1.66602 25"
                    stroke="#141B34"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.6667 17H21.6684C24.8111 17 26.3824 17 27.3588 16.0237C28.3351 15.0474 28.3351 13.476 28.3351 10.3333V7.66667C28.3351 4.52397 28.3351 2.95262 27.3588 1.97631C26.3824 1 24.8111 1 21.6684 1H16.3351C13.1924 1 11.621 1 10.6447 1.97631C9.81749 2.80353 9.69117 4.05792 9.67188 6.33333"
                    stroke="#141B34"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <ellipse
                    cx="8.99935"
                    cy="13.6673"
                    rx="3.33333"
                    ry="3.33333"
                    stroke="#141B34"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    opacity="0.4"
                    d="M15 6.33398H23M23 11.6673H19"
                    stroke="#141B34"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Coach
              </h3>
              <p className="text-sm text-[#141b3499] text-start">
                {"I'm"} a coach looking to manage teams and athletes
              </p>
            </button>
          </div>
          {/* Athlete Card */}
          <div
            className={`${
              selectedRole == "athlete" &&
              "bg-gradient-to-r from-[#2871FF] via-[#8DB3FF] rounded-2xl to-[#C1D6FF]"
            }  p-[2px]`}
          >
            <button
              type="button"
              onClick={() => setSelectedRole("athlete")}
              className={`flex flex-col items-start justify-center border border-transparent p-8 rounded-2xl   ${
                selectedRole === "athlete"
                  ? "bg-[#D2E3FF]  "
                  : "bg-[#ffffff4D] border-white border hover:bg-white/50"
              }`}
            >
              <div className="mb-6 flex items-center justify-center w-12 h-12">
                <svg
                  className="w-8 h-8 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Athlete
              </h3>
              <p className="text-sm text-[#141b3499] text-start">
                Im an athlete looking to join programs and groups
              </p>
            </button>
          </div>
        </div>

        {/* Next Button */}

        <button
          type="submit"
          style={{
            borderRadius: "100px",
            // background: selectedRole
            //   ? "var(--Gradient, linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%))"
            //   : "#E5E7EB",
          }}
          onClick={handleNext}
          disabled={!selectedRole}
          className={`w-full py-4 rounded-full mt-7 font-normal text-base  transition-all ${
            selectedRole
              ? "bg-gradient-to-br text-white from-[#5C8FF7] to-[#276AEE] hover:shadow-lg active:scale-[0.98]"
              : "bg-[#141b341A] text-dark cursor-not-allowed"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
