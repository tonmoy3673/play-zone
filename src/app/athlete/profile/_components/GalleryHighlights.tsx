"use client";

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
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-medium text-gray-900">
          Gallery & Highlights
        </h2>
        <Link
          href="/gallery"
          className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
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
                <div className="w-12 h-12 absolute top-[45%] left-[50%] translate-y-[-50%] translate-x-[-50%] backdrop-blur-3xl border-t border-t-white border-b border-b-white rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="22"
                    viewBox="0 0 21 22"
                    fill="none"
                  >
                    <path
                      opacity="0.4"
                      d="M13.0873 3.44933C15.2646 4.68624 16.9755 5.65825 18.1944 6.54864C19.4217 7.44514 20.3294 8.38218 20.6545 9.61753C20.8929 10.5235 20.8929 11.4765 20.6545 12.3825C20.3294 13.6178 19.4217 14.5549 18.1944 15.4514C16.9756 16.3417 15.2646 17.3137 13.0874 18.5506L13.0874 18.5506C10.9842 19.7455 9.21066 20.7531 7.86425 21.3258C6.50702 21.9031 5.26968 22.1957 4.0671 21.8549C3.18332 21.6044 2.37917 21.1291 1.73138 20.4755C0.85221 19.5885 0.499306 18.3625 0.332343 16.8871C0.166602 15.4226 0.166613 13.5053 0.166626 11.0668V11.0668V10.9332V10.9332C0.166613 8.49469 0.166602 6.57744 0.332343 5.11285C0.499306 3.63746 0.85221 2.41148 1.73138 1.52447C2.37917 0.870893 3.18332 0.395549 4.0671 0.14511C5.26968 -0.195668 6.50702 0.0969204 7.86425 0.6742C9.21066 1.24688 10.9842 2.25445 13.0873 3.44933Z"
                      fill="white"
                    />
                    <path
                      d="M18.1951 6.55028C19.4224 7.44678 20.3301 8.38383 20.6552 9.61918C20.8936 10.5252 20.8936 11.4781 20.6552 12.3841C20.3301 13.6195 19.4224 14.5565 18.1951 15.453C16.9762 16.3434 15.2653 17.3154 13.0881 18.5523C10.9849 19.7472 9.21136 20.7548 7.86495 21.3274C6.50772 21.9047 5.27038 22.1973 4.0678 21.8565C3.18402 21.6061 2.37987 21.1308 1.73208 20.4772C0.85291 19.5902 0.500006 18.3642 0.333043 16.8888C0.231898 15.995 0.192481 14.9326 0.177124 13.6861L15.974 5.1145C16.8378 5.62969 17.5793 6.10041 18.1951 6.55028Z"
                      fill="white"
                    />
                  </svg>
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
