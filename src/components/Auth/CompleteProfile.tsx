/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm, Controller } from "react-hook-form";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import type { SelectOption } from "@/components/ui/Select";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProfileFormData {
  firstName: string;
  lastName: string;
  primarySport: string;
  primaryPosition: string;
}

const sportOptions: SelectOption[] = [
  {
    value: "baseball",
    label: "Baseball",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="w-5 h-5"
      >
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
        <path
          d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"
          strokeWidth="2"
        />
        <path d="M8 8c2-2 6-2 8 0M8 16c2 2 6 2 8 0" strokeWidth="2" />
      </svg>
    ),
  },
  {
    value: "swimming",
    label: "Swimming",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          d="M2 15c1.67-1.33 3.33-1.33 5 0 1.67 1.33 3.33 1.33 5 0 1.67-1.33 3.33-1.33 5 0 1.67 1.33 3.33 1.33 5 0M2 19c1.67-1.33 3.33-1.33 5 0 1.67 1.33 3.33 1.33 5 0 1.67-1.33 3.33-1.33 5 0 1.67 1.33 3.33 1.33 5 0"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="7" cy="8" r="2" strokeWidth="2" />
        <path
          d="M14 6l3 3-3 3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    value: "basketball",
    label: "Basketball",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="w-5 h-5"
      >
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
        <path d="M12 2v20M2 12h20" strokeWidth="2" />
        <path
          d="M12 2c-3 3-3 7 0 10s3 7 0 10M12 2c3 3 3 7 0 10s-3 7 0 10"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    value: "football",
    label: "Football",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="w-5 h-5"
      >
        <ellipse cx="12" cy="12" rx="10" ry="7" strokeWidth="2" />
        <path d="M12 5v14M7 9l10 6M7 15l10-6" strokeWidth="2" />
      </svg>
    ),
  },
];

const positionOptions: SelectOption[] = [
  { value: "forward", label: "Forward" },
  { value: "midfielder", label: "Midfielder" },
  { value: "defender", label: "Defender" },
  { value: "goalkeeper", label: "Goalkeeper" },
];

export default function CompleteProfile() {
  const {
    register,
    handleSubmit,
    control,

    formState: { errors, isValid },
  } = useForm<ProfileFormData>({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      primarySport: "",
      primaryPosition: "",
    },
  });
  const router = useRouter();
  const [mainImage, setMainImage] = useState<any>("");
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      //   setMainImage(files[0]);
    }
    if (files && files[0]) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (typeof result === "string") {
          setMainImage(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: ProfileFormData) => {
    console.log("Profile data:", data);
    // Handle form submission
    router.push("/athlete");
  };

  return (
    <div className=" bg-[#ffffff4D] border border-white max-w-2xl w-full text-sm px-12 rounded-xl py-12 mx-auto">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-3xl font-bold text-dark-100  mb-2 text-center">
          Complete Your Profile
        </h1>
        <p className="text-gray-600 text-center">Tell us about yourself</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Photo Upload */}
        <div className="flex flex-col items-center mb-8">
          <label
            className="text-blue-500 flex flex-col items-center mb-8 cursor-pointer font-medium hover:text-blue-600 transition-colors"
            htmlFor="photo-upload"
          >
            <div className="w-32 h-32 rounded-full bg-white/60 backdrop-blur-sm border border-white flex items-center justify-center mb-3">
              {mainImage ? (
                <Image
                  src={mainImage}
                  alt="profile"
                  width={200}
                  height={200}
                  className="h-full w-full rounded-full object-top object-cover"
                />
              ) : (
                <svg
                  className="w-12 h-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              )}
            </div>
            <input
              id="photo-upload"
              // name="photo-upload"
              onChange={handleImageChange}
              type="file"
              // value={getValues("image") }
              accept="image/*"
              className="hidden"
            />
            {/* <button
              type="button"
              c
            > */}
            Upload Photo
            {/* </button> */}
          </label>
        </div>

        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="First Name"
            placeholder="Enter first name"
            {...register("firstName", { required: "First name is required" })}
            error={errors.firstName?.message}
          />
          <Input
            label="Last Name"
            placeholder="Enter last name"
            {...register("lastName", { required: "Last name is required" })}
            error={errors.lastName?.message}
          />
        </div>

        {/* Primary Sport */}
        <Controller
          name="primarySport"
          control={control}
          rules={{ required: "Please select a sport" }}
          render={({ field }) => (
            <Select
              label="Primary Sport"
              placeholder="Select a sport"
              options={sportOptions}
              value={field.value}
              onChange={field.onChange}
              error={errors.primarySport?.message}
            />
          )}
        />

        {/* Primary Position */}
        <Controller
          name="primaryPosition"
          control={control}
          rules={{ required: "Please select a position" }}
          render={({ field }) => (
            <Select
              label="Primary Position"
              placeholder="Select a position"
              options={positionOptions}
              value={field.value}
              onChange={field.onChange}
              error={errors.primaryPosition?.message}
            />
          )}
        />

        <button
          type="submit"
          style={{
            borderRadius: "100px",
          }}
          disabled={!isValid}
          className={`w-full py-4 rounded-full mt-7 font-semibold  transition-all ${
            isValid
              ? "bg-gradient-to-br text-white from-[#5C8FF7] to-[#276AEE] hover:shadow-lg active:scale-[0.98]"
              : "bg-[#141b341A] text-dark-100 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </form>
    </div>
  );
}
