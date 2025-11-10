import { SectionHeader } from "@/components/shared/SectionHeader";
import Icon from "@/utils/icon";
import Image from "next/image";

const AboutCoach = () => {
  return (
    <div className="p-5 rounded-2xl border backdrop-blur-3xl bg-[#ffffff4d] border-white">
      <SectionHeader title="About the Coach" />

      <div className="flex gap-4 flex-col md:flex-row">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div className="w-24 h-24 relative rounded-full border-4 border-[#68B0EA] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fit=crop&q=80&w=580"
              alt="Coach David Martinez"
              fill
              className="size-full object-cover"
            />
          </div>
        </div>

        {/* Coach Details */}
        <div className="flex-1">
          <div className="mb-3">
            <h3 className="text-xl font-semibold text-dark">
              Coach David Martinez
            </h3>
            <p className="text-dark font-medium text-sm mt-1">
              Professional Soccer Coach • UEFA A License
            </p>
          </div>

          {/* Badges Row */}
          <div className="flex flex-wrap gap-6 mb-3">
            <div className="flex items-center gap-2">
              <Icon name="star" height={20} width={20} />
              <span className="text-dark text-sm font-medium">
                4.9 Avg Rating
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="award" height={20} width={20} />
              <span className="text-dark text-sm font-medium">
                UEFA A License
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="users" height={20} width={20} />
              <span className="text-dark text-sm font-medium">
                10+ Programs
              </span>
            </div>
          </div>

          {/* Bio Text */}
          <p className="text-dark text-xs mb-4">
            David Martinez is a former professional soccer player with over 15
            years of coaching experience. He has worked with youth academies,
            college programs, and professional teams across Europe and the
            United States. His specialized finishing programs have helped
            develop numerous professional strikers.
          </p>

          <a
            href="#"
            className="bg-[linear-gradient(177deg,#5C8FF7_10.06%,#276AEE_62.94%)] bg-clip-text text-transparent text-xs font-medium inline-flex items-center gap-1 transition-colors"
          >
            View Coach Profile
            <Icon name="right_blue_arrow" height={20} width={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutCoach;
