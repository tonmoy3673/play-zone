import Image from "next/image";
import Icon from "@/utils/icon";

export interface GalleryProp {
  id: string;
  title: string;
  image: string;
  postedTime: string;
}

const GalleryCard = ({ gallery }: { gallery: GalleryProp }) => {
  return (
    <div className="relative mx-auto w-full  md:h-[266px] rounded-[20px] overflow-hidden group cursor-pointer">
      <Image
        width={600}
        height={400}
        src={gallery.image || "/placeholder.svg"}
        alt={gallery.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />

      <div className="absolute inset-x-0 bottom-0 h-[65%] bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_0%,#000_87.6%)]" />

      <div className="absolute inset-0 flex flex-col justify-between p-5">
        <div className="flex justify-center items-center">
          <div className="size-12 absolute top-[45%] left-[50%] -translate-y-1/2 -translate-x-1/2 backdrop-blur-[2px] border-t border-t-white border-b border-b-white rounded-full flex items-center justify-center">
            <Icon name="play" height={20} width={20} className="text-white" />
          </div>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold md:mb-2 max-md:line-clamp-1">
            {gallery.title}
          </h3>
          <div className="inline-block bg-dark rounded-md text-white px-2 py-1.5 h-[26px] text-[10px] font-semibold">
            {gallery.postedTime}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
