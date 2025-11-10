"use client";

import Icon from "@/utils/icon";
import Image from "next/image";
import Link from "next/link";

interface GalleryItem {
  id: string;
  title: string;
  image: string;
  postedTime: string;
}

const galleryData: GalleryItem[] = [
  {
    id: "1",
    title: "vs. Roosevelt Highlights",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
    postedTime: "Posted 3 days ago",
  },
  {
    id: "2",
    title: "Official College Visit",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    postedTime: "1 Week Ago",
  },
  {
    id: "3",
    title: "Hawaiian Islands 7v7 QB Camp Photo",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
    postedTime: "2 Week Ago",
  },
  {
    id: "4",
    title: "vs. Saint Peters",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    postedTime: "3 Week Ago",
  },
];

export default function GalleryHighlights() {
  return (
    <div className="w-full bg-[#ffffff4d] backdrop-blur-3xl border border-white p-5 rounded-3xl">
      {/* Header */}
      <div className="flex items-center flex-wrap justify-between mb-[22px]">
        <h2 className="text-lg font-medium text-gray-900">
          Gallery & Highlights
        </h2>
        <Link
          href="/gallery-highlights"
          className="bg-[linear-gradient(177deg,#5C8FF7_10.06%,#276AEE_62.94%)] bg-clip-text text-transparent font-medium text-sm transition-colors"
        >
          View More
        </Link>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {galleryData.map((item) => (
          <div
            key={item.id}
            className="relative mx-auto w-full h-[280px] max-w-lg rounded-2xl overflow-hidden group cursor-pointer"
          >
            {/* Background Image */}
            <Image
              width={600}
              height={400}
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-[#0000004d] to-transparent opacity-80" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              {/* Play Button Icon */}
              <div className="flex justify-center items-center">
                <div className="size-12 absolute top-[45%] left-[50%] -translate-y-1/2 -translate-x-1/2 backdrop-blur-[2px] border-t border-t-white border-b border-b-white rounded-full flex items-center justify-center">
                  <Icon name="play" height={20} width={20} />
                </div>
              </div>

              {/* Title and Time */}
              <div>
                <h3 className="text-white text-lg font-semibold mb-3 text-balance">
                  {item.title}
                </h3>
                <div className="inline-block bg-dark rounded-md  text-white px-4 py-2  text-xs font-medium">
                  {item.postedTime}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
