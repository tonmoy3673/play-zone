/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import styles from "./input.module.css";

// Main Chat Component (receiving demoClients and selectedId from Parent)
const ChatProfileMenu = ({
  demoClients,
  selectedId,
  setSelectedId,
}: {
  demoClients: any;
  selectedId: number;
  setSelectedId: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const client = demoClients[selectedId];

  return (
    <div
      style={{
        backgroundColor: "rgba(245, 246, 250, 0.8)",
        borderRadius: "12px",
        padding: "16px",
        overflowY: "auto",
        maxWidth: "350px" /* Limiting the width */,
        width: "100%",
        boxShadow:
          "0 4px 6px rgba(0, 0, 0, 0.1)" /* Adding shadow for a modern feel */,
      }}
    >
      <div style={{ textAlign: "center" }}>
        {/* Profile Picture */}

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={demoClients[selectedId].avatar} // Replace with actual image URL
            alt="Profile"
            style={{
              borderRadius: "50%",
              width: "80px",
              height: "80px",
              objectFit: "cover",
              marginBottom: "12px",
            }}
          />
        </div>

        {/* Name */}
        <h3 style={{ fontWeight: "600", marginBottom: "8px" }}>
          {demoClients[selectedId].name}
        </h3>
        {/* Location */}
        <p style={{ color: "#888", fontSize: "14px" }}>
          {demoClients[selectedId].location}
        </p>
        {/* Short Info */}
        <p style={{ color: "#555", fontSize: "14px", fontStyle: "italic" }}>
          {demoClients[selectedId].details}
        </p>
        {/* View Profile Button */}
        <button
          style={{
            backgroundColor: "#4E73DF",
            color: "#fff",
            padding: "8px 16px",
            borderRadius: "20px",
            border: "none",
            cursor: "pointer",
            marginTop: "12px",
          }}
        >
          View Profile
        </button>
      </div>

      <hr style={{ margin: "20px 0", borderColor: "#eeeeee56" }} />

      {/* Client Details */}

      <div
        style={{
          display: "flex",
          width: "100%",
          borderTopWidth: 0.7,
          borderTopColor: "#92a5cb",
          borderTopStyle: "solid",
          borderBottomWidth: 0.7,
          borderBottomColor: "#92a5cb",
          borderBottomStyle: "solid",
        }}
      >
        <div className={styles["icon-container"]}>
          {/* Left icon */}
          <div className={styles["icon"]}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M12.4609 10.3296C12.3347 10.8519 11.7381 11.221 10.5449 11.9591C9.39145 12.6727 8.81471 13.0295 8.34994 12.886C8.15779 12.8268 7.98271 12.7141 7.84152 12.559C7.5 12.1838 7.5 11.4561 7.5 10.0007C7.5 8.5452 7.5 7.81747 7.84152 7.44228C7.98271 7.28716 8.15779 7.17455 8.34994 7.11526C8.81471 6.97185 9.39145 7.32862 10.5449 8.04218C11.7381 8.78031 12.3347 9.14937 12.4609 9.67166C12.513 9.88725 12.513 10.1141 12.4609 10.3296Z"
                stroke="#595F70"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M2.08337 10.0007C2.08337 6.2687 2.08337 4.40272 3.24274 3.24335C4.40211 2.08398 6.26809 2.08398 10 2.08398C13.732 2.08398 15.598 2.08398 16.7573 3.24335C17.9167 4.40272 17.9167 6.2687 17.9167 10.0007C17.9167 13.7326 17.9167 15.5986 16.7573 16.7579C15.598 17.9173 13.732 17.9173 10 17.9173C6.26809 17.9173 4.40211 17.9173 3.24274 16.7579C2.08337 15.5986 2.08337 13.7326 2.08337 10.0007Z"
                stroke="#595F70"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          {/* Center icon */}
          <div className={`${styles["icon"]}`}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 2.08398V3.33398C12.5 4.5125 12.5 5.10175 12.8661 5.46787C13.2322 5.83398 13.8215 5.83398 15 5.83398H16.25"
                stroke="#595F70"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.33337 13.3327V6.66602C3.33337 4.30899 3.33337 3.13048 4.06561 2.39825C4.79784 1.66602 5.97635 1.66602 8.33337 1.66602H11.8097C12.1503 1.66602 12.3206 1.66602 12.4738 1.72945C12.6269 1.79288 12.7473 1.91331 12.9882 2.15417L16.1786 5.34453C16.4194 5.58539 16.5398 5.70582 16.6033 5.85896C16.6667 6.0121 16.6667 6.18241 16.6667 6.52304V13.3327C16.6667 15.6897 16.6667 16.8682 15.9345 17.6005C15.2022 18.3327 14.0237 18.3327 11.6667 18.3327H8.33337C5.97635 18.3327 4.79784 18.3327 4.06561 17.6005C3.33337 16.8682 3.33337 15.6897 3.33337 13.3327Z"
                stroke="#595F70"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                opacity="0.4"
                d="M6.66663 9.16602H13.3333M6.66663 11.666H13.3333M6.66663 14.166H12.0833"
                stroke="#595F70"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Right icon */}
          <div className={styles["icon"]}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.375 6.04167C4.375 5.12119 5.12119 4.375 6.04167 4.375C6.96214 4.375 7.70833 5.12119 7.70833 6.04167C7.70833 6.96214 6.96214 7.70833 6.04167 7.70833C5.12119 7.70833 4.375 6.96214 4.375 6.04167Z"
                fill="url(#paint0_linear_1779_7342)"
              />
              <path
                opacity="0.4"
                d="M18.3667 10.585C16.7441 9.53864 15.1983 9.10016 13.7188 9.16195C12.2461 9.22345 10.9219 9.7771 9.7308 10.5735C7.71541 11.9209 5.94281 14.071 4.3557 15.9961C4.10446 16.3008 3.85782 16.6 3.61565 16.8894L2.91663 17.5002L3.93578 18.1941C4.65594 18.4924 5.49823 18.6231 6.4662 18.6867C7.4304 18.75 8.59183 18.75 9.97289 18.75H10.0625C11.8759 18.75 13.3215 18.7501 14.4549 18.5977C15.6252 18.4403 16.5867 18.1069 17.3471 17.3466C18.0133 16.6803 18.3538 15.8629 18.5334 14.8779C18.7084 13.9183 18.7411 12.7349 18.7484 11.2896L18.7507 10.8327L18.3667 10.585Z"
                fill="url(#paint1_linear_1779_7342)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.93796 1.25H10.062C11.8754 1.24998 13.321 1.24997 14.4544 1.40235C15.6247 1.5597 16.5862 1.89312 17.3466 2.65345C18.1069 3.41377 18.4403 4.37528 18.5976 5.54559C18.75 6.67904 18.75 8.12466 18.75 9.93798V10.062C18.75 11.8753 18.75 13.321 18.5976 14.4544C18.4403 15.6247 18.1069 16.5862 17.3466 17.3466C16.5862 18.1069 15.6247 18.4403 14.4544 18.5976C13.321 18.75 11.8753 18.75 10.062 18.75H9.93798C8.12466 18.75 6.67904 18.75 5.54559 18.5976C4.37528 18.4403 3.41377 18.1069 2.65345 17.3466C1.89312 16.5862 1.5597 15.6247 1.40235 14.4544C1.24997 13.321 1.24998 11.8754 1.25 10.062V9.93796C1.24998 8.12464 1.24997 6.67904 1.40235 5.54559C1.5597 4.37528 1.89312 3.41377 2.65345 2.65345C3.41377 1.89312 4.37528 1.5597 5.54559 1.40235C6.67904 1.24997 8.12464 1.24998 9.93796 1.25ZM5.76767 3.05416C4.78217 3.18665 4.231 3.43291 3.83196 3.83196C3.43291 4.231 3.18665 4.78217 3.05416 5.76767C2.91844 6.77715 2.91667 8.11047 2.91667 10C2.91667 11.8895 2.91844 13.2229 3.05416 14.2323C3.18665 15.2178 3.43291 15.769 3.83196 16.168C4.231 16.5671 4.78217 16.8133 5.76767 16.9458C6.77715 17.0816 8.11047 17.0833 10 17.0833C11.8895 17.0833 13.2229 17.0816 14.2323 16.9458C15.2178 16.8133 15.769 16.5671 16.168 16.168C16.5671 15.769 16.8133 15.2178 16.9458 14.2323C17.0816 13.2229 17.0833 11.8895 17.0833 10C17.0833 8.11047 17.0816 6.77715 16.9458 5.76767C16.8133 4.78217 16.5671 4.231 16.168 3.83196C15.769 3.43291 15.2178 3.18665 14.2323 3.05416C13.2229 2.91844 11.8895 2.91667 10 2.91667C8.11047 2.91667 6.77715 2.91844 5.76767 3.05416Z"
                fill="url(#paint2_linear_1779_7342)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1779_7342"
                  x1="5.71615"
                  y1="4.66512"
                  x2="5.79856"
                  y2="6.50318"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5C8FF7" />
                  <stop offset="1" stopColor="#276AEE" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1779_7342"
                  x1="9.28736"
                  y1="9.99126"
                  x2="9.43125"
                  y2="15.2882"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5C8FF7" />
                  <stop offset="1" stopColor="#276AEE" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_1779_7342"
                  x1="8.29102"
                  y1="2.77313"
                  x2="8.72367"
                  y2="12.4229"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5C8FF7" />
                  <stop offset="1" stopColor="#276AEE" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* Client Photos */}

      <div style={{ marginTop: "16px" }}>
        <h4
          style={{
            fontSize: "16px",
            color: "#000000",
            marginBottom: "12px",
            marginTop: 12,
            fontWeight: "bold",
          }}
        >
          Photos
        </h4>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
            gap: "8px",
            marginTop: "8px",
          }}
        >
          {/* Map through the glary images and display them */}
          {demoClients[selectedId].glary.map((image: any, index: any) => (
            <img
              key={index}
              src={image}
              alt={`photo-${index}`}
              style={{
                width: "100%",
                height: "120px",
                objectFit: "cover",
                borderRadius: "8px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              // onMouseEnter={(e) => {
              //     e.target.style.transform = 'scale(1.05)';
              //     e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
              // }}
              // onMouseLeave={(e) => {
              //     e.target.style.transform = 'scale(1)';
              //     e.target.style.boxShadow = 'none';
              // }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatProfileMenu;
