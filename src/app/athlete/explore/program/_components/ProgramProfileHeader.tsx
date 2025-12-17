import Icon from "@/utils/icon";
import { AnimatedButton } from "@/components/ui/Button";

export default function ProgramProfileHeader() {
  return (
    <div className="relative bg-[url('https://i.ibb.co.com/WvNktNfW/9f447944b31f2dfc586a06da40a72805b14e4e27.png')] bg-cover bg-no-repeat bg-center z-[1] rounded-2xl lg:rounded-3xl overflow-hidden relative p-8 md:pt-10 lg:pt-12">
      <div className="bg-[linear-gradient(83deg,#000_15.95%,rgba(0,0,0,0.00)_79.54%)] inset-0 absolute z-[-1]"></div>

      <div className="inline-flex items-center gap-2 px-3 py-1.5 h-8 mb-2.5 rounded-full border border-[#EB9E0F1A] bg-[linear-gradient(180deg,rgba(235,158,15,0.15)_0%,rgba(235,158,15,0.30)_100%)]">
        <Icon name="license_yellow" height={20} width={20} />
        <span className="bg-[linear-gradient(207deg,#FFB42A_39.14%,#EB9E0F_71.52%)] bg-clip-text text-transparent text-[10px] font-medium">
          FEATURED PROGRAM
        </span>
      </div>

      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
        Elite Speed Training
      </h1>

      <div className="flex md:items-center flex-col md:flex-row gap-x-4 mt-2 mb-4 sm:mb-6 flex-wrap">
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-1">
            <Icon name="star" height={16} width={16} />
            <Icon name="star" height={16} width={16} />
            <Icon name="star" height={16} width={16} />
            <Icon name="star" height={16} width={16} />
            <Icon
              name="star_half"
              className="text-[#FF8C1A]"
              height={16}
              width={16}
            />
          </div>
          <div className="text-2xl font-semibold text-white">
            4.9 <span className="text-sm">(234)</span>
          </div>
        </div>

        <div className="w-px h-3 bg-white/30 md:block hidden"></div>

        <div className="flex items-center gap-4">
          <span className="text-base font-medium text-white">8 Weeks</span>
          <div className="w-px h-3 bg-white/30"></div>
          <span className="text-base font-medium text-white">Football</span>
        </div>
      </div>

      <p className="text-sm text-white max-w-[525px]">
        Transform your athletic performance with this comprehensive speed
        training program designed by Olympic coach Michael Johnson. Includes
        video tutorials, live sessions, and personalized feedback.
      </p>

      <div className="flex items-center gap-4 mt-4 sm:mt-6 md:mt-8">
        <AnimatedButton className="text-white px-6 py-2.5 h-14 text-sm font-medium  rounded-full transition-all whitespace-nowrap bg-primary-gradient">
          Join Program
        </AnimatedButton>
        <AnimatedButton className="text-white flex items-center gap-1.5 backdrop-blur-xs px-6 h-14  text-sm font-medium rounded-full transition-all whitespace-nowrap bg-white/10 relative after:absolute after:inset-0 after:border after:border-x-white/30 after:border-y-white/50 after:rounded-full">
          Save Program
        </AnimatedButton>
      </div>
    </div>
  );
}
