/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {
  useState,
  useRef,
  useEffect,
  type KeyboardEvent,
  type ClipboardEvent,
} from "react";
import { useForm } from "react-hook-form";
import { ArrowLeft, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import Icon from "@/utils/icon";

interface OTPFormData {
  otp: string[];
}

export default function OTPVerification() {
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(32); // 32 seconds as shown in design
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();
  const {
    handleSubmit,
    setValue,
    formState: { isValid },
  } = useForm<OTPFormData>({
    mode: "onChange",
    defaultValues: {
      otp: ["", "", "", ""],
    },
  });

  // Timer countdown
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  // Handle input change
  const handleChange = (index: number, value: string) => {
    // Only allow single digit
    if (value.length > 1) {
      value = value.slice(-1);
    }

    // Only allow numbers
    if (value && !/^\d$/.test(value)) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setValue("otp", newOtp, { shouldValidate: true });

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        // If current input is empty, focus previous input
        inputRefs.current[index - 1]?.focus();
      } else {
        // Clear current input
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
        setValue("otp", newOtp, { shouldValidate: true });
      }
    }
  };

  // Handle paste
  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").trim();

    // Extract only digits from pasted content
    const digits = pastedData.replace(/\D/g, "").slice(0, 4);

    if (digits.length > 0) {
      const newOtp = [...otp];
      for (let i = 0; i < digits.length && i < 4; i++) {
        newOtp[i] = digits[i];
      }
      setOtp(newOtp);
      setValue("otp", newOtp, { shouldValidate: true });

      // Focus the next empty input or the last input
      const nextEmptyIndex = newOtp.findIndex((val) => !val);
      if (nextEmptyIndex !== -1) {
        inputRefs.current[nextEmptyIndex]?.focus();
      } else {
        inputRefs.current[3]?.focus();
      }
    }
  };

  const onSubmit = (data: OTPFormData) => {
    const otpCode = data.otp.join("");
    console.log("OTP submitted:", otpCode);
    // Handle OTP verification
    router.push("/?action=verified");
  };

  // Check if all OTP fields are filled
  const isOtpComplete = otp.every((digit) => digit !== "");

  return (
    <div className="flex bg-[#ffffff4D] border border-white max-w-2xl w-full text-sm px-12 rounded-xl py-20 mx-auto">
      <div className="w-full ">
        {/* Back Button */}
        <div className="mb-8">
          <button
            type="button"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/50 border border-white backdrop-blur-sm hover:bg-white/70 transition-all"
            onClick={() => router.replace("/")}
          >
            <Icon name="back" width={18} height={12} />
          </button>
        </div>

        {/* Mail Icon */}
        <div className="mb-8 flex justify-center">
          <img src={"/mail.svg"} alt="Email Sent" />
        </div>

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-semibold text-dark">
            Enter Verification Code
          </h1>
          <p className="text-base  text-[#141b3499] leading-relaxed">
            We sent a verification code to +1 223 12366, please <br /> check
            your mobile device and enter the code.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* OTP Input Fields */}
          <div className="flex justify-center gap-4 mb-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                className={`w-16 h-16 text-center text-2xl font-semibold rounded-2xl border bg-[#ffffff66] backdrop-blur-sm transition-all focus:outline-none ${
                  digit
                    ? "border-blue-500 text-gray-900"
                    : "border-white text-gray-400"
                } focus:border-blue-500 `}
                autoFocus={index === 0}
              />
            ))}
          </div>

          {/* Timer */}
          <p className="text-center text-sm text-[#141b3499] mb-8">
            Your can resend code after -{" "}
            <span className="font-semibold text-gray-900">
              {formatTime(timeLeft)}
            </span>{" "}
            minutes
          </p>

          {/* Continue Button */}
          <button
            type="submit"
            // style={{ backgroundColor: "rgba(20, 27, 52, 0.10)" }}
            disabled={!isOtpComplete}
            className={`w-full py-4 rounded-full mt-7 text-base font-normal  transition-all ${
              isOtpComplete
                ? "bg-gradient-to-br text-white  from-[#5C8FF7] to-[#276AEE] hover:shadow-lg active:scale-[0.98]"
                : "bg-[#141b341A] text-dark cursor-not-allowed"
            }`}
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
