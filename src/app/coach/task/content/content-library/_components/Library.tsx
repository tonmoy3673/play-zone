"use client";

import Icon, { IconName } from "../../_components/icon";

// Content type definitions
type ContentType = "Video" | "Pdf" | "Livestream" | "Image" | "Document";

interface LibraryItem {
  id: string;
  thumbnail: string;
  thumbnailIcon?: "play" | "pdf" | "image";
  dateAdded: string;
  contentType: ContentType;
  title: string;
  description: string;
  linkedTasks: number | "Not yet assigned";
  fileSize: string;
  duration?: string;
  badge?: "FEATURED" | "RECORDED LIVE" | "NEW";
  badgeColor?: "green" | "red";
  icon?: string;
}

// Sample data based on Figma design
const libraryData: LibraryItem[] = [
  {
    id: "1",
    thumbnail:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop",
    thumbnailIcon: "play",
    dateAdded: "Jun 2, 2023",
    contentType: "Video",
    title: "QB Fundamentals Masterclass",
    description:
      "Complete guide to quarterback mechanics, footwork, and decision",
    linkedTasks: 2,
    fileSize: "235 MB",
    duration: "02:34",
    badge: "FEATURED",
    badgeColor: "green",
    icon: "play",
  },
  {
    id: "2",
    thumbnail:
      "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&h=600&fit=crop",
    thumbnailIcon: "pdf",
    dateAdded: "May 28, 2023",
    contentType: "Pdf",
    title: "Offensive Playbook 2023",
    description:
      "Complete offensive strategy guide with formations, routes, and",
    linkedTasks: 4,
    fileSize: "18 MB",
    duration: "02:34",
    icon: "pdf_01",
  },
  {
    id: "3",
    thumbnail:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop",
    thumbnailIcon: "play",
    dateAdded: "Jun 2, 2023",
    contentType: "Livestream",
    title: "Team Strategy Session",
    description:
      "Recorded team meeting covering defensive adjustments and game",
    linkedTasks: 3,
    fileSize: "1.2 GB",
    duration: "02:34",
    badge: "RECORDED LIVE",
    badgeColor: "red",
    icon: "play",
  },
  {
    id: "4",
    thumbnail:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop",
    thumbnailIcon: "play",
    dateAdded: "Jun 2, 2023",
    contentType: "Video",
    title: "QB Fundamentals Masterclass",
    description:
      "Complete guide to quarterback mechanics, footwork, and decision",
    linkedTasks: 2,
    fileSize: "235 MB",
    duration: "02:34",
    icon: "image_01",
  },
  {
    id: "5",
    thumbnail:
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&h=600&fit=crop",
    thumbnailIcon: "image",
    dateAdded: "May 20, 2023",
    contentType: "Image",
    title: "Play Diagram Collection",
    description:
      "25 illustrated play diagrams with position assignments and routes.",
    linkedTasks: 4,
    fileSize: "45 MB",
    icon: "image_01",
  },
  {
    id: "6",
    thumbnail:
      "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&h=600&fit=crop",
    thumbnailIcon: "pdf",
    dateAdded: "Jun 3, 2023",
    contentType: "Document",
    title: "Conditioning Program Guide",
    description: "8-week progressive conditioning plan with daily workouts and",
    linkedTasks: 1,
    fileSize: "2.5 MB",
    duration: "02:34",
    icon: "pdf_01",
  },
  {
    id: "7",
    thumbnail:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop",
    thumbnailIcon: "pdf",
    dateAdded: "May 28, 2023",
    contentType: "Pdf",
    title: "Offensive Playbook 2023",
    description:
      "Complete offensive strategy guide with formations, routes, and",
    linkedTasks: 4,
    fileSize: "18 MB",
    duration: "02:34",
    icon: "pdf_01",
  },
  {
    id: "8",
    thumbnail:
      "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&h=600&fit=crop",
    thumbnailIcon: "pdf",
    dateAdded: "Jun 2, 2023",
    contentType: "Pdf",
    title: "Conditioning Program",
    description:
      "Recorded team meeting covering defensive adjustments and game",
    linkedTasks: 3,
    fileSize: "1.2 GB",
    icon: "pdf_01",
  },
  {
    id: "9",
    thumbnail:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop",
    thumbnailIcon: "play",
    dateAdded: "Jun 2, 2023",
    contentType: "Video",
    title: "Speed & Agility Training",
    description:
      "Comprehensive speed development program with cone drills and sprint",
    linkedTasks: "Not yet assigned",
    fileSize: "320 MB",
    duration: "02:34",
    badge: "NEW",
    badgeColor: "green",
    icon: "play",
  },
];

