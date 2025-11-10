"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 lg:left-7 lg:right-7 h-12 lg:h-20  max-lg:bg-white lg:backdrop-blur-sm  z-40">
      <div className="flex items-center justify-between h-full px-4 lg:px-7">
        {/* Left side - Logo and Navigation */}
        <div className="flex items-center lg:gap-12">
          {/* Logo */}
          <div className="size-7 lg:size-10  rounded-lg flex items-center justify-center">
            <Image
              src={"/logo-png.png"}
              alt="logo"
              width={40}
              height={40}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Breadcrumb Navigation */}
          <nav className="hidden lg:flex items-center gap-2 text-sm">
            <span className="text-gray-500">Overview</span>
            <span className="text-gray-400">/</span>
            <span className="text-dark-100 text-base font-medium">
              Dashboard
            </span>
          </nav>
        </div>

        {/* Right side - Search, Actions, Profile */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative max-lg:hidden">
            <input
              type="text"
              placeholder="Search"
              className="w-80 h-11 pl-10 pr-4 bg-[#ffffff4D]  border border-white rounded-full  text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 "
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                opacity="0.4"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.9941 13.9941C14.3195 13.6686 14.8472 13.6686 15.1726 13.9941L18.9226 17.7441C19.248 18.0695 19.248 18.5972 18.9226 18.9226C18.5972 19.248 18.0695 19.248 17.7441 18.9226L13.9941 15.1726C13.6686 14.8472 13.6686 14.3195 13.9941 13.9941Z"
                fill="#595F70"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.833252 9.16732C0.833252 4.56494 4.56421 0.833984 9.16659 0.833984C13.769 0.833984 17.4999 4.56494 17.4999 9.16732C17.4999 13.7697 13.769 17.5007 9.16659 17.5007C4.56421 17.5007 0.833252 13.7697 0.833252 9.16732ZM9.16659 2.50065C5.48469 2.50065 2.49992 5.48542 2.49992 9.16732C2.49992 12.8492 5.48469 15.834 9.16659 15.834C12.8485 15.834 15.8333 12.8492 15.8333 9.16732C15.8333 5.48542 12.8485 2.50065 9.16659 2.50065Z"
                fill="#595F70"
              />
            </svg>
          </div>

          {/* Message Icon */}
          <button className="w-10 h-10 hidden lg:flex items-center bg-[#ffffff4d] justify-center rounded-full border border-white transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M18.2998 9.14227C18.3445 9.8341 18.3445 10.5506 18.2998 11.2424C18.0713 14.7777 15.2946 17.5937 11.8088 17.8254C10.6196 17.9045 9.37793 17.9043 8.19112 17.8254C7.78243 17.7983 7.33696 17.7008 6.9533 17.5427C6.52643 17.3669 6.31296 17.279 6.20449 17.2923C6.09602 17.3057 5.93863 17.4217 5.62386 17.6539C5.06886 18.0631 4.36968 18.3571 3.33281 18.3318C2.80851 18.3191 2.54636 18.3127 2.42899 18.1126C2.31163 17.9125 2.4578 17.6355 2.75014 17.0815C3.15558 16.3132 3.41247 15.4336 3.02322 14.7288C2.35282 13.7222 1.78337 12.53 1.70016 11.2424C1.65545 10.5506 1.65545 9.8341 1.70016 9.14227C1.92863 5.60698 4.70528 2.79094 8.19112 2.55923C9.19317 2.49262 9.40096 2.48213 10.4166 2.52807"
                stroke="#595F70"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.9961 10.416H10.0036M13.3257 10.416H13.3332M6.6665 10.416H6.67398"
                stroke="#595F70"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                opacity="0.4"
                d="M18.3333 4.58268C18.3333 6.19351 17.0275 7.49935 15.4167 7.49935C13.8058 7.49935 12.5 6.19351 12.5 4.58268C12.5 2.97185 13.8058 1.66602 15.4167 1.66602C17.0275 1.66602 18.3333 2.97185 18.3333 4.58268Z"
                stroke="#595F70"
                strokeWidth="1.5"
              />
            </svg>
          </button>

          {/* Notification Icon with Badge */}
          <button className="w-10 h-10 flex relative items-center bg-[#ffffff4d] justify-center rounded-full border border-white transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
            >
              <path
                d="M1.10831 12.3074C0.931098 13.4691 1.72337 14.2754 2.69342 14.6772C6.41238 16.2178 11.5877 16.2178 15.3067 14.6772C16.2767 14.2754 17.069 13.4691 16.8918 12.3074C16.7829 11.5934 16.2443 10.999 15.8454 10.4184C15.3228 9.64874 15.2708 8.8092 15.2708 7.91602C15.2708 4.46424 12.4633 1.66602 9.00004 1.66602C5.53681 1.66602 2.72931 4.46424 2.72931 7.91602C2.72924 8.8092 2.67731 9.64874 2.15471 10.4184C1.75574 10.999 1.21722 11.5934 1.10831 12.3074Z"
                stroke="#595F70"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                opacity="0.4"
                d="M5.66663 15.834C6.0487 17.2717 7.39624 18.334 8.99996 18.334C10.6037 18.334 11.9512 17.2717 12.3333 15.834"
                stroke="#595F70"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </button>

          {/* User Profile */}
          <button className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200 hover:border-blue-500 transition-colors">
            <Image
              src="https://images.unsplash.com/photo-1724064710352-3cbcee4bc3a8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
              alt="User profile"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
