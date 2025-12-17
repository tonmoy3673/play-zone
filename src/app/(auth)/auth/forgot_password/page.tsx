"use client";
import ForgotPassword from "@/components/Auth/ForgotPassword";
import OTPVerification from "@/components/Auth/OTPVerification";
import CreatePassword from "@/components/Auth/CreatePassword";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ForgotPasswordPage() {
  const params = useSearchParams().get("action");
  const phone = useSearchParams().get("phone");
  const email = useSearchParams().get("email");

  return (
    <div className="min-h-screen backdrop-blur-3xl bg-gradient-to-br from-[#fff] via-[#BAD1FFa6] to-[#AFF4FAa6]">
      <div className="flex flex-col items-center justify-center min-h-screen">
        {params === "otp" && (phone || email) ? (
          <OTPVerification />
        ) : params === "create-password" ? (
          <CreatePassword />
        ) : (
          <ForgotPassword />
        )}
      </div>
    </div>
  );
}

const Page = () => {
  return (
    <Suspense>
      <ForgotPasswordPage />
    </Suspense>
  );
};

export default Page;