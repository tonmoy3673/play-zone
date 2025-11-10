/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useRef, useEffect, SetStateAction } from "react";

import ChatInput from "@/components/Chat/input";
import ChatProfileMenu from "@/components/Chat/profile";
import { demoChats, demoClients } from "../../../../json/chatData";

// Message item component
const MessageItem = ({
  msg,
  selected,
  onClick,
}: {
  msg: (typeof demoChats)[1][0];
  selected: boolean;
  onClick: () => void;
}) => (
  <div
    onClick={() => {
      onClick();
      // Mark the message as read by updating unreadCount to 0
      if (msg.unreadCount && msg.unreadCount > 0) {
        msg.unreadCount = 0;
      }
    }}
    style={{
      padding: "10px 8px",
      marginBottom: 8,
      borderRadius: 6,
      background: selected ? "#e1e7f5" : "transparent",
      cursor: "pointer",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "relative",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: 12,
        right: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <span
        style={{
          fontFamily: "Inter",
          fontWeight: 500,
          fontStyle: "normal",
          fontSize: 10,
          lineHeight: "140%",
          letterSpacing: 0,
          color: "rgba(20, 27, 52, 0.7)",
        }}
      >
        5m
      </span>
      {/* Unread message badge or checked icon */}
      {msg.unreadCount && msg.unreadCount > 0 ? (
        <span
          style={{
            marginTop: 4,
            background: "#2970ff",
            color: "#fff",
            borderRadius: "50%",
            minWidth: 18,
            height: 18,
            fontSize: 11,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 600,
          }}
        >
          {msg.unreadCount}
        </span>
      ) : (
        <span style={{ marginTop: 4, color: "#2970ff", fontSize: 16 }}>
          {/* Simple checked icon SVG */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.66669 9.22287L4.00002 11.6673L4.6827 10.9521M11 4.33398L6.95804 8.56844"
              stroke="url(#paint0_linear_1779_7146)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M5 9.22287L7.33333 11.6673L14.3333 4.33398"
              stroke="url(#paint1_linear_1779_7146)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1779_7146"
                x1="5.42189"
                y1="4.97225"
                x2="5.56446"
                y2="9.01908"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#5C8FF7" />
                <stop offset="1" stopColor="#276AEE" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1779_7146"
                x1="8.75521"
                y1="4.97225"
                x2="8.89777"
                y2="9.01908"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#5C8FF7" />
                <stop offset="1" stopColor="#276AEE" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      )}
    </div>
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={msg.avatar}
        alt={msg.sender}
        style={{ borderRadius: "50%", width: 36, height: 36, marginRight: 8 }}
      />
      <div>
        <div style={{ fontSize: 12, color: "#888" }}>{msg.text}</div>
      </div>
    </div>
  </div>
);

// Chat bubble component
const ChatBubble = ({ msg }: any) => {
  const isSender = msg.sender === "You"; // Check if the message is from the sender (You)

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        marginBottom: "12px",
        justifyContent: isSender ? "flex-end" : "flex-start", // Sender aligned to right, Receiver to left
      }}
    >
      {/* Avatar */}

      {!isSender && (
        <img
          src={msg.avatar} // Avatar URL
          alt={msg.sender}
          style={{
            borderRadius: "50%",
            width: 36,
            height: 36,
            marginRight: isSender ? "0" : "12px", // Adjust the margin for sender/receiver
            marginLeft: isSender ? "12px" : "0", // Adjust the margin for sender/receiver
          }}
        />
      )}

      {/* Message Container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: isSender ? "flex-end" : "flex-start", // Align message to left for receiver and right for sender
        }}
      >
        <div
          style={{
            background: isSender
              ? "linear-gradient(45deg, rgba(92, 143, 247, 1), rgba(39, 106, 238, 1))"
              : "rgba(255, 255, 255, 0.2)", // Semi-transparent background (for glass effect)
            padding: "10px 12px",
            borderRadius: "16px",
            display: "flex",
            maxWidth: "70%",
            wordWrap: "break-word",
            fontSize: "14px",
            fontFamily: "Arial, sans-serif",
            color: isSender ? "#fff" : "#333",
            backdropFilter: "blur(10px)", // Apply blur to the background for the glass effect
            WebkitBackdropFilter: "blur(10px)", // Safari compatibility
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Optional shadow for more depth
            justifyContent: "space-between",
          }}
        >
          {msg.text}{" "}
          {isSender && (
            <span style={{ marginTop: 4, color: "#2970ff", fontSize: 16 }}>
              {/* Simple checked icon SVG */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.66675 9.22287L4.00008 11.6673L4.68276 10.9521M11.0001 4.33398L6.9581 8.56844"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  opacity="0.4"
                  d="M5 9.22287L7.33333 11.6673L14.3333 4.33398"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          )}
        </div>

        {/* Time */}
        <span
          style={{
            fontSize: "12px",
            color: "#888",
            marginTop: "4px",
          }}
        >
          {msg.time}
        </span>
      </div>
    </div>
  );
};

