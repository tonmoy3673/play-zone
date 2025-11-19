"use client";

import Image from "next/image";
import Card from "@/components/ui/Card";
import { SectionHeader } from "@/components/shared/SectionHeader";

import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Icon from "@/utils/icon";

const RelatedClips = () => {
  return (
    <div>
      <SectionHeader title="Related Clips" className="mb-4" />
      <div>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            600: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {[1, 2, 3, 4].map((item) => (
            <SwiperSlide key={item}>
              <Card
                key={item}
                className="bg-white/60 border border-[#E3ECFD] md:rounded-2xl p-2 group"
              >
                <div className="relative aspect-[261/183] bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src={
                      "https://images.unsplash.com/photo-1622659097972-68f1d8c1829f?q=80&w=1171&auto=format&fit=crop"
                    }
                    fill
                    alt="Banner"
                    className="object-cover size-full group-hover:scale-105 transition-all duration-300"
                  />

                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center size-10 rounded-full bg-[#FFFFFF05] backdrop-blur-xs border border-white">
                    <Icon
                      name="play_circle"
                      height={24}
                      width={24}
                      className="text-white"
                    />
                  </div>
                </div>

                <div className="p-2">
                  <div className="flex items-center gap-2">
                    <Image
                      src="https://images.unsplash.com/photo-1631659718597-1b62ad76da3a?w=200&h=200&fit=crop"
                      alt={"Jason Martinez"}
                      height={36}
                      width={36}
                      className="size-9 rounded-full object-cover"
                    />
                    <div className="font-medium grid space-x-0.5">
                      <span className="text-sm text-dark">Jason Martinez</span>
                      <span className="text-xs text-dark/70">
                        Quarterback • Senior
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RelatedClips;
