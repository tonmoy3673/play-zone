"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CommunityFeed() {
  const router = useRouter();

  const posts = [
    {
      id: 1,
      image: "https://i.ibb.co.com/BVsHh02W/image.png",
      timeAgo: "30 min ago",
      likes: 20,
      replies: 30,
      author: "Coach Trevor",
      handle: "@BeachVBMalibu",
      description: "Just wrapped up another successful practice! ",
      avatar: "https://i.ibb.co.com/0pJk2RCV/image.png",
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/6JBgS5Hq/image.png",
      timeAgo: "20 min ago",
      likes: 20,
      replies: 30,
      author: "Coach Bronson",
      handle: "@oregonfootball",
      description: "Mahalo for hosting our Island Boys from the 80s",
      avatar: "https://i.ibb.co.com/0pJk2RCV/image.png",
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/BVsHh02W/image.png",
      timeAgo: "20 min ago",
      likes: 20,
      replies: 0,
      author: "ALMO",
      handle: "@COLLMONTREAL",
      description: "Great event today!",
      avatar: "https://i.ibb.co.com/0pJk2RCV/image.png",
    },
  ];

  return (
    <div className="bg-[#ffffff5E] p-5 flex-1 border border-white rounded-2xl  backdrop-blur-3xl  overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold text-dark">Community Feed</h2>
        <Button
          onClick={() => router.push("/athlete/community")}
          className="bg-[#ffffffa6] hover:bg-white/80 p-0 text-gray-900 size-10  rounded-full flex items-center justify-center transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="10"
            viewBox="0 0 15 10"
            fill="none"
          >
            <path
              opacity="0.4"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 4.99935C15 5.45959 14.6269 5.83268 14.1667 5.83268L0.833319 5.83268C0.373082 5.83268 -1.46398e-05 5.45959 -1.46197e-05 4.99935C-1.45996e-05 4.53911 0.373082 4.16602 0.833319 4.16602L14.1667 4.16602C14.6269 4.16602 15 4.53911 15 4.99935Z"
              fill="#141B34"
            />
            <path
              d="M13.3101 5C13.2324 4.87103 13.0694 4.63926 12.8911 4.43755C12.5364 4.03602 12.0474 3.57737 11.537 3.13421C11.0307 2.69464 10.522 2.28637 10.1384 1.98698C9.94697 1.83763 9.61671 1.58814 9.50576 1.50434C9.13524 1.2314 9.05609 0.709778 9.329 0.339216C9.60192 -0.0313656 10.1236 -0.110534 10.4942 0.162389L10.4973 0.164725C10.6176 0.255601 10.9664 0.519091 11.1637 0.673058C11.5613 0.983346 12.0943 1.41086 12.6297 1.8757C13.1609 2.33695 13.7137 2.85133 14.1401 3.33398C14.3525 3.57436 14.5512 3.82649 14.7013 4.0755C14.8376 4.30163 15 4.63066 15 4.99997C15 5.36928 14.8376 5.69837 14.7013 5.9245C14.5512 6.17351 14.3525 6.42564 14.1401 6.66602C13.7136 7.14867 13.1609 7.66305 12.6297 8.1243C12.0943 8.58914 11.5613 9.01665 11.1637 9.32694C10.9664 9.48091 10.6178 9.74423 10.4975 9.8351L10.4942 9.83761C10.1236 10.1105 9.60192 10.0314 9.329 9.66078C9.05609 9.29022 9.13524 8.7686 9.50576 8.49566C9.61671 8.41186 9.94697 8.16237 10.1384 8.01302C10.522 7.71363 11.0307 7.30536 11.537 6.86579C12.0474 6.42263 12.5364 5.96398 12.8911 5.56245C13.0694 5.36074 13.2324 5.12897 13.3101 5Z"
              fill="#141B34"
            />
          </svg>
        </Button>
      </div>

      {/* Posts Grid */}
      <div className="flex items-start gap-5 flex-nowrap">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-[#ffffff6b] h-[300px] min-w-[220px] p-3 pb-7 rounded-2xl overflow-hidden"
          >
            {/* Image */}
            <div className="relative">
              <Image
                height={700}
                width={1200}
                src={post.image || "/placeholder.svg"}
                alt="Post"
                className="w-full aspect-video max-h-48 rounded-xl object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#ffffffc9] text-black text-[10px] font-normal px-3 py-1 rounded-full">
                {post.timeAgo}
              </div>
            </div>

            {/* Engagement */}
            <div className=" mt-4 items-center justify-between mb-5  flex ">
              <div className="flex items-center gap-1 text-[#141b3499]">
                <span className="text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                  >
                    <path
                      d="M5.52149 9.35359C5.37274 9.40609 5.12774 9.40609 4.97899 9.35359C3.71024 8.92047 0.875244 7.11359 0.875244 4.05109C0.875244 2.69922 1.96462 1.60547 3.30774 1.60547C4.10399 1.60547 4.80837 1.99047 5.25024 2.58547C5.69212 1.99047 6.40087 1.60547 7.19274 1.60547C8.53587 1.60547 9.62524 2.69922 9.62524 4.05109C9.62524 7.11359 6.79024 8.92047 5.52149 9.35359Z"
                      fill="#FF3939"
                    />
                  </svg>
                </span>
                <span className="text-[9px] text-black">
                  {post.likes} Likes
                </span>
              </div>
              <div className="flex items-center gap-1 ">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                  >
                    <path
                      d="M3.96899 8.5625H3.75024C2.00024 8.5625 1.12524 8.125 1.12524 5.9375V3.75C1.12524 2 2.00024 1.125 3.75024 1.125H7.25024C9.00024 1.125 9.87524 2 9.87524 3.75V5.9375C9.87524 7.6875 9.00024 8.5625 7.25024 8.5625H7.03149C6.89587 8.5625 6.76462 8.62812 6.68149 8.7375L6.02524 9.6125C5.73649 9.9975 5.26399 9.9975 4.97524 9.6125L4.31899 8.7375C4.24899 8.64125 4.08712 8.5625 3.96899 8.5625Z"
                      stroke="black"
                      strokeWidth="0.75"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.24857 5.0625H7.2525"
                      stroke="black"
                      strokeWidth="0.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.49735 5.0625H5.50128"
                      stroke="black"
                      strokeWidth="0.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.7476 5.0625H3.75153"
                      stroke="black"
                      strokeWidth="0.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-[9px] text-black">
                  {post.replies} Replies
                </span>
              </div>
            </div>

            {/* Author Info */}

            <div className="flex items-center gap-2 mb-3">
              <Image
                height={200}
                width={200}
                src={post.avatar || "/placeholder.svg"}
                alt={post.author}
                className="w-7 h-7 rounded-full object-cover flex-shrink-0"
              />

              <div className="font-medium text-[15px] text-[#1B2559]">
                {post.author}
              </div>
            </div>
            <div>
              <div className="text-xs text-blue-600">{post.handle}</div>
              <p className="text-xs text-gray-700 mt-2 line-clamp-2">
                {post.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
