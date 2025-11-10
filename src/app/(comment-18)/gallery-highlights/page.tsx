import Image from "next/image";
import Icon from "@/utils/icon";
import BackBtn from "@/components/shared/BackBtn";

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
      "https://images.unsplash.com/photo-1733648203550-0cacea85fa35?w=600&h=400&fit=crop",
    postedTime: "Posted 3 days ago",
  },
  {
    id: "2",
    title: "Official College Visit",
    image:
      "https://images.unsplash.com/photo-1720716428816-4c42d9c0cbd2?w=600&h=400&fit=crop",
    postedTime: "1 Week Ago",
  },
  {
    id: "3",
    title: "Hawaiian Islands 7v7 QB Camp Photo",
    image:
      "https://images.unsplash.com/photo-1720716429002-cf8206d582b5?w=600&h=400&fit=crop",
    postedTime: "2 Week Ago",
  },
  {
    id: "4",
    title: "vs. Saint Peters",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    postedTime: "3 Week Ago",
  },
  {
    id: "5",
    title: "vs. Roosevelt Highlights",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
    postedTime: "Posted 3 days ago",
  },
  {
    id: "6",
    title: "Official College Visit",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    postedTime: "1 Week Ago",
  },
  {
    id: "7",
    title: "Hawaiian Islands 7v7 QB Camp Photo",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&h=400&fit=crop",
    postedTime: "2 Week Ago",
  },
  {
    id: "8",
    title: "vs. Saint Peters",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    postedTime: "3 Week Ago",
  },
  {
    id: "9",
    title: "vs. Saint Peters",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    postedTime: "3 Week Ago",
  },
];

const GalleryHighLightsPage = () => {
  return (
    <div className="bg-white/30 backdrop-blur-3xl mx-auto rounded-2xl md:rounded-3xl border border-white p-8">
      <BackBtn title="Gallery & Highlights" href="/" />

      <div className="grid grid-cols-3 gap-4">
        {galleryData.map((item) => (
          <div
            key={item.id}
            className="relative mx-auto h-[266px] w-full rounded-2xl overflow-hidden group cursor-pointer"
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
};

export default GalleryHighLightsPage;
