"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Smartphone, Mail } from "lucide-react";
import Input, { PhoneInput } from "../ui/Input";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Icon from "@/utils/icon";
import Link from "next/link";

type SignUpMethod = "phone" | "email";

interface SignUpFormData {
  phoneNumber?: string;
  email?: string;
}

export default function ForgotPassword() {
  const [signUpMethod, setSignUpMethod] = useState<SignUpMethod>("phone");
  const router = useRouter();
  const {
	 register,
	 handleSubmit,
	 formState: { errors },
  } = useForm<SignUpFormData>();

  const onSubmit = (data: SignUpFormData) => {
	 if (signUpMethod == "email") {
		router.push("/auth/forgot_password?action=otp&email=" + data.email);
	 } else {
		router.push("/auth/forgot_password?action=otp&phone=" + data.phoneNumber);
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
				Forgot Password?
			 </h1>
			 <p className="text-base text-[#141b3499]">
				Enter your email or phone to reset your password
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
				  leftIcon="email"
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
				Send Instruction
			 </button>
			
		  </form>
		</div>
	 </div>
  );
}
