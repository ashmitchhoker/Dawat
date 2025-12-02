import { DawatLogo } from "./DawatLogo";

export const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/gallery/r23.jpg"
          alt="Delicious Mughlai Food"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/70 via-[#0a192f]/30 to-[#0a192f]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-32 md:mt-40">
        <div className="mb-8 flex justify-center">
          <div className="flex flex-col items-center">
            <DawatLogo />
            <div className="bg-[#c5a059] text-[#0a192f] px-8 py-1 font-bold uppercase tracking-wider text-sm md:text-base w-full max-w-md mt-4">
              Veg & Non Veg. Food
            </div>
          </div>
        </div>

        <p className="text-lg md:text-2xl text-gray-200 font-serif italic mb-10">
          A Culinary Journey through the Grandeur of India
        </p>
        <p className="text-[#c5a059] uppercase tracking-[0.2em] text-sm md:text-base animate-pulse">
          We deliver it safe.
        </p>
      </div>
    </section>
  );
};
