/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@/components/ui/Container";
import Switch from "@/components/ui/Switch";
import React, { useState } from "react";

const Notification = () => {
  const [data, setData] = useState({
    Notifications: true,
    emailNotifications: true,
    pushNotifications: false,
    taskNotifications: false,
    announcementNotifications: true,
    feedbackNotifications: false,
    programNotifications: false,
  });
  return (
    <Container>
    <div
      style={{ borderRadius: "30px", background: "rgba(255, 255, 255, 0.30)" }}
      className="w-full space-y-5 backdrop-blur-3xl p-8 border border-white"
    >
      <div className="flex items-center justify-between w-full">
        <p className="text-xl font-medium text-[#000]">Notification</p>
        <Switch
          value={data.Notifications}
          onChange={(e: any) => {
            setData({ ...data, Notifications: e.target.checked });
          }}
        />
      </div>
      <hr className="border-white" />
      <div
        className={`space-y-5 opacity-30 relative ${
          data.Notifications ? "opacity-100" : "opacity-30"
        }`}
      >
        {!data.Notifications && (
          <div className="absolute top-0 left-0 right-0 -bottom-20  z-100"></div>
        )}
        <div className="flex items-center justify-between w-full">
          <p className="text-base font-medium text-dark">
            Email Notifications
            <br />
            <span className="text-xs font-normal text-[#141b34b3]">
              Receive important updates and alerts via email.
            </span>
          </p>
          <Switch
            value={data.emailNotifications}
            onChange={(e: any) => {
              setData({ ...data, emailNotifications: e.target.checked });
            }}
          />
        </div>
        <hr className="border-white" />
        <div className="flex items-center justify-between w-full">
          <p className="text-base font-medium text-dark">
            Push / In-app Notifications
            <br />
            <span className="text-xs font-normal text-[#141b34b3]">
              Get real-time updates inside the platform.
            </span>
          </p>
          <Switch
            value={data.pushNotifications}
            onChange={(e: any) => {
              setData({ ...data, pushNotifications: e.target.checked });
            }}
          />
        </div>
        <hr className="border-white" />

        <div className="flex items-center justify-between w-full">
          <p className="text-base font-medium text-dark">
            Task Related Notifications
          </p>
          <Switch
            value={data.taskNotifications}
            onChange={(e: any) => {
              setData({ ...data, taskNotifications: e.target.checked });
            }}
          />
        </div>
        <hr className="border-white" />
        <div className="flex items-center justify-between w-full">
          <p className="text-base font-medium text-dark">
            Announcement Notifications
          </p>
          <Switch
            value={data.announcementNotifications}
            onChange={(e: any) => {
              setData({ ...data, announcementNotifications: e.target.checked });
            }}
          />
        </div>
        <hr className="border-white" />
        <div className="flex items-center justify-between w-full">
          <p className="text-base font-medium text-dark">
            Feedback Notifications
          </p>
          <Switch
            value={data.feedbackNotifications}
            onChange={(e: any) => {
              setData({ ...data, feedbackNotifications: e.target.checked });
            }}
          />
        </div>
        <hr className="border-white" />
        <div className="flex items-center justify-between w-full">
          <p className="text-base font-medium text-dark">
            Program Notifications
          </p>
          <Switch
            value={data.programNotifications}
            onChange={(e: any) => {
              setData({ ...data, programNotifications: e.target.checked });
            }}
          />
        </div>
      </div>
    </div>
    </Container>
  );
};

export default Notification;
