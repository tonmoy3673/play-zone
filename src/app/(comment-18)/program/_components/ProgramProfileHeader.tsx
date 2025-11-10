import Icon from "@/utils/icon";
import { AnimatedButton } from "@/components/ui/Button";

export default function ProgramProfileHeader() {
  return (
    <div className="relative bg-[url('https://i.ibb.co.com/WvNktNfW/9f447944b31f2dfc586a06da40a72805b14e4e27.png')] bg-cover bg-no-repeat bg-center z-[1] rounded-3xl overflow-hidden relative p-8 pt-12">
      <div className="bg-[linear-gradient(270deg,rgba(0,0,0,0.0)_0%,rgba(0,0,0,0.90)_100%)] inset-0 absolute z-[-1]"></div>

      <div className="inline-flex"></div>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
        Elite Speed Training
      </h1>

      <div className="flex items-center gap-4 mt-2 mb-6">
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-1">
            <Icon name="star" height={20} width={20} />
            <Icon name="star" height={20} width={20} />
            <Icon name="star" height={20} width={20} />
            <Icon name="star" height={20} width={20} />
            <Icon name="star_half" height={20} width={20} />
          </div>
          <div className="text-2xl font-semibold text-white">
            4.9 <span className="text-sm font-medium">(234)</span>
          </div>
        </div>
        <div className="w-px h-3 bg-white/30"></div>
        <span className="text-base font-medium text-white">8 Weeks</span>
        <div className="w-px h-3 bg-white/30"></div>
        <span className="text-base font-medium text-white">Football</span>
      </div>

      <p className="text-sm text-white max-w-[525px]">
        Transform your athletic performance with this comprehensive speed
        training program designed by Olympic coach Michael Johnson. Includes
        video tutorials, live sessions, and personalized feedback.
      </p>

      <div className="flex items-center gap-4 mt-8">
        <AnimatedButton className="text-white font-normal px-5 py-2.5 md:px-6 md:py-5 text-sm md:h-14 rounded-full transition-all whitespace-nowrap mt-6 md:mt-8 bg-[linear-gradient(177deg,#5C8FF7_10.06%,#276AEE_62.94%)]">
          Join Program
        </AnimatedButton>
        <AnimatedButton className="text-white font-normal px-5 py-2.5 md:px-6 md:py-5 text-sm md:h-14 rounded-full transition-all whitespace-nowrap mt-6 md:mt-8 bg-[linear-gradient(177deg,#5C8FF7_10.06%,#276AEE_62.94%)]">
          Learn More
        </AnimatedButton>
      </div>
    </div>
  );
}
