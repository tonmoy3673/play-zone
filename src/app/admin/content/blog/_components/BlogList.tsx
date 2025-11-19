import Pagination from "@/components/shared/Pagination";
import Icon, { IconName } from "@/utils/icon";
import Image from "next/image";
import React from "react";

const blogs = [
  {
    title: "10 Essential Exercises for Building Core Strength",
    description:
      "Discover the most effective core exercises that will transform your training routine. From planks to Russian twists, learn proper form and progression techniques Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam fuga, consequatur quidem veritatis reiciendis soluta provident accusantium earum, quam hic sequi. Explicabo corporis ex mollitia eius? Omnis veniam recusandae et?",
    name: "Coach Michale ",
    username: "@samguy",
    avatar:
      "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?q=80&w=735",
    date: "12 June, 2025 at 12:03 PM",
    status: "Archived",
    like: "1.5k",
    views: "3,466",
    comments: "150",
    shares: "34",
  },
  {
    title: "The Complete Guide to Pre-Workout Nutrition",
    description:
      "Maximize your workout performance with these evidence-based nutrition strategies. Leam what to eat, when to eat, and how to fuel your body for optimal results. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam fuga, consequatur quidem veritatis reiciendis soluta provident accusantium earum, quam hic sequi. Explicabo corporis ex mollitia eius? Omnis veniam recusandae et?",
    name: "by Dr. Michael Chen",
    username: "@samguy",
    avatar:
      "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?q=80&w=735",
    date: "12 June, 2025 at 12:03 PM",
    status: "Archived",
    like: "1.5k",
    views: "3,466",
    comments: "150",
    shares: "34",
  },
  {
    title: "From Couch to Marathon: Jessica's Incredible Journey",
    description:
      "Follow Jessica's inspiring transformation from a sedentary lifestyle to completing her first marathon in just 12 months. Learn about her training plan, challenges Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam fuga, consequatur quidem veritatis reiciendis soluta provident accusantium earum, quam hic sequi. Explicabo corporis ex mollitia eius? Omnis veniam recusandae et?",
    name: "Coach Michale ",
    username: "@samguy",
    avatar:
      "https://images.unsplash.com/photo-1695927621677-ec96e048dce2?q=80&w=735",
    date: "12 June, 2025 at 12:03 PM",
    status: "Archived",
    like: "1.5k",
    views: "3,466",
    comments: "150",
    shares: "34",
  },
];

const BlogList = () => {
  return (
    <>
      <div className="grid gap-3">
        {blogs?.map((blog, idx) => (
          <div
            key={idx}
            className="bg-white/60 rounded-2xl border border-white/80 overflow-hidden"
          >
            <div className="p-4 border-b border-[#EFF3F4] space-y-4">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="size-10 relative overflow-hidden rounded-full">
                    <Image
                      src={blog.avatar}
                      alt={blog.name}
                      fill
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="text-base">
                      <span className="text-dark font-bold">{blog.name}</span>
                      <span className="text-dark/70">{blog.username}</span>
                    </div>

                    <div className="flex items-center flex-wrap gap-3">
                      <div className="flex items-center gap-1 text-dark/70">
                        <Icon
                          height={16}
                          width={16}
                          name="clock"
                          className="text-dark"
                        />
                        <span className="text-xs">{blog.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="size-3 rounded bg-primary-gradient border-t border-[#68B0EA]" />
                        <span className="text-dark font-medium text-sm">
                          {blog.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button>
                    <Icon
                      name="task_edit"
                      height={20}
                      width={20}
                      className="text-[#595F70]"
                    />
                  </button>
                  <button>
                    <Icon
                      name="calendar"
                      height={20}
                      width={20}
                      className="text-[#595F70]"
                    />
                  </button>
                  <button>
                    <Icon
                      name="eye"
                      height={20}
                      width={20}
                      className="text-[#595F70]"
                    />
                  </button>
                  <button>
                    <Icon
                      name="delete"
                      height={20}
                      width={20}
                      className="text-[#595F70]"
                    />
                  </button>
                </div>
              </div>

              <div className="space-y-1 text-dark max-w-[848px]">
                <h3 className="text-base sm:text-lg md:text-xl font-medium">
                  {blog.title}
                </h3>
                <p className="line-clamp-2 text-sm">{blog.description}</p>
              </div>
            </div>

            <div className="p-4 flex items-center gap-5 flex-wrap">
              {[
                {
                  label: `${blog.like} Likes`,
                  icon: "heart_emoji" as IconName,
                },
                {
                  label: `${blog.views} Views`,
                  icon: "eye" as IconName,
                },
                {
                  label: `${blog.comments} Comments`,
                  icon: "message_2" as IconName,
                },
                {
                  label: `${blog.shares} Shares`,
                  icon: "share" as IconName,
                },
              ].map((item, actionIdx) => (
                <div key={actionIdx} className="flex items-center gap-1">
                  <Icon
                    name={item.icon}
                    height={20}
                    width={20}
                    className="text-[#595F70]"
                  />
                  <span className="text-dark/70 text-xs">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Pagination className="mt-5" text="Showing 5 of 230 Blog Post" />
    </>
  );
};

export default BlogList;
