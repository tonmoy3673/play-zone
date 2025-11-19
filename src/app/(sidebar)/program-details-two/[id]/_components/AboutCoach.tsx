import { SectionHeader } from "@/components/shared/SectionHeader";
import Card from "@/components/ui/Card";
import Icon from "@/utils/icon";
import Image from "next/image";
import Link from "next/link";

const AboutCoach = () => {
  return (
    <Card className="bg-white/60">
      <SectionHeader title="About the Coach" />

      <div className="flex gap-4 flex-col md:flex-row">
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

        <div className="flex-1">
          <div className="mb-3">
            <h3 className="text-xl font-semibold text-dark">
              Coach David Martinez
            </h3>
            <p className="text-dark font-medium text-sm mt-1">
              Professional Soccer Coach • UEFA A License
            </p>
          </div>

          <div className="flex flex-wrap gap-6 mb-3">
            <div className="flex items-center gap-2">
              <Icon name="star" height={20} width={20} />
              <span className="text-dark text-sm font-medium">
                4.9 Avg Rating
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="award" className="text-dark" height={20} width={20} />
              <span className="text-dark text-sm font-medium">
                UEFA A License
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="users" className="text-dark" height={20} width={20} />
              <span className="text-dark text-sm font-medium">
                10+ Programs
              </span>
            </div>
          </div>

          <p className="text-dark text-xs mb-4">
            David Martinez is a former professional soccer player with over 15
            years of coaching experience. He has worked with youth academies,
            college programs, and professional teams across Europe and the
            United States. His specialized finishing programs have helped
            develop numerous professional strikers.
          </p>

          <Link
            href="/coach/profile/1"
            className="primary-gradient-text text-xs font-medium inline-flex items-center gap-2 transition-colors"
          >
            View Coach Profile
            <Icon
              name="right_arrow"
              className="text-[#276AEE]"
              height={20}
              width={20}
            />
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default AboutCoach;
