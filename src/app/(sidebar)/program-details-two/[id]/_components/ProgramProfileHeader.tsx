import Icon from "@/utils/icon";
import { AnimatedButton } from "@/components/ui/Button";

export default function ProgramProfileHeader() {
  return (
    <div className="relative bg-[url('https://i.ibb.co.com/WvNktNfW/9f447944b31f2dfc586a06da40a72805b14e4e27.png')] bg-cover bg-no-repeat bg-center z-[1] rounded-3xl overflow-hidden relative p-6 md:p-10 lg:p-12">
      <div className="bg-[linear-gradient(83deg,#000_13.23%,rgba(0,0,0,0.00)_62.09%)] inset-0 absolute z-[-1]"></div>

      <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-2 rounded-full border border-[#EB9E0F1A] bg-[linear-gradient(180deg,rgba(235,158,15,0.15)_0%,rgba(235,158,15,0.30)_100%)]">
        <Icon name="license_yellow" height={20} width={20} />
        <span className="bg-[linear-gradient(207deg,#FFB42A_39.14%,#EB9E0F_71.52%)] bg-clip-text text-transparent text-[10px] font-medium">
          SOCCER TRAINING
        </span>
      </div>

      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
        Elite Speed Training
      </h1>

      <div className="flex items-center gap-x-6 gap-y-2 mt-1.5 flex-wrap">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Icon name="star" height={20} width={20} />
            <Icon name="star" height={20} width={20} />
            <Icon name="star" height={20} width={20} />
            <Icon name="star" height={20} width={20} />
            <Icon
              name="star_half"
              className="text-[#FF8C1A]"
              height={20}
              width={20}
            />
          </div>
          <div className="text-2xl font-semibold text-white">
            4.9 <span className="text-sm font-medium">(234)</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Icon name="users" height={20} width={20} className="text-white" />
          <p className="text-base font-medium text-white">
            1,248 <span className="text-white/65">Athletes Enrolled</span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Icon
            name="analytics_up"
            height={20}
            width={20}
            className="text-white"
          />
          <span className="text-base font-medium text-white">Advanced</span>
        </div>
      </div>

      <div className="flex items-center flex-wrap gap-2 sm:gap-4 mt-8">
        <AnimatedButton className="text-white px-6 text-sm font-medium h-14 rounded-full transition-all whitespace-nowrap bg-primary-gradient">
          Enroll Now - $129
        </AnimatedButton>
        <AnimatedButton className="text-white flex items-center gap-1.5 backdrop-blur-xs px-6 text-sm font-medium h-14 rounded-full transition-all whitespace-nowrap bg-white/10 relative after:absolute after:inset-0 after:border after:border-x-white/30 after:border-y-white/50 after:rounded-full">
          <Icon name="bookmark" height={20} width={20} />
          Save Program
        </AnimatedButton>
      </div>
    </div>
  );
}
