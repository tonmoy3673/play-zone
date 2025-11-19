"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Smartphone, Mail } from "lucide-react";
import Input, { PhoneInput } from "../ui/Input";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Icon from "@/utils/icon";

type SignUpMethod = "phone" | "email";

interface SignUpFormData {
  phoneNumber?: string;
  email?: string;
}

export default function SignIn() {
  const [signUpMethod, setSignUpMethod] = useState<SignUpMethod>("phone");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>();

  const onSubmit = (data: SignUpFormData) => {
    if (signUpMethod == "email") {
      router.push("/?action=otp&email=" + data.email);
    } else {
      router.push("/?action=otp&phone=" + data.phoneNumber);
    }
  };

  return (
    <div className="flex  bg-[#ffffff4D] border border-white max-w-2xl w-full text-sm px-12 rounded-xl p-7 mx-auto">
      <div className="w-full max-w-3xl">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="flex ">
            <Image
              src={"/logo-png.png"}
              alt="logo"
              width={200}
              height={200}
              className="w-16 h-auto]:"
            />
          </div>
        </div>

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-3xl font-semibold text-center text-dark">
            Continue To Your Account
          </h1>
          <p className="text-base text-[#141b3499]">
            Start your coaching journey today
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Toggle Buttons */}
          <div className="flex gap-4 rounded-xl bg-[#ffffff80] border border-white p-1.5 backdrop-blur-sm">
            <button
              type="button"
              onClick={() => setSignUpMethod("phone")}
              className={`flex flex-1 items-center justify-center gap-3 rounded-xl px-6 py-3  font-medium transition-all ${
                signUpMethod === "phone"
                  ? "bg-[#ffffffCC] text-gray-900 "
                  : "text-[#141b3499] hover:text-gray-900"
              }`}
            >
              <Icon name="phone" height={24} width={24} />
              Phone
            </button>
            <button
              type="button"
              onClick={() => setSignUpMethod("email")}
              className={`flex flex-1 items-center justify-center gap-3 rounded-xl px-6 py-3  font-medium transition-all ${
                signUpMethod === "email"
                  ? "bg-[#ffffffCC] text-gray-900 "
                  : "text-[#141b3499] hover:text-gray-900"
              }`}
            >
              <Icon name="email" height={24} width={24} />
              Email
            </button>
          </div>

          {/* Input Field */}
          {signUpMethod === "phone" ? (
            <div>
              <label className="mb-2 block text-sm font-medium text-dark">
                Phone Number
              </label>
              <div className="flex items-start gap-3">
                <PhoneInput
                  {...register("phoneNumber", {
                    required:
                      signUpMethod === "phone"
                        ? "Phone number is required"
                        : false,
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Please enter a valid 10-digit phone number",
                    },
                  })}
                  placeholder="Enter your Phone Number"
                  error={errors.phoneNumber?.message}
                  className="flex-1"
                />
              </div>
            </div>
          ) : (
            <Input
              leftIcon={<Mail className="text-paragraph-dark" />}
              {...register("email", {
                required:
                  signUpMethod === "email" ? "Email is required" : false,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email address",
                },
              })}
              type="email"
              label="Email Address"
              placeholder="Enter your Email"
              error={errors.email?.message}
            />
          )}

          {/* Sign Up Button */}
          <button
            style={{
              borderRadius: "100px",
              background:
                "var(--Gradient, linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%))",
            }}
            type="submit"
            className="w-full  py-4 font-normal text-[16px] text-white shadow-lg transition-all hover:shadow-xl active:scale-[0.98]"
          >
            Sign In
          </button>

          {/* Login Link */}
          <p className="text-center mb-4  text-paragraph-dark">
            {"Don't"} have an account?{" "}
            <a
              href="/login"
              className="font-semibold text-blue-500 hover:underline"
            >
              Sign Up
            </a>
          </p>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-white" />
            <span className=" text-paragraph-dark font-medium">or</span>
            <div className="h-px flex-1 bg-white" />
          </div>

          {/* Social Login Buttons */}
          <div className="grid gap-4 sm:grid-cols-2">
            <button
              type="button"
              className="flex items-center justify-center gap-3 rounded-2xl border border-white bg-[#ffffff80] px-6 py-4  font-medium text-paragraph-dark backdrop-blur-sm transition-all hover:bg-white duration-300 cursor-pointer"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-3 rounded-2xl text-paragraph-dark bg-[#ffffff80] border border-white px-6 py-4  font-medium  backdrop-blur-sm transition-all hover:bg-white duration-300 cursor-pointer"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              Continue with Apple
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
