import { AnimatedButton } from "@/components/ui/Button";

const Banner = () => {
  return (
    <div
      className="relative p-6 sm:p-8 md:p-10 lg:p-12 lg:h-[480px] rounded-2xl md:rounded-3xl overflow-hidden bg-cover bg-center text-white flex items-center z-[1] after:absolute after:inset-0 after:bg-[linear-gradient(270deg,rgba(0,0,0,0.00)_0%,rgba(0,0,0,0.60)_100%)] after:z-[-1]"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1485313260896-6e6edf486858?fit=crop&q=80&w=1170')",
      }}
    >
      <div className="max-w-[387px]">
        <h1 className="text-3xl md:text-4xl lg:text-5xl mb-3 font-semibold">
          Explore Athletes
        </h1>
        <p className="text-sm">
          Connect with top-performing athletes across different sports,
          positions, and skill levels. Find the perfect talent for your team or
          program.
        </p>

        <AnimatedButton className="text-white font-normal px-5 py-2.5 md:px-6 md:py-5 text-sm md:h-14 rounded-full transition-all whitespace-nowrap mt-6 md:mt-8 bg-primary-gradient">
          Find Athletes
        </AnimatedButton>
      </div>
    </div>
  );
};

export default Banner;
