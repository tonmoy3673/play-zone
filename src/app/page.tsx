"use client";
import CompleteProfile from "@/components/Auth/CompleteProfile";
import OTPVerification from "@/components/Auth/OTPVerification";
import RoleSelection from "@/components/Auth/RoleSelection";
import SignIn from "@/components/Auth/SignIn";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function Home() {
  const params = useSearchParams().get("action");
  const phone = useSearchParams().get("phone");
  const email = useSearchParams().get("email");
  return (
    <div className="min-h-screen backdrop-blur-3xl bg-gradient-to-br from-[#fff]   via-[#BAD1FFa6] to-[#AFF4FAa6]">
      <div className="flex flex-col items-center justify-center min-h-screen">
        {params == "otp" && (phone || email) ? (
          <OTPVerification />
        ) : (
          params !== "otp" && params !== "role" && params !== "setup" && <SignIn />
        )}
        {params == "role" && <RoleSelection />}
        {params == "setup" && <CompleteProfile />}
      </div>
    </div>
  );
}

const Page = () => {
  return (
    <Suspense>
      <Home />
    </Suspense>
  );
};

export default Page;