// Get content type badge styling
const getContentTypeBadgeStyle = (type: ContentType) => {
  const styles = {
    Video:
      "bg-gradient-to-b from-[rgba(0,226,128,0.05)] to-[rgba(0,226,128,0.12)] border border-[rgba(0,226,128,0.1)] text-[#027a48]",
    Pdf: "bg-gradient-to-b from-[rgba(69,127,243,0.05)] to-[rgba(69,127,243,0.12)] border border-[rgba(69,127,243,0.1)] text-[#437EF7]",
    Livestream:
      "bg-gradient-to-b from-[rgba(255,0,51,0.05)] to-[rgba(255,0,51,0.12)] border border-[rgba(255,0,51,0.1)] text-[#ff0033]",
    Image:
      "bg-gradient-to-b from-[rgba(235,158,15,0.05)] to-[rgba(235,158,15,0.12)] border border-[rgba(235,158,15,0.1)] text-[#EB9E0F]",
    Document:
      "bg-gradient-to-b from-[rgba(120,78,248,0.05)] to-[rgba(120,78,248,0.12)] border border-[rgba(120,78,248,0.1)] text-[#784ef8]",
  };
  return styles[type];
};

// Library Card Component
function LibraryCard({ item }: { item: LibraryItem }) {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] h-[383px] overflow-hidden relative rounded-[16px] w-full">
      {/* Background blur effect */}
      <div className="absolute bottom-[-1275px] flex h-[calc(1px*((var(--transform-inner-width)*0.866)+(var(--transform-inner-height)*0.5)))] items-center justify-center left-[calc(50%+889px)] translate-x-[-50%] w-[calc(1px*((var(--transform-inner-height)*0.866)+(var(--transform-inner-width)*0.5)))] pointer-events-none">
        <div className="flex-none rotate-[60deg] -scale-y-100">
          <div className="blur-md filter h-[540px] relative w-[663px]">
            <div className="absolute inset-0 opacity-30 overflow-hidden pointer-events-none">
              <img
                alt=""
                className="absolute h-[106.24%] left-[-21.02%] max-w-none top-[-2.39%] w-[120.73%]"
                src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnail Section */}
      <div className="absolute bg-[rgba(39,106,238,0.06)] h-[140px] left-[8px] overflow-hidden rounded-[11px] top-[8px] w-[calc(100%-16px)]">
        <div className="absolute h-[140px] left-0 top-0 w-full">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt={item.title}
              className="absolute h-full w-full object-cover"
              src={item.thumbnail}
            />
          </div>
        </div>

        {/* Badge */}
        {item.badge && (
          <div
            className={`absolute box-border content-stretch flex gap-[10px] items-center justify-center overflow-hidden px-[6px] py-[3px] rounded-[6px] top-[8px] left-[8px] ${
              item.badgeColor === "green"
                ? "bg-[#027a48]"
                : item.badgeColor === "red"
                ? "bg-[#ff0033]"
                : "bg-[rgba(255,255,255,0.15)]"
            }`}
          >
            <p className="font-medium leading-[1.4] not-italic relative shrink-0 text-[10px] text-white">
              {item.badge}
            </p>
          </div>
        )}

        {/* Play/Icon Button */}
        {item.thumbnailIcon && (
          <div className="absolute bg-[rgba(255,255,255,0.02)] left-1/2 overflow-hidden rounded-[60px] size-[40px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
            {/* Play button overlay */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-10 rounded-full bg-[rgba(255,255,255,0.3)] backdrop-blur-xs flex items-center justify-center">
              <Icon name={item.icon as IconName} height={22} width={22} />
            </div>
          </div>
        )}

        {/* Duration */}
        {item.duration && (
          <div className="absolute bg-[rgba(255,255,255,0.15)] box-border content-stretch flex gap-[10px] items-center justify-center overflow-hidden px-[8px] py-[5px] rounded-[8px] right-[8px] bottom-[8px]">
            <p className="font-medium leading-[1.4] not-italic relative shrink-0 text-[10px] text-white">
              {item.duration}
            </p>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="absolute content-stretch flex flex-col gap-3 items-start left-[16px] top-[164px] w-[calc(100%-32px)]">
        {/* Date and Type Badge */}
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <p className="font-normal leading-[1.4] not-italic relative shrink-0 text-[12px] text-paragraph-dark">
            Added {item.dateAdded}
          </p>
          <div
            className={`bg-gradient-to-b border border-solid box-border content-stretch flex gap-[4px] h-[24px] items-center justify-center px-[10px] py-[8px] relative rounded-[61px] shrink-0 ${getContentTypeBadgeStyle(
              item.contentType
            )}`}
          >
            <p className="font-medium leading-[17px] not-italic relative shrink-0 text-[10px] text-right">
              {item.contentType === "Pdf" ? "Pdf" : item.contentType}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[rgba(0,0,0,0.1)] w-full" />

        {/* Title and Description */}
        <div className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap">
              <p className="font-medium leading-normal relative shrink-0 text-dark text-[16px] w-full">
                {item.title}
              </p>
              <p className="font-normal leading-[1.4] relative shrink-0 text-[12px] text-paragraph-dark w-full">
                {item.description}
              </p>
            </div>
          </div>

          {/* Metadata and Actions */}
          <div className="content-stretch flex flex-col gap-4 items-start relative shrink-0 w-full">
            {/* Linked Tasks and File Size */}
            <div className="content-stretch flex font-medium items-center justify-between leading-[1.4] not-italic relative shrink-0 text-dark text-[10px] w-full">
              <p className="relative shrink-0">
                {typeof item.linkedTasks === "number"
                  ? `Linked to ${item.linkedTasks} task${
                      item.linkedTasks !== 1 ? "s" : ""
                    }`
                  : item.linkedTasks}
              </p>
              <p className="relative shrink-0">{item.fileSize}</p>
            </div>

            {/* Action Buttons */}
            <div className="content-stretch flex gap-2 justify-center items-center relative shrink-0 w-full">
              <button className="bg-gradient-to-b border border-[rgba(69,127,243,0.1)] border-solid box-border content-stretch flex from-[rgba(69,127,243,0.05)] gap-3 items-center justify-center px-8 py-3 relative rounded-[61px] shrink-0 to-[rgba(69,127,243,0.12)] hover:opacity-80 transition-opacity cursor-pointer">
                <p className="font-medium leading-[1.3] not-italic relative shrink-0 text-[14px] text-right text-[#437EF7]">
                  Preview
                </p>
              </button>
              <button className="border border-[rgba(21,86,216,0.3)] border-solid box-border content-stretch flex gap-3 items-center justify-center px-4 py-3 relative rounded-[61px] shrink-0 bg-primary-gradient hover:opacity-90 transition-opacity cursor-pointer">
                <p className="font-medium leading-[1.3] not-italic relative shrink-0 text-[14px] text-right text-white">
                  Assign to Task
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Library() {
  return (
    <div className="bg-[rgba(255,255,255,0.3)] overflow-hidden relative rounded-[24px] w-full p-5 border border-white ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {libraryData.map((item) => (
          <LibraryCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
