
"use client";

import { useForm, Controller } from "react-hook-form";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import type { SelectOption } from "@/components/ui/Select";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

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

const positionOptionsBySport: Record<string, SelectOption[]> = {
  baseball: [
    { value: "1st_base", label: "1st Base" },
    { value: "2nd_base", label: "2nd Base" },
    { value: "3rd_base", label: "3rd Base" },
    { value: "catcher", label: "Catcher" },
    { value: "center_field", label: "Center Field" },
    { value: "left_field", label: "Left Field" },
    { value: "pitcher", label: "Pitcher" },
    { value: "right_field", label: "Right Field" },
    { value: "shortstop", label: "Shortstop" },
  ],
  basketball: [
    { value: "center", label: "Center" },
    { value: "forward", label: "Forward" },
    { value: "guard", label: "Guard" },
  ],
  football: [
    { value: "cornerback", label: "Cornerback" },
    { value: "defensive_lineman", label: "Defensive Lineman" },
    { value: "kicker", label: "Kicker" },
    { value: "offensive_lineman", label: "Offensive Lineman" },
    { value: "quarterback", label: "Quarterback" },
    { value: "running_back", label: "Running Back" },
    { value: "safety", label: "Safety" },
    { value: "tight_end", label: "Tight End" },
    { value: "wide_receiver", label: "Wide Receiver" },
  ],
  swimming: [
    { value: "diver", label: "Diver" },
    { value: "distance_swimmer", label: "Distance Swimmer" },
    { value: "sprinter", label: "Sprinter" },
  ],
};

export default function CompleteProfile() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
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
  
  // Watch the primary sport to update position options
  const selectedSport = watch("primarySport");
  
  // Get position options based on selected sport
  const currentPositionOptions = selectedSport ? positionOptionsBySport[selectedSport] || [] : [];
  
  // Get form values to check if form is complete
  const watchedValues = watch();
  const isFormValid = watchedValues.firstName && 
                     watchedValues.lastName && 
                     watchedValues.primarySport && 
                     watchedValues.primaryPosition;
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

  // search params to get role
  const searchParams = useSearchParams();
  const role = searchParams.get("role");
  console.log("User role:", role);

  const onSubmit = (data: ProfileFormData) => {
    console.log("Profile data:", data);
    if(role === "coach"){
      router.push("/coach/dashboard");
      return;
    }else{
      router.push("/athlete/dashboard");
      return;
    }
  };

  return (
    <div className=" bg-[#ffffff4D] border border-white max-w-2xl w-full text-sm px-12 rounded-xl py-12 mx-auto">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-3xl font-bold text-dark  mb-2 text-center">
          Complete Your Profile
        </h1>
        <p className="text-[#141b3499] text-center">Tell us about yourself</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Photo Upload */}
        <div className="flex flex-col items-center mb-8">
          <label
            className="text-blue-500 flex flex-col items-center mb-8 cursor-pointer font-medium hover:text-blue-600 transition-colors"
            htmlFor="photo-upload"
          >
            <div className="w-24 h-24 rounded-full bg-white/60 backdrop-blur-sm border border-white flex items-center justify-center mb-3">
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
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                >
                  <path
                    opacity="0.4"
                    d="M0.75 13.4167C0.75 7.44554 0.75 4.45998 2.60499 2.60499C4.45998 0.75 7.44554 0.75 13.4167 0.75C19.3878 0.75 22.3734 0.75 24.2283 2.60499C26.0833 4.45998 26.0833 7.44554 26.0833 13.4167C26.0833 19.3878 26.0833 22.3734 24.2283 24.2283C22.3734 26.0833 19.3878 26.0833 13.4167 26.0833C7.44554 26.0833 4.45998 26.0833 2.60499 24.2283C0.75 22.3734 0.75 19.3878 0.75 13.4167Z"
                    fill="#5B5F71"
                  />
                  <path
                    d="M24.229 24.2273C22.374 26.0823 19.3884 26.0823 13.4173 26.0823H13.4173C8.90563 26.0823 6.09843 26.0823 4.19552 25.2821C9.99734 18.3324 16.5107 9.31687 26.0805 15.4884C26.0559 20.1046 25.8556 22.6006 24.229 24.2273Z"
                    fill="white"
                  />
                  <circle
                    cx="7.41699"
                    cy="7.41602"
                    r="2"
                    fill="white"
                    stroke="#5B5F71"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M0.75 13.4167C0.75 7.44554 0.75 4.45998 2.60499 2.60499C4.45998 0.75 7.44554 0.75 13.4167 0.75C19.3878 0.75 22.3734 0.75 24.2283 2.60499C26.0833 4.45998 26.0833 7.44554 26.0833 13.4167C26.0833 19.3878 26.0833 22.3734 24.2283 24.2283C22.3734 26.0833 19.3878 26.0833 13.4167 26.0833C7.44554 26.0833 4.45998 26.0833 2.60499 24.2283C0.75 22.3734 0.75 19.3878 0.75 13.4167Z"
                    stroke="#5B5F71"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M4.08398 25.4159C9.91393 18.4493 16.4494 9.26135 26.0806 15.4725"
                    stroke="#5B5F71"
                    strokeWidth="1.5"
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
              onChange={(value) => {
                field.onChange(value);
                // Reset position when sport changes
                setValue("primaryPosition", "");
              }}
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
              placeholder={selectedSport ? "Select a position" : "Please select a sport first"}
              options={currentPositionOptions}
              value={field.value}
              onChange={field.onChange}
              error={errors.primaryPosition?.message}
              disabled={!selectedSport}
            />
          )}
        />

        <button
          type="submit"
          style={{
            borderRadius: "100px",
          }}
          disabled={!isFormValid}
          className={`w-full py-4 rounded-full mt-7 font-normal text-base transition-all ${
            isFormValid
              ? "bg-gradient-to-br text-white from-[#5C8FF7] to-[#276AEE] hover:shadow-lg active:scale-[0.98]"
              : "bg-[#141b341A] text-dark cursor-not-allowed"
          }`}
        >
          Complete Profile
        </button>
      </form>
    </div>
  );
}