// Main Chat Component
const Chat: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number>(1);
  const [selectedTab, setSelectedTab] = useState<string>("All");
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedId, demoChats]);

  const handleSend = () => {
    if (!input.trim()) return;
    demoChats[selectedId].push({
      sender: "You",
      text: input,
      receiver: "",
      avatar: "",
      time: "",
    });
    setInput("");
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 2fr 1fr",
        gap: "20px",
        height: "100vh",
        padding: "20px",
        boxSizing: "border-box",
        backdropFilter: "blur(10px)",
        backgroundImage:
          "url(/A_digital_image_features_an_abstract_frosted_glass.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Messages Sidebar */}
      <div
        style={{
          background: "rgb(255, 249, 249)",
          borderRadius: "8px",
          padding: "16px",
          overflowY: "auto",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.18)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
          <span style={{ fontWeight: 600, fontSize: 18 }}>Chat</span>
          <span>
            {/* Simple chat icon SVG */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 9L14 9.00008"
                stroke="#141B34"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 15H10"
                stroke="#141B34"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 3H19"
                stroke="#141B34"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>

        <div style={{ position: "relative", marginBottom: "12px" }}>
          <input
            type="text"
            placeholder="Search"
            style={{
              width: "100%",
              padding: "8px 32px 8px 32px",
              borderRadius: "84px",
              border: "1px solid #ddd",
              backgroundColor: "#f7f7f7",
              fontSize: "14px",
            }}
          />
          <span
            style={{
              position: "absolute",
              left: 10,
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
              color: "#888",
              fontSize: "18px",
            }}
          >
            {/* Simple magnifier SVG icon */}
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <circle cx="9" cy="9" r="7" stroke="#888" strokeWidth="2" />
              <line
                x1="15"
                y1="15"
                x2="19"
                y2="19"
                stroke="#888"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>
        <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
          {["All", "Communities", "DM'S"].map((label) => (
            <button
              key={label}
              onClick={() => setSelectedTab(label)}
              style={{
                flex: 1,
                padding: "8px 16px",
                borderRadius: "8px",
                fontSize: "14px",
                border: "none",
                background:
                  selectedTab === label
                    ? "linear-gradient(45deg, rgba(92, 143, 247, 1), rgba(39, 106, 238, 1))"
                    : "rgba(232, 240, 249, 1)",
                color: selectedTab === label ? "#fff" : "#000",
                cursor: "pointer",
              }}
            >
              {label}
            </button>
          ))}
        </div>
        {Object.keys(demoChats).map((key) => (
          <MessageItem
            key={key}
            msg={demoChats[parseInt(key)][0]}
            selected={selectedId === parseInt(key)}
            onClick={() => setSelectedId(parseInt(key))}
          />
        ))}
      </div>

      {/* Chat Window */}

      <div
        style={{
          background: "rgba(255, 255, 255, 0.3)", // Semi-transparent background
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          backdropFilter: "blur(15px)", // Glass effect (blurred background)
          WebkitBackdropFilter: "blur(15px)", // For Safari compatibility
          overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "16px",
            backdropFilter: "blur(5px)", // Subtle blur effect for header
            WebkitBackdropFilter: "blur(5px)", // For Safari compatibility
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={demoChats[selectedId][0].avatar}
              alt={demoClients[selectedId].name}
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                marginRight: 12,
              }}
            />
            <h3 style={{ margin: 0 }}>{demoClients[selectedId].name}</h3>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              style={{
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                borderWidth: 1,
                borderColor: "#fff",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.6665 9.16732C1.6665 6.41746 1.6665 5.04253 2.52078 4.18826C3.37505 3.33398 4.74998 3.33398 7.49984 3.33398H8.33317C11.083 3.33398 12.458 3.33398 13.3122 4.18826C14.1665 5.04253 14.1665 6.41746 14.1665 9.16732V10.834C14.1665 13.5838 14.1665 14.9588 13.3122 15.813C12.458 16.6673 11.083 16.6673 8.33317 16.6673H7.49984C4.74998 16.6673 3.37505 16.6673 2.52078 15.813C1.6665 14.9588 1.6665 13.5838 1.6665 10.834V9.16732Z"
                  stroke="#141B34"
                  strokeWidth="1.5"
                />
                <path
                  opacity="0.4"
                  d="M14.1665 7.42089L14.2714 7.33432C16.0346 5.87954 16.9161 5.15215 17.6247 5.50337C18.3332 5.85458 18.3332 7.01897 18.3332 9.34775V10.6509C18.3332 12.9797 18.3332 14.1441 17.6247 14.4953C16.9161 14.8465 16.0346 14.1192 14.2714 12.6644L14.1665 12.5778"
                  stroke="#141B34"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <ellipse
                  opacity="0.4"
                  cx="9.5835"
                  cy="7.91602"
                  rx="1.25"
                  ry="1.25"
                  stroke="#141B34"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
            <button
              style={{
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                borderWidth: 1,
                borderColor: "#fff",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1779_8195)">
                  <path
                    opacity="0.4"
                    d="M3.14786 9.95131C2.35784 8.57377 1.97638 7.44892 1.74637 6.30869C1.40619 4.62233 2.18468 2.97502 3.47432 1.92391C4.01938 1.47967 4.6442 1.63145 4.96651 2.20968L5.69416 3.51511C6.27091 4.54982 6.55929 5.06718 6.50209 5.61568C6.44489 6.16417 6.05598 6.6109 5.27815 7.50435L3.14786 9.95131ZM3.14786 9.95131C4.74693 12.7396 7.25637 15.2504 10.0479 16.8513M10.0479 16.8513C11.4254 17.6414 12.5503 18.0228 13.6905 18.2528C15.3769 18.593 17.0242 17.8145 18.0753 16.5249C18.5195 15.9798 18.3677 15.355 17.7895 15.0327L16.4841 14.305C15.4494 13.7283 14.932 13.4399 14.3835 13.4971C13.835 13.5543 13.3883 13.9432 12.4948 14.721L10.0479 16.8513Z"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.14786 9.95132C2.35784 8.57377 1.97638 7.44892 1.74637 6.30869C1.40619 4.62233 2.18468 2.97502 3.47432 1.92391C4.01938 1.47967 4.6442 1.63145 4.96651 2.20968L5.69416 3.51511C6.27091 4.54982 6.55929 5.06718 6.50209 5.61568C6.44489 6.16417 6.05598 6.6109 5.27815 7.50435L3.14786 9.95132Z"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.0479 16.8513C11.4254 17.6414 12.5503 18.0228 13.6905 18.2528C15.3769 18.593 17.0242 17.8145 18.0753 16.5249C18.5195 15.9798 18.3677 15.355 17.7895 15.0327L16.4841 14.305C15.4494 13.7283 14.932 13.4399 14.3835 13.4971C13.835 13.5543 13.3883 13.9432 12.4948 14.721L10.0479 16.8513Z"
                    stroke="#141B34"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1779_8195">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button
              style={{
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                borderWidth: 1,
                borderColor: "#fff",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M9.99349 10H10.001"
                  stroke="#141B34"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.98666 15H9.99414"
                  stroke="#141B34"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.99984 5H10.0073"
                  stroke="#141B34"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div style={{ flex: 1, padding: "16px" }}>
          <div style={{ flex: 1, overflowY: "auto", marginBottom: "16px" }}>
            {demoChats[selectedId].map((msg: any, idx: number) => (
              <ChatBubble key={idx} msg={msg} />
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
        {/* <ChatInput /> */}
        <div style={{ width: "100%" }}>
          <ChatInput />
        </div>
      </div>

      {/* Client Sidebar */}
      <ChatProfileMenu
        demoClients={demoClients}
        selectedId={selectedId}
        setSelectedId={function (value: SetStateAction<number>): void {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
};

export default Chat;
