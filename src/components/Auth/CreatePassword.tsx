"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../ui/Input";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

interface CreatePasswordFormData {
  password: string;
  confirmPassword: string;
}

export default function CreatePassword() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const phone = searchParams.get("phone");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<CreatePasswordFormData>();

  const password = watch("password");

  const onSubmit = (data: CreatePasswordFormData) => {
    // Handle password creation logic here
    console.log("New password created:", data);
    // Redirect to login page after successful password creation
    router.push("/auth/login");
  };

  return (
    <div className="flex bg-[#ffffff4D] border border-white max-w-2xl w-full text-sm px-12 rounded-xl p-7 mx-auto">
      <div className="w-full max-w-3xl">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="flex">
            <Image
              src={"/logo-png.png"}
              alt="logo"
              width={200}
              height={200}
              className="w-16 h-auto"
            />
          </div>
        </div>

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-3xl font-semibold text-center text-dark">
            Create New Password
          </h1>
          <p className="text-base text-[#141b3499]">
            Enter your new password for {email || phone}
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Password Field */}
          <Input
            rightIcon="eye"
            rightIconClick={() => setShowPassword(!showPassword)}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
            type={showPassword ? "text" : "password"}
            label="New Password"
            placeholder="Enter your new password"
            error={errors.password?.message}
          />

          {/* Confirm Password Field */}
          <Input
            rightIcon="eye"
            rightIconClick={() => setShowConfirmPassword(!showConfirmPassword)}
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            type={showConfirmPassword ? "text" : "password"}
            label="Confirm Password"
            placeholder="Confirm your new password"
            error={errors.confirmPassword?.message}
          />

          {/* Create Password Button */}
          <button
            style={{
              borderRadius: "100px",
              background:
                "var(--Gradient, linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%))",
            }}
            type="submit"
            className="w-full py-4 font-normal text-[16px] text-white shadow-lg transition-all hover:shadow-xl active:scale-[0.98]"
          >
            Create Password
          </button>

          {/* Back to Login */}
          <p className="text-center mb-4 text-paragraph-dark">
            Remember your password?{" "}
            <a
              href="/auth/login"
              className="font-semibold text-blue-500 hover:underline"
            >
              Back to Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}