"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CommunityPage() {
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
    {
      id: 12,
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
      id: 24,
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
      id: 34,
      image: "https://i.ibb.co.com/BVsHh02W/image.png",
      timeAgo: "20 min ago",
      likes: 20,
      replies: 0,
      author: "ALMO",
      handle: "@COLLMONTREAL",
      description: "Great event today!",
      avatar: "https://i.ibb.co.com/0pJk2RCV/image.png",
    },
    {
      id: 243,
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
      id: 343,
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
    <div className=" p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => router.back()}
          className="text-gray-900 hover:text-gray-700 transition-colors"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <h1 className="text-4xl font-bold text-gray-900 flex-1 text-center">
          Community Feed
        </h1>
        <div className="w-8" />
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 max-w-screen-2xl mx-auto">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Image */}
            <div className="relative">
              <Image
                height={700}
                width={1200}
                src={post.image || "/placeholder.svg"}
                alt="Post"
                className="w-full h-56 object-cover"
              />
              <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {post.timeAgo}
              </div>
            </div>

            {/* Engagement */}
            <div className="px-4 py-3 border-b border-gray-200 flex gap-6 text-sm">
              <div className="flex items-center gap-1 text-[#141b3499]">
                <span className="text-red-500">❤️</span>
                <span>{post.likes} Likes</span>
              </div>
              <div className="flex items-center gap-1 text-[#141b3499]">
                <span>💬</span>
                <span>{post.replies} Replies</span>
              </div>
            </div>

            {/* Author Info */}
            <div className="p-4">
              <div className="flex items-start gap-3">
                <Image
                  height={200}
                  width={200}
                  src={post.avatar || "/placeholder.svg"}
                  alt={post.author}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-gray-900">{post.author}</div>
                  <div className="text-sm text-blue-600">{post.handle}</div>
                  <p className="text-sm text-gray-700 mt-2 line-clamp-3">
                    {post.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
