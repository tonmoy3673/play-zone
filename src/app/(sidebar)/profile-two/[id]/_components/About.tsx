"use client";

import Icon from "@/utils/icon";
import { useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { SectionHeader } from "@/components/shared/SectionHeader";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const aboutText =
    "Dedicated football quarterback with 8 years of competitive experience. Passionate about continuous improvement and helping teammates reach their potential. Currently focused on enhancing speed and agility while maintaining leadership skills. Currently focused on enhancing speed and agility while maintaining leadership skills.";

  return (
    <Card className="bg-white/60 lg:rounded-2xl">
      <SectionHeader title="About Me" className="mb-3" />

      <p className="text-dark/70 text-sm mb-5">
        {showMore ? aboutText : aboutText.slice(0, 220) + "... "}
        <span
          onClick={() => setShowMore(!showMore)}
          className="text-sm inline-block font-medium cursor-pointer primary-gradient-text"
        >
          {showMore ? "Show less" : "Show more"}
        </span>
      </p>

      <h1 className="text-base font-medium text-dark">Sports & Position</h1>

      <div className="mt-4 flex gap-2 flex-wrap">
        <Button className="flex items-center flex-nowrap rounded-full gap-2 h-8 px-3 py-1.5 text-[10px] font-medium bg-[linear-gradient(180deg,rgba(69,127,243,0.15)_0%,rgba(69,127,243,0.30)_100%)] border border-[#457ff31a]">
          <Icon name="bicycle_yellow" height={20} width={20} />
          <span className="primary-gradient-text text-[10px] font-medium">
            Casual Rider
          </span>
        </Button>
        <Button className="flex items-center flex-nowrap rounded-full gap-2 h-8 px-3 py-1.5 text-[10px] font-medium bg-[linear-gradient(180deg,rgba(235,158,15,0.15)_0%,rgba(235,158,15,0.30)_100%)] border border-[#EB9E0F1A]">
          <Icon
            name="users"
            className="text-[#FFB42A]"
            height={20}
            width={20}
          />
          <span className="bg-[linear-gradient(207deg,#FFB42A_39.14%,#EB9E0F_71.52%)] bg-clip-text text-transparent text-[10px] font-medium">
            Group Rides
          </span>
        </Button>

        <Button className="flex items-center flex-nowrap rounded-full gap-2 h-8 px-3 py-1.5 text-[10px] font-medium bg-[linear-gradient(180deg,rgba(255,0,51,0.05)_0%,rgba(255,0,51,0.12)_100%)] border border-[#FF00331A]">
          <Icon name="bicycle_red" height={20} width={20} />
          <span className="text-[#F03] text-[10px] font-medium">Cyclist</span>
        </Button>

        <Button className="flex items-center flex-nowrap rounded-full gap-2 h-8 px-3 py-1.5 text-[10px] font-medium bg-primary-gradient border border-[#457FF31A]">
          <Icon name="plus" height={20} width={20} className="text-white" />
          <span className="text-white text-[10px] font-medium">Add Tag</span>
        </Button>
      </div>
    </Card>
  );
};

export default About;
