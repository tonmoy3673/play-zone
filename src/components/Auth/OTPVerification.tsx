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
    router.push("/?action=role");
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
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Mail Icon */}
        <div className="mb-8 flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="38"
            viewBox="0 0 44 38"
            fill="none"
          >
            <path
              opacity="0.4"
              d="M2.03153 21.9512C2.16228 28.0823 2.22766 31.1478 4.48991 33.4187C6.75217 35.6896 9.90067 35.7687 16.1977 35.9269C20.0786 36.0244 23.9214 36.0244 27.8024 35.9269C34.0993 35.7687 37.2478 35.6896 39.5101 33.4187C41.7724 31.1478 41.8377 28.0823 41.9685 21.9512C42.0105 19.9799 42.0105 18.0202 41.9685 16.0488C41.8377 9.91772 41.7724 6.85219 39.5101 4.58132C37.2478 2.31046 34.0994 2.23135 27.8024 2.07314C23.9214 1.97563 20.0786 1.97562 16.1976 2.07312C9.90066 2.23133 6.75217 2.31043 4.48991 4.58129C2.22765 6.85216 2.16227 9.91769 2.03153 16.0488C1.98949 18.0201 1.98949 19.9799 2.03153 21.9512Z"
              fill="url(#paint0_linear_5187_10990)"
            />
            <path
              d="M12 12L17.884 15.4789C21.3144 17.507 22.6856 17.507 26.116 15.4789L32 12"
              stroke="url(#paint1_linear_5187_10990)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.03153 21.9512C2.16228 28.0823 2.22766 31.1478 4.48991 33.4187C6.75217 35.6896 9.90067 35.7687 16.1977 35.9269C20.0786 36.0244 23.9214 36.0244 27.8024 35.9269C34.0993 35.7687 37.2478 35.6896 39.5101 33.4187C41.7724 31.1478 41.8377 28.0823 41.9685 21.9512C42.0105 19.9799 42.0105 18.0202 41.9685 16.0488C41.8377 9.91772 41.7724 6.85219 39.5101 4.58132C37.2478 2.31046 34.0994 2.23135 27.8024 2.07314C23.9214 1.97563 20.0786 1.97562 16.1976 2.07312C9.90066 2.23133 6.75217 2.31043 4.48991 4.58129C2.22765 6.85216 2.16227 9.91769 2.03153 16.0488C1.98949 18.0201 1.98949 19.9799 2.03153 21.9512Z"
              stroke="url(#paint2_linear_5187_10990)"
              strokeWidth="3.5"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_5187_10990"
                x1="18.0938"
                y1="4.95923"
                x2="18.8086"
                y2="23.7178"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#5C8FF7" />
                <stop offset="1" stopColor="#276AEE" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_5187_10990"
                x1="20.0469"
                y1="12.4352"
                x2="20.0778"
                y2="15.1975"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#5C8FF7" />
                <stop offset="1" stopColor="#276AEE" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_5187_10990"
                x1="18.0938"
                y1="4.95923"
                x2="18.8086"
                y2="23.7178"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#5C8FF7" />
                <stop offset="1" stopColor="#276AEE" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="mb-3 text-3xl font-semibold text-dark-100">
            Enter Verification Code
          </h1>
          <p className="text-sm  text-paragraph-dark leading-relaxed">
            We sent a verification code to +1 223 12366, please <br /> check
            your mobile device and enter the code.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
          <p className="text-center text-sm text-gray-600 mb-8">
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
            className={`w-full py-4 rounded-full mt-7 font-semibold  transition-all ${
              isOtpComplete
                ? "bg-gradient-to-br text-white from-[#5C8FF7] to-[#276AEE] hover:shadow-lg active:scale-[0.98]"
                : "bg-[#141b341A] text-dark-100 cursor-not-allowed"
            }`}
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
