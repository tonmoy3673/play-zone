"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Icon from "@/utils/icon";

export default function AccountVerified() {
  const router = useRouter();

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
        <div className="mb-8 flex justify-center">
          <Image
            src={"/verified.svg"}
            alt="logo"
            width={88}
            height={88}
            className="h-auto"
          />
        </div>

        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-3xl font-semibold text-center text-dark">
            Account Verified
          </h1>
          <p className="text-base text-[#141b3499]">Welcome to Playzone</p>
        </div>

        <button
          type="submit"
          onClick={() => router.push("/?action=role")}
          className={`w-full py-4 rounded-full text-base font-normal  transition-all ${"bg-gradient-to-br text-white  from-[#5C8FF7] to-[#276AEE] hover:shadow-lg active:scale-[0.98]"}`}
        >
          Setup Profile
        </button>
      </div>
    </div>
  );
}
