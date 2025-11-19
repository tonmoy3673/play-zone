import Icon from "@/utils/icon";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import React, { useState } from "react";
import { SectionHeader } from "@/components/shared/SectionHeader";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const aboutText =
    "Dedicated football quarterback with 8 years of competitive experience. Passionate about continuous improvement and helping teammates reach their potential. Currently focused on enhancing speed and agility while maintaining leadership skills. Currently focused on enhancing speed and agility while maintaining leadership skills.";

  return (
    <Card className="bg-white/60 lg:rounded-2xl">
      <SectionHeader title="About Me" className="mb-4" />

      <p className="text-dark/70 text-sm mb-5">
        {showMore ? aboutText : aboutText.slice(0, 220) + "... "}
        <span
          onClick={() => setShowMore(!showMore)}
          className="text-sm inline-block font-medium cursor-pointer primary-gradient-text"
        >
          {showMore ? "Show less" : "Show more"}
        </span>
      </p>

      <SectionHeader title="Sports & Position" className="mb-4" />

      <div className="flex items-center flex-wrap gap-2">
        <Badge className="h-8">
          <Icon
            name="american_football"
            height={20}
            width={20}
            className="text-[#5C8FF7]"
          />
          QB
        </Badge>
        <Badge className="h-8" variant="warning">
          <Icon
            name="workout_stretching"
            height={20}
            width={20}
            className="text-[#FFB42A]"
          />
          Sprinter
        </Badge>
        <Badge className="h-8" variant="danger">
          <Icon
            name="star_half"
            height={20}
            width={20}
            className="text-[#FF0033]"
          />
          Captain
        </Badge>
      </div>
    </Card>
  );
};

export default About;
