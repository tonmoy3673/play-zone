"use client";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { Mail } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface SignUpFormData {
  phoneNumber?: string;
  email?: string;
}

export default function ForgotPasswordModal({
  setIsOpen,
}: {
  setIsOpen: (isOpen: boolean) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>();

  const handleMayBeLater = () => {
    console.log("May be later clicked");
    // Handle may be later logic here
    setIsOpen(false);
  };

  return (
    <div className="w-full  bg-white rounded-[30px] overflow-hidden max-w-[520px] h-[511px] relative">
      {/* Close button */}
      <Image
        src={"/image 341.svg"}
        alt="image"
        width={700}
        height={400}
        className="absolute bottom-0 z-0 left-0"
      />
      <div className="relative w-full p-5 h-full z-10">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5  flex items-center justify-center hover:bg-slate-50 transition-colors"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              opacity="0.4"
              d="M13.7494 13.75L7.75 7.75M7.75064 13.75L13.75 7.75"
              stroke="#141B34"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.75 10.75C20.75 5.22715 16.2728 0.75 10.75 0.75C5.22715 0.75 0.75 5.22715 0.75 10.75C0.75 16.2728 5.22715 20.75 10.75 20.75C16.2728 20.75 20.75 16.2728 20.75 10.75Z"
              stroke="#141B34"
              strokeWidth="1.5"
            />
          </svg>
        </button>

        {/* Star rating display */}
        <div className="flex justify-center gap-2 mt-7 mb-12">
          <Image
            width={400}
            height={400}
            src="/password.svg"
            alt="Forgot Password"
            className="w-16 h-16"
          />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-medium text-center text-dark mb-6">
          Fogot Password?
        </h1>

        {/* Description text */}
        <p className="text-center text-[#141b34b3] text-base mb-8 max-w-2xl mx-auto">
          Enter your email address below and {"we'll"} send you a secure link to
          reset your password.
        </p>

        {/* Text input area */}
        <Input
          leftIcon={<Mail className="text-paragraph-dark" />}
          {...register("email", {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter a valid email address",
            },
          })}
          type="email"
          placeholder="Enter your Email"
          // error={errors.email?.message}
        />

        {/* Button container */}
        <div className="flex w-full gap-6 mt-7">
          {/* Submit button */}
          <Button
            style={{
              background:
                "var(--Gradient, linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%))",
            }}
            className="flex-1 py-3 px-7 rounded-full text-white font-normal text-base transition-colors"
          >
            Send Instructions
          </Button>
        </div>
      </div>
    </div>
  );
}
