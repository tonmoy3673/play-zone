"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/auth/login");
  }, [router]);

  return (
    <div className="min-h-screen backdrop-blur-3xl bg-gradient-to-br from-[#fff] via-[#BAD1FFa6] to-[#AFF4FAa6]">
      <div className="flex flex-col items-center justify-center min-h-screen"></div>
    </div>
  );
};

export default Page;
