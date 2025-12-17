import Button, { AnimatedButton } from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Input, { PhoneInput } from "@/components/ui/Input";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import PopupModal from "@/components/Modal/PopupModal";
import ForgotPasswordModal from "./ForgotPasswordModal";

const Security = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Container>
        <div
          style={{
            borderRadius: "30px",
            background: "rgba(255, 255, 255, 0.30)",
          }}
          className="w-full backdrop-blur-3xl p-8 py-8 border border-white"
        >
          <form className="w-full text-sm space-y-4">
            {/* Header */}
            <h1 className="text-xl font-medium text-black mb-7">
              {isChangingPassword ? "Change Password" : "Security"}
            </h1>

            {!isChangingPassword ? (
              <>
                <PhoneInput
                  label="Phone Number"
                  countrySelectClassName="h-12"
                  className=" h-12"
                />
                <Input
                  type="email"
                  label="Email Address"
                  className=" h-12 w-full"
                  placeholder="markmarkio123@gmail.com"
                  leftIcon="email"
                />
                <div>
                  <label className="mb-2  block text-sm font-medium text-dark">
                    Password
                  </label>
                  <div className="flex items-start justify-between gap-7">
                    <div className="relative flex-1">
                      <Input
                        leftIcon="square_lock"
                        type={showPassword ? "text" : "password"}
                        className="h-12"
                      />
                      <button
                        type="button"
                        className="absolute top-[42%] right-4 -translate-y-1/2"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <Eye /> : <EyeOff />}
                      </button>
                    </div>
                    <Button
                      className="text-[#276AEE] text-sm rounded-4xl py-0 h-12 border border-white backdrop-blur-3xl bg-[#ffffff99] font-medium"
                      onClick={() => setIsChangingPassword(true)}
                    >
                      Change Password
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <label className="mb-2 block text-sm font-medium text-dark">
                    Current Password
                  </label>
                  <Input
                    type="password"
                    placeholder="Enter current password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="h-12"
                    leftIcon="square_lock"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-dark">
                    New Password
                  </label>
                  <Input
                    type="password"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="h-12"
                    leftIcon="square_lock"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-dark">
                    Confirm New Password
                  </label>
                  <Input
                    type="password"
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="h-12"
                    leftIcon="square_lock"
                  />
                </div>
              </>
            )}

            <div className="flex mt-12 justify-end items-center gap-3">
              {isChangingPassword && (
                <p
                  className="text-base text-[#276AEE] cursor-pointer hover:underline"
                  onClick={() => setIsModalOpen(true)}
                >
                  Forgot Password?
                </p>
              )}
              <AnimatedButton
                style={{
                  borderRadius: "100px",
                  background:
                    "var(--Gradient, linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%))",
                }}
                className=" text-white px-5 py-2.5  text-sm font-medium"
              >
                {isChangingPassword ? "Save Changes" : "Save Changes"}
              </AnimatedButton>
            </div>
          </form>
        </div>
      </Container>
      <PopupModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title=""
        widthClass="w-full md:w-[519px] h-[511px]"
      >
        <ForgotPasswordModal setIsOpen={setIsModalOpen} />
      </PopupModal>
    </>
  );
};

export default Security;
