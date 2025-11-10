import Button, { AnimatedButton } from "@/components/ui/Button";
import Input, { PhoneInput } from "@/components/ui/Input";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

const Security = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div
      style={{ borderRadius: "30px", background: "rgba(255, 255, 255, 0.30)" }}
      className="w-full backdrop-blur-3xl p-8 py-12 border border-white"
    >
      <form className="w-full text-sm space-y-4">
        {/* Header */}
        <h1 className="text-xl font-medium text-black mb-5">Personal info</h1>
        <PhoneInput
          label="Phone Number"
          countrySelectClassName="h-12"
          className=" h-12"
        />
        <Input
          type="email"
          label="Email Address"
          className=" h-12 w-full"
          placeholder="markmarkio123@gmail.com"
          leftIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="19"
              viewBox="0 0 22 19"
              fill="none"
            >
              <path
                opacity="0.4"
                d="M5.75 5.75002L8.69202 7.48945C10.4072 8.50354 11.0928 8.50354 12.808 7.48945L15.75 5.75002"
                stroke="#141B34"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M0.765766 10.7256C0.831141 13.7912 0.863829 15.3239 1.99496 16.4594C3.12608 17.5948 4.70033 17.6343 7.84883 17.7134C9.78931 17.7622 11.7107 17.7622 13.6512 17.7134C16.7997 17.6343 18.3739 17.5948 19.5051 16.4594C20.6362 15.3239 20.6689 13.7912 20.7342 10.7256C20.7553 9.73994 20.7553 8.76008 20.7342 7.77439C20.6689 4.70886 20.6362 3.17609 19.5051 2.04066C18.3739 0.905231 16.7997 0.865677 13.6512 0.786569C11.7107 0.737813 9.78931 0.73781 7.84882 0.786562C4.70033 0.865664 3.12608 0.905215 1.99495 2.04065C0.863823 3.17608 0.831137 4.70885 0.765764 7.77438C0.744745 8.76007 0.744745 9.73994 0.765766 10.7256Z"
                stroke="#141B34"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          }
        />
        <div>
          <label className="mb-2  block text-sm font-medium text-dark-100">
            Password
          </label>
          <div className="flex items-start justify-between gap-7">
            <div className="relative flex-1">
              <Input
                leftIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="22"
                    viewBox="0 0 18 22"
                    fill="none"
                  >
                    <path
                      opacity="0.4"
                      d="M8.75 15.25V13.25"
                      stroke="#141B34"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M1.01781 17.5947C1.24269 19.265 2.62613 20.5735 4.30966 20.6509C5.72627 20.716 7.1653 20.75 8.75 20.75C10.3347 20.75 11.7737 20.716 13.1903 20.6509C14.8739 20.5735 16.2573 19.265 16.4822 17.5947C16.629 16.5047 16.75 15.3876 16.75 14.25C16.75 13.1124 16.629 11.9953 16.4822 10.9053C16.2573 9.23502 14.8739 7.92649 13.1903 7.84909C11.7737 7.78397 10.3347 7.75 8.75 7.75C7.1653 7.75 5.72627 7.78397 4.30966 7.84909C2.62613 7.92649 1.24269 9.23502 1.01781 10.9053C0.871046 11.9953 0.75 13.1124 0.75 14.25C0.75 15.3876 0.871046 16.5047 1.01781 17.5947Z"
                      stroke="#141B34"
                      strokeWidth="1.5"
                    />
                    <path
                      opacity="0.4"
                      d="M4.25 7.75V5.25C4.25 2.76472 6.26472 0.75 8.75 0.75C10.7093 0.75 12.25 2.25 12.75 3.75"
                      stroke="#141B34"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
                type={showPassword ? "text" : "password"}
                className="h-12"
              />
              <button
                type="button"
                className="absolute top-[42%] right-4 -translate-y-1/2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Eye /> : <EyeOff />}
              </button>
            </div>
            <Button className="text-[#276AEE] text-sm rounded-4xl py-0 h-12 border border-white backdrop-blur-3xl bg-[#ffffff99] font-medium">
              Change Password
            </Button>
          </div>
        </div>

        <div className="flex mt-24 justify-end">
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
      </form>
    </div>
  );
};

export default Security;
